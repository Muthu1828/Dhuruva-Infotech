export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  keyFeatures: string[];
  businessBenefits: string[];
  category: 'hardware' | 'infrastructure' | 'security' | 'cloud' | 'support';
  ctaText: string;
}

export interface SolutionCategory {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
  description: string;
  items: string[];
  badge: string;
}

export interface AMCBenefit {
  title: string;
  description: string;
  iconName: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export interface QuoteFormData {
  name: string;
  company: string;
  phone: string;
  email: string;
  service: string;
  requirement: string;
  preferredContact: 'phone' | 'email' | 'whatsapp';
  message: string;
}

export interface ContactFormData {
  name: string;
  company: string;
  phone: string;
  email: string;
  serviceRequired: string;
  message: string;
}
