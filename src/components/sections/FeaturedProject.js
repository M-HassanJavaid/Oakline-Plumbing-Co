/**
 * FeaturedProject displays a verified case study walkthrough.
 * Case study: Project 1 — "$400 water bill led to a hidden slab leak" (Charlotte, NC).
 * Server Component.
 */

import React from 'react';
import { ImageWithFallback } from '@/components/ui/ImageWithFallback';
import { IMG } from '@/data/services';
import { cn } from '@/lib/utils';

const PROJECT_DATA = {
  title: 'A $400 water bill led to a hidden slab leak',
  category: 'Leak Detection & Pipe Reroute',
  location: 'Charlotte, NC — 2002 home built on a slab',
  rows: [
    {
      k: 'Problem',
      v: '~$400 water bill spike and white, salt-like deposits appearing along the garage floor concrete.'
    },
    {
      k: 'Assessment',
      v: 'Deposits identified as efflorescence from sub-slab moisture. Acoustic leak detection pinpointed the pressurized line leak under the foundation.'
    },
    {
      k: 'Approved scope',
      v: 'Homeowner evaluated breaking through the slab versus an overhead reroute. She approved the overhead reroute to protect flooring and finishes.'
    },
    {
      k: 'Work completed',
      v: 'Damaged line bypassed with a new overhead PEX supply run directly to the garage water heater with zero concrete jackhammering.'
    },
    {
      k: 'Outcome',
      v: 'Water bill normalized immediately. Homeowner quote: “This is why I chose John and his team over the other two quotes.”'
    }
  ]
};

/**
 * @param {Object} props
 * @param {boolean} [props.compact=false]
 */
export function FeaturedProject({ compact = false }) {
  return (
    <article
      className={cn(
        'bg-white rounded-panel border border-[#D6E5E2] shadow-card overflow-hidden grid',
        compact ? '' : 'lg:grid-cols-[1.05fr_1fr]'
      )}
    >
      <ImageWithFallback
        src={IMG.leak}
        alt="Plumbing technician using electronic leak detection to locate a sub-slab water leak."
        ratio={compact ? 'aspect-[16/9]' : 'aspect-[16/10] lg:aspect-auto lg:h-full'}
        tag="Verified Case Study"
        icon="leak"
      />
      <div className="p-6 md:p-10">
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <span className="text-xs font-bold uppercase tracking-wider text-teal bg-aqua-50 px-2.5 py-1 rounded-md border border-[#B9D3D0]">
            {PROJECT_DATA.category}
          </span>
          <span className="text-xs text-charcoal-70">
            {PROJECT_DATA.location}
          </span>
        </div>
        <h3 className="h3 text-[1.35rem] text-teal">
          {PROJECT_DATA.title}
        </h3>
        <dl className="mt-6 space-y-4">
          {PROJECT_DATA.rows.map((r, i) => (
            <div key={i} className="grid grid-cols-[120px_1fr] gap-3 text-sm">
              <dt className="font-bold text-teal text-[0.92rem]">{r.k}</dt>
              <dd className="text-charcoal-70 text-[0.93rem] leading-relaxed">{r.v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </article>
  );
}
