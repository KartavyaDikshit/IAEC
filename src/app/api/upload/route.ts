import { NextRequest, NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import { join } from 'path';
import fs from 'fs/promises';

export async function POST(req: NextRequest) {
  const data = await req.formData();
  const file: File | null = data.get('file') as unknown as File;

  if (!file) {
    return NextResponse.json({ success: false, message: 'No file uploaded' });
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const uploadDir = join(process.cwd(), 'public/images/blogs');
  const filename = `${Date.now()}-${file.name}`;
  const path = join(uploadDir, filename);

  try {
    // Ensure the upload directory exists
    await fs.stat(uploadDir);
  } catch (error: unknown) {
    if (typeof error === 'object' && error !== null && 'code' in error && error.code === 'ENOENT') {
      // Directory does not exist, create it
      await fs.mkdir(uploadDir, { recursive: true });
    } else {
      console.error('Error checking directory:', error);
      return NextResponse.json({ success: false, message: 'Error checking directory' });
    }
  }

  try {
    await writeFile(path, buffer);
    console.log(`File saved to ${path}`);
    const imageUrl = `/images/blogs/${filename}`;
    return NextResponse.json({ success: true, imageUrl });
  } catch (error) {
    console.error('Error saving file:', error);
    return NextResponse.json({ success: false, message: 'Error saving file' });
  }
}