"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { 
  ShoppingCart, 
  Truck, 
  RotateCcw, 
  Headphones, 
  CreditCard, 
  ChevronUp, 
  ChevronDown, 
  ArrowUpRight,
  Star,
  Check,
  ShieldCheck,
  Heart,
  Share2
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ShopDetails = () => {
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const { addToCart } = useCart();

  const product = {
    id: 'b12-medicine',
    name: 'Clinical B12 Complex',
    category: 'Essential Vitamins',
    price: 19.00,
    originalPrice: 25.00,
    rating: 4.9,
    reviews: 124,
    description: 'Our Clinical B12 Complex is a high-potency supplement formulated for maximum absorption. Each serving provides 500mcg of pure Methylcobalamin, supporting sustained energy levels, cognitive function, and healthy nervous system operation.',
    images: [
      'https://images.unsplash.com/photo-1550572017-edb7df024090?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&q=80&w=800'
    ],
    benefits: [
      'Sustained energy throughout the day',
      'Enhanced cognitive focus and clarity',
      'Supports healthy red blood cell production',
      'Essential for nervous system health',
      'Vegan-friendly and allergen-free'
    ]
  };

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      category: product.category,
      price: product.price,
      quantity: quantity,
      image: product.images[0]
    });
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Breadcrumbs */}
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 w-full pt-8">
        <nav className="flex text-xs font-bold uppercase tracking-widest text-on-surface-variant gap-2 items-center">
          <Link href="/shop" className="hover:text-primary transition-colors">Shop</Link>
          <span className="opacity-30">/</span>
          <span className="opacity-30">{product.category}</span>
          <span className="opacity-30">/</span>
          <span className="text-primary">{product.name}</span>
        </nav>
      </div>

      {/* Product Section */}
      <section className="py-12 px-4 max-w-[1320px] mx-auto w-full">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left: Image Gallery */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="w-full lg:w-1/2 flex flex-col gap-6"
          >
            <div className="relative aspect-square rounded-[2rem] overflow-hidden bg-surface-container-low border border-outline-variant/30 group shadow-lg">
              <AnimatePresence mode="wait">
                <motion.img 
                  key={activeImage}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  src={product.images[activeImage]} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </AnimatePresence>
              
              <div className="absolute top-6 right-6 flex flex-col gap-3">
                <button className="w-12 h-12 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center text-primary shadow-sm hover:bg-white hover:scale-110 transition-all">
                  <Heart className="w-5 h-5" />
                </button>
                <button className="w-12 h-12 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center text-primary shadow-sm hover:bg-white hover:scale-110 transition-all">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <div className="flex gap-4">
              {product.images.map((img, idx) => (
                <button 
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`w-24 h-24 rounded-2xl overflow-hidden border-2 transition-all ${
                    activeImage === idx ? 'border-primary shadow-md scale-105' : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </motion.div>

          {/* Right: Product Info */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="w-full lg:w-1/2 flex flex-col"
          >
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest rounded-full">
                  In Stock
                </span>
                <div className="flex items-center gap-1.5 text-on-surface-variant text-sm font-medium">
                  <div className="flex text-yellow-400">
                    <Star className="w-4 h-4 fill-yellow-400" />
                    <Star className="w-4 h-4 fill-yellow-400" />
                    <Star className="w-4 h-4 fill-yellow-400" />
                    <Star className="w-4 h-4 fill-yellow-400" />
                    <Star className="w-4 h-4 fill-yellow-400" opacity={0.5} />
                  </div>
                  <span>{product.rating} ({product.reviews} reviews)</span>
                </div>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-heading font-extrabold text-primary mb-6 leading-tight">
                {product.name}
              </h1>
              
              <div className="flex items-center gap-4 mb-8">
                <span className="text-4xl font-heading font-extrabold text-primary">${product.price.toFixed(2)}</span>
                <span className="text-xl text-on-surface-variant line-through opacity-50">${product.originalPrice.toFixed(2)}</span>
                <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded-lg">Save 25%</span>
              </div>
              
              <p className="text-on-surface-variant text-lg leading-relaxed mb-10">
                {product.description}
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center gap-6 mb-12">
              <div className="flex items-center bg-surface-container-low rounded-2xl border border-outline-variant p-1 w-full sm:w-auto">
                <button 
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="w-12 h-12 flex items-center justify-center rounded-xl hover:bg-white text-primary transition-all active:scale-90"
                >
                  <ChevronDown className="w-4 h-4" />
                </button>
                <span className="w-12 text-center text-lg font-bold text-primary">{quantity}</span>
                <button 
                  onClick={() => setQuantity(q => q + 1)}
                  className="w-12 h-12 flex items-center justify-center rounded-xl hover:bg-white text-primary transition-all active:scale-90"
                >
                  <ChevronUp className="w-4 h-4" />
                </button>
              </div>
              
              <button 
                onClick={handleAddToCart}
                className="flex-grow w-full py-5 bg-primary text-on-primary rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-primary/20 transition-all flex justify-center items-center gap-3 active:scale-[0.98] group"
              >
                <ShoppingCart className="w-6 h-6 group-hover:scale-110 transition-transform" />
                <span>Add to Selection</span>
              </button>
            </div>

            {/* Benefits List */}
            <div className="bg-surface-container-low/50 rounded-3xl p-8 border border-outline-variant">
              <h3 className="text-sm font-bold text-primary uppercase tracking-widest mb-6">Key Benefits</h3>
              <ul className="space-y-4">
                {product.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-green-700" strokeWidth={3} />
                    </div>
                    <span className="text-sm text-on-surface-variant font-medium leading-tight">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Badges Section */}
      <section className="py-20 bg-surface-container-low">
        <div className="max-w-[1320px] mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Truck, title: "Free Express Shipping", desc: "On orders over $100" },
              { icon: RotateCcw, title: "30-Day Returns", desc: "No questions asked" },
              { icon: ShieldCheck, title: "Secure Checkout", desc: "256-bit encryption" },
              { icon: Headphones, title: "Wellness Support", desc: "Expert advice 24/7" }
            ].map((feature, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-primary mb-6 shadow-sm group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
                  <feature.icon className="w-8 h-8" strokeWidth={1.5} />
                </div>
                <h4 className="text-sm font-bold text-primary mb-2">{feature.title}</h4>
                <p className="text-xs text-on-surface-variant">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-24 px-4 bg-background">
        <div className="max-w-[1320px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-primary mb-6">Community Feedback</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">
              See how our Clinical B12 Complex is helping thousands of people regain their vitality.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Olivia Garcia", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100", text: "I've been taking this for 3 weeks now and the difference in my energy levels is night and day. No more mid-afternoon crashes!" },
              { name: "Sophia Brown", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100", text: "As a health professional, I'm very picky about supplements. This Methylcobalamin complex is top-tier quality and highly effective." },
              { name: "Ethan Harris", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=100", text: "Perfect for my plant-based lifestyle. Easy to swallow, no aftertaste, and I feel significantly more focused during my workouts." }
            ].map((review, idx) => (
              <div key={idx} className="bg-white border border-outline-variant rounded-[2rem] p-10 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-full">
                <div className="flex text-yellow-400 mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-yellow-400" />)}
                </div>
                <p className="text-on-surface-variant text-lg leading-relaxed mb-8 flex-grow">
                  "{review.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/10">
                    <img src={review.img} alt={review.name} className="w-full h-full object-cover"/>
                  </div>
                  <div>
                    <span className="text-sm font-bold text-primary block">{review.name}</span>
                    <span className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest">Verified Buyer</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-24 px-4">
        <div className="max-w-[1320px] mx-auto bg-primary text-on-primary rounded-[3rem] p-12 lg:p-24 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 -skew-x-12 translate-x-1/2 group-hover:translate-x-1/3 transition-transform duration-1000"></div>
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl font-heading font-extrabold mb-6 leading-tight">
                Ready to optimize your wellness?
              </h2>
              <p className="text-on-primary/70 text-lg mb-8">
                Join our community of over 50,000 wellness enthusiasts and get expert advice delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/30 flex-grow"
                />
                <button className="bg-white text-primary px-10 py-4 rounded-2xl font-bold hover:shadow-xl transition-all active:scale-95 flex items-center justify-center gap-2">
                  <span>Join Now</span>
                  <ArrowUpRight className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <div className="w-full lg:w-1/3 aspect-square bg-white/10 rounded-[2rem] backdrop-blur-xl border border-white/20 p-8 flex items-center justify-center rotate-3 group-hover:rotate-6 transition-transform duration-700">
               <div className="text-center">
                 <ShieldCheck className="w-20 h-20 mx-auto mb-6 opacity-40" />
                 <p className="text-2xl font-heading font-bold mb-2">99.9% Purity</p>
                 <p className="text-sm opacity-60 uppercase tracking-widest font-bold">Lab Tested & Certified</p>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShopDetails;

