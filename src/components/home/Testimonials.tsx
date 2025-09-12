
'use client';

import { useState, useEffect } from 'react';

interface Testimonial {
  id: number;
  name: string;
  quote: string;
}

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      const res = await fetch('/api/testimonials');
      const data = await res.json();
      setTestimonials(data);
    };
    fetchTestimonials();
  }, []);

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold" style={{ color: '#08bcb4' }}>What Our Students Say</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-8 rounded-lg shadow-md">
              {/* Placeholder: Student Photo */}
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center text-gray-500">Photo</div>
              <p className="text-gray-800 mb-4">&quot;{testimonial.quote}&quot;</p>
              <p className="text-right font-bold">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
