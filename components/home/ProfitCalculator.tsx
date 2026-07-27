"use client";

import React, { useState } from 'react';
import Image from 'next/image'; 
import { Target, Leaf, IndianRupee, Calendar } from 'lucide-react'; 

const ProfitCalculator = () => {
  // 1. Data-Driven Configuration (Logic kept 100% exact)
  const plantData: Record<string, { name: string; hindi: string; multipliers: number[] }> = {
    Mahogany: { name: 'Mahogany', hindi: '(महोगनी)', multipliers: [50000, 110000, 250000] },
    "Malabar Neem": { name: 'Malabar Neem', hindi: '(मालाबार नीम)', multipliers: [30000, 80000, 150000] }, 
    Sandalwood: { name: 'Sandalwood', hindi: '(चंदन)', multipliers: [100000, 250000, 600000] }, 
  };

  // State management
  const [plantKey, setPlantKey] = useState('Mahogany');
  const [quantity, setQuantity] = useState(500);

  // Derived calculations
  const acres = (quantity / 500).toFixed(1);
  const selectedPlant = plantData[plantKey];

  // Helper function to format currency in Indian style (₹)
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  // Helper percentage for dynamic visual bars in the matrix
  const maxPossibleYield = 2000 * 600000; // Max possible in calculation
  const currentYieldPercent = (yearsIndex: number) => {
    const currentYield = quantity * selectedPlant.multipliers[yearsIndex];
    return Math.min(Math.max((currentYield / maxPossibleYield) * 100, 8), 100);
  };

  return (
    // Base wrapper with a premium smooth canvas (Dark Theme consolidated)
    <section id="calculator" className="w-full bg-[#0D1713] pt-16 pb-44 relative overflow-hidden m-0 border-t border-[#2C4538]">
      
      {/* CULPRIT FIXED: DYNAMIC LAYERED FOLIAGE BACKGROUND AT THE BOTTOM
          Added quality={100} and overrode browser default anti-aliasing to fix the image blur issue */}
      <div className="absolute -bottom-10 left-0 w-full h-[280px] md:h-[380px] z-0 pointer-events-none opacity-100 image-render-crisp">
        <Image 
          src="/img2.webp" 
          alt="Fresh Green Leaves" 
          fill 
          quality={100} // Force Next.js to render highest fidelity
          className="object-cover object-bottom scale-100 filter-none" // Removed active scale/blur transitions
          priority={true} // Forces early download of the layout asset
          unoptimized={true} // Bypasses Server Side optimization compression glitches
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D1713]/70 via-transparent to-transparent opacity-85"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Minimal Section Header */}
        <div className="text-center mb-12">
          {/* Replaced arbitrary green with Primary Brand #41A61D */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#41A61D]/10 text-[#41A61D] text-xs font-bold uppercase tracking-wider mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#41A61D] animate-ping"></span>
            Live ROI Matrix
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight font-sans">
            Interactive <span className="text-[#41A61D] drop-shadow-[0_0_15px_rgba(65,166,29,0.3)]">Profit Workspace</span>
          </h2>
        </div>

        {/* UNIFIED INTERACTIVE WORKSPACE */}
        <div className="w-full space-y-10">
          
          {/* STAGE 1: INLINE HUB CONTROLS */}
          <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-6 bg-[#16261F]/85 border border-[#2C4538] rounded-2xl p-6 md:p-8 shadow-[0_10px_40px_rgba(0,0,0,0.25)] items-center">
            
            {/* Plant Dropdown Selector */}
            <div className="md:col-span-4 space-y-2">
              <label className="flex items-center gap-2 text-xs font-bold text-[#8EA39A] uppercase tracking-widest">
                <Leaf className="w-3.5 h-3.5 text-[#41A61D]" /> 01. Cultivation Specie
              </label>
              <select 
                value={plantKey}
                onChange={(e) => setPlantKey(e.target.value)}
                className="w-full p-3.5 bg-[#12211C]/50 border border-[#2C4538] rounded-xl text-base font-extrabold text-white focus:border-[#41A61D] focus:ring-1 focus:ring-[#41A61D] outline-none cursor-pointer transition-all focus:bg-[#0D1713]"
              >
                {Object.keys(plantData).map(key => (
                  <option key={key} value={key} className="bg-[#16261F] text-white">{plantData[key].name} {plantData[key].hindi}</option>
                ))}
              </select>
            </div>

            {/* Range Slider Controller */}
            <div className="md:col-span-8 space-y-2">
              <div className="flex justify-between items-center">
                <label className="flex items-center gap-2 text-xs font-bold text-[#8EA39A] uppercase tracking-widest">
                  <Target className="w-3.5 h-3.5 text-[#41A61D]" /> 02. Scale Volumetric
                </label>
                <div className="text-sm font-black text-white">
                  <span className="text-xl text-[#41A61D]">{quantity}</span> Plants 
                  <span className="text-[#8EA39A] font-medium ml-1.5">({acres} Acre)</span>
                </div>
              </div>
              <div className="relative pt-2">
                <input 
                  type="range" 
                  min="100" 
                  max="2000" 
                  step="100"
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className="w-full h-2 rounded-full bg-[#12211C] accent-[#41A61D] border border-[#2C4538] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] font-bold text-[#8EA39A] mt-1">
                  <span>MIN: 100</span>
                  <span>MAX: 2000+</span>
                </div>
              </div>
            </div>

          </div>

          {/* STAGE 2: THE INVESTMENT MATRIX */}
          {/* Removed dynamic hover dependencies, kept layout static for perfect mobile use */}
          <div className="w-full bg-[#16261F]/85 border border-[#2C4538] rounded-3xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.25)]">
            
            {/* Table Header Row */}
            <div className="hidden sm:grid grid-cols-12 bg-[#12211C]/50 px-8 py-4 border-b border-[#2C4538] text-xs font-bold text-[#8EA39A] uppercase tracking-widest">
              <div className="col-span-3 flex items-center gap-2"><Calendar className="w-3.5 h-3.5" /> Timeline Horizon</div>
              <div className="col-span-5">Performance Volatility Projection</div>
              <div className="col-span-4 text-right flex items-center justify-end gap-1"><IndianRupee className="w-3.5 h-3.5" /> Compounded Yield</div>
            </div>

            {/* Dynamic Financial Iterations */}
            {[
              { label: '4 Year Yield', mult: selectedPlant.multipliers[0], tag: 'Early Liquidity' },
              { label: '8 Year Yield', mult: selectedPlant.multipliers[1], tag: 'Growth Phase' },
              { label: '12 Year Yield', mult: selectedPlant.multipliers[2], tag: 'Maximum Maturity', premium: true },
            ].map((row, index) => (
              <div 
                key={index}
                className={`grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-0 px-6 sm:px-8 py-6 items-center border-b border-[#2C4538] ${
                  row.premium ? 'bg-[#1B2D25]/30' : 'bg-transparent'
                }`}
              >
                
                {/* Column 1: Time Frame Labels */}
                <div className="col-span-1 sm:col-span-3">
                  <div className="text-lg font-black text-white">
                    {row.label}
                  </div>
                  {/* Applied Secondary Orange #E36911 for premium pill to draw attention naturally */}
                  <span className={`inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 mt-1 rounded ${
                    row.premium ? 'bg-[#E36911] text-white' : 'bg-[#12211C] text-[#8EA39A] border border-[#2C4538]'
                  }`}>
                    {row.tag}
                  </span>
                </div>

                {/* Column 2: Visual Graphic Bar */}
                <div className="col-span-1 sm:col-span-5 pr-0 sm:pr-8">
                  <div className="w-full h-2.5 bg-[#12211C] border border-[#2C4538] rounded-full overflow-hidden relative shadow-inner">
                    <div 
                      className={`h-full rounded-full transition-all duration-300 ease-out ${
                        row.premium ? 'bg-[#E36911]' : 'bg-[#41A61D]'
                      }`}
                      style={{ width: `${currentYieldPercent(index)}%` }}
                    ></div>
                  </div>
                </div>

                {/* Column 3: Grand Realized Yield Format */}
                <div className="col-span-1 sm:col-span-4 text-left sm:text-right">
                  {/* Highlighted text colors using primary brand code */}
                  <div className={`font-black tracking-tight ${
                    row.premium ? 'text-3xl md:text-4xl text-[#41A61D]' : 'text-2xl text-white'
                  }`}>
                    {formatCurrency(quantity * row.mult)}
                  </div>
                  <span className="text-[10px] font-bold text-[#8EA39A] uppercase tracking-widest block mt-0.5">Gross Valuation Estimate</span>
                </div>

              </div>
            ))}

          </div>

          {/* FOOTNOTE */}
          <div className="w-full max-w-3xl mx-auto text-center px-4 relative z-10">
            <div className="inline-block px-6 py-4 rounded-2xl bg-[#16261F]/95 backdrop-blur-md border border-[#2C4538] shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
              <p className="text-xs text-emerald-100/90 font-medium leading-relaxed italic">
                *Calculated as: [Quantity × Asset Time-Multiplier]. Projections adapt in real-time according to optimal agricultural paradigms, irrigation infrastructure efficiency, and ecosystem stability indices.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ProfitCalculator;