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
}

export default function BlogListItem({ blog, onDelete }: BlogListItemProps) {
  return (
    <div className="p-4 flex items-center justify-between">
      <div>
        <Link href={`/admin/blogs/edit/${blog.id}`}>
          <h3 className="text-lg font-semibold hover:text-[#08bcb4]">{blog.title}</h3>
        </Link>
        <p className="text-sm text-gray-500">by {blog.author} on {new Date(blog.publishedAt).toLocaleDateString()}</p>
        <span className={`text-xs font-semibold px-2 py-1 rounded-full ${blog.status === 'published' ? 'bg-green-200 text-green-800' : 'bg-yellow-200 text-yellow-800'}`}>
          {blog.status}
        </span>
      </div>
      <div className="flex items-center">
        <Link href={`/admin/blogs/edit/${blog.id}`} className="text-blue-600 hover:underline mr-4">Edit</Link>
        <button onClick={() => onDelete(blog.id)} className="text-red-600 hover:underline">Delete</button>
      </div>
    </div>
  );
}
