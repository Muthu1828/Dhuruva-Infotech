import React from 'react';
import Link from 'next/link';
import { Hero } from '../components/Hero';
import { TrustValueSection } from '../components/TrustValueSection';
import { ServiceGrid } from '../components/ServiceGrid';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { EcosystemVisual } from '../components/EcosystemVisual';
import { AMCCallout } from '../components/AMCCallout';
import { SectionHeading } from '../components/SectionHeading';
import { AnimatedSection, StaggerContainer, StaggerItem } from '../components/AnimatedSection';
import {
  ArrowRight, Calendar, ShieldAlert, HardDrive, Network,
  ShieldCheck, CheckCircle2, Lock, Server, Wifi
} from 'lucide-react';
import { COMPANY_DETAILS } from '../data/company';

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Trust/Value Highlights */}
      <TrustValueSection />

      {/* ========================================================
          3. FEATURED SPOTLIGHT — Data Backup & IT Networking
          The client's primary focus areas — prominently highlighted
          ======================================================== */}
      <section className="py-20 bg-slate-950 border-b border-slate-800 relative overflow-hidden">
        {/* Subtle ambient glow */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-sky-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection direction="up">
            <div className="text-center mb-14">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-sky-400 bg-sky-950 border border-sky-700/60 rounded-full">
                <ShieldAlert className="w-4 h-4" />
                Our Core Specializations
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-5 tracking-tight">
                Data Backup &amp; Security · IT Networking
              </h2>
              <p className="text-slate-300 mt-4 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
                Protecting your critical business data and building rock-solid IT networks are the two cornerstones of everything we do at Dhruva Infotech.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* ── Card A: Data Backup & Security ── */}
            <AnimatedSection direction="left" delay={0.1}>
              <div className="group relative h-full rounded-3xl overflow-hidden border border-emerald-700/40 bg-gradient-to-br from-slate-900 via-emerald-950/20 to-slate-900 shadow-2xl p-8 sm:p-10 flex flex-col justify-between hover:border-emerald-500/60 transition-all">
                {/* Glow */}
                <div className="absolute top-0 right-0 w-60 h-60 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-emerald-500/20 transition-all duration-700" />

                <div className="relative">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-300 shadow-lg">
                      <HardDrive className="w-8 h-8" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">Primary Specialization</span>
                      <h3 className="text-2xl font-black text-white">Data Backup &amp; Security</h3>
                    </div>
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    Your company data is your most critical asset. We implement multi-layer backup strategies combining local NAS, encrypted cloud archives, and endpoint protection to ensure zero data loss — even during hardware failure or ransomware attacks.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {[
                      'Automated Daily Local Backups',
                      'Encrypted Off-site Cloud Archives',
                      'Ransomware & Endpoint Protection',
                      'Disaster Recovery Planning',
                      'Backup Verification & Monitoring',
                      'Data Retention Policy Enforcement'
                    ].map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Impact Metric Bar */}
                  <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-800/40 text-xs text-emerald-300 flex items-center gap-3 mb-6">
                    <Lock className="w-5 h-5 text-emerald-400 shrink-0" />
                    <span>
                      <strong className="text-emerald-300 font-bold">Business Impact:</strong> Prevent catastrophic data loss, ensure regulatory compliance, and recover within hours — not days.
                    </span>
                  </div>
                </div>

                <Link
                  href="/quote?service=Data%20Backup%20%26%20Security"
                  className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm py-3.5 rounded-xl shadow-lg transition-all"
                >
                  <span>Protect My Business Data</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </AnimatedSection>

            {/* ── Card B: IT Networking ── */}
            <AnimatedSection direction="right" delay={0.1}>
              <div className="group relative h-full rounded-3xl overflow-hidden border border-sky-700/40 bg-gradient-to-br from-slate-900 via-sky-950/20 to-slate-900 shadow-2xl p-8 sm:p-10 flex flex-col justify-between hover:border-sky-500/60 transition-all">
                {/* Glow */}
                <div className="absolute top-0 right-0 w-60 h-60 bg-sky-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-sky-500/20 transition-all duration-700" />

                <div className="relative">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-sky-500/10 text-sky-400 border border-sky-500/30 flex items-center justify-center group-hover:bg-sky-500 group-hover:text-white transition-colors duration-300 shadow-lg">
                      <Network className="w-8 h-8" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-sky-400 uppercase tracking-widest">Primary Specialization</span>
                      <h3 className="text-2xl font-black text-white">IT Networking &amp; Infrastructure</h3>
                    </div>
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    We design, install, and manage complete office network infrastructure — from structured LAN cabling and managed switches to enterprise Wi-Fi coverage, next-generation firewalls, and VPN-secured remote connectivity.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {[
                      'Structured CAT6 / Fiber Cabling',
                      'Managed Switches & Rack Setup',
                      'Enterprise Wi-Fi Access Points',
                      'Next-Gen Firewall Deployment',
                      'VLAN Segmentation & Security',
                      'VPN & Secure Remote Access'
                    ].map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Impact Metric Bar */}
                  <div className="p-4 rounded-xl bg-sky-950/40 border border-sky-800/40 text-xs text-sky-300 flex items-center gap-3 mb-6">
                    <Wifi className="w-5 h-5 text-sky-400 shrink-0" />
                    <span>
                      <strong className="text-sky-300 font-bold">Business Impact:</strong> Eliminate bandwidth bottlenecks, prevent unauthorized access, and guarantee office-wide connectivity.
                    </span>
                  </div>
                </div>

                <Link
                  href="/quote?service=Server%20%26%20Networking"
                  className="w-full inline-flex items-center justify-center gap-2 bg-sky-600 hover:bg-sky-500 text-white font-bold text-sm py-3.5 rounded-xl shadow-lg transition-all"
                >
                  <span>Design My Network</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </AnimatedSection>

          </div>

          {/* Secondary Highlight Strip */}
          <AnimatedSection delay={0.3} direction="up">
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { icon: Server, label: 'Server Setup', sub: 'Racks, NAS, AD' },
                { icon: ShieldCheck, label: 'Firewall Security', sub: 'NGFW & VPN' },
                { icon: HardDrive, label: 'Data Backup', sub: 'Local + Cloud' },
                { icon: Wifi, label: 'Wi-Fi Coverage', sub: 'Full-office AP' },
              ].map((item, i) => (
                <div key={i} className="p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-sky-500/40 transition-colors text-center group">
                  <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-400 group-hover:bg-sky-500 group-hover:text-white flex items-center justify-center mx-auto mb-3 transition-colors">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <p className="text-sm font-bold text-white">{item.label}</p>
                  <p className="text-xs text-slate-400 mt-0.5">{item.sub}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 4. All Services Overview */}
      <section className="py-20 bg-slate-950 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection direction="up">
            <SectionHeading
              badge="Core IT Capabilities"
              title="Comprehensive IT Infrastructure & Support Services"
              subtitle="Explore our 8 core service domains tailored for corporate offices, institutions, and growing commercial enterprises."
              dark={true}
            />
          </AnimatedSection>
          <ServiceGrid featuredOnly={true} />

          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-sky-400 font-semibold text-sm px-6 py-3 rounded-xl border border-slate-800 hover:border-sky-500/40 transition-all"
            >
              <span>Explore All Detailed IT Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Why Choose Dhruva Infotech */}
      <WhyChooseUs />

      {/* 6. IT Infrastructure Lifecycle */}
      <EcosystemVisual />

      {/* 7. AMC Callout */}
      <AMCCallout />

      {/* 8. Final CTA */}
      <section className="py-20 bg-slate-950 text-white border-t border-slate-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection direction="up">
            <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-br from-slate-900 via-sky-950 to-slate-900 border border-sky-800/60 shadow-2xl text-center space-y-6">
              <span className="w-12 h-12 rounded-2xl bg-sky-500/10 text-sky-400 border border-sky-500/30 flex items-center justify-center mx-auto">
                <ShieldAlert className="w-6 h-6" />
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
                Have an IT Requirement or Existing System Issue?
              </h2>

              <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
                Tell us what you need. Our team can understand your requirement, visit your office if required and provide a suitable solution and quotation.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/quote"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-bold text-base px-8 py-4 rounded-xl shadow-lg transition-all"
                >
                  <span>Request a Quote</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-base px-7 py-4 rounded-xl border border-slate-700 transition-all"
                >
                  <Calendar className="w-4 h-4 text-sky-400" />
                  <span>Schedule a Site Visit</span>
                </Link>
              </div>

              <div className="pt-6 text-xs text-slate-400 flex flex-wrap items-center justify-center gap-6">
                <span>📞 Direct Line: <strong>{COMPANY_DETAILS.phone}</strong></span>
                <span>📧 Email: <strong>{COMPANY_DETAILS.email}</strong></span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
