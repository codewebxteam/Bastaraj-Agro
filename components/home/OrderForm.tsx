"use client";

import React, { useState } from 'react';
import { FiUser, FiPhone, FiMapPin, FiTrendingUp, FiSend } from 'react-icons/fi';

const OrderForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    acreage: '1-2 Acres',
    plantType: 'Mahogany (Commercial)'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct dynamic professional WhatsApp payload string for immediate lead conversion
    const rawMessage = `🌿 *Bastarraj Agro - New Booking Inquiry*\n` +
                       `--------------------------------------\n` +
                       `👤 *Name:* ${formData.name}\n` +
                       `📞 *Phone:* ${formData.phone}\n` +
                       `📍 *Location:* ${formData.location}\n` +
                       `📐 *Land Area:* ${formData.acreage}\n` +
                       `🌱 *Plant Selection:* ${formData.plantType}\n\n` +
                       `*नमस्ते, मैंने लीड फॉर्म भरा है। कृपया हमारी ज़मीन के लिए बुकिंग स्लॉट और कंसल्टेशन शेड्यूल करें।*`;
    
    const whatsappUrl = `https://wa.me/917999618106?text=${encodeURIComponent(rawMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    // Base layout remains FAFAFA light theme
    <section className="w-full bg-[#FAFAFA] py-20 relative overflow-hidden border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Info Side (5 Columns) */}
          <div className="lg:col-span-5 text-center lg:text-left">
            {/* Primary Green Pill */}
            <span className="text-xs font-black tracking-widest text-[#41A61D] uppercase bg-[#41A61D]/10 px-4 py-1.5 rounded-full inline-block mb-4 border border-[#41A61D]/20">
              Start Your Journey
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-6 tracking-tight leading-tight">
              अपनी ज़मीन बुक करें, <br/>
              {/* Secondary Orange Focus Text */}
              <span className="text-[#E36911]">मुनाफे की नींव रखें!</span>
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6 font-medium">
              Form bharein aur hamare plantation experts se free consultation call schedule karein। Hum aapki soil, paani aur budget ke anusar sabse best high-yield commercial ya medicinal tree guide karenge.
            </p>
            <div className="hidden lg:block space-y-3">
              <div className="flex items-center gap-3 text-sm font-bold text-gray-700">
                <div className="w-2 h-2 rounded-full bg-[#41A61D]"></div> Free Soil Verification Support
              </div>
              <div className="flex items-center gap-3 text-sm font-bold text-gray-700">
                <div className="w-2 h-2 rounded-full bg-[#41A61D]"></div> 100% Buyback Agreement Safety
              </div>
            </div>
          </div>

          {/* Form Card Side (7 Columns) */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-gray-200 shadow-xl rounded-3xl p-6 sm:p-10 max-w-2xl mx-auto">
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-black text-gray-500 uppercase tracking-wider mb-2">Aapka Naam (Full Name)</label>
                  <div className="relative">
                    <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
                    <input 
                      type="text" 
                      required
                      placeholder="e.g., Rajesh Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-12 pr-4 py-3.5 text-sm font-bold text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#41A61D] focus:bg-white transition-all"
                    />
                  </div>
                </div>

                {/* Grid for Phone & Location */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-black text-gray-500 uppercase tracking-wider mb-2">Mobile Number</label>
                    <div className="relative">
                      <FiPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
                      <input 
                        type="tel" 
                        required
                        placeholder="e.g., 98765xxxxx"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-12 pr-4 py-3.5 text-sm font-bold text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#41A61D] focus:bg-white transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-black text-gray-500 uppercase tracking-wider mb-2">Aapka Shahar / Rajya</label>
                    <div className="relative">
                      <FiMapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
                      <input 
                        type="text" 
                        required
                        placeholder="e.g., Kanker, CG"
                        value={formData.location}
                        onChange={(e) => setFormData({...formData, location: e.target.value})}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-12 pr-4 py-3.5 text-sm font-bold text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#41A61D] focus:bg-white transition-all"
                      />
                    </div>
                  </div>
                </div>

                {/* Grid for Dropdowns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-black text-gray-500 uppercase tracking-wider mb-2">Kul Zameen (Total Acreage)</label>
                    <div className="relative">
                      <FiTrendingUp className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
                      <select 
                        value={formData.acreage}
                        onChange={(e) => setFormData({...formData, acreage: e.target.value})}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-12 pr-4 py-3.5 text-sm font-bold text-gray-900 focus:outline-none focus:border-[#41A61D] focus:bg-white transition-all appearance-none cursor-pointer"
                      >
                        <option>Less than 1 Acre</option>
                        <option>1-2 Acres</option>
                        <option>3-5 Acres</option>
                        <option>More than 5 Acres</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-black text-gray-500 uppercase tracking-wider mb-2">Kisme Interest Hai?</label>
                    <div className="relative">
                      <FiSend className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
                      <select 
                        value={formData.plantType}
                        onChange={(e) => setFormData({...formData, plantType: e.target.value})}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-12 pr-4 py-3.5 text-sm font-bold text-gray-900 focus:outline-none focus:border-[#41A61D] focus:bg-white transition-all appearance-none cursor-pointer"
                      >
                        <option>Mahogany (Commercial)</option>
                        <option>Ashwagandha (Medicinal)</option>
                        <option>Turmeric (Herbal Crop)</option>
                        <option>Neem / Multi-Crop Mix</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Submit Action: Removed hover dependency. Solid Primary Green, responsive touch active scale */}
                <button 
                  type="submit" 
                  className="w-full py-4 mt-2 bg-[#41A61D] text-white text-base font-extrabold rounded-xl shadow-md active:scale-95 transition-transform duration-200 flex items-center justify-center gap-2"
                >
                  Submit Inquiry via WhatsApp
                </button>

              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OrderForm;