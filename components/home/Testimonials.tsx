"use client";

import React, { useState, useRef } from 'react';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import { FiUser } from 'react-icons/fi';
import { motion } from 'framer-motion';

interface ReviewCardProps {
  review: {
    name: string;
    role: string;
    text: string;
    rating: number;
  };
  index: number;
}

// Encapsulated ReviewCard component to isolate hover, mouse coordinates, and spotlight animations
const ReviewCard = ({ review, index }: ReviewCardProps) => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  // Card staggered animation variant: snappier delay and smooth viewport reveal
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        delay: 0.3 + index * 0.15, // Sequential stagger timing
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1] // Premium smooth cubic bezier curve
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.35, ease: "easeOut" }} // Smooth easing transition, no bounce
      className="relative bg-[#16261F]/85 border border-[#2C4538] p-8 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.25)] flex flex-col justify-between overflow-hidden group cursor-default select-none hover:bg-[#1B2D25] hover:border-[#41A61D]/70 hover:shadow-[0_20px_40px_rgba(65,166,29,0.2)] transition-all duration-350"
    >
      {/* 1. Cursor Spotlight Glow Effect (Low opacity for glassmorphism subtlety) */}
      {isHovered && (
        <div 
          className="absolute inset-0 z-10 pointer-events-none opacity-25 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle 100px at ${coords.x}px ${coords.y}px, rgba(65, 166, 29, 0.15), transparent 80%)`
          }}
        />
      )}

      {/* 2. Typography/Icon content */}
      <div className="relative z-20">
        <div className="flex justify-between items-center mb-6">
          {/* Animated rating stars scale up slightly on hover */}
          <div className="flex text-yellow-400 gap-1 text-sm transition-transform duration-300 group-hover:scale-105">
            {[...Array(review.rating)].map((_, i) => <FaStar key={i} />)}
          </div>
          {/* Quote icon scales, rotates, and brightens up on card hover */}
          <FaQuoteLeft className="text-[#E36911]/10 text-3xl transition-all duration-300 group-hover:scale-115 group-hover:rotate-12 group-hover:text-[#E36911]/30" />
        </div>
        <p className="text-[#C6D1CC] text-sm sm:text-base leading-relaxed mb-6 font-medium tracking-wide italic">
          &ldquo;{review.text}&rdquo;
        </p>
      </div>
      
      {/* 3. Bottom profile panel with User Icon Avatar */}
      <div className="border-t border-[#2C4538] pt-4 mt-auto relative z-20 flex items-center gap-3.5">
        <div className="w-10 h-10 rounded-full bg-[#12211C] border border-[#2C4538] text-[#41A61D] flex items-center justify-center shadow-inner transition-all duration-300 group-hover:scale-105 group-hover:bg-[#41A61D]/10 group-hover:border-[#41A61D]/30 shrink-0">
          <FiUser className="text-lg" />
        </div>
        <div className="flex flex-col">
          <h4 className="text-white font-bold text-sm sm:text-base tracking-wide transition-colors duration-300 group-hover:text-white">{review.name}</h4>
          <p className="text-[#E36911] text-[10px] sm:text-xs font-semibold uppercase tracking-wider mt-0.5">{review.role}</p>
        </div>
      </div>
    </motion.div>
  );
};

const Testimonials = () => {
  const reviews = [
    {
      name: "Rajesh Kumar Sahu",
      role: "Commercial Farmer, Kanker",
      text: "Swarnim Agro ke Mahogany plantation model se meri khali padi zameen ab ek investment asset ban gayi hai. Inki team ki technical guidance kamaal ki hai.",
      rating: 5,
    },
    {
      name: "Dr. Alok Agrawal",
      role: "Agro Investor, Raipur",
      text: "Medicinal plants jaise Ashwagandha aur Turmeric ki market mein high demand hai. Swarnim Agro ke saath contract farming karna ek secure aur highly profitable deal sabit hua.",
      rating: 5,
    },
    {
      name: "Sukhram Mandavi",
      role: "Tribal Farmer, Bastar",
      text: "Pehle hum sirf paramparik kheti karte the jisme lagat bhi nahi nikalti thi. Ab herbal plantation se hamari aamdani har saal badh rahi hai. Kisan sach mein vyapari ban raha hai.",
      rating: 5,
    }
  ];

  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={sectionRef} id="testimonials" className="w-full bg-[#0D1713] pt-20 pb-24 relative overflow-hidden border-t border-[#2C4538]">
      
      {/* Grid Pattern Background - White dots for dark theme */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

      {/* Top ambient solid glow ring - Using Primary #41A61D */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-72 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#41A61D]/15 via-transparent to-transparent pointer-events-none z-10"></div>

      {/* Subtle Background Glow using Primary #41A61D */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-72 h-72 bg-[#41A61D]/5 rounded-full blur-[120px] pointer-events-none z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        
        {/* Section Header with Reveal Animations (Heading: 0.2s delay, Subtitle: 0.4s delay) */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-5xl font-black text-white mb-4 tracking-tight font-sans"
          >
            Trusted by <span className="text-[#41A61D] drop-shadow-[0_0_15px_rgba(65,166,29,0.3)]">Our Farmers & Investors</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-[#C6D1CC] text-base sm:text-lg font-medium"
          >
            Suniye unki kahani jo Swarnim Agro ke high-yield plantation models se judkar apne agricultural land ko ek scalable business mein badal chuke hain.
          </motion.p>
        </div>

        {/* Responsive grid layout - Individual ReviewCard components reveal sequentially */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <ReviewCard key={idx} review={review} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;