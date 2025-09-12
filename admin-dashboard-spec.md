# IAEC Admin Dashboard - Simple Blog & Testimonial Management

## Overview
A simple, clean admin dashboard with Google Sign-in authentication for managing blogs and testimonials that will be displayed on the main website.

## Admin Dashboard Structure

### 1. Authentication Setup (`src/lib/auth.ts`)
```typescript
import { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    })
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      // Only allow specific email addresses to access admin
      const allowedEmails = [
        "admin@iaecconsultants.com",
        "kartavya@iaecconsultants.com",
        // Add more admin emails here
      ]
      
      if (user.email && allowedEmails.includes(user.email)) {
        return true
      }
      return false
    },
    async session({ session, token }) {
      return session
    }
  },
  pages: {
    signIn: '/admin/login',
    error: '/admin/error',
  }
}
```

### 2. Admin Layout (`src/app/admin/layout.tsx`)
```tsx
'use client'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import AdminSidebar from '@/components/admin/AdminSidebar'
import AdminHeader from '@/components/admin/AdminHeader'

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
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
      <AdminHeader />
      <div className="flex">
        <AdminSidebar />
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  )
}
```

### 3. Admin Login Page (`src/app/admin/login/page.tsx`)
```tsx
'use client'
import { signIn, useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import { useState } from 'react'

export default function AdminLogin() {
  const { data: session } = useSession()
  const [isLoading, setIsLoading] = useState(false)

  if (session) {
    redirect('/admin')
  }

  const handleGoogleSignIn = async () => {
    setIsLoading(true)
    await signIn('google', { callbackUrl: '/admin' })
    setIsLoading(false)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#08bcb4] mb-2">IAEC Admin</h1>
          <p className="text-gray-600">Sign in to manage content</p>
        </div>
        
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <button
            onClick={handleGoogleSignIn}
            disabled={isLoading}
            className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50"
          >
            {isLoading ? (
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-[#08bcb4]"></div>
            ) : (
              <>
                <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Continue with Google
              </>
            )}
          </button>
          
          <div className="mt-6 text-center text-sm text-gray-500">
            Only authorized IAEC staff can access this panel
          </div>
        </div>
      </div>
    </div>
  )
}
```

### 4. Admin Dashboard Home (`src/app/admin/page.tsx`)
```tsx
'use client'
import { useState, useEffect } from 'react'
import StatsCard from '@/components/admin/StatsCard'

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    totalBlogs: 0,
    totalTestimonials: 0,
    recentActivity: 0
  })

  useEffect(() => {
    // Fetch stats from API
    fetchStats()
  }, [])

  const fetchStats = async () => {
    try {
      const [blogsRes, testimonialsRes] = await Promise.all([
        fetch('/api/admin/blogs/count'),
        fetch('/api/admin/testimonials/count')
      ])
      
      const blogsData = await blogsRes.json()
      const testimonialsData = await testimonialsRes.json()
      
      setStats({
        totalBlogs: blogsData.count,
        totalTestimonials: testimonialsData.count,
        recentActivity: blogsData.count + testimonialsData.count
      })
    } catch (error) {
      console.error('Error fetching stats:', error)
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <div className="text-sm text-gray-500">
          Welcome to IAEC Admin Panel
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatsCard 
          title="Total Blogs" 
          value={stats.totalBlogs} 
          icon="📝"
          color="blue"
        />
        <StatsCard 
          title="Total Testimonials" 
          value={stats.totalTestimonials} 
          icon="⭐"
          color="green"
        />
        <StatsCard 
          title="Total Content" 
          value={stats.recentActivity} 
          icon="📊"
          color="purple"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <a 
              href="/admin/blogs/new"
              className="block w-full bg-[#08bcb4] text-white p-3 rounded-lg text-center hover:bg-[#069aa2] transition-colors"
            >
              Create New Blog Post
            </a>
            <a 
              href="/admin/testimonials/new"
              className="block w-full bg-green-600 text-white p-3 rounded-lg text-center hover:bg-green-700 transition-colors"
            >
              Add New Testimonial
            </a>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
          <div className="text-center text-gray-500 py-8">
            Recent content updates will appear here
          </div>
        </div>
      </div>
    </div>
  )
}
```

### 5. Blog Management (`src/app/admin/blogs/page.tsx`)
```tsx
'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import BlogListItem from '@/components/admin/BlogListItem'

interface Blog {
  id: string
  title: string
  content: string
  author: string
  publishedAt: string
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
      const data = await response.json()
      setBlogs(data.blogs)
    } catch (error) {
      console.error('Error fetching blogs:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleDeleteBlog = async (id: string) => {
    if (!confirm('Are you sure you want to delete this blog post?')) return
    
    try {
      await fetch(`/api/admin/blogs/${id}`, { method: 'DELETE' })
      setBlogs(blogs.filter(blog => blog.id !== id))
    } catch (error) {
      console.error('Error deleting blog:', error)
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
          <div className="divide-y divide-gray-200">
            {blogs.map((blog) => (
              <BlogListItem 
                key={blog.id}
                blog={blog}
                onDelete={handleDeleteBlog}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
```

### 6. Create/Edit Blog Page (`src/app/admin/blogs/new/page.tsx`)
```tsx
'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import BlogEditor from '@/components/admin/BlogEditor'

export default function CreateBlog() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const handleSave = async (blogData: any) => {
    setLoading(true)
    try {
      const response = await fetch('/api/admin/blogs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(blogData)
      })
      
      if (response.ok) {
        router.push('/admin/blogs')
      }
    } catch (error) {
      console.error('Error creating blog:', error)
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
        <BlogEditor onSave={handleSave} loading={loading} />
      </div>
    </div>
  )
}
```

### 7. Testimonials Management (`src/app/admin/testimonials/page.tsx`)
```tsx
'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import TestimonialCard from '@/components/admin/TestimonialCard'

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
      const data = await response.json()
      setTestimonials(data.testimonials)
    } catch (error) {
      console.error('Error fetching testimonials:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleDeleteTestimonial = async (id: string) => {
    if (!confirm('Are you sure you want to delete this testimonial?')) return
    
    try {
      await fetch(`/api/admin/testimonials/${id}`, { method: 'DELETE' })
      setTestimonials(testimonials.filter(t => t.id !== id))
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
          <div className="col-span-full text-center py-8">Loading testimonials...</div>
        ) : testimonials.length === 0 ? (
          <div className="col-span-full text-center py-8 text-gray-500">
            No testimonials found. <Link href="/admin/testimonials/new" className="text-green-600">Add your first testimonial</Link>
          </div>
        ) : (
          testimonials.map((testimonial) => (
            <TestimonialCard 
              key={testimonial.id}
              testimonial={testimonial}
              onDelete={handleDeleteTestimonial}
            />
          ))
        )}
      </div>
    </div>
  )
}
```

### 8. API Routes

#### Blog API (`src/app/api/admin/blogs/route.ts`)
```typescript
import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/lib/auth'
import fs from 'fs/promises'
import path from 'path'

// Simple JSON file storage (replace with database if needed)
const BLOGS_FILE = path.join(process.cwd(), 'data/blogs.json')

async function ensureDataDirectory() {
  const dataDir = path.join(process.cwd(), 'data')
  try {
    await fs.access(dataDir)
  } catch {
    await fs.mkdir(dataDir, { recursive: true })
  }
}

async function readBlogs() {
  try {
    await ensureDataDirectory()
    const data = await fs.readFile(BLOGS_FILE, 'utf-8')
    return JSON.parse(data)
  } catch {
    return []
  }
}

async function writeBlogs(blogs: any[]) {
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
  
  const newBlog = {
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

#### Testimonials API (`src/app/api/admin/testimonials/route.ts`)
```typescript
import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/lib/auth'
import fs from 'fs/promises'
import path from 'path'

const TESTIMONIALS_FILE = path.join(process.cwd(), 'data/testimonials.json')

async function ensureDataDirectory() {
  const dataDir = path.join(process.cwd(), 'data')
  try {
    await fs.access(dataDir)
  } catch {
    await fs.mkdir(dataDir, { recursive: true })
  }
}

async function readTestimonials() {
  try {
    await ensureDataDirectory()
    const data = await fs.readFile(TESTIMONIALS_FILE, 'utf-8')
    return JSON.parse(data)
  } catch {
    return []
  }
}

async function writeTestimonials(testimonials: any[]) {
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
  
  const newTestimonial = {
    id: Date.now().toString(),
    ...testimonialData,
    createdAt: new Date().toISOString()
  }

  testimonials.push(newTestimonial)
  await writeTestimonials(testimonials)

  return NextResponse.json({ testimonial: newTestimonial })
}
```

### 9. Public Blog Display (`src/app/blog/page.tsx`)
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
```

## Environment Variables (.env.local)
```
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key-here
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
```

## Features Summary

### ✅ Simple & Clean Design
- Minimalist admin interface
- Easy navigation
- Intuitive content management

### ✅ Google Authentication
- Secure login with Google OAuth
- Restricted access to authorized emails only
- Session management with NextAuth.js

### ✅ Blog Management
- Create, edit, delete blog posts
- Draft/published status
- Rich text content editing
- SEO-friendly content structure

### ✅ Testimonial Management
- Add, edit, delete testimonials
- Student information (name, university, course, country)
- Rating system
- Image support

### ✅ Real-time Updates
- Changes reflect immediately on website
- JSON file storage (easily upgradeable to database)
- API-driven content management

### ✅ Responsive Design
- Mobile-friendly admin panel
- Consistent with main website design
- IAEC brand colors (#08bcb4)

## Setup Instructions

1. **Install Dependencies**
```bash
npm install next-auth @next-auth/prisma-adapter
```

2. **Set up Google OAuth**
- Go to Google Cloud Console
- Create OAuth 2.0 credentials
- Add authorized redirect URIs

3. **Configure Environment Variables**
- Copy the .env.local template
- Fill in your Google OAuth credentials

4. **Deploy and Test**
- Run locally: `npm run dev`
- Test admin login at `/admin/login`
- Create test content

This admin dashboard is simple, secure, and perfectly suited for IAEC's content management needs while maintaining the design consistency with the main website.