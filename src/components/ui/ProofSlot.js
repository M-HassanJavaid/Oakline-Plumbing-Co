/**
 * ProofSlot component displays empty, labeled placeholder blocks for reviews,
 * credentials, team, and project photos, preserving honesty safeguards.
 */

import React from 'react';
import { Icon } from './Icon';
import { cn } from '@/lib/utils';

/**
 * @param {Object} props
 * @param {string} props.title Placeholder title.
 * @param {string} props.body Placeholder explanatory description.
 * @param {string} [props.icon='quote'] Icon name.
 * @param {string} [props.className=''] Extra classes.
 */
export function ProofSlot({ title, body, icon = 'quote', className = '' }) {
  return (
    <div className={cn('proof-slot p-6 md:p-7', className)}>
      <div className="flex items-start gap-4">
        <span className="w-11 h-11 rounded-xl bg-white grid place-items-center text-teal flex-none border border-[#CFE0DD]">
          <Icon name={icon} className="w-5 h-5" />
        </span>
        <div>
          <p className="font-display font-bold text-teal">{title}</p>
          <p className="text-[0.95rem] text-charcoal-70 mt-1">{body}</p>
        </div>
      </div>
    </div>
  );
}
