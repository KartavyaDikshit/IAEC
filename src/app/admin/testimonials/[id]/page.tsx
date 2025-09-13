'use client'
import { useState, useEffect } from 'react'
import { useRouter, useParams } from 'next/navigation'
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

export default function EditTestimonialPage() {
  const router = useRouter()
  const params = useParams()
  const { id } = params; // Get the testimonial ID from the URL
  const [loading, setLoading] = useState(false)
  const [testimonial, setTestimonial] = useState<TestimonialData | null>(null)
  const [fetchError, setFetchError] = useState<string | null>(null)

  useEffect(() => {
    const fetchTestimonial = async () => {
      if (!id) return;
      setLoading(true);
      try {
        const response = await fetch(`/api/admin/testimonials/${id}`);
        if (response.ok) {
          const data = await response.json();
          setTestimonial(data);
        } else {
          setFetchError(`Failed to fetch testimonial: ${response.statusText}`);
        }
      } catch (error) {
        setFetchError("Error fetching testimonial data.");
        console.error("Error fetching testimonial:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchTestimonial();
  }, [id]);

  const handleSave = async (testimonialData: TestimonialData) => {
    setLoading(true)
    
    try {
      const response = await fetch(`/api/admin/testimonials/${id}`, {
        method: 'PUT', // Assuming PUT for updates
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(testimonialData)
      })
      
      if (response.ok) {
        router.push('/admin/testimonials')
      } else {
        const error = await response.json()
        alert(`Error updating testimonial: ${error.message || 'Unknown error'}`)
      }
    } catch (error) {
      console.error('Error updating testimonial:', error)
      alert('Error updating testimonial')
    } finally {
      setLoading(false)
    }
  }

  if (loading && !testimonial) {
    return <div className="text-center py-8">Loading testimonial...</div>;
  }

  if (fetchError) {
    return <div className="text-center py-8 text-red-500">{fetchError}</div>;
  }

  if (!testimonial) {
    return <div className="text-center py-8">Testimonial not found.</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Edit Testimonial</h1>
        <button
          onClick={() => router.back()}
          className="text-[#08bcb4] hover:text-[#069aa2] font-medium"
        >
          ← Back to Testimonials
        </button>
      </div>

      <div className="bg-white rounded-lg shadow">
        <TestimonialEditor onSave={handleSave} loading={loading} testimonial={testimonial} />
      </div>
    </div>
  )
}