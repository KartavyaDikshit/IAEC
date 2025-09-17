'use client';

import Link from 'next/link';
import Image from 'next/image';
import { studyAbroadCountries } from '@/lib/countries';
import { useRef, useEffect, useState, useCallback } from 'react';

interface CountryRibbonProps {
  autoScrollSpeed?: number;
  pauseOnHover?: boolean;
}

export default function CountryRibbon({ 
  autoScrollSpeed = 1,
  pauseOnHover = true 
}: CountryRibbonProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const animationRef = useRef<number>();

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
      
      // Ease-out cubic function for smooth animation
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

    // Handle scroll events for button updates
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

  // Duplicate countries for seamless infinite scroll
  const duplicatedCountries = [...studyAbroadCountries, ...studyAbroadCountries];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Explore Study Destinations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover world-class education opportunities across multiple countries. 
            From cutting-edge research to cultural immersion, find your perfect study destination.
          </p>
        </div>

        <div className="relative">
          {/* Left scroll button */}
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

          {/* Right scroll button */}
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

          {/* Scrollable container */}
          <div
            ref={scrollContainerRef}
            className="overflow-x-auto scrollbar-hide px-12"
            onMouseEnter={() => pauseOnHover && setIsPaused(true)}
            onMouseLeave={() => pauseOnHover && setIsPaused(false)}
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <div className="flex gap-6 pb-4">
              {duplicatedCountries.map((country, index) => (
                <Link
                  key={`${country.name}-${index}`}
                  href={country.path}
                  className="flex-shrink-0 group"
                >
                  <div className="w-48 bg-white rounded-xl shadow-md overflow-hidden 
                    hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className="relative h-32 overflow-hidden">
                      <Image
                        src={country.image}
                        alt={`Study in ${country.name}`}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                        sizes="(max-width: 768px) 192px, 192px"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyztP8AGMo+lBNvWMsGhdF/9k="
                      />
                      <div className="absolute top-2 right-2 text-2xl">{country.flag}</div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute bottom-2 left-3 text-white">
                        <h3 className="font-semibold text-lg">{country.name}</h3>
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                        {country.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className={`w-4 h-4 ${
                                i < Math.floor(country.popularity / 20)
                                  ? 'text-yellow-400'
                                  : 'text-gray-300'
                              }`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <span className="text-primary text-sm font-medium">Learn More →</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-gray-500">
            Hover to pause • {studyAbroadCountries.length} destinations available
          </p>
        </div>
      </div>
    </section>
  );
}