
'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

interface Blog {
  id: string
  title: string
  content: string
  author: string
  createdAt: string
  status: string
}

export default function BlogPage() {
  const [blogs, setBlogs] = useState<Blog[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchPublishedBlogs()
  }, [])

  const fetchPublishedBlogs = async () => {
    try {
      const response = await fetch('/api/blog')
      const data = await response.json()
      setBlogs(data.blogs.filter((blog: Blog) => blog.status === 'published'))
    } catch (error) {
      console.error('Error fetching blogs:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#1a202c] mb-4">Latest Insights & Updates</h1>
        <p className="text-lg text-[#4a5568]">Stay updated with the latest in overseas education</p>
      </div>

      {loading ? (
        <div className="text-center py-12">Loading articles...</div>
      ) : blogs.length === 0 ? (
        <div className="text-center py-12 text-gray-500">No articles published yet.</div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <article key={blog.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h2 className="text-xl font-bold text-[#1a202c] mb-3 hover:text-[#08bcb4] transition-colors">
                  <Link href={`/blog/${blog.id}`}>
                    {blog.title}
                  </Link>
                </h2>
                <p className="text-[#4a5568] mb-4">
                  {blog.content.substring(0, 150)}...
                </p>
                <div className="flex items-center justify-between text-sm text-[#718096]">
                  <span>By {blog.author}</span>
                  <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  )
}
