"use client";

import React from 'react';
import { ShieldCheck, RefreshCw, CreditCard } from 'lucide-react';
import { motion } from 'framer-motion';

const props = [
  {
    icon: ShieldCheck,
    title: '30 Days warranty',
    desc: 'Enjoy peace of mind with warranty',
  },
  {
    icon: RefreshCw,
    title: 'Exchange policy',
    desc: "You're satisfied with your purchase",
  },
  {
    icon: CreditCard,
    title: 'Secure payment',
    desc: 'Shop with confidence every time',
  },
];

export default function ValueProps() {
  return (
    <section className="py-12 px-6">
      <div className="max-w-7xl mx-auto bg-white/40 rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between gap-12">
        {props.map((prop, index) => (
          <motion.div
            key={prop.title}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex items-center gap-6 group"
          >
            <div className="w-16 h-16 rounded-full border border-[#4a3c31]/10 flex items-center justify-center group-hover:bg-white transition-all shadow-sm">
              <prop.icon className="w-8 h-8 text-[#4a3c31]" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#4a3c31] mb-1">{prop.title}</h3>
              <p className="text-sm text-[#4a3c31]/60 font-medium">{prop.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
