'use client';

/**
 * Thank You page for Oakline Plumbing Co.
 * Client component that enforces the in-memory submission guard via SubmissionContext.
 * If no submission exists in memory, displays "No request to confirm".
 * If a submission exists, displays confirmation with the requested service name.
 */

import React from 'react';
import { useSubmission } from '@/context/SubmissionContext';
import { Button } from '@/components/ui/Button';
import { CallButton } from '@/components/ui/CallButton';
import { DemoTag } from '@/components/ui/DemoTag';
import { Notice } from '@/components/ui/Notice';
import { Icon } from '@/components/ui/Icon';

export default function ThankYouPage() {
  const { lastSubmission } = useSubmission();

  // Guard: when visiting /thank-you directly without submitting the form in this session
  if (!lastSubmission) {
    return (
      <div className="page-enter">
        <section className="section">
          <div className="wrap max-w-2xl text-center">
            <span className="w-16 h-16 mx-auto rounded-2xl bg-aqua grid place-items-center text-teal">
              <Icon name="clipboard" className="w-8 h-8" />
            </span>
            <h1 className="h1-page mt-6" tabIndex={-1} data-page-h1>
              No request to confirm
            </h1>
            <p className="lede mt-4">
              This page only appears after a request is accepted. Nothing has been sent in this session.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button label="Go to the request form" href="/contact" />
              <Button label="Back to Home" href="/" variant="secondary" />
            </div>
          </div>
        </section>
      </div>
    );
  }

  const nextSteps = [
    'A team member reviews your request.',
    'They confirm your area and availability.',
    'They follow up to agree on next steps.',
  ];

  return (
    <div className="page-enter">
      <section className="section">
        <div className="wrap max-w-3xl">
          <div className="bg-white rounded-[24px] border border-[#D6E5E2] shadow-card p-7 md:p-12">
            <span className="w-16 h-16 rounded-2xl bg-[#ECF7F1] grid place-items-center text-success">
              <Icon name="checkCircle" className="w-9 h-9" />
            </span>
            <div className="mt-6">
              <DemoTag text="Demo submission completed" />
            </div>
            <h1 className="h1-page mt-4" tabIndex={-1} data-page-h1>
              Your Request Has Been Received
            </h1>
            <p className="lede mt-4">
              This was a demo, so no plumber will contact you. In a live site, this is where you’d see the next step for your{' '}
              <strong className="text-teal">{lastSubmission.serviceLabel}</strong>{' '}
              request.
            </p>

            <Notice
              tone="info"
              className="mt-7"
              title="This isn’t a confirmed appointment"
              body="A team member would review the details, confirm coverage and availability, and then follow up to arrange a time."
            />

            <h2 className="h3 mt-9">What would happen next</h2>
            <ol className="mt-4 space-y-3">
              {nextSteps.map((t, i) => (
                <li key={i} className="flex gap-3">
                  <span className="w-7 h-7 rounded-full bg-teal text-white grid place-items-center text-sm font-bold flex-none">
                    {i + 1}
                  </span>
                  <span className="pt-0.5">{t}</span>
                </li>
              ))}
            </ol>

            <div className="mt-9 pt-7 border-t border-[#E1ECEA] flex flex-wrap gap-3">
              <CallButton label="Urgent? Call Now" variant="primary" />
              <Button label="Back to Home" href="/" variant="secondary" />
              <Button label="Browse Services" href="/services" variant="secondary" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
