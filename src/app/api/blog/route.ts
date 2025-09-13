import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const dataFilePath = path.join(process.cwd(), 'data', 'blogs.json');

export async function GET() {
  try {
    const fileContents = fs.readFileSync(dataFilePath, 'utf8');
    const blogs = JSON.parse(fileContents);
    
    // Only return published blogs for public display
    interface Blog {
  status: string;
  [key: string]: any; // Allow other properties
}

    const publishedBlogs = blogs.filter((blog: Blog) => blog.status === 'published');
    
    return NextResponse.json({ blogs: publishedBlogs });
  } catch (error) {
    console.error('Error reading blog data:', error);
    return NextResponse.json({ blogs: [] });
  }
}