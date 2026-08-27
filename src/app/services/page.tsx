import React from 'react';
import Link from 'next/link';
import { SERVICES_DATA } from '../../data/services';
import { SectionHeading } from '../../components/SectionHeading';
import { IconHelper } from '../../components/IconHelper';
import { ArrowRight, CheckCircle2, ShieldCheck, HelpCircle } from 'lucide-react';

export const metadata = {
  title: 'IT Services & Solutions | Dhruva Infotech',
  description: 'Explore Dhruva Infotech services: Desktop & Laptop Sales, Server Networking, Firewall Wi-Fi, CCTV Biometric, Microsoft 365, Data Backup, IT AMC, and Infrastructure Maintenance.'
};

export default function ServicesPage() {
  return (
    <div className="bg-slate-950 text-white min-h-screen">
      
      {/* Banner */}
      <section className="bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-sky-400 bg-sky-950 border border-sky-800 rounded-full">
            Our Offerings
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white mt-4 tracking-tight">
            Professional IT Services & Solutions
          </h1>
          <p className="text-slate-300 mt-4 text-base sm:text-lg max-w-3xl mx-auto">
            From hardware procurement and server setup to firewall security, cloud migration, and annual maintenance contracts.
          </p>
        </div>
      </section>

      {/* Services Grid Navigation Bar */}
      <section className="py-8 bg-slate-900 border-b border-slate-800 sticky top-20 z-30 hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center gap-2 overflow-x-auto text-xs font-semibold">
          {SERVICES_DATA.map((service) => (
            <a
              key={service.id}
              href={`#${service.id}`}
              className="px-3 py-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-sky-600 transition-colors whitespace-nowrap"
            >
              {service.title}
            </a>
          ))}
        </div>
      </section>

      {/* Deep-Dive Service Details Sections */}
      <section className="py-20 space-y-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {SERVICES_DATA.map((service, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                id={service.id}
                key={service.id}
                className="scroll-mt-36 p-8 sm:p-12 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl relative overflow-hidden transition-all hover:border-slate-700"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Service Info */}
                  <div className="lg:col-span-7 space-y-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/30 flex items-center justify-center">
                        <IconHelper name={service.iconName} className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-sky-400 uppercase tracking-wider">
                          Service Domain 0{idx + 1}
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                          {service.title}
                        </h2>
                      </div>
                    </div>

                    <p className="text-slate-300 text-base leading-relaxed">
                      {service.fullDescription}
                    </p>

                    {/* Features List */}
                    <div className="space-y-3">
                      <h3 className="text-xs font-semibold uppercase tracking-wider text-sky-400">
                        Core Service Scope:
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-300">
                        {service.keyFeatures.map((feature, fIdx) => (
                          <div key={fIdx} className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Business Benefits */}
                    <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/60 space-y-2">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
                        Business Impact:
                      </h4>
                      <ul className="space-y-1 text-xs text-slate-300">
                        {service.businessBenefits.map((ben, bIdx) => (
                          <li key={bIdx}>• {ben}</li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA Button */}
                    <div className="pt-2">
                      <Link
                        href={`/quote?service=${encodeURIComponent(service.title)}`}
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-lg transition-all"
                      >
                        <span>{service.ctaText}</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>

                  {/* Visual Capability Card */}
                  <div className="lg:col-span-5">
                    <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-4 text-xs font-mono text-slate-300">
                      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                        <span className="text-sky-400 font-bold">DEPLOYMENT SPECIFICATION</span>
                        <span className="text-slate-500">ID: {service.slug}</span>
                      </div>
                      
                      <div className="space-y-2">
                        <p className="text-slate-400">// Service Classification:</p>
                        <p className="text-white bg-slate-900 p-2 rounded border border-slate-800 font-sans font-semibold">
                          {service.category.toUpperCase()} INFRASTRUCTURE
                        </p>

                        <p className="text-slate-400 pt-2">// Support Coverage:</p>
                        <p className="text-emerald-400">✓ One-time Installation Available</p>
                        <p className="text-emerald-400">✓ Annual AMC Contract Eligible</p>
                        <p className="text-emerald-400">✓ On-site Technician Dispatch</p>
                      </div>

                      <div className="pt-4 border-t border-slate-800 text-center">
                        <Link
                          href={`/contact?service=${encodeURIComponent(service.title)}`}
                          className="text-sky-400 hover:underline font-sans text-xs font-semibold"
                        >
                          Request Technical Assessment →
                        </Link>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 bg-slate-900 border-t border-slate-800 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Need a Multi-Service Custom Infrastructure Bundle?</h2>
          <p className="text-slate-300 mt-2 text-sm">We can combine hardware sales, firewall security, and AMC contracts into a unified proposal.</p>
          <div className="mt-6">
            <Link
              href="/quote"
              className="bg-sky-500 hover:bg-sky-400 text-white font-bold text-sm px-8 py-3.5 rounded-xl transition-all shadow-lg inline-flex items-center gap-2"
            >
              <span>Build Custom Proposal</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
