"use client";

import React from 'react';
import Image from 'next/image';
import { FaWhatsapp } from 'react-icons/fa';
import { FiShoppingBag, FiLayers } from 'react-icons/fi';
import { motion } from 'framer-motion';

const ProductInventory = () => {
  // Inventory catalog data structure using your exact local .webp assets
  const products = [
    { 
      id: 1, 
      name: 'Mahogany (महोगनी)', 
      category: 'Commercial Timber', 
      image: '/plants/mahogni.webp' 
    },
    { 
      id: 2, 
      name: 'Malabar Neem (मालाबार नीम)', 
      category: 'Commercial Timber', 
      image: '/plants/neem.webp' 
    },
    { 
      id: 3, 
      name: 'Ashwagandha (अश्वगंधा)', 
      category: 'Medicinal Plant', 
      image: '/plants/aswgandha.webp' 
    },
    { 
      id: 4, 
      name: 'Black Turmeric (काली हल्दी)', 
      category: 'Medicinal Plant', 
      image: '/plants/turmaric.webp' 
    },
  ];

  // Professional real-time conversion text string builder
  const getWhatsAppLink = (productName: string, category: string) => {
    const phoneNumber = "919301381805"; // Updated to primary desk contact
    
    const rawMessage = `🌱 *Swarnim Agro - New Plant Inquiry*\n` +
                       `--------------------------------------\n` +
                       `• *Plant Species:* ${productName}\n` +
                       `• *Category:* ${category}\n` +
                       `• *Status:* Looking for Certified Saplings\n\n` +
                       `*Hi, I am looking to plant this on my farm. Please guide me on booking process, pricing, and logistical support details.*`;
                       
    const message = encodeURIComponent(rawMessage);
    return `https://wa.me/${phoneNumber}?text=${message}`;
  };

  // Card staggered animation variant
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 + index * 0.15, // Sequential delay per card
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    })
  };

  return (
    // Unified premium canvas layout running crisp responsive boundaries (Dark Theme)
    <section id="inventory" className="w-full pt-16 pb-20 relative overflow-hidden m-0 border-t border-[#2C4538]">
      
      {/* Premium Agriculture Background Image with Slow Zoom */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          initial={{ scale: 1.0 }}
          animate={{ scale: 1.06 }}
          transition={{
            duration: 24,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="w-full h-full relative"
        >
          <Image
            src="/hero-landscape-bg.webp"
            alt="Foliage Forestry Land"
            fill
            className="object-cover object-center pointer-events-none select-none"
            quality={90}
            unoptimized={true}
          />
        </motion.div>
        {/* Dark Premium Gradient Overlay - seamless transition using secondary background token #12211C */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(18, 33, 28, 0.88), rgba(18, 33, 28, 0.96))'
          }}
        />
      </div>

      {/* Background Micro Tech Grid Effect - Fixed to white dots for crispness */}
      <div className="absolute inset-0 z-10 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          {/* Using custom Primary Green #41A61D */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#41A61D]/10 border border-[#41A61D]/20 text-[#41A61D] text-xs font-bold tracking-widest uppercase mb-3 shadow-sm"
          >
            <FiShoppingBag className="animate-pulse" /> Certified Stock
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl md:text-5xl font-black text-white tracking-tight font-sans"
          >
            Plant Inventory <span className="text-[#E36911] drop-shadow-[0_0_15px_rgba(227,105,17,0.3)]">& Booking</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 text-base md:text-lg text-[#C6D1CC] font-medium max-w-xl mx-auto"
          >
            Browse our premium certified seeds and saplings. Order directly via automated WhatsApp channels.
          </motion.p>
        </div>

        {/* RESPONSIVE GRID MATRIX: Mobile swipe wrapper / Tablet & Desktop fixed layout */}
        <div className="flex overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 pb-6 md:pb-0 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden px-2 sm:px-0">
          {products.map((product, index) => (
            
            // ULTRA PREM CARD SPECIFICATION
            <motion.div 
              key={product.id}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="min-w-[82%] sm:min-w-[46%] md:min-w-0 snap-center bg-[#16261F]/30 backdrop-blur-md rounded-[2rem] border border-[#2C4538]/50 shadow-[0_10px_40px_rgba(0,0,0,0.3)] overflow-hidden flex flex-col justify-between group hover:bg-[#1B2D25]/40 hover:border-[#41A61D]/70 hover:shadow-[0_15px_30px_rgba(65,166,29,0.25)] transition-all duration-350"
            >
              
              {/* Image Viewport Frame */}
              <div className="h-60 w-full relative overflow-hidden bg-gray-900 shrink-0">
                <Image 
                  src={product.image}
                  alt={product.name}
                  fill
                  quality={95} // High quality threshold definition
                  className="object-cover transition-transform duration-500 group-hover:scale-105" 
                  priority={true}
                  unoptimized={true} // Bypasses local development compression drops
                />
                
                {/* Floating Glassmorphism Category Badge - Icon color uses Primary #41A61D */}
                <div className="absolute top-4 left-4 bg-[#16261F]/90 backdrop-blur-md border border-[#2C4538] px-3 py-1 rounded-full text-[10px] font-black text-white tracking-wider uppercase shadow-sm flex items-center gap-1.5 z-20">
                  <FiLayers className="text-[#41A61D] w-3 h-3 animate-pulse" /> {product.category}
                </div>

                {/* Soft bottom vignette gradient for depth scale contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-90 z-10"></div>
              </div>
              
              {/* Details & Interactive CTA Area */}
              <div className="p-6 flex flex-col justify-between flex-grow bg-transparent">
                <div>
                  <h3 className="text-lg sm:text-xl font-black text-white tracking-tight mb-6 min-h-[56px] flex items-center group-hover:text-[#41A61D] transition-colors duration-300">
                    {product.name}
                  </h3>
                </div>
                
                {/* AUTOMATED WHATSAPP REDIRECT TRIGGER - Solid Color, Active Feedback only */}
                <a 
                  href={getWhatsAppLink(product.name, product.category)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2.5 bg-[#41A61D] hover:bg-[#348c15] text-white py-3.5 px-4 rounded-2xl font-bold text-sm shadow-[0_4px_15px_rgba(65,166,29,0.3)] hover:shadow-[0_4px_15px_rgba(65,166,29,0.5)] active:scale-95 transition-all duration-200 text-center cursor-pointer animate-none"
                >
                  <FaWhatsapp className="text-xl" />
                  <span>Order via WhatsApp</span>
                </a>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProductInventory;