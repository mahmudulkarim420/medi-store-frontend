"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';

// Importing assets
import img1 from '@/assets/img1.png';
import img2 from '@/assets/img2.png';
import img3 from '@/assets/img3.png';
import img4 from '@/assets/img4.png';
import img5 from '@/assets/img5.png';
import img6 from '@/assets/img6.png';
import img7 from '@/assets/img7.png';
import img8 from '@/assets/img8.png';

const products = [
  {
    name: 'B12 medicine',
    price: '19.00',
    originalPrice: '25.00',
    image: img1,
    showShopNow: true
  },
  {
    name: 'Tonometer',
    price: '12.00',
    image: img2,
  },
  {
    name: 'ECG cardiograph',
    price: '20.00',
    originalPrice: '35.00',
    image: img3,
  },
  {
    name: 'Blood glucose meter',
    price: '15.00',
    image: img4,
  },
  {
    name: 'Lab hand gloves',
    price: '20.00',
    originalPrice: '35.00',
    image: img5,
  },
  {
    name: 'Stethoscope',
    price: '20.00',
    originalPrice: '35.00',
    image: img6,
  },
  {
    name: 'Inhaler pressure drop',
    price: '35.00',
    image: img7,
  },
  {
    name: 'Multi vitamin',
    price: '20.00',
    image: img8,
  },
];

export default function StoreCollection() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-primary text-center mb-20 tracking-tight">
          Explore Our Store <span className="text-secondary">Collection</span>
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="flex flex-col group"
            >
              <div className="bg-surface-container-low rounded-[2.5rem] p-10 aspect-square relative mb-8 flex items-center justify-center overflow-hidden transition-all duration-500 group-hover:bg-white group-hover:shadow-2xl group-hover:shadow-primary/5 border border-outline-variant/30">
                <div className="relative w-full h-full group-hover:scale-110 transition-transform duration-700 ease-out">
                  <Image 
                    src={product.image} 
                    alt={product.name} 
                    fill 
                    className="object-contain p-2" 
                  />
                </div>
                
                <button className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-primary text-on-primary px-8 py-3 rounded-2xl flex items-center gap-3 text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 group-hover:bottom-10 transition-all duration-300 active:scale-95">
                  <ShoppingCart className="w-4 h-4" />
                  <span>Shop now</span>
                </button>
              </div>
              
              <h3 className="text-xl font-bold text-primary mb-2 tracking-tight group-hover:text-secondary transition-colors">{product.name}</h3>
              <div className="flex items-center gap-3">
                <span className="text-lg font-black text-primary">${product.price} USD</span>
                {product.originalPrice && (
                  <span className="text-sm text-on-surface-variant/40 line-through font-bold">${product.originalPrice} USD</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
