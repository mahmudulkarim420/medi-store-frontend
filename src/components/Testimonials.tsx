"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'James Wilson',
    role: 'Manager',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&auto=format&fit=crop',
    content: "I'm so impressed with this online medical store. The product selection is extensive and the prices are great. I found everything I needed in one place. The ordering process was easy, delivery was prompt, and the items arrived in perfect condition. Plus, the customer service team was incredibly helpful."
  },
  {
    id: 2,
    name: 'Henry Adams',
    role: 'CEO',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&h=200&auto=format&fit=crop',
    content: "Reliable and professional. The quality of the products is top-notch, and the health advice provided on their blog has been very beneficial for my fitness journey. I highly recommend them to anyone looking for quality medical supplies."
  },
  {
    id: 3,
    name: 'Ethan Harris',
    role: 'Business manager',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&h=200&auto=format&fit=crop',
    content: "Excellent service! The subscription model for my monthly medications has saved me so much time and worry. I never have to worry about running out. The packaging is discreet and secure."
  },
  {
    id: 4,
    name: 'Lily Baker',
    role: 'Product manager',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop',
    content: "The best experience I've had with an online pharmacy. User-friendly interface and very fast shipping. I especially love their natural skincare collection!"
  }
];

export default function Testimonials() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-20 px-6 bg-transparent">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <h2 className="text-[32px] font-bold text-[#4a3c31] mb-12 text-center">Our happy clients</h2>
        
        {/* Quote Card */}
        <div className="w-full bg-white/40 backdrop-blur-md border border-[#4a3c31]/5 rounded-[32px] p-10 md:p-16 mb-12 relative overflow-hidden">
          <Quote className="absolute top-8 left-8 w-20 h-20 text-[#4a3c31]/5 rotate-180" />
          
          <div className="relative z-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="text-center"
              >
                <p className="text-lg md:text-xl text-[#4a3c31]/80 leading-relaxed italic">
                  "{testimonials[activeTab].content}"
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Client Selectors */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {testimonials.map((client, index) => (
            <button
              key={client.id}
              onClick={() => setActiveTab(index)}
              className={`flex items-center gap-4 p-2 pr-6 rounded-2xl transition-all ${
                activeTab === index 
                ? 'bg-white shadow-lg ring-1 ring-[#4a3c31]/5' 
                : 'opacity-60 hover:opacity-100'
              }`}
            >
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#4a3c31]/10">
                <Image 
                  src={client.avatar} 
                  alt={client.name} 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="text-left">
                <h4 className="font-bold text-[#4a3c31] text-sm">{client.name}</h4>
                <p className="text-[12px] text-[#4a3c31]/60">{client.role}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
