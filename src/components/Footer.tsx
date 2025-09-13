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
            <h3 className="text-2xl font-bold text-[#08bcb4]">IAEC Consultants</h3>
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
              <li><Link href="/contact" className="text-gray-300 hover:text-[#08bcb4] transition-colors">Contact</Link></li>
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