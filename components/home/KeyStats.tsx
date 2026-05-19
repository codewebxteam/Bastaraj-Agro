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
    // Base wrapper with a clean, responsive layout canvas
    <section id="stats" className="w-full bg-[#FAFAFA] pt-12 pb-16 relative overflow-hidden m-0 border-none">
      
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

      {/* Top ambient green glow ring */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-72 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#00a63e]/10 via-transparent to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mt-2">
        
        {/* Section Header */}
        <div className="text-center mb-12 relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00a63e]/10 border border-[#00a63e]/20 text-[#00a63e] text-xs font-bold tracking-widest uppercase mb-4 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#00a63e] animate-pulse"></span>
            Real Impact
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            Our Scale & <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#00a63e] to-[#4ade80]">Impact</span>
          </h2>
          <p className="mt-3 text-base md:text-lg text-gray-500 font-medium tracking-wide max-w-2xl mx-auto">
            Transforming barren lands into profitable green assets.
          </p>
        </div>
        
        {/* Responsive grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            
            // FIXED: ULTRA-PREMIUM BLURRY GLASS CARD SYSTEM
            <div 
              key={stat.id} 
              className="group relative h-[340px] rounded-[2rem] bg-white/30 backdrop-blur-xl border border-white/40 shadow-[0_12px_40px_-15px_rgba(0,0,0,0.05)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_50px_-15px_rgba(0,166,62,0.18)] overflow-hidden"
            >
              
              {/* FIXED IMAGE BLOCK: Shifted layout boundaries to the right viewport side */}
              <div className="absolute top-0 left-1/3 w-2/3 h-full z-0 pointer-events-none opacity-90 transition-transform duration-700 ease-out group-hover:scale-110">
                <Image 
                  src="/img1.webp" 
                  alt={stat.label} 
                  fill 
                  className="object-cover object-right filter drop-shadow-md" // Forces image align to right side edge
                  priority={true}
                  unoptimized={true} 
                />
              </div>

              {/* Enhanced Depth Mask: Smooth shading from solid grey/dark on left to alpha transparency on right */}
              <div className="absolute inset-0 bg-gradient-to-r from-gray-900/60 via-gray-900/30 to-transparent z-10 pointer-events-none"></div>
              
              {/* Core Text & Media content alignment context */}
              {/* Left aligned padding ensures text stays safe away from the right-shifted leaves */}
              <div className="relative z-20 h-full flex flex-col justify-end p-6 md:p-7 select-none">
                
                {/* FIXED: Solid high-contrast white icon container box to ensure absolute visibility */}
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white text-[#00a63e] mb-5 shadow-md border border-white/50 transition-transform duration-500 group-hover:scale-110">
                  <stat.icon className="text-xl font-bold" />
                </div>

                {/* Crystal White Typography Spectrum */}
                <div className="text-4xl font-black text-white mb-1.5 tracking-tighter drop-shadow-sm">
                  {stat.value}
                </div>
                
                <div className="text-base font-extrabold text-white mb-0.5 tracking-tight drop-shadow-sm">
                  {stat.label}
                </div>
                
                <div className="text-xs text-gray-200 font-medium leading-relaxed tracking-wide">
                  {stat.description}
                </div>
              </div>
              
              {/* Dynamic Bottom Hover Accent Fill Strip */}
              <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#00a63e] to-[#4ade80] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-30"></div>
            </div>

          ))}
        </div>

      </div>
    </section>
  );
};

export default KeyStats;