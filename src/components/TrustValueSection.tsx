'use client';

import React from 'react';
import { StaggerContainer, StaggerItem } from './AnimatedSection';
import { IconHelper } from './IconHelper';

export const TrustValueSection: React.FC = () => {
  const benefits = [
    {
      title: 'Complete IT Solutions',
      description: 'Single window partner for hardware procurement, network infrastructure, security systems, cloud setup, and maintenance.',
      iconName: 'Server'
    },
    {
      title: 'On-site Technical Support',
      description: 'Experienced engineers available for rapid office visits, system diagnostics, installation, and hardware troubleshooting.',
      iconName: 'Wrench'
    },
    {
      title: 'Business-focused Solutions',
      description: 'Tailored infrastructure plans aligned strictly with your operational budget, employee headcount, and growth requirements.',
      iconName: 'Briefcase'
    },
    {
      title: 'One-Time & AMC Support',
      description: 'Flexible engagement models—choose between project-based one-time support or predictable annual maintenance contracts.',
      iconName: 'ShieldCheck'
    }
  ];

  return (
    <section className="py-16 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
          {benefits.map((item, idx) => (
            <StaggerItem key={idx}>
              <div className="p-6 rounded-2xl bg-slate-800/60 border border-slate-700/60 hover:border-sky-500/50 hover:bg-slate-800 transition-all group h-full">
                <div className="w-12 h-12 rounded-xl bg-sky-500/10 text-sky-400 group-hover:bg-sky-500 group-hover:text-white flex items-center justify-center mb-4 transition-colors duration-300">
                  <IconHelper name={item.iconName} className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed">{item.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
