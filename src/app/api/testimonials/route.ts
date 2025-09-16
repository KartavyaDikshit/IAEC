
import { NextResponse, NextRequest } from 'next/server';
import fs from 'fs';
import path from 'path';

const dataFilePath = path.join(process.cwd(), 'data', 'testimonials.json');

interface Testimonial {
  id: number;
  name: string;
  quote: string;
}

export async function GET() {
  try {
    const fileContents = fs.readFileSync(dataFilePath, 'utf8');
    const testimonials: Testimonial[] = JSON.parse(fileContents);
    return NextResponse.json({ testimonials: testimonials });
  } catch (error) {
    console.error('Error reading testimonials data:', error);
    return NextResponse.json({ message: 'Error reading testimonials data' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  const id = request.nextUrl.searchParams.get('id');
  if (!id) {
    return NextResponse.json({ message: 'Missing ID parameter' }, { status: 400 });
  }
  try {
    const updatedTestimonial = await request.json();
    const fileContents = fs.readFileSync(dataFilePath, 'utf8');
    const testimonials: Testimonial[] = JSON.parse(fileContents);
    const testimonialIndex = testimonials.findIndex((t) => t.id === parseInt(id));

    if (testimonialIndex === -1) {
      return NextResponse.json({ message: 'Testimonial not found' }, { status: 404 });
    }

    testimonials[testimonialIndex] = { ...testimonials[testimonialIndex], ...updatedTestimonial };
    fs.writeFileSync(dataFilePath, JSON.stringify(testimonials, null, 2));

    return NextResponse.json(testimonials[testimonialIndex]);
  } catch {
    return NextResponse.json({ message: 'Error updating testimonials data' }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  const id = request.nextUrl.searchParams.get('id');

  if (!id) {
    return NextResponse.json({ message: 'Missing ID parameter' }, { status: 400 });
  }

  try {
    const fileContents = fs.readFileSync(dataFilePath, 'utf8');
    const testimonials: Testimonial[] = JSON.parse(fileContents);
    const testimonialIndex = testimonials.findIndex((t) => t.id === parseInt(id));

    if (testimonialIndex === -1) {
      return NextResponse.json({ message: 'Testimonial not found' }, { status: 404 });
    }

    testimonials.splice(testimonialIndex, 1);
    fs.writeFileSync(dataFilePath, JSON.stringify(testimonials, null, 2));

    return NextResponse.json({ message: 'Testimonial deleted successfully' });
  } catch {
    return NextResponse.json({ message: 'Error deleting testimonials data' }, { status: 500 });
  }
}
