"use client"
import React, { useState } from 'react';
import { Phone, Mail, User, Clock, Edit2, MousePointer2, HelpCircle, Plus, LayoutGrid, ArrowUpRight } from 'lucide-react';

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
    <div className="flex flex-col min-h-screen bg-[#EBE9E2]">
      
      {/* Header & Form Section */}
      <section className="pt-32 pb-16 px-4 relative overflow-hidden">
        {/* Decorative Pill Outlines - abstract shapes on left */}
        <div className="absolute left-10 top-1/2 opacity-20 pointer-events-none hidden lg:block">
          <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#5A4A42" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="transform -rotate-12">
            <rect x="2" y="7" width="20" height="10" rx="5" />
            <line x1="12" y1="7" x2="12" y2="17" />
          </svg>
          <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#5A4A42" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="transform rotate-45 mt-4 ml-8">
            <rect x="2" y="7" width="20" height="10" rx="5" />
            <line x1="12" y1="7" x2="12" y2="17" />
          </svg>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif text-[#5A4A42] flex items-center justify-center gap-3 mb-4">
              Contact us <Phone className="w-8 h-8 text-[#5A4A42]" strokeWidth={1.5} />
            </h1>
            <p className="text-sm text-[#8A8076] max-w-md mx-auto">
              Have questions or need support? Get in touch with our team - we're here to help!
            </p>
          </div>

          <form className="max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 mb-4">
              <div className="flex flex-col">
                <label className="text-[11px] text-[#8A8076] mb-1.5 ml-1">Full name</label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                    <User className="w-3.5 h-3.5 text-[#8A8076]" strokeWidth={2} />
                  </div>
                  <input 
                    type="text" 
                    className="w-full bg-transparent border border-[#D1CFC7] rounded py-2.5 pl-9 pr-3 text-sm focus:outline-none focus:border-[#5A4A42] text-[#5A4A42]" 
                  />
                </div>
              </div>
              
              <div className="flex flex-col">
                <label className="text-[11px] text-[#8A8076] mb-1.5 ml-1">Email address</label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                    <Mail className="w-3.5 h-3.5 text-[#8A8076]" strokeWidth={2} />
                  </div>
                  <input 
                    type="email" 
                    className="w-full bg-transparent border border-[#D1CFC7] rounded py-2.5 pl-9 pr-3 text-sm focus:outline-none focus:border-[#5A4A42] text-[#5A4A42]" 
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label className="text-[11px] text-[#8A8076] mb-1.5 ml-1">Phone number</label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                    <Phone className="w-3.5 h-3.5 text-[#8A8076]" strokeWidth={2} />
                  </div>
                  <input 
                    type="tel" 
                    className="w-full bg-transparent border border-[#D1CFC7] rounded py-2.5 pl-9 pr-3 text-sm focus:outline-none focus:border-[#5A4A42] text-[#5A4A42]" 
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label className="text-[11px] text-[#8A8076] mb-1.5 ml-1">Schedule to receive call</label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                    <Clock className="w-3.5 h-3.5 text-[#8A8076]" strokeWidth={2} />
                  </div>
                  <input 
                    type="text" 
                    className="w-full bg-transparent border border-[#D1CFC7] rounded py-2.5 pl-9 pr-3 text-sm focus:outline-none focus:border-[#5A4A42] text-[#5A4A42]" 
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col mb-6">
              <label className="text-[11px] text-[#8A8076] mb-1.5 ml-1">Message</label>
              <div className="relative">
                <div className="absolute left-3 top-3">
                  <Edit2 className="w-3.5 h-3.5 text-[#8A8076]" strokeWidth={2} />
                </div>
                <textarea 
                  rows={6}
                  className="w-full bg-transparent border border-[#D1CFC7] rounded py-2.5 pl-9 pr-3 text-sm focus:outline-none focus:border-[#5A4A42] text-[#5A4A42] resize-none" 
                ></textarea>
              </div>
            </div>

            <button type="button" className="bg-[#4A3C35] text-white px-8 py-2.5 rounded text-xs font-medium hover:bg-[#3A2D27] transition-colors flex items-center gap-2">
              Submit <MousePointer2 className="w-3 h-3" strokeWidth={2.5} />
            </button>
          </form>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 relative">
        <div className="absolute right-10 top-10 opacity-20 pointer-events-none hidden lg:block">
          <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="#5A4A42" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="transform rotate-12">
            <rect x="2" y="7" width="20" height="10" rx="5" />
            <line x1="12" y1="7" x2="12" y2="17" />
          </svg>
          <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#5A4A42" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="transform -rotate-45 -mt-8 -ml-12">
            <rect x="2" y="7" width="20" height="10" rx="5" />
            <line x1="12" y1="7" x2="12" y2="17" />
          </svg>
        </div>

        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12 lg:gap-20">
          <div className="w-full md:w-1/3">
            <h2 className="text-3xl md:text-4xl font-serif text-[#5A4A42] flex items-center gap-3">
              Frequently Asked Questions <HelpCircle className="w-8 h-8 text-[#5A4A42]" strokeWidth={1.5} />
            </h2>
          </div>
          
          <div className="w-full md:w-2/3 flex flex-col gap-3 z-10">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div 
                  key={index} 
                  className={`border border-[#D1CFC7] rounded transition-all duration-200 overflow-hidden cursor-pointer ${isOpen ? 'bg-[#F4F2EC]' : 'bg-transparent hover:bg-white/30'}`}
                  onClick={() => setOpenFaq(index)}
                >
                  <div className="flex items-center gap-3 px-5 py-4">
                    {isOpen ? (
                      <LayoutGrid className="w-4 h-4 text-[#5A4A42] flex-shrink-0" strokeWidth={2} />
                    ) : (
                      <Plus className="w-4 h-4 text-[#5A4A42] flex-shrink-0" strokeWidth={2} />
                    )}
                    <h3 className="text-[13px] font-semibold text-[#5A4A42]">{faq.question}</h3>
                  </div>
                  
                  {isOpen && (
                    <div className="px-5 pb-5 pl-12 text-[11px] text-[#8A8076] leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Community Section - Reused from About */}
      <section className="bg-[#F4F2EC] py-24 px-4">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16 bg-white rounded-xl shadow-sm p-12 lg:p-16">
          <div className="w-full lg:w-5/12 pr-0 lg:pr-8">
            <h2 className="text-3xl md:text-4xl font-serif text-[#5A4A42] mb-6 leading-tight">
              Join our trustable Medifit product community
            </h2>
            <p className="text-[#8A8076] mb-8 text-sm leading-relaxed max-w-sm">
              Join us as we build a community where wellness is accessible, education is empowering, and health is a shared journey.
            </p>
            <button className="bg-[#4A3C35] text-white px-6 py-2.5 rounded text-xs font-medium hover:bg-[#3A2D27] transition-colors flex items-center gap-2">
              Get started <ArrowUpRight className="w-4 h-4" />
            </button>
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

export default Contact;
