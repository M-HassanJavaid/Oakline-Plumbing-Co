/**
 * CompareCards component for side-by-side decision comparisons
 * (e.g., Repair vs Replace, Trenchless vs Excavation).
 * Server Component.
 */

import React from 'react';
import { Icon } from '@/components/ui/Icon';
import { IconBadge } from '@/components/ui/IconBadge';
import { cn } from '@/lib/utils';

/**
 * @param {Object} props
 * @param {Object} props.compare
 * @param {string} props.compare.heading
 * @param {string} props.compare.intro
 * @param {Object} props.compare.a Left card
 * @param {Object} props.compare.b Right card (accent dark teal)
 */
export function CompareCards({ compare }) {
  const renderCol = (side, accent) => (
    <div
      className={cn(
        'rounded-panel p-6 md:p-8',
        accent
          ? 'bg-teal text-white on-dark'
          : 'bg-white border border-[#D6E5E2]'
      )}
    >
      <div className="flex items-center gap-3">
        <IconBadge name={side.icon} tone={accent ? 'white' : 'aqua'} />
        <h3 className={cn('h3 text-[1.25rem]', accent && '!text-white')}>
          {side.t}
        </h3>
      </div>
      <ul className="mt-6 space-y-3.5">
        {side.items.map((it, idx) => (
          <li
            key={idx}
            className={cn('flex gap-3', accent ? 'text-white/90' : 'text-charcoal')}
          >
            <span
              className={cn(
                accent ? 'text-copper' : 'text-copper-600',
                'mt-1 flex-none'
              )}
            >
              <Icon name="check" className="w-4 h-4" />
            </span>
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div>
      <div className="grid md:grid-cols-2 gap-5 md:gap-6">
        {renderCol(compare.a, false)}
        {renderCol(compare.b, true)}
      </div>
      <p className="mt-6 text-sm text-charcoal-70 flex items-start gap-2">
        <Icon name="info" className="w-4 h-4 text-teal mt-0.5 flex-none" />
        <span>
          These are discussion points, not a recommendation. A technician makes a
          recommendation only after seeing your home.
        </span>
      </p>
    </div>
  );
}
