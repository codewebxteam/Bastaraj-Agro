import React from 'react';
import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import Atmosphere from '@/components/shared/Atmosphere';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-plus-jakarta',
});

export const metadata: Metadata = {
  title: {
    default: 'Swarnim Agro | High-Yield Commercial & Medicinal Plantation',
    template: '%s | Swarnim Agro'
  },
  description: 'Empowering farmers & investors to transition to high-yield commercial timber (Mahogany, Malabar Neem) and medicinal plantations (Ashwagandha, Black Turmeric) in Chhattisgarh.',
  keywords: ['Swarnim Agro', 'Mahogany plantation Chhattisgarh', 'Medicinal farming India', 'Commercial timber forestry', 'Ashwagandha contract farming', 'Black Turmeric cultivation', 'Agricultural investment India'],
  authors: [{ name: 'Swarnim Agro PRIVATE LTD.' }],
  creator: 'Swarnim Agro PRIVATE LTD.',
  publisher: 'Swarnim Agro PRIVATE LTD.',
  metadataBase: new URL('https://swarnimagro.in'),
  icons: {
    icon: '/logo.webp',
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Swarnim Agro | Premium Commercial & Medicinal Plantation',
    description: 'Empowering farmers & investors with high-yield commercial and medicinal crop cultivation.',
    url: 'https://swarnimagro.in',
    siteName: 'Swarnim Agro',
    images: [
      {
        url: '/logo.webp',
        width: 800,
        height: 600,
        alt: 'Swarnim Agro Logo',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${plusJakartaSans.variable}`}>
      <body className="antialiased bg-[#0D1713] text-white min-h-screen flex flex-col justify-between font-sans">
        <Atmosphere />
        
        {/* Global shared header navigation */}
        <Header />
        
        {/* Main application viewport wrapper */}
        <main className="relative z-10 flex-grow w-full">
          {children}
        </main>
        
        {/* Global shared footer architecture */}
        <Footer />
        
      </body>
    </html>
  );
}
