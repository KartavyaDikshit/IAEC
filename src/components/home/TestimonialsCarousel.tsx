"use client";

import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';

interface Testimonial {
  id: string;
  name: string;
  content: string;
  university: string;
  course: string;
  country: string;
  rating: number;
  imageUrl: string;
}

const TestimonialsCarousel = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await fetch('/api/testimonials');
        const data = await res.json();
        console.log('Fetched testimonials for carousel:', data.testimonials); // Add this line
        setTestimonials(data.testimonials || []);
      } catch (error) {
        console.error('Error fetching testimonials:', error);
      }
    };
    fetchTestimonials();
  }, []);

  const autoScroll = useCallback(() => {
    if (isPaused) return;
    
    const container = carouselRef.current;
    if (!container) return;

    container.scrollLeft += 0.5; // Using a fixed speed for auto-scroll
    
    if (container.scrollLeft >= container.scrollWidth / 2) {
      container.scrollLeft = 0;
    }

    animationRef.current = requestAnimationFrame(autoScroll);
  }, [isPaused]);

  useEffect(() => {
    const container = carouselRef.current;
    if (!container) return;

    animationRef.current = requestAnimationFrame(autoScroll);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [autoScroll]);

  if (testimonials.length === 0) {
    return null;
  }

  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          What Our Students Say
        </h2>
        <div className="relative">
          <div
            ref={carouselRef}
            className="overflow-x-auto scrollbar-hide px-12"
            onMouseEnter={() => isPaused && setIsPaused(true)}
            onMouseLeave={() => isPaused && setIsPaused(false)}
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <div className="flex gap-6 pb-4">
              {duplicatedTestimonials.map((testimonial, index) => (
                <div
                  key={`${testimonial.id}-${index}`}
                  className="flex-shrink-0 w-80 p-6 bg-white rounded-lg shadow-md mx-3 border border-gray-200"
                >
                  <div className="flex items-center mb-4">
                    <Image
                      src={testimonial.imageUrl || "/placeholders/default-avatar.png"}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="rounded-full object-cover mr-4"
                    />
                    <div>
                      <p className="font-semibold text-lg text-gray-800">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.university}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4 italic line-clamp-4">{`"${testimonial.content}"`}</p>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${
                          i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.783.57-1.838-.197-1.538-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.929 8.72c-.783-.57-.381-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
