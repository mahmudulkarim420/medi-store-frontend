"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import pillsLineArt from '@/assets/medical shape 5 1.png';

export default function Newsletter() {
  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute bottom-[-50px] right-[-50px] opacity-[0.08] pointer-events-none rotate-45 scale-150">
        <Image src={pillsLineArt} alt="Decor" width={400} height={400} />
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 items-stretch">
        {/* Image Side */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-1 min-h-[400px] relative rounded-[40px] overflow-hidden"
        >
          <Image 
            src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=1000" 
            alt="Person taking medicine"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Content Side */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-1 bg-white/60 rounded-[40px] p-12 md:p-20 flex flex-col justify-center items-center text-center"
        >
          <span className="text-[#4a3c31]/60 font-bold uppercase tracking-wider text-sm mb-4">
            Join our newsletter
          </span>
          <h2 className="text-[42px] md:text-[54px] font-bold text-[#4a3c31] leading-tight mb-12">
            Sign Up for an Instant<br />15% Discount
          </h2>

          <div className="w-full max-w-md flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#4a3c31]/40" />
              <input 
                type="email" 
                placeholder="Enter Email"
                className="w-full bg-[#efe9e0]/50 border border-[#4a3c31]/10 rounded-2xl py-4 pl-12 pr-4 outline-none focus:bg-white transition-all text-[#4a3c31] font-medium"
              />
            </div>
            <button className="bg-[#4a3c31] text-white px-10 py-4 rounded-2xl font-bold hover:bg-[#3a2e25] transition-all flex items-center justify-center gap-2 whitespace-nowrap">
              Sign up
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
