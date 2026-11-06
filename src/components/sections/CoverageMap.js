/**
 * CoverageMap renders the interactive Charlotte, NC location map.
 * Points to Pathmaker Plumbing's shop location at 5676 Underwood Ave, Charlotte, NC 28213.
 * Server Component.
 */

import React from 'react';
import { SITE } from '@/data/site';

export function CoverageMap() {
  const mapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
    SITE.address
  )}&t=&z=12&ie=UTF8&iwloc=&output=embed`;

  return (
    <figure className="bg-white rounded-panel border border-[#D6E5E2] p-3 md:p-4 shadow-card overflow-hidden">
      <div className="relative w-full h-[320px] rounded-2xl overflow-hidden bg-[#F6F8F7] border border-[#E1ECEA]">
        <iframe
          title={`${SITE.name} Shop Location — ${SITE.address}`}
          src={mapUrl}
          className="w-full h-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <figcaption className="mt-3 px-1 text-sm text-charcoal-70">
        <strong className="text-teal font-semibold">Service territory:</strong>{' '}
        Shop located at {SITE.address} ({SITE.addressNeighborhood}), serving Charlotte and surrounding Mecklenburg/Cabarrus communities.
      </figcaption>
    </figure>
  );
}
