"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image'; 
import { FiHome, FiTrendingUp, FiImage, FiInfo, FiLayers, FiPhoneCall } from 'react-icons/fi';

const Header = () => {
  // State management for mobile bottom navigation visibility (100% Intact)
  const [showBottomBar, setShowBottomBar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Scroll event listener to handle the bottom bar display logic (100% Intact)
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Hides the bottom bar when scrolling down past 50px, reveals when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowBottomBar(false);
      } else {
        setShowBottomBar(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // FIXED: Standard dynamic path router matrix mapped to newly generated file structure directories
  const navigationLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Calculator', path: '/calculator' },
    { name: 'Gallery', path: '/gallery' }
  ];

  return (
    <>
      {/* MODERN LIGHT-THEME GLASSMORPHISM HEADER */}
      <header className="w-full bg-white/95 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            
            {/* Brand Logo & Brand Name Combined Container */}
            <div className="flex-shrink-0 flex items-center h-full py-2 gap-3">
              <Link href="/" className="relative h-14 w-14 flex items-center">
                <Image 
                  src="/logo.webp" 
                  alt="Bastarraj Agro Logo" 
                  fill 
                  className="object-contain object-left" 
                  priority={true}
                  sizes="56px" 
                />
              </Link>
              
              {/* FIXED: Added clear corporate premium brand name text tracking structure */}
              <Link href="/" className="flex flex-col justify-center select-none">
                <span className="text-xl font-black text-gray-900 tracking-tight leading-none">
                  Bastarraj <span className="text-[#41A61D]">Agro</span>
                </span>
                <span className="text-[10px] font-bold text-gray-400 tracking-widest uppercase mt-0.5">
                  Pvt. Ltd.
                </span>
              </Link>
            </div>

            {/* Desktop Navigation Links - FIXED: Routed to actual server pages instead of component hashes */}
            <nav className="hidden md:flex space-x-8">
              {navigationLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.path} 
                  className="text-gray-900 active:text-[#41A61D] font-bold transition-colors duration-200 text-sm tracking-wide"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Desktop Action & Mobile Call Layout Context */}
            <div className="flex items-center">
              
              {/* FIXED MOBILE ONLY: Shifted Call Icon cleanly to the right side with automated dialer prompt link (#41A61D) */}
              <a 
                href="tel:+917999618106" 
                className="md:hidden flex items-center justify-center w-11 h-11 rounded-full bg-[#41A61D] text-white shadow-md active:scale-90 transition-transform duration-200 ml-auto"
                aria-label="Call Now"
              >
                <FiPhoneCall className="text-lg animate-pulse" />
              </a>
              
              {/* Desktop Call Now Trigger Button - Solid Primary Color without dynamic gradient hover */}
              <a 
                href="tel:+917999618106" 
                className="hidden md:flex bg-[#41A61D] text-white px-6 py-2 rounded-full font-extrabold active:scale-95 shadow-md text-sm transition-transform duration-200"
              >
                Call Now
              </a>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Floating Bottom Navigation Bar */}
      {/* FIXED: Re-mapped mobile actions context securely to actual directory system */}
      <div 
        className={`md:hidden fixed bottom-4 left-4 right-4 z-50 transition-transform duration-300 ease-in-out ${
          showBottomBar ? 'translate-y-0' : 'translate-y-[150%]'
        }`}
      >
        <div className="bg-white/95 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.15)] border border-gray-200 rounded-2xl px-2 py-3 flex justify-between items-center">
          
          {[
            { href: '/', icon: FiHome, label: 'Home' },
            { href: '/about', icon: FiInfo, label: 'About' },
            { href: '/services', icon: FiLayers, label: 'Services' },
            { href: '/calculator', icon: FiTrendingUp, label: 'ROI Calc' },
            { href: '/gallery', icon: FiImage, label: 'Gallery' },
          ].map((item) => (
            <Link 
              key={item.label} 
              href={item.href} 
              className="flex flex-col items-center w-1/5 text-gray-600 active:text-[#41A61D] transition-colors duration-150"
            >
              <item.icon className="text-[22px] mb-1" />
              {/* Active highlights and labels text config updated */}
              <span className="text-[9px] font-extrabold tracking-tight">{item.label}</span>
            </Link>
          ))}
          
        </div>
      </div>
    </>
  );
};

export default Header;