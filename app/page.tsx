"use client";

import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import KeyStats from '@/components/home/KeyStats';
import ProcessTimeline from '@/components/home/ProcessTimeline';
import ProductInventory from '@/components/home/ProductInventory';
import Testimonials from '@/components/home/Testimonials';
import OrderForm from '@/components/home/OrderForm';
import ProfitCalculator from '@/components/home/ProfitCalculator';

export default function Home() {
  return (
    // SEAMLESS UPDATE: Changed bg-white to bg-[#0a0f0d] (deep dark theme)
    // This acts as the continuous dark canvas for all our premium sections.
    <main className="flex min-h-screen flex-col items-center justify-start bg-[#0a0f0d] w-full overflow-x-hidden">
      
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