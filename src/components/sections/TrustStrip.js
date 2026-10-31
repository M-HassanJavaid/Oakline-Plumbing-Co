/**
 * TrustStrip component showing labeled placeholders for credentials, reviews, and insurance.
 * Preserves honesty safeguards by clearly marking them as placeholders.
 * Server Component.
 */

import React from 'react';
import { Icon } from '@/components/ui/Icon';

const SLOTS = [
  { icon: 'shield', t: 'Verified license information appears here' },
  { icon: 'quote', t: 'Rating from a real review source appears here' },
  { icon: 'clipboard', t: 'Insurance or other verified assurance appears here' }
];

export function TrustStrip() {
  return (
    <section aria-label="Credentials placeholder" className="bg-white border-y border-[#DCE7E5]">
      <div className="wrap py-5">
        <ul className="grid sm:grid-cols-3 gap-3 sm:gap-6">
          {SLOTS.map((s, i) => (
            <li key={i} className="flex items-center gap-3 text-[0.93rem] text-charcoal-70">
              <span className="w-10 h-10 rounded-xl border-2 border-dashed border-[#9DBFBB] grid place-items-center text-teal flex-none">
                <Icon name={s.icon} className="w-5 h-5" />
              </span>
              <span>{s.t}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
