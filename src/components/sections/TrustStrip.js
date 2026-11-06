/**
 * TrustStrip component showing verified credentials, Google rating, and licensing.
 * Server Component.
 */

import React from 'react';
import { Icon } from '@/components/ui/Icon';
import { SITE } from '@/data/site';

const CREDENTIALS = [
  {
    icon: 'shield',
    title: SITE.license,
    subtitle: 'Verified with NC State Board'
  },
  {
    icon: 'star',
    title: SITE.ratingDisplay,
    subtitle: 'Verified Google Business Reviews'
  },
  {
    icon: 'clipboard',
    title: SITE.brandCredentials,
    subtitle: `${SITE.experienceYears} Years Experience · Est. ${SITE.foundedYear}`
  }
];

export function TrustStrip() {
  return (
    <section aria-label="Credentials and licensing" className="bg-white border-y border-[#DCE7E5]">
      <div className="wrap py-5">
        <ul className="grid sm:grid-cols-3 gap-4 sm:gap-6">
          {CREDENTIALS.map((s, i) => (
            <li key={i} className="flex items-center gap-3.5 text-charcoal">
              <span className="w-11 h-11 rounded-xl bg-aqua-50 border border-[#B9D3D0] grid place-items-center text-teal flex-none">
                <Icon name={s.icon} className="w-5 h-5 text-copper-600" />
              </span>
              <div className="leading-tight">
                <p className="font-semibold text-[0.94rem] text-teal">{s.title}</p>
                <p className="text-xs text-charcoal-70 mt-0.5">{s.subtitle}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
