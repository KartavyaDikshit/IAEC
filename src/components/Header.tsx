'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';

interface ContactInfo {
  primary: {
    mobile: string;
    email: string;
  };
}

export default function Header() {
  const { data: session } = useSession();
  const [contactInfo, setContactInfo] = useState<ContactInfo | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    fetch('/api/contact-info')
      .then(res => res.json())
      .then(data => setContactInfo(data))
      .catch(err => console.error('Failed to load contact info:', err));
  }, []);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-40">
      {/* Top Contact Bar */}
      <div className="bg-[#08bcb4] text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            {contactInfo && (
              <>
                <a href={`tel:${contactInfo.primary.mobile}`} className="flex items-center hover:underline">
                  📞 {contactInfo.primary.mobile}
                </a>
                <a href={`mailto:${contactInfo.primary.email}`} className="flex items-center hover:underline">
                  ✉️ {contactInfo.primary.email}
                </a>
              </>
            )}
          </div>
          <div className="flex items-center space-x-4">
            {session ? (
              <div className="flex items-center space-x-4">
                <Link href="/admin" className="hover:underline">
                  👤 Admin Panel
                </Link>
                <button 
                  onClick={() => signOut()} 
                  className="hover:underline"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link href="/admin-login" className="hover:underline">
                🔐 Admin Login
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="text-2xl font-bold text-[#08bcb4]">IAEC</div>
            <div className="ml-2 text-gray-600 text-sm">
              <div>Consultants</div>
              <div className="text-xs">Since 2000</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-[#08bcb4] font-medium">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-[#08bcb4] font-medium">
              About
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-[#08bcb4] font-medium">
              Services
            </Link>
            <Link href="/study-abroad" className="text-gray-700 hover:text-[#08bcb4] font-medium">
              Study Abroad
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-[#08bcb4] font-medium">
              Blog
            </Link>
            <Link href="/testimonials" className="text-gray-700 hover:text-[#08bcb4] font-medium">
              Testimonials
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-[#08bcb4] font-medium">
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`bg-gray-600 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${mobileMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
              <span className={`bg-gray-600 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`bg-gray-600 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${mobileMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 py-4 border-t">
            <div className="flex flex-col space-y-2">
              <Link href="/" className="text-gray-700 hover:text-[#08bcb4] py-2">Home</Link>
              <Link href="/about" className="text-gray-700 hover:text-[#08bcb4] py-2">About</Link>
              <Link href="/services" className="text-gray-700 hover:text-[#08bcb4] py-2">Services</Link>
              <Link href="/study-abroad" className="text-gray-700 hover:text-[#08bcb4] py-2">Study Abroad</Link>
              <Link href="/blog" className="text-gray-700 hover:text-[#08bcb4] py-2">Blog</Link>
              <Link href="/testimonials" className="text-gray-700 hover:text-[#08bcb4] py-2">Testimonials</Link>
              <Link href="/contact" className="text-gray-700 hover:text-[#08bcb4] py-2">Contact</Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}