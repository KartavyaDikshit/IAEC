
import { NextRequest, NextResponse } from 'next/server';
import { neon } from '@neondatabase/serverless';
import { revalidatePath } from 'next/cache';

const sql = neon(process.env.NEON_DATABASE_URL!);

export async function GET(req: NextRequest, { params }: any) {
  try {
    const { id } = params;
    const blog = await sql`SELECT * FROM "Blog" WHERE id = ${parseInt(id)}`;

    if (blog.length === 0) {
      return NextResponse.json({ message: 'Blog not found' }, { status: 404 });
    }

    return NextResponse.json(blog[0]);
  } catch (error: unknown) {
    console.error('Error fetching blog:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ message: 'Error fetching blog', details: errorMessage }, { status: 500 });
  }
}

export async function PUT(req: NextRequest, { params }: any) {
  try {
    const { id } = params;
    const updatedBlog = await req.json();

    if (!updatedBlog || Object.keys(updatedBlog).length === 0) {
      return NextResponse.json({ message: 'Blog data is empty' }, { status: 400 });
    }

    const { title, content, author, publishedAt } = updatedBlog;

    const result = await sql`
      UPDATE "Blog"
      SET title = ${title}, content = ${content}, author = ${author}, "publishedAt" = ${publishedAt}, "updatedAt" = NOW()
      WHERE id = ${parseInt(id)}
      RETURNING id, title, content, author, "publishedAt", "createdAt", "updatedAt";
    `;

    if (result.length === 0) {
      return NextResponse.json({ message: 'Blog not found' }, { status: 404 });
    }

    const blogEntry = result[0];
    revalidatePath('/blog');

    return NextResponse.json({ message: 'Blog updated successfully', blog: blogEntry });
  } catch (error: unknown) {
    console.error('Error updating blog:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ message: 'Error updating blog', details: errorMessage }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest, { params }: any) {
  try {
    const { id } = params;

    const result = await sql`
      DELETE FROM "Blog"
      WHERE id = ${parseInt(id)}
      RETURNING id;
    `;

    if (result.length === 0) {
      return NextResponse.json({ message: 'Blog not found' }, { status: 404 });
    }

    revalidatePath('/blog');

    return NextResponse.json({ message: 'Blog deleted successfully' });
  } catch (error: unknown) {
    console.error('Error deleting blog:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ message: 'Error deleting blog', details: errorMessage }, { status: 500 });
  }
}
