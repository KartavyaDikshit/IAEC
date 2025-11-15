
import { NextRequest, NextResponse } from 'next/server';
import { neon } from '@neondatabase/serverless';
import { revalidatePath } from 'next/cache';

const DATABASE_URL = "postgresql://neondb_owner:npg_tme8NEi3CQAa@ep-broad-morning-a1np73uf-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require";
const sql = neon(DATABASE_URL);

export async function PUT(req: NextRequest, { params }: any) {
  try {
    const { id } = params;
    const updatedTestimonial = await req.json();

    if (!updatedTestimonial || Object.keys(updatedTestimonial).length === 0) {
      return NextResponse.json({ message: 'Testimonial data is empty' }, { status: 400 });
    }

    const { name, testimonial, rating, imageUrl, university, course, country } = updatedTestimonial;

    const result = await sql`
      UPDATE "Testimonial"
      SET name = ${name}, testimonial = ${testimonial}, rating = ${rating}, "imageUrl" = ${imageUrl}, university = ${university}, course = ${course}, country = ${country}
      WHERE id = ${parseInt(id)}
      RETURNING id, name, testimonial, rating, "imageUrl", "createdAt", university, course, country;
    `;

    if (result.length === 0) {
      return NextResponse.json({ message: 'Testimonial not found' }, { status: 404 });
    }

    const testimonialEntry = result[0];
    revalidatePath('/testimonials');
    revalidatePath('/'); // Revalidate home page as well

    return NextResponse.json({ message: 'Testimonial updated successfully', testimonial: testimonialEntry });
  } catch (error: unknown) {
    console.error('Error updating testimonial:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ message: 'Error updating testimonial', details: errorMessage }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest, { params }: any) {
  try {
    const { id } = params;

    const result = await sql`
      DELETE FROM "Testimonial"
      WHERE id = ${parseInt(id)}
      RETURNING id;
    `;

    if (result.length === 0) {
      return NextResponse.json({ message: 'Testimonial not found' }, { status: 404 });
    }

    revalidatePath('/testimonials');
    revalidatePath('/'); // Revalidate home page as well

    return NextResponse.json({ message: 'Testimonial deleted successfully' });
  } catch (error: unknown) {
    console.error('Error deleting testimonial:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ message: 'Error deleting testimonial', details: errorMessage }, { status: 500 });
  }
}
