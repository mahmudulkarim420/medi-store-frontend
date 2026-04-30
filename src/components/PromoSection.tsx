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
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {promos.map((promo, index) => (
          <motion.div
            key={promo.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative bg-surface-container-low rounded-[2rem] p-10 h-[280px] flex flex-col justify-between overflow-hidden group border border-outline-variant/30 hover:shadow-2xl hover:shadow-primary/5 transition-all"
          >
            <div className="z-10 relative">
              <span className={`${promo.tagColor} text-white text-[10px] font-black px-3 py-1 rounded-full uppercase mb-4 inline-block tracking-widest`}>
                {promo.tag}
              </span>
              <h3 className="text-2xl font-heading font-extrabold text-primary max-w-[180px] leading-tight mb-6 tracking-tight group-hover:text-secondary transition-colors">
                {promo.title}
              </h3>
              <button className="flex items-center gap-2 text-xs font-black text-primary uppercase tracking-widest border-b-2 border-secondary pb-1 hover:gap-4 transition-all">
                {promo.linkText}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 18 6-6-6-6"/>
                </svg>
              </button>
            </div>
            
            <div className="absolute right-[-10px] bottom-[-10px] w-52 h-52 group-hover:scale-110 transition-transform duration-700">
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
