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
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const animationRef = useRef<number | null>(null);

  const updateScrollButtons = useCallback(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    setCanScrollLeft(container.scrollLeft > 0);
    setCanScrollRight(
      container.scrollLeft < container.scrollWidth - container.clientWidth
    );
  }, []);

  const smoothScroll = useCallback((direction: 'left' | 'right', amount: number = 300) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const startScrollLeft = container.scrollLeft;
    const targetScrollLeft = direction === 'left' 
      ? Math.max(0, startScrollLeft - amount)
      : Math.min(container.scrollWidth - container.clientWidth, startScrollLeft + amount);
    
    const startTime = performance.now();
    const duration = 500;

    const animateScroll = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      const easeOut = 1 - Math.pow(1 - progress, 3);
      
      container.scrollLeft = startScrollLeft + (targetScrollLeft - startScrollLeft) * easeOut;
      
      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      } else {
        updateScrollButtons();
      }
    };

    requestAnimationFrame(animateScroll);
  }, [updateScrollButtons]);

  const autoScroll = useCallback(() => {
    if (isPaused) return;
    
    const container = scrollContainerRef.current;
    if (!container) return;

    container.scrollLeft += autoScrollSpeed;
    
    if (container.scrollLeft >= container.scrollWidth / 2) {
      container.scrollLeft = 0;
    }

    animationRef.current = requestAnimationFrame(autoScroll);
  }, [isPaused, autoScrollSpeed]);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    animationRef.current = requestAnimationFrame(autoScroll);

    const handleScroll = () => {
      updateScrollButtons();
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      container.removeEventListener('scroll', handleScroll);
    };
  }, [autoScroll, updateScrollButtons]);

  const duplicatedAccreditations = [...accreditations, ...accreditations];

  return (
    <section className="py-8 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          Accreditations & Certifications
        </h2>
        <div className="relative">
          <button
            onClick={() => smoothScroll('left')}
            disabled={!canScrollLeft}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full 
              bg-white shadow-lg flex items-center justify-center transition-all duration-200
              ${canScrollLeft 
                ? 'text-primary hover:bg-primary hover:text-white hover:shadow-xl' 
                : 'text-gray-300 cursor-not-allowed'
              }`}
            aria-label="Scroll left"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={() => smoothScroll('right')}
            disabled={!canScrollRight}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full 
              bg-white shadow-lg flex items-center justify-center transition-all duration-200
              ${canScrollRight 
                ? 'text-primary hover:bg-primary hover:text-white hover:shadow-xl' 
                : 'text-gray-300 cursor-not-allowed'
              }`}
            aria-label="Scroll right"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div 
            ref={scrollContainerRef}
            className="overflow-x-auto scrollbar-hide px-12"
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
      </div>
    </section>
  );
};

export default AccreditationRibbon;