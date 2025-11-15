'use client';

import BookingForm from '@/components/BookingForm';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

const BookingPage = () => {
  const bookingFormRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const handleScroll = (e: MouseEvent) => {
      e.preventDefault();
      const targetId = (e.currentTarget as HTMLAnchorElement).getAttribute('href')?.substring(1);
      const element = document.getElementById(targetId || '');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };

    const currentBookingFormRef = bookingFormRef.current;
    if (currentBookingFormRef) {
      currentBookingFormRef.addEventListener('click', handleScroll);
    }

    return () => {
      if (currentBookingFormRef) {
        currentBookingFormRef.removeEventListener('click', handleScroll);
      }
    };
  }, []);

  return (
    <main>
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/images/all_images/Admissions.jpeg"
            alt="Book a Consultation"
            layout="fill"
            objectFit="cover"
            className="z-0"
            priority />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative z-10 text-center text-white p-4 animate-fade-in text-shadow-md">
          <h1 className="text-6xl font-extrabold !text-white mb-6 leading-tight">Book a Free Counselling Session</h1>
          <p className="text-2xl mb-8 text-white/90">Get personalized guidance for your study abroad journey.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#booking-form" ref={bookingFormRef} className="btn-primary text-lg px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 bg-[#08bcb4] !text-white">
              Book Your Session
            </a>
            <Link href="/about" className="border border-white/30 hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition-colors !text-white">
              Learn More
            </Link>
          </div>
        </div>
      </section>
        <div id="booking-form" className="container mx-auto px-4 py-20">
          <div className="mt-8 max-w-lg mx-auto">
            <BookingForm />
          </div>
        </div>
      </main>
  );
};

export default BookingPage;
