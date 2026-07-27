"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Sprout, Trees, Users, TrendingUp, Smile, Heart, Leaf } from 'lucide-react';
import { motion, useInView, animate } from 'framer-motion';

// Custom HandHoldingSprout SVG Icon Component to match Card 3 in the reference image
const HandHoldingSproutIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Hand outline palm-up */}
      <path d="M18 11h-3.5a2 2 0 0 0-2 2v3a2 2 0 0 1-2 2H6.5a3 3 0 0 1-3-3V11a3 3 0 0 1 3-3h2.5" />
      {/* Sprout stem */}
      <path d="M10 11V6a2 2 0 0 1 2-2h1.5" />
      {/* Left Leaf */}
      <path d="M10.5 8c0-1 1-1.5 2-1.5s1.5.5 1.5 1.5-1 1-2 1c-1 0-1.5-.5-1.5-1Z" />
      {/* Right Leaf */}
      <path d="M13.5 6c0-1.5 1.5-2 3-2s2 1 2 2-1 1.5-3 1.5c-1.5 0-2-.5-2-1.5Z" />
    </svg>
  );
};

// CountUp sub-component to animate stats values upon entering viewport
const CountUpNumber = ({ value }: { value: string }) => {
  const [displayValue, setDisplayValue] = useState("0");
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    const numMatch = value.match(/^([0-9.]+)(.*)$/);
    if (!numMatch) {
      const timer = setTimeout(() => {
        setDisplayValue(value);
      }, 0);
      return () => clearTimeout(timer);
    }

    const targetNum = parseFloat(numMatch[1]);
    const suffix = numMatch[2];

    const controls = animate(0, targetNum, {
      duration: 1.8,
      ease: [0.16, 1, 0.3, 1], // Smooth easing curve
      onUpdate: (latest) => {
        const formatted = targetNum % 1 !== 0 
          ? latest.toFixed(1) 
          : Math.floor(latest).toString();
        setDisplayValue(formatted + suffix);
      }
    });

    return () => controls.stop();
  }, [value, isInView]);

  return <span ref={ref}>{displayValue}</span>;
};

interface StatCardProps {
  stat: {
    id: number;
    value: string;
    label: string;
    description: string;
    icon: React.ComponentType<{ className?: string }>;
    subIcon: React.ComponentType<{ className?: string }>;
    subMetric: string;
  };
  index: number;
}

const StatCard = ({ stat, index }: StatCardProps) => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        delay: 0.2 + index * 0.12, 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      // FIX LINE ISSUE & SIMPLICITY: Applied consistent border-emerald-500/20, top reflection line, and rich glassmorphic texture
      className="relative h-[390px] rounded-[2rem] bg-gradient-to-b from-[#112d20]/85 via-[#0c1d15]/95 to-[#060c09]/98 backdrop-blur-xl border border-emerald-500/20 border-t-white/20 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] overflow-hidden group cursor-default select-none w-full hover:border-emerald-400/50 hover:shadow-[0_30px_60px_-10px_rgba(16,185,129,0.25)] transition-all duration-300"
    >
      {/* 1. Permanent Ambient Green Inner Glow behind the icon to remove blankness */}
      <div className="absolute top-0 left-0 right-0 h-44 bg-[radial-gradient(circle_at_50%_25%,rgba(16,185,129,0.12)_0%,transparent_60%)] pointer-events-none z-10" />

      {/* 2. Interactive Spotlight Follow Glow */}
      {isHovered && (
        <div 
          className="absolute inset-0 z-10 pointer-events-none opacity-25 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle 120px at ${coords.x}px ${coords.y}px, rgba(16, 185, 129, 0.25), transparent 80%)`
          }}
        />
      )}

      {/* 3. Content Alignment Container */}
      <div className="relative z-20 flex flex-col items-center text-center justify-between h-full p-8 select-none">
        
        {/* Glowing Icon Frame */}
        <div className="relative mt-2 shrink-0">
          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 4 + (index % 2), repeat: Infinity, ease: "easeInOut", repeatType: "reverse" }}
            // IMPROVED: Added bright green border, backing shadow, and active hover text colors
            className="relative z-20 flex items-center justify-center w-16 h-16 rounded-full bg-emerald-950/45 border border-emerald-500/30 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.15)] transition-all duration-300 group-hover:scale-110 group-hover:border-emerald-400/60 group-hover:text-emerald-200 group-hover:shadow-[0_0_25px_rgba(16,185,129,0.35)]"
          >
            <stat.icon className="w-7 h-7" />
          </motion.div>
        </div>

        {/* Text Details */}
        <div className="flex flex-col items-center w-full mt-4 flex-grow">
          {/* Number - Added green drop glow to match reference image */}
          <div className="text-4xl font-extrabold text-white tracking-tighter drop-shadow-[0_2px_8px_rgba(16,185,129,0.3)] transition-all duration-300 group-hover:brightness-125 mb-1">
            <CountUpNumber value={stat.value} />
          </div>
          
          {/* Label */}
          <div className="text-lg font-bold text-white tracking-tight mb-1.5">
            {stat.label}
          </div>
          
          {/* Description - Made brighter and more visible */}
          <div className="text-xs text-gray-300/85 leading-relaxed max-w-[210px] font-medium">
            {stat.description}
          </div>
        </div>

        {/* Secondary Metric Pill - Mapped exactly to reference image style */}
        <div className="w-full flex justify-center mt-5 shrink-0">
          <div className="inline-flex items-center gap-1.5 py-1.5 px-4 rounded-full bg-emerald-950/50 border border-emerald-500/30 text-emerald-300 text-xs font-semibold shadow-[0_4px_12px_rgba(0,0,0,0.3)] transition-all duration-300 group-hover:bg-emerald-900/30 group-hover:border-emerald-400/50 group-hover:text-emerald-200">
            <stat.subIcon className="w-3.5 h-3.5" />
            <span>{stat.subMetric}</span>
          </div>
        </div>

      </div>
    </motion.div>
  );
};

const KeyStats = () => {
  // Data structure mapped directly to the reference image
  const stats = [
    { 
      id: 1, 
      value: '500+', 
      label: 'Acres Managed', 
      description: 'Across high potential regions', 
      icon: Sprout, 
      subIcon: TrendingUp,
      subMetric: '+35 Acres This Quarter' 
    },
    { 
      id: 2, 
      value: '1000+', 
      label: 'Plants Delivered', 
      description: 'To farmers & partners', 
      icon: Trees, 
      subIcon: Users,
      subMetric: '+120 This Month' 
    },
    { 
      id: 3, 
      value: '500+', 
      label: 'Happy Farmers', 
      description: 'Growing with us', 
      icon: HandHoldingSproutIcon, 
      subIcon: Smile,
      subMetric: '+45 This Month' 
    },
    { 
      id: 4, 
      value: '2.5L+', 
      label: 'Lives Impacted', 
      description: 'Through sustainable initiatives', 
      icon: Users, 
      subIcon: Heart,
      subMetric: '+18K This Year' 
    },
  ];

  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section 
      ref={sectionRef} 
      id="stats" 
      className="w-full bg-[#0D1713] bg-cover bg-center bg-no-repeat pt-24 pb-32 relative overflow-hidden m-0"
      style={{ backgroundImage: "url('/hero-landscape-bg.webp')" }}
    >
      {/* 1. Multi-stop Gradient overlay: Adjusted opacity to let the lush green plantation field show clearly in the middle/bottom */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D1713] via-[#0D1713]/75 via-[#0A1510]/15 via-[#0D1713]/80 to-[#0D1713] z-10 pointer-events-none" />

      {/* 2. Ambient Sun Flare Light Rays Overlay from top-left */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-[radial-gradient(circle_at_10%_10%,rgba(255,253,230,0.08),transparent_40%)]" />

      {/* 3. Subtle ambient blurred glows inside the section depth */}
      <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none z-10" />

      {/* 4. Slow-floating blurred green leaf particles on the sides */}
      <motion.div
        animate={{ y: [0, -12, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[3%] top-[20%] text-emerald-500/20 text-4xl blur-[1.5px] pointer-events-none z-15 hidden md:block"
      >
        <Leaf className="fill-emerald-500/10 rotate-[-15deg]" />
      </motion.div>
      <motion.div
        animate={{ y: [0, 8, 0], rotate: [0, -8, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[1.5%] top-[50%] text-emerald-500/25 text-6xl blur-[2.5px] pointer-events-none z-15 hidden md:block"
      >
        <Leaf className="fill-emerald-500/15 rotate-[25deg]" />
      </motion.div>
      <motion.div
        animate={{ y: [0, -10, 0], rotate: [0, 6, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[2.5%] top-[35%] text-emerald-500/20 text-5xl blur-[2px] pointer-events-none z-15 hidden md:block"
      >
        <Leaf className="fill-emerald-500/10 rotate-[30deg]" />
      </motion.div>
      <motion.div
        animate={{ y: [0, 6, 0], rotate: [0, -12, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[4%] bottom-[20%] text-emerald-500/15 text-4xl blur-[1px] pointer-events-none z-15 hidden md:block"
      >
        <Leaf className="fill-emerald-500/5 rotate-[-45deg]" />
      </motion.div>

      {/* Main Content Container */}
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 relative z-20 mt-2">
        
        {/* Section Header */}
        <div className="text-center mb-20 relative">
          
          {/* Header Subtitle decoration */}
          <div className="inline-flex items-center justify-center gap-3 text-emerald-400 text-xs font-bold tracking-widest uppercase mb-4">
            <span className="w-12 h-[1px] bg-emerald-500/20"></span>
            <span className="flex items-center gap-2">
              <Leaf className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400/20 rotate-[-45deg]" />
              OUR SCALE & IMPACT
              <Leaf className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400/20 rotate-[45deg]" />
            </span>
            <span className="w-12 h-[1px] bg-emerald-500/20"></span>
          </div>

          {/* Elegant Editorial Serif Title */}
          <h2 className="text-3xl md:text-5xl font-serif text-white tracking-tight mb-4 leading-tight">
            Growing Today. Greener Tomorrow.
          </h2>

          {/* Description */}
          <p className="mt-4 text-sm md:text-base text-emerald-100/70 font-medium tracking-wide max-w-2xl mx-auto leading-relaxed">
            Building a sustainable future through responsible plantation,<br className="hidden sm:inline" /> innovation and long-term impact.
          </p>
        </div>
        
        {/* Staggered Grid of Glassmorphic Cards */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <StatCard key={stat.id} stat={stat} index={index} />
          ))}
        </motion.div>

        {/* Centered Brand Pill Container */}
        <div className="w-full flex justify-center mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-[#11241a]/60 backdrop-blur-xl border border-white/[0.08] shadow-2xl z-20"
          >
            {/* Dark green circular icon container */}
            <div className="w-7 h-7 rounded-full bg-emerald-950/80 border border-emerald-800/40 flex items-center justify-center text-emerald-400 shadow-inner">
              <Leaf className="w-3.5 h-3.5" />
            </div>
            {/* Brand text */}
            <span className="text-xs md:text-sm font-medium text-emerald-100/90 tracking-wide select-none">
              Rooted in Nature. Committed to Generations.
            </span>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default KeyStats;