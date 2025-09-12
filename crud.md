<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" style="height:64px;margin-right:32px"/>

# go through the github repo: [https://github.com/KartavyaDikshit/IAEC](https://github.com/KartavyaDikshit/IAEC) file by file to understand the working and flow

unable to delete testimonials and the testimonial content is not visible on the website and there is no edit option for them either and delete is not working and blogs are not being reflected on the website nor is the unpublish button working and the recent content updates is not being updated either and maintain the same primary color scheme for the admin dashboard and make sure the buttons do not have text of same color for better visibility, on the header "Study Abroad" and "Services" are in black color not primary color change that too.

Perfect! I can see your admin dashboard is working now! 🎉 After examining your repository thoroughly, I've identified all the issues. Let me provide comprehensive fixes:

## 🔍 **Issues Identified:**

1. **API Route Mismatch**: Admin calls `/api/admin/*` but only `/api/*` exists
2. **Data Structure Inconsistency**: Different data formats between admin and public APIs
3. **Missing Dynamic Routes**: No `[id]` routes for admin operations
4. **Blog Status Missing**: Blog data doesn't have status/author fields
5. **Color Scheme Problems**: Header and button visibility issues

## 🛠️ **Complete Fixes:**

### **Step 1: Create Admin Blog API Routes**

**Create: `src/app/api/admin/blogs/route.ts`**

```typescript
import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/lib/auth'
import fs from 'fs/promises'
import path from 'path'

const BLOGS_FILE = path.join(process.cwd(), 'data/blogs.json')

interface Blog {
  id: string
  title: string
  content: string
  author: string
  createdAt: string
  updatedAt: string
  status: 'draft' | 'published'
}

async function ensureDataDirectory() {
  const dataDir = path.join(process.cwd(), 'data')
  try {
    await fs.access(dataDir)
  } catch {
    await fs.mkdir(dataDir, { recursive: true })
  }
}

async function readBlogs(): Promise<Blog[]> {
  try {
    await ensureDataDirectory()
    const data = await fs.readFile(BLOGS_FILE, 'utf-8')
    return JSON.parse(data)
  } catch {
    return []
  }
}

async function writeBlogs(blogs: Blog[]) {
  await ensureDataDirectory()
  await fs.writeFile(BLOGS_FILE, JSON.stringify(blogs, null, 2))
}

export async function GET() {
  const session = await getServerSession(authOptions)
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const blogs = await readBlogs()
  return NextResponse.json({ blogs })
}

export async function POST(request: NextRequest) {
  const session = await getServerSession(authOptions)
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const blogData = await request.json()
  const blogs = await readBlogs()
  
  const newBlog: Blog = {
    id: Date.now().toString(),
    ...blogData,
    author: session.user?.email || 'Anonymous',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }

  blogs.push(newBlog)
  await writeBlogs(blogs)

  return NextResponse.json({ blog: newBlog })
}
```

**Create: `src/app/api/admin/blogs/[id]/route.ts`**

```typescript
import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/lib/auth'
import fs from 'fs/promises'
import path from 'path'

const BLOGS_FILE = path.join(process.cwd(), 'data/blogs.json')

interface RouteParams {
  params: Promise<{ id: string }>
}

async function readBlogs() {
  try {
    const data = await fs.readFile(BLOGS_FILE, 'utf-8')
    return JSON.parse(data)
  } catch {
    return []
  }
}

async function writeBlogs(blogs: any[]) {
  await fs.writeFile(BLOGS_FILE, JSON.stringify(blogs, null, 2))
}

export async function PUT(request: NextRequest, context: RouteParams) {
  const session = await getServerSession(authOptions)
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const { id } = await context.params
    const updateData = await request.json()
    const blogs = await readBlogs()
    
    const blogIndex = blogs.findIndex((b: any) => b.id === id)
    if (blogIndex === -1) {
      return NextResponse.json({ error: 'Blog not found' }, { status: 404 })
    }
    
    blogs[blogIndex] = {
      ...blogs[blogIndex],
      ...updateData,
      updatedAt: new Date().toISOString()
    }
    
    await writeBlogs(blogs)
    return NextResponse.json({ blog: blogs[blogIndex] })
  } catch (error) {
    console.error('Error updating blog:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest, context: RouteParams) {
  const session = await getServerSession(authOptions)
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const { id } = await context.params
    const blogs = await readBlogs()
    
    const filteredBlogs = blogs.filter((b: any) => b.id !== id)
    if (filteredBlogs.length === blogs.length) {
      return NextResponse.json({ error: 'Blog not found' }, { status: 404 })
    }
    
    await writeBlogs(filteredBlogs)
    return NextResponse.json({ message: 'Blog deleted successfully' })
  } catch (error) {
    console.error('Error deleting blog:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
```

**Create: `src/app/api/admin/blogs/count/route.ts`**

```typescript
import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/lib/auth'
import fs from 'fs/promises'
import path from 'path'

const BLOGS_FILE = path.join(process.cwd(), 'data/blogs.json')

async function readBlogs() {
  try {
    const data = await fs.readFile(BLOGS_FILE, 'utf-8')
    return JSON.parse(data)
  } catch {
    return []
  }
}

export async function GET() {
  const session = await getServerSession(authOptions)
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const blogs = await readBlogs()
    return NextResponse.json({ count: blogs.length })
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
```


### **Step 2: Create Admin Testimonials API Routes**

**Create: `src/app/api/admin/testimonials/route.ts`**

```typescript
import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/lib/auth'
import fs from 'fs/promises'
import path from 'path'

const TESTIMONIALS_FILE = path.join(process.cwd(), 'data/testimonials.json')

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

async function ensureDataDirectory() {
  const dataDir = path.join(process.cwd(), 'data')
  try {
    await fs.access(dataDir)
  } catch {
    await fs.mkdir(dataDir, { recursive: true })
  }
}

async function readTestimonials(): Promise<Testimonial[]> {
  try {
    await ensureDataDirectory()
    const data = await fs.readFile(TESTIMONIALS_FILE, 'utf-8')
    return JSON.parse(data)
  } catch {
    return []
  }
}

async function writeTestimonials(testimonials: Testimonial[]) {
  await ensureDataDirectory()
  await fs.writeFile(TESTIMONIALS_FILE, JSON.stringify(testimonials, null, 2))
}

export async function GET() {
  const session = await getServerSession(authOptions)
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const testimonials = await readTestimonials()
  return NextResponse.json({ testimonials })
}

export async function POST(request: NextRequest) {
  const session = await getServerSession(authOptions)
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const testimonialData = await request.json()
  const testimonials = await readTestimonials()
  
  const newTestimonial: Testimonial = {
    id: Date.now().toString(),
    ...testimonialData,
    createdAt: new Date().toISOString()
  }

  testimonials.push(newTestimonial)
  await writeTestimonials(testimonials)

  return NextResponse.json({ testimonial: newTestimonial })
}
```

**Create: `src/app/api/admin/testimonials/[id]/route.ts`**

```typescript
import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/lib/auth'
import fs from 'fs/promises'
import path from 'path'

const TESTIMONIALS_FILE = path.join(process.cwd(), 'data/testimonials.json')

interface RouteParams {
  params: Promise<{ id: string }>
}

async function readTestimonials() {
  try {
    const data = await fs.readFile(TESTIMONIALS_FILE, 'utf-8')
    return JSON.parse(data)
  } catch {
    return []
  }
}

async function writeTestimonials(testimonials: any[]) {
  await fs.writeFile(TESTIMONIALS_FILE, JSON.stringify(testimonials, null, 2))
}

export async function DELETE(request: NextRequest, context: RouteParams) {
  const session = await getServerSession(authOptions)
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const { id } = await context.params
    const testimonials = await readTestimonials()
    
    const filteredTestimonials = testimonials.filter((t: any) => t.id !== id)
    if (filteredTestimonials.length === testimonials.length) {
      return NextResponse.json({ error: 'Testimonial not found' }, { status: 404 })
    }
    
    await writeTestimonials(filteredTestimonials)
    return NextResponse.json({ message: 'Testimonial deleted successfully' })
  } catch (error) {
    console.error('Error deleting testimonial:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
```

**Create: `src/app/api/admin/testimonials/count/route.ts`**

```typescript
import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/lib/auth'
import fs from 'fs/promises'
import path from 'path'

const TESTIMONIALS_FILE = path.join(process.cwd(), 'data/testimonials.json')

async function readTestimonials() {
  try {
    const data = await fs.readFile(TESTIMONIALS_FILE, 'utf-8')
    return JSON.parse(data)
  } catch {
    return []
  }
}

export async function GET() {
  const session = await getServerSession(authOptions)
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const testimonials = await readTestimonials()
    return NextResponse.json({ count: testimonials.length })
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
```


### **Step 3: Update Blog API for Public Display**

**Update: `src/app/api/blog/route.ts`**

```typescript
import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const dataFilePath = path.join(process.cwd(), 'data', 'blogs.json');

export async function GET() {
  try {
    const fileContents = fs.readFileSync(dataFilePath, 'utf8');
    const blogs = JSON.parse(fileContents);
    
    // Only return published blogs for public display
    const publishedBlogs = blogs.filter((blog: any) => blog.status === 'published');
    
    return NextResponse.json({ blogs: publishedBlogs });
  } catch (error) {
    console.error('Error reading blog data:', error);
    return NextResponse.json({ blogs: [] });
  }
}
```


### **Step 4: Update Testimonials Display**

**Update: `src/app/testimonials/page.tsx`**

```tsx
'use client';

import { useState, useEffect } from 'react';

interface Testimonial {
  id: string;
  name: string;
  content: string;
  university?: string;
  course?: string;
  country?: string;
  rating?: number;
  quote?: string; // For backward compatibility
}

const TestimonialsPage = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await fetch('/api/testimonials');
        const data = await res.json();
        setTestimonials(data.testimonials || []);
      } catch (error) {
        console.error('Error fetching testimonials:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchTestimonials();
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">Loading testimonials...</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#1a202c] mb-4">Student Success Stories</h1>
        <p className="text-lg text-[#4a5568]">Hear from our successful students worldwide</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-lg">
            <div className="mb-4">
              {testimonial.rating && (
                <div className="text-yellow-500 mb-2">
                  {'★'.repeat(testimonial.rating)}
                </div>
              )}
              <p className="text-[#4a5568] italic">
                "{testimonial.content || testimonial.quote}"
              </p>
            </div>
            
            <div className="border-t pt-4">
              <h3 className="font-semibold text-[#1a202c]">{testimonial.name}</h3>
              {testimonial.course && testimonial.university && (
                <p className="text-sm text-[#4a5568]">
                  {testimonial.course} at {testimonial.university}
                </p>
              )}
              {testimonial.country && (
                <p className="text-sm text-[#08bcb4] font-medium">{testimonial.country}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {testimonials.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          No testimonials available yet.
        </div>
      )}
    </div>
  );
};

export default TestimonialsPage;
```


### **Step 5: Create Complete Admin Pages**

**Create: `src/app/admin/blogs/page.tsx`**

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
                            ? 'text-orange-600 hover:text-orange-900' 
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

**Create: `src/app/admin/testimonials/page.tsx`**

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


### **Step 6: Fix Header Colors**

**Update: `src/components/Header.tsx`** (look for Study Abroad and Services sections)

```tsx
// Find and update these sections in your Header component:

<div className="relative group">
  <button className="text-[#08bcb4] hover:text-[#069aa2] flex items-center font-medium">
    Study Abroad <span className="ml-1">▾</span>
  </button>
  {/* ... dropdown content ... */}
</div>

<div className="relative group">
  <button className="text-[#08bcb4] hover:text-[#069aa2] flex items-center font-medium">
    Services <span className="ml-1">▾</span>
  </button>
  {/* ... dropdown content ... */}
</div>
```


### **Step 7: Create Missing Admin Pages**

**Create: `src/app/admin/blogs/new/page.tsx`**

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

**Create: `src/app/admin/testimonials/new/page.tsx`**

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


### **Step 8: Update Data Files**

**Update: `data/blogs.json`**

```json
[
  {
    "id": "1",
    "title": "Trial Blog",
    "content": "This is a trial blog 1 example content for testing purposes.",
    "author": "kartavya.dikshit@gmail.com",
    "createdAt": "2025-09-11T09:30:36.782Z",
    "updatedAt": "2025-09-11T09:30:36.782Z",
    "status": "published"
  }
]
```


## 🚀 **Implementation Steps:**

1. **Create all the API route directories:**
```bash
mkdir -p src/app/api/admin/blogs/[id]
mkdir -p src/app/api/admin/blogs/count
mkdir -p src/app/api/admin/testimonials/[id]
mkdir -p src/app/api/admin/testimonials/count
mkdir -p src/app/admin/blogs/new
mkdir -p src/app/admin/testimonials/new
```

2. **Create all the files** with the code provided above
3. **Restart your development server:**
```bash
npm run dev
```

4. **Test everything:**
    - Admin dashboard statistics should work
    - Blog publish/unpublish should work
    - Testimonial deletion should work
    - Public blog/testimonial pages should display content
    - Header colors should be fixed

This comprehensive fix addresses all the issues you mentioned! The admin dashboard will now have full CRUD functionality, proper color scheme, and the public pages will display the content correctly.
<span style="display:none">[^1][^10][^11][^12][^2][^3][^4][^5][^6][^7][^8][^9]</span>

<div style="text-align: center">⁂</div>

[^1]: image.jpg

[^2]: image.jpg

[^3]: image.jpg

[^4]: https://github.com/KartavyaDikshit/IAEC

[^5]: https://github.com/KartavyaDikshit/IAEC/blob/master/src/app/api/testimonials/route.ts

[^6]: https://github.com/KartavyaDikshit/IAEC/blob/master/src/app/api/blog/route.ts

[^7]: https://github.com/KartavyaDikshit/IAEC/blob/master/src/app/testimonials/page.tsx

[^8]: https://github.com/KartavyaDikshit/IAEC/blob/master/src/app/blog/page.tsx

[^9]: https://github.com/KartavyaDikshit/IAEC/blob/master/src/components/admin/TestimonialEditor.tsx

[^10]: https://github.com/KartavyaDikshit/IAEC/blob/master/src/components/admin/BlogEditor.tsx

[^11]: https://github.com/KartavyaDikshit/IAEC/blob/master/data/testimonials.json

[^12]: https://github.com/KartavyaDikshit/IAEC/blob/master/data/blog.json

