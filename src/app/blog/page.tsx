
'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

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
    <>
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/images/all_images/blog.jpeg"
            alt="Blog"
            layout="fill"
            objectFit="cover"
            className="z-0"
            priority
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative z-10 text-center text-white p-4 animate-fade-in text-shadow-md">
          <h1 className="text-6xl font-extrabold !text-white mb-6 leading-tight">Latest Insights & Updates</h1>
          <p className="text-2xl mb-8 text-white/90">Stay updated with the latest in overseas education</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#articles" className="btn-primary text-lg px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 bg-[#08bcb4] !text-white">
              Read Our Blog
            </a>
            <a href="#articles" className="border border-white/30 hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition-colors !text-white">
              View All Articles
            </a>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
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
    </>
  )
}
