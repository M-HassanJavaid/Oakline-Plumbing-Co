/**
 * Eyebrow component displays small uppercase-like category text with a copper accent bar.
 */

import React from 'react';
import { cn } from '@/lib/utils';

/**
 * @param {Object} props
 * @param {string} props.text Eyebrow text.
 * @param {string} [props.className=''] Extra classes.
 */
export function Eyebrow({ text, className = '' }) {
  return (
    <p
      className={cn(
        'inline-flex items-center gap-2.5 text-[0.95rem] font-semibold text-copper-700 mb-4',
        className
      )}
    >
      <span
        aria-hidden="true"
        className="inline-block w-7 h-[3px] rounded-full bg-copper flex-none"
      />
      {text}
    </p>
  );
}
