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