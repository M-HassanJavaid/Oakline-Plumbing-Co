/**
 * ConceptBanner renders the top site-wide disclaimer banner.
 * Fictional portfolio concept honesty safeguard.
 * Server Component.
 */

import React from 'react';
import { Icon } from '@/components/ui/Icon';

export function ConceptBanner() {
  return (
    <aside aria-label="Concept disclaimer" className="bg-teal-800 text-white/90 text-[0.82rem]">
      <div className="wrap py-2 flex items-center justify-center gap-2 text-center">
        <Icon name="info" className="w-4 h-4 text-copper flex-none" />
        <p>
          <span className="font-semibold text-white">
            Concept project, fictional business.
          </span>{' '}
          <span className="sm:hidden">A PlumbNexo portfolio demo.</span>
          <span className="hidden sm:inline">
            Oakline Plumbing Co. isn’t a real company; this site is a PlumbNexo portfolio demonstration.
          </span>
        </p>
      </div>
    </aside>
  );
}
