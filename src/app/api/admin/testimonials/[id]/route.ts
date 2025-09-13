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

interface Testimonial {
  id: string;
  [key: string]: any; // Allow other properties
}

async function writeTestimonials(testimonials: Testimonial[]) {
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
    
    // Fix: Convert both to strings for comparison
    const filteredTestimonials = testimonials.filter((t: Testimonial) => String(t.id) !== String(id))
    
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