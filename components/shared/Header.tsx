"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { FiHome, FiTrendingUp, FiImage, FiInfo, FiLayers, FiPhoneCall } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const Header = () => {
  // State management for mobile bottom navigation visibility (100% Intact)
  const [showBottomBar, setShowBottomBar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Scroll event listener to handle the bottom bar display logic (100% Intact)
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 80);

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
      {/* MODERN DARK-THEME GLASSMORPHISM HEADER */}
      <header className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${isScrolled
          ? 'bg-[#0D1713]/95 backdrop-blur-md border-b border-[#2C4538] shadow-md'
          : 'bg-gradient-to-b from-black/90 via-black/40 to-transparent border-none shadow-none'
        }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20 w-full">

            {/* Left Section: Brand Logo & Name */}
            <div className="flex-1 flex items-center justify-start py-2 gap-3">
              <Link href="/" className="relative h-14 w-14 rounded-full flex items-center transition-transform duration-300 hover:scale-105 overflow-hidden bg-[#16261F] border border-[#2C4538]">
                <Image
                  src="/logo.webp"
                  alt="Swarnim Agro Logo"
                  fill
                  className="object-contain object-center drop-shadow-[0_0_8px_rgba(65,166,29,0.2)]"
                  priority={true}
                  sizes="56px"
                />
              </Link>

              {/* FIXED: Added clear corporate premium brand name text tracking structure */}
              <Link href="/" className="flex flex-col justify-center select-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-b from-[#F5D061] to-[#E6A317] tracking-tight leading-none">
                  Swarnim
                </span>
                <span className="text-[11px] font-bold text-[#41A61D] tracking-widest uppercase mt-0.5">
                  AGRO FORESTRY
                </span>
                <span className="text-[9px] font-medium text-[#8EA39A] tracking-wider mt-0.5 whitespace-nowrap">
                  खेतो में हरियाली जीवन में खुशहाली
                </span>
              </Link>
            </div>

            {/* Middle Section: Centered Navigation Links - active highlighted in green */}
            <nav className="hidden md:flex justify-center items-center space-x-8">
              {navigationLinks.map((link) => {
                const isActive = pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    href={link.path}
                    prefetch={true}
                    className={`transition-colors duration-200 text-sm tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] ${isActive
                        ? 'font-extrabold text-[#41A61D]'
                        : 'font-medium text-white hover:text-[#41A61D]'
                      }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Right Section: Desktop Action & Mobile Call Layout Context */}
            <div className="flex-grow md:flex-1 flex items-center justify-end">

              {/* FIXED MOBILE ONLY: Shifted Call Icon cleanly to the right side with automated dialer prompt link */}
              <a
                href="tel:+919301381805"
                className="md:hidden flex items-center justify-center w-11 h-11 rounded-full bg-[#41A61D] hover:bg-[#348c15] text-white shadow-[0_0_15px_rgba(65,166,29,0.4)] active:scale-90 transition-all duration-200"
                aria-label="Call Now"
              >
                <FiPhoneCall className="text-lg animate-pulse" />
              </a>

              {/* Desktop Call Now Trigger Button - Solid Primary Color with dynamic transitions */}
              <a
                href="tel:+919301381805"
                className="hidden md:flex items-center gap-2 bg-[#41A61D] hover:bg-[#348c15] text-white px-6 py-2 rounded-full font-extrabold active:scale-95 shadow-[0_0_15px_rgba(65,166,29,0.3)] text-sm transition-all duration-200 hover:scale-105"
              >
                <FaWhatsapp className="text-lg" />
                <span>Call Now</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Floating Bottom Navigation Bar */}
      {/* FIXED: Re-mapped mobile actions context securely to actual directory system */}
      <div
        className={`md:hidden fixed bottom-4 left-4 right-4 z-50 transition-transform duration-300 ease-in-out ${showBottomBar ? 'translate-y-0' : 'translate-y-[150%]'
          }`}
      >
        <div className="bg-[#16261F]/90 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] border border-[#2C4538] rounded-2xl px-2 py-3 flex justify-between items-center">

          {[
            { href: '/', icon: FiHome, label: 'Home' },
            { href: '/about', icon: FiInfo, label: 'About' },
            { href: '/services', icon: FiLayers, label: 'Services' },
            { href: '/calculator', icon: FiTrendingUp, label: 'ROI Calc' },
            { href: '/gallery', icon: FiImage, label: 'Gallery' },
          ].map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                prefetch={true}
                className={`flex flex-col items-center w-1/5 transition-colors duration-150 ${isActive ? 'text-[#41A61D]' : 'text-[#8EA39A] hover:text-[#41A61D]'
                  }`}
              >
                <item.icon className="text-[22px] mb-1 transition-transform hover:scale-110" />
                {/* Active highlights and labels text config updated */}
                <span className="text-[9px] font-extrabold tracking-tight">{item.label}</span>
              </Link>
            );
          })}

        </div>
      </div>
    </>
  );
};

export default Header;