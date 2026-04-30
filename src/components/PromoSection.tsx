"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Using the generated image paths directly for now
import sanitizerImg from '@/assets/img1.png';
import faceWashImg from '@/assets/img2.png';
import masksImg from '@/assets/img3.png';

const promos = [
  {
    tag: 'Sanitizer',
    tagColor: 'bg-[#e47e58]',
    title: 'Hand sanitizer collection',
    linkText: 'Shop now',
    image: sanitizerImg,
  },
  {
    tag: 'Top deal',
    tagColor: 'bg-[#6da06d]',
    title: 'Face wash sale collection',
    linkText: 'Discover now',
    image: faceWashImg,
  },
  {
    tag: 'Face mask',
    tagColor: 'bg-[#e47e58]',
    title: 'Facial mask deals save up to 50%',
    linkText: 'Discover now',
    image: masksImg,
  },
];

export default function PromoSection() {
  return (
    <section className="py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {promos.map((promo, index) => (
          <motion.div
            key={promo.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative bg-white/40 rounded-3xl p-8 h-[240px] flex flex-col justify-between overflow-hidden group"
          >
            <div className="z-10 relative">
              <span className={`${promo.tagColor} text-white text-[10px] font-bold px-2 py-1 rounded-md uppercase mb-4 inline-block`}>
                {promo.tag}
              </span>
              <h3 className="text-xl font-bold text-[#4a3c31] max-w-[160px] leading-tight mb-4 group-hover:text-[#2d211b] transition-colors">
                {promo.title}
              </h3>
              <button className="flex items-center gap-2 text-sm font-bold text-[#4a3c31] border-b border-[#4a3c31] pb-0.5 hover:gap-3 transition-all">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                </svg>
                {promo.linkText}
              </button>
            </div>
            
            <div className="absolute right-[-20px] bottom-[-20px] w-48 h-48 group-hover:scale-110 transition-transform duration-500">
               {/* Note: User needs to ensure images are moved to @/assets/ or update these paths */}
               <Image 
                 src={promo.image} 
                 alt={promo.title} 
                 fill 
                 className="object-contain"
               />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
