"use client";

import React from 'react';
import Image from 'next/image';
import { FiMap, FiPackage, FiUsers, FiTrendingUp } from 'react-icons/fi';

const KeyStats = () => {
  // Array of statistics data for easy maintenance and scalability (100% Intact)
  const stats = [
    { id: 1, value: '500+', label: 'Acres Managed', description: 'Across Chhattisgarh', icon: FiMap },
    { id: 2, value: '1000+', label: 'Plants Delivered', description: 'Certified High-Quality', icon: FiPackage },
    { id: 3, value: '500+', label: 'Business Clients', description: 'Networked Farmers', icon: FiUsers },
    { id: 4, value: '2.5L', label: 'Potential ROI/Year', description: 'Per Acre Average', icon: FiTrendingUp },
  ];

  return (
    // FIXED: Reverted to Light Theme canvas (#FAFAFA)
    <section id="stats" className="w-full bg-[#FAFAFA] pt-12 pb-16 relative overflow-hidden m-0 border-none">
      
      {/* Grid Pattern Background - Black dots for light theme */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

      {/* Top ambient solid glow ring - Using Primary #41A61D */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-72 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#41A61D]/10 via-transparent to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mt-2">
        
        {/* Section Header */}
        <div className="text-center mb-12 relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#41A61D]/10 border border-[#41A61D]/20 text-[#41A61D] text-xs font-bold tracking-widest uppercase mb-4 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#41A61D] animate-pulse"></span>
            Real Impact
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            Our Scale & <span className="text-[#41A61D]">Impact</span>
          </h2>
          <p className="mt-3 text-base md:text-lg text-gray-500 font-medium tracking-wide max-w-2xl mx-auto">
            Transforming barren lands into profitable green assets.
          </p>
        </div>
        
        {/* Responsive grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            
            // LIGHT THEME CARD SYSTEM (Optimized for no-hover mobile consistency)
            <div 
              key={stat.id} 
              className="relative h-[340px] rounded-[2rem] bg-white border border-gray-200 shadow-md overflow-hidden flex flex-col justify-end"
            >
              
              {/* IMAGE BLOCK: Shifted layout boundaries to the right viewport side */}
              <div className="absolute top-0 left-1/3 w-2/3 h-full z-0 pointer-events-none opacity-90">
                <Image 
                  src="/img1.webp" 
                  alt={stat.label} 
                  fill 
                  className="object-cover object-right" 
                  priority={true}
                  unoptimized={true} 
                />
              </div>

              {/* Enhanced Depth Mask: Smooth shading from solid white on left to alpha transparency on right */}
              <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
              
              {/* Core Text & Media content alignment context */}
              <div className="relative z-20 p-6 md:p-7 select-none">
                
                {/* Solid high-contrast icon container box - using primary color */}
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gray-50 border border-gray-100 text-[#41A61D] mb-5 shadow-sm">
                  <stat.icon className="text-xl font-bold" />
                </div>

                {/* Typography Spectrum - Dark text for light theme */}
                <div className="text-4xl font-black text-gray-900 mb-1.5 tracking-tighter">
                  {stat.value}
                </div>
                
                {/* Secondary Orange Label for punchy contrast */}
                <div className="text-base font-extrabold text-[#E36911] mb-0.5 tracking-tight">
                  {stat.label}
                </div>
                
                <div className="text-xs text-gray-500 font-medium leading-relaxed tracking-wide">
                  {stat.description}
                </div>
              </div>
              
              {/* Static Bottom Accent Fill Strip - Solid Primary Green Line */}
              <div className="absolute bottom-0 left-0 w-full h-[4px] bg-[#41A61D] z-30"></div>
            </div>

          ))}
        </div>

      </div>
    </section>
  );
};

export default KeyStats;