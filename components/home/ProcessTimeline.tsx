"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { FiMapPin, FiActivity, FiLayout, FiDroplet, FiFileText, FiTruck } from 'react-icons/fi';
import { FaLeaf } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const ProcessTimeline = () => {
  // Active step state to track and display corresponding phase image
  const [activeStep, setActiveStep] = useState(1);
  const timelineRef = useRef<HTMLDivElement>(null);

  // Step-by-step agricultural workflow configuration (100% Exact, Content and descriptions preserved)
  const steps = [
    {
      id: 1,
      title: 'Land Inspection',
      desc: 'Expert assessment of topography & soil condition.',
      icon: FiMapPin,
      image: '/process/land-inspection.webp'
    },
    {
      id: 2,
      title: 'Soil Testing',
      desc: 'Deep analysis of nutrients and pH levels.',
      icon: FiActivity,
      image: '/process/soil-testing.webp'
    },
    {
      id: 3,
      title: 'Plantation Plan',
      desc: 'Customized commercial crop layout design.',
      icon: FiLayout,
      image: '/process/plantation-plan.webp'
    },
    {
      id: 4,
      title: 'Irrigation Setup',
      desc: 'Advanced fencing & water management systems.',
      icon: FiDroplet,
      image: '/process/irrigation-setup.webp'
    },
    {
      id: 5,
      title: 'Legal Agreement',
      desc: 'Notarized buy-back & lifetime service terms.',
      icon: FiFileText,
      image: '/process/legal-agreement.webp'
    },
    {
      id: 6,
      title: 'Plant Delivery',
      desc: 'Healthy, certified saplings delivered to site.',
      icon: FiTruck,
      image: '/process/plant-delivery.webp'
    },
  ];

  // Set up IntersectionObserver to automatically update active step based on scroll position
  useEffect(() => {
    const observerOptions = {
      root: null, // observe relative to document viewport
      rootMargin: '-35% 0px -35% 0px', // trigger when step is in the middle 30% of the screen
      threshold: 0.1,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = parseInt(entry.target.getAttribute('data-step-id') || '1');
          setActiveStep(id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const stepElements = timelineRef.current?.querySelectorAll('[data-step-id]');

    stepElements?.forEach((el) => observer.observe(el));

    return () => {
      stepElements?.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, []);

  // Fix sticky positioning by replacing overflow-x-hidden on the parent <main> with overflow-x-clip
  useEffect(() => {
    const mainEl = timelineRef.current?.closest('main');
    if (mainEl && mainEl.classList.contains('overflow-x-hidden')) {
      mainEl.classList.remove('overflow-x-hidden');
      mainEl.classList.add('overflow-x-clip');
    }
  }, []);

  // Framer Motion variants for premium slide transition on active image changes
  const slideVariants = {
    enter: {
      opacity: 0,
      x: 50
    },
    center: {
      opacity: 1,
      x: 0,
      transition: {
        x: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
        opacity: { duration: 0.7, ease: "easeOut" }
      }
    },
    exit: {
      opacity: 0,
      x: -50,
      transition: {
        x: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
        opacity: { duration: 0.7, ease: "easeIn" }
      }
    }
  };

  // Section header reveal animation variant
  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  // Timeline card entrance reveal and state transition variant
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom: { index: number; isActive: boolean; isCompleted: boolean }) => ({
      y: 0,
      opacity: custom.isActive ? 1.0 : custom.isCompleted ? 0.9 : 0.3,
      scale: custom.isActive ? 1.02 : 1.0,
      transition: {
        y: { duration: 0.6, ease: "easeOut" },
        opacity: { duration: 0.6, ease: "easeOut" },
        scale: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
      }
    })
  };

  return (
    // Changed overflow-hidden to overflow-visible and relative to enable CSS position: sticky
    <section className="relative w-full bg-[#0D1713] pt-28 pb-32 m-0">

      {/* Background wrapper with relative positioning for absolute children */}
      <div className="absolute inset-0 z-0 pointer-events-none">

        {/* 1. Large Ambient Blurred Radial Background Gradients (Green Left, Orange Right - Very Low Opacity) */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 overflow-hidden pointer-events-none"
        >
          <div className="absolute top-[20%] left-[-10%] w-[50%] h-[65%] rounded-full bg-[#41A61D]/6 blur-[130px]" />
          <div className="absolute bottom-[20%] right-[-10%] w-[50%] h-[65%] rounded-full bg-[#E36911]/4 blur-[130px]" />
        </motion.div>

        {/* 2. Floating Background Botanical Elements (Slow infinite loop sways) */}
        <motion.div
          animate={{ y: [0, -10, 0], rotate: [0, 8, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-[5%] text-white/[0.02] text-7xl pointer-events-none hidden lg:block z-0"
        >
          <FaLeaf />
        </motion.div>
        <motion.div
          animate={{ y: [0, 10, 0], rotate: [0, -8, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 left-[5%] text-white/[0.02] text-7xl pointer-events-none hidden lg:block z-0"
        >
          <FaLeaf />
        </motion.div>

        {/* Dynamic Background Grid Lines (White for Dark Theme) */}
        <div className="absolute inset-0 z-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

        {/* Top ambient solid glow ring - Using Primary #41A61D */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-72 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#41A61D]/15 via-transparent to-transparent pointer-events-none z-0"></div>

      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header with Reveal Animation */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-24 md:mb-32 relative"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#41A61D]/10 border border-[#41A61D]/20 text-[#41A61D] text-xs font-bold tracking-widest uppercase mb-3 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#41A61D] animate-ping"></span>
            Interactive Roadmap
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight font-sans">
            Our Working <span className="text-[#41A61D] drop-shadow-[0_0_15px_rgba(65,166,29,0.3)]">Process</span>
          </h2>
          <p className="mt-4 text-base text-[#C6D1CC] font-medium max-w-xl mx-auto hidden sm:block">
            A seamless 6-step journey from barren land to profitable plantation.
          </p>
        </motion.div>

        {/* Dynamic Split Screen Layout (Left: 40% Sticky Image, Right: 60% Scroll Timeline) */}
       <div className="flex flex-col lg:flex-row gap-12 items-start w-full">
          {/* Left side: Dynamic sticky image showcase (48% on desktop, stacks above on mobile) */}
          <div className="w-full lg:w-[48%] lg:sticky lg:top-[130px] lg:self-start flex-shrink-0 lg:h-[500px] lg:max-h-[500px] aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto rounded-[2.5rem] p-4 bg-[#16261F]/40 border border-[#2C4538] shadow-[0_10px_40px_rgba(0,0,0,0.25)] backdrop-blur-md overflow-hidden z-10">
            <AnimatePresence mode="popLayout">
              {steps.map((step) => {
                if (activeStep !== step.id) return null;
                return (
                  <motion.div
                    key={step.id}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="absolute inset-4 rounded-[2rem] overflow-hidden"
                  >
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      className="object-cover object-center"
                      priority={step.id === 1}
                      unoptimized={true}
                    />

                    {/* Dark vignette overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 pointer-events-none"></div>

                    {/* Step badge pill overlay */}
                    <div className="absolute bottom-6 left-6 z-20 bg-[#16261F]/90 backdrop-blur-md border border-[#2C4538] px-4 py-2 rounded-full flex items-center gap-2">
                      <span className="text-[#41A61D] font-extrabold text-sm">Phase 0{step.id}</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-white/40"></span>
                      <span className="text-white text-xs font-bold">{step.title}</span>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Right side: Process timeline panel (52% on desktop) */}
          <div ref={timelineRef} className="w-full lg:w-[52%] flex flex-col justify-start">

            <div className="relative w-full pl-1">

              {/* Vertical connection connector line wrapper (Starts at top Node center, ends at bottom Node center) */}
              <div className="absolute top-[60px] bottom-[102px] left-[52px] w-[2px] z-0">
                {/* Grey Background Line */}
                <div className="absolute inset-0 bg-[#2C4538]"></div>
                {/* Green Animated Progress Line */}
                <motion.div
                  animate={{ height: `${(activeStep - 1) * 20}%` }}
                  transition={{ type: "spring", stiffness: 100, damping: 20, mass: 0.8 }}
                  className="absolute top-0 left-0 w-full bg-[#41A61D] origin-top shadow-[0_0_10px_rgba(65,166,29,0.6)]"
                />
              </div>

              <div className="flex flex-col gap-12 relative z-10 py-4">
                {steps.map((step, index) => {
                  const isActive = activeStep === step.id;
                  const isCompleted = activeStep > step.id;
                  const isFuture = activeStep < step.id;
                  return (
                    <motion.div
                      key={step.id}
                      data-step-id={step.id}
                      custom={{ index, isActive, isCompleted }}
                      variants={cardVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: "-100px" }}
                      whileHover={{ y: -8, transition: { duration: 0.3 } }}
                      onMouseEnter={() => setActiveStep(step.id)}
                      onClick={() => setActiveStep(step.id)}
                      className={`relative flex items-start cursor-pointer group select-none transition-all duration-300 min-h-[130px] p-3.5 rounded-2xl border ${isActive
                        ? 'bg-[#16261F] border-[#41A61D] shadow-[0_10px_35px_rgba(65,166,29,0.25)] hover:border-[#41A61D]/90 hover:shadow-[0_15px_40px_rgba(65,166,29,0.4)] z-20'
                        : 'bg-[#16261F] border-[#2C4538] shadow-[0_10px_40px_rgba(0,0,0,0.25)] hover:bg-[#1B2D25] hover:border-[#41A61D]/50 hover:shadow-[0_10px_30px_rgba(65,166,29,0.2)]'
                        }`}
                    >
                      {/* Node indicator */}
                      <div className="flex-shrink-0 flex flex-col items-center mr-6">
                        <div className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 z-10 relative ${isActive
                          ? 'bg-[#0d1411] border-2 border-[#41A61D] text-[#41A61D] shadow-[0_0_20px_rgba(65,166,29,0.5)] scale-110'
                          : isCompleted
                            ? 'bg-[#0d1411] border-2 border-[#41A61D] text-[#41A61D]'
                            : 'bg-[#12211C] border border-[#2C4538] text-[#8EA39A] group-hover:border-[#41A61D]/30'
                          }`}>
                          <step.icon className={`text-2xl font-black transition-transform duration-300 ${isActive ? 'scale-110 rotate-6' : 'group-hover:rotate-5'
                            }`} />
                        </div>
                      </div>

                      {/* Step details */}
                      <div className="flex flex-col pt-1.5 pb-2 transition-all duration-300">
                        <span className={`text-[10px] font-black tracking-widest uppercase mb-1 transition-colors duration-300 ${isActive ? 'text-[#E36911]' : 'text-[#C6D1CC]'
                          }`}>
                          Phase 0{step.id}
                        </span>
                        <h3 className={`text-lg font-black tracking-tight mb-1 transition-colors duration-300 ${isActive ? 'text-[#41A61D]' : 'text-white group-hover:text-[#41A61D]'
                          }`}>
                          {step.title}
                        </h3>
                        <p className={`text-xs sm:text-sm font-semibold leading-relaxed max-w-xs transition-colors duration-300 ${isActive ? 'text-white' : 'text-[#C6D1CC]'
                          }`}>
                          {step.desc}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

            </div>
          </div>

        </div>

      </div>

    </section>
  );
};

export default ProcessTimeline;