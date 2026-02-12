import { NextRequest, NextResponse } from 'next/server';
import { transporter, mailOptions } from '@/lib/nodemailer';
import { neon } from '@neondatabase/serverless';
import fs from 'fs/promises';
import path from 'path';

const FORMS_FILE = path.join(process.cwd(), 'data/form-submissions.json');
const NEON_DATABASE_URL = process.env.NEON_DATABASE_URL;

// Helper to read submissions
async function getSubmissions() {
  if (NEON_DATABASE_URL) {
    try {
      const sql = neon(NEON_DATABASE_URL);
      const rows = await sql`SELECT * FROM "FormSubmission" ORDER BY "createdAt" DESC`;
      
      // Map database rows to the format expected by the frontend
      return rows.map(row => ({
        id: row.id.toString(),
        name: row.name,
        email: row.email,
        phone: row.phone,
        formType: row.formType,
        data: {
          destination: row.destination,
          message: row.message,
          test: row.testPreference
        },
        createdAt: row.createdAt
      }));
    } catch (error) {
      console.error('Error fetching from Neon:', error);
      // Fallback to local file if DB fails and we're local
    }
  }

  try {
    const data = await fs.readFile(FORMS_FILE, 'utf-8');
    const lines = data.split('\n').filter(line => line.trim() !== '');
    return lines.map(line => {
      try {
        const parsed = JSON.parse(line);
        if (!parsed.createdAt && parsed.timestamp) {
          parsed.createdAt = parsed.timestamp;
        }
        return parsed;
      } catch {
        return null;
      }
    }).filter(item => item !== null);
  } catch {
    return [];
  }
}

// Helper to save submission
async function saveSubmission(submission: any) {
    if (NEON_DATABASE_URL) {
      try {
        const sql = neon(NEON_DATABASE_URL);
        const { name, email, phone, formType, data, createdAt } = submission;
        const destination = data?.destination || null;
        const message = data?.message || null;
        const testPreference = data?.test || data?.testPreference || null;

        const result = await sql`
          INSERT INTO "FormSubmission" (name, email, phone, destination, message, "formType", "testPreference", "createdAt")
          VALUES (${name}, ${email}, ${phone}, ${destination}, ${message}, ${formType}, ${testPreference}, ${createdAt})
          RETURNING id
        `;
        return result[0].id;
      } catch (error) {
        console.error('Error saving to Neon:', error);
        if (process.env.NODE_ENV === 'production') {
          throw error;
        }
      }
    }

    // Fallback for local development
    try {
      await fs.mkdir(path.dirname(FORMS_FILE), { recursive: true });
      const line = JSON.stringify(submission) + '\n';
      await fs.appendFile(FORMS_FILE, line);
      return submission.id || 'local-id';
    } catch (error) {
      console.error('Error saving to local file:', error);
      if (process.env.NODE_ENV === 'production') {
        throw error;
      }
      return 'local-id';
    }
}

export async function GET() {
  try {
    const submissions = await getSubmissions();
    if (Array.isArray(submissions)) {
      submissions.sort((a: any, b: any) => {
          const dateA = new Date(a.createdAt || 0).getTime();
          const dateB = new Date(b.createdAt || 0).getTime();
          return dateB - dateA;
      });
    }
    return NextResponse.json(submissions);
  } catch (error: unknown) {
    console.error('Error fetching submissions:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ message: 'Error fetching submissions', details: errorMessage }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const newSubmission = await req.json();

    if (!newSubmission || Object.keys(newSubmission).length === 0) {
      return NextResponse.json({ message: 'Submission data is empty' }, { status: 400 });
    }

    const { formType, name, email, phone, data } = newSubmission;

    const submission = {
        formType,
        name,
        email,
        phone,
        data,
        createdAt: new Date().toISOString()
    };

    const submissionId = await saveSubmission(submission);

    try {
      await transporter.sendMail({
        ...mailOptions,
        subject: `New Form Submission: ${submission.formType}`,
        text: `A new form has been submitted.
        
        Form Type: ${submission.formType}
        Name: ${submission.name}
        Email: ${submission.email}
        Phone: ${submission.phone}
        
        Other Details:
        ${JSON.stringify(submission.data, null, 2)}
        `,
        html: `<h1>New Form Submission</h1>
        <p>A new form has been submitted.</p>
        <h2>Details</h2>
        <ul>
          <li><strong>Form Type:</strong> ${submission.formType}</li>
          <li><strong>Name:</strong> ${submission.name}</li>
          <li><strong>Email:</strong> ${submission.email}</li>
          <li><strong>Phone:</strong> ${submission.phone}</li>
        </ul>
        <h2>Other Details</h2>
        <pre>${JSON.stringify(submission.data, null, 2)}</pre>
        `,
      });
    } catch (emailError) {
      console.error('Email sending error:', emailError);
    }

    return NextResponse.json({ message: 'Form submitted successfully', submissionId });
  } catch (error: unknown) {
    console.error('Form submission error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ message: 'Error submitting form', details: errorMessage }, { status: 500 });
  }
}