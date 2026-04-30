"use client";

import Link from 'next/link';
import React, { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { Search, Filter, ShoppingCart, Heart, ChevronDown, Star, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const products = [
  {
    id: 1,
    name: "Vitamin C Complex",
    category: "Vitamins",
    price: "$24.99",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 2,
    name: "Omega-3 Fish Oil",
    category: "Supplements",
    price: "$19.50",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1550572017-edb7df024090?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 3,
    name: "Daily Multivitamin",
    category: "Vitamins",
    price: "$29.00",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 4,
    name: "Whey Protein Isolate",
    category: "Supplements",
    price: "$45.99",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1628771065518-0d82f1938462?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 5,
    name: "Probiotic Blend",
    category: "Digestive Health",
    price: "$32.00",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 6,
    name: "Herbal Sleep Aid",
    category: "Wellness",
    price: "$18.50",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 7,
    name: "Zinc Supplements",
    category: "Vitamins",
    price: "$15.00",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 8,
    name: "Magnesium Glycinate",
    category: "Vitamins",
    price: "$22.50",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=400"
  }
];

const categories = ["All", "Vitamins", "Supplements", "Digestive Health", "Wellness"];

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent, product: any) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart({
      id: product.id,
      name: product.name,
      category: product.category,
      price: product.price,
      quantity: 1,
      image: product.image
    });
  };

  const filteredProducts = activeCategory === "All" 
    ? products 
    : products.filter(p => p.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Header Section */}
      <section className="py-16 px-4 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 rounded-bl-[100px] -z-10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-secondary/5 rounded-tr-[100px] -z-10 blur-3xl"></div>

        <div className="max-w-[1320px] mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="max-w-2xl"
            >
              <h1 className="text-5xl md:text-6xl font-heading font-extrabold text-primary mb-6 tracking-tight">
                Wellness <span className="text-secondary">Essentials</span>
              </h1>
              <p className="text-on-surface-variant text-lg leading-relaxed max-w-xl">
                Explore our scientifically-backed selection of premium supplements and medicines, curated for your specific health journey.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto"
            >
              <div className="relative group">
                <Search className="w-5 h-5 text-on-surface-variant absolute left-4 top-1/2 transform -translate-y-1/2 group-focus-within:text-primary transition-colors" />
                <input 
                  type="text" 
                  placeholder="Search wellness products..." 
                  className="w-full sm:w-72 bg-white border border-outline-variant rounded-2xl py-3.5 pl-12 pr-6 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-sm"
                />
              </div>
              <button className="flex items-center justify-center gap-3 bg-white border border-outline-variant px-8 py-3.5 rounded-2xl text-sm font-bold text-primary hover:bg-surface-container-low transition-all shadow-sm active:scale-95">
                <Filter className="w-5 h-5" /> 
                <span>Filters</span>
              </button>
            </motion.div>
          </div>

          {/* Categories Pill Navigation */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-3 overflow-x-auto pb-4 scrollbar-hide no-scrollbar"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap px-8 py-3 rounded-2xl text-sm font-bold transition-all duration-300 ${
                  activeCategory === cat 
                    ? "bg-primary text-on-primary shadow-lg shadow-primary/20 scale-105" 
                    : "bg-white text-on-surface-variant hover:text-primary hover:bg-surface-container-low border border-outline-variant"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Product Grid Section */}
      <section className="pb-32 px-4 flex-grow">
        <div className="max-w-[1320px] mx-auto">
          <div className="flex justify-between items-center mb-10">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              <p className="text-sm font-bold text-on-surface-variant uppercase tracking-widest">
                {filteredProducts.length} Results
              </p>
            </div>
            <button className="flex items-center gap-2 text-sm text-primary font-bold hover:opacity-70 transition-opacity">
              Sort by: Recommended <ChevronDown className="w-4 h-4" />
            </button>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  variants={itemVariants}
                  layout
                  className="group relative"
                >
                  <Link href={`/shop/${product.id}`} className="bg-white rounded-3xl overflow-hidden border border-outline-variant shadow-sm hover:shadow-2xl transition-all duration-500 block h-full flex flex-col">
                    <div className="relative aspect-[4/5] overflow-hidden bg-surface-container-low">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                      />
                      
                      {/* Floating actions */}
                      <div className="absolute top-4 right-4 flex flex-col gap-2 transform translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500">
                        <button 
                          onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}
                          className="w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center text-on-surface-variant hover:text-red-500 hover:scale-110 transition-all"
                        >
                          <Heart className="w-5 h-5" />
                        </button>
                      </div>

                      {/* Add to cart overlay for desktop */}
                      <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 hidden lg:block">
                        <button 
                          onClick={(e) => handleAddToCart(e, product)}
                          className="w-full bg-primary text-on-primary py-4 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-xl"
                        >
                          <ShoppingCart className="w-5 h-5" />
                          <span>Quick Add</span>
                        </button>
                      </div>
                    </div>
                    
                    <div className="p-6 flex-grow flex flex-col">
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary">
                          {product.category}
                        </span>
                        <div className="flex items-center gap-1 bg-green-50 text-green-700 px-2 py-0.5 rounded-lg">
                          <Star className="w-3 h-3 fill-green-700" />
                          <span className="text-[10px] font-bold">{product.rating}</span>
                        </div>
                      </div>
                      
                      <h3 className="text-primary font-heading font-bold text-xl mb-4 group-hover:text-secondary transition-colors line-clamp-2">
                        {product.name}
                      </h3>
                      
                      <div className="mt-auto flex items-center justify-between">
                        <div>
                          <span className="text-2xl font-heading font-extrabold text-primary">{product.price}</span>
                        </div>
                        {/* Mobile Add to Cart */}
                        <button 
                          onClick={(e) => handleAddToCart(e, product)}
                          className="lg:hidden w-12 h-12 bg-primary text-on-primary rounded-2xl flex items-center justify-center active:scale-90 transition-transform"
                        >
                          <ShoppingCart className="w-5 h-5" />
                        </button>
                        <div className="hidden lg:flex items-center gap-1 text-primary/40 group-hover:text-primary transition-colors">
                          <span className="text-[10px] font-bold uppercase tracking-wider">View</span>
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          
          {filteredProducts.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-32"
            >
              <div className="w-24 h-24 bg-surface-container-low rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-10 h-10 text-on-surface-variant opacity-20" />
              </div>
              <p className="text-on-surface-variant text-xl font-medium">No products match your current filters.</p>
              <button 
                onClick={() => setActiveCategory("All")}
                className="mt-6 text-primary font-bold hover:underline"
              >
                Clear all filters
              </button>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Shop;

