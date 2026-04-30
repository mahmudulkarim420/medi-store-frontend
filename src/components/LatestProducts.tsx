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
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-primary text-center mb-20 tracking-tight">Latest Health <span className="text-secondary">Products</span></h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col group"
            >
              <div className="bg-surface-container-low rounded-[2.5rem] p-12 aspect-square relative mb-8 flex items-center justify-center overflow-hidden transition-all duration-500 group-hover:bg-white group-hover:shadow-2xl group-hover:shadow-primary/5 border border-outline-variant/30">
                {product.tag && (
                  <span className="absolute top-6 left-6 bg-secondary text-white text-[10px] font-black px-3 py-1 rounded-full uppercase z-10 tracking-widest">
                    {product.tag}
                  </span>
                )}
                
                <div className="relative w-full h-full group-hover:scale-110 transition-transform duration-700 ease-out">
                  <Image src={product.image} alt={product.name} fill className="object-contain" />
                </div>
                
                <button className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-primary text-on-primary px-8 py-3 rounded-2xl flex items-center gap-3 text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 group-hover:bottom-10 transition-all duration-300 active:scale-95">
                  <ShoppingCart className="w-4 h-4" />
                  <span>Shop now</span>
                </button>
              </div>
              
              <h3 className="text-xl font-bold text-primary mb-2 tracking-tight group-hover:text-secondary transition-colors">{product.name}</h3>
              <div className="flex items-center gap-3">
                <span className="text-lg font-black text-primary">${product.price} {product.currency}</span>
                {product.originalPrice && (
                  <span className="text-sm text-on-surface-variant/40 line-through font-bold">${product.originalPrice} {product.currency}</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
