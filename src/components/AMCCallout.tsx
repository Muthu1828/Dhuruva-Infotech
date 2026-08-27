import React from 'react';
import Link from 'next/link';
import { AMC_PAGE_DATA } from '../data/amc';
import { Check, ShieldCheck, Clock, Zap, ArrowRight, Wrench } from 'lucide-react';

export const AMCCallout: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner Header */}
        <div className="bg-gradient-to-br from-sky-950 via-slate-900 to-blue-950 p-8 sm:p-12 rounded-3xl border border-sky-800/60 shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl relative z-10 space-y-4">
            <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-sky-400 bg-sky-900/60 border border-sky-700/60 rounded-full inline-flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-sky-400" />
              Annual Maintenance Contract (AMC)
            </span>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              Keep Your Business Running. <span className="text-sky-400">Let Us Handle Your IT.</span>
            </h2>
            
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Eliminate unexpected computer failures, network outages, and high emergency repair bills with scheduled preventive maintenance and priority on-site support.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href="/amc"
                className="bg-sky-500 hover:bg-sky-400 text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-lg transition-all flex items-center gap-2"
              >
                <span>Explore AMC Services</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/quote?service=IT%20AMC%20%26%20On-site%20Support"
                className="bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-sm px-6 py-3.5 rounded-xl border border-slate-700 transition-all"
              >
                Request AMC Quote
              </Link>
            </div>
          </div>
        </div>

        {/* One-Time vs AMC Comparison Cards */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Card 1: One-Time Support */}
          <div className="p-8 rounded-2xl bg-slate-800/80 border border-slate-700/80 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold px-2.5 py-1 rounded bg-slate-700 text-slate-300 uppercase tracking-wider">
                  Pay As You Go
                </span>
                <Wrench className="w-5 h-5 text-slate-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{AMC_PAGE_DATA.oneTimeSupport.title}</h3>
              <p className="text-xs text-slate-300 mb-6">{AMC_PAGE_DATA.oneTimeSupport.targetAudience}</p>
              
              <ul className="space-y-3 text-sm">
                {AMC_PAGE_DATA.oneTimeSupport.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                    <span className="text-slate-300">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-700">
              <Link
                href="/contact"
                className="text-xs font-semibold text-slate-300 hover:text-white flex items-center justify-between"
              >
                <span>Book a Single Support Visit</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </Link>
            </div>
          </div>

          {/* Card 2: Annual AMC (Highlighted) */}
          <div className="p-8 rounded-2xl bg-gradient-to-b from-sky-950/80 to-slate-900 border-2 border-sky-500/60 shadow-xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-sky-500 text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider">
              Recommended for Offices
            </div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold px-2.5 py-1 rounded bg-sky-500/20 text-sky-400 border border-sky-500/40 uppercase tracking-wider">
                  Complete Coverage
                </span>
                <ShieldCheck className="w-6 h-6 text-sky-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{AMC_PAGE_DATA.annualAMC.title}</h3>
              <p className="text-xs text-sky-200 mb-6">{AMC_PAGE_DATA.annualAMC.targetAudience}</p>
              
              <ul className="space-y-3 text-sm">
                {AMC_PAGE_DATA.annualAMC.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                    <span className="text-slate-100 font-medium">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-sky-900/60">
              <Link
                href="/quote?service=Annual%20IT%20Infrastructure%20Maintenance"
                className="w-full inline-flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-400 text-white font-bold text-sm py-3 px-4 rounded-xl transition-all shadow-md"
              >
                <span>Get Customized AMC Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
