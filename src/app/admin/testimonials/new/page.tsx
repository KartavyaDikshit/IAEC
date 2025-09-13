'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import TestimonialEditor from "../../../../components/admin/TestimonialEditor"; // Corrected import path

interface TestimonialData {
  name: string;
  content: string;
  university: string;
  course: string;
  country: string;
  rating: number;
  imageUrl?: string;
}

export default function CreateTestimonial() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSave = async (testimonialData: TestimonialData) => {
    setLoading(true)
    
    try {
      const response = await fetch('/api/admin/testimonials', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(testimonialData)
      })
      
      if (response.ok) {
        setSuccess(true)
        setTimeout(() => {
          router.push('/admin/testimonials')
        }, 1000)
      } else {
        const error = await response.json()
        alert(`Error creating testimonial: ${error.message || 'Unknown error'}`)
      }
    } catch (error) {
      console.error('Error creating testimonial:', error)
      alert('Error creating testimonial')
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
          <div className="text-green-600 text-6xl mb-4">✓</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Success!</h2>
          <p className="text-gray-600">Testimonial added successfully. Redirecting...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Add New Testimonial</h1>
        <button
          onClick={() => router.back()}
          className="text-[#08bcb4] hover:text-[#069aa2] font-medium"
        >
          ← Back to Testimonials
        </button>
      </div>

      <div className="bg-white rounded-lg shadow">
        <TestimonialEditor onSave={handleSave} loading={loading} />
      </div>
    </div>
  )
}
