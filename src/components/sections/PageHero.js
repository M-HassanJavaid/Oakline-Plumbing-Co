/**
 * PageHero component for interior page hero banners.
 * Server Component with breadcrumbs, heading, lede, actions, and optional side photo.
 */

import React from 'react';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Button } from '@/components/ui/Button';
import { CallButton } from '@/components/ui/CallButton';
import { ImageWithFallback } from '@/components/ui/ImageWithFallback';
import { Icon } from '@/components/ui/Icon';
import { cn } from '@/lib/utils';

/**
 * @param {Object} props
 * @param {Array<{ label: string, to?: string }>} [props.crumbs] Breadcrumb trail.
 * @param {string} props.h1 Page main heading (receives data-page-h1 and tabIndex={-1}).
 * @param {string} props.intro Hero introductory text.
 * @param {Object} [props.primary] Primary CTA button configuration.
 * @param {Object|'call'} [props.secondary='call'] Secondary CTA button configuration.
 * @param {string} [props.image] Optional image URL.
 * @param {string} [props.imageAlt] Accessible alt text for image.
 * @param {string} [props.icon='tools'] Fallback icon for image.
 * @param {string} [props.note=''] Optional small notice below CTAs.
 */
export function PageHero({
  crumbs,
  h1,
  intro,
  primary,
  secondary = 'call',
  image,
  imageAlt,
  icon = 'tools',
  note = '',
}) {
  return (
    <section className="relative overflow-hidden bg-aqua">
      {/* Decorative background pipe curve */}
      <svg
        aria-hidden="true"
        className="absolute -right-24 -top-24 w-[520px] h-[520px] text-[#C5E4DE] hidden md:block"
        viewBox="0 0 200 200"
        fill="none"
      >
        <path
          d="M20 200V90a70 70 0 0 1 70-70h110"
          stroke="currentColor"
          strokeWidth="22"
        />
      </svg>
      <div
        className={cn(
          'wrap relative py-12 md:py-20 grid items-center',
          image ? 'lg:grid-cols-[1.1fr_.9fr] gap-10 lg:gap-14' : ''
        )}
      >
        <div className={image ? '' : 'max-w-3xl'}>
          {crumbs && <Breadcrumbs items={crumbs} />}
          <h1 className="h1-page" tabIndex={-1} data-page-h1>
            {h1}
          </h1>
          <p className="lede mt-5 measure">{intro}</p>
          {(primary || secondary) && (
            <div className="mt-8 flex flex-wrap gap-3">
              {primary && (
                <Button
                  label={primary.label}
                  href={primary.to || primary.href}
                  variant={primary.variant || 'primary'}
                  size={primary.size || 'default'}
                />
              )}
              {secondary === 'call' ? (
                <CallButton label="Call Now" />
              ) : secondary ? (
                <Button
                  label={secondary.label}
                  href={secondary.to || secondary.href}
                  variant={secondary.variant || 'secondary'}
                  size={secondary.size || 'default'}
                />
              ) : null}
            </div>
          )}
          {note && (
            <p className="mt-5 text-sm text-charcoal-70 flex items-start gap-2 measure">
              <Icon name="info" className="w-4 h-4 mt-0.5 text-teal flex-none" />
              <span>{note}</span>
            </p>
          )}
        </div>
        {image && (
          <div className="relative">
            <ImageWithFallback
              src={image}
              alt={imageAlt || ''}
              ratio="aspect-[4/3]"
              className="rounded-panel shadow-lift"
              icon={icon}
              priority
            />
          </div>
        )}
      </div>
    </section>
  );
}
