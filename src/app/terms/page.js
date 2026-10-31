/**
 * Website Terms page for Oakline Plumbing Co.
 * Server Component presenting fictional demonstration terms and disclaimers.
 */

import React from 'react';
import { PageHero } from '@/components/sections/PageHero';
import { Notice } from '@/components/ui/Notice';

export const metadata = {
  title: 'Website Terms | Oakline Plumbing Co. (Concept)',
  description: 'Terms for using this concept site.',
};

export default function TermsPage() {
  return (
    <div className="page-enter">
      <PageHero
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Terms' }]}
        h1="Website Terms"
        intro="Terms that apply to using this concept site. A real business would only publish terms that reflect its actual operations."
        primary={null}
        secondary={null}
      />

      <section className="section">
        <div className="wrap max-w-3xl prose-legal">
          <Notice
            tone="warn"
            title="Planning placeholder"
            body="This text describes how this demo behaves. It must be replaced and reviewed before any real business uses the site."
          />

          <h2>A portfolio demonstration</h2>
          <p>
            Oakline Plumbing Co. is fictional. This site was created by PlumbNexo to demonstrate website design and doesn’t offer plumbing services.
          </p>

          <h2>No service agreement</h2>
          <p>
            Using this site, or sending a form, doesn’t create a service agreement, warranty, booking, or fixed price.
          </p>

          <h2>Information on this site</h2>
          <p>
            Content is illustrative. Process descriptions, standards, and cost factors are examples of how a real company could explain its work, not commitments.
          </p>

          <h2>Before a real launch</h2>
          <p>
            Any terms for a real plumbing business must be written for its actual operations and reviewed by a qualified professional.
          </p>
        </div>
      </section>
    </div>
  );
}
