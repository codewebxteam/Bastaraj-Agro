"use client";

import React from 'react';
import { FaWhatsapp, FaStar } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  // Real-time custom detailed conversion string configuration
  const getWhatsAppLink = () => {
    const phoneNumber = "917999618106"; // Bastarraj Agro Primary Desk Contact
    
    const rawMessage = `🌿 *Bastarraj Agro - New Portal Inquiry*\n` +
                       `--------------------------------------\n` +
                       `*नमस्ते, मैं आपके औषधीय और कमर्शियल प्लांटेशन मॉडल से जुड़कर खेती को व्यापार बनाना चाहता हूँ। कृपया मुझे बुकिंग और प्रॉफिट की पूरी जानकारी साझा करें।*`;
                       
    const message = encodeURIComponent(rawMessage);
    return `https://wa.me/${phoneNumber}?text=${message}`;
  };

  return (
    <div className="relative w-full h-screen min-h-screen flex items-center justify-center lg:justify-end overflow-hidden bg-[#0a0f0d]">
      
      {/* 1. Full-Screen Background Image Layer */}
      {/* FIXED: object-[-180px_center] shifts image viewport on small mobile to crop right side and show left assets clearly */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/hero-bg.webp" 
          alt="Bastarraj Agro Hero Background"
          fill
          className="object-cover object-[-180px_center] sm:object-center scale-105 animate-[pulse_20s_ease-in-out_infinite_alternate]" 
          priority
          unoptimized={true} 
        />
      </div>

      {/* 2. Ultra-Subtle Vignette */}
      <div className="absolute inset-0 z-1 bg-gradient-to-r from-transparent via-transparent to-black/60"></div>

      {/* 3. Main Content Container - Right Aligned with Modern Spacing */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center lg:justify-end mt-20 md:mt-0">
        
        {/* PREMIUM GLASSMORPHISM CARD - SIZE REDUCED AND PUSHED RIGHT */}
        <div className="max-w-lg p-8 md:p-10 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] flex flex-col items-center text-center lg:items-start lg:text-left transition-all duration-500 hover:bg-white-[0.15] lg:mr-4">
          
          {/* Floating Trust Badge */}
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/40 border border-white/10 mb-6 w-fit backdrop-blur-sm">
            <span className="flex text-yellow-400 text-sm"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></span>
            <span className="text-gray-200 text-xs font-semibold tracking-wider uppercase">Trusted by 500+ Farmers</span>
          </div>

          {/* Primary Headline - Light Vibrant Green (#1AFF00) */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-5 drop-shadow-lg leading-tight tracking-tight">
            खेती में नवाचारी,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1AFF00] to-[#55ff33]">
              किसान बनेगा व्यापारी
            </span>
          </h1>
          
          {/* Secondary Description */}
          <p className="text-base sm:text-lg text-gray-100 mb-8 leading-relaxed font-medium tracking-wide">
            अब खेती सिर्फ गुज़ारा नहीं, बल्कि बनेगी कमाई का प्राकृतिक जरिया। हमारे औषधीय और कमर्शियल प्लांटेशन मॉडल से जुड़ें और अपनी आदमनी को नई ऊंचाईयों तक ले जाएं।
          </p>
          
          {/* Call to Action Container */}
          <div className="flex flex-col sm:flex-row gap-4 w-full">
            
            {/* FIXED: Primary CTA wrapped inside Next.js routing wrapper to push to path directory seamlessly */}
            <Link href="/calculator" className="w-full sm:w-auto">
              <button className="relative overflow-hidden group px-6 py-4 bg-[#1AFF00] text-gray-900 text-base sm:text-lg font-extrabold rounded-xl shadow-[0_0_20px_rgba(26,255,0,0.3)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(26,255,0,0.5)] w-full text-center">
                <span className="relative z-10">प्रॉफिट कैलकुलेटर</span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
              </button>
            </Link>
            
            {/* FIXED: Secondary CTA running automated redirect to specific whatsapp api window */}
            <a 
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <button className="px-6 py-4 bg-white/5 border border-white/30 backdrop-blur-md hover:bg-white hover:text-black text-white text-base sm:text-lg font-bold rounded-xl shadow-lg transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2 group w-full text-center">
                <FaWhatsapp className="text-2xl text-[#1AFF00] group-hover:text-[#14cc00] transition-colors" />
                WhatsApp
              </button>
            </a>

          </div>
        </div>

      </div>
    </div>
  );
};

export default HeroSection;