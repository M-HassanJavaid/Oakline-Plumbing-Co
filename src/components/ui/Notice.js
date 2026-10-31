/**
 * Notice component for contextual callouts (info, warning, error, success).
 * Accepts children to support custom buttons, forms, or text links.
 */

import React from 'react';
import { Icon } from './Icon';
import { cn } from '@/lib/utils';

const TONES = {
  info: { wrap: 'bg-white border-[#B9D3D0]', ic: 'info', icc: 'text-teal' },
  warn: { wrap: 'bg-copper-100 border-[#F1CFA8]', ic: 'alert', icc: 'text-copper-700' },
  error: { wrap: 'bg-[#FEF3F2] border-[#F4B8B1]', ic: 'alert', icc: 'text-danger' },
  success: { wrap: 'bg-[#ECF7F1] border-[#A8D8C0]', ic: 'checkCircle', icc: 'text-success' }
};

/**
 * @param {Object} props
 * @param {'info'|'warn'|'error'|'success'} [props.tone='info'] Notice style tone.
 * @param {string} [props.title] Optional bold heading.
 * @param {React.ReactNode} [props.body] Optional body text or nodes.
 * @param {React.ReactNode} [props.children] Optional nested content.
 * @param {string} [props.className=''] Extra CSS classes.
 */
export function Notice({
  tone = 'info',
  title,
  body,
  children,
  className = '',
  ...restProps
}) {
  const map = TONES[tone] || TONES.info;

  return (
    <div
      className={cn('flex gap-3 rounded-2xl border p-4 md:p-5', map.wrap, className)}
      {...restProps}
    >
      <span className={cn(map.icc, 'flex-none mt-0.5')}>
        <Icon name={map.ic} className="w-5 h-5" />
      </span>
      <div className="text-[0.95rem]">
        {title && <p className="font-semibold text-teal">{title}</p>}
        <div className={cn(title && 'mt-1', 'text-charcoal')}>
          {body || children}
        </div>
      </div>
    </div>
  );
}
