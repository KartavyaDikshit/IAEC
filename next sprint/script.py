# Create comprehensive contact information update for the IAEC website
contact_update_implementation = """
# IAEC Contact Information Update - Complete Implementation

## 1. Contact Information Data File

### File: data/contact-info.json
```json
{
  "company": {
    "name": "IAEC Consultants Pvt. Ltd.",
    "tagline": "Your Global Study Partner",
    "established": "2000",
    "experience": "24+ Years"
  },
  "primary": {
    "mobile": "+91 863 970 6102",
    "landline": "+91(0)79 4938 6834",
    "email": "ravinder@iaecconsultants.com",
    "website": "www.iaecconsultants.com"
  },
  "branches": {
    "headOffice": {
      "type": "head",
      "name": "HEAD OFFICE",
      "city": "Hyderabad",
      "state": "Telangana",
      "address": "#402, 4th Floor, Gurupartha Estates, Opp. Indian Oil Petrol Pump, Beside YMCA & Andhra Bank, Narayanguda, Hyderabad – 500 029",
      "phone": "+91-9966435511",
      "email": "contact@iaecconsultants.com",
      "coordinates": {
        "lat": 17.3850,
        "lng": 78.4867
      }
    },
    "ahmedabad": {
      "type": "branch",
      "name": "Ahmedabad Branch",
      "city": "Ahmedabad",
      "state": "Gujarat",
      "address": "IAEC Consultants Pvt. Ltd.\\nA-202, 2nd Floor, Karmayog Heights,\\nHL College Road, Above Kotak Mahindra Bank,\\nSardar Patel Nagar, Navrangpura,\\nAhmedabad -380009, Gujarat, INDIA.",
      "landline": "+91(0)79 4938 6834",
      "mobile": "+91 863 970 6102",
      "email": "ravinder@iaecconsultants.com",
      "coordinates": {
        "lat": 23.0225,
        "lng": 72.5714
      }
    },
    "kukatpally": {
      "type": "branch", 
      "name": "Kukatpally Branch",
      "city": "Kukatpally",
      "state": "Telangana",
      "address": "K P H B Phase 1, Kukatpally,\\nHyderabad, Telangana 500072",
      "mobile": "+91 7729997891",
      "email": "kripal@iaecconsultants.com",
      "coordinates": {
        "lat": 17.4875,
        "lng": 78.4071
      }
    }
  },
  "socialMedia": {
    "facebook": "https://facebook.com/iaecconsultants",
    "twitter": "https://twitter.com/iaecconsultants",
    "instagram": "https://instagram.com/iaecconsultants", 
    "linkedin": "https://linkedin.com/company/iaecconsultants",
    "youtube": "https://youtube.com/@iaecconsultants"
  },
  "businessHours": {
    "weekdays": "9:00 AM - 6:00 PM",
    "saturday": "9:00 AM - 4:00 PM", 
    "sunday": "Closed",
    "timezone": "Asia/Kolkata"
  }
}
```

## 2. Contact Information API Route

### File: src/app/api/contact-info/route.ts
```typescript
import { NextResponse } from 'next/server';
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join } from 'path';

const contactPath = join(process.cwd(), 'data/contact-info.json');

export async function GET() {
  try {
    if (!existsSync(contactPath)) {
      return NextResponse.json({ error: 'Contact info not found' }, { status: 404 });
    }
    
    const contactInfo = JSON.parse(readFileSync(contactPath, 'utf8'));
    return NextResponse.json(contactInfo);
  } catch (error) {
    console.error('Failed to load contact info:', error);
    return NextResponse.json({ error: 'Failed to load contact info' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const updatedContact = {
      ...body,
      updatedAt: new Date().toISOString()
    };
    
    writeFileSync(contactPath, JSON.stringify(updatedContact, null, 2));
    return NextResponse.json(updatedContact);
  } catch (error) {
    console.error('Failed to update contact info:', error);
    return NextResponse.json({ error: 'Failed to update contact info' }, { status: 500 });
  }
}
```

## 3. Updated Contact Information Component

### File: src/components/ContactInfo.tsx
```tsx
'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

interface ContactData {
  company: {
    name: string;
    tagline: string;
    established: string;
    experience: string;
  };
  primary: {
    mobile: string;
    landline: string;
    email: string;
    website: string;
  };
  branches: {
    [key: string]: {
      type: 'head' | 'branch';
      name: string;
      city: string;
      state: string;
      address: string;
      phone?: string;
      landline?: string;
      mobile?: string;
      email?: string;
      coordinates: {
        lat: number;
        lng: number;
      };
    };
  };
  businessHours: {
    weekdays: string;
    saturday: string;
    sunday: string;
    timezone: string;
  };
}

export default function ContactInfo() {
  const [contactData, setContactData] = useState<ContactData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/contact-info')
      .then(res => res.json())
      .then(data => {
        setContactData(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to load contact info:', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="flex justify-center py-8">Loading contact information...</div>;
  }

  if (!contactData) {
    return <div className="text-center py-8 text-red-600">Failed to load contact information</div>;
  }

  const getDirectionsUrl = (coordinates: { lat: number; lng: number }) => {
    return `https://www.google.com/maps/dir/?api=1&destination=${coordinates.lat},${coordinates.lng}`;
  };

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Get in Touch with IAEC
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to start your study abroad journey? Connect with our expert counselors at any of our locations across India.
          </p>
        </div>

        {/* Quick Contact Bar */}
        <div className="bg-[#08bcb4] text-white rounded-lg p-6 mb-12 shadow-lg">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <h4 className="font-semibold mb-2 flex items-center justify-center">
                📞 Call Us
              </h4>
              <a 
                href={`tel:${contactData.primary.mobile}`} 
                className="hover:underline text-lg font-medium"
              >
                {contactData.primary.mobile}
              </a>
            </div>
            <div>
              <h4 className="font-semibold mb-2 flex items-center justify-center">
                📠 Landline
              </h4>
              <a 
                href={`tel:${contactData.primary.landline}`} 
                className="hover:underline text-lg font-medium"
              >
                {contactData.primary.landline}
              </a>
            </div>
            <div>
              <h4 className="font-semibold mb-2 flex items-center justify-center">
                ✉️ Email Us
              </h4>
              <a 
                href={`mailto:${contactData.primary.email}`} 
                className="hover:underline text-lg font-medium"
              >
                {contactData.primary.email}
              </a>
            </div>
            <div>
              <h4 className="font-semibold mb-2 flex items-center justify-center">
                💬 WhatsApp
              </h4>
              <a 
                href={`https://wa.me/${contactData.primary.mobile.replace(/[^0-9]/g, '')}`} 
                className="hover:underline text-lg font-medium"
              >
                {contactData.primary.mobile}
              </a>
            </div>
          </div>
        </div>

        {/* Branch Locations */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {Object.entries(contactData.branches).map(([key, branch]) => (
            <div 
              key={key} 
              className={`bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 ${
                branch.type === 'head' ? 'border-t-4 border-[#08bcb4] ring-2 ring-[#08bcb4] ring-opacity-20' : ''
              }`}
            >
              {/* Branch Type Badge */}
              <div className="flex items-center justify-between mb-4">
                <div className={`px-4 py-2 rounded-full text-sm font-bold ${
                  branch.type === 'head' 
                    ? 'bg-[#08bcb4] text-white' 
                    : 'bg-gray-200 text-gray-700'
                }`}>
                  {branch.type === 'head' ? '🏢 HEAD OFFICE' : '🏬 BRANCH OFFICE'}
                </div>
                {branch.type === 'head' && (
                  <div className="text-2xl">⭐</div>
                )}
              </div>
              
              {/* City Name */}
              <h3 className="text-2xl font-bold text-[#08bcb4] mb-2">
                {branch.city}
              </h3>
              <p className="text-gray-500 font-medium mb-4">{branch.state}</p>
              
              {/* Address */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-700 mb-2 flex items-center">
                  📍 Address
                </h4>
                <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                  {branch.address}
                </p>
              </div>
              
              {/* Contact Details */}
              <div className="space-y-3 mb-6">
                <h4 className="font-semibold text-gray-700 flex items-center">
                  📞 Contact Details
                </h4>
                {branch.phone && (
                  <p className="flex items-center text-sm">
                    <span className="font-medium text-gray-700 mr-3 w-20">Phone:</span>
                    <a 
                      href={`tel:${branch.phone}`} 
                      className="text-[#08bcb4] hover:underline font-medium"
                    >
                      {branch.phone}
                    </a>
                  </p>
                )}
                {branch.landline && (
                  <p className="flex items-center text-sm">
                    <span className="font-medium text-gray-700 mr-3 w-20">Landline:</span>
                    <a 
                      href={`tel:${branch.landline}`} 
                      className="text-[#08bcb4] hover:underline font-medium"
                    >
                      {branch.landline}
                    </a>
                  </p>
                )}
                {branch.mobile && (
                  <p className="flex items-center text-sm">
                    <span className="font-medium text-gray-700 mr-3 w-20">Mobile:</span>
                    <a 
                      href={`tel:${branch.mobile}`} 
                      className="text-[#08bcb4] hover:underline font-medium"
                    >
                      {branch.mobile}
                    </a>
                  </p>
                )}
                {branch.email && (
                  <p className="flex items-center text-sm">
                    <span className="font-medium text-gray-700 mr-3 w-20">Email:</span>
                    <a 
                      href={`mailto:${branch.email}`} 
                      className="text-[#08bcb4] hover:underline font-medium"
                    >
                      {branch.email}
                    </a>
                  </p>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2">
                <a
                  href={getDirectionsUrl(branch.coordinates)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-[#08bcb4] text-white text-center py-2 px-4 rounded hover:bg-[#06a599] transition-colors text-sm font-medium"
                >
                  🗺️ Get Directions
                </a>
                {branch.mobile && (
                  <a
                    href={`https://wa.me/${branch.mobile.replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-[#25D366] text-white text-center py-2 px-4 rounded hover:bg-[#128C7E] transition-colors text-sm font-medium"
                  >
                    💬 WhatsApp
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Business Hours */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
            🕒 Business Hours
          </h3>
          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div>
              <h4 className="font-semibold text-gray-700">Monday - Friday</h4>
              <p className="text-[#08bcb4] font-medium">{contactData.businessHours.weekdays}</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-700">Saturday</h4>
              <p className="text-[#08bcb4] font-medium">{contactData.businessHours.saturday}</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-700">Sunday</h4>
              <p className="text-gray-500 font-medium">{contactData.businessHours.sunday}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
```

## 4. Updated Header Component

### File: src/components/Header.tsx
```tsx
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
              <Link href="/admin/login" className="hover:underline">
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
```

## 5. Updated Footer Component

### File: src/components/Footer.tsx
```tsx
'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

interface ContactInfo {
  company: {
    name: string;
    tagline: string;
    established: string;
  };
  primary: {
    mobile: string;
    landline: string;
    email: string;
  };
  branches: {
    headOffice: {
      address: string;
      phone: string;
      email: string;
    };
  };
  socialMedia: {
    [key: string]: string;
  };
}

export default function Footer() {
  const [contactInfo, setContactInfo] = useState<ContactInfo | null>(null);

  useEffect(() => {
    fetch('/api/contact-info')
      .then(res => res.json())
      .then(data => setContactInfo(data))
      .catch(err => console.error('Failed to load contact info:', err));
  }, []);

  if (!contactInfo) return null;

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-[#08bcb4] mb-4">IAEC Consultants</h3>
            <p className="text-gray-300 mb-4">
              {contactInfo.company.tagline} - Leading overseas education consultancy since {contactInfo.company.established}.
            </p>
            <div className="space-y-2">
              <p className="text-sm">📞 {contactInfo.primary.mobile}</p>
              <p className="text-sm">📠 {contactInfo.primary.landline}</p>
              <p className="text-sm">✉️ {contactInfo.primary.email}</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-300 hover:text-[#08bcb4] transition-colors">About Us</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-[#08bcb4] transition-colors">Services</Link></li>
              <li><Link href="/study-abroad" className="text-gray-300 hover:text-[#08bcb4] transition-colors">Study Abroad</Link></li>
              <li><Link href="/blog" className="text-gray-300 hover:text-[#08bcb4] transition-colors">Blog</Link></li>
              <li><Link href="/testimonials" className="text-gray-300 hover:text-[#08bcb4] transition-colors">Testimonials</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-[#08bcb4] transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Head Office */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Head Office</h4>
            <div className="text-gray-300 text-sm space-y-2">
              <p>🏢 Hyderabad</p>
              <p>{contactInfo.branches.headOffice.address}</p>
              <p>📞 {contactInfo.branches.headOffice.phone}</p>
              <p>✉️ {contactInfo.branches.headOffice.email}</p>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              {Object.entries(contactInfo.socialMedia).map(([platform, url]) => (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#08bcb4] transition-colors"
                >
                  {platform === 'facebook' && '📘'}
                  {platform === 'twitter' && '🐦'}
                  {platform === 'instagram' && '📷'}
                  {platform === 'linkedin' && '💼'}
                  {platform === 'youtube' && '📺'}
                </a>
              ))}
            </div>
            <div className="mt-4">
              <Link href="/booking" className="bg-[#08bcb4] text-white px-6 py-2 rounded hover:bg-[#06a599] transition-colors">
                Book Consultation
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2025 IAEC Consultants Pvt. Ltd. All Rights Reserved. | 
            <Link href="/privacy-policy" className="ml-1 hover:text-[#08bcb4]">Privacy Policy</Link> |
            <Link href="/terms-condition" className="ml-1 hover:text-[#08bcb4]">Terms & Conditions</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
```

## 6. Contact Page Update

### File: src/app/contact/page.tsx
```tsx
import ContactInfo from '@/components/ContactInfo';

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-[#08bcb4] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Contact IAEC Consultants</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Ready to transform your study abroad dreams into reality? Our expert counselors are here to guide you every step of the way.
          </p>
        </div>
      </div>

      {/* Contact Information Component */}
      <ContactInfo />

      {/* Contact Form Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
              Send us a Message
            </h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#08bcb4]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#08bcb4]"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#08bcb4]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Study Destination
                </label>
                <select className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#08bcb4]">
                  <option value="">Select Destination</option>
                  <option value="USA">USA</option>
                  <option value="UK">UK</option>
                  <option value="Australia">Australia</option>
                  <option value="Canada">Canada</option>
                  <option value="Germany">Germany</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  rows={5}
                  required
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#08bcb4]"
                  placeholder="Tell us about your study abroad goals..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#08bcb4] text-white py-3 px-6 rounded-md hover:bg-[#06a599] transition-colors font-semibold"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
```

## 7. Admin Panel for Contact Management

### File: src/app/admin/contact/page.tsx
```tsx
'use client';
import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

export default function ContactAdmin() {
  const { data: session, status } = useSession();
  const [contactData, setContactData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (status === 'unauthenticated') {
      redirect('/admin/login');
    }
    
    if (status === 'authenticated') {
      fetchContactData();
    }
  }, [status]);

  const fetchContactData = async () => {
    try {
      const response = await fetch('/api/contact-info');
      const data = await response.json();
      setContactData(data);
    } catch (error) {
      console.error('Failed to fetch contact data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    
    try {
      const response = await fetch('/api/contact-info', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactData),
      });
      
      if (response.ok) {
        alert('Contact information updated successfully!');
      } else {
        alert('Failed to update contact information');
      }
    } catch (error) {
      console.error('Failed to save contact data:', error);
      alert('Failed to update contact information');
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <div className="flex justify-center py-8">Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Contact Information Management</h1>
      
      <form onSubmit={handleSave} className="space-y-8">
        {/* Primary Contact */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Primary Contact Details</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Mobile Number
              </label>
              <input
                type="text"
                value={contactData?.primary?.mobile || ''}
                onChange={(e) => setContactData({
                  ...contactData,
                  primary: { ...contactData.primary, mobile: e.target.value }
                })}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#08bcb4]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Landline Number
              </label>
              <input
                type="text"
                value={contactData?.primary?.landline || ''}
                onChange={(e) => setContactData({
                  ...contactData,
                  primary: { ...contactData.primary, landline: e.target.value }
                })}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#08bcb4]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={contactData?.primary?.email || ''}
                onChange={(e) => setContactData({
                  ...contactData,
                  primary: { ...contactData.primary, email: e.target.value }
                })}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#08bcb4]"
              />
            </div>
          </div>
        </div>

        {/* Branch Management */}
        {contactData?.branches && Object.entries(contactData.branches).map(([key, branch]: [string, any]) => (
          <div key={key} className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">
              {branch.name} - {branch.city}
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Address
                </label>
                <textarea
                  rows={3}
                  value={branch.address || ''}
                  onChange={(e) => setContactData({
                    ...contactData,
                    branches: {
                      ...contactData.branches,
                      [key]: { ...branch, address: e.target.value }
                    }
                  })}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#08bcb4]"
                />
              </div>
              {branch.phone && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="text"
                    value={branch.phone || ''}
                    onChange={(e) => setContactData({
                      ...contactData,
                      branches: {
                        ...contactData.branches,
                        [key]: { ...branch, phone: e.target.value }
                      }
                    })}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#08bcb4]"
                  />
                </div>
              )}
              {branch.mobile && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mobile
                  </label>
                  <input
                    type="text"
                    value={branch.mobile || ''}
                    onChange={(e) => setContactData({
                      ...contactData,
                      branches: {
                        ...contactData.branches,
                        [key]: { ...branch, mobile: e.target.value }
                      }
                    })}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#08bcb4]"
                  />
                </div>
              )}
              {branch.email && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={branch.email || ''}
                    onChange={(e) => setContactData({
                      ...contactData,
                      branches: {
                        ...contactData.branches,
                        [key]: { ...branch, email: e.target.value }
                      }
                    })}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#08bcb4]"
                  />
                </div>
              )}
            </div>
          </div>
        ))}

        <button
          type="submit"
          disabled={saving}
          className="w-full bg-[#08bcb4] text-white py-3 px-6 rounded-md hover:bg-[#06a599] transition-colors font-semibold disabled:opacity-50"
        >
          {saving ? 'Saving...' : 'Save Contact Information'}
        </button>
      </form>
    </div>
  );
}
```
"""

# Save the complete contact update implementation
with open("contact_info_update_complete.txt", "w", encoding='utf-8') as f:
    f.write(contact_update_implementation)

print("✅ COMPLETE CONTACT INFORMATION UPDATE READY")
print("\n📍 Updated Contact Details:")
print("• Mobile: +91 863 970 6102")
print("• Landline: +91(0)79 4938 6834") 
print("• Email: ravinder@iaecconsultants.com")
print("\n🏢 Branch Locations:")
print("• HEAD OFFICE: Hyderabad (clearly marked)")
print("• BRANCH: Ahmedabad - Full address with contact details")
print("• BRANCH: Kukatpally - Full address with contact details")
print("\n🔧 Implementation Features:")
print("• Centralized contact data management")
print("• API endpoints for contact information")
print("• Updated Header with contact bar")
print("• Enhanced Footer with all details")
print("• Beautiful Contact page with branch cards")
print("• Admin panel for contact management")
print("• Google Maps integration")
print("• WhatsApp links for each branch")
print("• Business hours display")
print("• Social media links")
print("\n📋 Implementation saved to: contact_info_update_complete.txt")