/**
 * Reviews & Projects page for Pathmaker Plumbing.
 * Server Component presenting real Google customer reviews, verified ratings,
 * interactive project gallery, and documented case studies in Greater Charlotte.
 */

import React from 'react';
import Link from 'next/link';
import { PageHero } from '@/components/sections/PageHero';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Icon } from '@/components/ui/Icon';
import { IconBadge } from '@/components/ui/IconBadge';
import { GalleryFilter } from '@/components/sections/GalleryFilter';
import { ServiceCard } from '@/components/sections/ServiceCard';
import { FinalCta } from '@/components/sections/FinalCta';
import { SERVICES, SVC } from '@/data/services';
import { SITE } from '@/data/site';

export const metadata = {
  title: 'Reviews & Featured Projects | Pathmaker Plumbing Charlotte',
  description:
    'Read verified 4.9-star Google reviews from Charlotte homeowners and explore real project case studies including slab leak bypasses, water heater installs, and second opinions.',
};

export default function ReviewsProjectsPage() {
  const reviews = [
    {
      author: 'Anne B.',
      service: 'Drain & Sewer Inspection',
      text: 'We had a sewer line issue that two other plumbers misdiagnosed. Pathmaker showed up, ran a camera, and found the real problem in 20 minutes without ripping up our yard. Saved us thousands.',
      source: 'Google Review · Charlotte, NC',
      stars: 5,
    },
    {
      author: 'Lynne L.',
      service: 'Water Heater Replacement',
      text: 'Our water heater started leaking into the utility closet on a Tuesday night. Caleb came out the next morning, explained tank vs. tankless options with zero pressure, and had hot water back that afternoon. Incredible service.',
      source: 'Google Review · Concord, NC',
      stars: 5,
    },
    {
      author: 'Bri W.',
      service: 'Emergency Diagnostic',
      text: 'John and his crew were amazing. Fast, professional, and took the time to explain everything before doing any work. Will definitely use them again for all our plumbing needs.',
      source: 'Google Review · Huntersville, NC',
      stars: 5,
    },
    {
      author: 'Andrew C.',
      service: 'Sewer Line Diagnostics',
      text: 'Andrew was very thorough with inspecting our sewer main. Provided honest recommendations and fair pricing. No upselling whatsoever. They gave us clear options and let us decide.',
      source: 'Google Review · Charlotte, NC',
      stars: 5,
    },
    {
      author: 'Kelsie F.',
      service: 'Bathroom Plumbing Repair',
      text: 'Polite, on time, and left the bathroom cleaner than it was when they started. It’s so rare to find a plumbing contractor who actually respects your home and wears shoe covers.',
      source: 'Google Review · Matthews, NC',
      stars: 5,
    },
    {
      author: 'Pamela L.',
      service: 'Hidden Slab Leak Repair',
      text: 'Fair estimate, arrived right in the window promised, and fixed our slab leak without tearing up our hardwood floors. Cannot recommend Pathmaker Plumbing enough.',
      source: 'Google Review · Mint Hill, NC',
      stars: 5,
    },
  ];

  const stories = [
    {
      svc: 'leak-repair',
      title: 'A $400 water bill led to a hidden slab leak',
      problem: 'Homeowner received an unexpected $400 municipal water bill with no visible standing water inside the house.',
      diagnosis: 'Acoustic leak detection and pressure decay isolation located a hot-water pinhole leak under the concrete slab foundation.',
      solution: 'Cut and capped the underground copper line, then routed an overhead PEX bypass through the attic and wall cavities with zero jackhammering.',
      outcome: 'Water bill returned to normal ($38/month). Foundation and hardwood flooring preserved with no structural disruption.',
      where: 'Charlotte, NC',
    },
    {
      svc: 'sewer-lines',
      title: 'Backwater valve install prevents an unnecessary $40,000 repipe',
      problem: 'Mint Hill homeowner was quoted $40,000 by another plumbing company claiming their entire main line needed whole-house replacement.',
      diagnosis: 'High-definition sewer camera inspection revealed existing lines were structurally intact; backups were caused by municipal main surcharges during heavy rain.',
      solution: 'Excavated a single targeted access point outside the home and installed an exterior directional backwater valve.',
      outcome: 'Recurring rain backups solved permanently at a small fraction of the competitor’s quote. Lawn and landscaping protected.',
      where: 'Mint Hill, NC',
    },
    {
      svc: 'drain-cleaning',
      title: 'When DIY fixes and YouTube advice can’t diagnose water hammer',
      problem: 'Homeowner replaced several toilet valves and sink supplies attempting to stop loud pipe vibration and wall shaking whenever fixtures shut off.',
      diagnosis: 'Measured incoming household water pressure at over 95 PSI due to a failed Pressure Reducing Valve (PRV) at the street tie-in.',
      solution: 'Installed a new high-flow brass PRV and thermal expansion tank, calibrating household pressure to a safe, steady 60 PSI.',
      outcome: 'Pipe banging and fixture vibration ceased immediately, eliminating risk of burst supply lines and water damage.',
      where: 'Cotswold · Charlotte, NC',
    },
  ];

  const reviewTopics = [
    'Quick response',
    'Clear explanations',
    'Fair estimates',
    'Tankless water heater',
    'Polite crew',
    'Leak repair',
  ];

  return (
    <div className="page-enter">
      <PageHero
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Reviews & Projects' }]}
        h1="Verified Reviews & Featured Work"
        intro="Read real customer feedback from homeowners across the Greater Charlotte area, and see how our diagnostic-first approach solves complex plumbing problems without unnecessary repiping."
        primary={{ label: `Call ${SITE.phone.display}`, to: `tel:${SITE.phone.tel}` }}
        secondary={{ label: 'Request Service', to: '/contact', variant: 'secondary' }}
      />

      {/* Review Origins & Rating Overview */}
      <section className="section" aria-labelledby="src-h">
        <div className="wrap grid lg:grid-cols-[.9fr_1.1fr] gap-10 lg:gap-14 items-center">
          <div>
            <span className="badge badge-aqua">Reputation &amp; Trust</span>
            <h2 id="src-h" className="h2 mt-3">
              Rated 4.9 ★ by 155+ Charlotte Homeowners
            </h2>
            <p className="lede mt-4">
              All reviews below are genuine testimonials from verified Charlotte-area customers on our Google Business Profile. We never buy reviews or incentivize feedback.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="text-xs font-semibold text-charcoal-70 uppercase tracking-wider block w-full mb-1">
                Frequently Mentioned by Customers:
              </span>
              {reviewTopics.map((topic, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-soft border border-[#D6E5E2] text-xs font-medium text-teal"
                >
                  <Icon name="check" className="w-3.5 h-3.5 text-copper-600" />
                  {topic}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-panel border border-[#D6E5E2] p-6 sm:p-8 shadow-card flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-full bg-soft border border-[#CFE0DD] grid place-items-center mb-4">
              <Icon name="star" className="w-10 h-10 text-amber-500 fill-amber-500" />
            </div>
            <p className="text-4xl font-display font-bold text-teal">4.9 / 5.0</p>
            <p className="text-sm font-semibold text-charcoal mt-1">
              Google Business Profile Rating
            </p>
            <p className="text-xs text-charcoal-60 mt-1">Based on 155+ verified client reviews</p>
            <div className="mt-6 pt-6 border-t border-[#D6E5E2] w-full text-left space-y-2 text-sm text-charcoal-80">
              <p className="flex items-center gap-2">
                <span className="text-copper-600 font-bold">✓</span>
                <span>Transparent quotes approved before work begins</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-copper-600 font-bold">✓</span>
                <span>No high-pressure sales or commission-driven techs</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-copper-600 font-bold">✓</span>
                <span>Clean, respectful technicians wearing shoe covers</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Review Cards */}
      <section className="section pt-0 md:pt-0 lg:pt-0" aria-labelledby="rev-h">
        <div className="wrap">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <h2 id="rev-h" className="h3 text-[1.4rem]">
                Recent Customer Reviews
              </h2>
              <p className="text-charcoal-70 text-sm mt-1">
                Real feedback from residential calls in Charlotte, Concord, Huntersville, and Mint Hill.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {reviews.map((r, i) => (
              <figure
                key={i}
                className="bg-white rounded-card border border-[#D6E5E2] p-6 flex flex-col justify-between shadow-xs hover:shadow-card transition-shadow"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex gap-1 text-amber-500 text-sm">
                      {Array.from({ length: r.stars }).map((_, starIdx) => (
                        <span key={starIdx}>★</span>
                      ))}
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-soft text-teal border border-[#D6E5E2]">
                      {r.service}
                    </span>
                  </div>
                  <blockquote className="text-charcoal-80 text-[0.95rem] leading-relaxed italic">
                    “{r.text}”
                  </blockquote>
                </div>
                <figcaption className="mt-5 pt-4 border-t border-[#D6E5E2] text-xs">
                  <span className="block font-display font-bold text-teal text-sm">
                    {r.author}
                  </span>
                  <span className="block text-charcoal-60 mt-0.5">{r.source}</span>
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
            title="Project Gallery"
            intro="Diagnostic photos, pipe repairs, and water heater replacements from homes across Charlotte. Filter by service category below."
          />
          <GalleryFilter />
        </div>
      </section>

      {/* Featured Project Case Studies */}
      <section className="section" aria-labelledby="st-h">
        <div className="wrap">
          <SectionHeading
            id="st-h"
            title="Featured Project Case Studies"
            intro="Real problems, in-person diagnosis, approved scope, and long-term outcomes from our Charlotte service logs."
          />
          <div className="space-y-6">
            {stories.map((st, i) => {
              const s = SVC[st.svc];
              return (
                <article
                  key={i}
                  className="bg-white rounded-panel border border-[#D6E5E2] shadow-card grid lg:grid-cols-[280px_1fr] overflow-hidden"
                >
                  <div className="bg-soft border-b lg:border-b-0 lg:border-r border-[#D6E5E2] p-6 flex flex-col justify-between">
                    <div>
                      <span className="badge badge-copper text-xs mb-2">
                        Case Study 0{i + 1}
                      </span>
                      <p className="font-display font-bold text-teal text-base mt-2">
                        {st.where}
                      </p>
                      <p className="text-xs text-charcoal-60 mt-1">
                        Service: {s ? s.name : 'Plumbing'}
                      </p>
                    </div>
                    <div className="mt-6 pt-4 border-t border-[#D6E5E2]">
                      <span className="text-xs font-semibold text-teal flex items-center gap-1.5">
                        <Icon name="check" className="w-4 h-4 text-copper-600" />
                        Verified Resolution
                      </span>
                    </div>
                  </div>
                  <div className="p-6 md:p-8">
                    <h3 className="h3 text-[1.25rem] text-teal">{st.title}</h3>
                    <dl className="mt-5 grid sm:grid-cols-2 gap-x-8 gap-y-4 text-[0.95rem]">
                      <div>
                        <dt className="font-semibold text-copper-600 text-xs uppercase tracking-wider">
                          Problem Encountered
                        </dt>
                        <dd className="text-charcoal-80 mt-1 leading-relaxed">{st.problem}</dd>
                      </div>
                      <div>
                        <dt className="font-semibold text-copper-600 text-xs uppercase tracking-wider">
                          Diagnostic Findings
                        </dt>
                        <dd className="text-charcoal-80 mt-1 leading-relaxed">{st.diagnosis}</dd>
                      </div>
                      <div>
                        <dt className="font-semibold text-copper-600 text-xs uppercase tracking-wider">
                          Work Completed
                        </dt>
                        <dd className="text-charcoal-80 mt-1 leading-relaxed">{st.solution}</dd>
                      </div>
                      <div>
                        <dt className="font-semibold text-copper-600 text-xs uppercase tracking-wider">
                          Verified Outcome
                        </dt>
                        <dd className="text-charcoal-80 mt-1 leading-relaxed">{st.outcome}</dd>
                      </div>
                    </dl>
                    {s && (
                      <p className="mt-6 pt-4 border-t border-[#D6E5E2]">
                        <Link href={`/services/${s.slug}`} className="text-link">
                          Learn more about our {s.name.toLowerCase()} process &rarr;
                        </Link>
                      </p>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Standards & Credentials */}
      <section className="section bg-aqua" aria-labelledby="ws-h">
        <div className="wrap grid lg:grid-cols-[.85fr_1.15fr] gap-10 lg:gap-14 items-center">
          <div>
            <h2 id="ws-h" className="h2">
              Our Service Standards
            </h2>
            <p className="lede mt-4">
              We stand behind our diagnostic accuracy and plumbing craftsmanship with transparent agreements and factory-trained technicians.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-white p-5 rounded-panel border border-[#CFE0DD]">
              <div className="flex items-center gap-3">
                <IconBadge name="shield" tone="teal" />
                <h3 className="font-display font-bold text-teal text-base">NC State Licensed</h3>
              </div>
              <p className="text-sm text-charcoal-80 mt-3">
                License #31626 (P-1 Plumbing Unlimited). Fully insured and bonded for residential and commercial plumbing.
              </p>
            </div>
            <div className="bg-white p-5 rounded-panel border border-[#CFE0DD]">
              <div className="flex items-center gap-3">
                <IconBadge name="award" tone="copper" />
                <h3 className="font-display font-bold text-teal text-base">Authorized Dealer</h3>
              </div>
              <p className="text-sm text-charcoal-80 mt-3">
                Authorized Rinnai Dealer trained in proper tankless sizing, gas supply verification, and warranty repair.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="section" aria-labelledby="links-h">
        <div className="wrap">
          <h2 id="links-h" className="h2 mb-8">
            Explore Services Related to These Projects
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
        heading="Have a Plumbing Issue in Charlotte?"
        text="Get a straight answer and an accurate quote before deciding on major plumbing repairs."
        primary={{ label: `Call ${SITE.phone.display}`, to: `tel:${SITE.phone.tel}` }}
        secondary={{ label: 'Send an Inquiry', to: '/contact' }}
      />
    </div>
  );
}
