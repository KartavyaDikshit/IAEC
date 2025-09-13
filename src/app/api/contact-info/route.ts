import { NextResponse } from 'next/server';
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join } from 'path';

const contactPath = join(process.cwd(), 'data/contact-info.json');

export async function GET() {
  try {
    if (!existsSync(contactPath)) {
      return NextResponse.json({ error: 'Contact info not found' }, { status: 404 });
    }

    const contactInfo = JSON.parse(readFileSync(contactPath, 'utf8'));
    return NextResponse.json(contactInfo);
  } catch (error) {
    console.error('Failed to load contact info:', error);
    return NextResponse.json({ error: 'Failed to load contact info' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const updatedContact = {
      ...body,
      updatedAt: new Date().toISOString()
    };

    writeFileSync(contactPath, JSON.stringify(updatedContact, null, 2));
    return NextResponse.json(updatedContact);
  } catch (error) {
    console.error('Failed to update contact info:', error);
    return NextResponse.json({ error: 'Failed to update contact info' }, { status: 500 });
  }
}