'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

interface Testimonial {
  id: string;
  name: string;
  content: string;
  university?: string;
  course?: string;
  country?: string;
  rating?: number;
  imageUrl?: string;
  quote?: string; // For backward compatibility
}

const TestimonialsPage = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const testimonialsRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await fetch('/api/testimonials');
        const data = await res.json();
        console.log('Fetched testimonials:', data.testimonials); // Add this line
        setTestimonials(data.testimonials || []);
      } catch (error) {
        console.error('Error fetching testimonials:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchTestimonials();

    const handleScroll = (e: MouseEvent) => {
      e.preventDefault();
      const targetId = (e.currentTarget as HTMLAnchorElement).getAttribute('href')?.substring(1);
      const element = document.getElementById(targetId || '');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };

    const currentTestimonialsRef = testimonialsRef.current;
    if (currentTestimonialsRef) {
      currentTestimonialsRef.addEventListener('click', handleScroll);
    }

    return () => {
      if (currentTestimonialsRef) {
        currentTestimonialsRef.removeEventListener('click', handleScroll);
      }
    };
  }, []);

  return (
    <>
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/images/all_images/success.jpg"
            alt="Testimonials"
            fill
            style={{ objectFit: 'cover' }}
            className="z-0"
            priority
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative z-10 text-center text-white p-4 animate-fade-in text-shadow-md">
          <h1 className="text-6xl font-extrabold !text-white mb-6 leading-tight">Student Success Stories</h1>
          <p className="text-2xl mb-8 text-white/90">Hear from our successful students worldwide</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#testimonials-section" ref={testimonialsRef} className="border border-white/30 hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition-colors !text-white">
              View All Testimonials
            </a>
          </div>
        </div>
      </section>

      <div id="testimonials-section" className="container mx-auto px-4 py-16">
        {loading ? (
          <div className="text-center py-12">Loading testimonials...</div>
        ) : testimonials.length === 0 ? (
          <div className="text-center py-12 text-gray-500">No testimonials available yet.</div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <article key={testimonial.id} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="mb-4">
                  {testimonial.rating && (
                    <div className="text-yellow-500 mb-2">
                      {'★'.repeat(testimonial.rating)}
                    </div>
                  )}
                  <p className="text-[#4a5568] italic">
                    &quot;{testimonial.content || testimonial.quote}&quot;
                  </p>
                </div>
                
                <div className="border-t pt-4">
                  <div className="flex items-center mb-2"> {/* Added flex container */}
                    {testimonial.imageUrl && (
                      <Image
                        src={testimonial.imageUrl}
                        alt={`Image of ${testimonial.name}`}
                        width={40}
                        height={40}
                        className="rounded-full object-cover mr-3"// Added mr-3 for spacing
                      />
                    )}
                    <h3 className="font-semibold text-[#1a202c]">{testimonial.name}</h3>
                  </div>
                  {testimonial.course && testimonial.university && (
                    <p className="text-sm text-[#4a5568]">
                      {testimonial.course} at {testimonial.university}
                    </p>
                  )}
                  {testimonial.country && (
                    <p className="text-sm text-[#08bcb4] font-medium">{testimonial.country}</p>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default TestimonialsPage;
