/**
 * FactorGrid renders responsive card grids for equipment types, warranties,
 * or cost considerations.
 * Server Component.
 */

import React from 'react';
import { cn } from '@/lib/utils';

/**
 * @param {Object} props
 * @param {Array<{ t: string, d: string }>} props.items
 * @param {string} [props.cols='sm:grid-cols-2 lg:grid-cols-3']
 * @param {boolean} [props.numbered=false]
 * @param {'white'|'soft'} [props.tone='white']
 */
export function FactorGrid({
  items = [],
  cols = 'sm:grid-cols-2 lg:grid-cols-3',
  numbered = false,
  tone = 'white',
}) {
  const bg =
    tone === 'white'
      ? 'bg-white border border-[#D6E5E2]'
      : 'bg-white/70 border border-white';

  return (
    <ul className={cn('grid gap-4 md:gap-5', cols)}>
      {items.map((it, i) => (
        <li key={i} className={cn(bg, 'rounded-card p-5 md:p-6')}>
          {numbered && (
            <span className="font-display font-extrabold text-copper-600 text-sm">
              Step {i + 1}
            </span>
          )}
          <p
            className={cn(
              'font-display font-bold text-teal text-[1.05rem]',
              numbered && 'mt-1'
            )}
          >
            {it.t}
          </p>
          <p className="text-charcoal-70 mt-1.5 text-[0.96rem]">{it.d}</p>
        </li>
      ))}
    </ul>
  );
}
