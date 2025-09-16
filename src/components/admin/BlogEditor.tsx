'use client'
import { useState } from 'react';

interface BlogData {
  title: string;
  content: string;
  status: 'draft' | 'published';
}

interface BlogEditorProps {
  onSave: (blogData: BlogData) => void;
  loading: boolean;
  blog?: BlogData; // for editing
}

export default function BlogEditor({ onSave, loading, blog }: BlogEditorProps) {
  const [title, setTitle] = useState(blog?.title || '');
  const [content, setContent] = useState(blog?.content || '');
  const [status, setStatus] = useState(blog?.status || 'draft');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({ title, content, status });
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 space-y-4">
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#08bcb4] focus:border-[#08bcb4] sm:text-sm"
          required
        />
      </div>
      <div>
        <label htmlFor="content" className="block text-sm font-medium text-gray-700">Content</label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={10}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#08bcb4] focus:border-[#08bcb4] sm:text-sm"
          required
        />
      </div>
      <div>
        <label htmlFor="status" className="block text-sm font-medium text-gray-700">Status</label>
        <select
          id="status"
          value={status}
          onChange={(e) => setStatus(e.target.value as BlogData['status'])}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#08bcb4] focus:border-[#08bcb4] sm:text-sm"
        >
          <option value="draft">Draft</option>
          <option value="published">Published</option>
        </select>
      </div>
      <div className="flex justify-end">
        <button
          type="submit"
          disabled={loading}
          className="bg-[#08bcb4] text-white px-6 py-2 rounded-lg hover:bg-[#069aa2] transition-colors disabled:opacity-50"
        >
          {loading ? 'Saving...' : 'Save'}
        </button>
      </div>
    </form>
  );
}
