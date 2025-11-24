/* eslint-disable @typescript-eslint/no-explicit-any */
import { notFound } from 'next/navigation';
import { neon } from '@neondatabase/serverless';
import Image from 'next/image';

const sql = neon(process.env.NEON_DATABASE_URL!);

interface Blog {
  id: string;
  title: string;
  content: string;
  author: string;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
  imageUrl?: string;
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
          <p className="mr-4">By {blog.author}</p>
          <p>{new Date(blog.publishedAt).toLocaleDateString()}</p>
        </div>
        <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: blog.content }} />
      </article>
    </div>
  );
}
