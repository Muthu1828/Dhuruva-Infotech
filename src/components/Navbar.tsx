'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { COMPANY_DETAILS } from '../data/company';
import { IconHelper } from './IconHelper';
import { Menu, X, ArrowRight, Shield, PhoneCall } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 hover:text-sky-400 transition-colors">
              <IconHelper name="Phone" className="w-3.5 h-3.5 text-sky-400" />
              <span>Call: <strong className="font-semibold text-white">{COMPANY_DETAILS.phone}</strong></span>
            </span>
            <span className="flex items-center gap-1.5 hover:text-sky-400 transition-colors">
              <IconHelper name="Mail" className="w-3.5 h-3.5 text-sky-400" />
              <span>Email: <strong className="font-semibold text-white">{COMPANY_DETAILS.email}</strong></span>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-slate-400">{COMPANY_DETAILS.workingHours}</span>
            <Link 
              href="/amc" 
              className="bg-sky-500/10 text-sky-400 hover:bg-sky-500/20 px-2.5 py-0.5 rounded text-[11px] font-medium border border-sky-500/30 transition-all"
            >
              AMC Support Available
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-slate-800 text-white' 
          : 'bg-slate-900 border-b border-slate-800 text-white'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500 to-blue-700 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-tight text-white group-hover:text-sky-400 transition-colors">
                  Dhruva<span className="text-sky-400">Infotech</span>
                </span>
                <span className="text-[10px] tracking-wider uppercase font-semibold text-slate-400">
                  IT Infrastructure & Support
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1">
              {COMPANY_DETAILS.navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      isActive
                        ? 'text-sky-400 bg-slate-800/80 font-semibold'
                        : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/quote"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold text-sm px-5 py-2.5 rounded-lg shadow-md hover:from-sky-400 hover:to-blue-500 transition-all hover:shadow-sky-500/20 active:scale-95"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex lg:hidden items-center gap-2">
              <Link
                href="/quote"
                className="bg-sky-500 text-white text-xs font-semibold px-3 py-1.5 rounded-md hover:bg-sky-400 transition-colors"
              >
                Quote
              </Link>
              <button
                onClick={toggleMenu}
                aria-label="Toggle navigation menu"
                className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div className="lg:hidden bg-slate-900 border-b border-slate-800 px-4 pt-2 pb-6 space-y-2 animate-in slide-in-from-top duration-200">
            {COMPANY_DETAILS.navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-sky-500/10 text-sky-400 font-semibold border-l-4 border-sky-400'
                      : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            
            <div className="pt-4 mt-2 border-t border-slate-800 space-y-3 px-2">
              <div className="text-xs text-slate-400 space-y-1">
                <p className="flex items-center gap-2 text-slate-300">
                  <PhoneCall className="w-4 h-4 text-sky-400" />
                  <span>Call: <strong>{COMPANY_DETAILS.phone}</strong></span>
                </p>
                <p className="flex items-center gap-2 text-slate-300 pt-1">
                  <IconHelper name="Mail" className="w-4 h-4 text-sky-400" />
                  <span>Email: <strong>{COMPANY_DETAILS.email}</strong></span>
                </p>
              </div>
              <Link
                href="/quote"
                onClick={() => setIsOpen(false)}
                className="w-full flex items-center justify-center gap-2 bg-sky-500 text-white font-semibold text-sm py-3 rounded-lg hover:bg-sky-400 transition-colors shadow-md"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
