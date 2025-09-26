'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isStudyAbroadDropdownOpen, setIsStudyAbroadDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsStudyAbroadDropdownOpen(false);
    setIsServicesDropdownOpen(false);
  };

  return (
    <header className="sticky top-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-2">
          <div>
            <Link href="/" className="inline-block" onClick={closeMobileMenu}>
              <Image src="/images/IAECLog.jpeg" alt="IAEC Consultants" width="100" height="33" />
            </Link>
          </div>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4">
            <Link href="/" className="text-gray-800 hover:text-gray-900 text-lg">Home</Link>
            <Link href="/about" className="text-gray-800 hover:text-gray-900 text-lg">About Us</Link>
            <div className="relative group">
              <button className="text-[#08bcb4] hover:text-[#069aa2] flex items-center font-medium transition-colors text-lg">
                Study Abroad <span className="ml-1">▾</span>
              </button>
              <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md py-2 w-48">
                <Link href="/study-abroad/uk" className="block px-4 py-2 text-base text-gray-800 hover:bg-gray-100">Study in UK</Link>
                <Link href="/study-abroad/usa" className="block px-4 py-2 text-base text-gray-800 hover:bg-gray-100">Study in USA</Link>
                <Link href="/study-abroad/australia" className="block px-4 py-2 text-base text-gray-800 hover:bg-gray-100">Study in Australia</Link>
                <Link href="/study-abroad/canada" className="block px-4 py-2 text-base text-gray-800 hover:bg-gray-100">Study in Canada</Link>
                <Link href="/study-abroad/ireland" className="block px-4 py-2 text-base text-gray-800 hover:bg-gray-100">Study in Ireland</Link>
                <Link href="/study-abroad/new-zealand" className="block px-4 py-2 text-base text-gray-800 hover:bg-gray-100">Study in New Zealand</Link>
                <Link href="/study-abroad/europe" className="block px-4 py-2 text-base text-gray-800 hover:bg-gray-100">Study in Europe</Link>
              </div>
            </div>
            <div className="relative group">
              <button className="text-[#08bcb4] hover:text-[#069aa2] flex items-center font-medium transition-colors text-lg">
                Services <span className="ml-1">▾</span>
              </button>
              <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md py-2 w-48">
                <Link href="/services/coaching" className="block px-4 py-2 text-base text-gray-800 hover:bg-gray-100">Coaching Services</Link>
                <Link href="/services/visa" className="block px-4 py-2 text-base text-gray-800 hover:bg-gray-100">Visa Services</Link>
                <Link href="/services/travel-forex" className="block px-4 py-2 text-base text-gray-800 hover:bg-gray-100">Travel & Forex</Link>
              </div>
            </div>
            <Link href="/blog" className="text-gray-800 hover:text-gray-900 text-lg">Blog</Link>
            <Link href="/testimonials" className="text-gray-800 hover:text-gray-900 text-lg">Testimonials</Link>
            <Link href="/contact" className="text-gray-800 hover:text-gray-900 text-lg">Contact Us</Link>
          </nav>
          <div className="hidden md:flex items-center space-x-2">
            <Link href="/booking" className="px-3 py-1 rounded-md text-base border border-white" style={{ backgroundColor: '#08bcb4', color: 'white' }}>Book Free Counselling</Link>
            <Link href="/mock-test" className="px-3 py-1 rounded-md text-base border border-white" style={{ backgroundColor: '#08bcb4', color: 'white' }}>Free Mock Test</Link>
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-800 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg py-2">
          <Link href="/" className="block px-4 py-2 text-base text-gray-800 hover:bg-gray-100" onClick={closeMobileMenu}>Home</Link>
          <Link href="/about" className="block px-4 py-2 text-base text-gray-800 hover:bg-gray-100" onClick={closeMobileMenu}>About Us</Link>
          {/* Mobile Study Abroad Dropdown */}
          <div>
            <button onClick={() => setIsStudyAbroadDropdownOpen(!isStudyAbroadDropdownOpen)} className="w-full text-left px-4 py-2 text-base text-[#08bcb4] hover:bg-gray-100 flex justify-between items-center">
              Study Abroad <span className="ml-1">{isStudyAbroadDropdownOpen ? '▲' : '▼'}</span>
            </button>
            {isStudyAbroadDropdownOpen && (
              <div className="bg-gray-50 py-1">
                <Link href="/study-abroad/uk" className="block px-8 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={closeMobileMenu}>Study in UK</Link>
                <Link href="/study-abroad/usa" className="block px-8 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={closeMobileMenu}>Study in USA</Link>
                <Link href="/study-abroad/australia" className="block px-8 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={closeMobileMenu}>Study in Australia</Link>
                <Link href="/study-abroad/canada" className="block px-8 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={closeMobileMenu}>Study in Canada</Link>
                <Link href="/study-abroad/ireland" className="block px-8 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={closeMobileMenu}>Study in Ireland</Link>
                <Link href="/study-abroad/new-zealand" className="block px-8 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={closeMobileMenu}>Study in New Zealand</Link>
                <Link href="/study-abroad/europe" className="block px-8 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={closeMobileMenu}>Study in Europe</Link>
              </div>
            )}
          </div>
          {/* Mobile Services Dropdown */}
          <div>
            <button onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)} className="w-full text-left px-4 py-2 text-base text-[#08bcb4] hover:bg-gray-100 flex justify-between items-center">
              Services <span className="ml-1">{isServicesDropdownOpen ? '▲' : '▼'}</span>
            </button>
            {isServicesDropdownOpen && (
              <div className="bg-gray-50 py-1">
                <Link href="/services/coaching" className="block px-8 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={closeMobileMenu}>Coaching Services</Link>
                <Link href="/services/visa" className="block px-8 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={closeMobileMenu}>Visa Services</Link>
                <Link href="/services/travel-forex" className="block px-8 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={closeMobileMenu}>Travel & Forex</Link>
              </div>
            )}
          </div>
          <Link href="/blog" className="block px-4 py-2 text-base text-gray-800 hover:bg-gray-100" onClick={closeMobileMenu}>Blog</Link>
          <Link href="/testimonials" className="block px-4 py-2 text-base text-gray-800 hover:bg-gray-100" onClick={closeMobileMenu}>Testimonials</Link>
          <Link href="/contact" className="block px-4 py-2 text-base text-gray-800 hover:bg-gray-100" onClick={closeMobileMenu}>Contact Us</Link>
          <div className="px-4 py-2 space-y-2">
            <Link href="/booking" className="block w-full text-center px-3 py-1 rounded-md text-base border border-white" style={{ backgroundColor: '#08bcb4', color: 'white' }} onClick={closeMobileMenu}>Book Free Counselling</Link>
            <Link href="/mock-test" className="block w-full text-center px-3 py-1 rounded-md text-base border border-white" style={{ backgroundColor: '#08bcb4', color: 'white' }} onClick={closeMobileMenu}>Free Mock Test</Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;