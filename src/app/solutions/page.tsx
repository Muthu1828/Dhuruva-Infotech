import React from 'react';
import Link from 'next/link';
import { SOLUTIONS_DATA } from '../../data/solutions';
import { EcosystemVisual } from '../../components/EcosystemVisual';
import { SectionHeading } from '../../components/SectionHeading';
import { IconHelper } from '../../components/IconHelper';
import { ArrowRight, CheckCircle2, ShieldCheck, Layers } from 'lucide-react';

export const metadata = {
  title: 'Business IT Solutions | Dhruva Infotech',
  description: 'Enterprise IT Solutions: Workplace IT, Network Infrastructure, Server Architecture, Security & Surveillance, Data Protection, and Managed IT Support.'
};

export default function SolutionsPage() {
  return (
    <div className="bg-slate-950 text-white min-h-screen">
      
      {/* Banner Header */}
      <section className="bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-sky-400 bg-sky-950 border border-sky-800 rounded-full">
            Enterprise Architecture
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white mt-4 tracking-tight">
            Complete Business IT Solutions
          </h1>
          <p className="text-slate-300 mt-4 text-base sm:text-lg max-w-3xl mx-auto">
            Architected for commercial offices, multi-branch firms, schools, hospitals, and growing businesses requiring reliable IT infrastructure.
          </p>
        </div>
      </section>

      {/* Solutions Categories Grid */}
      <section className="py-20 border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <SectionHeading
            badge="Solutions Categories"
            title="Tailored IT Frameworks for Commercial Offices"
            subtitle="Explore how our categorized IT solutions streamline hardware deployment, data security, and employee connectivity."
            dark={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SOLUTIONS_DATA.map((sol) => (
              <div
                key={sol.id}
                className="p-8 rounded-3xl bg-slate-900 border border-slate-800 hover:border-sky-500/60 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/30 flex items-center justify-center group-hover:bg-sky-500 group-hover:text-white transition-colors">
                      <IconHelper name={sol.iconName} className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-slate-800 text-sky-400 border border-slate-700">
                      {sol.badge}
                    </span>
                  </div>

                  <h2 className="text-2xl font-bold text-white mb-1 group-hover:text-sky-400 transition-colors">
                    {sol.title}
                  </h2>
                  <p className="text-xs font-semibold text-slate-400 mb-4">{sol.subtitle}</p>
                  
                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {sol.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-sky-400">
                      Included Capabilities:
                    </h3>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      {sol.items.map((item, iIdx) => (
                        <li key={iIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800">
                  <Link
                    href={`/quote?service=${encodeURIComponent(sol.title)}`}
                    className="w-full inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-sky-600 text-white font-semibold text-xs py-2.5 px-4 rounded-xl transition-all"
                  >
                    <span>Request Solution Proposal</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Visual Complete IT Ecosystem Section */}
      <EcosystemVisual />

      {/* Solutions CTA */}
      <section className="py-16 bg-slate-900 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-black text-white">Require an On-Site IT Assessment?</h2>
          <p className="text-slate-300 mt-2 text-sm max-w-xl mx-auto">
            Our systems engineers can visit your facility to inspect your current server, network, and security setup before providing a comprehensive proposal.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <Link
              href="/contact"
              className="bg-sky-500 hover:bg-sky-400 text-white font-bold text-sm px-8 py-3.5 rounded-xl shadow-lg transition-all flex items-center gap-2"
            >
              <span>Schedule Site Inspection</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
