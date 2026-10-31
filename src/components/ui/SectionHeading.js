/**
 * SectionHeading renders consistent section titles and lede paragraphs.
 */

import React from 'react';
import { cn } from '@/lib/utils';

/**
 * @param {Object} props
 * @param {string} props.title Section heading text.
 * @param {string} [props.intro=''] Optional lede text below heading.
 * @param {'left'|'center'} [props.align='left'] Alignment.
 * @param {string} [props.id=''] Optional id for aria-labelledby.
 * @param {2|3} [props.level=2] Heading level (2 or 3).
 * @param {string} [props.className=''] Extra classes.
 */
export function SectionHeading({
  title,
  intro = '',
  align = 'left',
  id = '',
  level = 2,
  className = '',
}) {
  const isCenter = align === 'center';
  const HeadingTag = `h${level}`;

  return (
    <div
      className={cn(
        isCenter ? 'text-center mx-auto' : '',
        'max-w-2xl mb-10 md:mb-12',
        className
      )}
    >
      <HeadingTag id={id || undefined} className="h2">
        {title}
      </HeadingTag>
      {intro && (
        <p className={cn('lede mt-4', isCenter && 'mx-auto')}>
          {intro}
        </p>
      )}
    </div>
  );
}
