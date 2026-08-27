import React from 'react';
import Link from 'next/link';
import { AMC_PAGE_DATA } from '../../data/amc';
import { SectionHeading } from '../../components/SectionHeading';
import { QuoteForm } from '../../components/QuoteForm';
import { FAQAccordion } from '../../components/FAQAccordion';
import { ShieldCheck, CheckCircle2, Clock, Zap, ArrowRight, Wrench, FileText } from 'lucide-react';

export const metadata = {
  title: 'Annual Maintenance Contract (AMC) & Support | Dhruva Infotech',
  description: 'Reliable IT Support. Predictable Maintenance. Less Downtime. Explore Dhruva Infotech Annual AMC packages and One-Time Support services.'
};

export default function AMCPage() {
  return (
    <div className="bg-slate-950 text-white min-h-screen">
      
      {/* Banner */}
      <section className="bg-gradient-to-b from-slate-900 via-sky-950 to-slate-950 py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-sky-400 bg-sky-900/60 border border-sky-700/60 rounded-full inline-flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-sky-400" />
            IT Maintenance & Support
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight max-w-4xl mx-auto">
            {AMC_PAGE_DATA.headline}
          </h1>
          <p className="text-slate-300 text-base sm:text-xl max-w-3xl mx-auto leading-relaxed">
            {AMC_PAGE_DATA.subheadline}
          </p>

          <div className="pt-6 flex justify-center gap-4">
            <a
              href="#amc-quote-form"
              className="bg-sky-500 hover:bg-sky-400 text-white font-bold text-sm px-8 py-3.5 rounded-xl shadow-lg transition-all flex items-center gap-2"
            >
              <span>Request AMC Quote</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Comparison: One-Time Support vs Annual AMC */}
      <section className="py-20 border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <SectionHeading
            badge="Support Models"
            title="Choose the Engagement Model That Fits Your Office"
            subtitle="Whether you need urgent single-issue troubleshooting or complete annual preventive maintenance, Dhruva Infotech delivers transparent, professional service."
            dark={true}
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* One-Time Support */}
            <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider px-3 py-1 rounded bg-slate-800 border border-slate-700">
                  On-Demand Support
                </span>
                <Wrench className="w-6 h-6 text-slate-400" />
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-2">{AMC_PAGE_DATA.oneTimeSupport.title}</h2>
                <p className="text-xs text-slate-300">{AMC_PAGE_DATA.oneTimeSupport.targetAudience}</p>
              </div>

              <ul className="space-y-3 text-sm">
                {AMC_PAGE_DATA.oneTimeSupport.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                    <span className="text-slate-300">{feat}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-slate-800">
                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs py-3 rounded-xl transition-colors"
                >
                  Book One-Time Technical Visit
                </Link>
              </div>
            </div>

            {/* Annual AMC */}
            <div className="p-8 rounded-3xl bg-gradient-to-b from-sky-950 to-slate-900 border-2 border-sky-500 shadow-2xl space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-sky-500 text-white text-[10px] font-bold px-3.5 py-1 rounded-bl-lg uppercase tracking-wider">
                Most Popular
              </div>

              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-sky-400 uppercase tracking-wider px-3 py-1 rounded bg-sky-900/60 border border-sky-700">
                  Comprehensive Agreement
                </span>
                <ShieldCheck className="w-7 h-7 text-sky-400" />
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-2">{AMC_PAGE_DATA.annualAMC.title}</h2>
                <p className="text-xs text-sky-200">{AMC_PAGE_DATA.annualAMC.targetAudience}</p>
              </div>

              <ul className="space-y-3 text-sm">
                {AMC_PAGE_DATA.annualAMC.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                    <span className="text-slate-100 font-medium">{feat}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-sky-900/60">
                <a
                  href="#amc-quote-form"
                  className="w-full inline-flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-400 text-white font-bold text-sm py-3.5 rounded-xl transition-all shadow-md"
                >
                  <span>Request Custom AMC Proposal</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5-Step AMC Onboarding Process Flow */}
      <section className="py-20 bg-slate-900 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <SectionHeading
            badge="Process Workflow"
            title="Our 5-Step AMC Engagement Process"
            subtitle="Transparent and structured from initial site review to continuous technical maintenance."
            dark={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {AMC_PAGE_DATA.processSteps.map((step) => (
              <div key={step.step} className="p-6 rounded-2xl bg-slate-800 border border-slate-700/80 space-y-3 relative group hover:border-sky-500 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-sky-500/10 text-sky-400 font-mono font-bold flex items-center justify-center text-sm border border-sky-500/30">
                  0{step.step}
                </div>
                <h3 className="text-base font-bold text-white group-hover:text-sky-400 transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dedicated AMC Form Section */}
      <section id="amc-quote-form" className="py-20 border-b border-slate-900 scroll-mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Tailored Pricing"
            title="Request Your AMC Quotation"
            subtitle="No hidden fees or generic pricing. Tell us your equipment count for a customized quote."
            dark={true}
          />
          <QuoteForm initialService="IT AMC & On-site Support" />
        </div>
      </section>

      {/* AMC FAQs */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Frequently Asked Questions"
            title="AMC & Support FAQs"
            subtitle="Common questions about our Annual Maintenance Contracts and technical response times."
            dark={true}
          />
          <FAQAccordion />
        </div>
      </section>

    </div>
  );
}
