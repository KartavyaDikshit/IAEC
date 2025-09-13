'use client'
import { useState, useEffect } from 'react'
import { useRouter, useParams } from 'next/navigation'
import BlogEditor from "../../../../components/admin/BlogEditor"; // Corrected import path

interface BlogData {
  title: string;
  content: string;
  status: 'draft' | 'published';
}

export default function EditBlogPage() {
  const router = useRouter()
  const params = useParams()
  const { id } = params; // Get the blog ID from the URL
  const [loading, setLoading] = useState(false)
  const [blog, setBlog] = useState<BlogData | null>(null)
  const [fetchError, setFetchError] = useState<string | null>(null)

  useEffect(() => {
    const fetchBlog = async () => {
      if (!id) return;
      setLoading(true);
      try {
        const response = await fetch(`/api/admin/blogs/${id}`);
        if (response.ok) {
          const data = await response.json();
          setBlog(data);
        } else {
          setFetchError(`Failed to fetch blog: ${response.statusText}`);
        }
      } catch (error) {
        setFetchError("Error fetching blog data.");
        console.error("Error fetching blog:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, [id]);

  const handleSave = async (blogData: BlogData) => {
    setLoading(true)
    
    try {
      const response = await fetch(`/api/admin/blogs/${id}`, {
        method: 'PUT', // Assuming PUT for updates
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(blogData)
      })
      
      if (response.ok) {
        router.push('/admin/blogs')
      } else {
        const error = await response.json()
        alert(`Error updating blog post: ${error.message || 'Unknown error'}`)
      }
    } catch (error) {
      console.error('Error updating blog:', error)
      alert('Error updating blog post')
    } finally {
      setLoading(false)
    }
  }

  if (loading && !blog) {
    return <div className="text-center py-8">Loading blog...</div>;
  }

  if (fetchError) {
    return <div className="text-center py-8 text-red-500">{fetchError}</div>;
  }

  if (!blog) {
    return <div className="text-center py-8">Blog not found.</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Edit Blog Post</h1>
        <button
          onClick={() => router.back()}
          className="text-[#08bcb4] hover:text-[#069aa2] font-medium"
        >
          ← Back to Blogs
        </button>
      </div>

      <div className="bg-white rounded-lg shadow">
        <BlogEditor onSave={handleSave} loading={loading} blog={blog} />
      </div>
    </div>
  )
}