"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { FiImage, FiGrid, FiCamera, FiCheckCircle } from 'react-icons/fi';

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
      
      {/* Background Micro Grid Layer */}
      <div className="absolute inset-0 z-0 opacity-[0.02]" style={{ backgroundImage: 'linear-gradient(to right, #00a63e 1px, transparent 1px), linear-gradient(to bottom, #00a63e 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

      {/* STAGE 1: CLEAN HEADER */}
      <section className="relative w-full pt-12 pb-10 px-4 sm:px-6 lg:px-8 z-10 max-w-7xl mx-auto mt-6 text-center">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00a63e]/10 border border-[#00a63e]/20 text-[#00a63e] text-xs font-bold tracking-widest uppercase shadow-sm">
            <FiImage className="animate-pulse" /> Media Hub
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-gray-900 tracking-tight leading-none">
            Our Plantation <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00a63e] to-[#4ade80]">Gallery</span>
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
              className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider border transition-all duration-300 whitespace-nowrap ${
                activeFilter === cat
                  ? 'bg-[#00a63e] text-white border-[#00a63e] shadow-[0_4px_12px_rgba(0,166,62,0.25)]'
                  : 'bg-white text-gray-600 border-gray-200 hover:border-[#00a63e]/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* STAGE 3: FLUID MEDIA SNAP GRID MASONRY */}
      <section className="w-full px-4 sm:px-6 lg:px-8 z-10 relative max-w-7xl mx-auto">
        {/* If no items found fallback check */}
        {filteredItems.length === 0 ? (
          <div className="w-full text-center py-20 bg-white border border-gray-100 rounded-[2rem]">
            <p className="text-gray-400 text-sm font-bold">No media records found for this block.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div 
                key={item.id}
                className="group relative h-64 sm:h-72 rounded-[2rem] overflow-hidden border border-gray-200/60 shadow-sm bg-white transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-15px_rgba(0,166,62,0.15)]"
              >
                {/* Real High-Quality Responsive Image Asset Container */}
                <Image 
                  src={item.image} 
                  alt={item.title} 
                  fill 
                  quality={90}
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  unoptimized={true}
                />
                
                {/* Gradient Shadow Overlay Mask for clear title contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent opacity-80 z-10"></div>
                
                {/* Floating Meta Labels on top right edge */}
                <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-md border border-white/40 px-2.5 py-1 rounded-lg text-[9px] font-black text-gray-800 tracking-wider uppercase shadow-sm flex items-center gap-1 z-20">
                  <FiCamera className="text-[#00a63e]" /> {item.category}
                </div>

                {/* Bottom Core Description Details */}
                <div className="absolute bottom-5 left-5 right-5 z-20 flex items-center justify-between">
                  <div className="flex flex-col pr-4">
                    <span className="text-[10px] font-bold tracking-widest text-[#4ade80] uppercase">Bastarraj Field Log</span>
                    <h3 className="text-base sm:text-lg font-black text-white tracking-tight mt-0.5 leading-tight group-hover:text-[#4ade80] transition-colors duration-300">
                      {item.title}
                    </h3>
                  </div>
                  <div className="w-8 h-8 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center shrink-0 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <FiCheckCircle className="text-sm" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* STAGE 4: IMMERSIVE CRYSTAL FOLIAGE BASE CANVAS (img2.webp) */}
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