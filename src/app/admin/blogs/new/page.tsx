'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import dynamic from 'next/dynamic';

const Editor = dynamic(() => import('@/components/admin/RichTextEditor'), {
  ssr: false,
  loading: () => <p>Loading editor...</p>,
});

export default function CreateBlog() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    author: 'Admin', // Hardcoded for now, can be dynamic later
  })
  const [file, setFile] = useState<File | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0])
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    let imageUrl = ''
    if (file) {
      try {
        const formData = new FormData()
        formData.append('file', file)

        const uploadResponse = await fetch('/api/upload', {
          method: 'POST',
          body: formData,
        })

        if (uploadResponse.ok) {
          const { imageUrl: uploadedImageUrl } = await uploadResponse.json()
          imageUrl = uploadedImageUrl
        } else {
          alert('Error uploading image')
          setLoading(false)
          return
        }
      } catch (error) {
        console.error('Error uploading image:', error)
        alert('Error uploading image')
        setLoading(false)
        return
      }
    }
    
    try {
      const response = await fetch('/api/blogs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: formData.title,
          content: formData.content,
          author: formData.author,
          imageUrl,
          publishedAt: new Date().toISOString(), // Set publishedAt to now
        })
      })
      
      if (response.ok) {
        setSuccess(true)
        // Show success message for 1 second then redirect
        setTimeout(() => {
          router.push('/admin/blogs')
        }, 1000)
      } else {
        const error = await response.json()
        alert(`Error creating blog post: ${error.message || 'Unknown error'}`)
      }
    } catch (error) {
      console.error('Error creating blog:', error)
      alert('Error creating blog post')
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
          <div className="text-green-600 text-6xl mb-4">✓</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Success!</h2>
          <p className="text-gray-600">Blog post created successfully. Redirecting...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Create New Blog Post</h1>
        <button
          onClick={() => router.back()}
          className="text-[#08bcb4] hover:text-[#069aa2] font-medium"
        >
          ← Back to Blogs
        </button>
      </div>

      <div className="bg-white rounded-lg shadow">
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
              Title
            </label>
            <input
              type="text"
              id="title"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#08bcb4] focus:border-[#08bcb4]"
              required
            />
          </div>

          <div>
            <label htmlFor="author" className="block text-sm font-medium text-gray-700 mb-2">
              Author
            </label>
            <input
              type="text"
              id="author"
              value={formData.author}
              onChange={(e) => setFormData({ ...formData, author: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#08bcb4] focus:border-[#08bcb4]"
              required
            />
          </div>

          <div>
            <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-2">
              Image
            </label>
            <input
              type="file"
              id="image"
              onChange={handleFileChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#08bcb4] focus:border-[#08bcb4]"
            />
          </div>

          <div>
            <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-2">
              Content
            </label>
            <Editor
              onChange={(data) => {
                setFormData({ ...formData, content: data });
              }}
              value={formData.content}
            />
          </div>

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={() => router.back()}
              className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-2 bg-[#08bcb4] !text-white rounded-md hover:bg-[#069aa2] disabled:opacity-50 transition-colors"
            >
              {loading ? 'Creating...' : 'Create Blog Post'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
