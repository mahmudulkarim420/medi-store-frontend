"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';

// Using the generated image paths or fallbacks
import microscopeImg from '@/assets/img4.png';
import pulseOximeterImg from '@/assets/img5.png';
import serumImg from '@/assets/img6.png';
import proteinImg from '@/assets/img7.png'; // Fallback to an existing asset

const products = [
  {
    tag: 'New',
    name: 'Microscope',
    price: '45.00',
    currency: 'USD',
    image: microscopeImg,
  },
  {
    tag: 'Save 15%',
    name: 'Pulse oximeter',
    price: '19.00',
    originalPrice: '55.00',
    currency: 'USD',
    image: pulseOximeterImg,
  },
  {
    tag: null,
    name: 'Vitamin serum',
    price: '20.00',
    originalPrice: '30.00',
    currency: 'USD',
    image: serumImg,
  },
  {
    tag: 'New',
    name: 'High protein',
    price: '50.00',
    currency: 'USD',
    image: proteinImg,
  },
];

export default function LatestProducts() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[32px] font-bold text-[#4a3c31] text-center mb-16">Latest health product</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col group"
            >
              <div className="bg-white/40 rounded-3xl p-10 aspect-square relative mb-6 flex items-center justify-center overflow-hidden">
                {product.tag && (
                  <span className="absolute top-4 left-4 bg-[#e47e58] text-white text-[10px] font-bold px-2 py-1 rounded-md uppercase z-10">
                    {product.tag}
                  </span>
                )}
                
                <div className="relative w-full h-full group-hover:scale-110 transition-transform duration-500">
                  <Image src={product.image} alt={product.name} fill className="object-contain" />
                </div>
                
                <button className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-[#efe9e0] text-[#4a3c31] px-6 py-2 rounded-xl flex items-center gap-2 text-sm font-bold opacity-0 group-hover:opacity-100 transition-all shadow-lg hover:bg-white">
                  <ShoppingCart className="w-4 h-4" />
                  Shop now
                </button>
              </div>
              
              <h3 className="text-lg font-bold text-[#4a3c31] mb-1">{product.name}</h3>
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-[#4a3c31]">${product.price} {product.currency}</span>
                {product.originalPrice && (
                  <span className="text-xs text-[#4a3c31]/40 line-through">${product.originalPrice} {product.currency}</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
