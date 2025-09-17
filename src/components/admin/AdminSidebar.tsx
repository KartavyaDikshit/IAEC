import Link from 'next/link';

// Updated sidebar with new links - Attempting to force refresh
export default function AdminSidebar() {
  return (
    <aside className="w-64 bg-gray-800 text-white">
      <div className="p-4 text-xl font-bold">Admin</div>
      <nav>
        <ul>
          <li>
            <Link href="/admin" className="block p-4 hover:bg-gray-700">
              Dashboard
            </Link>
          </li>
          <li>
            <Link href="/admin/blogs" className="block p-4 hover:bg-gray-700">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/admin/testimonials" className="block p-4 hover:bg-gray-700">
              Testimonials
            </Link>
          </li>
          <li>
            <Link href="/admin/study-abroad" className="block p-4 hover:bg-gray-700">
              Study Abroad
            </Link>
          </li>
          <li>
            <Link href="/admin/form-submissions" className="block p-4 hover:bg-gray-700">
              Form Submissions
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
