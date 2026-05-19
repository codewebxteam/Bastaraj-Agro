"use client";

import React, { useState } from 'react';
import Image from 'next/image'; 
import { Target, Leaf, IndianRupee, Calendar } from 'lucide-react'; 

const CalculatorPage = () => {
  // 1. Simple Data Structure (Math and multipliers kept 100% accurate)
  const plantData: Record<string, { name: string; hindi: string; multipliers: number[] }> = {
    Mahogany: { name: 'Mahogany', hindi: '(महोगनी)', multipliers: [50000, 110000, 250000] },
    "Malabar Neem": { name: 'Malabar Neem', hindi: '(मालाबार नीम)', multipliers: [30000, 80000, 150000] }, 
    Sandalwood: { name: 'Sandalwood', hindi: '(चंदन)', multipliers: [100000, 250000, 600000] }, 
  };

  // State management for slider and selection
  const [plantKey, setPlantKey] = useState('Mahogany');
  const [quantity, setQuantity] = useState(500);

  // Simple calculations for area
  const acres = (quantity / 500).toFixed(1);
  const selectedPlant = plantData[plantKey];

  // Indian currency formatter (₹)
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  // Helper percentage to animate the progress bars smoothly on slider change
  const maxPossibleYield = 2000 * 600000; 
  const currentYieldPercent = (yearsIndex: number) => {
    const currentYield = quantity * selectedPlant.multipliers[yearsIndex];
    return Math.min(Math.max((currentYield / maxPossibleYield) * 100, 8), 100);
  };

  return (
    <main className="w-full min-h-screen bg-gradient-to-b from-gray-50 via-white to-[#e8f5ec] pt-12 pb-44 relative overflow-hidden m-0 border-none">
      
      {/* CRYSTAL CLEAR FOLIAGE BACKGROUND AT THE BOTTOM (img2.webp) */}
      <div className="absolute -bottom-10 left-0 w-full h-[280px] md:h-[380px] z-0 pointer-events-none opacity-100 image-render-crisp">
        <Image 
          src="/img2.webp" 
          alt="Fresh Green Leaves Base" 
          fill 
          quality={100} 
          className="object-cover object-bottom scale-100 filter-none" 
          priority={true} 
          unoptimized={true} 
        />
        {/* Soft fading layer to blend the image smoothly into the page canvas */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#e8f5ec]/40 via-transparent to-transparent opacity-50"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Simple Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00a63e]/10 text-[#00a63e] text-xs font-bold uppercase tracking-wider mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00a63e] animate-ping"></span>
            Live Income Estimate
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight">
            Interactive <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00a63e] to-[#4ade80]">Profit Calculator</span>
          </h2>
          <p className="mt-3 text-base text-gray-500 font-medium max-w-xl mx-auto">
            Choose your tree type and slide to select the quantity. Check your estimated returns in real-time instantly.
          </p>
        </div>

        {/* UNIFIED INTERACTIVE WORKSPACE */}
        <div className="w-full space-y-10">
          
          {/* STEP 1: INLINE WORKSPACE CONTROLS (Combined Bar) */}
          <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-6 bg-white/75 backdrop-blur-xl border border-gray-200/60 rounded-2xl p-6 md:p-8 shadow-[0_8px_32px_rgba(0,0,0,0.02)] items-center">
            
            {/* Tree Dropdown Selector */}
            <div className="md:col-span-4 space-y-2">
              <label className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-widest">
                <Leaf className="w-3.5 h-3.5 text-[#00a63e]" /> 1. Select Tree Type
              </label>
              <select 
                value={plantKey}
                onChange={(e) => setPlantKey(e.target.value)}
                className="w-full p-3.5 bg-gray-50/80 border border-gray-200 rounded-xl text-base font-extrabold text-gray-900 focus:ring-2 focus:ring-[#00a63e]/30 outline-none cursor-pointer transition-all"
              >
                {Object.keys(plantData).map(key => (
                  <option key={key} value={key}>{plantData[key].name} {plantData[key].hindi}</option>
                ))}
              </select>
            </div>

            {/* Range Slider Controller */}
            <div className="md:col-span-8 space-y-2">
              <div className="flex justify-between items-center">
                <label className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-widest">
                  <Target className="w-3.5 h-3.5 text-[#00a63e]" /> 2. Number of Plants
                </label>
                <div className="text-sm font-black text-gray-900">
                  <span className="text-xl text-[#00a63e]">{quantity}</span> Trees 
                  <span className="text-gray-400 font-medium ml-1.5">(Approx. {acres} Acre)</span>
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
                  className="w-full h-2 rounded-full bg-gray-100 accent-[#00a63e] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] font-bold text-gray-400 mt-1">
                  <span>MIN: 100 Trees</span>
                  <span>MAX: 2000+ Trees</span>
                </div>
              </div>
            </div>

          </div>

          {/* STEP 2: THE FINANCIAL MATRIX (Dashboard Table Sheet) */}
          <div className="w-full bg-white/40 backdrop-blur-xl border border-white/60 rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,166,62,0.05)]">
            
            {/* Table Header Row (Hidden on Mobile) */}
            <div className="hidden sm:grid grid-cols-12 bg-gray-900/5 px-8 py-4 border-b border-gray-100 text-xs font-bold text-gray-500 uppercase tracking-widest">
              <div className="col-span-3 flex items-center gap-2"><Calendar className="w-3.5 h-3.5" /> Time Period</div>
              <div className="col-span-5">Growth Performance Bar</div>
              <div className="col-span-4 text-right flex items-center justify-end gap-1"><IndianRupee className="w-3.5 h-3.5" /> Total Estimated Value</div>
            </div>

            {/* Dynamic Financial Iterations */}
            {[
              { label: '4 Year Yield', mult: selectedPlant.multipliers[0], tag: 'Early Returns' },
              { label: '8 Year Yield', mult: selectedPlant.multipliers[1], tag: 'Mid-Term Growth' },
              { label: '12 Year Yield', mult: selectedPlant.multipliers[2], tag: 'Full Maturity', premium: true },
            ].map((row, index) => (
              <div 
                key={index}
                className={`grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-0 px-6 sm:px-8 py-6 items-center border-b border-gray-100/50 transition-all duration-300 hover:bg-white/80 group ${
                  row.premium ? 'bg-gradient-to-r from-[#00a63e]/5 to-transparent' : ''
                }`}
              >
                
                {/* Column 1: Time Frame Labels */}
                <div className="col-span-1 sm:col-span-3">
                  <div className={`text-lg font-black ${row.premium ? 'text-gray-900' : 'text-gray-800'}`}>
                    {row.label}
                  </div>
                  <span className={`inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 mt-1 rounded ${
                    row.premium ? 'bg-[#00a63e] text-white' : 'bg-gray-100 text-gray-500'
                  }`}>
                    {row.tag}
                  </span>
                </div>

                {/* Column 2: Visual Graphic Bar (Moves dynamically with slider!) */}
                <div className="col-span-1 sm:col-span-5 pr-0 sm:pr-8">
                  <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden relative shadow-inner">
                    <div 
                      className={`h-full rounded-full transition-all duration-300 ease-out ${
                        row.premium 
                          ? 'bg-gradient-to-r from-[#00a63e] to-[#4ade80]' 
                          : 'bg-gradient-to-r from-gray-400 to-[#00a63e]'
                      }`}
                      style={{ width: `${currentYieldPercent(index)}%` }}
                    ></div>
                  </div>
                </div>

                {/* Column 3: Final Calculated Value */}
                <div className="col-span-1 sm:col-span-4 text-left sm:text-right">
                  <div className={`font-black tracking-tight transition-all duration-300 group-hover:scale-105 origin-right ${
                    row.premium ? 'text-3xl md:text-4xl text-[#00a63e]' : 'text-2xl text-gray-900'
                  }`}>
                    {formatCurrency(quantity * row.mult)}
                  </div>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mt-0.5">Estimated Market Value</span>
                </div>

              </div>
            ))}

          </div>

          {/* Simple Pitch-Black Bottom Footnote Text */}
          <div className="w-full max-w-3xl mx-auto text-center px-4 relative z-10">
            <p className="text-xs text-gray-950 font-bold leading-relaxed italic drop-shadow-[0_1px_8px_rgba(255,255,255,0.8)]">
              *Calculated as: [Total Trees × Current Tree Rate]. These values are realistic estimates based on proper tree care, timely watering, and normal market growth conditions. Actual prices may change depending on wood quality at harvest.
            </p>
          </div>

        </div>

      </div>
    </main>
  );
};

export default CalculatorPage;