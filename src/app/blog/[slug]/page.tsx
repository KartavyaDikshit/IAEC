/* eslint-disable @typescript-eslint/no-explicit-any */
import { redirect, permanentRedirect } from 'next/navigation';
import { neon } from '@neondatabase/serverless';
import Image from 'next/image';
import SocialShareIcons from '@/components/SocialShareIcons';

const NEON_DATABASE_URL = process.env.NEON_DATABASE_URL;

const sql = NEON_DATABASE_URL ? neon(NEON_DATABASE_URL) : null;

interface Blog {
  id: string | number;
  title: string;
  slug?: string;
  content: string;
  author?: string;
  publishedAt?: string;
  imageUrl?: string;
}

export default async function BlogPostPage({ params }: any) {
  const { slug } = await params;

  let blog: Blog | null = null;

  // 1. Try fetching from Database
  if (sql) {
    try {
      let result;
      const isNumeric = !isNaN(parseInt(slug)) && /^\d+$/.test(slug);
      
      if (isNumeric) {
        result = await sql`SELECT * FROM "Blog" WHERE id = ${parseInt(slug)}`;
      } else {
        result = await sql`SELECT * FROM "Blog" WHERE slug = ${slug}`;
      }
      
      if (result.length > 0) {
        blog = result[0] as Blog;
        
        // Permanent 301 redirect for old numeric IDs
        if (isNumeric && blog.slug) {
          permanentRedirect(`/blog/${blog.slug}`);
        }
      }
    } catch (error) {
      console.error('Error fetching blog post from DB:', error);
    }
  }

  if (!blog) {
    redirect('/blog');
  }

  const blogUrl = `https://iaecconsultants.in/blog/${blog.slug || blog.id}`;

  return (
    <div className="container mx-auto px-4 py-16">
      <article className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        {blog.imageUrl && (
          <div className="mb-8">
            <Image
              src={blog.imageUrl}
              alt={blog.title}
              width={800}
              height={400}
              className="w-full h-auto rounded-lg object-cover aspect-video"
            />
          </div>
        )}
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">{blog.title}</h1>
        <div className="flex items-center text-gray-600 text-sm mb-6">
          <p className="mr-4">By {blog.author || 'IAEC Team'}</p>
        </div>
        <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: blog.content }} />
        <SocialShareIcons title={blog.title} url={blogUrl} />
      </article>
    </div>
  );
}
