'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { AnimatedSection, StaggerContainer, StaggerItem } from './AnimatedSection';

export const WhyChooseUs: React.FC = () => {
  const points = [
    { title: 'Complete IT Infrastructure Support', desc: 'Single point of contact for PC sales, network cabling, firewalls, CCTV, and cloud tools.' },
    { title: 'Professional Technical Assistance', desc: 'Qualified systems engineers who understand business workflows and zero-downtime priorities.' },
    { title: 'Rapid On-site Support', desc: 'Local technician dispatch for urgent hardware fixes, server issues, and network cabling repairs.' },
    { title: 'Reliable Hardware Solutions', desc: 'Genuine commercial-grade desktop PCs, laptops, network switches, and server components.' },
    { title: 'Preventive Maintenance', desc: 'Regular scheduled checkups to clean dust, verify backups, and catch drive failures early.' },
    { title: 'Security-Focused Approach', desc: 'Multi-layer defense covering firewalls, endpoint antivirus, biometric access, and cloud backups.' },
    { title: 'Flexible AMC & One-time Plans', desc: 'Transparent support agreements tailored precisely to your office budget and scale.' },
    { title: 'Business-Oriented Solutions', desc: 'No fluff or exaggerated claims—just reliable, functional IT that keeps work moving.' }
  ];

  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <AnimatedSection direction="up">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-sky-400 bg-sky-950 border border-sky-800/60 rounded-full">
              The Dhruva Advantage
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4 tracking-tight">
              Why Businesses Choose Dhruva Infotech
            </h2>
            <p className="text-slate-300 mt-4 text-base sm:text-lg">
              We operate as your dedicated internal IT department, protecting your technology investment and keeping your employees focused on core work.
            </p>
          </div>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.08}>
          {points.map((pt, idx) => (
            <StaggerItem key={idx}>
              <motion.div
                className="p-6 rounded-2xl bg-slate-800/70 border border-slate-700/70 hover:border-sky-500/60 transition-all h-full"
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <div className="w-10 h-10 rounded-lg bg-sky-500/10 text-sky-400 flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{pt.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{pt.desc}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* CTA Banner */}
        <AnimatedSection delay={0.2} direction="up">
          <div className="mt-14 p-8 rounded-2xl bg-gradient-to-r from-sky-900/60 via-slate-800 to-sky-900/60 border border-sky-700/50 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-white">Ready to Upgrade or Secure Your Office IT?</h3>
              <p className="text-sm text-slate-300 mt-1">Schedule a site audit with an engineer or submit a quotation request.</p>
            </div>
            <div className="shrink-0">
              <Link
                href="/quote"
                className="bg-sky-500 hover:bg-sky-400 text-white font-bold text-sm px-6 py-3 rounded-xl transition-all shadow-lg flex items-center gap-2"
              >
                <span>Get Quotation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
};
