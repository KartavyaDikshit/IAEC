'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import TestimonialCard from "../../../components/admin/TestimonialCard"; // Corrected import path

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
        alert('Testimonial deleted successfully!')
      } else {
        const error = await response.json()
        alert(`Error: ${error.message || 'Failed to delete testimonial'}`)
      }
    } catch (error) {
      console.error('Error deleting testimonial:', error)
      alert('Error deleting testimonial')
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Testimonials Management</h1>
        <Link 
          href="/admin/testimonials/new"
          className="bg-[#08bcb4] text-white px-6 py-2 rounded-lg hover:bg-[#069aa2] transition-colors font-medium"
        >
          Add New Testimonial
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading ? (
          <div className="col-span-full text-center py-12">Loading testimonials...</div>
        ) : testimonials.length === 0 ? (
          <div className="col-span-full text-center py-12 text-gray-500">
            No testimonials found. <Link href="/admin/testimonials/new" className="text-[#08bcb4] hover:underline">Add your first testimonial</Link>
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