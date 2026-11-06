/**
 * Footer component for site-wide navigation, contact details, and brand disclosures.
 * Features:
 * - Real business address, operating hours, and after-hours emergency policy
 * - Direct click-to-call phone trigger
 * - Verified social media links (Facebook, YouTube)
 * - Full list of services and company pages
 * - Redesign concept notice for Pathmaker Plumbing by PlumbNexo
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
            <Link href="/" className="inline-block rounded-lg" aria-label={`${SITE.name} home`}>
              <Logo dark />
            </Link>
            <p className="mt-5 text-white/75 text-[0.95rem] max-w-sm">
              {SITE.footerBlurb}
            </p>
            <p className="mt-4 font-display font-semibold text-copper">
              {SITE.tagline}
            </p>
            <p className="mt-2 text-white/70 text-sm">
              {SITE.license}
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
                    Fastest response by phone
                  </span>
                </span>
              </li>
              <li className="flex gap-2.5">
                <Icon name="pin" className="w-[18px] h-[18px] text-copper mt-0.5 flex-none" />
                <span>
                  {SITE.address}
                  <span className="block text-white/60 text-[0.85rem]">
                    Serving Charlotte & nearby communities
                  </span>
                </span>
              </li>
              <li className="flex gap-2.5">
                <Icon name="clock" className="w-[18px] h-[18px] text-copper mt-0.5 flex-none" />
                <span>
                  {SITE.hours}
                  <span className="block text-white/60 text-[0.85rem] mt-0.5">
                    {SITE.emergencyNote}
                  </span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-white/15 flex flex-col md:flex-row md:items-center justify-between gap-4 text-[0.88rem] text-white/70">
          <p>
            &copy; {new Date().getFullYear()} {SITE.name}. Charlotte, NC &middot; {SITE.licenseShort}
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {SITE.socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white hover:underline underline-offset-4"
              >
                {s.label}
              </a>
            ))}
            <Link href="/privacy" className="hover:text-white hover:underline underline-offset-4">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white hover:underline underline-offset-4">
              Website Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
