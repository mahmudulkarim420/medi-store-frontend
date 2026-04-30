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
    <section className="py-24 px-6 bg-transparent">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-primary mb-16 text-center tracking-tight">Our Happy <span className="text-secondary">Clients</span></h2>
        
        {/* Quote Card */}
        <div className="w-full bg-surface-container-low border border-outline-variant/30 rounded-[3rem] p-12 md:p-20 mb-16 relative overflow-hidden shadow-2xl shadow-primary/5">
          <Quote className="absolute top-12 left-12 w-32 h-32 text-primary opacity-5 rotate-180" />
          
          <div className="relative z-10 max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="text-center"
              >
                <p className="text-xl md:text-2xl text-primary/80 leading-relaxed font-medium italic mb-8">
                  "{testimonials[activeTab].content}"
                </p>
                <div className="w-12 h-1 bg-secondary mx-auto rounded-full"></div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Client Selectors */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {testimonials.map((client, index) => (
            <button
              key={client.id}
              onClick={() => setActiveTab(index)}
              className={`flex items-center gap-5 p-3 pr-8 rounded-[2rem] transition-all duration-300 ${
                activeTab === index 
                ? 'bg-white shadow-2xl shadow-primary/10 ring-2 ring-primary/5 scale-110' 
                : 'bg-surface-container-low/50 opacity-60 hover:opacity-100 hover:bg-white'
              }`}
            >
              <div className="relative w-14 h-14 rounded-2xl overflow-hidden border-2 border-primary/10">
                <Image 
                  src={client.avatar} 
                  alt={client.name} 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="text-left">
                <h4 className="font-bold text-primary text-base tracking-tight">{client.name}</h4>
                <p className="text-xs font-black text-on-surface-variant uppercase tracking-widest">{client.role}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
