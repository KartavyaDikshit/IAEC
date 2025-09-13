import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const dataFilePath = path.join(process.cwd(), 'data', 'blogs.json');

interface Blog {
  id: string;
  title: string;
  content: string;
  status: 'published' | 'draft';
  // Add other properties as needed
}

export async function GET() {
  try {
    const fileContents = fs.readFileSync(dataFilePath, 'utf8');
    const blogs: Blog[] = JSON.parse(fileContents);

    // Only return published blogs for public display
    const publishedBlogs = blogs.filter((blog: Blog) => blog.status === 'published');

    return NextResponse.json({ blogs: publishedBlogs });
  } catch (error) {
    console.error('Error reading blog data:', error);
    return NextResponse.json({ blogs: [] });
  }
}