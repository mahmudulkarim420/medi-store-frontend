"use client";
import React from 'react';
import { Truck, RotateCcw, Headphones, CreditCard, TrendingUp, ThumbsUp, Eye, ArrowRight, Link } from 'lucide-react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Section 1: Hero */}
      <section className="bg-surface-container-low pt-32 pb-24 px-4 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 rounded-bl-[100px] -z-10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-secondary/5 rounded-tr-[100px] -z-10 blur-3xl"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-extrabold text-primary text-center max-w-4xl mx-auto mb-16 leading-tight tracking-tight">
            Health products you <span className="text-secondary">can trust</span> <br className="hidden md:block"/> service you deserve
          </h1>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 lg:gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="w-full md:w-1/3 aspect-[3/4] relative rounded-[2rem] overflow-hidden md:-mt-12 shadow-2xl shadow-primary/5"
            >
              <img 
                src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=600" 
                alt="Pouring pills" 
                className="object-cover w-full h-full"
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="w-full md:w-1/3 aspect-[4/5] relative rounded-[2rem] overflow-hidden md:mt-12 z-10 shadow-2xl shadow-primary/20 scale-110"
            >
              <img 
                src="https://images.unsplash.com/photo-1550572017-edb7df024090?auto=format&fit=crop&q=80&w=600" 
                alt="Holding bottle" 
                className="object-cover w-full h-full"
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="w-full md:w-1/3 aspect-[3/4] relative rounded-[2rem] overflow-hidden md:-mt-12 shadow-2xl shadow-primary/5"
            >
              <img 
                src="https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&q=80&w=600" 
                alt="Taking pill" 
                className="object-cover w-full h-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2: About Us & Features */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-12">
            <div className="w-full md:w-1/3">
              <h2 className="text-4xl font-heading font-extrabold text-primary mb-4 tracking-tight">About us</h2>
              <div className="w-12 h-1 bg-secondary rounded-full"></div>
            </div>
            <p className="text-xl font-medium text-on-surface-variant w-full md:w-2/3 leading-relaxed">
              Our focus is on <span className="text-primary font-bold">nurturing wellness</span> and empowering health for all ages well being for people worldwide.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {[
              { icon: Truck, label: "Free shipping" },
              { icon: RotateCcw, label: "Easy refund" },
              { icon: Headphones, label: "Online support" },
              { icon: CreditCard, label: "Flexible payment" }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center text-center px-4 group">
                <div className="w-16 h-16 rounded-2xl bg-surface-container-low flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-primary transition-all">
                  <item.icon className="w-8 h-8 text-primary group-hover:text-on-primary transition-colors" strokeWidth={1.5} />
                </div>
                <p className="text-sm font-bold text-primary uppercase tracking-widest">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: What to Expect */}
      <section className="bg-surface-container-low py-24 px-4 relative overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-20 relative z-10">
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-primary mb-12 tracking-tight">
              What to Expect When You Join Our Team
            </h2>
            <ul className="space-y-6">
              {[
                { icon: TrendingUp, label: "Mission" },
                { icon: ThumbsUp, label: "Commitments", active: true },
                { icon: Eye, label: "Vision" }
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-6 group">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${item.active ? "bg-primary text-on-primary shadow-lg" : "bg-white text-primary"}`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <span className={`text-xl font-bold tracking-tight ${item.active ? "text-primary underline decoration-secondary decoration-4 underline-offset-8" : "text-on-surface-variant group-hover:text-primary transition-colors"}`}>
                    {item.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="w-full md:w-1/2 flex items-end gap-6 relative">
            <div className="w-2/3 aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800" 
                alt="Health supplements" 
                className="object-cover w-full h-full"
              />
            </div>
            <div className="w-1/3 mb-4">
              <p className="text-xs font-medium text-on-surface-variant leading-relaxed">
                We're committed to supporting your health journey by offering reliable educational resources, wellness insights, and expert advice to help you make informed decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Community */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-5/12 pr-0 lg:pr-8">
            <h2 className="text-4xl font-heading font-extrabold text-primary mb-6 leading-tight tracking-tight">
              Join our trustable <span className="text-secondary text-5xl">Medifit</span> product community
            </h2>
            <p className="text-on-surface-variant text-lg mb-8 leading-relaxed">
              Join us as we build a community where wellness is accessible, education is empowering, and health is a shared journey.
            </p>
            <Link href="/shop" className="inline-flex items-center gap-3 px-10 py-4 bg-primary text-on-primary rounded-2xl font-bold hover:shadow-xl hover:shadow-primary/20 transition-all active:scale-95">
              <span>Our Products</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          
          <div className="w-full lg:w-7/12">
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-[4/3] rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1628771065518-0d82f1938462?auto=format&fit=crop&q=80&w=600" 
                  alt="Supplement capsules" 
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="aspect-[4/3] rounded-lg overflow-hidden mt-8">
                <img 
                  src="https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&q=80&w=600" 
                  alt="Holding medicine pack" 
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="aspect-[4/3] rounded-lg overflow-hidden -mt-8">
                <img 
                  src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&q=80&w=600" 
                  alt="Health products selection" 
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="aspect-[4/3] rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&q=80&w=600" 
                  alt="Vitamins pouring" 
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
