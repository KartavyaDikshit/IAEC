import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SessionProviderWrapper from '@/components/SessionProviderWrapper';
import WhatsAppChat from '@/components/WhatsAppChat';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://iaecconsultants.com"),
  title: "IAEC Consultants - Your Global Study Partner",
  description: "Leading overseas education consultants since 2000. Expert guidance for studying in USA, UK, Australia, Canada, Germany & more. 30,000+ success stories.",
  keywords: "study abroad, overseas education, university admission, visa assistance, IELTS coaching, study in USA, study in UK, study in Australia",
  authors: [{ name: "IAEC Consultants" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProviderWrapper>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
          <WhatsAppChat />
        </SessionProviderWrapper>
      </body>
    </html>
  );
}