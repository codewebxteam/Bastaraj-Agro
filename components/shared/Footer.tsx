"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiMapPin, FiPhone, FiMail, FiLayers, FiExternalLink } from 'react-icons/fi';

const Footer = () => {
  // Map array running direct paths identically matched to header route profiles
  const footerLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Our Services', path: '/services' },
    { name: 'Profit Calculator', path: '/calculator' },
    { name: 'Media Gallery', path: '/gallery' }
  ];

  return (
    <footer className="w-full bg-[#0a0f0d] text-white py-14 mt-auto relative border-t border-white/10 overflow-hidden">
      
      {/* Subtle Premium Glow Line at the top center - Updated to Primary Green #41A61D */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#41A61D]/40 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Adjusted Grid from grid-cols-3 to grid-cols-1 md:grid-cols-4 for cleaner column distribution */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Column 1: Corporate Identity (4 Columns) */}
          <div className="md:col-span-4">
            <div className="mb-6 relative h-16 w-48">
              <Image 
                src="/logo.webp" 
                alt="Bastarraj Agro Logo" 
                fill
                className="object-contain object-left drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]" 
                priority={false}
                sizes="(max-width: 768px) 192px, 200px" 
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed pr-4 tracking-wide font-medium">
              Empowering farmers through profitable, sustainable commercial and medicinal plantations. Transforming agriculture into a scalable business.
            </p>
          </div>

          {/* FIXED: Column 2: Navigation Links Hub (3 Columns) */}
          <div className="md:col-span-3">
            {/* Header border styled with Primary #41A61D */}
            <h4 className="text-base font-black mb-6 text-gray-100 border-b-2 border-[#41A61D]/50 pb-1.5 inline-block tracking-widest uppercase text-xs">
              Quick Navigation
            </h4>
            <ul className="space-y-3 flex flex-col">
              {footerLinks.map((link, idx) => (
                <li key={idx}>
                  <Link 
                    href={link.path}
                    className="text-gray-400 active:text-[#41A61D] text-sm font-semibold transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    {/* Dot pointer indicator utilizes Primary brand hex */}
                    <span className="w-1 h-1 rounded-full bg-[#41A61D]"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* FIXED: Column 3: Corporate Contact Directory (5 Columns) */}
          <div className="md:col-span-5 space-y-4">
            {/* Title border highlighted in Secondary Orange #E36911 for structural contrast */}
            <h4 className="text-base font-black mb-2 text-gray-100 border-b-2 border-[#E36911]/50 pb-1.5 inline-block tracking-widest uppercase text-xs">
              Contact Us
            </h4>
            
            <div className="flex items-start gap-2.5 text-gray-400 text-sm font-medium">
              <FiMapPin className="text-[#41A61D] shrink-0 mt-0.5 text-base" />
              <span>Mahatma Gandhi Industrial Park, Sarona, Kanker, Chhattisgarh</span>
            </div>

            {/* FIXED: Phone anchors bound with dialable structural tel nodes */}
            <div className="flex items-center gap-2.5 text-gray-400 text-sm font-medium">
              <FiPhone className="text-[#41A61D] shrink-0 text-base" />
              <div className="flex flex-wrap gap-x-2 gap-y-1">
                <a href="tel:+919301381805" className="active:text-[#41A61D] transition-colors font-bold">+91 9301381805</a>
                <span className="text-gray-600">|</span>
                <a href="tel:+917898860613" className="active:text-[#41A61D] transition-colors font-bold">+91 7898860613</a>
              </div>
            </div>

            <div className="flex items-center gap-2.5 text-gray-400 text-sm font-medium">
              <FiMail className="text-[#41A61D] shrink-0 text-base" />
              <a href="mailto:bastarraj01@gmail.com" className="active:text-[#41A61D] transition-colors font-bold">bastarraj01@gmail.com</a>
            </div>

            {/* Industry Trust and Certification Badges - Clean static viewports optimized for mobile grids */}
            <div className="pt-2">
              <div className="flex flex-wrap gap-2">
                <span className="bg-white/5 border border-white/10 text-gray-400 text-[10px] font-black tracking-wider px-3 py-1.5 rounded-xl backdrop-blur-md cursor-default">FSSAI</span>
                <span className="bg-white/5 border border-white/10 text-gray-400 text-[10px] font-black tracking-wider px-3 py-1.5 rounded-xl backdrop-blur-md cursor-default">STARTUP INDIA</span>
                <span className="bg-white/5 border border-white/10 text-gray-400 text-[10px] font-black tracking-wider px-3 py-1.5 rounded-xl backdrop-blur-md cursor-default">ISO 9001:2015</span>
                <span className="bg-white/5 border border-white/10 text-gray-400 text-[10px] font-black tracking-wider px-3 py-1.5 rounded-xl backdrop-blur-md cursor-default">MSME</span>
              </div>
            </div>
          </div>

        </div>
        
        {/* Copyright and Developer Accreditation */}
        <div className="border-t border-white/10 mt-14 pt-8 text-center flex flex-col md:flex-row justify-between items-center select-none">
          <p className="text-gray-500 text-sm mb-4 md:mb-0 tracking-wide font-medium">
            &copy; {new Date().getFullYear()} Bastarraj Agro Pvt. Ltd. All rights reserved.
          </p>
          {/* FIXED: Redirecting target link connected securely to CodeWebX server anchor */}
          <p className="text-gray-500 text-xs tracking-wide font-medium flex items-center gap-1">
            Designed & Developed by 
            <a 
              href="https://codewebx.in" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-black text-[#41A61D] tracking-wider active:text-[#E36911] transition-colors duration-200 flex items-center gap-0.5"
            >
              CodeWebX Technologies <FiExternalLink className="text-[10px]" />
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;