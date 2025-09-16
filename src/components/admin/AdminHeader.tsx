'use client'
import { signOut, useSession } from 'next-auth/react';

export default function AdminHeader() {
  const { data: session } = useSession();

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold text-gray-900">IAEC Admin</h1>
          <div className="flex items-center">
            <p className="mr-4">Welcome, {session?.user?.name}</p>
            <button
              onClick={() => signOut({ callbackUrl: '/admin/login' })}
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
