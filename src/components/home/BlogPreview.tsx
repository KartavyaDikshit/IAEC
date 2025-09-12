
'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

interface Post {
  id: number;
  title: string;
  excerpt: string;
}

const BlogPreview = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/blog');
      const data = await res.json();
      setPosts(data.slice(0, 3)); // Get first 3 posts
    };
    fetchPosts();
  }, []);

  return (
    <section className="bg-gray-100 py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold" style={{ color: '#08bcb4' }}>From Our Blog</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div key={post.id} className="bg-white p-8 rounded-lg shadow-md">
              {/* Placeholder: Image for Blog Post */}
              <div className="w-full h-40 bg-gray-200 mb-4 flex items-center justify-center text-gray-500">Blog Image</div>
              <h3 className="text-xl font-bold mb-2">{post.title}</h3>
              <p className="text-gray-800 mb-4">{post.excerpt}</p>
              <Link href={`/blog/${post.id}`}>
                <div className="text-blue-500 hover:underline cursor-pointer">Read More</div>
              </Link>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/blog">
            <div style={{ backgroundColor: '#08bcb4', color: 'white' }} className="px-6 py-3 rounded-md text-lg font-semibold hover:opacity-80 transition-opacity cursor-pointer">View All Posts</div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
