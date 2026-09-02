// app/admin/dashboard/add-blog/page.js
'use client';

import { useState } from 'react';
import api from '../../lib/axios';
import { toast } from 'react-toastify';
import { Upload, Plus } from 'lucide-react';

export default function AddBlog() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    if (image) formData.append('image', image);

    try {
      await api.post('/api/blog/addblog', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      toast.success('Blog added successfully!');
      setTitle('');
      setContent('');
      setImage(null);
    } catch (err) {
      toast.error(err.response?.data?.error || 'Failed to add blog');
    }
  };

  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-2 mb-6">
        <Plus className="w-7 h-7 text-purple-600" />
        Add New Blog
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
          <input
            type="text"
            placeholder="Enter blog title"
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-400 focus:border-transparent transition"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Content</label>
          <textarea
            placeholder="Write your blog content..."
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-400 focus:border-transparent transition"
            rows="6"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Featured Image</label>
          <div className="flex items-center gap-4">
            <label className="cursor-pointer bg-gray-100 hover:bg-gray-200 px-5 py-3 rounded-xl border-2 border-dashed border-gray-300 flex items-center gap-2 transition">
              <Upload className="w-5 h-5 text-gray-500" />
              <span className="text-gray-600">Choose file</span>
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </label>
            {image && <span className="text-sm text-green-600">{image.name}</span>}
          </div>
        </div>
        <button
          type="submit"
          className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-3 rounded-xl hover:scale-105 transition-all duration-200 shadow-lg font-semibold"
        >
          Publish Blog
        </button>
      </form>
    </div>
  );
}