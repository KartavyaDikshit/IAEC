import { NextRequest, NextResponse } from 'next/server';
import { transporter, mailOptions } from '@/lib/nodemailer';
import fs from 'fs/promises';
import path from 'path';
import { randomUUID } from 'crypto';

const FORMS_FILE = path.join(process.cwd(), 'data/form-submissions.json');

// Helper to read submissions
async function getSubmissions() {
  try {
    const data = await fs.readFile(FORMS_FILE, 'utf-8');
    // Handle NDJSON (newline delimited JSON)
    const lines = data.split('\n').filter(line => line.trim() !== '');
    return lines.map(line => {
      try {
        const parsed = JSON.parse(line);
        // Ensure createdAt exists
        if (!parsed.createdAt && parsed.timestamp) {
          parsed.createdAt = parsed.timestamp;
        }
        return parsed;
      } catch {
        return null;
      }
    }).filter(item => item !== null);
  } catch {
    // If file doesn't exist, return empty array
    return [];
  }
}

// Helper to append submission
async function saveSubmission(submission: any) {
    // Ensure directory exists
    await fs.mkdir(path.dirname(FORMS_FILE), { recursive: true });
    const line = JSON.stringify(submission) + '\n';
    await fs.appendFile(FORMS_FILE, line);
}

export async function GET() {
  try {
    const submissions = await getSubmissions();
    // Sort by createdAt desc
    submissions.sort((a: any, b: any) => {
        const dateA = new Date(a.createdAt || 0).getTime();
        const dateB = new Date(b.createdAt || 0).getTime();
        return dateB - dateA;
    });
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
        id: randomUUID(),
        formType,
        name,
        email,
        phone,
        data,
        createdAt: new Date().toISOString()
    };

    await saveSubmission(submission);

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
      // Still return a success response to the user even if email fails
    }

    return NextResponse.json({ message: 'Form submitted successfully', submissionId: submission.id });
  } catch (error: unknown) {
    console.error('Form submission error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ message: 'Error submitting form', details: errorMessage }, { status: 500 });
  }
}