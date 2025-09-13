'use client';
import { useState, useEffect } from 'react';


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