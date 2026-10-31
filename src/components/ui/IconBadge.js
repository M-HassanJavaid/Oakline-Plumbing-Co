/**
 * IconBadge renders a rounded square pill with a themed background and icon.
 */

import React from 'react';
import { Icon } from './Icon';
import { cn } from '@/lib/utils';

const TONES = {
  aqua: 'bg-aqua text-teal',
  copper: 'bg-copper-100 text-copper-700',
  teal: 'bg-teal text-white',
  white: 'bg-white text-teal'
};

/**
 * @param {Object} props
 * @param {string} props.name Icon name from ICON_PATHS.
 * @param {'aqua'|'copper'|'teal'|'white'} [props.tone='aqua'] Color tone.
 * @param {string} [props.className=''] Extra classes.
 */
export function IconBadge({ name, tone = 'aqua', className = '' }) {
  const toneClasses = TONES[tone] || TONES.aqua;

  return (
    <span
      className={cn(
        'inline-grid place-items-center w-12 h-12 rounded-[14px] flex-none',
        toneClasses,
        className
      )}
    >
      <Icon name={name} className="w-6 h-6" />
    </span>
  );
}
