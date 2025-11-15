import { NextRequest, NextResponse } from 'next/server';
import { neon } from '@neondatabase/serverless';

const DATABASE_URL = "postgresql://neondb_owner:npg_tme8NEi3CQAa@ep-broad-morning-a1np73uf-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require";
const sql = neon(DATABASE_URL);

export async function GET() {
  try {
    const blogs = await sql`SELECT * FROM "Blog" ORDER BY "publishedAt" DESC`;
    return NextResponse.json({ blogs });
  } catch (error: unknown) {
    console.error('Error fetching blogs:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ message: 'Error fetching blogs', details: errorMessage }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const newBlog = await req.json();

    if (!newBlog || Object.keys(newBlog).length === 0) {
      return NextResponse.json({ message: 'Blog data is empty' }, { status: 400 });
    }

    const { title, content, author, publishedAt } = newBlog;

    const result = await sql`
      INSERT INTO "Blog" (title, content, author, "publishedAt")
      VALUES (${title}, ${content}, ${author}, ${publishedAt})
      RETURNING id, title, content, author, "publishedAt", "createdAt", "updatedAt";
    `;

    const createdBlog = result[0];

    return NextResponse.json({ message: 'Blog submitted successfully', blogId: createdBlog.id });
  } catch (error: unknown) {
    console.error('Blog submission error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ message: 'Error submitting blog', details: errorMessage }, { status: 500 });
  }
}
