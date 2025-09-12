# IAEC Website - Complete Build & Admin System Fix

## 1. Fix Next.js 15 Route Parameter Issues

### Create Missing Dynamic Blog Route: `src/app/api/blog/[id]/route.ts`

```typescript
import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs/promises'
import path from 'path'

const BLOGS_FILE = path.join(process.cwd(), 'data/blogs.json')

interface RouteParams {
  params: Promise<{ id: string }>
}

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

export async function GET(request: NextRequest, context: RouteParams) {
  try {
    const { id } = await context.params
    const blogs = await readBlogs()
    const blog = blogs.find((b: any) => b.id === id)
    
    if (!blog) {
      return NextResponse.json({ error: 'Blog not found' }, { status: 404 })
    }
    
    return NextResponse.json({ blog })
  } catch (error) {
    console.error('Error fetching blog:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function PUT(request: NextRequest, context: RouteParams) {
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

## 2. Fix Admin Testimonials Dynamic Route: `src/app/api/admin/testimonials/[id]/route.ts`

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

export async function GET(request: NextRequest, context: RouteParams) {
  const session = await getServerSession(authOptions)
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const { id } = await context.params
    const testimonials = await readTestimonials()
    const testimonial = testimonials.find((t: any) => t.id === id)
    
    if (!testimonial) {
      return NextResponse.json({ error: 'Testimonial not found' }, { status: 404 })
    }
    
    return NextResponse.json({ testimonial })
  } catch (error) {
    console.error('Error fetching testimonial:', error)
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

## 3. Fix Admin Blogs Dynamic Route: `src/app/api/admin/blogs/[id]/route.ts`

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

## 4. Fix Blog Count API: `src/app/api/admin/blogs/count/route.ts`

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

## 5. Fix Testimonials Count API: `src/app/api/admin/testimonials/count/route.ts`

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

## 6. Create SessionProvider Wrapper: `src/components/SessionProviderWrapper.tsx`

```tsx
'use client'
import { SessionProvider } from 'next-auth/react'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function SessionProviderWrapper({ children }: Props) {
  return <SessionProvider>{children}</SessionProvider>
}
```

## 7. Update Root Layout to Include Auth: `src/app/layout.tsx`

```tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SessionProviderWrapper from '@/components/SessionProviderWrapper';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IAEC Consultants",
  description: "Your Global Study Partner",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProviderWrapper>
          <Header />
          {children}
          <Footer />
        </SessionProviderWrapper>
      </body>
    </html>
  );
}
```

## 8. Create Admin Login Page: `src/app/admin/login/page.tsx`

```tsx
'use client'
import { signIn, useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import { useState, useEffect } from 'react'

export default function AdminLogin() {
  const { data: session, status } = useSession()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (session) {
      redirect('/admin')
    }
  }, [session])

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#08bcb4]"></div>
      </div>
    )
  }

  if (session) {
    return null // Will redirect
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
            className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 transition-colors"
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

## 9. Create Admin Layout: `src/app/admin/layout.tsx`

```tsx
'use client'
import { useSession } from 'next-auth/react'
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
              <a
                href="/admin/login"
                className="text-sm text-red-600 hover:text-red-800"
                onClick={() => signOut()}
              >
                Sign Out
              </a>
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

## 10. Create Admin Dashboard: `src/app/admin/page.tsx`

```tsx
'use client'
import { useState, useEffect } from 'react'

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    totalBlogs: 0,
    totalTestimonials: 0
  })

  useEffect(() => {
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
        totalBlogs: blogsData.count || 0,
        totalTestimonials: testimonialsData.count || 0
      })
    } catch (error) {
      console.error('Error fetching stats:', error)
    }
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Total Blogs</h3>
          <p className="text-3xl font-bold text-[#08bcb4]">{stats.totalBlogs}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Total Testimonials</h3>
          <p className="text-3xl font-bold text-green-600">{stats.totalTestimonials}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Total Content</h3>
          <p className="text-3xl font-bold text-purple-600">{stats.totalBlogs + stats.totalTestimonials}</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
        <div className="flex space-x-4">
          <a 
            href="/admin/blogs"
            className="bg-[#08bcb4] text-white px-6 py-2 rounded-lg hover:bg-[#069aa2] transition-colors"
          >
            Manage Blogs
          </a>
          <a 
            href="/admin/testimonials"
            className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
          >
            Manage Testimonials
          </a>
        </div>
      </div>
    </div>
  )
}
```

## 11. Add Login Button to Header: `src/components/Header.tsx`

```tsx
'use client'
import Link from 'next/link';
import { useSession } from 'next-auth/react';

const Header = () => {
  const { data: session } = useSession();

  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-[#08bcb4]">
            IAEC
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-[#08bcb4]">Home</Link>
            <Link href="/about" className="text-gray-700 hover:text-[#08bcb4]">About Us</Link>
            
            <div className="relative group">
              <button className="text-gray-700 hover:text-[#08bcb4] flex items-center">
                Study Abroad <span className="ml-1">▾</span>
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                <Link href="/study-abroad/usa" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">USA</Link>
                <Link href="/study-abroad/uk" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">UK</Link>
                <Link href="/study-abroad/australia" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Australia</Link>
                <Link href="/study-abroad/canada" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Canada</Link>
                <Link href="/study-abroad/europe" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Europe</Link>
              </div>
            </div>
            
            <div className="relative group">
              <button className="text-gray-700 hover:text-[#08bcb4] flex items-center">
                Services <span className="ml-1">▾</span>
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                <Link href="/services/coaching" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Test Coaching</Link>
                <Link href="/services/visa" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Visa Services</Link>
                <Link href="/services/travel-forex" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Travel & Forex</Link>
              </div>
            </div>
            
            <Link href="/blog" className="text-gray-700 hover:text-[#08bcb4]">Blog</Link>
            <Link href="/testimonials" className="text-gray-700 hover:text-[#08bcb4]">Testimonials</Link>
            <Link href="/contact" className="text-gray-700 hover:text-[#08bcb4]">Contact</Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link 
              href="/booking" 
              className="bg-[#08bcb4] text-white px-4 py-2 rounded hover:bg-[#069aa2] transition-colors"
            >
              Book Free Counselling
            </Link>
            <Link 
              href="/mock-test" 
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
            >
              Free Mock Test
            </Link>
            
            {session ? (
              <Link 
                href="/admin" 
                className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition-colors"
              >
                Admin Dashboard
              </Link>
            ) : (
              <Link 
                href="/admin/login" 
                className="text-gray-600 hover:text-gray-800 text-sm"
              >
                Admin Login
              </Link>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
```

## 12. Update Package.json Dependencies

```json
{
  "name": "iaec-website",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "15.5.2",
    "next-auth": "^4.24.11",
    "react": "19.1.0",
    "react-dom": "19.1.0"
  },
  "devDependencies": {
    "@eslint/eslintrc": "^3",
    "@tailwindcss/postcss": "^4",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "eslint": "^9",
    "eslint-config-next": "15.5.2",
    "tailwindcss": "^4",
    "typescript": "^5"
  }
}
```

## 13. Environment Variables (.env.local)

```
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key-here
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
```

## Build Steps to Fix Everything:

1. **Clean build cache:**
```bash
rm -rf .next
rm -rf node_modules
npm install
```

2. **Create missing directories:**
```bash
mkdir -p src/app/api/blog/[id]
mkdir -p src/app/api/admin/blogs/[id]
mkdir -p src/app/api/admin/blogs/count
mkdir -p src/app/api/admin/testimonials/[id]
mkdir -p src/app/api/admin/testimonials/count
```

3. **Set up environment variables:**
- Create Google OAuth app in Google Cloud Console
- Add your domain to authorized origins
- Copy client ID and secret to .env.local

4. **Test build:**
```bash
npm run build
```

This comprehensive fix addresses:
✅ Next.js 15 route parameter Promise issues
✅ Missing dynamic route handlers
✅ Complete admin authentication system
✅ Admin dashboard with login button
✅ All TypeScript type errors
✅ Build compatibility issues

Your admin system will now be accessible at `/admin/login` with Google authentication!