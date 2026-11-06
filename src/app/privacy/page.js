/**
 * Privacy Policy page for Pathmaker Plumbing.
 * Server Component presenting authentic customer privacy and data handling practices.
 */

import React from 'react';
import Link from 'next/link';
import { PageHero } from '@/components/sections/PageHero';
import { SITE } from '@/data/site';

export const metadata = {
  title: 'Privacy Policy | Pathmaker Plumbing Charlotte, NC',
  description: 'How Pathmaker Plumbing collects, protects, and handles customer information.',
};

export default function PrivacyPage() {
  return (
    <div className="page-enter">
      <PageHero
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Privacy' }]}
        h1="Privacy Policy"
        intro="Pathmaker Plumbing respects your privacy. This policy describes how we collect, use, and protect personal information submitted through our website."
        primary={null}
        secondary={null}
      />

      <section className="section">
        <div className="wrap max-w-3xl prose-legal">
          <h2>Information We Collect</h2>
          <p>
            When you submit a service inquiry, schedule a diagnostic visit, or contact us online, we collect personal details necessary to fulfill your plumbing request, including:
          </p>
          <ul>
            <li>Your full name and contact information (phone number, email address)</li>
            <li>Property address and ZIP code to verify service territory coverage</li>
            <li>Description of the plumbing symptoms, fixture issues, or equipment involved</li>
          </ul>

          <h2>How We Use Your Information</h2>
          <p>
            The information you provide is used strictly to:
          </p>
          <ul>
            <li>Contact you regarding your plumbing service request or estimate</li>
            <li>Dispatch our licensed plumbing technicians to your home or property</li>
            <li>Provide clear, itemized repair and installation estimates</li>
            <li>Communicate follow-up maintenance or warranty service when applicable</li>
          </ul>

          <h2>We Never Sell Your Data</h2>
          <p>
            Pathmaker Plumbing does not sell, rent, trade, or share your personal contact information with outside marketing firms or third-party advertisers under any circumstances.
          </p>

          <h2>Data Security &amp; Confidentiality</h2>
          <p>
            We implement administrative and technical safeguards to protect your personal details from unauthorized access, alteration, or disclosure. Customer records are accessible only to authorized Pathmaker Plumbing dispatch and service personnel.
          </p>

          <h2>Contact Us Regarding Privacy</h2>
          <p>
            If you have questions about this privacy policy or wish to update or delete your contact records, please contact our Charlotte office:
          </p>
          <p>
            <strong>Pathmaker Plumbing</strong><br />
            {SITE.address}<br />
            Phone: <a href={`tel:${SITE.phone.tel}`} className="text-link">{SITE.phone.display}</a>
          </p>

          <p className="mt-8">
            <Link href="/contact" className="text-link">
              &larr; Return to Service Request Page
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
