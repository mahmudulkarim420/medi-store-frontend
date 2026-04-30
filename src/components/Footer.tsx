"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Pill } from 'lucide-react';
import pillsLineArt from '@/assets/medical shape 5 1.png';

// Custom Brand Icons
const FacebookIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);

const InstagramIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

const TwitterIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
);

const LinkedinIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#4a3c31]/5 pt-20 pb-10 px-6 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute bottom-[10%] right-[-100px] opacity-[0.03] pointer-events-none -rotate-12 select-none">
          <Image src={pillsLineArt} alt="Decor" width={400} height={400} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">
          
          {/* Pages Column */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-bold text-[#4a3c31] mb-6">Pages</h4>
            <ul className="space-y-4">
              <li><Link href="/" className="text-[#4a3c31]/70 hover:text-[#4a3c31] transition-colors font-medium">Home</Link></li>
              <li><Link href="/shop" className="text-[#4a3c31]/70 hover:text-[#4a3c31] transition-colors font-medium">Shop</Link></li>
              <li><Link href="/about" className="text-[#4a3c31]/70 hover:text-[#4a3c31] transition-colors font-medium">About</Link></li>
              <li><Link href="/contact" className="text-[#4a3c31]/70 hover:text-[#4a3c31] transition-colors font-medium">Contact</Link></li>
              <li><Link href="/blog" className="text-[#4a3c31]/70 hover:text-[#4a3c31] transition-colors font-medium">Blog</Link></li>
              <li><Link href="/privacy" className="text-[#4a3c31]/70 hover:text-[#4a3c31] transition-colors font-medium">Privacy policy</Link></li>
              <li><Link href="/faq" className="text-[#4a3c31]/70 hover:text-[#4a3c31] transition-colors font-medium">FAQs</Link></li>
            </ul>
          </div>

          {/* Utility Column */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-bold text-[#4a3c31] mb-6">Utility</h4>
            <ul className="space-y-4">
              <li><Link href="/style-guide" className="text-[#4a3c31]/70 hover:text-[#4a3c31] transition-colors font-medium">Style guide</Link></li>
              <li><Link href="/instructions" className="text-[#4a3c31]/70 hover:text-[#4a3c31] transition-colors font-medium">Instructions</Link></li>
              <li><Link href="/changelog" className="text-[#4a3c31]/70 hover:text-[#4a3c31] transition-colors font-medium">Changelog</Link></li>
              <li><Link href="/licenses" className="text-[#4a3c31]/70 hover:text-[#4a3c31] transition-colors font-medium">Licenses</Link></li>
              <li><Link href="/links" className="text-[#4a3c31]/70 hover:text-[#4a3c31] transition-colors font-medium">Link in bio</Link></li>
              <li><Link href="/404" className="text-[#4a3c31]/70 hover:text-[#4a3c31] transition-colors font-medium">Error 404</Link></li>
              <li><Link href="/password" className="text-[#4a3c31]/70 hover:text-[#4a3c31] transition-colors font-medium">Password protected</Link></li>
            </ul>
          </div>

          {/* Central Logo Section */}
          <div className="lg:col-span-1 flex flex-col items-center text-center space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 border border-[#4a3c31]/20 rounded-full flex items-center justify-center">
                <div className="w-10 h-10 bg-[#4a3c31] rounded-full flex items-center justify-center">
                  <Pill className="text-white w-6 h-6" />
                </div>
              </div>
              <span className="text-2xl font-bold text-[#4a3c31]">Medifit</span>
            </div>
            <p className="text-[#4a3c31]/60 text-sm max-w-[200px] leading-relaxed">
              We provide the ultimate solution for your online store and all the healthcare needs.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-9 h-9 rounded-full border border-[#4a3c31]/10 flex items-center justify-center hover:bg-[#4a3c31] hover:text-white transition-all text-[#4a3c31]">
                <FacebookIcon size={18} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full border border-[#4a3c31]/10 flex items-center justify-center hover:bg-[#4a3c31] hover:text-white transition-all text-[#4a3c31]">
                <InstagramIcon size={18} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full border border-[#4a3c31]/10 flex items-center justify-center hover:bg-[#4a3c31] hover:text-white transition-all text-[#4a3c31]">
                <TwitterIcon size={18} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full border border-[#4a3c31]/10 flex items-center justify-center hover:bg-[#4a3c31] hover:text-white transition-all text-[#4a3c31]">
                <LinkedinIcon size={18} />
              </a>
            </div>
          </div>

          {/* Address Column */}
          <div className="lg:col-span-1 flex flex-col items-end text-right">
            <h4 className="text-lg font-bold text-[#4a3c31] mb-6">Address</h4>
            <p className="text-[#4a3c31]/70 leading-relaxed">
              B, 9140 Parker Rd. Allentown,<br />New Mexico 31134
            </p>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-1 flex flex-col items-end text-right">
            <h4 className="text-lg font-bold text-[#4a3c31] mb-6">Contact</h4>
            <a href="mailto:mf.hello@gmail.com" className="text-[#4a3c31]/70 hover:text-[#4a3c31] mb-2 block transition-colors font-medium">mf.hello@gmail.com</a>
            <a href="tel:+3085550114" className="text-[#4a3c31]/70 hover:text-[#4a3c31] block transition-colors font-medium">(308) 555-0114</a>
          </div>

        </div>

        <div className="border-t border-[#4a3c31]/5 pt-8 text-center">
          <p className="text-[#4a3c31]/40 text-xs">
            Design by Webestica, Powered by Webflow
          </p>
        </div>
      </div>
    </footer>
  );
}



