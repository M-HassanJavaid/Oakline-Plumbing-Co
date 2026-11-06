/**
 * Route metadata for Pathmaker Plumbing.
 */

import { SERVICES } from './services';

export const ROUTES = [
  {
    path: '/',
    title: 'Pathmaker Plumbing | Charlotte, NC Residential Plumber',
    desc: 'Plumbing advice you can trust, repairs you actually need. Serving Charlotte homeowners since 2013 with 25+ years experience.'
  },
  {
    path: '/services',
    title: 'Plumbing Services | Pathmaker Plumbing Charlotte, NC',
    desc: 'Professional drain cleaning, leak detection, water heaters, sewer line repair, and second opinions in Charlotte, NC.'
  },
  ...SERVICES.map((s) => ({
    path: `/services/${s.slug}`,
    slug: s.slug,
    title: s.meta.title,
    desc: s.meta.desc
  })),
  {
    path: '/about',
    title: 'About John Stokes & Pathmaker Plumbing | Charlotte, NC',
    desc: 'Meet founder John Stokes and the Pathmaker Plumbing team. 25+ years experience delivering honest residential plumbing in Charlotte.'
  },
  {
    path: '/reviews-projects',
    title: 'Reviews & Real Project Stories | Pathmaker Plumbing',
    desc: '4.9-star Google reviews and verified project case studies from Charlotte homeowners: slab leaks, sewer saves, and water heater installs.'
  },
  {
    path: '/service-areas',
    title: 'Service Areas | Pathmaker Plumbing Charlotte, NC',
    desc: 'Serving Charlotte, Concord, Huntersville, Matthews, Mint Hill, Pineville, Cornelius, Waxhaw, and surrounding communities.'
  },
  {
    path: '/contact',
    title: 'Contact Pathmaker Plumbing | Schedule Service in Charlotte, NC',
    desc: 'Request residential plumbing service or call (704) 733-7507 for prompt assistance in the Charlotte area.'
  },
  {
    path: '/thank-you',
    title: 'Request Received | Pathmaker Plumbing',
    desc: 'Your plumbing service request has been received.'
  },
  {
    path: '/privacy',
    title: 'Privacy Policy | Pathmaker Plumbing',
    desc: 'How Pathmaker Plumbing protects and handles customer inquiry information.'
  },
  {
    path: '/terms',
    title: 'Website Terms | Pathmaker Plumbing',
    desc: 'Terms of use for the Pathmaker Plumbing website.'
  }
];
