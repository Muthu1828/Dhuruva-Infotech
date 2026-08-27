'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ECOSYSTEM_STEPS } from '../data/solutions';
import { AnimatedSection } from './AnimatedSection';
import { ArrowRight } from 'lucide-react';

const phaseColors = [
  { badge: 'bg-sky-500/10 text-sky-400 border-sky-500/30', hover: 'hover:border-sky-500/60' },
  { badge: 'bg-blue-500/10 text-blue-400 border-blue-500/30', hover: 'hover:border-blue-500/60' },
  { badge: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/30', hover: 'hover:border-indigo-500/60' },
  { badge: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30', hover: 'hover:border-emerald-500/60' },
  { badge: 'bg-amber-500/10 text-amber-400 border-amber-500/30', hover: 'hover:border-amber-500/60' },
  { badge: 'bg-rose-500/10 text-rose-400 border-rose-500/30', hover: 'hover:border-rose-500/60' },
];

const lifecycleTokens = [
  { label: 'Plan', color: 'bg-sky-500/10 text-sky-400 border-sky-500/30' },
  { label: 'Supply', color: 'bg-blue-500/10 text-blue-400 border-blue-500/30' },
  { label: 'Install', color: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/30' },
  { label: 'Secure', color: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30' },
  { label: 'Maintain', color: 'bg-amber-500/10 text-amber-400 border-amber-500/30' },
  { label: 'Support', color: 'bg-rose-500/10 text-rose-400 border-rose-500/30' },
];

export const EcosystemVisual: React.FC = () => {
  return (
    <section className="py-20 bg-slate-950 text-white relative border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <AnimatedSection direction="up">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-sky-400 bg-sky-950 border border-sky-800/60 rounded-full">
              Complete IT Lifecycle
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4 tracking-tight">
              How We Build &amp; Maintain Your IT Ecosystem
            </h2>
            <p className="text-slate-300 mt-4 text-base sm:text-lg">
              Dhruva Infotech manages the complete lifecycle of your business technology infrastructure so you never have to deal with multiple fragmented vendors.
            </p>
          </div>
        </AnimatedSection>

        {/* Phase Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {ECOSYSTEM_STEPS.map((step, idx) => {
            const colors = phaseColors[idx];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, delay: idx * 0.1, ease: 'easeOut' }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className={`relative p-7 rounded-2xl bg-slate-900 border border-slate-800 ${colors.hover} transition-all group cursor-default`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-xs font-mono font-bold px-3 py-1 rounded border ${colors.badge}`}>
                    PHASE {step.number}
                  </span>
                  <span className="text-sm font-bold uppercase tracking-wider text-slate-400">
                    {step.phase}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-sky-400 transition-colors">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">{step.description}</p>

                {idx < ECOSYSTEM_STEPS.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                    <div className="w-6 h-6 rounded-full bg-slate-800 text-sky-400 border border-slate-700 flex items-center justify-center">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Lifecycle Token Row */}
        <AnimatedSection delay={0.3}>
          <div className="mt-12 p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-center">
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs font-bold uppercase tracking-wider text-slate-300">
              {lifecycleTokens.map((token, i) => (
                <React.Fragment key={i}>
                  <span className={`px-3 py-1 rounded-md border ${token.color}`}>{token.label}</span>
                  {i < lifecycleTokens.length - 1 && (
                    <span className="text-slate-600">→</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
};
