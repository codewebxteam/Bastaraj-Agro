import React from 'react';
import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import HeroSection from '@/components/home/HeroSection';

const KeyStats = dynamic(() => import('@/components/home/KeyStats'));
const ProcessTimeline = dynamic(() => import('@/components/home/ProcessTimeline'));
const ProductInventory = dynamic(() => import('@/components/home/ProductInventory'));
const Testimonials = dynamic(() => import('@/components/home/Testimonials'));
const OrderForm = dynamic(() => import('@/components/home/OrderForm'));
const ProfitCalculator = dynamic(() => import('@/components/home/ProfitCalculator'));

export const metadata: Metadata = {
  title: 'Home | Swarnim Agro | Premium Commercial & Medicinal Plantation',
  description: 'Empowering farmers & investors with high-yield Mahogany, Malabar Neem, Ashwagandha, and Black Turmeric plantations in Chhattisgarh. Transition from traditional agriculture to profitable business.',
  alternates: {
    canonical: '/',
  },
};

export default function Home() {
  return (
    // SEAMLESS UPDATE: Changed bg-white to bg-[#0a0f0d] (deep dark theme)
    // This acts as the continuous dark canvas for all our premium sections.
    <main className="flex min-h-screen flex-col items-center justify-start bg-[#0D1713] w-full overflow-x-hidden">
      
      {/* 1. Hero Section: Full-screen visual overlay */}
      {/* Removed any wrapper spacing to let the hero completely cover the top */}
      <section id="hero" className="w-full">
        <HeroSection />
      </section>

      {/* 2. Key Statistics: Counters highlighting business scale */}
      {/* CULPRIT FIXED: Removed py-12 and bg-gray-50. Now it will directly connect to Hero. */}
      {/* Note: Changed to div since KeyStats internally returns a <section> now, avoiding nested sections */}
      <div id="stats" className="w-full">
        <KeyStats />
      </div>

      {/* 3. Process Timeline: Visual breakdown of the agricultural workflow */}
      {/* Removed bg-gray-50 */}
      <section id="process" className="w-full">
        <ProcessTimeline />
      </section>

      {/* 4. Product Inventory: Catalog grid with direct WhatsApp order */}
      {/* Removed bg-white */}
      <section id="inventory" className="w-full">
        <ProductInventory />
      </section>

      {/* 5. Testimonials Section: User reviews and social proof build */}
      <section id="testimonials" className="w-full">
        <Testimonials />
      </section>

      {/* 6. Order Form: Dynamic Lead capture mechanism */}
      <section id="order-form" className="w-full">
        <OrderForm />
      </section>

      {/* 7. Interactive Profit Calculator: Shifting to the very bottom to lock deals */}
      {/* Removed bg-white and wrapper padding. The component itself will handle the dark theme UI. */}
      <section id="calculator" className="w-full pb-20">
        <ProfitCalculator />
      </section>

    </main>
  );
}