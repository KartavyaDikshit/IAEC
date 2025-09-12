
'use client';

import { useState, useEffect } from 'react';

interface Post {
  id: number;
  title: string;
  content: string;
}

const BlogManagement = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPost, setCurrentPost] = useState<Partial<Post>>({});

  const fetchPosts = async () => {
    const res = await fetch('/api/blog');
    const data = await res.json();
    setPosts(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleSave = async () => {
    if (currentPost.id) {
      // Update existing post
      await fetch(`/api/blog/${currentPost.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(currentPost),
      });
    } else {
      // Create new post
      await fetch('/api/blog', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(currentPost),
      });
    }
    fetchPosts();
    setIsModalOpen(false);
    setCurrentPost({});
  };

  const handleDelete = async (id: number) => {
    await fetch(`/api/blog/${id}`, {
      method: 'DELETE',
    });
    fetchPosts();
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Blog Management</h1>
      <div className="mb-8">
        <button onClick={() => { setCurrentPost({}); setIsModalOpen(true); }} style={{ backgroundColor: '#08bcb4', color: 'white' }} className="px-4 py-2 rounded-md">Add New Post</button>
      </div>
      <table className="w-full bg-white rounded-lg shadow-md">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-4 text-left">Title</th>
            <th className="p-4 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td className="p-4">{post.title}</td>
              <td className="p-4">
                <button onClick={() => { setCurrentPost(post); setIsModalOpen(true); }} style={{ color: '#08bcb4' }}>Edit</button>
                <button onClick={() => handleDelete(post.id)} className="text-red-500">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
          <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
            <h3 className="text-lg font-bold">{currentPost.id ? 'Edit Post' : 'Add Post'}</h3>
            <div className="mt-4">
              <label className="block text-sm font-bold mb-2">Title</label>
              <input type="text" value={currentPost.title || ''} onChange={(e) => setCurrentPost({ ...currentPost, title: e.target.value })} className="w-full p-2 border rounded" />
            </div>
            <div className="mt-4">
              <label className="block text-sm font-bold mb-2">Content</label>
              <textarea value={currentPost.content || ''} onChange={(e) => setCurrentPost({ ...currentPost, content: e.target.value })} className="w-full p-2 border rounded"></textarea>
            </div>
            <div className="mt-6 flex justify-end">
              <button onClick={() => setIsModalOpen(false)} className="bg-gray-300 text-black px-4 py-2 rounded-md mr-2">Cancel</button>
              <button onClick={handleSave} style={{ backgroundColor: '#08bcb4', color: 'white' }} className="px-4 py-2 rounded-md">Save</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogManagement;
