'use client';

import Image from 'next/image';
import { certificationLogos } from '@/lib/countries';
import { useRef, useEffect, useState, useCallback } from 'react';

interface AccreditationRibbonProps {
  autoScrollSpeed?: number;
  pauseOnHover?: boolean;
}

export default function AccreditationRibbon({
  autoScrollSpeed = 0.8,
  pauseOnHover = true
}: AccreditationRibbonProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const animationRef = useRef<number | null>(null);

  const autoScroll = useCallback(() => {
    if (isPaused) return;
    
    const container = scrollContainerRef.current;
    if (!container) return;

    container.scrollLeft += autoScrollSpeed;
    
    // Reset to beginning when reaching halfway point for infinite effect
    if (container.scrollLeft >= container.scrollWidth / 3) {
      container.scrollLeft = 0;
    }

    animationRef.current = requestAnimationFrame(autoScroll);
  }, [isPaused, autoScrollSpeed]);

  useEffect(() => {
    animationRef.current = requestAnimationFrame(autoScroll);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [autoScroll]);

  // Triple the logos for seamless infinite scroll
  const tripleLogos = [...certificationLogos, ...certificationLogos, ...certificationLogos];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Accreditations & Certifications
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Trusted by leading educational organizations worldwide. 
            Our certifications ensure the highest standards of service.
          </p>
        </div>

        <div
          ref={scrollContainerRef}
          className="overflow-x-hidden"
          onMouseEnter={() => pauseOnHover && setIsPaused(true)}
          onMouseLeave={() => pauseOnHover && setIsPaused(false)}
        >
          <div className="flex gap-8 items-center">
            {tripleLogos.map((logo, index) => (
              <div
                key={`${logo.id}-${index}`}
                className="flex-shrink-0 w-32 h-24 flex items-center justify-center 
                  bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300
                  p-4 group"
              >
                <Image
                  src={logo.image}
                  alt={logo.alt}
                  width={120}
                  height={80}
                  className="max-w-full max-h-full object-contain filter grayscale 
                    group-hover:grayscale-0 transition-all duration-300"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyztP8AGMo+lBNvWMsGhdF/9k="
                />
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-6">
          <p className="text-sm text-gray-500">
            Hover to pause • Trusted certifications since 2000
          </p>
        </div>
      </div>
    </section>
  );
}