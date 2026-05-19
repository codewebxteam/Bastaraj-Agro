import React from 'react';
import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';

export const metadata: Metadata = {
  title: 'Bastarraj Agro | Premium Commercial & Medicinal Plantation',
  description: 'Empowering farmers to transition from traditional agriculture to high-yield commercial and medicinal plantations.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-white text-gray-900 min-h-screen flex flex-col justify-between">
        
        {/* Global shared header navigation */}
        <Header />
        
        {/* Main application viewport wrapper */}
        <main className="flex-grow w-full">
          {children}
        </main>
        
        {/* Global shared footer architecture */}
        <Footer />
        
      </body>
    </html>
  );
}