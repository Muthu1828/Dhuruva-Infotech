'use client';

import React, { useState, useEffect } from 'react';
import { SERVICES_DATA } from '../data/services';
import { QuoteFormData } from '../types';
import { CheckCircle2, Send, AlertCircle, ShieldCheck } from 'lucide-react';

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:8080';

interface QuoteFormProps {
  initialService?: string;
}

export const QuoteForm: React.FC<QuoteFormProps> = ({ initialService = '' }) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    name: '',
    company: '',
    phone: '',
    email: '',
    service: initialService || 'Desktop & Laptop Sales',
    requirement: '',
    preferredContact: 'phone',
    message: ''
  });

  useEffect(() => {
    if (initialService) {
      setFormData(prev => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState('');

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.company.trim()) errs.company = 'Company name is required';
    if (!formData.phone.trim()) errs.phone = 'Phone number is required';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email))
      errs.email = 'Valid email is required';
    if (!formData.message.trim()) errs.message = 'Please describe your requirement';
    return errs;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setServerError('');
    setSubmitting(true);

    try {
      const res = await fetch(`${BACKEND_URL}/api/quote`, {
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
      setServerError('Unable to reach the server. Please check your connection or contact us directly.');
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

  const resetForm = () => {
    setSubmitted(false);
    setFormData({
      name: '', company: '', phone: '', email: '',
      service: 'Desktop & Laptop Sales', requirement: '',
      preferredContact: 'phone', message: ''
    });
  };

  if (submitted) {
    return (
      <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 border border-sky-500/40 text-center text-white space-y-6 shadow-2xl">
        <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <div className="space-y-2">
          <h3 className="text-2xl sm:text-3xl font-bold">Quotation Request Received!</h3>
          <p className="text-slate-300 max-w-lg mx-auto text-sm sm:text-base">
            Thank you, <strong className="text-white">{formData.name}</strong>. Your quotation request for{' '}
            <strong className="text-sky-400">{formData.service}</strong> has been saved. We will contact you via{' '}
            {formData.preferredContact} shortly.
          </p>
        </div>
        <div className="p-4 rounded-xl bg-slate-800 text-xs text-slate-400 max-w-md mx-auto text-left space-y-1">
          <p><strong>Company:</strong> {formData.company}</p>
          <p><strong>Contact:</strong> {formData.phone} | {formData.email}</p>
          <p><strong>Preferred Mode:</strong> {formData.preferredContact.toUpperCase()}</p>
        </div>
        <button onClick={resetForm} className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg bg-sky-500 hover:bg-sky-400 text-white font-semibold text-xs transition-colors">
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-slate-900 text-white p-6 sm:p-10 rounded-3xl border border-slate-800 shadow-xl space-y-6">

      <div className="border-b border-slate-800 pb-4">
        <div className="flex items-center gap-2 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-1">
          <ShieldCheck className="w-4 h-4" />
          <span>Official Business Quotation Request</span>
        </div>
        <h3 className="text-2xl font-bold text-white">Request a Custom IT Quotation</h3>
        <p className="text-xs text-slate-400 mt-1">Fill in your office IT details to receive a tailored solution and estimate.</p>
      </div>

      {/* Server error */}
      {serverError && (
        <div className="flex items-center gap-3 p-3 rounded-lg bg-rose-950/60 border border-rose-700/60 text-rose-300 text-xs">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{serverError}</span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
            Full Name <span className="text-rose-400">*</span>
          </label>
          <input type="text" name="name" value={formData.name} onChange={handleChange}
            placeholder="e.g. Rahul Sharma"
            className={`w-full bg-slate-800 border ${errors.name ? 'border-rose-500' : 'border-slate-700'} rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors`}
          />
          {errors.name && <p className="text-xs text-rose-400 mt-1">{errors.name}</p>}
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
            Company / Organization <span className="text-rose-400">*</span>
          </label>
          <input type="text" name="company" value={formData.company} onChange={handleChange}
            placeholder="e.g. AcroTech Solutions Pvt Ltd"
            className={`w-full bg-slate-800 border ${errors.company ? 'border-rose-500' : 'border-slate-700'} rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors`}
          />
          {errors.company && <p className="text-xs text-rose-400 mt-1">{errors.company}</p>}
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
            Phone Number <span className="text-rose-400">*</span>
          </label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange}
            placeholder="e.g. +91 98765 43210"
            className={`w-full bg-slate-800 border ${errors.phone ? 'border-rose-500' : 'border-slate-700'} rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors`}
          />
          {errors.phone && <p className="text-xs text-rose-400 mt-1">{errors.phone}</p>}
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
            Business Email <span className="text-rose-400">*</span>
          </label>
          <input type="email" name="email" value={formData.email} onChange={handleChange}
            placeholder="e.g. rahul@company.com"
            className={`w-full bg-slate-800 border ${errors.email ? 'border-rose-500' : 'border-slate-700'} rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors`}
          />
          {errors.email && <p className="text-xs text-rose-400 mt-1">{errors.email}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
            Service Required <span className="text-rose-400">*</span>
          </label>
          <select name="service" value={formData.service} onChange={handleChange}
            className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-sky-500 transition-colors"
          >
            {SERVICES_DATA.map(s => (
              <option key={s.id} value={s.title}>{s.title}</option>
            ))}
            <option value="Other / General IT Requirement">Other / Custom Requirement</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
            Preferred Contact Method
          </label>
          <select name="preferredContact" value={formData.preferredContact} onChange={handleChange}
            className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-sky-500 transition-colors"
          >
            <option value="phone">Phone Call</option>
            <option value="email">Email</option>
            <option value="whatsapp">WhatsApp</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
          Describe Your Requirement <span className="text-rose-400">*</span>
        </label>
        <textarea name="message" rows={4} value={formData.message} onChange={handleChange}
          placeholder="e.g. We require 15 business desktops, 1 server setup, and firewall installation for our new office branch."
          className={`w-full bg-slate-800 border ${errors.message ? 'border-rose-500' : 'border-slate-700'} rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors`}
        />
        {errors.message && <p className="text-xs text-rose-400 mt-1">{errors.message}</p>}
      </div>

      <button type="submit" disabled={submitting}
        className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-bold text-base py-4 rounded-xl shadow-lg transition-all disabled:opacity-50"
      >
        {submitting ? (
          <span className="flex items-center gap-2">
            <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Submitting...
          </span>
        ) : (
          <>
            <Send className="w-5 h-5" />
            <span>Request Quotation</span>
          </>
        )}
      </button>

      <p className="text-[11px] text-slate-400 text-center">
        🔒 Your contact details are only used to respond to your business enquiry.
      </p>
    </form>
  );
};
