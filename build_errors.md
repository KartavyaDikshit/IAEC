<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" style="height:64px;margin-right:32px"/>

# go through this repo line by line file by file : [https://github.com/KartavyaDikshit/IAEC](https://github.com/KartavyaDikshit/IAEC)

and then create a very detailed roadmap with exact changes and how to handle the following build errors:
PS C:\Users\User\IAEC2\IAEC\IAEC_Recovery> npm run build

> iaec-website@0.1.0 build
> next build

▲ Next.js 15.5.3

- Environments: .env.local
- Experiments (use with caution):
· optimizePackageImports

Creating an optimized production build ...
✓ Compiled successfully in 7.9s

Failed to compile.

./src/app/about/page.tsx
98:13  Warning: Using `<img>` could result in slower LCP and higher bandwidth. Consider using `<Image />` from `next/image` or a custom image loader to automatically optimize images. This may incur additional usage or cost from your provider. See: [https://nextjs.org/docs/messages/no-img-element](https://nextjs.org/docs/messages/no-img-element)  @next/next/no-img-element
98:13  Warning: img elements must have an alt prop, either with meaningful text, or an empty string for decorative images.  jsx-a11y/alt-text

./src/app/admin/whatsapp/page.tsx
18:17  Warning: 'session' is assigned a value but never used.  @typescript-eslint/no-unused-vars

./src/app/admin-login/page.tsx
42:14  Warning: 'error' is defined but never used.  @typescript-eslint/no-unused-vars

./src/app/api/admin/blogs/count/route.ts
27:12  Warning: 'error' is defined but never used.  @typescript-eslint/no-unused-vars

./src/app/api/admin/testimonials/count/route.ts
27:12  Warning: 'error' is defined but never used.  @typescript-eslint/no-unused-vars

./src/app/page.tsx
118:17  Warning: Using `<img>` could result in slower LCP and higher bandwidth. Consider using `<Image />` from `next/image` or a custom image loader to automatically optimize images. This may incur additional usage or cost from your provider. See: [https://nextjs.org/docs/messages/no-img-element](https://nextjs.org/docs/messages/no-img-element)  @next/next/no-img-element

./src/app/services/page.tsx
13:8  Error: 'Image' is not defined.  react/jsx-no-undef

./src/app/study-abroad/canada/page.tsx
111:91  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `'`, `&rsquo;`.  react/no-unescaped-entities
348:60  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `'`, `&rsquo;`.  react/no-unescaped-entities
401:59  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `'`, `&rsquo;`.  react/no-unescaped-entities
405:57  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `'`, `&rsquo;`.  react/no-unescaped-entities
575:50  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `'`, `&rsquo;`.  react/no-unescaped-entities
583:65  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `'`, `&rsquo;`.  react/no-unescaped-entities

./src/app/study-abroad/europe/france/page.tsx
99:141  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `'`, `&rsquo;`.  react/no-unescaped-entities
354:71  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `'`, `&rsquo;`.  react/no-unescaped-entities
381:23  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `'`, `&rsquo;`.  react/no-unescaped-entities
632:61  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `'`, `&rsquo;`.  react/no-unescaped-entities
830:146  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `'`, `&rsquo;`.  react/no-unescaped-entities
835:57  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `'`, `&rsquo;`.  react/no-unescaped-entities

./src/app/study-abroad/europe/italy/page.tsx
101:82  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `'`, `&rsquo;`.  react/no-unescaped-entities
144:62  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `'`, `&rsquo;`.  react/no-unescaped-entities
151:60  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `'`, `&rsquo;`.  react/no-unescaped-entities
340:60  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `'`, `&rsquo;`.  react/no-unescaped-entities
464:81  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `'`, `&rsquo;`.  react/no-unescaped-entities
869:124  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `'`, `&rsquo;`.  react/no-unescaped-entities

./src/app/study-abroad/europe/latvia/page.tsx
81:68  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `'`, `&rsquo;`.  react/no-unescaped-entities
89:58  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `'`, `&rsquo;`.  react/no-unescaped-entities
107:88  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `'`, `&rsquo;`.  react/no-unescaped-entities
107:98  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `'`, `&rsquo;`.  react/no-unescaped-entities
142:78  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `'`, `&rsquo;`.  react/no-unescaped-entities
149:76  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `'`, `&rsquo;`.  react/no-unescaped-entities
290:76  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `'`, `&rsquo;`.  react/no-unescaped-entities
332:74  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `'`, `&rsquo;`.  react/no-unescaped-entities
340:60  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `'`, `&rsquo;`.  react/no-unescaped-entities
348:101  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `'`, `&rsquo;`.  react/no-unescaped-entities
383:30  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `'`, `&rsquo;`.  react/no-unescaped-entities
393:59  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `'`, `&rsquo;`.  react/no-unescaped-entities
397:57  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `'`, `&rsquo;`.  react/no-unescaped-entities
466:81  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `'`, `&rsquo;`.  react/no-unescaped-entities
471:79  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `'`, `&rsquo;`.  react/no-unescaped-entities
595:52  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `'`, `&rsquo;`.  react/no-unescaped-entities
595:62  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `'`, `&rsquo;`.  react/no-unescaped-entities
862:140  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `'`, `&rsquo;`.  react/no-unescaped-entities

./src/app/study-abroad/europe/spain/page.tsx
81:134  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `'`, `&rsquo;`.  react/no-unescaped-entities
101:66  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `'`, `&rsquo;`.  react/no-unescaped-entities
142:85  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `'`, `&rsquo;`.  react/no-unescaped-entities
149:84  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `'`, `&rsquo;`.  react/no-unescaped-entities
223:67  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `'`, `&rsquo;`.  react/no-unescaped-entities
259:96  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `'`, `&rsquo;`.  react/no-unescaped-entities
290:83  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `'`, `&rsquo;`.  react/no-unescaped-entities
332:82  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `'`, `&rsquo;`.  react/no-unescaped-entities
340:60  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `'`, `&rsquo;`.  react/no-unescaped-entities
383:23  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `'`, `&rsquo;`.  react/no-unescaped-entities
466:81  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `'`, `&rsquo;`.  react/no-unescaped-entities
470:79  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `'`, `&rsquo;`.  react/no-unescaped-entities
593:50  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `'`, `&rsquo;`.  react/no-unescaped-entities
613:50  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `'`, `&rsquo;`.  react/no-unescaped-entities
662:44  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `'`, `&rsquo;`.  react/no-unescaped-entities
859:75  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `'`, `&rsquo;`.  react/no-unescaped-entities
875:212  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `'`, `&rsquo;`.  react/no-unescaped-entities

./src/app/study-abroad/uk/page.tsx
98:59  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `'`, `&rsquo;`.  react/no-unescaped-entities
104:61  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `'`, `&rsquo;`.  react/no-unescaped-entities
104:81  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `'`, `&rsquo;`.  react/no-unescaped-entities
158:78  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `'`, `&rsquo;`.  react/no-unescaped-entities
165:76  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `'`, `&rsquo;`.  react/no-unescaped-entities
212:22  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `'`, `&rsquo;`.  react/no-unescaped-entities
230:67  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `'`, `&rsquo;`.  react/no-unescaped-entities
257:68  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `'`, `&rsquo;`.  react/no-unescaped-entities
266:70  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `'`, `&rsquo;`.  react/no-unescaped-entities
297:76  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `'`, `&rsquo;`.  react/no-unescaped-entities
339:74  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `'`, `&rsquo;`.  react/no-unescaped-entities
347:60  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `'`, `&rsquo;`.  react/no-unescaped-entities
574:72  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `'`, `&rsquo;`.  react/no-unescaped-entities
576:50  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `'`, `&rsquo;`.  react/no-unescaped-entities
586:50  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `'`, `&rsquo;`.  react/no-unescaped-entities
683:49  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `'`, `&rsquo;`.  react/no-unescaped-entities
683:58  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `'`, `&rsquo;`.  react/no-unescaped-entities
943:138  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `'`, `&rsquo;`.  react/no-unescaped-entities
943:155  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `'`, `&rsquo;`.  react/no-unescaped-entities
963:88  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `'`, `&rsquo;`.  react/no-unescaped-entities

./src/app/study-abroad/usa/page.tsx
89:54  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `'`, `&rsquo;`.  react/no-unescaped-entities
115:87  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `'`, `&rsquo;`.  react/no-unescaped-entities
152:123  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `'`, `&rsquo;`.  react/no-unescaped-entities
157:78  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `'`, `&rsquo;`.  react/no-unescaped-entities
164:76  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `'`, `&rsquo;`.  react/no-unescaped-entities
298:76  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `'`, `&rsquo;`.  react/no-unescaped-entities
340:74  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `'`, `&rsquo;`.  react/no-unescaped-entities
348:60  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `'`, `&rsquo;`.  react/no-unescaped-entities
401:80  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `'`, `&rsquo;`.  react/no-unescaped-entities
405:81  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `'`, `&rsquo;`.  react/no-unescaped-entities
409:78  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `'`, `&rsquo;`.  react/no-unescaped-entities
413:79  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `'`, `&rsquo;`.  react/no-unescaped-entities
915:109  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `'`, `&rsquo;`.  react/no-unescaped-entities
915:143  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `'`, `&rsquo;`.  react/no-unescaped-entities
930:179  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `'`, `&rsquo;`.  react/no-unescaped-entities
935:188  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `'`, `&rsquo;`.  react/no-unescaped-entities
955:87  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `'`, `&rsquo;`.  react/no-unescaped-entities

./src/app/testimonials/page.tsx
20:10  Warning: 'loading' is assigned a value but never used.  @typescript-eslint/no-unused-vars
76:19  Error: `"` can be escaped with `&quot;`, `&ldquo;`, `"`, `&rdquo;`.  react/no-unescaped-entities
76:62  Error: `"` can be escaped with `&quot;`, `&ldquo;`, `"`, `&rdquo;`.  react/no-unescaped-entities

./src/components/Footer.tsx
10:13  Warning: Using `<img>` could result in slower LCP and higher bandwidth. Consider using `<Image />` from `next/image` or a custom image loader to automatically optimize images. This may incur additional usage or cost from your provider. See: [https://nextjs.org/docs/messages/no-img-element](https://nextjs.org/docs/messages/no-img-element)  @next/next/no-img-element
41:17  Warning: Using `<img>` could result in slower LCP and higher bandwidth. Consider using `<Image />` from `next/image` or a custom image loader to automatically optimize images. This may incur additional usage or cost from your provider. See: [https://nextjs.org/docs/messages/no-img-element](https://nextjs.org/docs/messages/no-img-element)  @next/next/no-img-element
44:17  Warning: Using `<img>` could result in slower LCP and higher bandwidth. Consider using `<Image />` from `next/image` or a custom image loader to automatically optimize images. This may incur additional usage or cost from your provider. See: [https://nextjs.org/docs/messages/no-img-element](https://nextjs.org/docs/messages/no-img-element)  @next/next/no-img-element
47:17  Warning: Using `<img>` could result in slower LCP and higher bandwidth. Consider using `<Image />` from `next/image` or a custom image loader to automatically optimize images. This may incur additional usage or cost from your provider. See: [https://nextjs.org/docs/messages/no-img-element](https://nextjs.org/docs/messages/no-img-element)  @next/next/no-img-element
50:17  Warning: Using `<img>` could result in slower LCP and higher bandwidth. Consider using `<Image />` from `next/image` or a custom image loader to automatically optimize images. This may incur additional usage or cost from your provider. See: [https://nextjs.org/docs/messages/no-img-element](https://nextjs.org/docs/messages/no-img-element)  @next/next/no-img-element

./src/components/WhatsAppChat.tsx
66:13  Warning: 'webWhatsAppUrl' is assigned a value but never used.  @typescript-eslint/no-unused-vars
130:38  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `'`, `&rsquo;`.  react/no-unescaped-entities

./src/components/WhatsAppInstructions.tsx
9:26  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `'`, `&rsquo;`.  react/no-unescaped-entities
9:60  Error: `"` can be escaped with `&quot;`, `&ldquo;`, `"`, `&rdquo;`.  react/no-unescaped-entities
9:87  Error: `"` can be escaped with `&quot;`, `&ldquo;`, `"`, `&rdquo;`.  react/no-unescaped-entities

info  - Need to disable some ESLint rules? Learn more here: [https://nextjs.org/docs/app/api-reference/config/eslint\#disabling-rules](https://nextjs.org/docs/app/api-reference/config/eslint#disabling-rules)
PS C:\Users\User\IAEC2\IAEC\IAEC_Recovery>

Now I'll create the comprehensive roadmap to fix all these build errors systematically:

# IAEC Build Error Fix Roadmap

## **Critical Issue Analysis**

Based on my thorough analysis of your IAEC repository and build errors, I've identified the following key issues that need to be resolved:

1. **Missing Image Import**: Services page has undefined `Image` component
2. **Escaped Character Errors**: Multiple files with unescaped quotes and apostrophes
3. **Image Optimization Warnings**: Using `<img>` instead of Next.js `Image` component
4. **Unused Variables**: Several TypeScript/ESLint warnings for unused variables

## **Step-by-Step Fix Implementation**

### **Phase 1: Critical Errors (Must Fix First)**

#### **1.1 Fix Missing Image Import in Services Page**

**File**: `src/app/services/page.tsx`

**Problem**: Line 13 has `<Image>` component used without importing it

**Fix**:

```typescript
// Add this import at the top of the file (line 1)
import Image from 'next/image';

export const metadata = {
  title: "Overseas Education Services - University Selection, Visa Assistance | IAEC Consultants",
  description: "Complete overseas education services: university selection, visa assistance, test preparation, scholarship guidance. 95% visa success rate. Expert counselors for USA, UK, Australia, Canada.",
  keywords: "overseas education services, university selection guidance, student visa assistance, scholarship counseling, test preparation IELTS TOEFL, study abroad consulting"
};

// Rest of the file remains the same...
```


### **Phase 2: Escaped Character Fixes**

#### **2.1 Fix Canada Study Page**

**File**: `src/app/study-abroad/canada/page.tsx`

**Problems**: Multiple unescaped apostrophes throughout the file

**Fixes**: Replace all unescaped apostrophes with proper HTML entities:

```typescript
// Replace these specific lines:

// Line 111: 
// OLD: World's Best Quality of Life
// NEW: World&apos;s Best Quality of Life

// Line 348:
// OLD: Bachelor's
// NEW: Bachelor&apos;s

// Line 401:
// OLD: Master's
// NEW: Master&apos;s

// Line 405: 
// OLD: Canada's highest-ranked institution
// NEW: Canada&apos;s highest-ranked institution

// Line 575:
// OLD: Harvard of Canada
// NEW: Harvard of Canada (no change needed here)

// Line 583:
// OLD: Beautiful Vancouver campus
// NEW: Beautiful Vancouver campus (no change needed here)
```

**Complete Fix for src/app/study-abroad/canada/page.tsx**:

Replace the problematic sections:

```typescript
// Around line 111 - Fix the quality of life section
<h3 className="text-xl font-bold mb-3 text-gray-900">World&apos;s Best Quality of Life</h3>

// Around line 348 - Fix bachelor's degree section  
<h3 className="text-xl font-bold mb-3 text-gray-900">Bachelor&apos;s</h3>
<div className="text-[#08bcb4] font-semibold text-lg mb-2">4 Years</div>
<p className="text-gray-600 text-sm">90-120 credit hours. Comprehensive undergraduate education with co-op options.</p>

// Around line 401 - Fix master's degree section
<h3 className="text-xl font-bold mb-3 text-gray-900">Master&apos;s</h3>

// Around line 405 - Fix university descriptions
<div className="font-semibold">University of Toronto</div>
<div className="text-sm text-gray-600">Canada&apos;s highest-ranked institution</div>

// Around line 575 - Fix other university descriptions
<div className="font-semibold">McGill University</div>  
<div className="text-sm text-gray-600">Harvard of Canada with bilingual environment</div>

// Around line 583 - Fix Vancouver campus description
<div className="font-semibold">University of British Columbia</div>
<div className="text-sm text-gray-600">Beautiful Vancouver campus with ocean views</div>
```


#### **2.2 Fix European Study Pages**

**Files**:

- `src/app/study-abroad/europe/france/page.tsx`
- `src/app/study-abroad/europe/italy/page.tsx`
- `src/app/study-abroad/europe/latvia/page.tsx`
- `src/app/study-abroad/europe/spain/page.tsx`
- `src/app/study-abroad/uk/page.tsx`
- `src/app/study-abroad/usa/page.tsx`

**Fix Strategy**: Use find and replace to fix all apostrophes:

```bash
# Run these find and replace commands in each file:
# Replace all instances of ' in content with &apos;

# Common patterns to fix:
# don't -> don&apos;t
# can't -> can&apos;t  
# world's -> world&apos;s
# student's -> student&apos;s
# university's -> university&apos;s
# it's -> it&apos;s
# that's -> that&apos;s
```


#### **2.3 Fix Testimonials Page**

**File**: `src/app/testimonials/page.tsx`

**Problem**: Lines 76 with unescaped quotes

**Fix**:

```typescript
// Around line 76, change:
<p className="text-[#4a5568] italic">
  &quot;{testimonial.content || testimonial.quote}&quot;
</p>
```


#### **2.4 Fix WhatsApp Components**

**File**: `src/components/WhatsAppChat.tsx`

**Problem**: Line 130 with unescaped apostrophe

**Fix**:

```typescript
// Find the line with the apostrophe and replace with:
// OLD: can't
// NEW: can&apos;t
```

**File**: `src/components/WhatsAppInstructions.tsx`

**Problem**: Lines 9 with unescaped quotes and apostrophes

**Fix**:

```typescript
<li>• <strong>Can&apos;t see message?</strong> Look for &quot;iaec consultants Ahmedabad&quot; in your chats</li>
```


### **Phase 3: Image Optimization Warnings**

#### **3.1 Fix Footer Component**

**File**: `src/components/Footer.tsx`

**Problem**: Multiple `<img>` tags that should use Next.js `Image` component

**Fix**:

```typescript
import Link from 'next/link';
import Image from 'next/image'; // Add this import
import contactInfo from '../../data/contact-info.json';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            {/* Replace img with Image */}
            <Image 
              src="/images/footer-logo.png" 
              alt="IAEC Consultants" 
              width={150} 
              height={50} 
              className="mb-4" 
            />
            <p className="text-white mb-4">
              {contactInfo.company.tagline} - Leading overseas education consultancy since {contactInfo.company.established}.
            </p>
            <div className="space-y-2 text-sm">
              <p>📞 {contactInfo.primary.mobile}</p>
              <p>📠 {contactInfo.primary.landline}</p>  
              <p>✉️ {contactInfo.primary.email}</p>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 !text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-white hover:text-gray-300">About Us</Link></li>
              <li><Link href="/services" className="text-white hover:text-gray-300">Services</Link></li>
              <li><Link href="/study-abroad" className="text-white hover:text-gray-300">Study Abroad</Link></li>
              <li><Link href="/blog" className="text-white hover:text-gray-300">Blog</Link></li>
              <li><Link href="/terms-conditions" className="text-white hover:text-gray-300">Terms & Conditions</Link></li>
              <li><Link href="/privacy-policy" className="text-white hover:text-gray-300">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 !text-white">{contactInfo.branches.headOffice.name} - {contactInfo.branches.headOffice.city}</h4>
            <div className="text-white text-sm whitespace-pre-line">
              <p>{contactInfo.branches.headOffice.address}</p>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 !text-white">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/iaecconsultantspvtltd" target="_blank" rel="noopener noreferrer">
                <Image src="/images/links/facebook.jpeg" alt="Facebook" width={24} height={24} />
              </a>
              <a href="https://www.instagram.com/iaecconsultantspvtltd" target="_blank" rel="noopener noreferrer">
                <Image src="/images/links/instagram.jpeg" alt="Instagram" width={24} height={24} />
              </a>
              <a href="https://www.linkedin.com/company/iaecconsultantspvtltd/" target="_blank" rel="noopener noreferrer">
                <Image src="/images/links/linkedin.jpeg" alt="LinkedIn" width={24} height={24} />
              </a>
              <a href="mailto:ravinder@iaecconsultants.com">
                <Image src="/images/links/email.jpeg" alt="Email" width={24} height={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="text-center text-white pt-8 mt-8 border-t border-gray-700">
          <p>&copy; {new Date().getFullYear()} {contactInfo.company.name}. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
```


#### **3.2 Fix About Page**

**File**: `src/app/about/page.tsx`

**Problem**: Line 98 using `<img>` instead of `Image` component

**Fix**: Add Image import and replace img tag:

```typescript
import Image from 'next/image'; // Add at top

// Replace the img tag around line 98 with:
<Image
  src="/images/about-image.jpg"
  alt="About IAEC Consultants"
  width={600}
  height={400}
  className="rounded-lg"
/>
```


#### **3.3 Fix Home Page**

**File**: `src/app/page.tsx`

**Problem**: Line 118 using `<img>` tag

**Fix**: Add Image import and replace:

```typescript
import Image from 'next/image'; // Add at top

// Replace img tag around line 118 with:
<Image
  src="/images/home-hero.jpg"
  alt="Study Abroad with IAEC"
  width={800}
  height={500}
  className="rounded-lg"
  priority
/>
```


### **Phase 4: Clean Up Unused Variables**

#### **4.1 Fix Admin WhatsApp Page**

**File**: `src/app/admin/whatsapp/page.tsx`

**Problem**: Line 18 - `session` variable unused

**Fix**:

```typescript
// Line 18: Remove the session variable or use it
const { status } = useSession(); // Remove data: session part
```


#### **4.2 Fix Admin Login Page**

**File**: `src/app/admin-login/page.tsx`

**Problem**: Line 42 - `error` variable unused

**Fix**: Either use the error variable or remove it:

```typescript
// If error handling is needed:
} catch (error) {
  console.error('Login error:', error);
}

// Or if not needed, use underscore:
} catch (_error) {
  // Handle error silently
}
```


#### **4.3 Fix API Route Files**

**Files**:

- `src/app/api/admin/blogs/count/route.ts`
- `src/app/api/admin/testimonials/count/route.ts`

**Problem**: Line 27 - `error` variable unused in catch blocks

**Fix**:

```typescript
} catch (error) {
  console.error('Error reading data:', error); // Use the error
  return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
}
```


#### **4.4 Fix Testimonials Page**

**File**: `src/app/testimonials/page.tsx`

**Problem**: Line 20 - `loading` variable unused

**Fix**: Either use loading state or remove:

```typescript
// Option 1: Use the loading state
if (loading) {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#08bcb4] mx-auto"></div>
        <p className="mt-4 text-gray-600">Loading testimonials...</p>
      </div>
    </div>
  );
}

// Option 2: Remove loading state completely if not needed
const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
// Remove: const [loading, setLoading] = useState(true);
```


#### **4.5 Fix WhatsApp Chat Component**

**File**: `src/components/WhatsAppChat.tsx`

**Problem**: Line 66 - `webWhatsAppUrl` variable unused

**Fix**: Either use the variable or remove it:

```typescript
// Remove the unused variable line:
// const webWhatsAppUrl = `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
```


## **Phase 5: Automated Fix Script**

Create a script to automate the quote/apostrophe fixes:

**File**: `fix-quotes.js` (create in root directory)

```javascript
const fs = require('fs');
const path = require('path');

const filesToFix = [
  'src/app/study-abroad/canada/page.tsx',
  'src/app/study-abroad/europe/france/page.tsx',
  'src/app/study-abroad/europe/italy/page.tsx',
  'src/app/study-abroad/europe/latvia/page.tsx',
  'src/app/study-abroad/europe/spain/page.tsx',
  'src/app/study-abroad/uk/page.tsx',
  'src/app/study-abroad/usa/page.tsx',
  'src/components/WhatsAppChat.tsx',
  'src/components/WhatsAppInstructions.tsx'
];

const replacements = [
  { from: /don't/g, to: "don&apos;t" },
  { from: /can't/g, to: "can&apos;t" },
  { from: /won't/g, to: "won&apos;t" },
  { from: /isn't/g, to: "isn&apos;t" },
  { from: /world's/g, to: "world&apos;s" },
  { from: /student's/g, to: "student&apos;s" },
  { from: /university's/g, to: "university&apos;s" },
  { from: /it's/g, to: "it&apos;s" },
  { from: /that's/g, to: "that&apos;s" },
  { from: /what's/g, to: "what&apos;s" },
  { from: /there's/g, to: "there&apos;s" },
  { from: /here's/g, to: "here&apos;s" },
  { from: /you're/g, to: "you&apos;re" },
  { from: /we're/g, to: "we&apos;re" },
  { from: /they're/g, to: "they&apos;re" },
  { from: /"([^"]*?)"/g, to: "&quot;$1&quot;" } // Fix quotes
];

filesToFix.forEach(filePath => {
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    replacements.forEach(replacement => {
      content = content.replace(replacement.from, replacement.to);
    });
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed quotes in: ${filePath}`);
  } else {
    console.log(`File not found: ${filePath}`);
  }
});

console.log('Quote fixing completed!');
```


## **Execution Order**

1. **Run the script**: `node fix-quotes.js`
2. **Manually fix critical errors** (Image imports)
3. **Fix image optimization warnings**
4. **Clean up unused variables**
5. **Test build**: `npm run build`

## **Testing Strategy**

After each phase:

```bash
# Test build
npm run build

# Test specific linting
npm run lint

# Test dev server
npm run dev
```


## **Final Verification Checklist**

- [ ] All build errors resolved
- [ ] All ESLint warnings addressed
- [ ] Images optimized with Next.js Image component
- [ ] All quotes and apostrophes properly escaped
- [ ] No unused variables
- [ ] Build passes successfully
- [ ] Application runs without errors

This comprehensive roadmap will systematically resolve all 80+ build errors and warnings in your IAEC project, ensuring a clean, optimized, and production-ready application.
<span style="display:none">[^1]</span>

<div style="text-align: center">⁂</div>

[^1]: https://github.com/KartavyaDikshit/IAEC

