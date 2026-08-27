import React from 'react';
import Link from 'next/link';
import { COMPANY_DETAILS } from '../data/company';
import { IconHelper } from './IconHelper';
import { Shield, ArrowRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800">
      {/* Top CTA Bar */}
      <div className="bg-gradient-to-r from-slate-900 via-sky-950 to-slate-900 border-b border-slate-800/80 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold text-white tracking-tight">
              Need Reliable IT Support or System Hardware?
            </h3>
            <p className="text-slate-300 mt-1 text-sm max-w-2xl">
              Tell us what your business needs. Our IT experts can assess your infrastructure, visit your office, and provide a tailored quotation.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              href="/quote"
              className="bg-sky-500 hover:bg-sky-400 text-white font-semibold text-sm px-6 py-3 rounded-lg shadow-lg transition-all flex items-center gap-2"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-sm px-5 py-3 rounded-lg border border-slate-700 transition-all"
            >
              Schedule Site Visit
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Col 1: Company Profile */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-sky-500 to-blue-700 flex items-center justify-center text-white">
                <Shield className="w-5 h-5" />
              </div>
              <span className="text-xl font-black text-white tracking-tight">
                Dhruva<span className="text-sky-400">Infotech</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              Complete IT Infrastructure and System Sales & Services for offices, businesses, and commercial organizations.
            </p>
            <div className="pt-2 text-xs text-slate-500 space-y-1">
              <p>• One-Time IT Services</p>
              <p>• Annual AMC & On-site Maintenance</p>
              <p>• Infrastructure Planning & Supply</p>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-white text-base font-bold mb-4 tracking-wide uppercase text-xs text-sky-400">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              {COMPANY_DETAILS.navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-sky-400 transition-colors flex items-center gap-1.5"
                  >
                    <IconHelper name="ChevronRight" className="w-3.5 h-3.5 text-sky-500" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <h4 className="text-white text-base font-bold mb-4 tracking-wide uppercase text-xs text-sky-400">
              Our IT Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              {COMPANY_DETAILS.footerServices.map((service) => (
                <li key={service.label}>
                  <Link
                    href={service.href}
                    className="hover:text-sky-400 transition-colors flex items-center gap-1.5"
                  >
                    <IconHelper name="ChevronRight" className="w-3.5 h-3.5 text-sky-500" />
                    <span>{service.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Info Placeholders */}
          <div className="space-y-4">
            <h4 className="text-white text-base font-bold mb-4 tracking-wide uppercase text-xs text-sky-400">
              Contact Information
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <IconHelper name="Phone" className="w-4 h-4 text-sky-400 shrink-0 mt-1" />
                <div>
                  <div className="text-xs text-slate-500">Phone / Call</div>
                  <div className="text-slate-200 font-semibold">{COMPANY_DETAILS.phone}</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <IconHelper name="Mail" className="w-4 h-4 text-sky-400 shrink-0 mt-1" />
                <div>
                  <div className="text-xs text-slate-500">Email Address</div>
                  <div className="text-slate-200 font-semibold">{COMPANY_DETAILS.email}</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <IconHelper name="MapPin" className="w-4 h-4 text-sky-400 shrink-0 mt-1" />
                <div>
                  <div className="text-xs text-slate-500">Office Address</div>
                  <div className="text-slate-200 font-semibold">{COMPANY_DETAILS.address}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 Dhruva Infotech. All rights reserved.</p>
          <p className="text-slate-400">
            Professional B2B IT Infrastructure & System Sales Services
          </p>
        </div>
      </div>
    </footer>
  );
};
