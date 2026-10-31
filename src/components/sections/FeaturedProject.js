/**
 * FeaturedProject displays an illustrative project walkthrough story.
 * Preserves honesty safeguards with clear demo tags.
 * Server Component.
 */

import React from 'react';
import { DemoTag } from '@/components/ui/DemoTag';
import { ImageWithFallback } from '@/components/ui/ImageWithFallback';
import { IMG } from '@/data/services';
import { cn } from '@/lib/utils';

const ROWS = [
  { k: 'Problem', v: 'Homeowner reports the kitchen sink draining slowly for two weeks, with occasional gurgling.' },
  { k: 'Assessment', v: 'Technician checks nearby fixtures to see whether the blockage is local or further down the line.' },
  { k: 'Approved work', v: 'Homeowner reviews the options and approves clearing the kitchen branch line.' },
  { k: 'Outcome', v: 'Space for the verified result, written in plain language with the customer’s permission.' }
];

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
        src={IMG.kitchen}
        alt="A home kitchen with a sink, illustrating where an example drain job would take place."
        ratio={compact ? 'aspect-[16/9]' : 'aspect-[16/10] lg:aspect-auto lg:h-full'}
        tag="Illustrative image"
        icon="drain"
      />
      <div className="p-6 md:p-10">
        <DemoTag text="Example project layout — not a completed Oakline job" />
        <h3 className="h3 text-[1.35rem] mt-4">Kitchen sink that kept slowing down</h3>
        <dl className="mt-6 space-y-5">
          {ROWS.map((r, i) => (
            <div key={i} className="grid grid-cols-[112px_1fr] gap-4">
              <dt className="font-semibold text-teal text-[0.95rem]">{r.k}</dt>
              <dd className="text-charcoal-70 text-[0.96rem]">{r.v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </article>
  );
}
