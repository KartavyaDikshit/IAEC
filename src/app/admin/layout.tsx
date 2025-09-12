'use client'
import { useSession, signOut } from 'next-auth/react'
import { redirect } from 'next/navigation'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function AdminLayout({ children }: Props) {
  const { data: session, status } = useSession()

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#08bcb4]"></div>
      </div>
    )
  }

  if (!session) {
    redirect('/admin-login')  // Changed from '/admin/login' to '/admin-login'
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold text-[#08bcb4]">IAEC Admin Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-700">Welcome, {session.user?.email}</span>
              <button
                onClick={() => signOut({ callbackUrl: '/' })}
                className="text-sm text-red-600 hover:text-red-800"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </nav>
      
      <div className="flex">
        <aside className="w-64 bg-white shadow-sm min-h-screen">
          <nav className="p-6 space-y-2">
            <a href="/admin" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">
              Dashboard
            </a>
            <a href="/admin/blogs" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">
              Blogs
            </a>
            <a href="/admin/testimonials" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">
              Testimonials
            </a>
          </nav>
        </aside>
        
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  )
}