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

interface Blog {
  id: string;
  [key: string]: any; // Allow other properties
}

async function writeBlogs(blogs: Blog[]) {
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
    
    const blogIndex = blogs.findIndex((b: Blog) => b.id === id)
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
    
    const filteredBlogs = blogs.filter((b: Blog) => b.id !== id)
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
