import React from 'react';
import { ContactForm } from '../../components/ContactForm';
import { COMPANY_DETAILS } from '../../data/company';
import { IconHelper } from '../../components/IconHelper';
import { Phone, Mail, MapPin, MessageSquare, Clock, ShieldCheck } from 'lucide-react';

export const metadata = {
  title: 'Contact Us | Dhruva Infotech',
  description: 'Get in touch with Dhruva Infotech for IT infrastructure enquiries, computer sales, server setup, CCTV, and AMC quotation.'
};

export default function ContactPage() {
  return (
    <div className="bg-slate-950 text-white min-h-screen">
      
      {/* Banner */}
      <section className="bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-sky-400 bg-sky-950 border border-sky-800 rounded-full">
            Get In Touch
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white mt-4 tracking-tight">
            Contact Dhruva Infotech
          </h1>
          <p className="text-slate-300 mt-4 text-base sm:text-lg max-w-2xl mx-auto">
            Have a question, technical issue, or hardware requirement? Reach out to our IT team or request an office visit.
          </p>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Contact Information Cards (With Explicit Placeholders) */}
            <div className="lg:col-span-5 space-y-6">
              
              <div>
                <span className="text-xs font-semibold text-sky-400 uppercase tracking-wider">
                  Contact Details
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                  We are Ready to Assist Your Office
                </h2>
                <p className="text-slate-400 text-sm mt-2 leading-relaxed">
                  Connect with us directly using phone, email, or WhatsApp. We provide quick responses and flexible site visits based on your technical needs.
                </p>
              </div>

              {/* Card 1: Phone */}
              <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex items-start gap-4 hover:border-sky-500/50 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/30 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400">Phone Support</h3>
                  <p className="text-lg font-bold text-white mt-1">{COMPANY_DETAILS.phone}</p>
                  <p className="text-xs text-slate-400 mt-1">Direct call line for enquiries & support</p>
                </div>
              </div>

              {/* Card 2: Email */}
              <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex items-start gap-4 hover:border-sky-500/50 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/30 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400">Email Address</h3>
                  <p className="text-lg font-bold text-white mt-1">{COMPANY_DETAILS.email}</p>
                  <p className="text-xs text-slate-400 mt-1">Send requirements & RFQs via email</p>
                </div>
              </div>

              {/* Card 3: WhatsApp */}
              <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex items-start gap-4 hover:border-emerald-500/50 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center justify-center shrink-0">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400">WhatsApp Support</h3>
                  <p className="text-lg font-bold text-white mt-1">{COMPANY_DETAILS.whatsapp}</p>
                  <a
                    href={COMPANY_DETAILS.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-emerald-400 hover:underline font-semibold mt-1 inline-block"
                  >
                    Click to chat on WhatsApp →
                  </a>
                </div>
              </div>

              {/* Card 4: Address & Hours */}
              <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/30 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400">Office Location</h3>
                    <p className="text-base font-bold text-white mt-1">{COMPANY_DETAILS.address}</p>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800 flex items-center gap-3 text-xs text-slate-400">
                  <Clock className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>{COMPANY_DETAILS.workingHours}</span>
                </div>
              </div>

            </div>

            {/* Right Contact Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
