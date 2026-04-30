"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

// Custom Instagram Icon component
const InstagramIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const instagramPosts = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=400&h=600&auto=format&fit=crop',
    shape: 'rounded-2xl',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=400&h=600&auto=format&fit=crop',
    shape: 'rounded-none',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?q=80&w=400&h=400&auto=format&fit=crop',
    shape: 'rounded-full',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=400&h=600&auto=format&fit=crop',
    shape: 'rounded-t-full',
  },
];

export default function InstagramSection() {
  return (
    <section className="py-20 px-6 bg-transparent">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-[32px] font-bold text-[#4a3c31] mb-12">Follow us @medifit</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
          {instagramPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="relative group cursor-pointer aspect-[3/4] md:aspect-auto"
            >
              <div className={`relative w-full h-[350px] overflow-hidden ${post.shape} border border-[#4a3c31]/10 shadow-lg`}>
                <Image
                  src={post.image}
                  alt={`Instagram post ${post.id}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-[#4a3c31]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="bg-white/90 p-4 rounded-full">
                    <InstagramIcon className="w-6 h-6 text-[#4a3c31]" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

