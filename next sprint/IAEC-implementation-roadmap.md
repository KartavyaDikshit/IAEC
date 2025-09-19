# IAEC Website Revamp - Complete Implementation Roadmap

## Overview
This document provides a comprehensive file-by-file guide to implement all requested changes for the IAEC Consultants website, transforming it into a modern, fast, SEO-optimized education consultancy platform.

## 🎯 Project Goals
- **Modern & Fast**: Clean design with optimized performance
- **SEO Optimized**: Enhanced search engine visibility
- **Production Ready**: No build errors, proper linting
- **Better UX**: Improved color scheme and functionality
- **Complete Feature Set**: All countries, proper links, social media

## 📋 Implementation Phases

### Phase 1: Core Updates & Styling (Priority 1)
1. Update color scheme and button visibility
2. Fix logo placements (header and footer)
3. Update contact information
4. Link "Start Your Journey" button to contact form

### Phase 2: Content & Pages (Priority 2) 
1. Add Terms & Conditions page
2. Add Privacy Policy page
3. Add New Zealand study abroad page
4. Update footer with social media links

### Phase 3: Admin Panel & Features (Priority 3)
1. Fix admin panel styling
2. Implement image upload for testimonials
3. Remove contact number from header

### Phase 4: SEO & Performance (Priority 4)
1. Optimize Google Analytics implementation
2. Fix any linting issues
3. Ensure production build works
4. Performance optimizations

## 🔧 File-by-File Implementation Guide

### 1. Update Global Styles - `src/app/globals.css`

**Current Issue**: Need better color scheme consistency and button visibility

**Changes Required**:
- Update CSS variables for better contrast
- Add white text utilities
- Enhance button styles

**Updated Code**:
```css
@import "tailwindcss";

:root {
  /* IAEC Brand Colors */
  --primary: #08bcb4;
  --primary-hover: #069aa2;
  --primary-light: #e6fffe;
  --primary-dark: #067a73;
  
  /* High Contrast Text Colors */
  --text-primary: #1a202c;
  --text-secondary: #4a5568;
  --text-muted: #718096;
  --text-white: #ffffff;
  
  /* Background Colors */
  --bg-primary: #ffffff;
  --bg-secondary: #f7fafc;
  --bg-accent: #edf2f7;
  
  /* Status Colors */
  --success: #38a169;
  --warning: #ed8936;
  --error: #e53e3e;
}

@theme inline {
  --color-primary: var(--primary);
  --color-primary-hover: var(--primary-hover);
  --color-primary-light: var(--primary-light);
  --color-primary-dark: var(--primary-dark);
  --color-text-primary: var(--text-primary);
  --color-text-secondary: var(--text-secondary);
  --color-text-muted: var(--text-muted);
  --color-text-white: var(--text-white);
  --color-bg-primary: var(--bg-primary);
  --color-bg-secondary: var(--bg-secondary);
  --color-bg-accent: var(--bg-accent);
  --color-success: var(--success);
  --color-warning: var(--warning);
  --color-error: var(--error);
}

/* Smooth scrolling for the entire page */
html {
  scroll-behavior: smooth;
}

body {
  background: var(--bg-primary);
  color: var(--text-primary);
  font-family: 'Inter', 'Arial', sans-serif;
  line-height: 1.6;
}

/* Hide scrollbar for infinite scroll containers */
.scrollbar-hide {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

.scrollbar-hide::-webkit-scrollbar {
  display: none; /* Chrome, Safari and Opera */
}

/* Line clamp utility */
.line-clamp-2 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.line-clamp-3 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}

/* High contrast typography */
h1, h2, h3, h4, h5, h6 {
  color: var(--text-primary);
  font-weight: 600;
  line-height: 1.2;
}

/* Enhanced button styles with proper contrast */
.btn-primary {
  background-color: var(--primary);
  color: white !important;
  border: 2px solid var(--primary);
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  cursor: pointer;
}

.btn-primary:hover {
  background-color: var(--primary-hover);
  border-color: var(--primary-hover);
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(8, 188, 180, 0.25);
  color: white !important;
}

.btn-secondary {
  background-color: transparent;
  color: var(--primary);
  border: 2px solid var(--primary);
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  cursor: pointer;
}

.btn-secondary:hover {
  background-color: var(--primary);
  color: white !important;
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(8, 188, 180, 0.25);
}

/* White text utility classes */
.text-white-important {
  color: white !important;
}

.btn-white-text {
  color: white !important;
}

/* Stats section styling */
.stats-number {
  color: var(--primary) !important;
  font-weight: 700;
}

/* Footer white text */
.footer-white * {
  color: white !important;
}

/* Ensure proper link contrast */
a {
  color: var(--primary);
  text-decoration: none;
  transition: color 0.3s ease;
}

a:hover {
  color: var(--primary-dark);
}

/* Form input styles */
input, textarea, select {
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  padding: 12px 16px;
  transition: border-color 0.3s ease;
  width: 100%;
}

input:focus, textarea:focus, select:focus {
  outline: none;
  border-color: var(--primary);
  box-shadow: 0 0 0 3px rgba(8, 188, 180, 0.1);
}

/* Performance optimizations */
* {
  box-sizing: border-box;
}

img {
  max-width: 100%;
  height: auto;
}

/* Reduce motion for accessibility */
@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
  
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

/* Shadow enhancement */
.shadow-3xl {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

/* Loading animation */
@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

/* Focus styles for accessibility */
button:focus-visible,
a:focus-visible {
  outline: 2px solid var(--primary);
  outline-offset: 2px;
}
```

### 2. Update Header Component - `src/components/Header.tsx`

**Current Issue**: Missing admin login, contact number needs removal, logo needs replacement

**Changes Required**:
- Replace text logo with image logo
- Remove contact number display
- Add admin login button

**Updated Code**:
```typescript
'use client';
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import { useSession, signOut } from 'next-auth/react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data: session, status } = useSession();

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Quick Links Bar */}
      <div className="bg-primary text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <span>IAEC Consultants</span>
              <span>Quick Links</span>
            </div>
            <div className="flex items-center space-x-4">
              <span>Head Office – Hyderabad</span>
              {session ? (
                <div className="flex items-center space-x-2">
                  <Link href="/admin" className="hover:underline">
                    Admin Panel
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
                  Admin Login
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image 
              src="/images/iaec-landing-logo.png" 
              alt="IAEC Consultants" 
              width={180} 
              height={60}
              className="h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/about" className="hover:text-primary transition-colors">
              About
            </Link>
            <div className="relative group">
              <button className="hover:text-primary transition-colors">
                Study Abroad
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <Link href="/study-abroad/usa" className="block px-4 py-2 hover:bg-gray-100">USA</Link>
                <Link href="/study-abroad/uk" className="block px-4 py-2 hover:bg-gray-100">UK</Link>
                <Link href="/study-abroad/australia" className="block px-4 py-2 hover:bg-gray-100">Australia</Link>
                <Link href="/study-abroad/canada" className="block px-4 py-2 hover:bg-gray-100">Canada</Link>
                <Link href="/study-abroad/new-zealand" className="block px-4 py-2 hover:bg-gray-100">New Zealand</Link>
                <Link href="/study-abroad/ireland" className="block px-4 py-2 hover:bg-gray-100">Ireland</Link>
                <Link href="/study-abroad/europe" className="block px-4 py-2 hover:bg-gray-100">Europe</Link>
              </div>
            </div>
            <div className="relative group">
              <button className="hover:text-primary transition-colors">
                Services
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <Link href="/services/coaching" className="block px-4 py-2 hover:bg-gray-100">IELTS Coaching</Link>
                <Link href="/services/travel-forex" className="block px-4 py-2 hover:bg-gray-100">Travel & Forex</Link>
                <Link href="/services/visa-assistance" className="block px-4 py-2 hover:bg-gray-100">Visa Assistance</Link>
              </div>
            </div>
            <Link href="/blog" className="hover:text-primary transition-colors">
              Blog
            </Link>
            <Link href="/testimonials" className="hover:text-primary transition-colors">
              Testimonials
            </Link>
            <Link href="/contact" className="hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link href="/contact" className="btn-primary">
              Get Free Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`block w-6 h-0.5 bg-gray-600 transition-all ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-gray-600 mt-1 transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-gray-600 mt-1 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden pb-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-2 mt-4">
              <Link href="/about" className="py-2 hover:text-primary transition-colors">About</Link>
              <Link href="/study-abroad/usa" className="py-2 hover:text-primary transition-colors">Study in USA</Link>
              <Link href="/study-abroad/uk" className="py-2 hover:text-primary transition-colors">Study in UK</Link>
              <Link href="/study-abroad/australia" className="py-2 hover:text-primary transition-colors">Study in Australia</Link>
              <Link href="/study-abroad/canada" className="py-2 hover:text-primary transition-colors">Study in Canada</Link>
              <Link href="/study-abroad/new-zealand" className="py-2 hover:text-primary transition-colors">Study in New Zealand</Link>
              <Link href="/services/coaching" className="py-2 hover:text-primary transition-colors">IELTS Coaching</Link>
              <Link href="/blog" className="py-2 hover:text-primary transition-colors">Blog</Link>
              <Link href="/contact" className="py-2 hover:text-primary transition-colors">Contact</Link>
              <Link href="/contact" className="btn-primary mt-4 self-start">
                Get Free Consultation
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
```

### 3. Update Footer Component - `src/components/Footer.tsx`

**Current Issue**: Missing social media links, Terms & Privacy Policy, needs white text, logo replacement

**Changes Required**:
- Replace text with footer logo
- Add social media links
- Add Terms & Conditions and Privacy Policy links
- Apply white text styling

**Updated Code**:
```typescript
import Link from 'next/link';
import Image from 'next/image';
import contactInfo from '../../data/contact-info.json';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Image 
              src="/images/footer-logo.png" 
              alt="IAEC Consultants" 
              width={180} 
              height={60}
              className="h-12 w-auto"
            />
            <p className="text-gray-300">
              Leading overseas education consultancy since 2000. Expert guidance for USA, UK, 
              Australia, Canada with 95% visa success rate.
            </p>
            <div className="flex space-x-4">
              <Link href="https://www.facebook.com/iaecconsultantspvtltd" target="_blank" 
                    className="text-gray-300 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </Link>
              <Link href="https://x.com/iaec_india" target="_blank" 
                    className="text-gray-300 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </Link>
              <Link href="https://www.instagram.com/iaecconsultantspvtltd/" target="_blank" 
                    className="text-gray-300 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </Link>
              <Link href="https://www.linkedin.com/company/iaecconsultantspvtltd/" target="_blank" 
                    className="text-gray-300 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-white">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/study-abroad/usa" className="text-gray-300 hover:text-white transition-colors">Study in USA</Link></li>
              <li><Link href="/study-abroad/uk" className="text-gray-300 hover:text-white transition-colors">Study in UK</Link></li>
              <li><Link href="/study-abroad/australia" className="text-gray-300 hover:text-white transition-colors">Study in Australia</Link></li>
              <li><Link href="/study-abroad/canada" className="text-gray-300 hover:text-white transition-colors">Study in Canada</Link></li>
              <li><Link href="/services/coaching" className="text-gray-300 hover:text-white transition-colors">IELTS Coaching</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-white">
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/services/visa-assistance" className="text-gray-300 hover:text-white transition-colors">Visa Assistance</Link></li>
              <li><Link href="/services/university-selection" className="text-gray-300 hover:text-white transition-colors">University Selection</Link></li>
              <li><Link href="/services/test-preparation" className="text-gray-300 hover:text-white transition-colors">Test Preparation</Link></li>
              <li><Link href="/services/scholarship-guidance" className="text-gray-300 hover:text-white transition-colors">Scholarship Guidance</Link></li>
              <li><Link href="/services/travel-forex" className="text-gray-300 hover:text-white transition-colors">Travel & Forex</Link></li>
              <li><Link href="/mock-test" className="text-gray-300 hover:text-white transition-colors">Free Mock Test</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-white">
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <span className="text-primary mt-1">📞</span>
                <div>
                  <p className="text-gray-300">+91 863 970 6102</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-primary mt-1">✉️</span>
                <div>
                  <p className="text-gray-300">ravinder@iaecconsultants.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-primary mt-1">📍</span>
                <div>
                  <p className="text-gray-300">
                    #402, 4th Floor, Gurupartha Estates,<br />
                    Narayanguda, Hyderabad - 500029
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="footer-white">
              <p className="text-gray-300 text-sm">
                © 2024 IAEC Consultants Pvt. Ltd. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-6 text-sm footer-white">
              <Link href="/terms-conditions" className="text-gray-300 hover:text-white transition-colors">
                Terms & Conditions
              </Link>
              <Link href="/privacy-policy" className="text-gray-300 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/sitemap" className="text-gray-300 hover:text-white transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
```

### 4. Update Home Page - `src/app/page.tsx`

**Current Issue**: Statistics section needs consistent primary color, "Start Your Journey" button not linked

**Changes Required**:
- Update statistics section styling to use primary color
- Link "Start Your Journey" button to contact form
- Ensure proper button text colors

**Updated Code**:
```typescript
import CountryRibbon from '@/components/home/CountryRibbon';
import AccreditationRibbon from '@/components/home/AccreditationRibbon';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'IAEC Consultants - Your Global Study Partner',
  description: 'Leading overseas education consultants since 2000. Expert guidance for USA, UK, Australia, Canada. Transform your dreams into reality with 30,000+ success stories.',
  openGraph: {
    title: 'IAEC Consultants - Your Global Study Partner',
    description: 'Leading overseas education consultants since 2000. Expert guidance for USA, UK, Australia, Canada.',
    images: ['/images/home-og.jpg'],
  },
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-primary min-h-screen flex items-center">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Your Global Study Partner –{' '}
            <span className="text-yellow-400">Explore the World</span>{' '}
            with IAEC
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto opacity-90">
            Leading overseas education consultants since 2000. Expert guidance for USA, UK, 
            Australia, Canada. Transform your dreams into reality with 30,000+ success stories.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Link href="/contact" className="btn-primary btn-white-text text-lg px-8 py-4">
              Start Your Journey
            </Link>
            <Link href="/contact" className="btn-secondary text-white border-white hover:bg-white hover:text-primary text-lg px-8 py-4">
              Book Free Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="stats-number text-4xl md:text-5xl font-bold">30,000+</div>
              <p className="text-gray-600 font-medium">Satisfied Students</p>
            </div>
            <div className="space-y-2">
              <div className="stats-number text-4xl md:text-5xl font-bold">15+</div>
              <p className="text-gray-600 font-medium">Countries</p>
            </div>
            <div className="space-y-2">
              <div className="stats-number text-4xl md:text-5xl font-bold">24+</div>
              <p className="text-gray-600 font-medium">Years Experience</p>
            </div>
            <div className="space-y-2">
              <div className="stats-number text-4xl md:text-5xl font-bold">95%</div>
              <p className="text-gray-600 font-medium">Visa Success Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Country Ribbon */}
      <CountryRibbon />

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                About IAEC Consultants
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                IAEC is a leading overseas education consultancy established in 2000 with a passion 
                to build an enterprise of international quality. We specialize in study abroad programs 
                for USA, UK, Australia, Canada, Ireland, and European countries.
              </p>
              <br />
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                With 8 offices across Telangana, Andhra Pradesh & Sri Lanka, our dedicated team of 
                160+ education experts has successfully placed 30,000+ students in top universities 
                worldwide since 2000.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-white rounded-lg shadow-lg">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
                <p className="text-gray-600">
                  To empower students to achieve their global education dreams through expert guidance, 
                  personalized support, and ethical counseling.
                </p>
              </div>

              <div className="text-center p-6 bg-white rounded-lg shadow-lg">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
                <p className="text-gray-600">
                  To be the most trusted leader in overseas education consultancy, fostering 
                  successful global citizens.
                </p>
              </div>

              <div className="text-center p-6 bg-white rounded-lg shadow-lg">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Our Values</h3>
                <p className="text-gray-600">
                  Knowledge, care for students, problem-solving skills, and timeliness in all our services.
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link href="/about" className="btn-primary">
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Accreditation Ribbon */}
      <AccreditationRibbon />
    </>
  );
}
```

### 5. Update UK Study Abroad Page - `src/app/study-abroad/uk/page.tsx`

**Current Issue**: Button text needs to be white, cost section text needs to be white, contact information needs updating

**Changes Required**:
- Make "Start Your UK Journey" button text white
- Make cost estimation text white
- Make "Ready to Begin Your UK Education Journey?" text white
- Update contact information
- Make "Take Free Mock Test" button have white text

**Key Updates to Add**:
```typescript
// In the hero section, update the button:
<Link href="/contact" className="btn-primary btn-white-text">
  Start Your UK Journey
</Link>

// In the cost section, update styling:
<div className="bg-primary text-white rounded-lg p-6">
  <h4 className="text-white font-semibold text-lg mb-4">Estimated Total Annual Cost</h4>
  <div className="space-y-4">
    <div>
      <h5 className="text-white font-medium">London Universities</h5>
      <p className="text-white text-xl font-bold">£30,000 - £58,000</p>
    </div>
    <div>
      <h5 className="text-white font-medium">Outside London</h5>
      <p className="text-white text-xl font-bold">£25,000 - £50,000</p>
    </div>
  </div>
</div>

// In the CTA section:
<div className="bg-primary text-white rounded-lg p-8 text-center">
  <h2 className="text-white text-2xl font-bold mb-4">Ready to Begin Your UK Education Journey?</h2>
  <p className="text-white mb-6">Join thousands of successful students who achieved their dreams with IAEC's expert guidance</p>
  <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
    <Link href="/contact" className="btn-secondary bg-white text-primary hover:bg-gray-100">
      Book Free Counselling
    </Link>
    <Link href="/mock-test" className="btn-secondary border-white text-white hover:bg-white hover:text-primary">
      Take Free Mock Test
    </Link>
  </div>

  <div className="grid md:grid-cols-3 gap-6 mt-8">
    <div className="text-center">
      <h3 className="text-white font-semibold">📞 Call Us</h3>
      <p className="text-white">+91 863 970 6102</p>
    </div>
    <div className="text-center">
      <h3 className="text-white font-semibold">📧 Email Us</h3>
      <p className="text-white">ravinder@iaecconsultants.com</p>
    </div>
    <div className="text-center">
      <h3 className="text-white font-semibold">📍 Visit Us</h3>
      <p className="text-white">Hyderabad, India</p>
    </div>
  </div>
</div>
```

### 6. Create New Zealand Study Abroad Page - `src/app/study-abroad/new-zealand/page.tsx`

**Action**: Create a new file following the same pattern as other country pages

**Content Structure**:
- Hero section with New Zealand-specific content
- Quick stats (international students, universities, visa success rate)
- Why study in New Zealand section
- Education system overview
- Top universities table
- Admission requirements
- Cost breakdown
- Student visa process
- Work opportunities
- Application timeline
- IAEC services
- FAQ section
- CTA section with contact form link

### 7. Create Terms & Conditions Page - `src/app/terms-conditions/page.tsx`

**Action**: Create new file with comprehensive T&C content

### 8. Create Privacy Policy Page - `src/app/privacy-policy/page.tsx`

**Action**: Create new file with comprehensive privacy policy content

### 9. Update Admin Panel - `src/app/admin/page.tsx`

**Current Issue**: Button text visibility issues

**Changes Required**:
```typescript
// Update button styling for better visibility:
<Link href="/admin/blogs/new" className="btn-primary btn-white-text">
  Create New Blog Post
</Link>
<Link href="/admin/testimonials/new" className="btn-primary btn-white-text">  
  Add New Testimonial
</Link>
<Link href="/admin/form-submissions" className="btn-primary btn-white-text">
  View Form Submissions
</Link>
```

### 10. Update Contact Information Data - `data/contact-info.json`

**Changes Required**:
- Update phone numbers from placeholders to real numbers
- Update email addresses

### 11. Update Layout for Enhanced SEO - `src/app/layout.tsx`

**Changes Required**:
- Ensure Google Analytics is properly configured
- Add proper structured data
- Update metadata with real information

## 🚀 Deployment Steps

### 1. Pre-deployment Checklist
- [ ] All files updated according to roadmap
- [ ] Images added to public/images folder
- [ ] npm run build works without errors  
- [ ] npm run lint passes
- [ ] All links tested
- [ ] Contact forms working
- [ ] Admin panel accessible

### 2. GoDaddy Deployment
1. Build the project: `npm run build`
2. Export static files if needed: `npm run export`
3. Upload files to GoDaddy hosting
4. Configure domain settings
5. Set up SSL certificate
6. Test live website functionality

### 3. Post-deployment Testing
- [ ] All pages load correctly
- [ ] Contact forms submit successfully
- [ ] Admin login works
- [ ] WhatsApp integration functional
- [ ] SEO meta tags displaying
- [ ] Google Analytics tracking
- [ ] Mobile responsiveness
- [ ] Page load speed optimization

## 📊 Success Metrics

### Performance Targets:
- Google PageSpeed Score: 90+
- First Contentful Paint: <2s
- Largest Contentful Paint: <2.5s
- Time to Interactive: <3s

### SEO Targets:
- All pages have proper meta descriptions
- Structured data implemented
- Internal linking optimized
- Image alt tags present
- Mobile-friendly test passes

### UX Improvements:
- Consistent color scheme
- Clear call-to-action buttons
- Improved navigation
- Professional appearance
- Fast loading times

This comprehensive roadmap ensures the IAEC website becomes a modern, fast, SEO-optimized platform that effectively serves students seeking overseas education guidance.