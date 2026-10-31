/**
 * Reviews & Projects page for Oakline Plumbing Co.
 * Server Component presenting honest proof frameworks, review card placeholders,
 * interactive gallery filter, and project walkthrough stories without fabricated claims.
 */

import React from 'react';
import Link from 'next/link';
import { PageHero } from '@/components/sections/PageHero';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Notice } from '@/components/ui/Notice';
import { ProofSlot } from '@/components/ui/ProofSlot';
import { DemoTag } from '@/components/ui/DemoTag';
import { Icon } from '@/components/ui/Icon';
import { GalleryFilter } from '@/components/sections/GalleryFilter';
import { ServiceCard } from '@/components/sections/ServiceCard';
import { FinalCta } from '@/components/sections/FinalCta';
import { SERVICES, SVC } from '@/data/services';

export const metadata = {
  title: 'Example Project & Review Layouts | Oakline Concept',
  description:
    'Concept layouts for genuine reviews and project stories. No fabricated testimonials or ratings are shown.',
};

export default function ReviewsProjectsPage() {
  const stories = [
    {
      svc: 'drain-cleaning',
      title: 'Recurring bathroom clog',
      problem: 'Shower drain slowing down every few weeks.',
      scope: 'Clear the branch line after the homeowner reviews options.',
      done: 'Space for a description of the completed work.',
      outcome: 'Space for the verified outcome.',
      where: 'Neighborhood-level location only',
    },
    {
      svc: 'water-heaters',
      title: 'Aging tank water heater',
      problem: 'Inconsistent hot water from an older unit.',
      scope: 'Homeowner chooses replacement after reviewing both options.',
      done: 'Space for a description of the installation.',
      outcome: 'Space for the verified outcome.',
      where: 'Month and year only',
    },
    {
      svc: 'leak-repair',
      title: 'Ceiling stain below a bathroom',
      problem: 'A spreading stain on a first-floor ceiling.',
      scope: 'Assessment, then repair of the accessible supply line.',
      done: 'Space for a description of the repair.',
      outcome: 'Space for the verified outcome.',
      where: 'Location kept general for privacy',
    },
  ];

  return (
    <div className="page-enter">
      <PageHero
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Reviews & Projects' }]}
        h1="Our Work & Customer Experiences"
        intro="This page is built to show genuine reviews and real project stories. Because Oakline is fictional, every block below is a clearly labeled layout, with no invented customers or ratings."
        primary={{ label: 'Explore Services', to: '/services' }}
        secondary={{ label: 'Contact', to: '/contact', variant: 'secondary' }}
      />

      {/* Review Origins & Honesty Notice */}
      <section className="section" aria-labelledby="src-h">
        <div className="wrap grid lg:grid-cols-[.85fr_1.15fr] gap-10 lg:gap-14 items-start">
          <div>
            <h2 id="src-h" className="h2">
              Where reviews come from
            </h2>
            <p className="lede mt-4">
              Each review would show its source, such as a public review platform, and be used with permission. Reviews are kept accurate and up to date.
            </p>
          </div>
          <Notice
            tone="warn"
            title="Example layout — fictional demonstration"
            body="No reviews, star ratings, or customer names appear on this page because none exist. Empty, labeled modules are used instead of made-up testimonials."
          />
        </div>
      </section>

      {/* Review Card Placeholders */}
      <section className="section pt-0 md:pt-0 lg:pt-0" aria-labelledby="rev-h">
        <div className="wrap">
          <h2 id="rev-h" className="h3 text-[1.35rem] mb-6">
            Review cards
          </h2>
          <div className="grid md:grid-cols-3 gap-5">
            {SERVICES.slice(0, 3).map((s) => (
              <figure key={s.slug} className="proof-slot p-6 flex flex-col">
                <span className="text-teal">
                  <Icon name="quote" className="w-7 h-7" />
                </span>
                <blockquote className="mt-4 text-charcoal-70 flex-1">
                  A genuine customer quote about {s.name.toLowerCase()} appears here, unedited except for length.
                </blockquote>
                <figcaption className="mt-5 pt-4 border-t border-dashed border-[#9DBFBB] text-sm">
                  <span className="block font-semibold text-teal">
                    Customer first name or initials
                  </span>
                  <span className="block text-charcoal-70">
                    Review source and date, with service: {s.navLabel}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Filterable Project Gallery */}
      <section
        className="section bg-white border-y border-[#DCE7E5]"
        aria-labelledby="gal-h"
      >
        <div className="wrap">
          <SectionHeading
            id="gal-h"
            title="Project gallery"
            intro="Real photos grouped by service, each with a caption explaining what you’re looking at. Use the filters to see how grouping would work."
          />
          <GalleryFilter />
        </div>
      </section>

      {/* Featured Project Stories */}
      <section className="section" aria-labelledby="st-h">
        <div className="wrap">
          <SectionHeading
            id="st-h"
            title="Featured project stories"
            intro="Each story covers the problem, approved scope, work completed, and outcome, with location detail kept appropriate for privacy."
          />
          <div className="space-y-6">
            {stories.map((st, i) => {
              const s = SVC[st.svc];
              return (
                <article
                  key={i}
                  className="bg-white rounded-panel border border-[#D6E5E2] shadow-card grid lg:grid-cols-[300px_1fr] overflow-hidden"
                >
                  <div className="proof-slot !rounded-none !border-0 lg:!border-r-2 !border-b-2 lg:!border-b-0 min-h-[180px] grid place-items-center text-teal text-center p-6">
                    <div>
                      <Icon name="camera" className="w-8 h-8 mx-auto" />
                      <p className="text-sm mt-2 font-semibold">
                        Photo with permission
                      </p>
                    </div>
                  </div>
                  <div className="p-6 md:p-8">
                    <div className="flex flex-wrap items-center gap-3">
                      <DemoTag text="Example project layout — fictional demonstration" />
                      <span className="text-sm text-charcoal-70">{st.where}</span>
                    </div>
                    <h3 className="h3 text-[1.3rem] mt-3">{st.title}</h3>
                    <dl className="mt-5 grid sm:grid-cols-2 gap-x-8 gap-y-4 text-[0.96rem]">
                      {[
                        ['Problem', st.problem],
                        ['Approved scope', st.scope],
                        ['Work completed', st.done],
                        ['Outcome', st.outcome],
                      ].map(([k, v]) => (
                        <div key={k}>
                          <dt className="font-semibold text-teal">{k}</dt>
                          <dd className="text-charcoal-70 mt-0.5">{v}</dd>
                        </div>
                      ))}
                    </dl>
                    <p className="mt-5">
                      <Link href={`/services/${s.slug}`} className="text-link">
                        Read about {s.name.toLowerCase()}
                      </Link>
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Standards & Warranties */}
      <section className="section bg-aqua" aria-labelledby="ws-h">
        <div className="wrap grid lg:grid-cols-[.85fr_1.15fr] gap-10 lg:gap-14 items-start">
          <div>
            <h2 id="ws-h" className="h2">
              Work standards and warranties
            </h2>
            <p className="lede mt-4">
              Any warranty or service guarantee is shown here only when it’s real and documented.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <ProofSlot
              title="Labor warranty"
              body="Terms appear here only if the company provides one in writing."
              icon="shield"
            />
            <ProofSlot
              title="Service process"
              body="A short description of the approved process, linked to the full details."
              icon="clipboard"
            />
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="section" aria-labelledby="links-h">
        <div className="wrap">
          <h2 id="links-h" className="h2 mb-8">
            Explore services related to this work
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SERVICES.map((s) => (
              <ServiceCard key={s.slug} service={s} variant="compact" />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <FinalCta
        heading="Discuss Your Plumbing Project"
        text="Tell us what you’re dealing with, and the team can explain what’s involved."
        primary={{ label: 'Explore Services', to: '/services' }}
        secondary={{ label: 'Contact', to: '/contact' }}
      />
    </div>
  );
}
