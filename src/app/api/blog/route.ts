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
  id: string;
  title: string;
  slug: string;
  date: string;
  author: string;
  image: string;
  category: string;
  tags: string[];
  excerpt: string;
  content: string;
  isFeatured: boolean;
  status: string; // Keep status as it's used for filtering
}

    const publishedBlogs = blogs.filter((blog: Blog) => blog.status === 'published');
    
    return NextResponse.json({ blogs: publishedBlogs });
  } catch (error) {
    console.error('Error reading blog data:', error);
    return NextResponse.json({ blogs: [] });
  }
}