'use client';

import React, { useState } from 'react';
import { SERVICES_DATA } from '../data/services';
import { ContactFormData } from '../types';
import { CheckCircle2, Send, AlertCircle } from 'lucide-react';

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:8080';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    company: '',
    phone: '',
    email: '',
    serviceRequired: 'Desktop & Laptop Sales',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState('');

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.phone.trim()) errs.phone = 'Phone number is required';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email))
      errs.email = 'Valid email address is required';
    if (!formData.message.trim()) errs.message = 'Please enter your message or query';
    return errs;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setServerError('');
    setSubmitting(true);

    try {
      const res = await fetch(`${BACKEND_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        const data = await res.json().catch(() => ({}));
        setServerError(data.message || 'Something went wrong. Please try again.');
      }
    } catch {
      setServerError('Unable to reach the server. Please check your connection and try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  if (submitted) {
    return (
      <div className="p-8 rounded-2xl bg-slate-900 border border-sky-500/40 text-center text-white space-y-4 shadow-xl">
        <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold">Message Sent Successfully!</h3>
        <p className="text-slate-300 text-sm max-w-md mx-auto">
          Thank you, <strong className="text-white">{formData.name}</strong>. Your enquiry has been saved and our team will contact you shortly regarding{' '}
          <strong className="text-sky-400">{formData.serviceRequired}</strong>.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setFormData({ name: '', company: '', phone: '', email: '', serviceRequired: 'Desktop & Laptop Sales', message: '' });
          }}
          className="mt-4 px-5 py-2 rounded-lg bg-sky-500 text-white text-xs font-semibold hover:bg-sky-400 transition-colors"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white text-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-sm space-y-5">
      <div>
        <h3 className="text-xl font-bold text-slate-900">Send an Enquiry or Schedule a Site Visit</h3>
        <p className="text-xs text-slate-500 mt-1">Our IT team will review your enquiry and reach out promptly.</p>
      </div>

      {/* Server error banner */}
      {serverError && (
        <div className="flex items-center gap-3 p-3 rounded-lg bg-rose-50 border border-rose-200 text-rose-700 text-xs">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{serverError}</span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
            Full Name <span className="text-rose-500">*</span>
          </label>
          <input
            type="text" name="name" value={formData.name} onChange={handleChange}
            placeholder="Your name"
            className={`w-full bg-slate-50 border ${errors.name ? 'border-rose-500' : 'border-slate-300'} rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:border-sky-500 transition-colors`}
          />
          {errors.name && <p className="text-xs text-rose-500 mt-1">{errors.name}</p>}
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">Company Name</label>
          <input
            type="text" name="company" value={formData.company} onChange={handleChange}
            placeholder="Company or organization"
            className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:border-sky-500 transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
            Phone Number <span className="text-rose-500">*</span>
          </label>
          <input
            type="tel" name="phone" value={formData.phone} onChange={handleChange}
            placeholder="Phone number"
            className={`w-full bg-slate-50 border ${errors.phone ? 'border-rose-500' : 'border-slate-300'} rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:border-sky-500 transition-colors`}
          />
          {errors.phone && <p className="text-xs text-rose-500 mt-1">{errors.phone}</p>}
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
            Email Address <span className="text-rose-500">*</span>
          </label>
          <input
            type="email" name="email" value={formData.email} onChange={handleChange}
            placeholder="Business email"
            className={`w-full bg-slate-50 border ${errors.email ? 'border-rose-500' : 'border-slate-300'} rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:border-sky-500 transition-colors`}
          />
          {errors.email && <p className="text-xs text-rose-500 mt-1">{errors.email}</p>}
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">Service Required</label>
        <select
          name="serviceRequired" value={formData.serviceRequired} onChange={handleChange}
          className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:border-sky-500 transition-colors"
        >
          {SERVICES_DATA.map(s => (
            <option key={s.id} value={s.title}>{s.title}</option>
          ))}
          <option value="Schedule Office Site Visit">Schedule Office Site Visit</option>
          <option value="General Technical Inquiry">General Technical Inquiry</option>
        </select>
      </div>

      <div>
        <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
          Message / Details <span className="text-rose-500">*</span>
        </label>
        <textarea
          name="message" rows={3} value={formData.message} onChange={handleChange}
          placeholder="Tell us about your requirement or issue..."
          className={`w-full bg-slate-50 border ${errors.message ? 'border-rose-500' : 'border-slate-300'} rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:border-sky-500 transition-colors`}
        />
        {errors.message && <p className="text-xs text-rose-500 mt-1">{errors.message}</p>}
      </div>

      <button
        type="submit" disabled={submitting}
        className="w-full inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm py-3 rounded-lg shadow-sm transition-all disabled:opacity-50"
      >
        {submitting ? (
          <span className="flex items-center gap-2">
            <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Sending...
          </span>
        ) : (
          <>
            <Send className="w-4 h-4 text-sky-400" />
            <span>Submit Contact Request</span>
          </>
        )}
      </button>
    </form>
  );
};
