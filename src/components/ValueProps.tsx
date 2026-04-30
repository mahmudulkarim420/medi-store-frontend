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
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto bg-surface-container-low rounded-[2.5rem] p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 border border-outline-variant/30 shadow-2xl shadow-primary/5">
        {props.map((prop, index) => (
          <motion.div
            key={prop.title}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex items-center gap-6 group"
          >
            <div className="w-20 h-20 rounded-2xl bg-white flex items-center justify-center group-hover:bg-primary transition-all shadow-sm group-hover:scale-110 duration-500">
              <prop.icon className="w-10 h-10 text-primary group-hover:text-white transition-colors" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-primary mb-2 tracking-tight">{prop.title}</h3>
              <p className="text-sm text-on-surface-variant font-medium leading-relaxed max-w-[180px]">{prop.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
