import { NextRequest, NextResponse } from 'next/server';
import { readFileSync } from 'fs';
import { join } from 'path';

const blogsPath = join(process.cwd(), 'data/blogs.json');

interface RouteParams {
  params: Promise<{ id: string }>
}

interface Blog {
  id: string;
  title: string;
  content: string;
  status: string;
  [key: string]: unknown;
}

export async function GET(request: NextRequest, context: RouteParams) {
  try {
    const { id } = await context.params;
    
    const blogs: Blog[] = JSON.parse(readFileSync(blogsPath, 'utf8'));
    const blog = blogs.find((b: Blog) => b.id === id && b.status === 'published');
    
    if (!blog) {
      return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
    }
    
    return NextResponse.json({ blog });
  } catch (error: unknown) {
    console.error('Error fetching blog:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}