import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const formData = await request.json();
    console.warn('Form Data:', formData); // Changed to console.warn
    return NextResponse.json({ message: 'Form data received' });
  } catch {
    return NextResponse.json({ message: 'Error processing form data' }, { status: 500 });
  }
}