import { NextRequest, NextResponse } from 'next/server';
import { neon } from '@neondatabase/serverless';
import { revalidatePath } from 'next/cache';

const DATABASE_URL = "postgresql://neondb_owner:npg_tme8NEi3CQAa@ep-broad-morning-a1np73uf-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require";
const sql = neon(DATABASE_URL);

export async function GET() {
  try {
    const testimonials = await sql`SELECT id, name, testimonial as content, rating, "imageUrl", "createdAt", university, course, country FROM "Testimonial" ORDER BY "createdAt" DESC`;
    return NextResponse.json({ testimonials });
  } catch (error: unknown) {
    console.error('Error fetching testimonials:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ message: 'Error fetching testimonials', details: errorMessage }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const newTestimonial = await req.json();

    if (!newTestimonial || Object.keys(newTestimonial).length === 0) {
      return NextResponse.json({ message: 'Testimonial data is empty' }, { status: 400 });
    }

    const { name, testimonial, rating, imageUrl, university, course, country } = newTestimonial;

    const result = await sql`
      INSERT INTO "Testimonial" (name, testimonial, rating, "imageUrl", university, course, country)
      VALUES (${name}, ${testimonial}, ${rating}, ${imageUrl}, ${university}, ${course}, ${country})
      RETURNING id, name, testimonial, rating, "imageUrl", "createdAt", university, course, country;
    `;

    const createdTestimonial = result[0];
    revalidatePath('/testimonials');
    revalidatePath('/'); // Revalidate home page as well

    return NextResponse.json({ message: 'Testimonial submitted successfully', testimonialId: createdTestimonial.id });
  } catch (error: unknown) {
    console.error('Testimonial submission error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ message: 'Error submitting testimonial', details: errorMessage }, { status: 500 });
  }
}