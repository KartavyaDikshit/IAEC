-- This script updates the database schema by renaming tables and columns, and adding columns if they don't exist.

-- Section 1: Rename tables
-- Renames tables from lowercase_plural to PascalCaseSingular.
-- If the old tables don't exist, these commands will be safely ignored.
DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'testimonials') THEN
    ALTER TABLE testimonials RENAME TO "Testimonial";
  END IF;
  IF EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'blogs') THEN
    ALTER TABLE blogs RENAME TO "Blog";
  END IF;
  IF EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'form_submissions') THEN
    ALTER TABLE form_submissions RENAME TO "FormSubmission";
  END IF;
END $$;

-- Section 2: Update "Testimonial" table
-- Rename columns from snake_case to camelCase and add missing columns.
DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'Testimonial' AND column_name = 'image_url') THEN
    ALTER TABLE "Testimonial" RENAME COLUMN image_url TO "imageUrl";
  ELSIF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'Testimonial' AND column_name = '"imageUrl"') THEN
    ALTER TABLE "Testimonial" ADD COLUMN "imageUrl" TEXT;
  END IF;

  IF EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'Testimonial' AND column_name = 'created_at') THEN
    ALTER TABLE "Testimonial" RENAME COLUMN created_at TO "createdAt";
  ELSIF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'Testimonial' AND column_name = '"createdAt"') THEN
    ALTER TABLE "Testimonial" ADD COLUMN "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP;
  END IF;
END $$;

-- Section 3: Update "Blog" table
-- Rename columns from snake_case to camelCase and add missing columns.
DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'Blog' AND column_name = 'image') THEN
    ALTER TABLE "Blog" RENAME COLUMN image TO "imageUrl";
  ELSIF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'Blog' AND column_name = '"imageUrl"') THEN
    ALTER TABLE "Blog" ADD COLUMN "imageUrl" TEXT;
  END IF;

  IF EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'Blog' AND column_name = 'is_featured') THEN
    ALTER TABLE "Blog" RENAME COLUMN is_featured TO "isFeatured";
  ELSIF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'Blog' AND column_name = '"isFeatured"') THEN
    ALTER TABLE "Blog" ADD COLUMN "isFeatured" BOOLEAN DEFAULT FALSE;
  END IF;

  IF EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'Blog' AND column_name = 'published_at') THEN
    ALTER TABLE "Blog" RENAME COLUMN published_at TO "publishedAt";
  ELSIF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'Blog' AND column_name = '"publishedAt"') THEN
    ALTER TABLE "Blog" ADD COLUMN "publishedAt" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP;
  END IF;
END $$;

-- Section 4: Update "FormSubmission" table
-- Rename columns from snake_case to camelCase and add missing columns.
DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'FormSubmission' AND column_name = 'form_type') THEN
    ALTER TABLE "FormSubmission" RENAME COLUMN form_type TO "formType";
  ELSIF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'FormSubmission' AND column_name = '"formType"') THEN
    ALTER TABLE "FormSubmission" ADD COLUMN "formType" VARCHAR(100);
  END IF;

  IF EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'FormSubmission' AND column_name = 'test_preference') THEN
    ALTER TABLE "FormSubmission" RENAME COLUMN test_preference TO "testPreference";
  ELSIF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'FormSubmission' AND column_name = '"testPreference"') THEN
    ALTER TABLE "FormSubmission" ADD COLUMN "testPreference" VARCHAR(100);
  END IF;

  IF EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'FormSubmission' AND column_name = 'submitted_at') THEN
    ALTER TABLE "FormSubmission" RENAME COLUMN submitted_at TO "createdAt";
  ELSIF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'FormSubmission' AND column_name = '"createdAt"') THEN
    ALTER TABLE "FormSubmission" ADD COLUMN "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP;
  END IF;
END $$;
