'use client';

import React, { useState } from 'react';
import { FAQS_DATA } from '../data/faqs';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FAQAccordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {FAQS_DATA.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm transition-all"
          >
            <button
              onClick={() => toggle(idx)}
              className="w-full text-left p-6 flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-sky-600 transition-colors focus:outline-none"
            >
              <div className="flex items-center gap-3">
                <HelpCircle className="w-5 h-5 text-sky-500 shrink-0" />
                <span className="text-base sm:text-lg">{faq.question}</span>
              </div>
              <ChevronDown className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-sky-500' : ''}`} />
            </button>
            
            {isOpen && (
              <div className="px-6 pb-6 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                {faq.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
