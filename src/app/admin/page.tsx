'use client'
import { useState, useEffect } from 'react'

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    totalBlogs: 0,
    totalTestimonials: 0,
    recentActivity: 0
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchStats()
    // Refresh stats every 30 seconds for real-time updates
    const interval = setInterval(fetchStats, 30000)
    return () => clearInterval(interval)
  }, [])

  const fetchStats = async () => {
    try {
      const [blogsRes, testimonialsRes] = await Promise.all([
        fetch('/api/admin/blogs/count'),
        fetch('/api/admin/testimonials/count')
      ])
      
      if (blogsRes.ok && testimonialsRes.ok) {
        const blogsData = await blogsRes.json()
        const testimonialsData = await testimonialsRes.json()
        
        setStats({
          totalBlogs: blogsData.count || 0,
          totalTestimonials: testimonialsData.count || 0,
          recentActivity: (blogsData.count || 0) + (testimonialsData.count || 0)
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <div className="text-sm text-gray-500">
          Welcome to IAEC Admin Panel • Last updated: {new Date().toLocaleTimeString()}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center">
            <div className="text-3xl mr-4">📝</div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Total Blogs</h3>
              <p className="text-3xl font-bold text-[#08bcb4]">{stats.totalBlogs}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center">
            <div className="text-3xl mr-4">⭐</div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Total Testimonials</h3>
              <p className="text-3xl font-bold text-green-600">{stats.totalTestimonials}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center">
            <div className="text-3xl mr-4">📊</div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Total Content</h3>
              <p className="text-3xl font-bold text-purple-600">{stats.recentActivity}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <a 
              href="/admin/blogs/new"
              className="block w-full bg-[#08bcb4] text-white p-3 rounded-lg text-center hover:bg-[#069aa2] transition-colors font-medium"
            >
              Create New Blog Post
            </a>
            <a 
              href="/admin/testimonials/new"
              className="block w-full bg-[#08bcb4] text-white p-3 rounded-lg text-center hover:bg-[#069aa2] transition-colors font-medium"
            >
              Add New Testimonial
            </a>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
              <span className="text-sm text-gray-600">Content Statistics</span>
              <span className="text-sm font-medium text-[#08bcb4]">Updated now</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
              <span className="text-sm text-gray-600">Total Items</span>
              <span className="text-sm font-medium text-gray-900">{stats.recentActivity} items</span>
            </div>
            <button
              onClick={fetchStats}
              className="w-full bg-gray-100 text-gray-700 p-2 rounded text-sm hover:bg-gray-200 transition-colors"
            >
              Refresh Stats
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}