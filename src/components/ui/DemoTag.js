/**
 * DemoTag displays clear demo labels (e.g. "Demo content", "Illustrative image")
 * to uphold the honesty safeguard that this is a fictional concept.
 */

import React from 'react';
import { Icon } from './Icon';
import { cn } from '@/lib/utils';

/**
 * @param {Object} props
 * @param {string} [props.text='Demo content'] Display message.
 * @param {string} [props.className=''] Extra classes.
 */
export function DemoTag({ text = 'Demo content', className = '' }) {
  return (
    <span className={cn('demo-tag', className)}>
      <Icon name="info" className="w-3.5 h-3.5 flex-none" />
      <span>{text}</span>
    </span>
  );
}
