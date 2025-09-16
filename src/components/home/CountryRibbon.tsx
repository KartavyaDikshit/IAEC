'use client';

import Link from 'next/link';
import Image from 'next/image';
import { studyAbroadCountries } from '@/lib/countries';
import { useRef, useEffect, useState, useCallback } from 'react';

interface CountryRibbonProps {
  scrollSpeed?: number; // Optional: pixels per frame
}

export default function CountryRibbon({ scrollSpeed = 1 }: CountryRibbonProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isManuallyScrolling, setIsManuallyScrolling] = useState(false);
  const manualScrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const singleSetWidthRef = useRef(0);

  const calculateSingleSetWidth = useCallback(() => {
    const scrollElement = scrollRef.current;
    if (!scrollElement) return;

    if (scrollElement.children.length > 0) {
      let width = 0;
      for (let i = 0; i < studyAbroadCountries.length; i++) {
        const child = scrollElement.children[i] as HTMLElement;
        if (child) {
          width += child.offsetWidth;
          if (i < studyAbroadCountries.length - 1) {
            width += 32; // Tailwind's gap-x-8 is 32px
          }
        }
      }
      singleSetWidthRef.current = width;
    }
  }, []);

  const handleScroll = useCallback(() => {
    const scrollElement = scrollRef.current;
    if (!scrollElement) return;

    setIsManuallyScrolling(true);
    if (manualScrollTimeoutRef.current) {
      clearTimeout(manualScrollTimeoutRef.current);
    }
    manualScrollTimeoutRef.current = setTimeout(() => {
      setIsManuallyScrolling(false);
    }, 200);

    // Manual scroll reset logic for three sets of content
    if (scrollElement.scrollLeft >= singleSetWidthRef.current * 2) {
      scrollElement.scrollLeft -= singleSetWidthRef.current; // Jump back one set
    } else if (scrollElement.scrollLeft < 1 && singleSetWidthRef.current > 0) { // Check if less than a small threshold
      scrollElement.scrollLeft += singleSetWidthRef.current; // Jump forward one set
    }
  }, []);

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (!scrollElement) return;

    let animationFrameId: number;

    calculateSingleSetWidth(); // Initial calculation

    const handleResize = () => {
      calculateSingleSetWidth();
      // Adjust scroll position on resize to maintain visual continuity
      // This will be handled by the separate useEffect below
    };
    window.addEventListener('resize', handleResize);

    scrollElement.addEventListener('scroll', handleScroll);

    const scroll = () => {
      if (!isHovered && !isManuallyScrolling && singleSetWidthRef.current > 0) {
        scrollElement.scrollLeft += scrollSpeed;

        if (scrollElement.scrollLeft >= singleSetWidthRef.current * 2) {
          scrollElement.scrollLeft -= singleSetWidthRef.current;
        } else if (scrollElement.scrollLeft < 1) { // Check if less than a small threshold
          scrollElement.scrollLeft += singleSetWidthRef.current;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      scrollElement.removeEventListener('scroll', handleScroll);
      if (manualScrollTimeoutRef.current) {
        clearTimeout(manualScrollTimeoutRef.current);
      }
    };
  }, [isHovered, isManuallyScrolling, calculateSingleSetWidth, handleScroll, scrollSpeed]);

  // New useEffect to set initial scroll position and handle resize
  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (!scrollElement) return;

    if (singleSetWidthRef.current > 0 && scrollElement.scrollLeft === 0) {
      scrollElement.scrollLeft = singleSetWidthRef.current;
    }
  }, [singleSetWidthRef.current]);

  return (
    <section className="w-full py-8 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Explore Study Destinations</h2>
        <div className="relative w-full overflow-hidden py-4">
          <div
            ref={scrollRef}
            className="flex gap-x-8 hide-scrollbar overflow-x-auto whitespace-nowrap"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Duplicate the list three times for seamless infinite scrolling */}
            {[...studyAbroadCountries, ...studyAbroadCountries, ...studyAbroadCountries].map((country, index) => (
              <Link href={country.path} key={`${country.name}-${index}`} className="flex-shrink-0 group">
                <div className="w-32 h-32 bg-white rounded-lg shadow-md flex flex-col items-center justify-center p-2 transition-all duration-300 group-hover:shadow-lg group-hover:scale-105">
                  <Image
                    src={country.image || '/placeholders/default-country.png'}
                    alt={country.name}
                    width={80}
                    height={80}
                    className="rounded-full object-cover mb-2"
                  />
                  <span className="text-sm font-medium text-gray-700 group-hover:text-blue-600 text-center">{country.name}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}