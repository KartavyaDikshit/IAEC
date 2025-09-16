# Missing Admin Pages & Components

## 1. Admin Blogs Management: `src/app/admin/blogs/page.tsx`

```tsx
'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

interface Blog {
  id: string
  title: string
  content: string
  author: string
  createdAt: string
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
                  <tr key={blog.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{blog.title}</div>
                      <div className="text-sm text-gray-500">{blog.content.substring(0, 100)}...</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {blog.author}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        blog.status === 'published' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {blog.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(blog.createdAt).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                      <button
                        onClick={() => handleStatusToggle(blog.id, blog.status)}
                        className={`${
                          blog.status === 'published' 
                            ? 'text-yellow-600 hover:text-yellow-900' 
                            : 'text-green-600 hover:text-green-900'
                        }`}
                      >
                        {blog.status === 'published' ? 'Unpublish' : 'Publish'}
                      </button>
                      <button
                        onClick={() => handleDeleteBlog(blog.id)}
                        className="text-red-600 hover:text-red-900"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}
```

## 2. Create New Blog Page: `src/app/admin/blogs/new/page.tsx`

```tsx
'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function CreateBlog() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    status: 'draft' as 'draft' | 'published'
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    try {
      const response = await fetch('/api/admin/blogs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      
      if (response.ok) {
        router.push('/admin/blogs')
      } else {
        alert('Error creating blog post')
      }
    } catch (error) {
      console.error('Error creating blog:', error)
      alert('Error creating blog post')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Create New Blog Post</h1>
        <button
          onClick={() => router.back()}
          className="text-gray-600 hover:text-gray-800"
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
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#08bcb4]"
              required
            />
          </div>

          <div>
            <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-2">
              Content
            </label>
            <textarea
              id="content"
              rows={15}
              value={formData.content}
              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#08bcb4]"
              required
            />
          </div>

          <div>
            <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-2">
              Status
            </label>
            <select
              id="status"
              value={formData.status}
              onChange={(e) => setFormData({ ...formData, status: e.target.value as 'draft' | 'published' })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#08bcb4]"
            >
              <option value="draft">Draft</option>
              <option value="published">Published</option>
            </select>
          </div>

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={() => router.back()}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-4 py-2 bg-[#08bcb4] text-white rounded-md hover:bg-[#069aa2] disabled:opacity-50"
            >
              {loading ? 'Creating...' : 'Create Blog Post'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
```

## 3. Admin Testimonials Management: `src/app/admin/testimonials/page.tsx`

```tsx
'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

interface Testimonial {
  id: string
  name: string
  content: string
  university: string
  course: string
  country: string
  rating: number
  imageUrl?: string
  createdAt: string
}

export default function TestimonialsManagement() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchTestimonials()
  }, [])

  const fetchTestimonials = async () => {
    try {
      const response = await fetch('/api/admin/testimonials')
      if (response.ok) {
        const data = await response.json()
        setTestimonials(data.testimonials || [])
      }
    } catch (error) {
      console.error('Error fetching testimonials:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleDeleteTestimonial = async (id: string) => {
    if (!confirm('Are you sure you want to delete this testimonial?')) return
    
    try {
      const response = await fetch(`/api/admin/testimonials/${id}`, { method: 'DELETE' })
      if (response.ok) {
        setTestimonials(testimonials.filter(t => t.id !== id))
      }
    } catch (error) {
      console.error('Error deleting testimonial:', error)
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Testimonials Management</h1>
        <Link 
          href="/admin/testimonials/new"
          className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
        >
          Add New Testimonial
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading ? (
          <div className="col-span-full text-center py-12">Loading testimonials...</div>
        ) : testimonials.length === 0 ? (
          <div className="col-span-full text-center py-12 text-gray-500">
            No testimonials found. <Link href="/admin/testimonials/new" className="text-green-600">Add your first testimonial</Link>
          </div>
        ) : (
          testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleDeleteTestimonial(testimonial.id)}
                    className="text-red-600 hover:text-red-900 text-sm"
                  >
                    Delete
                  </button>
                </div>
              </div>
              
              <div className="space-y-2 text-sm text-gray-600">
                <p><strong>University:</strong> {testimonial.university}</p>
                <p><strong>Course:</strong> {testimonial.course}</p>
                <p><strong>Country:</strong> {testimonial.country}</p>
                <p><strong>Rating:</strong> {'★'.repeat(testimonial.rating)}</p>
              </div>
              
              <p className="mt-4 text-sm text-gray-700 line-clamp-3">
                {testimonial.content}
              </p>
              
              <p className="mt-2 text-xs text-gray-500">
                Added: {new Date(testimonial.createdAt).toLocaleDateString()}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
```

## 4. Create New Testimonial Page: `src/app/admin/testimonials/new/page.tsx`

```tsx
'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function CreateTestimonial() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    content: '',
    university: '',
    course: '',
    country: '',
    rating: 5,
    imageUrl: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    try {
      const response = await fetch('/api/admin/testimonials', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      
      if (response.ok) {
        router.push('/admin/testimonials')
      } else {
        alert('Error creating testimonial')
      }
    } catch (error) {
      console.error('Error creating testimonial:', error)
      alert('Error creating testimonial')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Add New Testimonial</h1>
        <button
          onClick={() => router.back()}
          className="text-gray-600 hover:text-gray-800"
        >
          ← Back to Testimonials
        </button>
      </div>

      <div className="bg-white rounded-lg shadow">
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Student Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>

            <div>
              <label htmlFor="university" className="block text-sm font-medium text-gray-700 mb-2">
                University
              </label>
              <input
                type="text"
                id="university"
                value={formData.university}
                onChange={(e) => setFormData({ ...formData, university: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>

            <div>
              <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-2">
                Course
              </label>
              <input
                type="text"
                id="course"
                value={formData.course}
                onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>

            <div>
              <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-2">
                Country
              </label>
              <select
                id="country"
                value={formData.country}
                onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              >
                <option value="">Select Country</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
                <option value="Australia">Australia</option>
                <option value="Canada">Canada</option>
                <option value="Germany">Germany</option>
                <option value="France">France</option>
                <option value="Italy">Italy</option>
                <option value="Ireland">Ireland</option>
                <option value="Malta">Malta</option>
                <option value="Latvia">Latvia</option>
                <option value="New Zealand">New Zealand</option>
              </select>
            </div>

            <div>
              <label htmlFor="rating" className="block text-sm font-medium text-gray-700 mb-2">
                Rating
              </label>
              <select
                id="rating"
                value={formData.rating}
                onChange={(e) => setFormData({ ...formData, rating: parseInt(e.target.value) })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value={1}>1 Star</option>
                <option value={2}>2 Stars</option>
                <option value={3}>3 Stars</option>
                <option value={4}>4 Stars</option>
                <option value={5}>5 Stars</option>
              </select>
            </div>

            <div>
              <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700 mb-2">
                Image URL (Optional)
              </label>
              <input
                type="url"
                id="imageUrl"
                value={formData.imageUrl}
                onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="https://example.com/image.jpg"
              />
            </div>
          </div>

          <div>
            <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-2">
              Testimonial Content
            </label>
            <textarea
              id="content"
              rows={8}
              value={formData.content}
              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Write the student's testimonial here..."
              required
            />
          </div>

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={() => router.back()}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 disabled:opacity-50"
            >
              {loading ? 'Adding...' : 'Add Testimonial'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
```

## 5. Fix Admin Layout with signOut import: `src/app/admin/layout.tsx`

```tsx
'use client'
import { useSession, signOut } from 'next-auth/react'
import { redirect } from 'next/navigation'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function AdminLayout({ children }: Props) {
  const { data: session, status } = useSession()

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#08bcb4]"></div>
      </div>
    )
  }

  if (!session) {
    redirect('/admin/login')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold text-[#08bcb4]">IAEC Admin Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-700">Welcome, {session.user?.email}</span>
              <button
                onClick={() => signOut({ callbackUrl: '/' })}
                className="text-sm text-red-600 hover:text-red-800"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </nav>
      
      <div className="flex">
        <aside className="w-64 bg-white shadow-sm min-h-screen">
          <nav className="p-6 space-y-2">
            <a href="/admin" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">
              Dashboard
            </a>
            <a href="/admin/blogs" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">
              Blogs
            </a>
            <a href="/admin/testimonials" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">
              Testimonials
            </a>
          </nav>
        </aside>
        
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  )
}
```

## 6. Malta Country Page: `src/app/study-abroad/europe/malta/page.tsx`

```tsx
import Link from 'next/link';

export const metadata = {
  title: "Study in Malta - English Education, EU Benefits 2025 | IAEC",
  description: "Study in Malta with IAEC guidance. English-speaking EU country, affordable education, beautiful Mediterranean location. Gateway to Europe for international students.",
  keywords: "study in Malta, Malta universities international students, Malta student visa, study abroad Malta, Malta education system, IAEC Malta counseling, EU education Malta"
};

export default function MaltaPage() {
  return (
    <main>
      <section className="bg-gradient-to-r from-[#08bcb4] to-[#069aa2] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-center mb-6">Study in Malta</h1>
          <p className="text-xl text-center text-white/90 max-w-3xl mx-auto">
            English-speaking EU country with Mediterranean charm, quality education, and European opportunities
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="text-center bg-[#e6fffe] p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-[#08bcb4]">13,000+</h3>
              <p className="text-[#4a5568]">International Students</p>
            </div>
            <div className="text-center bg-[#e6fffe] p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-[#08bcb4]">17</h3>
              <p className="text-[#4a5568]">Higher Education Institutions</p>
            </div>
            <div className="text-center bg-[#e6fffe] p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-[#08bcb4]">€10,000-15,000</h3>
              <p className="text-[#4a5568]">Annual Tuition</p>
            </div>
            <div className="text-center bg-[#e6fffe] p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-[#08bcb4]">2 Intakes</h3>
              <p className="text-[#4a5568]">October, February</p>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-[#1a202c] mb-6">Why Study in Malta?</h2>
            <p className="text-lg text-[#4a5568] mb-6">
              Malta, officially known as the Republic of Malta, is a small island nation in the Mediterranean Sea. As an EU member state with English as an official language, Malta offers unique advantages for international students seeking quality European education in a beautiful, safe, and culturally rich environment.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <ul className="space-y-3 text-[#4a5568]">
                <li>• English is an official language alongside Maltese</li>
                <li>• EU membership benefits and recognition</li>
                <li>• Safe, peaceful Mediterranean island environment</li>
                <li>• Rich history spanning over 7,000 years</li>
              </ul>
              <ul className="space-y-3 text-[#4a5568]">
                <li>• Affordable living costs compared to other EU countries</li>
                <li>• Strategic location in the Mediterranean</li>
                <li>• Growing financial and gaming industries</li>
                <li>• Excellent year-round climate</li>
              </ul>
            </div>
          </div>

          <div className="bg-[#f7fafc] p-8 rounded-lg mb-12">
            <h2 className="text-3xl font-bold text-[#1a202c] mb-6">Top Universities in Malta</h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg shadow-lg">
                <thead className="bg-[#08bcb4] text-white">
                  <tr>
                    <th className="p-4 text-left">University</th>
                    <th className="p-4 text-left">Established</th>
                    <th className="p-4 text-left">Annual Tuition</th>
                  </tr>
                </thead>
                <tbody className="text-[#4a5568]">
                  <tr className="border-b">
                    <td className="p-4">University of Malta</td>
                    <td className="p-4">1769</td>
                    <td className="p-4">€12,000 - €15,000</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4">Malta College of Arts, Science & Technology (MCAST)</td>
                    <td className="p-4">2001</td>
                    <td className="p-4">€8,000 - €12,000</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4">American University of Malta</td>
                    <td className="p-4">2016</td>
                    <td className="p-4">€15,000 - €20,000</td>
                  </tr>
                  <tr>
                    <td className="p-4">Global College Malta</td>
                    <td className="p-4">2011</td>
                    <td className="p-4">€10,000 - €14,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-[#1a202c] mb-4">Ready to Study in Malta?</h2>
            <p className="text-lg text-[#4a5568] mb-8">Get expert guidance for your Malta education journey</p>
            <Link href="/contact" className="bg-[#08bcb4] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#069aa2] transition-all inline-block">
              Get Free Counseling
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
```

## 7. Latvia Country Page: `src/app/study-abroad/europe/latvia/page.tsx`

```tsx
import Link from 'next/link';

export const metadata = {
  title: "Study in Latvia - Affordable EU Education, Green Environment 2025 | IAEC",
  description: "Study in Latvia with IAEC guidance. Affordable EU education, green environment, quality universities. Gateway to Europe with excellent IT & business programs.",
  keywords: "study in Latvia, Latvia universities international students, Latvia student visa, study abroad Latvia, Latvia education system, IAEC Latvia counseling, EU education Latvia"
};

export default function LatviaPage() {
  return (
    <main>
      <section className="bg-gradient-to-r from-[#08bcb4] to-[#069aa2] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-center mb-6">Study in Latvia</h1>
          <p className="text-xl text-center text-white/90 max-w-3xl mx-auto">
            Affordable EU education in a green, safe environment with strong IT and business programs
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="text-center bg-[#e6fffe] p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-[#08bcb4]">8,000+</h3>
              <p className="text-[#4a5568]">International Students</p>
            </div>
            <div className="text-center bg-[#e6fffe] p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-[#08bcb4]">59</h3>
              <p className="text-[#4a5568]">Higher Education Institutions</p>
            </div>
            <div className="text-center bg-[#e6fffe] p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-[#08bcb4]">€2,000-8,000</h3>
              <p className="text-[#4a5568]">Annual Tuition</p>
            </div>
            <div className="text-center bg-[#e6fffe] p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-[#08bcb4]">2 Intakes</h3>
              <p className="text-[#4a5568]">September, February</p>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-[#1a202c] mb-6">Why Study in Latvia?</h2>
            <p className="text-lg text-[#4a5568] mb-6">
              Latvia, officially known as the Republic of Latvia, is one of the three Baltic states in Northern Europe. As an EU member since 2004, Latvia offers high-quality education at affordable costs in one of Europe's greenest countries, with 44% forest coverage and a rapidly developing digital economy.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <ul className="space-y-3 text-[#4a5568]">
                <li>• Extremely affordable tuition fees and living costs</li>
                <li>• EU member state with European recognition</li>
                <li>• 44% forest coverage - greenest country in Europe</li>
                <li>• Growing IT and technology sector</li>
              </ul>
              <ul className="space-y-3 text-[#4a5568]">
                <li>• Safe, peaceful environment with low crime</li>
                <li>• Strategic location between Western and Eastern Europe</li>
                <li>• Strong in business and entrepreneurship programs</li>
                <li>• English-taught programs available</li>
              </ul>
            </div>
          </div>

          <div className="bg-[#f7fafc] p-8 rounded-lg mb-12">
            <h2 className="text-3xl font-bold text-[#1a202c] mb-6">Top Universities in Latvia</h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg shadow-lg">
                <thead className="bg-[#08bcb4] text-white">
                  <tr>
                    <th className="p-4 text-left">University</th>
                    <th className="p-4 text-left">Established</th>
                    <th className="p-4 text-left">Annual Tuition</th>
                  </tr>
                </thead>
                <tbody className="text-[#4a5568]">
                  <tr className="border-b">
                    <td className="p-4">University of Latvia</td>
                    <td className="p-4">1919</td>
                    <td className="p-4">€3,000 - €8,000</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4">Riga Technical University</td>
                    <td className="p-4">1862</td>
                    <td className="p-4">€3,500 - €7,000</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4">Riga Stradins University</td>
                    <td className="p-4">1950</td>
                    <td className="p-4">€4,000 - €12,000</td>
                  </tr>
                  <tr>
                    <td className="p-4">Latvia University of Life Sciences and Technologies</td>
                    <td className="p-4">1939</td>
                    <td className="p-4">€2,500 - €6,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-[#1a202c] mb-4">Ready to Study in Latvia?</h2>
            <p className="text-lg text-[#4a5568] mb-8">Get expert guidance for your Latvia education journey</p>
            <Link href="/contact" className="bg-[#08bcb4] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#069aa2] transition-all inline-block">
              Get Free Counseling
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
```

## Build Command Summary:

1. **Clean everything:**
```bash
rm -rf .next node_modules
npm install
```

2. **Create directories:**
```bash
mkdir -p src/app/api/blog/[id]
mkdir -p src/app/api/admin/blogs/[id]
mkdir -p src/app/api/admin/blogs/count
mkdir -p src/app/api/admin/testimonials/[id]
mkdir -p src/app/api/admin/testimonials/count
mkdir -p src/app/admin/blogs/new
mkdir -p src/app/admin/testimonials/new
mkdir -p src/app/study-abroad/europe/malta
mkdir -p src/app/study-abroad/europe/latvia
```

3. **Build:**
```bash
npm run build
```

This should resolve ALL build errors and give you a fully functional admin system!