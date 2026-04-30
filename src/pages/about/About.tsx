import React from 'react';
import { Truck, RotateCcw, Headphones, CreditCard, TrendingUp, ThumbsUp, Eye, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Section 1: Hero */}
      <section className="bg-[#F4F2EC] pt-32 pb-24 px-4 relative overflow-hidden">
        {/* Decorative Pill Outlines - abstract shapes */}
        <div className="absolute left-10 top-1/2 opacity-20 pointer-events-none">
          <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#5A4A42" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="7" width="20" height="10" rx="5" />
            <line x1="12" y1="7" x2="12" y2="17" />
          </svg>
        </div>
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#5A4A42] text-center max-w-3xl mx-auto mb-16 leading-tight">
            Health products you can trust <br className="hidden md:block"/> service you deserve
          </h1>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 lg:gap-12">
            <div className="w-full md:w-1/3 aspect-[3/4] relative rounded-lg overflow-hidden md:-mt-12">
              <img 
                src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=600" 
                alt="Pouring pills" 
                className="object-cover w-full h-full"
              />
            </div>
            <div className="w-full md:w-1/3 aspect-[4/5] relative rounded-lg overflow-hidden md:mt-12 z-10 shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1550572017-edb7df024090?auto=format&fit=crop&q=80&w=600" 
                alt="Holding bottle" 
                className="object-cover w-full h-full"
              />
            </div>
            <div className="w-full md:w-1/3 aspect-[3/4] relative rounded-lg overflow-hidden md:-mt-12">
              <img 
                src="https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&q=80&w=600" 
                alt="Taking pill" 
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: About Us & Features */}
      <section className="bg-[#EBE9E2] py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-8">
            <h2 className="text-3xl font-serif text-[#5A4A42] w-full md:w-1/3">About us</h2>
            <p className="text-lg text-[#6B6056] w-full md:w-2/3 leading-relaxed">
              Our focus is on nurturing wellness and empowering health for all ages well being for people worldwide.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x divide-transparent md:divide-[#D1CFC7]">
            <div className="flex flex-col items-center text-center px-4">
              <Truck className="w-8 h-8 text-[#5A4A42] mb-4" strokeWidth={1.5} />
              <p className="text-sm font-medium text-[#5A4A42]">Free shipping</p>
            </div>
            <div className="flex flex-col items-center text-center px-4">
              <RotateCcw className="w-8 h-8 text-[#5A4A42] mb-4" strokeWidth={1.5} />
              <p className="text-sm font-medium text-[#5A4A42]">Easy refund</p>
            </div>
            <div className="flex flex-col items-center text-center px-4">
              <Headphones className="w-8 h-8 text-[#5A4A42] mb-4" strokeWidth={1.5} />
              <p className="text-sm font-medium text-[#5A4A42]">Online support</p>
            </div>
            <div className="flex flex-col items-center text-center px-4">
              <CreditCard className="w-8 h-8 text-[#5A4A42] mb-4" strokeWidth={1.5} />
              <p className="text-sm font-medium text-[#5A4A42]">Flexible payment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: What to Expect */}
      <section className="bg-[#F4F2EC] py-24 px-4 relative overflow-hidden">
        <div className="absolute right-10 top-10 opacity-20 pointer-events-none">
          <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="#5A4A42" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="transform rotate-45">
            <rect x="2" y="7" width="20" height="10" rx="5" />
            <line x1="12" y1="7" x2="12" y2="17" />
          </svg>
        </div>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-serif text-[#5A4A42] mb-12 max-w-md">
              What to Expect When You Join Our Team
            </h2>
            <ul className="space-y-6">
              <li className="flex items-center gap-4 text-[#6B6056] text-lg">
                <TrendingUp className="w-6 h-6 text-[#5A4A42]" />
                <span className="font-medium">Mission</span>
              </li>
              <li className="flex items-center gap-4 text-[#6B6056] text-lg">
                <ThumbsUp className="w-6 h-6 text-[#5A4A42]" />
                <span className="font-bold text-[#5A4A42]">Commitments</span>
              </li>
              <li className="flex items-center gap-4 text-[#6B6056] text-lg">
                <Eye className="w-6 h-6 text-[#5A4A42]" />
                <span className="font-medium">Vision</span>
              </li>
            </ul>
          </div>
          
          <div className="w-full md:w-1/2 flex items-end gap-6 relative">
            <div className="w-2/3 aspect-square rounded-lg overflow-hidden shadow-lg relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800" 
                alt="Health supplements" 
                className="object-cover w-full h-full"
              />
            </div>
            <div className="w-1/3 mb-4">
              <p className="text-xs text-[#8A8076] leading-relaxed">
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
            <h2 className="text-3xl md:text-4xl font-serif text-[#5A4A42] mb-6 leading-tight">
              Join our trustable Medifit product community
            </h2>
            <p className="text-[#8A8076] mb-8 leading-relaxed">
              Join us as we build a community where wellness is accessible, education is empowering, and health is a shared journey.
            </p>
            <button className="bg-[#5A4A42] text-white px-6 py-3 rounded text-sm font-medium hover:bg-[#4A3C35] transition-colors flex items-center gap-2">
              Our Products <ArrowRight className="w-4 h-4" />
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

export default About;
