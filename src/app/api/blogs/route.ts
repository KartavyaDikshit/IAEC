import { NextRequest, NextResponse } from 'next/server';
import { neon } from '@neondatabase/serverless';

const NEON_DATABASE_URL = process.env.NEON_DATABASE_URL;

if (!NEON_DATABASE_URL) {
  throw new Error("NEON_DATABASE_URL environment variable is not set");
}

const sql = neon(NEON_DATABASE_URL);

export async function GET() {
  try {
    const blogs = await sql`SELECT * FROM "Blog" ORDER BY "publishedAt" DESC`;
    return NextResponse.json({ blogs });
  } catch (error: unknown) {
    console.error('Error fetching blogs:', {
      message: (error as Error).message,
      stack: (error as Error).stack,
    });
    return NextResponse.json(
      { 
        message: 'Error connecting to the database.',
        error: (error as Error).message 
      }, 
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const newBlog = await req.json();

    if (!newBlog || Object.keys(newBlog).length === 0) {
      return NextResponse.json({ message: 'Blog data is empty' }, { status: 400 });
    }

    const { title, content, author, publishedAt, imageUrl } = newBlog;

    const result = await sql`
      INSERT INTO "Blog" (title, content, author, "publishedAt", "imageUrl")
      VALUES (${title}, ${content}, ${author}, ${publishedAt}, ${imageUrl})
      RETURNING id;
    `;

    const createdBlog = result[0];

    return NextResponse.json({ message: 'Blog submitted successfully', blogId: createdBlog.id });
  } catch (error: unknown) {
    console.error('Blog submission error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ message: 'Error submitting blog', details: errorMessage }, { status: 500 });
  }
}
