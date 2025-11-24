import { neon } from '@neondatabase/serverless';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const sql = neon(process.env.NEON_DATABASE_URL_UNPOOLED!);

    // Create Testimonials Table
    await sql`DROP TABLE IF EXISTS "Testimonial";`;
    await sql`
      CREATE TABLE IF NOT EXISTS "Testimonial" (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        testimonial TEXT,
        university VARCHAR(255),
        course VARCHAR(255),
        country VARCHAR(255),
        rating INT,
        "imageUrl" TEXT,
        "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `;

    // Create Blogs Table
    await sql`DROP TABLE IF EXISTS "Blog";`;
    await sql`
      CREATE TABLE IF NOT EXISTS "Blog" (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        slug VARCHAR(255) UNIQUE,
        date TIMESTAMP WITH TIME ZONE,
        author VARCHAR(255),
        "imageUrl" TEXT,
        category VARCHAR(100),
        tags TEXT[],
        excerpt TEXT,
        content TEXT,
        "isFeatured" BOOLEAN DEFAULT FALSE,
        status VARCHAR(50) DEFAULT 'draft',
        "publishedAt" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `;

    // Create Form Submissions Table
    await sql`DROP TABLE IF EXISTS "FormSubmission";`;
    await sql`
      CREATE TABLE IF NOT EXISTS "FormSubmission" (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255),
        email VARCHAR(255),
        phone VARCHAR(255),
        destination VARCHAR(255),
        message TEXT,
        "formType" VARCHAR(100),
        "testPreference" VARCHAR(100),
        "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `;

    return NextResponse.json({ message: 'Database tables created successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error creating tables:', error);
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}
