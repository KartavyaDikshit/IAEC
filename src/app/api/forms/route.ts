import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs/promises'
import path from 'path'

const dataFilePath = path.join(process.cwd(), 'data/form-submissions.json')

export async function GET() {
  try {
    const fileContent = await fs.readFile(dataFilePath, 'utf-8');
    const submissions = fileContent
      .split('\n')
      .filter(line => line.trim() !== '') // Filter out empty lines
      .map(line => JSON.parse(line));
    return NextResponse.json(submissions);
  } catch (error: unknown) {
    console.error('Error fetching submissions:', error);
    return NextResponse.json({ message: 'Error fetching submissions', details: (error as Error).message || 'Unknown error' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const newSubmission = await req.json();

    if (!newSubmission || Object.keys(newSubmission).length === 0) {
      return NextResponse.json({ message: 'Submission data is empty' }, { status: 400 });
    }

    const submissionWithTimestamp = { ...newSubmission, timestamp: new Date().toISOString() };
    const submissionString = JSON.stringify(submissionWithTimestamp);

    await fs.appendFile(dataFilePath, submissionString + '\n', 'utf-8');

    return NextResponse.json({ message: 'Form submitted successfully' });
  } catch (error: unknown) {
    console.error('Form submission error:', error);
    return NextResponse.json({ message: 'Error submitting form', details: (error as Error).message || 'Unknown error' }, { status: 500 });
  }
}
