'use client';

import Image from 'next/image';
import { useRef, useEffect, useState, useCallback } from 'react';

interface AccreditationRibbonProps {
  scrollSpeed?: number; // Optional: pixels per frame
}

const accreditationLogos = [
  '/images/cert1.jpg',
  '/images/cert2.jpg',
  '/images/cert3.jpg',
  '/images/cert4.jpg',
];

export default function AccreditationRibbon({
  scrollSpeed = 1, // Changed to 1 for potentially smoother auto-scroll
}: AccreditationRibbonProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isManuallyScrolling, setIsManuallyScrolling] = useState(false);
  const manualScrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const [singleSetScrollWidth, setSingleSetScrollWidth] = useState(0);

  // Debug state
  const [debugInfo, setDebugInfo] = useState('');

  const measureSingleSetWidth = useCallback(() => {
    const tempContainer = document.createElement('div');
    tempContainer.style.visibility = 'hidden';
    tempContainer.style.position = 'absolute';
    tempContainer.style.display = 'flex';
    tempContainer.style.gap = '32px'; // Match gap-x-8 from the actual ribbon
    tempContainer.style.whiteSpace = 'nowrap';

    let imagesLoadedCount = 0;
    const totalImages = accreditationLogos.length;

    accreditationLogos.forEach(logoSrc => {
      const itemDiv = document.createElement('div');
      itemDiv.style.flexShrink = '0';
      itemDiv.style.width = '128px'; // w-32
      itemDiv.style.height = '128px'; // h-32
      itemDiv.style.display = 'flex';
      itemDiv.style.alignItems = 'center';
      itemDiv.style.justifyContent = 'center';

      const tempImage = document.createElement('img');
      tempImage.src = logoSrc;
      tempImage.alt = 'Certification Logo';
      tempImage.width = 1200;
      tempImage.height = 1200;
      tempImage.style.objectFit = 'contain';

      tempImage.onload = () => { // Wait for image to load
        imagesLoadedCount++;
        if (imagesLoadedCount === totalImages) {
          // All images loaded, now measure
          document.body.appendChild(tempContainer);
          const measuredWidth = tempContainer.scrollWidth;
          setSingleSetScrollWidth(measuredWidth);
          document.body.removeChild(tempContainer);
        }
      };
      tempImage.onerror = () => {
        // Handle error, maybe set a default width or log
        imagesLoadedCount++; // Still count to avoid infinite wait
        if (imagesLoadedCount === totalImages) {
          document.body.appendChild(tempContainer);
          const measuredWidth = tempContainer.scrollWidth;
          setSingleSetScrollWidth(measuredWidth);
          document.body.removeChild(tempContainer);
        }
      };

      itemDiv.appendChild(tempImage);
      tempContainer.appendChild(itemDiv);
    });

    // If no images, or images fail to load, ensure a fallback measurement
    if (totalImages === 0) {
      document.body.appendChild(tempContainer);
      const measuredWidth = tempContainer.scrollWidth;
      setSingleSetScrollWidth(measuredWidth);
      document.body.removeChild(tempContainer);
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

    if (scrollElement.scrollLeft >= singleSetScrollWidth * 2) {
      scrollElement.scrollLeft -= singleSetScrollWidth; // Jump back one set
    } else if (scrollElement.scrollLeft < 1 && singleSetScrollWidth > 0) {
      scrollElement.scrollLeft += singleSetScrollWidth; // Jump forward one set
    }
  }, [singleSetScrollWidth]);

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (!scrollElement) return;

    let animationFrameId: number;

    measureSingleSetWidth();

    const handleResize = () => {
      measureSingleSetWidth();
      // Adjust scroll position on resize to maintain visual continuity
      // This will be handled by the separate useEffect below
    };
    window.addEventListener('resize', handleResize);

    scrollElement.addEventListener('scroll', handleScroll);

    const scroll = () => {
      // Update debug info
      setDebugInfo(`Hovered: ${isHovered}, Manual: ${isManuallyScrolling}, Width: ${singleSetScrollWidth}, ScrollLeft: ${scrollElement.scrollLeft}`);

      if (!isHovered && !isManuallyScrolling && singleSetScrollWidth > 0) {
        scrollElement.scrollLeft += scrollSpeed;

        if (scrollElement.scrollLeft >= singleSetScrollWidth * 2) {
          scrollElement.scrollLeft -= singleSetScrollWidth;
        } else if (scrollElement.scrollLeft < 1) {
          scrollElement.scrollLeft += singleSetScrollWidth;
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
  }, [isHovered, isManuallyScrolling, scrollSpeed, handleScroll, measureSingleSetWidth, singleSetScrollWidth]);

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (!scrollElement) return;

    if (singleSetScrollWidth > 0 && scrollElement.scrollLeft === 0) {
      scrollElement.scrollLeft = singleSetScrollWidth;
    }
  }, [singleSetScrollWidth]);

  return (
    <section className="w-full py-8 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Accreditations & Certifications</h2>
        {/* Debug Info */}
        <div className="text-center text-xs text-gray-500 mb-2">{debugInfo}</div>
        <div className="relative w-full overflow-hidden py-4">
          <div
            ref={scrollRef}
            className="flex gap-x-8 hide-scrollbar overflow-x-auto whitespace-nowrap"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Duplicate the list three times for seamless infinite scrolling */}
            {[...accreditationLogos, ...accreditationLogos, ...accreditationLogos].map((logoSrc, index) => (
              <div key={index} className="flex-shrink-0 w-32 h-32 flex items-center justify-center">
                <Image
                  src={logoSrc}
                  alt={`Certification Logo ${index}`}
                  width={1200}
                  height={1200}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}