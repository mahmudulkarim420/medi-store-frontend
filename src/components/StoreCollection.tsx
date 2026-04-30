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
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[42px] font-bold text-[#4a3c31] text-center mb-16">
          Explore Our store Collection
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="flex flex-col group"
            >
              <div className="bg-white/60 rounded-3xl p-8 aspect-square relative mb-6 flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:bg-white group-hover:shadow-xl">
                <div className="relative w-full h-full group-hover:scale-105 transition-transform duration-500">
                  <Image 
                    src={product.image} 
                    alt={product.name} 
                    fill 
                    className="object-contain p-4" 
                  />
                </div>
                
                {product.showShopNow && (
                  <button className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-[#efe9e0] text-[#4a3c31] px-6 py-2 rounded-xl flex items-center gap-2 text-sm font-bold shadow-md hover:bg-white transition-all">
                    <ShoppingCart className="w-4 h-4" />
                    Shop now
                  </button>
                )}

                {/* Hover overlay for others */}
                {!product.showShopNow && (
                   <button className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-[#efe9e0] text-[#4a3c31] px-6 py-2 rounded-xl flex items-center gap-2 text-sm font-bold opacity-0 group-hover:opacity-100 transition-all shadow-lg hover:bg-white">
                   <ShoppingCart className="w-4 h-4" />
                   Shop now
                 </button>
                )}
              </div>
              
              <h3 className="text-lg font-bold text-[#4a3c31] mb-1">{product.name}</h3>
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-[#4a3c31]">${product.price} USD</span>
                {product.originalPrice && (
                  <span className="text-xs text-[#4a3c31]/40 line-through">${product.originalPrice} USD</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
