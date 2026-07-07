-- This script is for updating the names of tables and columns in your existing database
-- to match what the application expects.
--
-- IMPORTANT: If a table or column has already been renamed, you will see an error
-- for that specific command. This is expected and can be safely ignored.
-- Run these commands one by one or as a whole script.

-- 1. Rename Tables
-- If your tables are named `testimonials`, `blogs`, or `form_submissions`, this will rename them.
ALTER TABLE IF EXISTS testimonials RENAME TO "Testimonial";
ALTER TABLE IF EXISTS blogs RENAME TO "Blog";
ALTER TABLE IF EXISTS form_submissions RENAME TO "FormSubmission";

-- 2. Update Columns in "Testimonial" Table
-- Renames columns from snake_case to camelCase.
ALTER TABLE "Testimonial" RENAME COLUMN image_url TO "imageUrl";
ALTER TABLE "Testimonial" RENAME COLUMN created_at TO "createdAt";

-- 3. Update Columns in "Blog" Table
-- Renames columns from snake_case to camelCase.
ALTER TABLE "Blog" RENAME COLUMN image TO "imageUrl";
ALTER TABLE "Blog" RENAME COLUMN is_featured TO "isFeatured";
ALTER TABLE "Blog" RENAME COLUMN published_at TO "publishedAt";

-- 4. Update Columns in "FormSubmission" Table
-- Renames columns from snake_case to camelCase.
ALTER TABLE "FormSubmission" RENAME COLUMN form_type TO "formType";
ALTER TABLE "FormSubmission" RENAME COLUMN test_preference TO "testPreference";
ALTER TABLE "FormSubmission" RENAME COLUMN submitted_at TO "createdAt";
