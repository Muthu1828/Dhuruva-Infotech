'use client';

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { QuoteForm } from '../../components/QuoteForm';
import { ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

function QuoteContent() {
  const searchParams = useSearchParams();
  const initialService = searchParams.get('service') || '';

  return (
    <div className="bg-slate-950 text-white min-h-screen">
      
      {/* Banner */}
      <section className="bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-sky-400 bg-sky-950 border border-sky-800 rounded-full">
            Commercial Quotation Request
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white mt-4 tracking-tight">
            Request an IT Infrastructure Quote
          </h1>
          <p className="text-slate-300 mt-4 text-base sm:text-lg max-w-2xl mx-auto">
            Get a transparent, customized proposal for system sales, server networking, security installation, or Annual Maintenance Contracts.
          </p>
        </div>
      </section>

      {/* Main Quote Form Container */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <QuoteForm initialService={initialService} />

          <div className="mt-12 p-6 rounded-2xl bg-slate-900 border border-slate-800 text-slate-300 text-xs sm:text-sm space-y-2">
            <h4 className="font-bold text-white uppercase text-xs tracking-wider text-sky-400">Why Request a Quote from Dhruva Infotech?</h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Zero Hidden Fees</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                <span>On-site Inspection Available</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Custom Asset Sizing</span>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}

export default function QuotePage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-8">
        <div className="animate-pulse text-sky-400">Loading Quote Form...</div>
      </div>
    }>
      <QuoteContent />
    </Suspense>
  );
}
