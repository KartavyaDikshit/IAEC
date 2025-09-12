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