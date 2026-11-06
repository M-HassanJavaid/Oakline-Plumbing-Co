/**
 * Service Areas page for Pathmaker Plumbing.
 * Server Component presenting Charlotte shop base (5676 Underwood Ave),
 * surrounding towns, Charlotte neighborhoods, accessible coverage list, and ZIP checker.
 */

import React from 'react';
import Link from 'next/link';
import { ScrollToButton } from '@/components/ui/ScrollToButton';
import { CallButton } from '@/components/ui/CallButton';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CoverageMap } from '@/components/sections/CoverageMap';
import { Icon } from '@/components/ui/Icon';
import { IconBadge } from '@/components/ui/IconBadge';
import { Notice } from '@/components/ui/Notice';
import { Accordion } from '@/components/ui/Accordion';
import { ZipChecker } from '@/components/sections/ZipChecker';
import { SERVICES } from '@/data/services';
import { FAQ } from '@/data/faq';
import { SITE, NEARBY_TOWNS, CHARLOTTE_NEIGHBORHOODS } from '@/data/site';

export const metadata = {
  title: 'Service Areas | Pathmaker Plumbing Charlotte, NC',
  description:
    'Pathmaker Plumbing serves homeowners and businesses throughout Charlotte, Concord, Harrisburg, Huntersville, Matthews, Mint Hill, and surrounding areas. Check your ZIP code.',
};

export default function ServiceAreasPage() {
  const coverageData = [
    {
      county: 'Mecklenburg County',
      areas: 'Charlotte, Huntersville, Cornelius, Davidson, Matthews, Pineville, Mint Hill, Ballantyne',
      notes: 'Full residential service coverage including leak detection, water heaters, and sewer lines.',
    },
    {
      county: 'Cabarrus County',
      areas: 'Concord, Harrisburg, Kannapolis',
      notes: 'Direct dispatch from our northeast Charlotte shop on Underwood Ave.',
    },
    {
      county: 'Union County',
      areas: 'Indian Trail, Weddington, Waxhaw, Stallings',
      notes: 'Standard service coverage for scheduled installations and diagnostics.',
    },
  ];

  return (
    <div className="page-enter">
      <section className="relative overflow-hidden bg-aqua">
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
        <div className="wrap relative py-12 md:py-20">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-1.5 text-sm text-charcoal-70">
              <li className="flex items-center gap-1.5">
                <Link href="/" className="hover:text-teal underline-offset-4 hover:underline">
                  Home
                </Link>
                <span aria-hidden="true" className="text-charcoal-50">
                  /
                </span>
              </li>
              <li className="flex items-center gap-1.5">
                <span aria-current="page" className="font-semibold text-teal">
                  Service Areas
                </span>
              </li>
            </ol>
          </nav>
          <div className="max-w-3xl">
            <h1 className="h1-page" tabIndex={-1} data-page-h1>
              Plumbing Services in Charlotte &amp; Surrounding Communities
            </h1>
            <p className="lede mt-5 measure">
              Based out of northeast Charlotte, Pathmaker Plumbing provides prompt, honest plumbing service across Mecklenburg, Cabarrus, and Union counties.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <ScrollToButton
                targetId="zip-check"
                label="Check Your ZIP Code"
                variant="primary"
              />
              <a
                href={`tel:${SITE.phone.tel}`}
                className="btn btn-secondary inline-flex items-center gap-2"
              >
                <Icon name="phone" className="w-4 h-4" />
                <span>Call {SITE.phone.display}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Focus & Map */}
      <section className="section" aria-labelledby="primary-h">
        <div className="wrap grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div>
            <span className="badge badge-aqua">Dispatch Center</span>
            <h2 id="primary-h" className="h2 mt-3">
              Centered in Northeast Charlotte
            </h2>
            <p className="lede mt-4">
              Our central shop is located at <strong>{SITE.address}</strong>. From this base near I-85 and University City, our service trucks quickly reach homes throughout the Greater Charlotte metro.
            </p>

            <h3 className="h3 mt-8 text-lg font-bold text-teal">Nearby Towns &amp; Suburbs</h3>
            <ul className="flex flex-wrap gap-2 mt-3" aria-label="Nearby communities served">
              {NEARBY_TOWNS.map((town) => (
                <li key={town}>
                  <span className="chip chip-static !border-[#CFE0DD] bg-white text-charcoal-80 font-medium">
                    <Icon name="pin" className="w-3.5 h-3.5 text-copper-600" />
                    {town}
                  </span>
                </li>
              ))}
            </ul>

            <h3 className="h3 mt-6 text-lg font-bold text-teal">Charlotte Neighborhoods</h3>
            <ul className="flex flex-wrap gap-2 mt-3" aria-label="Charlotte neighborhoods served">
              {CHARLOTTE_NEIGHBORHOODS.map((neighborhood) => (
                <li key={neighborhood}>
                  <span className="chip chip-static !border-[#CFE0DD] bg-soft text-charcoal-70 text-xs font-medium">
                    {neighborhood}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <CoverageMap />
        </div>
      </section>

      {/* Accessible Tabular Coverage List */}
      <section
        className="section bg-white border-y border-[#DCE7E5]"
        aria-labelledby="text-list-h"
      >
        <div className="wrap grid lg:grid-cols-[.85fr_1.15fr] gap-10 lg:gap-14">
          <div>
            <h2 id="text-list-h" className="h2">
              Coverage by County
            </h2>
            <p className="lede mt-4">
              A comprehensive breakdown of our primary service territory across the Charlotte metropolitan region.
            </p>
            <p className="text-sm text-charcoal-70 mt-4 leading-relaxed">
              If your home is located just outside these counties, call our dispatch office at <strong>{SITE.phone.display}</strong> to verify technician availability for your specific repair.
            </p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-[#D6E5E2]">
            <table className="w-full text-left text-[0.96rem]">
              <caption className="sr-only">Pathmaker Plumbing coverage by county</caption>
              <thead className="bg-aqua-50 text-teal">
                <tr>
                  <th scope="col" className="px-5 py-3.5 font-semibold">
                    County
                  </th>
                  <th scope="col" className="px-5 py-3.5 font-semibold">
                    Key Communities
                  </th>
                  <th scope="col" className="px-5 py-3.5 font-semibold">
                    Service Scope
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E1ECEA] bg-white">
                {coverageData.map((row, i) => (
                  <tr key={i}>
                    <th scope="row" className="px-5 py-4 font-semibold text-teal whitespace-nowrap align-top">
                      {row.county}
                    </th>
                    <td className="px-5 py-4 text-charcoal-80 align-top">
                      {row.areas}
                    </td>
                    <td className="px-5 py-4 text-charcoal-70 text-sm align-top">
                      {row.notes}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Available Services in Coverage Area */}
      <section className="section" aria-labelledby="avail-h">
        <div className="wrap">
          <SectionHeading
            id="avail-h"
            title="Services Available Across Our Territory"
            intro="All core diagnostics, repairs, and installations are available throughout our Charlotte coverage area."
          />
          <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="card-link flex items-center gap-3 bg-white rounded-2xl border border-[#D6E5E2] p-5 min-h-[72px] hover:border-teal transition-colors"
                >
                  <IconBadge name={s.icon} tone="aqua" />
                  <span className="font-semibold text-teal">{s.name}</span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-10 grid md:grid-cols-2 gap-5">
            <Notice
              tone="info"
              title="Operating Hours &amp; Scheduling"
              body={`${SITE.hoursNote} Call ${SITE.phone.display} for scheduling windows and same-day availability.`}
            />
            <Notice
              tone="info"
              title="After-Hours &amp; Urgent Calls"
              body={SITE.emergencyPolicy}
            />
          </div>
        </div>
      </section>

      {/* Coverage Questions */}
      <section className="section pt-0 md:pt-0 lg:pt-0" aria-labelledby="cfaq-h">
        <div className="wrap grid lg:grid-cols-[.8fr_1.2fr] gap-10 lg:gap-16">
          <div>
            <h2 id="cfaq-h" className="h2">
              Coverage &amp; Service FAQ
            </h2>
            <p className="text-charcoal-70 mt-3 text-[0.98rem]">
              Common questions about our Charlotte service area, trip assessments, and technician scheduling.
            </p>
          </div>
          <Accordion items={FAQ.areas} />
        </div>
      </section>

      {/* ZIP Code Checker Interactive Module */}
      <section
        className="section bg-teal on-dark"
        aria-labelledby="zip-h"
        id="zip-check"
      >
        <div className="wrap grid lg:grid-cols-[.9fr_1.1fr] gap-10 lg:gap-14 items-start">
          <div className="text-white">
            <h2
              id="zip-h"
              className="h2 !text-white"
              tabIndex={-1}
              data-scroll-target="zip-check"
            >
              Verify Your ZIP Code
            </h2>
            <p className="mt-4 text-white/80 text-[1.06rem] measure">
              Enter your 5-digit postal code below to instantly confirm service coverage for your home or property in the Greater Charlotte area.
            </p>
            <div className="mt-6">
              <CallButton variant="ghost-light" label={`Call ${SITE.phone.display}`} />
            </div>
          </div>
          <div className="bg-white rounded-[22px] p-6 md:p-8 shadow-lift text-charcoal on-light">
            <ZipChecker />
          </div>
        </div>
      </section>
    </div>
  );
}
