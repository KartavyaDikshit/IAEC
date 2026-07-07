'use client'
import { useSession, signOut } from 'next-auth/react'
import { redirect } from 'next/navigation'
import { ReactNode, useState } from 'react'
import Link from 'next/link'

interface Props {
  children: ReactNode
}

export default function AdminLayout({ children }: Props) {
  const { data: session, status } = useSession()
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#08bcb4]"></div>
      </div>
    )
  }

  if (!session) {
    redirect('/admin-login')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="md:hidden mr-4 text-gray-500 hover:text-gray-700"
                aria-label="Toggle sidebar"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              <h1 className="text-xl font-semibold text-[#08bcb4]">IAEC Admin</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-700 hidden sm:block">Welcome, {session.user?.email}</span>
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
        {/* Sidebar */}
        <aside 
          className={`
            fixed md:relative z-20
            w-64 bg-white shadow-sm min-h-screen 
            transform transition-transform duration-300 ease-in-out
            ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
            md:translate-x-0
          `}
        >
          <nav className="p-6 space-y-2">
            <Link href="/admin" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded" onClick={() => setIsSidebarOpen(false)}>
              Dashboard
            </Link>
            <Link href="/admin/blogs" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded" onClick={() => setIsSidebarOpen(false)}>
              Blogs
            </Link>
            <Link href="/admin/testimonials" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded" onClick={() => setIsSidebarOpen(false)}>
              Testimonials
            </Link>
            <Link href="/admin/form-submissions" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded" onClick={() => setIsSidebarOpen(false)}>
              Form Submissions
            </Link>
          </nav>
        </aside>
        
        {/* Main content */}
        <main className="flex-1 p-4 sm:p-6 md:p-8">
          {children}
        </main>

        {/* Sidebar overlay for mobile */}
        {isSidebarOpen && (
          <div 
            className="md:hidden fixed inset-0 bg-black opacity-50 z-10"
            onClick={() => setIsSidebarOpen(false)}
          ></div>
        )}
      </div>
    </div>
  )
}