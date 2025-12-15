import { NextRequest, NextResponse } from 'next/server';
import { neon } from '@neondatabase/serverless';

const NEON_DATABASE_URL = process.env.NEON_DATABASE_URL;

const sql = NEON_DATABASE_URL ? neon(NEON_DATABASE_URL) : null;

export async function GET() {
  let dbBlogs: any[] = [];

  // 1. Try fetching from Database
  if (sql) {
    try {
      dbBlogs = await sql`SELECT * FROM "Blog" ORDER BY "publishedAt" DESC`;
    } catch (error: unknown) {
      console.error('Error fetching blogs from DB:', error);
      // Fallback to empty array if DB fails
    }
  }

  return NextResponse.json({ blogs: dbBlogs });
}

export async function POST(req: NextRequest) {
  if (!sql) {
     return NextResponse.json({ message: 'Database not configured' }, { status: 500 });
  }

  try {
    const newBlog = await req.json();

    if (!newBlog || Object.keys(newBlog).length === 0) {
      return NextResponse.json({ message: 'Blog data is empty' }, { status: 400 });
    }

    const { title, content, author, publishedAt, imageUrl } = newBlog;

    const result = await sql`
      INSERT INTO "Blog" (title, content, author, "publishedAt", "imageUrl")
      VALUES (${title}, ${content}, ${author}, ${publishedAt}, ${imageUrl})
      RETURNING id, title, content, author, "publishedAt", "imageUrl";
    `;

    const createdBlog = result[0];

    return NextResponse.json({ message: 'Blog submitted successfully', blogId: createdBlog.id });
  } catch (error: unknown) {
    console.error('Blog submission error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ message: 'Error submitting blog', details: errorMessage }, { status: 500 });
  }
}
