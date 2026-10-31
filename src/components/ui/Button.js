/**
 * Reusable Button component supporting primary, secondary, copper, and ghost-light variants.
 * Renders Next.js Link when href is provided, or a native button element otherwise.
 */

import React from 'react';
import Link from 'next/link';
import { Icon } from './Icon';
import { cn } from '@/lib/utils';

/**
 * @param {Object} props
 * @param {string} [props.label] Text label for the button.
 * @param {React.ReactNode} [props.children] Child elements if label is not provided.
 * @param {string} [props.href] Navigation URL. Renders a Next.js Link if provided.
 * @param {'primary'|'secondary'|'copper'|'ghost-light'} [props.variant='primary'] Visual appearance style.
 * @param {'default'|'sm'} [props.size='default'] Size of button.
 * @param {string} [props.icon] Name of icon to display before label.
 * @param {string} [props.className] Additional CSS classes.
 * @param {'button'|'submit'|'reset'} [props.type='button'] Button type for native buttons.
 * @param {boolean} [props.disabled=false] Disabled state.
 * @param {Function} [props.onClick] Click event handler.
 */
export function Button({
  label,
  children,
  href,
  variant = 'primary',
  size = 'default',
  icon,
  className = '',
  type = 'button',
  disabled = false,
  onClick,
  ...restProps
}) {
  const content = (
    <>
      {icon && <Icon name={icon} className="w-[18px] h-[18px] flex-none" />}
      <span>{label || children}</span>
    </>
  );

  const buttonClasses = cn(
    'btn',
    `btn-${variant}`,
    size === 'sm' && 'btn-sm',
    className
  );

  if (href) {
    return (
      <Link href={href} className={buttonClasses} onClick={onClick} {...restProps}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={buttonClasses}
      disabled={disabled}
      onClick={onClick}
      {...restProps}
    >
      {content}
    </button>
  );
}
