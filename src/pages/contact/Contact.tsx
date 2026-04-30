"use client"
import React, { useState } from 'react';
import { Phone, Mail, User, Clock, Edit2, MousePointer2, HelpCircle, Plus, LayoutGrid, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
const Contact = () => {
  const [openFaq, setOpenFaq] = useState<number>(0);

  const faqs = [
    { 
      question: "What products do you offer?", 
      answer: "We offer a wide range of medical supplies, including prescription medications, over-the-counter products, supplements, and personal care items." 
    },
    { 
      question: "How can I place an order?", 
      answer: "You can place an order directly through our website by adding items to your cart and proceeding to checkout." 
    },
    { 
      question: "Do you provide home delivery?", 
      answer: "Yes, we provide fast and reliable home delivery for all our products nationwide." 
    },
    { 
      question: "Can I return or exchange products?", 
      answer: "We have a 30-day return policy for unused and unopened items in their original packaging." 
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      
      {/* Header & Form Section */}
      <section className="pt-32 pb-16 px-4 relative overflow-hidden bg-surface-container-low">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 rounded-bl-[100px] -z-10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-secondary/5 rounded-tr-[100px] -z-10 blur-3xl"></div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-heading font-extrabold text-primary tracking-tight mb-6">
              Contact <span className="text-secondary">us</span>
            </h1>
            <p className="text-lg font-medium text-on-surface-variant max-w-xl mx-auto leading-relaxed">
              Have questions or need support? Our health experts are here to guide you on your wellness journey.
            </p>
          </div>

          <form className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl shadow-primary/5 border border-outline-variant/30">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 mb-8">
              <div className="flex flex-col">
                <label className="text-xs font-black text-primary uppercase tracking-widest mb-2 ml-1">Full name</label>
                <div className="relative group">
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                    <User className="w-5 h-5 text-on-surface-variant group-focus-within:text-primary transition-colors" />
                  </div>
                  <input 
                    type="text" 
                    placeholder="Enter your name"
                    className="w-full bg-surface-container-low border border-outline-variant/30 rounded-2xl py-4 pl-12 pr-6 text-sm focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all" 
                  />
                </div>
              </div>
              
              <div className="flex flex-col">
                <label className="text-xs font-black text-primary uppercase tracking-widest mb-2 ml-1">Email address</label>
                <div className="relative group">
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                    <Mail className="w-5 h-5 text-on-surface-variant group-focus-within:text-primary transition-colors" />
                  </div>
                  <input 
                    type="email" 
                    placeholder="name@example.com"
                    className="w-full bg-surface-container-low border border-outline-variant/30 rounded-2xl py-4 pl-12 pr-6 text-sm focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all" 
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label className="text-xs font-black text-primary uppercase tracking-widest mb-2 ml-1">Phone number</label>
                <div className="relative group">
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                    <Phone className="w-5 h-5 text-on-surface-variant group-focus-within:text-primary transition-colors" />
                  </div>
                  <input 
                    type="tel" 
                    placeholder="+1 (234) 567-890"
                    className="w-full bg-surface-container-low border border-outline-variant/30 rounded-2xl py-4 pl-12 pr-6 text-sm focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all" 
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label className="text-xs font-black text-primary uppercase tracking-widest mb-2 ml-1">Preferred Time</label>
                <div className="relative group">
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                    <Clock className="w-5 h-5 text-on-surface-variant group-focus-within:text-primary transition-colors" />
                  </div>
                  <input 
                    type="text" 
                    placeholder="e.g. 10:00 AM"
                    className="w-full bg-surface-container-low border border-outline-variant/30 rounded-2xl py-4 pl-12 pr-6 text-sm focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all" 
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col mb-10">
              <label className="text-xs font-black text-primary uppercase tracking-widest mb-2 ml-1">Your Message</label>
              <div className="relative group">
                <div className="absolute left-4 top-5">
                  <Edit2 className="w-5 h-5 text-on-surface-variant group-focus-within:text-primary transition-colors" />
                </div>
                <textarea 
                  rows={5}
                  placeholder="How can we help you today?"
                  className="w-full bg-surface-container-low border border-outline-variant/30 rounded-2xl py-4 pl-12 pr-6 text-sm focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all resize-none" 
                ></textarea>
              </div>
            </div>

            <button type="button" className="w-full bg-primary text-on-primary py-5 rounded-2xl font-bold hover:shadow-xl hover:shadow-primary/20 transition-all flex items-center justify-center gap-3 active:scale-[0.98]">
              <span>Send Message</span>
              <MousePointer2 className="w-5 h-5" />
            </button>
          </form>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 px-4 bg-white relative">
        <div className="max-w-[1320px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            <div className="w-full lg:w-1/3">
              <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-primary tracking-tight mb-6 flex items-center gap-4">
                Frequently Asked <span className="text-secondary">Questions</span>
              </h2>
              <div className="w-16 h-1.5 bg-secondary rounded-full mb-8"></div>
              <p className="text-on-surface-variant font-medium leading-relaxed">
                Everything you need to know about our products, delivery, and services. Can't find what you're looking for? Reach out to us.
              </p>
            </div>
            
            <div className="w-full lg:w-2/3 flex flex-col gap-4">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <motion.div 
                    key={index} 
                    layout
                    className={`rounded-3xl border border-outline-variant/30 transition-all overflow-hidden cursor-pointer ${isOpen ? 'bg-surface-container-low shadow-lg' : 'bg-white hover:border-primary'}`}
                    onClick={() => setOpenFaq(index)}
                  >
                    <div className="flex items-center justify-between px-8 py-6">
                      <div className="flex items-center gap-4">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all ${isOpen ? 'bg-primary text-white' : 'bg-surface-container-low text-primary'}`}>
                          {isOpen ? <LayoutGrid className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                        </div>
                        <h3 className="text-lg font-bold text-primary tracking-tight">{faq.question}</h3>
                      </div>
                    </div>
                    
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div 
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="px-8 pb-8 pl-20 text-on-surface-variant font-medium leading-relaxed"
                        >
                          {faq.answer}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="bg-surface-container-low py-32 px-4">
        <div className="max-w-[1320px] mx-auto bg-white rounded-[3rem] shadow-2xl shadow-primary/5 p-12 lg:p-24 flex flex-col lg:flex-row items-center gap-20 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          
          <div className="w-full lg:w-1/2 relative z-10">
            <h2 className="text-4xl md:text-6xl font-heading font-extrabold text-primary mb-8 leading-tight tracking-tight">
              Join our trustable <span className="text-secondary">Medifit</span> community
            </h2>
            <p className="text-on-surface-variant text-xl font-medium mb-12 leading-relaxed">
              Wellness is better together. Join thousands of health enthusiasts and get exclusive access to resources and expert advice.
            </p>
            <Link href="/register" className="inline-flex items-center gap-4 px-12 py-5 bg-primary text-on-primary rounded-2xl font-bold hover:shadow-2xl hover:shadow-primary/30 transition-all active:scale-95 group">
              <span>Get Started</span>
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div>
          
          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-2 gap-6">
              {[
                "https://images.unsplash.com/photo-1628771065518-0d82f1938462?auto=format&fit=crop&q=80&w=600",
                "https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&q=80&w=600",
                "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&q=80&w=600",
                "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&q=80&w=600"
              ].map((img, i) => (
                <div key={i} className={`aspect-square rounded-3xl overflow-hidden shadow-lg ${i % 2 === 1 ? 'mt-8' : '-mt-8'}`}>
                  <img src={img} alt="Community" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;
