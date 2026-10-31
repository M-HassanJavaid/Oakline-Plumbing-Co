'use client';

/**
 * CallButton component that triggers the demo call modal.
 * Fictional demo honesty safeguard: Phone buttons must open an educational dialog
 * rather than attempting to place a phone call to a fictional 555-01XX number.
 * Client component because it consumes CallModalContext.
 */

import React from 'react';
import { useCallModal } from '@/context/CallModalContext';
import { Button } from './Button';
import { SITE } from '@/data/site';

/**
 * @param {Object} props
 * @param {string} [props.label='Call Now'] Button label.
 * @param {'primary'|'secondary'|'copper'|'ghost-light'} [props.variant='secondary'] Style variant.
 * @param {'default'|'sm'} [props.size='default'] Size variant.
 * @param {string} [props.className=''] Extra classes.
 * @param {boolean} [props.showNumber=false] Whether to append the phone number text.
 * @param {string} [props.ariaLabel] Optional custom accessible label.
 */
export function CallButton({
  label = 'Call Now',
  variant = 'secondary',
  size = 'default',
  className = '',
  showNumber = false,
  ariaLabel,
  ...restProps
}) {
  const { openModal } = useCallModal();
  const text = showNumber ? `${label} ${SITE.phoneDisplay}` : label;

  const handleClick = (e) => {
    e.preventDefault();
    openModal(e.currentTarget);
  };

  return (
    <Button
      variant={variant}
      size={size}
      icon="phone"
      className={className}
      onClick={handleClick}
      aria-label={ariaLabel}
      {...restProps}
    >
      {text}
    </Button>
  );
}
