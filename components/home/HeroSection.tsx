"use client";

import React, { useState, useEffect } from 'react';
import { FaWhatsapp, FaStar, FaTree, FaShieldAlt, FaLeaf, FaCertificate } from 'react-icons/fa';
import { FiTrendingUp } from 'react-icons/fi';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

// Framer Motion Animation Variants for Content Stagger Sequence
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    }
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  }
};

const badgeVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
  }
};

const headingVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

const descVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

const buttonContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

const buttonVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const HeroSection = () => {
  // Real-time custom detailed conversion string configuration (100% Intact)
  const getWhatsAppLink = () => {
    const phoneNumber = "919301381805"; // Swarnim Agro Primary Desk Contact
    
    const rawMessage = `🌿 *Swarnim Agro - New Portal Inquiry*\n` +
                       `--------------------------------------\n` +
                       `*नमस्ते, मैं आपके औषधीय और कमर्शियल प्लांटेशन...*`;
                       
    const message = encodeURIComponent(rawMessage);
    return `https://wa.me/${phoneNumber}?text=${message}`;
  };

  // State to switch language between Hindi and English dynamically
  const [isHindi, setIsHindi] = useState(true);

  // Background slideshow config
  const images = [
    '/hero-slide-tree.webp',
    '/hero-slide-drone.webp',
    '/hero-slide-2.webp',
    '/hero-slide-3.webp',
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Preload all slideshow images immediately on mount so transitions are instant without lag
  useEffect(() => {
    images.forEach((src) => {
      const img = new window.Image();
      img.src = src;
    });
  }, []);

  // Auto transition slides with elegant timing (10-second pause) and sync language switch
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
      setIsHindi((prev) => !prev);
    }, 10000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative w-full min-h-[90vh] lg:min-h-screen flex items-center justify-start overflow-hidden bg-[#070D0A]">
      
      {/* 1. Full-Screen Background Image Slideshow with Smooth Image-to-Image Crossfade */}
      <div className="absolute inset-0 z-0 bg-[#070D0A]">
        {images.map((src, index) => {
          const isActive = index === currentImageIndex;
          return (
            <motion.div
              key={src}
              initial={false}
              animate={{
                opacity: isActive ? 1 : 0,
                scale: isActive ? 1.06 : 1.0,
              }}
              transition={{
                opacity: { duration: 1.8, ease: "easeInOut" },
                scale: { duration: 10.0, ease: "linear" },
              }}
              className="absolute inset-0 w-full h-full pointer-events-none"
              style={{ zIndex: isActive ? 2 : 1 }}
            >
              <Image 
                src={src} 
                alt={`Swarnim Agro Slide ${index + 1}`}
                fill
                quality={80}
                sizes="100vw"
                className="object-cover object-center" 
                priority={index === 0}
              />
            </motion.div>
          );
        })}
      </div>

      {/* 2. Balanced Left-Sided Dark Gradient Overlay for Cinematic Text Readability & Image Vibrancy */}
      <div className="absolute inset-0 z-1 bg-linear-to-r from-black/55 via-black/20 to-transparent"></div>
      
      {/* 3. Subtle bottom vignette shadow overlay - Balanced for High Image Visibility */}
      <div className="absolute inset-0 z-1 bg-linear-to-t from-black/40 via-black/5 to-transparent"></div>

      {/* 3.5. Cinematic Radial Green Glow behind the Tree area on the right */}
      <div className="absolute inset-0 z-1 bg-[radial-gradient(circle_at_80%_50%,rgba(65,166,29,0.12),transparent_50%)]"></div>

      {/* 4. Main Content Container - Spaced cleanly with padding to prevent any element overlapping */}
      <div className="relative z-10 w-full max-w-7xl mx-auto pl-4 pr-6 sm:pl-6 sm:pr-8 lg:pl-8 lg:pr-16 flex flex-col justify-center items-start pt-28 pb-12 gap-8">
        
        {/* Card wrapper container */}
        <div className="w-full flex flex-col justify-center items-start">
          {/* Luxury Glassmorphic Overlay Card wrapping the Hero text content - max-width 600px to balance visibility and space */}
          <div className="backdrop-blur-xl bg-[#16261F]/85 border border-[#2C4538] shadow-[0_10px_40px_rgba(0,0,0,0.25)] rounded-3xl p-6 sm:p-10 w-full max-w-150 text-left select-none min-h-90 sm:min-h-105 flex flex-col justify-center hover:bg-[#1B2D25] transition-all duration-300">
            <AnimatePresence mode="wait">
              <motion.div 
                key={currentImageIndex}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="w-full flex flex-col items-start"
              >
                
                {/* Floating Trust Badge */}
                <motion.div 
                  variants={badgeVariants}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#16261F]/90 border border-[#2C4538] mb-6 shadow-inner backdrop-blur-sm transition-all duration-300 hover:border-[#41A61D]/50 w-fit"
                >
                  <span className="flex text-yellow-400 text-sm"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></span>
                  <span className="text-gray-300 text-xs font-semibold tracking-wider uppercase">
                    {isHindi ? '500+ किसानों द्वारा विश्वसनीय' : 'TRUSTED BY 500+ FARMERS'}
                  </span>
                </motion.div>

                {/* Headline with slide up animation - Sized appropriately to fit on exactly 2 lines on desktop */}
                {isHindi ? (
                  <motion.h1 
                    variants={headingVariants}
                    className="text-3xl sm:text-4xl lg:text-4xl font-black text-white mb-6 leading-tight tracking-tight font-sans drop-shadow-[0_4px_12px_rgba(0,0,0,0.85)]"
                  >
                    <span className="text-[#F5D061] text-xl sm:text-2xl block mb-2 tracking-wide font-medium">स्वर्णिम एग्रो (Swarnim Agro)</span>
                    खेती में नवाचारी,<br />
                    <span className="text-[#41A61D] drop-shadow-[0_0_20px_rgba(65,166,29,0.5)]">
                      किसान बनेगा व्यापारी
                    </span>
                  </motion.h1>
                ) : (
                  <motion.h1 
                    variants={headingVariants}
                    className="text-3xl sm:text-4xl lg:text-4xl font-black text-white mb-6 leading-tight tracking-tight font-sans drop-shadow-[0_4px_12px_rgba(0,0,0,0.85)]"
                  >
                    <span className="text-[#F5D061] text-xl sm:text-2xl block mb-2 tracking-wide font-medium">Swarnim Agro Forestry</span>
                    Innovative Forestry,<br />
                    <span className="text-[#41A61D] drop-shadow-[0_0_20px_rgba(65,166,29,0.5)]">
                      Farmers to Wealth Creators
                    </span>
                  </motion.h1>
                )}
                
                {/* Description with fade-in animation */}
                {isHindi ? (
                  <motion.p 
                    variants={descVariants}
                    className="text-base sm:text-lg text-[#C6D1CC] mb-10 leading-relaxed font-medium tracking-wide max-w-xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]"
                  >
                    परंपरागत खेती से आगे बढ़कर, औषधीय एवं वाणिज्यिक प्लांटेशन के माध्यम से कृषि को एक स्थायी और लाभदायक व्यवसाय में बदलें।
                  </motion.p>
                ) : (
                  <motion.p 
                    variants={descVariants}
                    className="text-base sm:text-lg text-[#C6D1CC] mb-10 leading-relaxed font-medium tracking-wide max-w-xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]"
                  >
                    Agriculture is no longer just livelihood—it is a natural source of high-yield wealth. Join our certified commercial and medicinal forestry models and scale your income.
                  </motion.p>
                )}
                
                {/* Call to Action Container with stagger effects */}
                <motion.div 
                  variants={buttonContainerVariants}
                  className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                >
                  
                  {/* Primary CTA with premium hover animations */}
                  <Link href="/calculator" className="w-full sm:w-auto">
                    <motion.button 
                      variants={buttonVariants}
                      whileHover={{ 
                        y: -4, 
                        boxShadow: "0 10px 25px rgba(65, 166, 29, 0.6)",
                        scale: 1.02
                      }}
                      whileTap={{ scale: 0.98 }}
                      className="px-8 py-4 bg-[#41A61D] hover:bg-[#348c15] text-white text-base sm:text-lg font-extrabold rounded-full shadow-[0_4px_20px_rgba(65,166,29,0.4)] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer w-full sm:w-auto"
                    >
                      <FiTrendingUp className="text-xl" />
                      <span>{isHindi ? 'प्रॉफिट कैलकुलेटर' : 'Profit Calculator'}</span>
                    </motion.button>
                  </Link>
                  
                  {/* Secondary CTA with premium hover animations */}
                  <a 
                    href={getWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto"
                  >
                    <motion.button 
                      variants={buttonVariants}
                      whileHover={{ 
                        y: -4, 
                        boxShadow: "0 10px 25px rgba(65, 166, 29, 0.15)",
                        scale: 1.02
                      }}
                      whileTap={{ scale: 0.98 }}
                      className="px-8 py-4 bg-[#12211C]/40 border border-[#2C4538] backdrop-blur-md hover:bg-white hover:text-black hover:border-white text-white text-base sm:text-lg font-bold rounded-full shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer w-full sm:w-auto"
                    >
                      <FaWhatsapp className="text-2xl text-[#41A61D] group-hover:text-[#25D366] transition-colors duration-300" />
                      <span>{isHindi ? 'WhatsApp पूछताछ' : 'WhatsApp Inquiry'}</span>
                    </motion.button>
                  </a>

                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* 5. Bottom Hero Stats Overlay - Glassmorphic high-contrast pill container */}
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-5xl p-3 md:p-5 rounded-2xl bg-[#091510]/85 backdrop-blur-xl border border-[#41A61D]/35 shadow-[0_12px_40px_rgba(0,0,0,0.7)] mb-2">
          <div className="flex items-center gap-2 md:gap-2.5 transition-all duration-300 hover:-translate-y-0.5">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-[#41A61D]/15 border border-[#41A61D]/40 flex items-center justify-center shrink-0 shadow-inner">
              <FaTree className="text-base md:text-xl text-[#52d925] drop-shadow-[0_0_10px_rgba(82,217,37,0.5)]" />
            </div>
            <div className="overflow-hidden">
              <h4 className="text-sm md:text-lg font-extrabold text-white leading-none tracking-tight truncate">500+ Acres</h4>
              <p className="text-[8px] md:text-[10px] text-[#A6C4B8] font-bold mt-1 uppercase tracking-wider drop-shadow-sm leading-tight">
                {isHindi ? 'छत्तीसगढ़ में प्रबंधित भूमि' : 'MANAGED LAND IN CG'}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 md:gap-2.5 transition-all duration-300 hover:-translate-y-0.5">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-[#41A61D]/15 border border-[#41A61D]/40 flex items-center justify-center shrink-0 shadow-inner">
              <FaShieldAlt className="text-base md:text-xl text-[#52d925] drop-shadow-[0_0_10px_rgba(82,217,37,0.5)]" />
            </div>
            <div className="overflow-hidden">
              <h4 className="text-sm md:text-lg font-extrabold text-white leading-none tracking-tight truncate">100% Secure</h4>
              <p className="text-[8px] md:text-[10px] text-[#A6C4B8] font-bold mt-1 uppercase tracking-wider drop-shadow-sm leading-tight">
                {isHindi ? 'रजिस्टर्ड बाय-बैक अनुबंध' : 'REGISTERED BUYBACK AGREEMENT'}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 md:gap-2.5 transition-all duration-300 hover:-translate-y-0.5">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-[#41A61D]/15 border border-[#41A61D]/40 flex items-center justify-center shrink-0 shadow-inner">
              <FaLeaf className="text-base md:text-xl text-[#52d925] drop-shadow-[0_0_10px_rgba(82,217,37,0.5)]" />
            </div>
            <div className="overflow-hidden">
              <h4 className="text-sm md:text-lg font-extrabold text-white leading-none tracking-tight truncate">Certified</h4>
              <p className="text-[8px] md:text-[10px] text-[#A6C4B8] font-bold mt-1 uppercase tracking-wider drop-shadow-sm leading-tight">
                {isHindi ? 'उच्च गुणवत्ता वाले पौधे' : 'HIGH QUALITY SAPLINGS'}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 md:gap-2.5 transition-all duration-300 hover:-translate-y-0.5">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-[#41A61D]/15 border border-[#41A61D]/40 flex items-center justify-center shrink-0 shadow-inner">
              <FaCertificate className="text-base md:text-xl text-[#52d925] drop-shadow-[0_0_10px_rgba(82,217,37,0.5)]" />
            </div>
            <div className="overflow-hidden w-full">
              <h4 className="text-sm md:text-lg font-extrabold text-white leading-none tracking-tight truncate">Reg. Company</h4>
              <p className="text-[8px] md:text-[9px] text-[#A6C4B8] font-bold mt-1 uppercase tracking-wider drop-shadow-sm break-all leading-tight">
                CIN: U46200CT2026PTC020693
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HeroSection;