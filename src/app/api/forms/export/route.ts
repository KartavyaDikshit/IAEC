import { NextRequest, NextResponse } from 'next/server';
import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.NEON_DATABASE_URL!);

// Function to convert JSON to CSV
const convertToCSV = (data: any[]) => {
  const headers = ['ID', 'Name', 'Email', 'Phone', 'Form Type', 'Destination', 'Test', 'Message', 'Submitted On'];
  const rows = data.map(submission => {
    const row = [
      submission.id,
      submission.name,
      submission.email,
      submission.phone,
      submission.formType,
      submission.data?.destination || '',
      submission.data?.test || '',
      submission.data?.message || '',
      new Date(submission.createdAt).toLocaleString(),
    ];
    return row.map(value => `"${String(value).replace(/"/g, '""')}"`);
  });
  return [headers.join(','), ...rows.map(row => row.join(','))].join('\n');
};

export async function GET(_req: NextRequest) {
  try {
    const submissions = await sql`SELECT * FROM form_submissions`;
    const csv = convertToCSV(submissions);

    return new NextResponse(csv, {
      status: 200,
      headers: {
        'Content-Type': 'text/csv',
        'Content-Disposition': 'attachment; filename="form_submissions.csv"',
      },
    });
  } catch (error) {
    console.error('Error exporting form submissions:', error);
    return NextResponse.json({ message: 'Error exporting form submissions' }, { status: 500 });
  }
}