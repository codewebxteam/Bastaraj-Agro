"use client";

import React from 'react';
import Image from 'next/image';
import { FaWhatsapp } from 'react-icons/fa';
import { FiShoppingBag, FiLayers } from 'react-icons/fi';

const ProductInventory = () => {
  // Inventory catalog data structure using your exact local .webp assets
  const products = [
    { 
      id: 1, 
      name: 'Mahogany (महोगनी)', 
      category: 'Commercial Timber', 
      image: '/plants/mahogni.webp' 
    },
    { 
      id: 2, 
      name: 'Malabar Neem (मालाबार नीम)', 
      category: 'Commercial Timber', 
      image: '/plants/neem.webp' 
    },
    { 
      id: 3, 
      name: 'Ashwagandha (अश्वगंधा)', 
      category: 'Medicinal Plant', 
      image: '/plants/aswgandha.webp' 
    },
    { 
      id: 4, 
      name: 'Black Turmeric (काली हल्दी)', 
      category: 'Medicinal Plant', 
      image: '/plants/turmaric.webp' 
    },
  ];

  // Professional real-time conversion text string builder
  const getWhatsAppLink = (productName: string, category: string) => {
    const phoneNumber = "917999618106"; // Updated to primary desk contact
    
    const rawMessage = `🌱 *Bastarraj Agro - New Plant Inquiry*\n` +
                       `--------------------------------------\n` +
                       `• *Plant Species:* ${productName}\n` +
                       `• *Category:* ${category}\n` +
                       `• *Status:* Looking for Certified Saplings\n\n` +
                       `*Hi, I am looking to plant this on my farm. Please guide me on booking process, pricing, and logistical support details.*`;
                       
    const message = encodeURIComponent(rawMessage);
    return `https://wa.me/${phoneNumber}?text=${message}`;
  };

  return (
    // Unified premium canvas layout running crisp responsive boundaries (Light Theme FAFAFA)
    <section id="inventory" className="w-full bg-[#FAFAFA] pt-14 pb-20 relative overflow-hidden m-0 border-none">
      
      {/* Background Micro Tech Grid Effect - Fixed to solid gray dots for crispness */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          {/* Using custom Primary Green #41A61D */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#41A61D]/10 border border-[#41A61D]/20 text-[#41A61D] text-xs font-bold tracking-widest uppercase mb-3 shadow-sm">
            <FiShoppingBag className="animate-pulse" /> Certified Stock
          </div>
          {/* Removed Text Gradient, replaced with solid Secondary Orange for contrast */}
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight">
            Plant Inventory <span className="text-[#E36911]">& Booking</span>
          </h2>
          <p className="mt-3 text-base md:text-lg text-gray-500 font-medium max-w-xl mx-auto">
            Browse our premium certified seeds and saplings. Order directly via automated WhatsApp channels.
          </p>
        </div>

        {/* RESPONSIVE GRID MATRIX: Mobile swipe wrapper / Tablet & Desktop fixed layout */}
        <div className="flex overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 pb-6 md:pb-0 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden px-2 sm:px-0">
          {products.map((product) => (
            
            // ULTRA PREM CARD SPECIFICATION - Hover scale dependency dropped for solid touch flow
            <div 
              key={product.id} 
              className="min-w-[82%] sm:min-w-[46%] md:min-w-0 snap-center bg-white rounded-[2rem] border border-gray-200 shadow-md overflow-hidden flex flex-col justify-between"
            >
              
              {/* Image Viewport Frame */}
              <div className="h-60 w-full relative overflow-hidden bg-gray-50 shrink-0">
                <Image 
                  src={product.image}
                  alt={product.name}
                  fill
                  quality={95} // High quality threshold definition
                  className="object-cover" // Dropped hover scale transition
                  priority={true}
                  unoptimized={true} // Bypasses local development compression drops
                />
                
                {/* Floating Glassmorphism Category Badge - Icon color uses Primary #41A61D */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md border border-gray-100 px-3 py-1 rounded-full text-[10px] font-black text-gray-800 tracking-wider uppercase shadow-sm flex items-center gap-1.5 z-20">
                  <FiLayers className="text-[#41A61D] w-3 h-3" /> {product.category}
                </div>

                {/* Soft bottom vignette gradient for depth scale contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-80 z-10"></div>
              </div>
              
              {/* Details & Interactive CTA Area */}
              <div className="p-6 flex flex-col justify-between flex-grow bg-white">
                <div>
                  <h3 className="text-lg sm:text-xl font-black text-gray-900 tracking-tight mb-6 min-h-[56px] flex items-center">
                    {product.name}
                  </h3>
                </div>
                
                {/* AUTOMATED WHATSAPP REDIRECT TRIGGER - Solid Color, No Gradient, Active Feedback only */}
                <a 
                  href={getWhatsAppLink(product.name, product.category)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2.5 bg-[#41A61D] text-white py-3.5 px-4 rounded-2xl font-bold text-sm shadow-md active:scale-95 transition-transform duration-200"
                >
                  <FaWhatsapp className="text-xl" />
                  <span>Order via WhatsApp</span>
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProductInventory;