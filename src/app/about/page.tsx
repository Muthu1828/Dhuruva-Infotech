import React from 'react';
import Link from 'next/link';
import { SectionHeading } from '../../components/SectionHeading';
import { COMPANY_DETAILS } from '../../data/company';
import { ShieldCheck, ArrowRight, CheckCircle2, Building, Wrench, Users, Target } from 'lucide-react';

export const metadata = {
  title: 'About Us | Dhruva Infotech',
  description: 'Learn about Dhruva Infotech - Your reliable corporate IT infrastructure, system sales, and Annual Maintenance Contract (AMC) partner.'
};

export default function AboutPage() {
  const whatWeDoList = [
    { title: 'Hardware Procurement', desc: 'Commercial desktop PCs, business laptops, servers, monitors, and workstation components.' },
    { title: 'Server & LAN Networking', desc: 'Structured cabling, server rack setup, domain controllers, switches, and patch routing.' },
    { title: 'Network & Perimeter Security', desc: 'Next-gen business firewalls, encrypted VPNs, secure guest Wi-Fi, and content security.' },
    { title: 'Cloud Productivity Solutions', desc: 'Microsoft 365 setup, Exchange business email, OneDrive cloud storage, and user administration.' },
    { title: 'Data Backup & Recovery', desc: 'Automated local NAS backups, encrypted off-site cloud archives, and disaster recovery.' },
    { title: 'Surveillance & Access Control', desc: 'IP CCTV camera installation, NVR setup, biometric attendance, and door locks.' },
    { title: 'Annual IT Maintenance (AMC)', desc: 'Scheduled preventive checkups, routine servicing, and fixed annual IT cost support contracts.' },
    { title: 'On-site Technical Support', desc: 'Rapid engineer dispatch for hardware repair, network troubleshooting, and employee queries.' }
  ];

  const approachSteps = [
    { num: '01', title: 'Understand', desc: 'We inspect your office infrastructure, asset count, network demands, and operational goals.' },
    { num: '02', title: 'Recommend', desc: 'We propose clear, right-sized hardware specifications and support plans without overselling.' },
    { num: '03', title: 'Implement', desc: 'Our technical team deploys cabling, installs PCs, locks down firewalls, and sets up cloud tools.' },
    { num: '04', title: 'Support', desc: 'We provide continuous AMC maintenance, remote helpdesk assistance, and rapid on-site visits.' }
  ];

  return (
    <div className="bg-slate-950 text-white min-h-screen">
      
      {/* Page Banner Header */}
      <section className="bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-sky-400 bg-sky-950 border border-sky-800 rounded-full">
            Corporate Profile
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white mt-4 tracking-tight">
            About Dhruva Infotech
          </h1>
          <p className="text-slate-300 mt-4 text-base sm:text-lg max-w-3xl mx-auto">
            Your single-source partner for corporate IT infrastructure solutions, system sales, network security, and annual maintenance support.
          </p>
        </div>
      </section>

      {/* 1. Introduction Section */}
      <section className="py-20 border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-semibold text-sky-400 uppercase tracking-wider">
                Who We Are
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                Empowering Businesses with Reliable IT Infrastructure
              </h2>
              <p className="text-slate-300 leading-relaxed">
                Dhruva Infotech is a professional IT infrastructure and system sales & services company dedicated to helping offices, schools, hospitals, commercial units, and growing companies build and maintain stable technical environments.
              </p>
              <p className="text-slate-300 leading-relaxed">
                We bridge the gap between initial hardware procurement and long-term operational maintenance. Whether your business requires a one-time desktop deployment, complete server room cabling, or a comprehensive Annual Maintenance Contract (AMC), our team brings structured engineering discipline to every project.
              </p>
              
              <div className="pt-4 grid grid-cols-2 gap-4 text-sm font-semibold text-slate-200">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-sky-400" />
                  <span>One-time IT Setup & Sales</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-sky-400" />
                  <span>Annual AMC & Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-sky-400" />
                  <span>On-site Tech Dispatch</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-sky-400" />
                  <span>Zero Fake Claims</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl space-y-6">
                <h3 className="text-xl font-bold text-white border-b border-slate-800 pb-4">
                  Our Mission & Focus
                </h3>
                <div className="space-y-4 text-sm text-slate-300">
                  <div className="flex items-start gap-3">
                    <Target className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white">Trustworthy Partner:</strong> Present clear, honest technical recommendations tailored to your exact operational scale.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Wrench className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white">Proactive Uptime:</strong> Prevent system breakdowns through scheduled servicing before work is disrupted.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Building className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white">Business-First IT:</strong> Ensure technology serves your commercial goals seamlessly.
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. What We Do */}
      <section className="py-20 bg-slate-900 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Services Overview"
            title="What We Do"
            subtitle="We provide end-to-end technical capabilities across hardware, networking, security, cloud, and maintenance."
            dark={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whatWeDoList.map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-800/60 border border-slate-700/60 hover:border-sky-500/50 transition-colors">
                <CheckCircle2 className="w-6 h-6 text-sky-400 mb-3" />
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Our Approach */}
      <section className="py-20 border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Methodology"
            title="Our Approach"
            subtitle="A systematic, 4-step workflow that guarantees complete clarity and reliable execution."
            dark={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {approachSteps.map((step, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-slate-900 border border-slate-800 relative group hover:border-sky-500/50 transition-all">
                <span className="text-3xl font-mono font-black text-sky-400/40 group-hover:text-sky-400 transition-colors">
                  {step.num}
                </span>
                <h3 className="text-xl font-bold text-white mt-4 mb-2">{step.title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Why Businesses Choose Us */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white">Why Businesses Partner With Us</h2>
          <p className="text-slate-300 mt-4 text-base max-w-2xl mx-auto">
            We focus on grounded engineering practices, clear quotations, transparent communication, and dependable local support without false promises or exaggerated claims.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/quote"
              className="bg-sky-500 hover:bg-sky-400 text-white font-bold text-sm px-8 py-3.5 rounded-xl shadow-lg transition-all flex items-center gap-2"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-sm px-6 py-3.5 rounded-xl border border-slate-700 transition-all"
            >
              Contact Our IT Engineers
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
