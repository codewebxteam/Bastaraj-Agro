"use client";

import React from 'react';
import Image from 'next/image';
import { FiShield, FiTrendingUp, FiCheckCircle, FiCompass, FiTarget } from 'react-icons/fi';

const AboutPage = () => {
  // Configured with exact verified local paths supplied by the architecture profile
  const showcasedPlants = [
    { name: 'Mahogany', path: '/plants/mahogni.webp', type: 'Timber' },
    { name: 'Malabar Neem', path: '/plants/neem.webp', type: 'Softwood' },
    { name: 'Ashwagandha', path: '/plants/aswgandha.webp', type: 'Medicinal' },
    { name: 'Black Turmeric', path: '/plants/turmaric.webp', type: 'Spice' },
  ];

  const team = [
    { name: "Executive Director", role: "Agronomy Ops", initial: "ED" },
    { name: "Co-Founder & Director", role: "Legal Alliances", initial: "CD" },
  ];

  return (
    <main className="w-full min-h-screen bg-[#FAFAFA] text-gray-950 antialiased overflow-hidden pb-20">
      
      {/* BACKGROUND GRAPHICAL MATRIX GRID */}
      <div className="absolute inset-0 z-0 opacity-[0.02]" style={{ backgroundImage: 'linear-gradient(to right, #00a63e 1px, transparent 1px), linear-gradient(to bottom, #00a63e 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

      {/* STAGE 1: DYNAMIC SPLIT GRAPHICAL HERO SECTION */}
      <section className="relative w-full pt-12 pb-16 px-4 sm:px-6 lg:px-8 z-10 max-w-7xl mx-auto mt-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Block (5 Columns) */}
          <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00a63e]/10 border border-[#00a63e]/20 text-[#00a63e] text-xs font-black tracking-widest uppercase shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#00a63e] animate-pulse"></span>
              Corporate Blueprint
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight leading-none">
              Bastarraj <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00a63e] to-[#4ade80]">Agro Pvt. Ltd.</span>
            </h1>
            <p className="text-sm sm:text-base text-gray-500 font-bold leading-relaxed max-w-lg mx-auto lg:mx-0">
              Bridges premium commercial forestry pipelines with deep asset protection safety rules and eco-tech operations.
            </p>

            {/* HIGHLY COMPACT GRAPHICAL HUBS (Replaces old big card layout boxes) */}
            <div className="grid grid-cols-3 gap-3 pt-4">
              {[
                { label: '500+ Acres', desc: 'Managed', icon: FiTrendingUp },
                { label: '100% Secure', desc: 'Buyback Contract', icon: FiShield },
                { label: 'Certified', desc: 'Plant Origin', icon: FiCheckCircle }
              ].map((metric, i) => (
                <div key={i} className="bg-white border border-gray-200/60 p-3 rounded-2xl flex flex-col items-center justify-center shadow-sm">
                  <metric.icon className="text-[#00a63e] text-lg mb-1" />
                  <span className="text-sm font-black text-gray-900 tracking-tight text-center leading-none">{metric.label}</span>
                  <span className="text-[9px] font-bold text-gray-400 uppercase mt-1 text-center">{metric.desc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Rich Media Block (7 Columns) - DISPLAYING: img1.webp */}
          {/* Completely isolated to the right side so it never covers up textual fields */}
          <div className="lg:col-span-7 w-full h-[320px] sm:h-[450px] relative rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,166,62,0.1)] border border-white bg-gradient-to-tr from-green-50 to-white group">
            <Image 
              src="/img1.webp" 
              alt="Premium Eco Assets" 
              fill 
              quality={100}
              priority={true}
              className="object-contain object-center scale-95 group-hover:scale-100 transition-transform duration-700 ease-out"
              unoptimized={true}
            />
            {/* Ambient inner soft glowing drop shadow overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/5 via-transparent to-transparent pointer-events-none"></div>
          </div>

        </div>
      </section>

      {/* STAGE 2: IMMERSIVE INFOGRAPHIC PLANT VISUALS SHOWCASE */}
      {/* Displays the 4 plant assets side-by-side with automatic text blend overlay links */}
      <section className="w-full py-12 px-4 sm:px-6 lg:px-8 z-10 relative max-w-7xl mx-auto">
        <div className="mb-8 text-center lg:text-left">
          <h2 className="text-xl font-black text-gray-900 uppercase tracking-widest flex items-center gap-2 justify-center lg:justify-start">
            <span className="w-5 h-[2px] bg-[#00a63e]"></span> Botanical Stock Integration
          </h2>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {showcasedPlants.map((plant, idx) => (
            <div key={idx} className="group relative h-48 sm:h-64 rounded-[2rem] overflow-hidden border border-gray-200/60 shadow-sm bg-white">
              <Image 
                src={plant.path} 
                alt={plant.name} 
                fill 
                quality={95}
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                unoptimized={true}
              />
              {/* Dynamic Overlay Mask that opens up readability metrics seamlessly */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent opacity-90 z-10"></div>
              <div className="absolute bottom-4 left-4 right-4 z-20 flex flex-col">
                <span className="text-[9px] font-black tracking-widest text-[#4ade80] uppercase">{plant.type}</span>
                <span className="text-base font-black text-white tracking-tight mt-0.5">{plant.name}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* STAGE 3: INFOGRAPHIC VISION/MISSION TABS */}
      <section className="w-full py-10 px-4 sm:px-6 lg:px-8 z-10 relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div className="flex gap-4 items-center bg-white border border-gray-200/60 p-6 rounded-[2rem] shadow-sm transition-all hover:border-[#00a63e]/30">
            <div className="w-12 h-12 rounded-2xl bg-[#00a63e]/10 text-[#00a63e] flex items-center justify-center shrink-0 border border-[#00a63e]/20">
              <FiCompass className="text-xl" />
            </div>
            <div>
              <h3 className="text-sm font-black text-gray-400 uppercase tracking-widest">Our Strategic Vision</h3>
              <p className="text-gray-800 text-sm font-bold tracking-tight mt-1 leading-snug">
                Converting open barren zones into highly scalable, automated commercial tree banks.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-center bg-white border border-gray-200/60 p-6 rounded-[2rem] shadow-sm transition-all hover:border-[#00a63e]/30">
            <div className="w-12 h-12 rounded-2xl bg-[#00a63e]/10 text-[#00a63e] flex items-center justify-center shrink-0 border border-[#00a63e]/20">
              <FiTarget className="text-xl" />
            </div>
            <div>
              <h3 className="text-sm font-black text-gray-400 uppercase tracking-widest">Our Execution Mission</h3>
              <p className="text-gray-800 text-sm font-bold tracking-tight mt-1 leading-snug">
                Supplying elite botanical lineages backed by secure, notarized legal framework policies.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* STAGE 4: CORPORATE GOVERNANCE MATRIX TRACK */}
      <section className="w-full py-10 px-4 sm:px-6 lg:px-8 z-10 relative max-w-5xl mx-auto">
        <div className="mb-6 text-center md:text-left">
          <h2 className="text-xl font-black text-gray-900 tracking-tight">
            Governance <span className="text-[#00a63e]">Board</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {team.map((member, i) => (
            <div 
              key={i}
              className="bg-white border border-gray-200/60 p-4 rounded-2xl flex items-center justify-between group transition-all duration-300 hover:border-[#00a63e]/30"
            >
              <div className="space-y-1">
                <h3 className="text-base font-black text-gray-900 group-hover:text-[#00a63e] transition-colors leading-none">
                  {member.name}
                </h3>
                <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest block mt-1">
                  {member.role}
                </span>
              </div>

              {/* Graphical Rounded Frame Avatar Node */}
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-green-50 to-[#00a63e]/10 border border-[#00a63e]/20 flex items-center justify-center shrink-0 font-black text-xs text-[#00a63e]">
                {member.initial}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* STAGE 5: HIGH-DENSITY IMMERSIVE FOLIAGE BASE (img2.webp) */}
      <div className="absolute bottom-0 left-0 w-full h-[250px] md:h-[350px] z-0 pointer-events-none opacity-[0.25] image-render-crisp">
        <Image 
          src="/img2.webp" 
          alt="Natural Foliage Footprint Canvas" 
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

export default AboutPage;