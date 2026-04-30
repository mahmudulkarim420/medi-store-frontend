"use client";

import React from 'react';
import { Pill, Heart, Leaf, Activity, Microscope, BriefcaseMedical } from 'lucide-react';
import { motion } from 'framer-motion';

const categories = [
  { name: 'Medicine', items: '32 Items', icon: Pill },
  { name: 'Health care', items: '23 Items', icon: Heart },
  { name: 'Beauty care', items: '30 Items', icon: Leaf },
  { name: 'Fitness', items: '21 Items', icon: Activity },
  { name: 'Lab equipment', items: '25 Items', icon: Microscope },
  { name: 'Medkits', items: '25 Items', icon: BriefcaseMedical },
];

export default function CategorySection() {
  return (
    <section className="py-20 px-6 bg-transparent">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-[32px] font-bold text-[#4a3c31] mb-12">Shop by Category</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/40 hover:bg-white/60 transition-all cursor-pointer rounded-2xl p-8 flex flex-col items-center group"
            >
              <div className="w-16 h-16 rounded-full border border-[#4a3c31]/10 flex items-center justify-center mb-6 group-hover:bg-white group-hover:scale-110 transition-all">
                <cat.icon className="w-8 h-8 text-[#4a3c31]" />
              </div>
              <h3 className="text-lg font-bold text-[#4a3c31] mb-1">{cat.name}</h3>
              <p className="text-sm text-[#4a3c31]/60 font-medium">{cat.items}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
