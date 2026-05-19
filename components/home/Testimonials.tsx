"use client";

import React from 'react';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

const Testimonials = () => {
  const reviews = [
    {
      name: "Rajesh Kumar Sahu",
      role: "Commercial Farmer, Kanker",
      text: "Bastarraj Agro ke Mahogany plantation model se meri khali padi zameen ab ek investment asset ban gayi hai. Inki team ki technical guidance kamaal ki hai.",
      rating: 5,
    },
    {
      name: "Dr. Alok Agrawal",
      role: "Agro Investor, Raipur",
      text: "Medicinal plants jaise Ashwagandha aur Turmeric ki market mein high demand hai. Bastarraj Agro ke saath contract farming karna ek secure aur highly profitable deal sabit hua.",
      rating: 5,
    },
    {
      name: "Sukhram Mandavi",
      role: "Tribal Farmer, Bastar",
      text: "Pehle hum sirf paramparik kheti karte the jisme lagat bhi nahi nikalti thi. Ab herbal plantation se hamari aamdani har saal badh rahi hai. Kisan sach mein vyapari ban raha hai.",
      rating: 5,
    }
  ];

  return (
    // Reverted to Light Theme (#FAFAFA) to match the unified layout
    <section className="w-full bg-[#FAFAFA] py-20 relative overflow-hidden border-t border-gray-100">
      
      {/* Subtle Background Glow using Primary #41A61D */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-72 h-72 bg-[#41A61D]/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Trusted by <span className="text-[#41A61D]">Our Farmers & Investors</span>
          </h2>
          <p className="text-gray-500 text-base sm:text-lg font-medium">
            Suniye unki kahani jo Bastarraj Agro ke high-yield plantation models se judkar apne agricultural land ko ek scalable business mein badal chuke hain.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            
            // LIGHT THEME CARD: Solid background, removed hover transition dependencies for mobile perfection
            <div 
              key={idx} 
              className="bg-white border border-gray-200 p-8 rounded-2xl shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-center mb-6">
                  <div className="flex text-yellow-400 gap-1 text-sm">
                    {[...Array(review.rating)].map((_, i) => <FaStar key={i} />)}
                  </div>
                  {/* Static quote icon with light secondary orange tint instead of dynamic hover */}
                  <FaQuoteLeft className="text-[#E36911]/10 text-3xl" />
                </div>
                {/* Text contrast fixed for light theme readability */}
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6 font-medium tracking-wide">
                  "{review.text}"
                </p>
              </div>
              
              <div className="border-t border-gray-100 pt-4 mt-auto">
                <h4 className="text-gray-900 font-bold text-base tracking-wide">{review.name}</h4>
                {/* Role highlighted in Secondary Orange #E36911 */}
                <p className="text-[#E36911] text-xs font-semibold uppercase tracking-wider mt-0.5">{review.role}</p>
              </div>
            </div>
            
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;