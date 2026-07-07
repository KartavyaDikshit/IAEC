import { neon } from '@neondatabase/serverless';

async function migrate() {
  const sql = neon(process.env.NEON_DATABASE_URL);
  
  try {
    // 1. Add slug column if it doesn't exist
    await sql`ALTER TABLE "Blog" ADD COLUMN IF NOT EXISTS slug VARCHAR(255) UNIQUE;`;
    console.log('Added slug column to Blog table if it did not exist.');
    
    // 2. Fetch all blogs without slug
    const blogs = await sql`SELECT id, title FROM "Blog" WHERE slug IS NULL;`;
    
    // 3. Generate slugs
    for (const blog of blogs) {
      const baseSlug = blog.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)+/g, '');
        
      let slug = baseSlug;
      let counter = 1;
      let slugExists = true;
      
      while (slugExists) {
        try {
            await sql`UPDATE "Blog" SET slug = ${slug} WHERE id = ${blog.id}`;
            slugExists = false;
            console.log(`Updated blog ${blog.id} with slug ${slug}`);
        } catch (e) {
            // Assume unique constraint violation
            slug = `${baseSlug}-${counter}`;
            counter++;
        }
      }
    }
    
    console.log('Migration complete');
  } catch (error) {
    console.error('Migration failed:', error);
  }
}

migrate();
