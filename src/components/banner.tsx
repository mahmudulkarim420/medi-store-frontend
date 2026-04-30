"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Images from assets
import amberBottle from '@/assets/main-img.png';
import labeledBottle from '@/assets/second-img.png';
import goldJar from '@/assets/third-img.png';

import pillsLineArt from '@/assets/medical shape 5 1.png';

export function Banner() {
  const loosePills = [
    { rotate: -10, scale: 0.8, bottom: -10, left: -140 },
    { rotate: 15, scale: 0.7, bottom: 5, left: -100 },
    { rotate: -25, scale: 0.9, bottom: -5, left: -60 },
    { rotate: 40, scale: 0.6, bottom: 10, left: -20 },
    { rotate: -15, scale: 0.8, bottom: -10, left: 40 },
    { rotate: 10, scale: 0.7, bottom: 5, left: 80 },
    { rotate: 30, scale: 0.9, bottom: -15, left: 120 },
    { rotate: -5, scale: 0.65, bottom: 15, left: 150 },
    { rotate: 20, scale: 0.8, bottom: -5, left: -180 },
    { rotate: -30, scale: 0.7, bottom: 8, left: 180 },
  ];

  return (
    <div className="relative w-full max-w-7xl mx-auto px-6 py-12 md:py-20 flex flex-col md:flex-row items-center min-h-[85vh] overflow-hidden">

      {/* Left Content Column */}
      <div className="w-full md:w-[50%] flex flex-col items-start z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-6xl md:text-7xl lg:text-[100px] font-heading font-extrabold text-primary leading-[1] mb-8 tracking-tighter"
        >
          Your trusted <br /> <span className="text-secondary">care now</span> <br /> and always
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-on-surface-variant max-w-md text-xl mb-12 font-medium leading-relaxed"
        >
          For the best results, align your health needs with your medication plan.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          onClick={() => window.location.href = '/shop'}
          className="bg-primary text-on-primary px-12 py-5 rounded-3xl flex items-center gap-4 hover:shadow-2xl hover:shadow-primary/20 transition-all font-bold shadow-xl group active:scale-95"
        >
          <div className="w-6 h-6 flex items-center justify-center bg-white/20 rounded-lg">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
              <path d="M3 6h18" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
          </div>
          <span className="text-lg">Shop now</span>
        </motion.button>
      </div>

      {/* Right Image Column */}
      <div className="w-full md:w-[50%] relative h-[650px] flex justify-center items-center z-10 mt-12 md:mt-0">
        {/* Pills Line Art Decor (Background Top Right) */}
        <motion.div
          initial={{ opacity: 0, rotate: -20 }}
          animate={{ opacity: 0.4, rotate: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="absolute top-[-20px] right-[-20px] pointer-events-none w-56 h-56 z-0"
        >
          <Image src={pillsLineArt} alt="Pills Decor Right" fill className="object-contain" />
        </motion.div>

        {/* Pills Line Art Decor (Background Top Left of the group) */}
        <motion.div
          initial={{ opacity: 0, rotate: 20 }}
          animate={{ opacity: 0.3, rotate: 0 }}
          transition={{ duration: 1.2, delay: 0.7 }}
          className="absolute top-10 left-[-40px] pointer-events-none w-48 h-48 z-0"
        >
          <Image src={pillsLineArt} alt="Pills Decor Left" fill className="object-contain rotate-[-45deg] flip-horizontal" />
        </motion.div>

        {/* Highlight Circle (Background) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute w-[500px] h-[500px] bg-[#f7f3ed] rounded-full z-0 translate-y-10"
        />

        {/* Bottles Layout Parent Container */}
        <div className="relative w-full h-full flex justify-center items-end pb-2 translate-y-4">

          {/* Left Bottle (second-img.png) */}
          <motion.div
            initial={{ opacity: 0, x: -30, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative -mr-28 mb-4 w-40 h-64 z-20"
          >
            <Image src={labeledBottle} alt="Secondary Medicine" fill className="object-contain object-bottom" />
          </motion.div>

          {/* Main Bottle (Center - amber Medifit - main-img.png) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative w-96 h-[560px] z-30"
          >
            <Image src={amberBottle} alt="Medifit Main" fill className="object-contain object-bottom" />

            {/* Label Overlay - Plain Text */}
            <div className="absolute top-[70%] left-1/2 -translate-x-1/2 w-full flex flex-col items-center justify-center pointer-events-none">
              <span className="text-2xl font-bold text-[#4a3c31] tracking-tight drop-shadow-sm">MediStore</span>
            </div>
          </motion.div>

          {/* Right Bottle (third-img.png) */}
          <motion.div
            initial={{ opacity: 0, x: 30, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="relative -ml-28 mb-4 w-40 h-64 z-20"
          >
            <Image src={goldJar} alt="Third Medicine" fill className="object-contain object-bottom" />
          </motion.div>

        </div>
      </div>
    </div>
  );
}
