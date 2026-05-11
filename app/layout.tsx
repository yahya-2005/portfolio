import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';
import LoadingScreen from '@/components/LoadingScreen';
import { LanguageProvider } from '@/lib/LanguageContext';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Yahya Laadam | Full-Stack Developer & UI/UX Designer',
  description: 'Portfolio of Yahya Laadam, a Moroccan full-stack developer and UI/UX designer specializing in Next.js, React, Odoo ERP, PHP, Python, and modern web experiences.',
  keywords: [
    'Full-Stack Developer',
    'UI/UX Designer',
    'Next.js',
    'React',
    'TypeScript',
    'Odoo ERP',
    'PHP',
    'Python',
    'Web Development',
    'Moroccan Developer',
  ],
  authors: [{ name: 'Yahya Laadam' }],
  openGraph: {
    title: 'Yahya Laadam | Full-Stack Developer & UI/UX Designer',
    description: 'Portfolio of Yahya Laadam, a Moroccan full-stack developer and UI/UX designer.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yahya Laadam | Full-Stack Developer & UI/UX Designer',
    description: 'Portfolio of Yahya Laadam, a Moroccan full-stack developer and UI/UX designer.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans bg-black text-white dark`}
      >
        <LanguageProvider>
          <LoadingScreen />
          <SmoothScroll>
            <Navbar />
            {children}
            <Footer />
          </SmoothScroll>
        </LanguageProvider>
      </body>
    </html>
  );
}
