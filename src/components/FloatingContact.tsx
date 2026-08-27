'use client';

import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/company';

export const FloatingContact: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 group">
      {/* WhatsApp Button */}
      <a
        href={COMPANY_DETAILS.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact on WhatsApp"
        className="w-12 h-12 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-400"
        title="WhatsApp Support"
      >
        <MessageSquare className="w-5 h-5 fill-current" />
      </a>

      {/* Call Button */}
      <a
        href={COMPANY_DETAILS.phoneCallUrl}
        aria-label="Call Dhruva Infotech"
        className="w-12 h-12 rounded-full bg-sky-600 hover:bg-sky-500 text-white flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-sky-400"
        title="Call IT Specialist"
      >
        <Phone className="w-5 h-5" />
      </a>
    </div>
  );
};
