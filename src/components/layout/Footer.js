/**
 * Footer component for site-wide navigation and required honesty disclosures.
 * Features:
 * - Full list of services and company pages
 * - Clear disclosure: "Fictional portfolio concept by PlumbNexo"
 * - Privacy and Terms links
 * - Demo number call button opening CallModal
 * Server Component.
 */

import React from 'react';
import Link from 'next/link';
import { Logo } from './Logo';
import { CallButton } from '@/components/ui/CallButton';
import { Icon } from '@/components/ui/Icon';
import { SITE } from '@/data/site';
import { SERVICES } from '@/data/services';

export function Footer() {
  const serviceLinks = [
    { label: 'All Services', to: '/services' },
    ...SERVICES.map((s) => ({ label: s.navLabel, to: `/services/${s.slug}` })),
  ];

  const companyLinks = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Reviews & Projects', to: '/reviews-projects' },
    { label: 'Service Areas', to: '/service-areas' },
    { label: 'Contact', to: '/contact' },
  ];

  return (
    <footer id="site-footer" className="bg-teal on-dark text-white">
      <div className="wrap pt-16 pb-10">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr]">
          <div>
            <Link href="/" className="inline-block rounded-lg" aria-label="Oakline Plumbing Co. home">
              <Logo dark />
            </Link>
            <p className="mt-5 text-white/75 text-[0.95rem] max-w-sm">
              {SITE.footerBlurb}
            </p>
            <p className="mt-4 font-display font-semibold text-copper">
              {SITE.tagline}
            </p>
          </div>

          <div>
            <h2 className="font-display font-bold text-white text-[1rem]">Services</h2>
            <ul className="mt-4 space-y-2.5">
              {serviceLinks.map((l) => (
                <li key={l.to}>
                  <Link
                    href={l.to}
                    className="text-white/75 hover:text-white hover:underline underline-offset-4 text-[0.95rem]"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display font-bold text-white text-[1rem]">Company</h2>
            <ul className="mt-4 space-y-2.5">
              {companyLinks.map((l) => (
                <li key={l.to}>
                  <Link
                    href={l.to}
                    className="text-white/75 hover:text-white hover:underline underline-offset-4 text-[0.95rem]"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display font-bold text-white text-[1rem]">Contact & coverage</h2>
            <ul className="mt-4 space-y-3 text-[0.95rem] text-white/80">
              <li className="flex gap-2.5">
                <Icon name="phone" className="w-[18px] h-[18px] text-copper mt-0.5 flex-none" />
                <span>
                  <CallButton
                    label={SITE.phoneDisplay}
                    variant="ghost-light"
                    className="!p-0 !min-h-0 !border-0 font-semibold text-white hover:underline underline-offset-4 !bg-transparent"
                  />
                  <span className="block text-white/60 text-[0.85rem]">
                    Demo number, not in service
                  </span>
                </span>
              </li>
              <li className="flex gap-2.5">
                <Icon name="clock" className="w-[18px] h-[18px] text-copper mt-0.5 flex-none" />
                <span>{SITE.hoursNote}</span>
              </li>
              <li className="flex gap-2.5">
                <Icon name="pin" className="w-[18px] h-[18px] text-copper mt-0.5 flex-none" />
                <span>
                  Charlotte, NC is the demonstration focus.{' '}
                  <Link href="/service-areas" className="text-link">
                    See service area details
                  </Link>
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom disclosure */}
        <div className="mt-14 pt-6 border-t border-white/15 flex flex-col md:flex-row md:items-center justify-between gap-4 text-[0.88rem] text-white/70">
          <p className="inline-flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-lg bg-white/10 px-2.5 py-1 font-semibold text-white">
              <Icon name="info" className="w-4 h-4 text-copper" />
              {SITE.disclosure}
            </span>
            <span>No real services, credentials, or reviews are claimed.</span>
          </p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            <li>
              <Link href="/privacy" className="hover:text-white hover:underline underline-offset-4">
                Privacy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-white hover:underline underline-offset-4">
                Terms
              </Link>
            </li>
            <li>
              <span>Social links appear only if real</span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
