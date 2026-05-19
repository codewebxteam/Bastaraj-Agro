"use client";

import React from 'react';
import { FiMapPin, FiActivity, FiLayout, FiDroplet, FiFileText, FiTruck } from 'react-icons/fi';

const ProcessTimeline = () => {
  // Step-by-step agricultural workflow configuration (100% Exact)
  const steps = [
    { id: 1, title: 'Land Inspection', desc: 'Expert assessment of topography & soil condition.', icon: FiMapPin },
    { id: 2, title: 'Soil Testing', desc: 'Deep analysis of nutrients and pH levels.', icon: FiActivity },
    { id: 3, title: 'Plantation Plan', desc: 'Customized commercial crop layout design.', icon: FiLayout },
    { id: 4, title: 'Irrigation Setup', desc: 'Advanced fencing & water management systems.', icon: FiDroplet },
    { id: 5, title: 'Legal Agreement', desc: 'Notarized buy-back & lifetime service terms.', icon: FiFileText },
    { id: 6, title: 'Plant Delivery', desc: 'Healthy, certified saplings delivered to site.', icon: FiTruck },
  ];

  return (
    // Premium canvas with subtle pattern layer (Light Theme)
    <section className="w-full bg-[#FAFAFA] pt-14 pb-20 relative overflow-hidden m-0 border-none">
      
      {/* Dynamic Background Grid Lines (Solid Gray for Light Theme) */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-14 md:mb-16 relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#41A61D]/10 border border-[#41A61D]/20 text-[#41A61D] text-xs font-bold tracking-widest uppercase mb-3 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#41A61D] animate-ping"></span>
            Interactive Roadmap
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight">
            Our Working <span className="text-[#41A61D]">Process</span>
          </h2>
          <p className="mt-3 text-base text-gray-500 font-medium max-w-xl mx-auto hidden sm:block">
            A seamless 6-step journey from barren land to profitable plantation.
          </p>
        </div>

        {/* MINIMALIST CONNECTED FLOW TRACK (Replaces Cards) */}
        <div className="relative w-full">
          
          {/* Continuous Vertical Connection Line (Desktop Only) */}
          <div className="hidden md:block absolute top-6 bottom-6 left-[27px] w-[2px] bg-gray-200 z-0"></div>

          {/* Grid Layout for Flow */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-12 relative z-10">
            {steps.map((step) => (
              <div 
                key={step.id} 
                className="relative flex items-start group"
              >
                
                {/* 1. Step Indicator Node */}
                <div className="flex-shrink-0 flex flex-col items-center mr-5">
                  <div className="w-14 h-14 rounded-full bg-white border-2 border-[#41A61D] flex items-center justify-center text-[#41A61D] shadow-md z-10 relative">
                    <step.icon className="text-xl font-black" />
                  </div>
                  {/* Mobile Connection Line segment */}
                  {step.id !== steps.length && (
                    <div className="md:hidden w-[2px] h-full absolute top-14 bg-gray-200 z-0"></div>
                  )}
                </div>

                {/* 2. Step Content (Clean, No Card Background) */}
                <div className="flex flex-col pt-1.5 pb-2">
                  <span className="text-[10px] font-black tracking-widest text-[#E36911] uppercase mb-1">
                    Phase 0{step.id}
                  </span>
                  <h3 className="text-lg font-black text-gray-900 mb-1 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 text-xs sm:text-sm font-semibold leading-relaxed max-w-xs">
                    {step.desc}
                  </p>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default ProcessTimeline;