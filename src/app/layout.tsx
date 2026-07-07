import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SessionProviderWrapper from '@/components/SessionProviderWrapper';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppConditionalRenderer from '@/components/WhatsAppConditionalRenderer';
import Script from 'next/script';

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  preload: true
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  metadataBase: new URL('https://www.iaecconsultants.in'),
  title: {
    default: "IAEC Consultants - Your Global Study Partner",
    template: "%s | IAEC Consultants"
  },
  description: "Leading overseas education consultancy since 2000. Expert guidance for study abroad programs in USA, UK, Australia, Canada with 95% visa success rate.",
  keywords: [
    "study abroad",
    "overseas education",
    "student visa",
    "IAEC",
    "education consultancy",
    "USA study",
    "UK study",
    "Australia study",
    "Canada study",
    "IELTS coaching"
  ],
  authors: [{ name: "IAEC Consultants" }],
  creator: "IAEC Consultants",
  publisher: "IAEC Consultants",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'IAEC Consultants',
    title: 'IAEC Consultants - Your Global Study Partner',
    description: 'Leading overseas education consultancy since 2000. Expert guidance for study abroad programs with 95% visa success rate.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'IAEC Consultants - Study Abroad Experts',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IAEC Consultants - Your Global Study Partner',
    description: 'Leading overseas education consultancy since 2000. Expert guidance for study abroad programs.',
    images: ['/images/twitter-image.jpg'],
  },
  category: 'education',
};

import contactInfo from '../../data/contact-info.json';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: contactInfo.company.name,
  description: 'Leading overseas education consultancy since 2000. Expert guidance for study abroad programs.',
  url: 'https://www.iaecconsultants.in',
  logo: 'https://www.iaecconsultants.in/images/iaec-logo.png',
  foundingDate: contactInfo.company.established,
  address: {
    '@type': 'PostalAddress',
    streetAddress: contactInfo.branches.headOffice.address,
    addressLocality: contactInfo.branches.headOffice.city,
    addressRegion: contactInfo.branches.headOffice.state,
    postalCode: '500029',
    addressCountry: 'IN'
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: contactInfo.primary.mobile,
    contactType: 'customer service',
    availableLanguage: ['English', 'Hindi', 'Telugu']
  },
  service: {
    '@type': 'Service',
    name: 'Study Abroad Consultancy',
    description: 'Complete guidance for overseas education including university selection, application process, visa assistance, and pre-departure support.',
    provider: {
      '@type': 'EducationalOrganization',
      name: contactInfo.company.name
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="icon" href="/images/tab_logo.png" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#08bcb4" />
      </head>
      <body className={inter.className}>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WNGPGW6T');
          `}
        </Script>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WNGPGW6T"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        <SessionProviderWrapper>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
          <WhatsAppConditionalRenderer />
        </SessionProviderWrapper>
      </body>
    </html>
  );
}
