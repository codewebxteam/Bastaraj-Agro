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
    // Premium canvas with subtle pattern layer
    <section className="w-full bg-[#FAFAFA] pt-14 pb-20 relative overflow-hidden m-0 border-none">
      
      {/* Dynamic Background Grid Lines */}
      <div className="absolute inset-0 z-0 opacity-[0.02]" style={{ backgroundImage: 'linear-gradient(to right, #00a63e 1px, transparent 1px), linear-gradient(to bottom, #00a63e 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-14 md:mb-16 relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00a63e]/10 border border-[#00a63e]/20 text-[#00a63e] text-xs font-bold tracking-widest uppercase mb-3 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#00a63e] animate-ping"></span>
            Interactive Roadmap
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight">
            Our Working <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00a63e] to-[#4ade80]">Process</span>
          </h2>
          <p className="mt-3 text-base text-gray-500 font-medium max-w-xl mx-auto hidden sm:block">
            A seamless 6-step journey from barren land to profitable plantation.
          </p>
        </div>

        {/* FUTURISTIC ROADMAP TRACK CONTAINER */}
        <div className="relative w-full">
          
          {/* CULPRIT FIXED 1: Bich ki saari problematic overlapping lines ko yahan se drop kar diya hai */}

          {/* THE DYNAMIC RESPONSIVE LAYOUT FLOW */}
          {/* Mobile: Horizontal Swipe Track | Desktop: Clean Un-Staggered 3-Column Grid */}
          <div className="flex overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-x-8 lg:gap-y-10 pb-4 md:pb-0 px-2 sm:px-0 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {steps.map((step) => {
              return (
                // CULPRIT FIXED 2: Staggered translate properties ko drop kiya taaki screen size compress hone par elements na katein
                <div 
                  key={step.id} 
                  className="min-w-[85%] sm:min-w-[50%] md:min-w-0 snap-center relative flex flex-col items-center lg:items-start transition-all duration-500"
                >
                  
                  {/* PREMIUM REFLECTIVE DESIGN CARD */}
                  <div className="group w-full h-full bg-white border border-[#00a63e]/10 p-6 md:p-7 rounded-[2rem] shadow-[0_12px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_25px_50px_-12px_rgba(0,166,62,0.15)] hover:border-[#00a63e]/40 transition-all duration-500 hover:-translate-y-1.5 relative overflow-hidden">
                    
                    {/* Glowing Background Radial Accents */}
                    <div className="absolute -right-10 -bottom-10 w-28 h-28 bg-[#00a63e]/5 rounded-full blur-2xl group-hover:bg-[#00a63e]/15 transition-all duration-500"></div>

                    {/* Step Branding Header */}
                    <div className="flex items-center justify-between mb-5 relative z-10">
                      
                      {/* Brand green text default with soft glowing gradient bg */}
                      <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-green-50 to-[#00a63e]/5 border border-[#00a63e]/10 flex items-center justify-center font-black text-lg text-[#00a63e] group-hover:from-[#00a63e] group-hover:to-[#4ade80] group-hover:text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                        0{step.id}
                      </div>

                      {/* Icon color initialized with brand green */}
                      <div className="p-2.5 bg-[#00a63e]/5 rounded-xl border border-[#00a63e]/10 text-[#00a63e] group-hover:bg-[#00a63e] group-hover:text-white transition-all duration-300 shadow-sm">
                        <step.icon className="text-lg" />
                      </div>

                    </div>

                    {/* Meta Core Content */}
                    <div className="relative z-10">
                      <h3 className="text-lg font-black text-gray-900 group-hover:text-[#00a63e] transition-colors duration-300 mb-1.5 tracking-tight">
                        {step.title}
                      </h3>
                      <p className="text-gray-500 text-xs font-bold leading-relaxed tracking-wide">
                        {step.desc}
                      </p>
                    </div>

                    {/* Dynamic Active Progress Top Border */}
                    <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#00a63e] to-[#4ade80] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  </div>

                </div>
              );
            })}
          </div>

          {/* MOBILE INTERACTIVE DOTS INDICATOR */}
          <div className="flex md:hidden justify-center items-center gap-1.5 mt-6">
            {steps.map((_, i) => (
              <div key={i} className={`h-1.5 rounded-full transition-all duration-300 ${i === 0 ? 'w-5 bg-[#00a63e]' : 'w-1.5 bg-gray-200'}`}></div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default ProcessTimeline;