import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { FloatingContact } from '../components/FloatingContact';
import { COMPANY_DETAILS } from '../data/company';

export const metadata: Metadata = {
  title: {
    default: 'Dhruva Infotech | IT Infrastructure Solutions, System Sales & AMC Services',
    template: '%s | Dhruva Infotech'
  },
  description: 'Dhruva Infotech provides complete IT infrastructure solutions, desktop/laptop sales, server networking, firewall security, CCTV, Microsoft 365, and Annual IT Maintenance Contracts (AMC) for businesses.',
  keywords: [
    'IT infrastructure services',
    'IT support services',
    'computer sales and services',
    'server and networking services',
    'firewall and Wi-Fi solutions',
    'CCTV installation',
    'Microsoft 365 services',
    'data backup services',
    'IT AMC services',
    'annual IT maintenance',
    'on-site IT support'
  ],
  authors: [{ name: 'Dhruva Infotech' }],
  creator: 'Dhruva Infotech',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://dhruvainfotech.com',
    title: 'Dhruva Infotech | Complete Corporate IT Infrastructure & AMC Partner',
    description: 'From desktop sales to server networking, security, cloud solutions, and annual AMC support. Reliable IT infrastructure partner for businesses.',
    siteName: 'Dhruva Infotech',
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col bg-slate-950 text-slate-100 antialiased font-sans">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
