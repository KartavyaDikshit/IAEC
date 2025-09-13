'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import BlogListItem from "../../../components/admin/BlogListItem"; // Corrected import path

interface Blog {
  id: string
  title: string
  content: string
  author: string
  publishedAt: string // Changed from createdAt
  updatedAt: string
  status: 'draft' | 'published'
}

export default function BlogsManagement() {
  const [blogs, setBlogs] = useState<Blog[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchBlogs()
  }, [])

  const fetchBlogs = async () => {
    try {
      const response = await fetch('/api/admin/blogs')
      if (response.ok) {
        const data = await response.json()
        setBlogs(data.blogs || [])
      }
    } catch (error) {
      console.error('Error fetching blogs:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleDeleteBlog = async (id: string) => {
    if (!confirm('Are you sure you want to delete this blog post?')) return
    
    try {
      const response = await fetch(`/api/admin/blogs/${id}`, { method: 'DELETE' })
      if (response.ok) {
        setBlogs(blogs.filter(blog => blog.id !== id))
      }
    } catch (error) {
      console.error('Error deleting blog:', error)
    }
  }

  const handleStatusToggle = async (id: string, currentStatus: string) => {
    const newStatus = currentStatus === 'published' ? 'draft' : 'published'
    
    try {
      const response = await fetch(`/api/admin/blogs/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus })
      })
      
      if (response.ok) {
        setBlogs(blogs.map(blog => 
          blog.id === id ? { ...blog, status: newStatus as 'draft' | 'published' } : blog
        ))
      }
    } catch (error) {
      console.error('Error updating blog status:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Blog Management</h1>
        <Link 
          href="/admin/blogs/new"
          className="bg-[#08bcb4] text-white px-6 py-2 rounded-lg hover:bg-[#069aa2] transition-colors"
        >
          Create New Blog
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        {loading ? (
          <div className="p-8 text-center">Loading blogs...</div>
        ) : blogs.length === 0 ? (
          <div className="p-8 text-center text-gray-500">
            No blogs found. <Link href="/admin/blogs/new" className="text-[#08bcb4]">Create your first blog post</Link>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Author</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {blogs.map((blog) => (
                  <BlogListItem 
                    key={blog.id}
                    blog={blog}
                    onDelete={handleDeleteBlog}
                    onToggleStatus={handleStatusToggle}
                  />
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}