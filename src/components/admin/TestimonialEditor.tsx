'use client'
import { useState } from 'react';

interface TestimonialData {
  name: string;
  content: string;
  university: string;
  course: string;
  country: string;
  rating: number;
  imageUrl?: string;
}

interface TestimonialEditorProps {
  onSave: (testimonialData: TestimonialData) => void;
  loading: boolean;
  testimonial?: TestimonialData; // for editing
}

export default function TestimonialEditor({ onSave, loading, testimonial }: TestimonialEditorProps) {
  const [name, setName] = useState(testimonial?.name || '');
  const [content, setContent] = useState(testimonial?.content || '');
  const [university, setUniversity] = useState(testimonial?.university || '');
  const [course, setCourse] = useState(testimonial?.course || '');
  const [country, setCountry] = useState(testimonial?.country || '');
  const [rating, setRating] = useState(testimonial?.rating || 5);
  const [imageUrl, setImageUrl] = useState(testimonial?.imageUrl || '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({ name, content, university, course, country, rating, imageUrl });
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#08bcb4] focus:border-[#08bcb4] sm:text-sm"
          required
        />
      </div>
      <div>
        <label htmlFor="content" className="block text-sm font-medium text-gray-700">Testimonial</label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={5}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#08bcb4] focus:border-[#08bcb4] sm:text-sm"
          required
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="university" className="block text-sm font-medium text-gray-700">University</label>
          <input
            type="text"
            id="university"
            value={university}
            onChange={(e) => setUniversity(e.target.value)}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#08bcb4] focus:border-[#08bcb4] sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="course" className="block text-sm font-medium text-gray-700">Course</label>
          <input
            type="text"
            id="course"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#08bcb4] focus:border-[#08bcb4] sm:text-sm"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country</label>
          <input
            type="text"
            id="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#08bcb4] focus:border-[#08bcb4] sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="rating" className="block text-sm font-medium text-gray-700">Rating</label>
          <input
            type="number"
            id="rating"
            value={rating}
            onChange={(e) => setRating(parseInt(e.target.value))}
            min="1"
            max="5"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#08bcb4] focus:border-[#08bcb4] sm:text-sm"
          />
        </div>
      </div>
      <div>
        <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700">Image URL</label>
        <input
          type="text"
          id="imageUrl"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#08bcb4] focus:border-[#08bcb4] sm:text-sm"
        />
      </div>
      <div className="flex justify-end">
        <button
          type="submit"
          disabled={loading}
          className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50"
        >
          {loading ? 'Saving...' : 'Save'}
        </button>
      </div>
    </form>
  );
}
