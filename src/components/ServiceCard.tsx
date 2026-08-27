'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ServiceItem } from '../types';
import { IconHelper } from './IconHelper';
import { ArrowRight, Check } from 'lucide-react';

interface ServiceCardProps {
  service: ServiceItem;
  featured?: boolean;
  index?: number;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, featured = false, index = 0 }) => {
  return (
    <motion.div
      id={service.id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className={`rounded-2xl border transition-all duration-300 flex flex-col justify-between p-6 sm:p-8 ${
        featured
          ? 'bg-slate-900 text-white border-slate-700 shadow-xl hover:border-sky-500 hover:shadow-sky-500/10 hover:shadow-2xl'
          : 'bg-white text-slate-900 border-slate-200/80 shadow-sm hover:shadow-lg hover:border-sky-300'
      }`}
    >
      <div>
        {/* Header Icon & Title */}
        <div className="flex items-center gap-4 mb-4">
          <motion.div
            className={`w-14 h-14 rounded-xl flex items-center justify-center shrink-0 ${
              featured
                ? 'bg-sky-500/10 text-sky-400 border border-sky-500/30'
                : 'bg-sky-50 text-sky-600 border border-sky-100'
            }`}
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.2 }}
          >
            <IconHelper name={service.iconName} className="w-7 h-7" />
          </motion.div>
          <div>
            <h3 className={`text-xl font-bold tracking-tight ${featured ? 'text-white' : 'text-slate-900'}`}>
              {service.title}
            </h3>
            <span className={`text-xs font-medium px-2 py-0.5 rounded uppercase tracking-wider ${
              featured ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-600'
            }`}>
              {service.category}
            </span>
          </div>
        </div>

        {/* Short Description */}
        <p className={`text-sm leading-relaxed mb-6 ${featured ? 'text-slate-300' : 'text-slate-600'}`}>
          {service.shortDescription}
        </p>

        {/* Key Features */}
        <div className="space-y-2 mb-6">
          <h4 className={`text-xs font-semibold uppercase tracking-wider ${featured ? 'text-sky-400' : 'text-sky-700'}`}>
            Key Capabilities:
          </h4>
          <ul className="space-y-1.5 text-xs">
            {service.keyFeatures.slice(0, 4).map((feat, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <Check className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${featured ? 'text-sky-400' : 'text-sky-600'}`} />
                <span className={featured ? 'text-slate-300' : 'text-slate-700'}>{feat}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Card Action */}
      <div className={`pt-4 border-t ${featured ? 'border-slate-800/80' : 'border-slate-100'}`}>
        <Link
          href={`/quote?service=${encodeURIComponent(service.title)}`}
          className={`w-full inline-flex items-center justify-center gap-2 font-semibold text-xs py-2.5 px-4 rounded-lg transition-all ${
            featured
              ? 'bg-sky-500 hover:bg-sky-400 text-white shadow-md hover:shadow-sky-500/20'
              : 'bg-slate-900 hover:bg-slate-800 text-white shadow-sm'
          }`}
        >
          <span>{service.ctaText}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </motion.div>
  );
};
