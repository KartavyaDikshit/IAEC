# IAEC Contact Information Update Implementation

## Overview
This guide updates all contact information across your IAEC website with the new phone numbers, email addresses, and branch locations as specified.

## Updated Contact Information

### Primary Contact Details
- **Mobile**: +91 863 970 6102  
- **Landline**: +91(0)79 4938 6834
- **Email**: ravinder@iaecconsultants.com

### Branch Locations

#### Head Office - Hyderabad ⭐
```
#402, 4th Floor, Gurupartha Estates
Opp. Indian Oil Petrol Pump
Beside YMCA & Andhra Bank  
Narayanguda, Hyderabad – 500 029
Phone: +91-9966435511
Email: contact@iaecconsultants.com
```

#### Ahmedabad Branch
```
IAEC Consultants Pvt. Ltd.
A-202, 2nd Floor, Karmayog Heights
HL College Road, Above Kotak Mahindra Bank
Sardar Patel Nagar, Navrangpura
Ahmedabad -380009, Gujarat, INDIA
Landline: +91(0)79 4938 6834
Mobile: +91 863 970 6102
Email: ravinder@iaecconsultants.com
```

#### Kukatpally Branch  
```
K P H B Phase 1, Kukatpally
Hyderabad, Telangana 500072
Mobile: +91 7729997891
Email: kripal@iaecconsultants.com
```

## Implementation Files

### 1. Contact Data File
**File**: `data/contact-info.json`

Create this centralized data file to manage all contact information:

```json
{
  "company": {
    "name": "IAEC Consultants Pvt. Ltd.",
    "tagline": "Your Global Study Partner",
    "established": "2000"
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
      "email": "contact@iaecconsultants.com"
    },
    "ahmedabad": {
      "type": "branch",
      "name": "Ahmedabad Branch",
      "city": "Ahmedabad",
      "state": "Gujarat",
      "address": "IAEC Consultants Pvt. Ltd.\nA-202, 2nd Floor, Karmayog Heights,\nHL College Road, Above Kotak Mahindra Bank,\nSardar Patel Nagar, Navrangpura,\nAhmedabad -380009, Gujarat, INDIA.",
      "landline": "+91(0)79 4938 6834",
      "mobile": "+91 863 970 6102",
      "email": "ravinder@iaecconsultants.com"
    },
    "kukatpally": {
      "type": "branch",
      "name": "Kukatpally Branch", 
      "city": "Kukatpally",
      "state": "Telangana",
      "address": "K P H B Phase 1, Kukatpally,\nHyderabad, Telangana 500072",
      "mobile": "+91 7729997891",
      "email": "kripal@iaecconsultants.com"
    }
  },
  "businessHours": {
    "weekdays": "9:00 AM - 6:00 PM",
    "saturday": "9:00 AM - 4:00 PM",
    "sunday": "Closed",
    "timezone": "Asia/Kolkata"
  }
}
```

### 2. Contact Information API
**File**: `src/app/api/contact-info/route.ts`

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
    writeFileSync(contactPath, JSON.stringify(body, null, 2));
    return NextResponse.json(body);
  } catch (error) {
    console.error('Failed to update contact info:', error);
    return NextResponse.json({ error: 'Failed to update contact info' }, { status: 500 });
  }
}
```

### 3. Branch Display Component
**File**: `src/components/BranchLocations.tsx`

```tsx
'use client';
import { useState, useEffect } from 'react';

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
}

interface ContactData {
  primary: {
    mobile: string;
    landline: string;
    email: string;
  };
  branches: {
    [key: string]: Branch;
  };
}

export default function BranchLocations() {
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

  if (loading) return <div className="text-center py-8">Loading...</div>;
  if (!contactData) return <div className="text-center py-8 text-red-600">Failed to load contact information</div>;

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Offices</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with our expert counselors at any of our locations across India
          </p>
        </div>

        {/* Quick Contact Bar */}
        <div className="bg-[#08bcb4] text-white rounded-lg p-6 mb-12 shadow-lg">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <h4 className="font-semibold mb-2">📞 Call Us</h4>
              <a href={`tel:${contactData.primary.mobile}`} className="hover:underline text-lg">
                {contactData.primary.mobile}
              </a>
            </div>
            <div>
              <h4 className="font-semibold mb-2">📠 Landline</h4>
              <a href={`tel:${contactData.primary.landline}`} className="hover:underline text-lg">
                {contactData.primary.landline}
              </a>
            </div>
            <div>
              <h4 className="font-semibold mb-2">✉️ Email</h4>
              <a href={`mailto:${contactData.primary.email}`} className="hover:underline text-lg">
                {contactData.primary.email}
              </a>
            </div>
          </div>
        </div>

        {/* Branch Cards */}
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
                {branch.type === 'head' && <div className="text-2xl">⭐</div>}
              </div>
              
              {/* City & State */}
              <h3 className="text-2xl font-bold text-[#08bcb4] mb-1">{branch.city}</h3>
              <p className="text-gray-500 font-medium mb-4">{branch.state}</p>
              
              {/* Address */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-700 mb-2">📍 Address</h4>
                <p className="text-gray-600 leading-relaxed whitespace-pre-line text-sm">
                  {branch.address}
                </p>
              </div>
              
              {/* Contact Details */}
              <div className="space-y-2 mb-6">
                <h4 className="font-semibold text-gray-700">📞 Contact</h4>
                {branch.phone && (
                  <p className="text-sm">
                    <span className="font-medium text-gray-700 mr-2">Phone:</span>
                    <a href={`tel:${branch.phone}`} className="text-[#08bcb4] hover:underline">
                      {branch.phone}
                    </a>
                  </p>
                )}
                {branch.landline && (
                  <p className="text-sm">
                    <span className="font-medium text-gray-700 mr-2">Landline:</span>
                    <a href={`tel:${branch.landline}`} className="text-[#08bcb4] hover:underline">
                      {branch.landline}
                    </a>
                  </p>
                )}
                {branch.mobile && (
                  <p className="text-sm">
                    <span className="font-medium text-gray-700 mr-2">Mobile:</span>
                    <a href={`tel:${branch.mobile}`} className="text-[#08bcb4] hover:underline">
                      {branch.mobile}
                    </a>
                  </p>
                )}
                {branch.email && (
                  <p className="text-sm">
                    <span className="font-medium text-gray-700 mr-2">Email:</span>
                    <a href={`mailto:${branch.email}`} className="text-[#08bcb4] hover:underline break-all">
                      {branch.email}
                    </a>
                  </p>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(branch.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-[#08bcb4] text-white text-center py-2 px-3 rounded hover:bg-[#06a599] transition-colors text-sm font-medium"
                >
                  🗺️ Directions
                </a>
                {branch.mobile && (
                  <a
                    href={`https://wa.me/${branch.mobile.replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-[#25D366] text-white text-center py-2 px-3 rounded hover:bg-[#128C7E] transition-colors text-sm font-medium"
                  >
                    💬 WhatsApp
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
```

### 4. Updated Header Component
**File**: `src/components/Header.tsx` (Update the existing file)

Add this contact bar at the top of your header:

```tsx
{/* Top Contact Bar */}
<div className="bg-[#08bcb4] text-white py-2">
  <div className="container mx-auto px-4 flex justify-between items-center text-sm">
    <div className="flex items-center space-x-6">
      <a href="tel:+918639706102" className="flex items-center hover:underline">
        📞 +91 863 970 6102
      </a>
      <a href="mailto:ravinder@iaecconsultants.com" className="flex items-center hover:underline">
        ✉️ ravinder@iaecconsultants.com
      </a>
    </div>
    <div className="flex items-center space-x-4">
      {/* Admin links */}
    </div>
  </div>
</div>
```

### 5. Updated Footer Component  
**File**: `src/components/Footer.tsx` (Update existing file)

Add this contact section to your footer:

```tsx
{/* Company Info & Contact */}
<div>
  <h3 className="text-2xl font-bold text-[#08bcb4] mb-4">IAEC Consultants</h3>
  <p className="text-gray-300 mb-4">
    Your Global Study Partner - Leading overseas education consultancy since 2000.
  </p>
  <div className="space-y-2 text-sm">
    <p>📞 +91 863 970 6102</p>
    <p>📠 +91(0)79 4938 6834</p>  
    <p>✉️ ravinder@iaecconsultants.com</p>
  </div>
</div>

{/* Head Office */}
<div>
  <h4 className="text-lg font-semibold mb-4">Head Office - Hyderabad</h4>
  <div className="text-gray-300 text-sm">
    <p>#402, 4th Floor, Gurupartha Estates</p>
    <p>Opp. Indian Oil Petrol Pump</p>
    <p>Beside YMCA & Andhra Bank</p>
    <p>Narayanguda, Hyderabad – 500 029</p>
    <p className="mt-2">📞 +91-9966435511</p>
  </div>
</div>
```

## Quick Implementation Steps

1. **Create the data file**: `data/contact-info.json` with all contact details
2. **Add API route**: `src/app/api/contact-info/route.ts` for data management  
3. **Create component**: `src/components/BranchLocations.tsx` for displaying offices
4. **Update header**: Add contact bar with phone and email
5. **Update footer**: Add contact information and head office details
6. **Update contact page**: Use the BranchLocations component

## Features Included

✅ **Centralized Contact Management**: All contact info in one JSON file  
✅ **Head Office Clearly Marked**: Special styling and badge for Hyderabad  
✅ **All Branch Details**: Complete address and contact info for each location  
✅ **Responsive Design**: Mobile-friendly branch cards  
✅ **Interactive Elements**: Click-to-call, email links, WhatsApp buttons  
✅ **Google Maps Integration**: Directions links for each office  
✅ **Admin Panel Ready**: Easy to create admin interface for updates  
✅ **Consistent Branding**: Uses #08bcb4 primary color throughout

This implementation ensures all your contact information is consistently displayed across the website with the updated details you provided.