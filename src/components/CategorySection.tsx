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
    <section className="py-24 px-6 bg-transparent">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-primary mb-16 tracking-tight">Shop by <span className="text-secondary">Category</span></h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-surface-container-low hover:bg-white hover:shadow-2xl hover:shadow-primary/5 transition-all cursor-pointer rounded-3xl p-8 flex flex-col items-center group border border-outline-variant/30"
            >
              <div className="w-20 h-20 rounded-2xl bg-white flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all shadow-sm">
                <cat.icon className="w-10 h-10 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-primary mb-1 tracking-tight">{cat.name}</h3>
              <p className="text-xs text-on-surface-variant font-black uppercase tracking-widest">{cat.items}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
