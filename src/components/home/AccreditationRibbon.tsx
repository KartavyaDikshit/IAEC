'use client';
import Image from 'next/image';
import { useRef, useEffect, useState, useCallback } from 'react';

const accreditations = [
  { src: '/images/certifications/cert1.jpg', alt: 'Accreditation 1' },
  { src: '/images/certifications/cert2.jpg', alt: 'Accreditation 2' },
  { src: '/images/certifications/cert3.jpg', alt: 'Accreditation 3' },
  { src: '/images/certifications/cert4.jpg', alt: 'Accreditation 4' },
  { src: '/images/certifications/cert5.jpg', alt: 'Accreditation 5' },
  { src: '/images/certifications/Nafsa.jpeg', alt: 'Nafsa Accreditation' },
  // Add more accreditations as needed
];

interface AccreditationRibbonProps {
  autoScrollSpeed?: number;
  pauseOnHover?: boolean;
}

const AccreditationRibbon = ({ 
  autoScrollSpeed = 1,
  pauseOnHover = true 
}: AccreditationRibbonProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const animationRef = useRef<number | null>(null);

  const autoScroll = useCallback(() => {
    if (isPaused) return;
    
    const container = scrollContainerRef.current;
    if (!container) return;

    container.scrollLeft += autoScrollSpeed;
    
    // Reset to beginning when reaching the end for infinite effect
    if (container.scrollLeft >= container.scrollWidth / 2) {
      container.scrollLeft = 0;
    }

    animationRef.current = requestAnimationFrame(autoScroll);
  }, [isPaused, autoScrollSpeed]);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    // Start auto-scrolling
    animationRef.current = requestAnimationFrame(autoScroll);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [autoScroll]);

  // Duplicate accreditations for seamless infinite scroll
  const duplicatedAccreditations = [...accreditations, ...accreditations];

  return (
    <section className="py-8 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          Accreditations & Certifications
        </h2>
        <div 
          ref={scrollContainerRef}
          className="relative w-full overflow-x-auto py-4 bg-gray-100 rounded-lg shadow-inner scrollbar-hide"
          onMouseEnter={() => pauseOnHover && setIsPaused(true)}
          onMouseLeave={() => pauseOnHover && setIsPaused(false)}
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <div className="flex whitespace-nowrap">
            {duplicatedAccreditations.map((accreditation, index) => (
              <div key={index} className="flex-shrink-0 mx-4">
                <Image
                  src={accreditation.src}
                  alt={accreditation.alt}
                  width={120}
                  height={60}
                  className="h-16 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccreditationRibbon;