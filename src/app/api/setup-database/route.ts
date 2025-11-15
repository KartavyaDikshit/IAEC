import { neon } from '@neondatabase/serverless';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const sql = neon(process.env.DATABASE_URL_UNPOOLED!);

    // Create Testimonials Table
    await sql`DROP TABLE IF EXISTS testimonials;`;
    await sql`
      CREATE TABLE IF NOT EXISTS testimonials (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        testimonial TEXT,
        university VARCHAR(255),
        course VARCHAR(255),
        country VARCHAR(255),
        rating INT,
        image_url TEXT,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `;

    // Create Blogs Table
    await sql`
      CREATE TABLE IF NOT EXISTS blogs (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        slug VARCHAR(255) UNIQUE,
        date TIMESTAMP WITH TIME ZONE,
        author VARCHAR(255),
        image TEXT,
        category VARCHAR(100),
        tags TEXT[],
        excerpt TEXT,
        content TEXT,
        is_featured BOOLEAN DEFAULT FALSE,
        status VARCHAR(50) DEFAULT 'draft',
        published_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `;

    // Create Form Submissions Table
    await sql`
      CREATE TABLE IF NOT EXISTS form_submissions (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255),
        email VARCHAR(255),
        phone VARCHAR(255),
        destination VARCHAR(255),
        message TEXT,
        form_type VARCHAR(100),
        test_preference VARCHAR(100),
        submitted_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `;

    return NextResponse.json({ message: 'Database tables created successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error creating tables:', error);
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}
