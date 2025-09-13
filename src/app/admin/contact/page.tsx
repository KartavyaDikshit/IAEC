'use client';
import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

interface Branch {
  type: 'head' | 'branch';
  name: string;
  city: string;
  state: string;
  address: string;
  phone?: string;
  landline?: string;
  mobile?: string;
  email?: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
}

interface ContactData {
  company: {
    name: string;
    tagline: string;
    established: string;
    experience?: string;
  };
  primary: {
    mobile: string;
    landline: string;
    email: string;
    website?: string;
  };
  branches: {
    [key: string]: Branch;
  };
  socialMedia?: {
    [key: string]: string;
  };
  businessHours?: {
    weekdays: string;
    saturday: string;
    sunday: string;
    timezone: string;
  };
  updatedAt?: string;
}

export default function ContactAdmin() {
  const { status } = useSession(); // Removed 'data: session'
  const [contactData, setContactData] = useState<ContactData | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (status === 'unauthenticated') {
      redirect('/admin-login');
    }

    if (status === 'authenticated') {
      fetchContactData();
    }
  }, [status]);

  const fetchContactData = async () => {
    try {
      const response = await fetch('/api/contact-info');
      const data: ContactData = await response.json();
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
                  primary: { ...contactData?.primary, mobile: e.target.value }
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
                  primary: { ...contactData?.primary, landline: e.target.value }
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
                  primary: { ...contactData?.primary, email: e.target.value }
                })}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#08bcb4]"
              />
            </div>
          </div>
        </div>

        {/* Branch Management */}
        {contactData?.branches && Object.entries(contactData.branches).map(([key, branch]) => (
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