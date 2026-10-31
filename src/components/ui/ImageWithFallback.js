'use client';

/**
 * ImageWithFallback wraps Next.js Image with a resilient branded fallback state.
 * If the remote image fails to load or the network is offline, a branded placeholder
 * with an icon and alt text is displayed without breaking page layout.
 * Client component because onError event tracking requires browser execution.
 */

import React, { useState } from 'react';
import Image from 'next/image';
import { Icon } from './Icon';
import { cn } from '@/lib/utils';

/**
 * @param {Object} props
 * @param {string} props.src Remote image URL.
 * @param {string} props.alt Descriptive alt text for accessibility.
 * @param {string} [props.ratio='aspect-[4/3]'] CSS aspect ratio class.
 * @param {string} [props.className=''] Extra classes on the container figure.
 * @param {string} [props.tag='Illustrative image'] Optional demo disclaimer tag on image.
 * @param {string} [props.icon='tools'] Fallback icon name if image fails to load.
 * @param {boolean} [props.priority=false] Priority loading for heroes.
 */
export function ImageWithFallback({
  src,
  alt,
  ratio = 'aspect-[4/3]',
  className = '',
  tag = 'Illustrative image',
  icon = 'tools',
  priority = false,
}) {
  const [hasError, setHasError] = useState(false);

  return (
    <figure className={cn('img-frame w-full', ratio, className)}>
      {!hasError ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
          priority={priority}
          className="object-cover"
          onError={() => setHasError(true)}
          unoptimized
        />
      ) : null}

      {hasError && (
        <div className="img-fallback" role="img" aria-label={alt}>
          <span className="w-14 h-14 rounded-2xl bg-white/80 grid place-items-center shadow-card text-teal">
            <Icon name={icon} className="w-7 h-7" />
          </span>
          <span className="text-sm font-semibold max-w-[30ch] text-teal">{alt}</span>
        </div>
      )}

      {tag && <figcaption className="img-tag">{tag}</figcaption>}
    </figure>
  );
}
