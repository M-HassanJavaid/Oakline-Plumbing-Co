/**
 * Website Terms of Service for Pathmaker Plumbing.
 * Server Component presenting authentic customer terms, estimates, and state licensing disclosures.
 */

import React from 'react';
import Link from 'next/link';
import { PageHero } from '@/components/sections/PageHero';
import { SITE } from '@/data/site';

export const metadata = {
  title: 'Terms of Service | Pathmaker Plumbing Charlotte, NC',
  description: 'Terms and conditions for Pathmaker Plumbing website and service inquiries.',
};

export default function TermsPage() {
  return (
    <div className="page-enter">
      <PageHero
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Terms' }]}
        h1="Website Terms of Service"
        intro="General terms and conditions governing the use of the Pathmaker Plumbing website and online service inquiry requests."
        primary={null}
        secondary={null}
      />

      <section className="section">
        <div className="wrap max-w-3xl prose-legal">
          <h2>Service Inquiries &amp; Scheduling</h2>
          <p>
            Submitting an online service request or inquiry through this website does not constitute an automatically confirmed appointment. Appointments are finalized only once our Charlotte dispatch team contacts you to verify technician availability, scheduling windows, and problem specifics.
          </p>

          <h2>Diagnostics &amp; Written Estimates</h2>
          <p>
            All plumbing work is performed following an in-person diagnostic assessment by a licensed technician. Prior to beginning any repair, replacement, or installation, we explain your options and provide upfront pricing for your approval. Work begins only upon customer authorization.
          </p>

          <h2>State Licensing &amp; Compliance</h2>
          <p>
            All plumbing services are performed under North Carolina state regulations by licensed and insured personnel:
          </p>
          <ul>
            <li><strong>Company Name:</strong> Pathmaker Plumbing</li>
            <li><strong>NC State Plumbing License:</strong> #31626 (P-1 Plumbing Unlimited)</li>
            <li><strong>Principal Office:</strong> {SITE.address}</li>
          </ul>

          <h2>Intellectual Property &amp; Website Use</h2>
          <p>
            The content, text, logos, diagrams, and photography displayed on this website are the property of Pathmaker Plumbing or used under proper licensing. Unauthorized reproduction, modification, or distribution is prohibited without prior written consent.
          </p>

          <h2>Governing Law</h2>
          <p>
            These terms are governed by and construed in accordance with the laws of the State of North Carolina, without regard to conflict of law principles.
          </p>

          <p className="mt-8">
            <Link href="/" className="text-link">
              &larr; Return to Home Page
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
