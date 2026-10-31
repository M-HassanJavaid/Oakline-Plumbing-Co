/**
 * Privacy Notice page for Oakline Plumbing Co.
 * Server Component explaining data handling in this demo and considerations for real production.
 */

import React from 'react';
import Link from 'next/link';
import { PageHero } from '@/components/sections/PageHero';
import { Notice } from '@/components/ui/Notice';

export const metadata = {
  title: 'Privacy Notice | Oakline Plumbing Co. (Concept)',
  description: 'How this concept site handles form information.',
};

export default function PrivacyPage() {
  return (
    <div className="page-enter">
      <PageHero
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Privacy' }]}
        h1="Privacy Notice"
        intro="What happens to information entered on this concept site, written to match how the demo actually works."
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

          <h2>What this demo collects</h2>
          <p>
            The forms ask for your name, phone number, ZIP code, the service you need, and optionally a description, urgency, and email address.
          </p>

          <h2>Where it goes</h2>
          <p>
            Nowhere. Form entries are checked in your browser and held in memory only long enough to show the confirmation screen. Nothing is sent to a server, a plumber, or PlumbNexo.
          </p>

          <h2>How long it’s kept</h2>
          <p>
            Until you reload or close the page. The demo doesn’t use cookies, local storage, or analytics.
          </p>

          <h2>Photo uploads</h2>
          <p>
            Photo uploads are disabled. A live site would enable them only after defining secure storage, access, and retention.
          </p>

          <h2>What a real privacy notice must cover</h2>
          <ul>
            <li>What data is collected and why it’s needed</li>
            <li>Who receives requests and who can access them</li>
            <li>How long information is kept</li>
            <li>Any analytics, cookies, spam protection, or third-party form processors actually used</li>
            <li>How visitors can ask for their information to be viewed or deleted</li>
          </ul>

          <p className="mt-8">
            <Link href="/contact" className="text-link">
              Back to the contact page
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
