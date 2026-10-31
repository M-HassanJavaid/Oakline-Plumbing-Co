/**
 * Service Areas page for Oakline Plumbing Co.
 * Server Component presenting Charlotte demonstration focus, illustrative surrounding towns,
 * accessible tabular coverage list, services available, coverage FAQ, and interactive ZipChecker.
 */

import React from 'react';
import Link from 'next/link';
import { PageHero } from '@/components/sections/PageHero';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ScrollToButton } from '@/components/ui/ScrollToButton';
import { CallButton } from '@/components/ui/CallButton';
import { CoverageMap } from '@/components/sections/CoverageMap';
import { Icon } from '@/components/ui/Icon';
import { IconBadge } from '@/components/ui/IconBadge';
import { Notice } from '@/components/ui/Notice';
import { Accordion } from '@/components/ui/Accordion';
import { ZipChecker } from '@/components/sections/ZipChecker';
import { SERVICES } from '@/data/services';
import { FAQ } from '@/data/faq';
import { SITE, ILLUSTRATIVE_TOWNS } from '@/data/site';

export const metadata = {
  title: 'Charlotte Service Area | Oakline Plumbing Co. (Concept)',
  description:
    'Concept service area page centered on Charlotte, NC, with a demo ZIP check and accessible coverage list.',
};

export default function ServiceAreasPage() {
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
              Plumbing Services in Charlotte & Nearby Communities
            </h1>
            <p className="lede mt-5 measure">
              Check whether your address is likely to be covered before you send a request. Coverage is always confirmed by staff, because it can depend on the service and the schedule.
            </p>
            <div className="mt-8">
              <ScrollToButton
                targetId="zip-check"
                label="Confirm Coverage"
                variant="primary"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Focus & Map */}
      <section className="section" aria-labelledby="primary-h">
        <div className="wrap grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div>
            <h2 id="primary-h" className="h2">
              Charlotte is the focus
            </h2>
            <p className="lede mt-4">
              This concept is designed around Charlotte, North Carolina. It doesn’t claim an office address, a dispatch radius, or a list of verified towns.
            </p>
            <h3 className="h3 mt-10">Nearby communities</h3>
            <p className="text-charcoal-70 mt-2">
              A real company would list the towns it actually serves. The names below show how that list would look.
            </p>
            <ul className="flex flex-wrap gap-2 mt-5" aria-label="Illustrative community names">
              <li>
                <span className="chip chip-static !border-teal !bg-teal !text-white">
                  <Icon name="pin" className="w-4 h-4" />
                  Charlotte
                </span>
              </li>
              {ILLUSTRATIVE_TOWNS.map((t) => (
                <li key={t}>
                  <span className="chip chip-static !border-dashed">{t}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-charcoal-70 mt-3 flex gap-2">
              <Icon name="info" className="w-4 h-4 mt-0.5 text-teal flex-none" />
              <span>
                Dashed names are illustrative only and aren’t presented as verified coverage.
              </span>
            </p>
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
              Coverage list
            </h2>
            <p className="lede mt-4">
              A text version of the map, so coverage is clear for everyone, including screen reader users.
            </p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-[#D6E5E2]">
            <table className="w-full text-left text-[0.96rem]">
              <caption className="sr-only">Coverage list for this concept</caption>
              <thead className="bg-aqua-50 text-teal">
                <tr>
                  <th scope="col" className="px-5 py-3.5 font-semibold">
                    Area
                  </th>
                  <th scope="col" className="px-5 py-3.5 font-semibold">
                    Status in this concept
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E1ECEA] bg-white">
                <tr>
                  <th scope="row" className="px-5 py-4 font-semibold text-teal">
                    Charlotte
                  </th>
                  <td className="px-5 py-4">Demonstration focus</td>
                </tr>
                <tr>
                  <th scope="row" className="px-5 py-4 font-semibold text-teal">
                    Nearby towns
                  </th>
                  <td className="px-5 py-4">Illustrative only, pending real coverage</td>
                </tr>
                <tr>
                  <th scope="row" className="px-5 py-4 font-semibold text-teal">
                    Coverage by service
                  </th>
                  <td className="px-5 py-4">Would be stated if it differs by service</td>
                </tr>
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
            title="Services available in the area"
            intro="All four core services are part of this concept. A live site would note any that are limited to certain areas."
          />
          <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="card-link flex items-center gap-3 bg-white rounded-2xl border border-[#D6E5E2] p-5 min-h-[72px]"
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
              title="Hours and dispatch limits"
              body={`${SITE.hoursNote} A live site would also state any after-hours limits.`}
            />
            <Notice
              tone="info"
              title="Coverage can vary by service"
              body="Larger jobs, such as sewer work or water heater replacement, may have different coverage than smaller repairs."
            />
          </div>
        </div>
      </section>

      {/* Coverage Questions */}
      <section className="section pt-0 md:pt-0 lg:pt-0" aria-labelledby="cfaq-h">
        <div className="wrap grid lg:grid-cols-[.8fr_1.2fr] gap-10 lg:gap-16">
          <div>
            <h2 id="cfaq-h" className="h2">
              Coverage questions
            </h2>
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
              Confirm your coverage
            </h2>
            <p className="mt-4 text-white/80 text-[1.06rem] measure">
              Enter your ZIP code for a quick check, then send a request or call so staff can confirm your address.
            </p>
            <div className="mt-6">
              <CallButton variant="ghost-light" label="Call to confirm" />
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
