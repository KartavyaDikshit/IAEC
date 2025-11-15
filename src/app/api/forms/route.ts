import { NextRequest, NextResponse } from 'next/server';
import { neon } from '@neondatabase/serverless';
import { transporter, mailOptions } from '@/lib/nodemailer';

const DATABASE_URL = "postgresql://neondb_owner:npg_tme8NEi3CQAa@ep-broad-morning-a1np73uf-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require";
const sql = neon(DATABASE_URL);

export async function GET() {
  try {
    const submissions = await sql`SELECT * FROM "FormSubmission" ORDER BY "createdAt" DESC`;
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

    const result = await sql`
      INSERT INTO "FormSubmission" ("formType", name, email, phone, data)
      VALUES (${formType}, ${name}, ${email}, ${phone}, ${JSON.stringify(data)})
      RETURNING id, "formType", name, email, phone, data, "createdAt";
    `;

    const submission = result[0];

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
