/**
 * RootLayout component wrapping the Oakline Plumbing application.
 * Configures self-hosted Google fonts (Manrope and Inter), global metadata,
 * accessibility skip link, application state providers, and standard layout chrome.
 */

import { Manrope, Inter } from 'next/font/google';
import './globals.css';
import { CallModalProvider } from '@/context/CallModalContext';
import { SubmissionProvider } from '@/context/SubmissionContext';
import { ConceptBanner } from '@/components/layout/ConceptBanner';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { MobileBar } from '@/components/layout/MobileBar';
import { CallModal } from '@/components/layout/CallModal';
import { NavigationManager } from '@/components/layout/NavigationManager';
import { SITE } from '@/data/site';

const manrope = Manrope({
  weight: ['600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
});

const inter = Inter({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata = {
  title: {
    template: `%s`,
    default: 'Residential Plumbing in Charlotte | Oakline Plumbing Co. (Concept)',
  },
  description:
    'Oakline Plumbing Co. is a fictional residential plumbing website concept for Charlotte, NC, created by PlumbNexo as a portfolio demonstration.',
  robots: {
    index: false,
    follow: false,
  },
  icons: {
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='8' fill='%23153B4A'/%3E%3Cpath d='M9 22V14a5 5 0 0 1 5-5h9' fill='none' stroke='%23E8A35D' stroke-width='3.2' stroke-linecap='round'/%3E%3Ccircle cx='21' cy='20' r='3.4' fill='none' stroke='%23fff' stroke-width='2.4'/%3E%3C/svg%3E",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <body className="has-mobile-bar antialiased" suppressHydrationWarning>
        <CallModalProvider>
          <SubmissionProvider>
            {/* Keyboard-only skip link */}
            <a href="#main" className="skip-link" id="skipLink">
              Skip to main content
            </a>

            <ConceptBanner />
            <Header />

            <main id="main" tabIndex={-1} className="outline-none">
              {children}
            </main>

            <Footer />
            <MobileBar />
            <CallModal />
            <NavigationManager />
          </SubmissionProvider>
        </CallModalProvider>
      </body>
    </html>
  );
}
