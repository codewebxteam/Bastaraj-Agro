"use client";

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, ChevronLeft, ChevronRight } from 'lucide-react';

const mediaItems = [
  { id: 1, type: 'video', src: '/videos/testimonial-1.mp4', title: 'Farmer Feedback 1' },
  { id: 2, type: 'video', src: '/videos/testimonial-2.mp4', title: 'Plantation Review' },
  { id: 3, type: 'video', src: '/videos/testimonial-3.mp4', title: 'Growth Results' },
  { id: 4, type: 'video', src: '/videos/testimonial-4.mp4', title: 'Yield Testimonial' },
];

const GallerySection = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  // Close video modal on Escape key
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveVideo(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section id="gallery" className="w-full bg-[#0D1713] py-24 relative overflow-hidden border-t border-[#2C4538]">
      
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#41A61D]/5 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#41A61D]/10 text-[#41A61D] text-xs font-bold uppercase tracking-wider mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#41A61D] animate-ping"></span>
            Video Testimonials
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight font-sans">
            Hear From Our <span className="text-[#41A61D] drop-shadow-[0_0_15px_rgba(65,166,29,0.3)]">Farmers</span>
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative group flex items-center justify-center">
          
          {/* Left Arrow (Cut Mark) */}
          <button 
            onClick={scrollLeft}
            className="absolute -left-2 md:-left-6 z-20 w-12 h-12 flex items-center justify-center rounded-full bg-[#16261F] border border-[#41A61D]/50 text-[#41A61D] hover:bg-[#41A61D] hover:text-white transition-all shadow-[0_0_20px_rgba(0,0,0,0.8)] focus:outline-none hidden md:flex"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          {/* Scrolling Area */}
          <div 
            ref={carouselRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory py-4 px-4 md:px-8 w-full max-w-full"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <style jsx>{`
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            
            {mediaItems.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="relative w-[180px] sm:w-[220px] md:w-[280px] aspect-[9/16] snap-center rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#2C4538] bg-[#12211C] group/card shrink-0"
                onClick={() => setActiveVideo(item.src)}
              >
                {/* Vertical Video Background */}
                <video
                  src={`${item.src}#t=0.1`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-105"
                  muted
                  playsInline
                  preload="metadata"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1713] via-[#0D1713]/20 to-transparent opacity-90 group-hover/card:opacity-100 transition-opacity"></div>

                {/* Video Play Icon Indicator */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 group-hover/card:bg-[#41A61D]/90 group-hover/card:border-[#41A61D] transition-all duration-300 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                    <Play className="w-6 h-6 text-white ml-1 fill-white" />
                  </div>
                </div>

                {/* Title Tag */}
                <div className="absolute bottom-0 left-0 p-4 md:p-6 w-full text-center">
                  <h3 className="text-white font-black text-sm md:text-lg drop-shadow-md">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Arrow (Cut Mark) */}
          <button 
            onClick={scrollRight}
            className="absolute -right-2 md:-right-6 z-20 w-12 h-12 flex items-center justify-center rounded-full bg-[#16261F] border border-[#41A61D]/50 text-[#41A61D] hover:bg-[#41A61D] hover:text-white transition-all shadow-[0_0_20px_rgba(0,0,0,0.8)] focus:outline-none hidden md:flex"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>
      </div>

      {/* Fullscreen Vertical Video Modal */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 md:p-8"
            onClick={() => setActiveVideo(null)}
          >
            {/* Cut / Close Button */}
            <button 
              className="absolute top-6 right-6 z-[110] p-3 bg-[#16261F] hover:bg-red-600 rounded-full text-white transition-colors border border-white/20 shadow-lg"
              onClick={() => setActiveVideo(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-[400px] aspect-[9/16] bg-black rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)] border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <video 
                src={activeVideo} 
                controls 
                autoPlay 
                playsInline
                className="w-full h-full object-contain"
              >
                Your browser does not support the video tag.
              </video>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default GallerySection;
