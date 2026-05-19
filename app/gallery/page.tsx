"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { FiImage, FiCamera, FiCheckCircle } from 'react-icons/fi';

const GalleryPage = () => {
  // Simple category filtering state
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Timber Trees', 'Medicinal Plants', 'Field Work'];

  // Media gallery items mapped to your exact verified local paths and assets
  const galleryItems = [
    { id: 1, title: 'Premium Mahogany Field', category: 'Timber Trees', image: '/plants/mahogni.webp' },
    { id: 2, title: 'Healthy Malabar Neem Saplings', category: 'Timber Trees', image: '/plants/neem.webp' },
    { id: 3, title: 'Ashwagandha Cultivation', category: 'Medicinal Plants', image: '/plants/aswgandha.webp' },
    { id: 4, title: 'Organic Black Turmeric Plot', category: 'Medicinal Plants', image: '/plants/turmaric.webp' },
    { id: 5, title: 'Precision Site Maintenance', category: 'Field Work', image: '/img1.webp' },
    { id: 6, title: 'Foliage Development Track', category: 'Field Work', image: '/img2.webp' },
  ];

  // Logic to filter items on the fly
  const filteredItems = activeFilter === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <main className="w-full min-h-screen bg-[#FAFAFA] text-gray-950 antialiased overflow-hidden pb-32">
      
      {/* Background Micro Grid Layer (Gray layout dots for clear look) */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

      {/* STAGE 1: CLEAN HEADER */}
      <section className="relative w-full pt-12 pb-10 px-4 sm:px-6 lg:px-8 z-10 max-w-7xl mx-auto mt-6 text-center">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#41A61D]/10 border border-[#41A61D]/20 text-[#41A61D] text-xs font-bold tracking-widest uppercase shadow-sm">
            <FiImage className="animate-pulse" /> Media Hub
          </div>
          {/* FIXED: Removed Text Gradient, swapped to solid brand green #41A61D */}
          <h1 className="text-3xl sm:text-5xl font-black text-gray-900 tracking-tight leading-none">
            Our Plantation <span className="text-[#41A61D]">Gallery</span>
          </h1>
          <p className="text-sm sm:text-base text-gray-500 font-medium max-w-xl mx-auto leading-relaxed">
            Real pictures from our live sites, tree growth cycles, and certified agro-forestry project locations.
          </p>
        </div>
      </section>

      {/* STAGE 2: ULTRA-COMPACT TAB FILTER BAR (Mobile Friendly horizontal swipe track) */}
      <section className="w-full pb-8 px-4 sm:px-6 lg:px-8 z-20 relative max-w-3xl mx-auto">
        <div className="flex overflow-x-auto gap-2 pb-2 justify-start sm:justify-center [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider border active:scale-95 transition-all whitespace-nowrap ${
                activeFilter === cat
                  ? 'bg-[#41A61D] text-white border-[#41A61D] shadow-md'
                  : 'bg-white text-gray-600 border-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* STAGE 3: FLUID MEDIA SNAP GRID MASONRY */}
      <section className="w-full px-4 sm:px-6 lg:px-8 z-10 relative max-w-7xl mx-auto">
        {filteredItems.length === 0 ? (
          <div className="w-full text-center py-20 bg-white border border-gray-100 rounded-[2rem]">
            <p className="text-gray-400 text-sm font-bold">No media records found for this block.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div 
                key={item.id}
                className="relative h-64 sm:h-72 rounded-[2rem] overflow-hidden border border-gray-200 shadow-md bg-white"
              >
                {/* Real High-Quality Responsive Image Asset Container - Removed group-hover scaling */}
                <Image 
                  src={item.image} 
                  alt={item.title} 
                  fill 
                  quality={90}
                  className="object-cover"
                  unoptimized={true}
                />
                
                {/* Gradient Shadow Overlay Mask for clear title contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-90 z-10"></div>
                
                {/* Floating Meta Labels on top right edge - Icon color uses Primary #41A61D */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md border border-gray-100 px-2.5 py-1 rounded-lg text-[9px] font-black text-gray-800 tracking-wider uppercase shadow-sm flex items-center gap-1 z-20">
                  <FiCamera className="text-[#41A61D]" /> {item.category}
                </div>

                {/* Bottom Core Description Details */}
                <div className="absolute bottom-5 left-5 right-5 z-20 flex items-center justify-between">
                  <div className="flex flex-col pr-4">
                    {/* Highlighted context tag with Secondary Orange #E36911 */}
                    <span className="text-[10px] font-bold tracking-widest text-[#E36911] uppercase">Bastarraj Field Log</span>
                    <h3 className="text-base sm:text-lg font-black text-white tracking-tight mt-0.5 leading-tight">
                      {item.title}
                    </h3>
                  </div>
                  {/* Kept indicator fully visible permanently for perfect touch tracking display profiles */}
                  <div className="w-8 h-8 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center shrink-0">
                    <FiCheckCircle className="text-sm text-[#41A61D]" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* STAGE 4: IMMERSIVE CRYSTAL FOLIAGE BASE CANVAS */}
      <div className="absolute bottom-0 left-0 w-full h-[250px] md:h-[350px] z-0 pointer-events-none opacity-[0.25] image-render-crisp">
        <Image 
          src="/img2.webp" 
          alt="Natural Base Foliage" 
          fill 
          quality={100}
          className="object-cover object-bottom scale-100 filter-none" 
          unoptimized={true} 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAFAFA] via-transparent to-transparent opacity-80"></div>
      </div>

    </main>
  );
};

export default GalleryPage;