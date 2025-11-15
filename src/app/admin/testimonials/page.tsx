'use client'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import Link from 'next/link'

interface Testimonial {
  id: string
  name: string
  content: string
  rating?: number
  imageUrl?: string
  university?: string
  course?: string
  country?: string
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
      const response = await fetch('/api/testimonials')
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
      const response = await fetch(`/api/testimonials/${id}`, { method: 'DELETE' })
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
    <div className="p-4 sm:p-6 md:p-8 space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-0">Testimonials Management</h1>
        <Link 
          href="/admin/testimonials/new"
          className="bg-[#08bcb4] !text-white px-4 py-2 rounded-lg hover:bg-[#069aa2] transition-colors text-sm sm:text-base font-medium"
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
            <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow flex flex-col">
              <div className="flex-grow">
                {testimonial.imageUrl && (
                  <div className="relative h-40 w-full mb-4 rounded-lg overflow-hidden">
                    <Image
                      src={testimonial.imageUrl}
                      alt={testimonial.name}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                )}
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{testimonial.name}</h3>
                
                <p className="text-sm text-gray-700 line-clamp-4 mb-4">
                  {testimonial.content}
                </p>
                
                <div className="space-y-1 text-sm text-gray-600">
                  {testimonial.rating && (
                    <p><strong>Rating:</strong> {'★'.repeat(testimonial.rating)}</p>
                  )}
                  {testimonial.university && (
                    <p><strong>University:</strong> {testimonial.university}</p>
                  )}
                  {testimonial.course && (
                    <p><strong>Course:</strong> {testimonial.course}</p>
                  )}
                  {testimonial.country && (
                    <p><strong>Country:</strong> {testimonial.country}</p>
                  )}
                </div>
              </div>
              
              <div className="mt-6 flex items-center justify-between">
                <p className="text-xs text-gray-500">
                  {new Date(testimonial.createdAt).toLocaleDateString()}
                </p>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleDeleteTestimonial(testimonial.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600 transition-colors"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}