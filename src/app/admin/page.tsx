'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    totalBlogs: 0,
    totalTestimonials: 0,
    totalForms: 0,
    recentActivity: 0
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchStats()
    const interval = setInterval(fetchStats, 30000)
    return () => clearInterval(interval)
  }, [])

  const fetchStats = async () => {
    try {
      const [blogsRes, testimonialsRes, formsRes] = await Promise.all([
        fetch('/api/admin/blogs/count'),
        fetch('/api/admin/testimonials/count'),
        fetch('/api/forms')
      ])
      
      if (blogsRes.ok && testimonialsRes.ok && formsRes.ok) {
        const blogsData = await blogsRes.json()
        const testimonialsData = await testimonialsRes.json()
        const formsData = await formsRes.json()
        
        setStats({
          totalBlogs: blogsData.count || 0,
          totalTestimonials: testimonialsData.count || 0,
          totalForms: formsData.length || 0,
          recentActivity: (blogsData.count || 0) + (testimonialsData.count || 0) + (formsData.length || 0)
        })
      }
    } catch (error) {
      console.error('Error fetching stats:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-48 mb-8"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-200 h-24 rounded"></div>
            <div className="bg-gray-200 h-24 rounded"></div>
            <div className="bg-gray-200 h-24 rounded"></div>
            <div className="bg-gray-200 h-24 rounded"></div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
        <h1 className="text-2xl sm:text-3xl font-bold text-black mb-2 sm:mb-0">Dashboard</h1>
        <div className="text-xs sm:text-sm text-gray-500">
          Welcome to IAEC Admin • Last updated: {new Date().toLocaleTimeString()}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center">
            <div className="text-2xl mr-3">📝</div>
            <div>
              <h3 className="text-md font-semibold text-black mb-1">Total Blogs</h3>
              <p className="text-2xl font-bold text-[#08bcb4]">{stats.totalBlogs}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center">
            <div className="text-2xl mr-3">⭐</div>
            <div>
              <h3 className="text-md font-semibold text-black mb-1">Total Testimonials</h3>
              <p className="text-2xl font-bold text-[#08bcb4]">{stats.totalTestimonials}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center">
            <div className="text-2xl mr-3">📋</div>
            <div>
              <h3 className="text-md font-semibold text-black mb-1">Form Submissions</h3>
              <p className="text-2xl font-bold text-[#08bcb4]">{stats.totalForms}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center">
            <div className="text-2xl mr-3">📊</div>
            <div>
              <h3 className="text-md font-semibold text-black mb-1">Total Content</h3>
              <p className="text-2xl font-bold text-[#08bcb4]">{stats.recentActivity}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-black mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <Link href="/admin/blogs/new" className="block w-full bg-[#08bcb4] !text-white p-3 rounded-lg text-center hover:bg-opacity-90 transition-colors font-medium">
              Create New Blog Post
            </Link>
            <Link href="/admin/testimonials/new" className="block w-full bg-[#08bcb4] !text-white p-3 rounded-lg text-center hover:bg-opacity-90 transition-colors font-medium">
              Add New Testimonial
            </Link>
            <Link href="/admin/form-submissions" className="block w-full bg-[#08bcb4] !text-white p-3 rounded-lg text-center hover:bg-opacity-90 transition-colors font-medium">
              View Form Submissions
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
