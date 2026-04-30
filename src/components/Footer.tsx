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
    <footer className="bg-white border-t border-outline-variant/30 pt-24 pb-12 px-6 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute bottom-[10%] right-[-100px] opacity-[0.03] pointer-events-none -rotate-12 select-none">
          <Image src={pillsLineArt} alt="Decor" width={400} height={400} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">
          
          {/* Pages Column */}
          <div className="lg:col-span-1">
            <h4 className="text-xl font-heading font-extrabold text-primary mb-8 tracking-tight">Pages</h4>
            <ul className="space-y-4">
              <li><Link href="/" className="text-on-surface-variant hover:text-primary transition-colors font-bold text-sm">Home</Link></li>
              <li><Link href="/shop" className="text-on-surface-variant hover:text-primary transition-colors font-bold text-sm">Shop</Link></li>
              <li><Link href="/about" className="text-on-surface-variant hover:text-primary transition-colors font-bold text-sm">About</Link></li>
              <li><Link href="/contact" className="text-on-surface-variant hover:text-primary transition-colors font-bold text-sm">Contact</Link></li>
              <li><Link href="/blog" className="text-on-surface-variant hover:text-primary transition-colors font-bold text-sm">Blog</Link></li>
              <li><Link href="/privacy" className="text-on-surface-variant hover:text-primary transition-colors font-bold text-sm">Privacy policy</Link></li>
              <li><Link href="/faq" className="text-on-surface-variant hover:text-primary transition-colors font-bold text-sm">FAQs</Link></li>
            </ul>
          </div>

          {/* Utility Column */}
          <div className="lg:col-span-1">
            <h4 className="text-xl font-heading font-extrabold text-primary mb-8 tracking-tight">Utility</h4>
            <ul className="space-y-4">
              <li><Link href="/style-guide" className="text-on-surface-variant hover:text-primary transition-colors font-bold text-sm">Style guide</Link></li>
              <li><Link href="/instructions" className="text-on-surface-variant hover:text-primary transition-colors font-bold text-sm">Instructions</Link></li>
              <li><Link href="/changelog" className="text-on-surface-variant hover:text-primary transition-colors font-bold text-sm">Changelog</Link></li>
              <li><Link href="/licenses" className="text-on-surface-variant hover:text-primary transition-colors font-bold text-sm">Licenses</Link></li>
              <li><Link href="/links" className="text-on-surface-variant hover:text-primary transition-colors font-bold text-sm">Link in bio</Link></li>
              <li><Link href="/404" className="text-on-surface-variant hover:text-primary transition-colors font-bold text-sm">Error 404</Link></li>
              <li><Link href="/password" className="text-on-surface-variant hover:text-primary transition-colors font-bold text-sm">Password protected</Link></li>
            </ul>
          </div>

          {/* Central Logo Section */}
          <div className="lg:col-span-1 flex flex-col items-center text-center space-y-8">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center shadow-lg shadow-primary/20 group-hover:rotate-12 transition-transform">
                <Pill className="text-white w-8 h-8" />
              </div>
              <span className="text-3xl font-heading font-extrabold text-primary tracking-tight">Medifit</span>
            </Link>
            <p className="text-on-surface-variant text-sm max-w-[220px] leading-relaxed font-medium">
              We provide the ultimate solution for your online store and all the healthcare needs.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-11 h-11 rounded-xl border border-outline-variant/30 flex items-center justify-center hover:bg-primary hover:text-white transition-all text-primary shadow-sm hover:shadow-lg hover:shadow-primary/20">
                <FacebookIcon size={20} />
              </a>
              <a href="#" className="w-11 h-11 rounded-xl border border-outline-variant/30 flex items-center justify-center hover:bg-primary hover:text-white transition-all text-primary shadow-sm hover:shadow-lg hover:shadow-primary/20">
                <InstagramIcon size={20} />
              </a>
              <a href="#" className="w-11 h-11 rounded-xl border border-outline-variant/30 flex items-center justify-center hover:bg-primary hover:text-white transition-all text-primary shadow-sm hover:shadow-lg hover:shadow-primary/20">
                <TwitterIcon size={20} />
              </a>
              <a href="#" className="w-11 h-11 rounded-xl border border-outline-variant/30 flex items-center justify-center hover:bg-primary hover:text-white transition-all text-primary shadow-sm hover:shadow-lg hover:shadow-primary/20">
                <LinkedinIcon size={20} />
              </a>
            </div>
          </div>

          {/* Address Column */}
          <div className="lg:col-span-1 flex flex-col items-end text-right">
            <h4 className="text-xl font-heading font-extrabold text-primary mb-8 tracking-tight">Address</h4>
            <p className="text-on-surface-variant leading-relaxed font-bold text-sm">
              B, 9140 Parker Rd. Allentown,<br />New Mexico 31134
            </p>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-1 flex flex-col items-end text-right">
            <h4 className="text-xl font-heading font-extrabold text-primary mb-8 tracking-tight">Contact</h4>
            <div className="space-y-4">
              <p className="text-on-surface-variant font-bold text-sm hover:text-primary transition-colors cursor-pointer">
                contact@medifit.com
              </p>
              <p className="text-on-surface-variant font-bold text-sm hover:text-primary transition-colors cursor-pointer">
                (123) 456 - 7890
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-outline-variant/30 pt-10 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-xs font-black text-on-surface-variant uppercase tracking-widest">
            © 2026 Medifit. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-10">
            <Link href="/privacy" className="text-xs font-black text-on-surface-variant uppercase tracking-widest hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-xs font-black text-on-surface-variant uppercase tracking-widest hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}



