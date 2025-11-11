/* eslint-disable @typescript-eslint/no-explicit-any */
import { notFound } from 'next/navigation';
import { neon } from '@neondatabase/serverless';

const DATABASE_URL = "postgresql://neondb_owner:npg_tme8NEi3CQAa@ep-broad-morning-a1np73uf-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require";
const sql = neon(DATABASE_URL);

interface Blog {
  id: string;
  title: string;
  content: string;
  author: string;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
}

export default async function BlogPostPage({ params }: any) {
  const { id } = params;

  let blog: Blog | null = null;
  try {
    const result = await sql`SELECT * FROM "Blog" WHERE id = ${parseInt(id)}`;
    if (result.length > 0) {
      blog = result[0] as Blog;
    }
  } catch (error) {
    console.error('Error fetching blog post:', error);
  }

  if (!blog) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <article className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">{blog.title}</h1>
        <div className="flex items-center text-gray-600 text-sm mb-6">
          <p className="mr-4">By {blog.author}</p>
          <p>{new Date(blog.publishedAt).toLocaleDateString()}</p>
        </div>
        <div className="prose prose-lg max-w-none">
          <p>{blog.content}</p>
        </div>
      </article>
    </div>
  );
}
