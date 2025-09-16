'use client';

import Link from 'next/link';
import Image from 'next/image';
import { studyAbroadCountries } from '@/lib/countries';
import { useRef, useEffect, useState } from 'react'; // Import useRef, useEffect, useState

export default function CountryRibbon() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (!scrollElement) return;

    let animationFrameId: number;
    let scrollSpeed = 0.5; // Pixels per frame

    const scroll = () => {
      if (!isHovered) {
        scrollElement.scrollLeft += scrollSpeed;

        // If scrolled past the halfway point (first set of duplicated items), reset to start
        if (scrollElement.scrollLeft >= scrollElement.scrollWidth / 2) {
          scrollElement.scrollLeft -= scrollElement.scrollWidth / 2;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isHovered]); // Re-run effect when hover state changes

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
            {/* Duplicate the list once for seamless infinite scrolling */}
            {[...studyAbroadCountries, ...studyAbroadCountries].map((country, index) => (
              <Link href={country.path} key={`${country.name}-${index}`} className="flex-shrink-0 group">
                <div className="w-32 h-32 bg-white rounded-lg shadow-md flex flex-col items-center justify-center p-2 transition-all duration-300 group-hover:shadow-lg group-hover:scale-105">
                  <Image
                    src={country.image || '/placeholders/default-country.png'} // Use a default placeholder if image is missing
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