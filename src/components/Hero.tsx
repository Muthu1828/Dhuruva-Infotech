'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, PhoneCall, ShieldCheck, Server, Cpu, Wifi, HardDrive } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/company';

const heroText = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

const heroItem = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' as const } }
};

const cardVariant = {
  hidden: { opacity: 0, x: 30 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, delay: i * 0.12, ease: 'easeOut' as const }
  })
};

const nodes = [
  {
    icon: Cpu,
    title: 'Workstation & Laptops',
    desc: 'Desktop Procurement & Setup',
    status: 'Ready',
    statusColor: 'bg-emerald-500/10 text-emerald-400',
    iconBg: 'bg-sky-500/10 text-sky-400',
    hoverBg: 'group-hover:bg-sky-500 group-hover:text-white'
  },
  {
    icon: Server,
    title: 'Server & LAN Backbone',
    desc: 'Rack, Switches & AD Domain',
    status: 'Active',
    statusColor: 'bg-sky-500/10 text-sky-400',
    iconBg: 'bg-blue-500/10 text-blue-400',
    hoverBg: 'group-hover:bg-blue-500 group-hover:text-white'
  },
  {
    icon: Wifi,
    title: 'Firewall & Wi-Fi Access',
    desc: 'Encrypted Gateway & Coverage',
    status: 'Secure',
    statusColor: 'bg-indigo-500/10 text-indigo-400',
    iconBg: 'bg-indigo-500/10 text-indigo-400',
    hoverBg: 'group-hover:bg-indigo-500 group-hover:text-white'
  },
  {
    icon: HardDrive,
    title: 'Continuous AMC Maintenance',
    desc: 'Backup Audits & On-site Visits',
    status: 'Covered',
    statusColor: 'bg-amber-500/10 text-amber-400',
    iconBg: 'bg-amber-500/10 text-amber-400',
    hoverBg: 'group-hover:bg-amber-500 group-hover:text-white'
  }
];

export const Hero: React.FC = () => {
  return (
    <section className="relative bg-slate-950 text-white pt-12 pb-20 lg:pt-20 lg:pb-28 overflow-hidden border-b border-slate-800">
      {/* Background Graphic Elements */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-500/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Hero Content */}
          <motion.div
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
            variants={heroText}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={heroItem} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-semibold tracking-wide">
              <ShieldCheck className="w-4 h-4 text-sky-400" />
              <span>Complete Corporate IT Partner</span>
            </motion.div>

            <motion.h1 variants={heroItem} className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
              Complete IT Infrastructure Solutions for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-400">
                Your Business
              </span>
            </motion.h1>

            <motion.p variants={heroItem} className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              From systems and networking to security, cloud solutions and annual IT support, Dhruva Infotech helps businesses build, maintain and secure reliable IT infrastructure.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={heroItem} className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                href="/quote"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-bold text-base px-7 py-3.5 rounded-xl shadow-lg shadow-sky-500/20 transition-all hover:scale-[1.02] active:scale-95"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-slate-200 font-semibold text-base px-6 py-3.5 rounded-xl border border-slate-700 transition-all hover:border-slate-600"
              >
                <PhoneCall className="w-4 h-4 text-sky-400" />
                <span>Talk to an IT Expert</span>
              </Link>
            </motion.div>

            {/* Trust Badges */}
            <motion.div variants={heroItem} className="pt-8 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-slate-400 text-xs font-medium">
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>One-Time IT Setup</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <span className="w-2 h-2 rounded-full bg-sky-400" />
                <span>Annual AMC Contracts</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <span className="w-2 h-2 rounded-full bg-blue-400" />
                <span>On-site Tech Support</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <span className="w-2 h-2 rounded-full bg-indigo-400" />
                <span>Hardware & Security</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Hero Tech Graphic — staggered card nodes */}
          <div className="lg:col-span-5 relative">
            <motion.div
              className="relative mx-auto max-w-md lg:max-w-none bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl backdrop-blur-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Top Header */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-xs font-mono text-sky-400 font-semibold uppercase tracking-wider">
                  Enterprise IT Network
                </span>
              </div>

              {/* Staggered node cards */}
              <div className="space-y-4">
                {nodes.map((node, i) => (
                  <motion.div
                    key={i}
                    custom={i}
                    variants={cardVariant}
                    initial="hidden"
                    animate="visible"
                    whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                    className="flex items-center justify-between p-3.5 rounded-xl bg-slate-800/80 border border-slate-700/60 hover:border-sky-500/50 transition-colors group cursor-default"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${node.iconBg} ${node.hoverBg} transition-colors`}>
                        <node.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white">{node.title}</div>
                        <div className="text-xs text-slate-400">{node.desc}</div>
                      </div>
                    </div>
                    <span className={`text-xs px-2 py-0.5 rounded ${node.statusColor} font-mono font-medium`}>
                      {node.status}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Status Banner */}
              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Call: {COMPANY_DETAILS.phone}</span>
                </span>
                <Link href="/amc" className="text-sky-400 hover:underline font-semibold">
                  Explore AMC →
                </Link>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
