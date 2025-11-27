-- Drop existing tables if they exist to start fresh
DROP TABLE IF EXISTS "Testimonial";
DROP TABLE IF EXISTS "Blog";
DROP TABLE IF EXISTS "FormSubmission";

-- Create Testimonials Table
CREATE TABLE "Testimonial" (
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

-- Create Blogs Table
CREATE TABLE "Blog" (
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

-- Create Form Submissions Table
CREATE TABLE "FormSubmission" (
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
