'use client';

/**
 * ScrollToButton component for in-page smooth scrolling.
 * Respects prefers-reduced-motion and transfers keyboard focus to the target element.
 * Client component because DOM scrolling and element focus require browser APIs.
 */

import React from 'react';
import { Button } from './Button';

/**
 * @param {Object} props
 * @param {string} props.targetId HTML ID of the target element to scroll to.
 * @param {boolean} [props.focusFirstInput=false] Whether to focus the first input inside target.
 * @param {string} [props.label] Button label.
 * @param {'primary'|'secondary'|'copper'|'ghost-light'} [props.variant='primary']
 * @param {'default'|'sm'} [props.size='default']
 * @param {string} [props.className='']
 * @param {React.ReactNode} [props.children]
 */
export function ScrollToButton({
  targetId,
  focusFirstInput = false,
  label,
  children,
  variant = 'primary',
  size = 'default',
  className = '',
  ...restProps
}) {
  const handleClick = (e) => {
    e.preventDefault();
    if (typeof window === 'undefined') return;

    const target =
      document.querySelector(`[data-scroll-target="${targetId}"]`) ||
      document.getElementById(targetId);

    if (!target) return;

    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    target.scrollIntoView({
      behavior: reduceMotion ? 'auto' : 'smooth',
      block: 'start',
    });

    const focusDelay = reduceMotion ? 0 : 450;
    setTimeout(() => {
      if (focusFirstInput) {
        const firstField = target.querySelector('input, select, textarea');
        if (firstField) {
          firstField.focus({ preventScroll: true });
          return;
        }
      }
      target.focus({ preventScroll: true });
    }, focusDelay);
  };

  return (
    <Button
      variant={variant}
      size={size}
      className={className}
      onClick={handleClick}
      {...restProps}
    >
      {label || children}
    </Button>
  );
}
