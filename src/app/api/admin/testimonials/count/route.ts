import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/lib/auth'
import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.NEON_DATABASE_URL!);

export async function GET() {
  const session = await getServerSession(authOptions)
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const result = await sql`SELECT COUNT(*) FROM "Testimonial"`;
    const count = parseInt(result[0].count);
    return NextResponse.json({ count })
  } catch (error) {
    console.error('Error counting testimonials:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}