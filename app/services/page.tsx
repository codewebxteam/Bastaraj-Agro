"use client";

import React from 'react';
import Image from 'next/image';
import { FiMapPin, FiActivity, FiShield, FiTruck, FiCheckCircle, FiArrowUpRight } from 'react-icons/fi';

const ServicesPage = () => {
  const solutions = [
    {
      id: "01",
      title: "Land Inspection & Soil Testing",
      desc: "Our team visits your field personally to check the soil quality, water levels, and land type before planting any trees.",
      icon: FiMapPin,
      tag: "Before Planting"
    },
    {
      id: "02",
      title: "High-Quality Tree Plantation",
      desc: "We supply healthy, certified saplings of high-value timber trees (Mahogany/Neem) and medicinal crops directly to your farm.",
      icon: FiActivity,
      tag: "Planting Work"
    },
    {
      id: "03",
      title: "Legal Safety & Buyback Papers",
      desc: "We sign a fully transparent legal agreement with you that secures a guaranteed buy-back rate when your trees are ready.",
      icon: FiShield,
      tag: "Safe Legal Papers"
    },
    {
      id: "04",
      title: "Harvesting & Delivery Support",
      desc: "When the trees mature, we handle the complete process of safe cutting, forest department permissions, transport, and final sales.",
      icon: FiTruck,
      tag: "Final Harvesting"
    }
  ];

  return (
    <main className="w-full min-h-screen bg-[#FAFAFA] text-gray-950 antialiased overflow-hidden pb-32">
      
      {/* Background Grid Layer */}
      <div className="absolute inset-0 z-0 opacity-[0.02]" style={{ backgroundImage: 'linear-gradient(to right, #00a63e 1px, transparent 1px), linear-gradient(to bottom, #00a63e 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

      {/* HERO SECTION */}
      <section className="relative w-full pt-12 pb-14 px-4 sm:px-6 lg:px-8 z-10 max-w-7xl mx-auto mt-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00a63e]/10 border border-[#00a63e]/20 text-[#00a63e] text-xs font-bold tracking-widest uppercase shadow-sm">
              Our Services
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight leading-none">
              Complete Farming <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00a63e] to-[#4ade80]">& Support</span>
            </h1>
            <p className="text-sm sm:text-base text-gray-500 font-medium leading-relaxed max-w-lg mx-auto lg:mx-0">
              We provide step-by-step guidance, certified saplings, safe legal contracts, and total crop care until harvest time.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-2 pt-2">
              {['Soil Testing', 'Legal Guarantee', 'Full Logistics'].map((tag, idx) => (
                <span key={idx} className="inline-flex items-center gap-1 text-[10px] font-bold text-gray-700 bg-white border border-gray-200 shadow-sm px-3 py-1.5 rounded-xl">
                  <FiCheckCircle className="text-[#00a63e]" /> {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right Image (img1.webp) */}
          <div className="lg:col-span-7 w-full h-[280px] sm:h-[400px] relative rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,166,62,0.08)] border border-white bg-gradient-to-tr from-green-50 to-white group">
            <Image 
              src="/img3.webp" 
              alt="Bastarraj Farming Work" 
              fill 
              quality={100}
              priority={true}
              className="object-contain object-center scale-95 group-hover:scale-100 transition-transform duration-700 ease-out"
              unoptimized={true}
            />
          </div>

        </div>
      </section>

      {/* SERVICES SHEET MATRIX */}
      <section className="w-full py-10 px-4 sm:px-6 lg:px-8 z-10 relative max-w-5xl mx-auto">
        <div className="mb-10 text-center md:text-left">
          <h2 className="text-xl font-black text-gray-900 uppercase tracking-widest flex items-center gap-2 justify-center md:justify-start">
            <span className="w-5 h-[2px] bg-[#00a63e]"></span> How We Work
          </h2>
        </div>

        <div className="w-full bg-white/60 backdrop-blur-xl border border-gray-200/60 rounded-[2.5rem] overflow-hidden shadow-[0_15px_40px_-20px_rgba(0,0,0,0.03)]">
          {solutions.map((item, index) => (
            <div 
              key={item.id}
              className={`group w-full grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-0 p-6 sm:p-8 items-center border-b border-gray-100 transition-all duration-300 hover:bg-white relative overflow-hidden ${
                index === solutions.length - 1 ? 'border-none' : ''
              }`}
            >
              <div className="absolute top-0 left-0 w-[4px] h-full bg-[#00a63e] transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"></div>

              <div className="md:col-span-3 flex items-center gap-4">
                <span className="text-3xl font-black text-gray-200 group-hover:text-[#00a63e]/20 tracking-tight transition-colors duration-300">
                  {item.id}
                </span>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-gray-400 group-hover:text-gray-500 uppercase tracking-widest">
                    Step Phase
                  </span>
                  <span className="inline-block text-[10px] font-bold uppercase text-[#00a63e] bg-[#00a63e]/5 border border-[#00a63e]/10 px-2 py-0.5 rounded mt-1 w-max">
                    {item.tag}
                  </span>
                </div>
              </div>

              <div className="md:col-span-7 space-y-1">
                <h3 className="text-lg font-black text-gray-900 group-hover:text-[#00a63e] transition-colors duration-200 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-xs sm:text-sm font-medium leading-relaxed pr-4">
                  {item.desc}
                </p>
              </div>

              <div className="md:col-span-2 flex items-center justify-start md:justify-end gap-3 text-gray-300 group-hover:text-[#00a63e] transition-all duration-300">
                <div className="p-3 bg-gray-50 group-hover:bg-[#00a63e]/10 border border-gray-100 rounded-2xl shadow-sm">
                  <item.icon className="text-lg text-gray-400 group-hover:text-[#00a63e] transition-colors" />
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* FOLIAGE BASE BACKGROUND (img2.webp) */}
      <div className="absolute bottom-0 left-0 w-full h-[250px] md:h-[350px] z-0 pointer-events-none opacity-[0.25] image-render-crisp">
        <Image 
          src="/img2.webp" 
          alt="Natural Base Foliage" 
          fill 
          quality={100}
          className="object-cover object-bottom scale-100" 
          unoptimized={true} 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAFAFA] via-transparent to-transparent opacity-80"></div>
      </div>

    </main>
  );
};

export default ServicesPage;