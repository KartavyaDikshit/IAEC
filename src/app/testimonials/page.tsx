'use client';

import { useState, useEffect } from 'react';

interface Testimonial {
  id: string;
  name: string;
  content: string;
  university?: string;
  course?: string;
  country?: string;
  rating?: number;
  quote?: string; // For backward compatibility
}

const TestimonialsPage = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await fetch('/api/testimonials');
        const data = await res.json();
        setTestimonials(data.testimonials || []);
      } catch (error) {
        console.error('Error fetching testimonials:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchTestimonials();
  }, []);

  return (
    <>
      <div className="bg-[url('/images/all_images/success.jpg')] bg-cover bg-center text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">Student Success Stories</h1>
            <p className="text-lg text-white/90">Hear from our successful students worldwide</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="mb-4">
                {testimonial.rating && (
                  <div className="text-yellow-500 mb-2">
                    {'★'.repeat(testimonial.rating)}
                  </div>
                )}
                <p className="text-[#4a5568] italic">
                  "{testimonial.content || testimonial.quote}"
                </p>
              </div>
              
              <div className="border-t pt-4">
                <h3 className="font-semibold text-[#1a202c]">{testimonial.name}</h3>
                {testimonial.course && testimonial.university && (
                  <p className="text-sm text-[#4a5568]">
                    {testimonial.course} at {testimonial.university}
                  </p>
                )}
                {testimonial.country && (
                  <p className="text-sm text-[#08bcb4] font-medium">{testimonial.country}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {testimonials.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            No testimonials available yet.
          </div>
        )}
      </div>
    </>
  );
};

export default TestimonialsPage;
