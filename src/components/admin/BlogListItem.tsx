import Link from 'next/link';

interface Blog {
  id: string;
  title: string;
  content: string;
  author: string;
  publishedAt: string;
  status: 'draft' | 'published';
}

interface BlogListItemProps {
  blog: Blog;
  onDelete: (id: string) => void;
  onToggleStatus: (id: string, currentStatus: string) => void; // Added for status toggle
}

export default function BlogListItem({ blog, onDelete, onToggleStatus }: BlogListItemProps) {
  return (
    <tr key={blog.id}>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm font-medium text-gray-900">
          <Link href={`/admin/blogs/${blog.id}`} className="hover:text-[#08bcb4]">
            {blog.title}
          </Link>
        </div>
        <div className="text-sm text-gray-500">{blog.content.substring(0, 100)}...</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {blog.author}
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
          blog.status === 'published' 
            ? 'bg-green-100 text-green-800' 
            : 'bg-yellow-100 text-yellow-800'
        }`}>
          {blog.status}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {new Date(blog.publishedAt).toLocaleDateString()}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
        <button
          onClick={() => onToggleStatus(blog.id, blog.status)}
          className={`${
            blog.status === 'published' 
              ? 'text-orange-600 hover:text-orange-900' 
              : 'text-green-600 hover:text-green-900'
          }`}
        >
          {blog.status === 'published' ? 'Unpublish' : 'Publish'}
        </button>
        <Link href={`/admin/blogs/${blog.id}`} className="text-blue-600 hover:underline">Edit</Link>
        <button
          onClick={() => onDelete(blog.id)}
          className="text-red-600 hover:text-red-900"
        >
          Delete
        </button>
      </td>
    </tr>
  );
}