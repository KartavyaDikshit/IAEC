'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';

interface AccreditationRibbonProps {
  autoScrollSpeed?: number; // Not directly used in this implementation, but defined to accept the prop
  pauseOnHover?: boolean; // Not directly used in this implementation, but defined to accept the prop
}

const accreditations = [
  { src: '/images/certifications/cert1.jpg', alt: 'Accreditation 1' },
  { src: '/images/certifications/cert2.jpg', alt: 'Accreditation 2' },
  { src: '/images/certifications/cert3.jpg', alt: 'Accreditation 3' },
  { src: '/images/certifications/cert4.jpg', alt: 'Accreditation 4' },
  { src: '/images/certifications/cert5.jpg', alt: 'Accreditation 5' },
  { src: '/images/certifications/Nafsa.jpeg', alt: 'Nafsa Accreditation' },
  // Add more accreditations as needed
];

const AccreditationRibbon = ({ autoScrollSpeed, pauseOnHover }: AccreditationRibbonProps) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Tailwind's md breakpoint is 768px
    };

    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="py-8 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          Accreditations & Certifications
        </h2>
        <div className="relative w-full overflow-x-auto py-4 bg-gray-100 rounded-lg shadow-inner">
          <div className={`flex ${!isMobile ? 'animate-scroll-left' : ''} whitespace-nowrap`}>
            {/* Duplicate the logos to create a seamless loop */}
            {[...accreditations, ...accreditations].map((accreditation, index) => (
              <div key={index} className="flex-shrink-0 mx-4">
                <Image
                  src={accreditation.src}
                  alt={accreditation.alt}
                  width={120}
                  height={60}
                  objectFit="contain"
                  className="h-16 w-auto"
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