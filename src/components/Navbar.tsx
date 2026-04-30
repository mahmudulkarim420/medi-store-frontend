"use client";
import React, { useState, useEffect, useRef } from 'react';
import { Search, ShoppingCart, ChevronDown, User, Menu, X, History, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const { cartCount } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Shop', href: '/shop' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Admin', href: '/admin' },
  ];

  const recentSearches = ["Vitamin C", "Omega 3", "B12 Medicine", "Protein Powder"];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-4 shadow-md' : 'py-5 shadow-sm'} bg-white`}>
        <div className="absolute inset-0 bg-white" />
        
        <nav className="relative max-w-[1320px] mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <motion.div 
              whileHover={{ rotate: 90 }}
              className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/20"
            >
               <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                 <path d="M12 5v14M5 12h14" />
                 <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" opacity="0.3" />
               </svg>
            </motion.div>
            <span className="text-primary text-2xl font-heading font-extrabold tracking-tight">Medifit</span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link 
                  href={link.href} 
                  className="text-on-surface-variant text-sm font-bold hover:text-primary transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>

          {/* Icons */}
          <div className="flex items-center gap-4 text-on-surface">
            <button 
              onClick={() => setIsSearchOpen(true)}
              className="hidden sm:flex p-2 hover:bg-surface-container-low rounded-full transition-colors group"
            >
              <Search className="w-5 h-5 group-hover:text-primary transition-colors" />
            </button>
            
            <Link href="/profile" className="flex items-center gap-2 group">
              <div className="p-2 hover:bg-surface-container-low rounded-full transition-colors">
                <User className="w-5 h-5 group-hover:text-primary transition-colors" />
              </div>
              <span className="hidden lg:block text-sm font-bold text-on-surface-variant group-hover:text-primary transition-colors">Profile</span>
            </Link>
            
            <Link href="/cart" className="relative p-2 hover:bg-surface-container-low rounded-full transition-colors group">
              <ShoppingCart className="w-5 h-5 group-hover:scale-110 group-hover:text-primary transition-all" />
              <AnimatePresence>
                {cartCount > 0 && (
                  <motion.span 
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    key={cartCount}
                    className="absolute top-0 right-0 bg-primary text-on-primary text-[10px] font-black w-5 h-5 rounded-full flex items-center justify-center border-2 border-white shadow-sm"
                  >
                    {cartCount}
                  </motion.span>
                )}
              </AnimatePresence>
            </Link>

            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 hover:bg-surface-container-low rounded-full transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-outline-variant overflow-hidden shadow-xl"
            >
              <ul className="px-6 py-8 space-y-6">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href} 
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-xl font-heading font-bold text-primary block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
                <div className="pt-6 border-t border-outline-variant flex items-center gap-6">
                  <Link href="/profile" className="flex items-center gap-2 text-on-surface-variant font-medium" onClick={() => setIsMobileMenuOpen(false)}>
                    <User className="w-5 h-5" /> Account
                  </Link>
                  <button 
                    onClick={() => { setIsSearchOpen(true); setIsMobileMenuOpen(false); }}
                    className="flex items-center gap-2 text-on-surface-variant font-medium"
                  >
                    <Search className="w-5 h-5" /> Search
                  </button>
                </div>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Search Overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-white flex flex-col"
          >
            {/* Search Header */}
            <div className="py-8 px-6 border-b border-outline-variant">
              <div className="max-w-[1320px] mx-auto flex items-center gap-6">
                <Search className="w-8 h-8 text-primary shrink-0" />
                <input 
                  ref={searchInputRef}
                  type="text" 
                  placeholder="Search for wellness products, categories..." 
                  className="w-full text-2xl md:text-4xl font-heading font-extrabold text-primary placeholder:text-primary/20 focus:outline-none"
                />
                <button 
                  onClick={() => setIsSearchOpen(false)}
                  className="p-3 hover:bg-surface-container-low rounded-full transition-colors group"
                >
                  <X className="w-8 h-8 text-on-surface-variant group-hover:text-primary" />
                </button>
              </div>
            </div>

            {/* Search Content */}
            <div className="flex-grow overflow-y-auto py-16 px-6">
              <div className="max-w-[1320px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
                {/* Recent Searches */}
                <div className="space-y-8">
                  <div className="flex items-center gap-2">
                    <History className="w-4 h-4 text-on-surface-variant" />
                    <h4 className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Recent Searches</h4>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {recentSearches.map((term) => (
                      <button key={term} className="px-6 py-3 bg-surface-container-low hover:bg-primary hover:text-on-primary rounded-2xl text-sm font-bold transition-all border border-outline-variant/30">
                        {term}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Popular Categories */}
                <div className="space-y-8">
                  <h4 className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Popular Categories</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {["Vitamins", "Supplements", "Daily Care", "Wellness"].map((cat) => (
                      <Link 
                        key={cat} 
                        href={`/shop?category=${cat}`}
                        onClick={() => setIsSearchOpen(false)}
                        className="p-6 bg-surface-container-low rounded-3xl border border-outline-variant/30 hover:border-primary hover:shadow-lg transition-all group"
                      >
                        <div className="flex justify-between items-center">
                          <span className="font-bold text-primary">{cat}</span>
                          <ArrowRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Search Footer */}
            <div className="py-8 px-6 bg-surface-container-low border-t border-outline-variant mt-auto">
              <div className="max-w-[1320px] mx-auto text-center">
                <p className="text-sm text-on-surface-variant font-medium">
                  Need help finding something? <Link href="/contact" className="text-primary font-bold hover:underline">Contact our health experts</Link>
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
