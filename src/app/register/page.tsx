"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Mail, Lock, User, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic for registration would go here
    console.log("Registration attempted with:", formData);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4 py-32 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-secondary/5 rounded-br-[100px] -z-10 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-1/4 h-1/2 bg-primary/5 rounded-tl-[100px] -z-10 blur-3xl"></div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-[540px] bg-white rounded-[2.5rem] shadow-2xl shadow-primary/5 border border-outline-variant p-8 md:p-12 relative z-10"
      >
        <div className="text-center mb-10">
          <Link href="/" className="inline-flex items-center gap-2 mb-8 group">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/20 group-hover:rotate-12 transition-transform">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 5v14M5 12h14" />
              </svg>
            </div>
            <span className="text-primary text-2xl font-heading font-extrabold tracking-tight">Medifit</span>
          </Link>
          <h1 className="text-3xl font-heading font-extrabold text-primary mb-3">Join Medifit</h1>
          <p className="text-on-surface-variant">Start your journey to optimal health today</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <label className="text-sm font-bold text-primary ml-1">Full Name</label>
            <div className="relative group">
              <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-on-surface-variant group-focus-within:text-primary transition-colors" />
              <input 
                type="text" 
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full bg-surface-container-low border border-outline-variant rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-primary ml-1">Email Address</label>
            <div className="relative group">
              <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-on-surface-variant group-focus-within:text-primary transition-colors" />
              <input 
                type="email" 
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="name@example.com"
                className="w-full bg-surface-container-low border border-outline-variant rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-bold text-primary ml-1">Password</label>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-on-surface-variant group-focus-within:text-primary transition-colors" />
                <input 
                  type="password" 
                  name="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full bg-surface-container-low border border-outline-variant rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-primary ml-1">Confirm</label>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-on-surface-variant group-focus-within:text-primary transition-colors" />
                <input 
                  type="password" 
                  name="confirmPassword"
                  required
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full bg-surface-container-low border border-outline-variant rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                />
              </div>
            </div>
          </div>

          <div className="flex items-start gap-2 px-1 py-2">
            <div className="mt-1">
               <input type="checkbox" id="terms" required className="w-4 h-4 rounded border-outline-variant text-primary focus:ring-primary" />
            </div>
            <label htmlFor="terms" className="text-xs text-on-surface-variant font-medium leading-relaxed">
              I agree to the <Link href="#" className="text-primary font-bold hover:underline">Terms of Service</Link> and <Link href="#" className="text-primary font-bold hover:underline">Privacy Policy</Link>.
            </label>
          </div>

          <button 
            type="submit"
            className="w-full bg-primary text-on-primary py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:shadow-xl hover:shadow-primary/20 transition-all active:scale-[0.98] group"
          >
            <span>Create Account</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </form>

        <p className="mt-8 text-center text-sm text-on-surface-variant">
          Already have an account? <Link href="/login" className="text-secondary font-bold hover:underline">Sign in instead</Link>
        </p>
      </motion.div>

      {/* Trust badges for large screens */}
      <div className="hidden lg:flex flex-col gap-6 fixed right-12 top-1/2 -translate-y-1/2 max-w-xs text-right">
        <div className="flex flex-row-reverse items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-white shadow-lg flex items-center justify-center shrink-0">
            <ShieldCheck className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h4 className="font-bold text-primary mb-1">Secure & Private</h4>
            <p className="text-xs text-on-surface-variant leading-relaxed">Your health data is encrypted and never shared with third parties.</p>
          </div>
        </div>
        <div className="flex flex-row-reverse items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-white shadow-lg flex items-center justify-center shrink-0 text-green-600">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-bold text-primary mb-1">Authentic Products</h4>
            <p className="text-xs text-on-surface-variant leading-relaxed">100% verified lab-tested supplements from certified manufacturers.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
