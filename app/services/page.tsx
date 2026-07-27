import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { FiMapPin, FiActivity, FiShield, FiTruck, FiCheckCircle } from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Explore the full agricultural workflow support from Swarnim Agro PRIVATE LTD. including soil testing, plantation setup, legal buyback security, and harvesting support.',
  alternates: {
    canonical: '/services',
  },
};

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
    <main className="editorial-page w-full min-h-screen bg-[#0D1713] text-white antialiased overflow-hidden pb-32">
      
      {/* Background Grid Layer (Clean layout pattern) */}
      <div className="absolute inset-0 z-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

      {/* HERO SECTION */}
      <section className="premium-section page-hero relative w-full pt-12 pb-14 px-4 sm:px-6 lg:px-8 z-10 max-w-7xl mx-auto mt-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#41A61D]/10 border border-[#41A61D]/20 text-[#41A61D] text-xs font-bold tracking-widest uppercase shadow-sm">
              Our Services
            </div>
            {/* FIXED: Swapped text gradient with solid primary brand green #41A61D */}
            <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-none font-sans">
              Complete Farming <br className="hidden lg:block" />
              <span className="text-[#41A61D] drop-shadow-[0_0_15px_rgba(65,166,29,0.3)]">& Support</span>
            </h1>
            <p className="text-sm sm:text-base text-[#8EA39A] font-medium leading-relaxed max-w-lg mx-auto lg:mx-0">
              We provide step-by-step guidance, certified saplings, safe legal contracts, and total crop care until harvest time.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-2 pt-2">
              {['Soil Testing', 'Legal Guarantee', 'Full Logistics'].map((tag, idx) => (
                <span key={idx} className="inline-flex items-center gap-1 text-[10px] font-bold text-white bg-[#16261F]/85 border border-[#2C4538] shadow-2xl px-3 py-1.5 rounded-xl hover:border-[#41A61D]/50 transition-all duration-300">
                  <FiCheckCircle className="text-[#41A61D]" /> {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right Image (img3.webp) */}
          <div className="lg:col-span-7 w-full h-[280px] sm:h-[400px] relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-[#2C4538] bg-[#16261F]/50">
            <Image 
              src="/img3.webp" 
              alt="Swarnim Farming Work" 
              fill 
              quality={100}
              priority={true}
              className="object-contain object-center scale-95" 
              unoptimized={true}
            />
          </div>

        </div>
      </section>

      {/* SERVICES SHEET MATRIX */}
      <section className="premium-section w-full py-10 px-4 sm:px-6 lg:px-8 z-10 relative max-w-5xl mx-auto">
        <div className="mb-10 text-center md:text-left">
          <h2 className="text-xl font-black text-white uppercase tracking-widest flex items-center gap-2 justify-center md:justify-start">
            <span className="w-5 h-[2px] bg-[#41A61D]"></span> How We Work
          </h2>
        </div>

        <div className="w-full bg-[#16261F]/85 border border-[#2C4538] rounded-[2.5rem] overflow-hidden shadow-2xl">
          {solutions.map((item, index) => (
            <div 
              key={item.id}
              className={`w-full grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-0 p-6 sm:p-8 items-center border-b border-[#2C4538] bg-transparent relative overflow-hidden group hover:bg-[#1B2D25]/30 transition-colors duration-300 ${
                index === solutions.length - 1 ? 'border-none' : ''
              }`}
            >
              {/* Static sidebar block marker using Primary Green */}
              <div className="absolute top-0 left-0 w-[4px] h-full bg-[#41A61D] group-hover:bg-[#E36911] transition-colors duration-300"></div>

              <div className="md:col-span-3 flex items-center gap-4">
                {/* ID Counter highlighted cleanly using Primary Green #41A61D */}
                <span className="text-3xl font-black text-[#41A61D]/20 tracking-tight group-hover:text-[#E36911]/35 transition-colors duration-300">
                  {item.id}
                </span>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                    Step Phase
                  </span>
                  {/* Switched text token focus to Secondary Orange #E36911 for structural pop */}
                  <span className="inline-block text-[10px] font-bold uppercase text-[#E36911] bg-[#E36911]/10 border border-[#E36911]/20 px-2 py-0.5 rounded mt-1 w-max">
                    {item.tag}
                  </span>
                </div>
              </div>

              <div className="md:col-span-7 space-y-1">
                <h3 className="text-lg font-black text-white group-hover:text-[#41A61D] tracking-tight transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-[#8EA39A] text-xs sm:text-sm font-medium leading-relaxed pr-4">
                  {item.desc}
                </p>
              </div>

              <div className="md:col-span-2 flex items-center justify-start md:justify-end gap-3">
                {/* Icon wrapper optimized with crisp brand borders */}
                <div className="p-3 bg-[#12211C]/50 border border-[#2C4538] rounded-2xl shadow-inner group-hover:border-[#41A61D]/50 transition-colors duration-300">
                  <item.icon className="text-lg text-[#41A61D] group-hover:scale-110 transition-transform duration-300" />
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* FOLIAGE BASE BACKGROUND */}
      <div className="absolute bottom-0 left-0 w-full h-[250px] md:h-[350px] z-0 pointer-events-none opacity-[0.15] image-render-crisp">
        <Image 
          src="/img2.webp" 
          alt="Natural Base Foliage" 
          fill 
          quality={100}
          className="object-cover object-bottom scale-100" 
          unoptimized={true} 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D1713] via-transparent to-transparent opacity-90"></div>
      </div>

    </main>
  );
};

export default ServicesPage;
