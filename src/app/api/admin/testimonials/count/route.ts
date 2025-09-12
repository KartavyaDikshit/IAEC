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