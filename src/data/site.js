/**
 * Real business data for Pathmaker Plumbing (Charlotte, NC).
 * Sourced from Pathmaker Plumbing official business profile and verified records.
 */

export const SITE = {
  name: 'Pathmaker Plumbing',
  shortName: 'Pathmaker Plumbing',
  tagline: 'Plumbing Advice You Can Trust. Repairs You Actually Need.',
  market: 'Charlotte, North Carolina',
  phone: {
    display: '(704) 733-7507',
    tel: '+17047337507',
    clean: '7047337507'
  },
  phoneDisplay: '(704) 733-7507',
  phoneTel: '+17047337507',
  phoneNote: 'Calling gets the fastest response. Hours: Mon–Fri 8 AM–7 PM.',
  address: '5676 Underwood Ave, Charlotte, NC 28213',
  addressDisplay: '5676 Underwood Ave, Charlotte, NC 28213',
  addressParts: {
    street: '5676 Underwood Ave',
    city: 'Charlotte',
    state: 'NC',
    zip: '28213'
  },
  street: '5676 Underwood Ave',
  city: 'Charlotte',
  state: 'NC',
  zip: '28213',
  addressNeighborhood: 'Northeast Charlotte',
  coordinates: { lat: 35.3070, lng: -80.6747 },
  hours: 'Monday–Friday 8 AM–7 PM. Saturday & Sunday closed.',
  hoursNote: 'Monday–Friday 8 AM–7 PM. Saturday & Sunday closed.',
  emergencyNote:
    'No traditional 24-hour emergency service. After-hours requests are evaluated case by case — call to check availability.',
  license: 'NC Plumbing License #31626 — P-1 Plumbing Unlimited',
  licenseShort: 'NC License #31626 (P-1)',
  licenseVerifyUrl: 'https://www.nclicensing.org/',
  founder: 'John Stokes',
  foundedYear: '2013',
  experienceYears: '25+',
  rating: '4.9',
  reviewCount: '155',
  ratingSource: 'Google Business Profile',
  ratingDisplay: '4.9 ★ on Google · 155 reviews',
  brandCredentials: 'Authorized Rinnai dealer & installer',
  email: '', // Not published; contact form only
  website: 'https://pathmakerplumbing.com',
  disclosure: 'Redesign concept for Pathmaker Plumbing by PlumbNexo',
  footerBlurb:
    'Locally owned, family-operated residential plumber serving Charlotte homeowners since 2013, built on honest recommendations and 25+ years of experience.',
  socialLinks: [
    { label: 'Facebook', url: 'https://www.facebook.com/PathmakerPlumbing' },
    { label: 'YouTube', url: 'https://www.youtube.com' }
  ]
};

export const NAV = [
  { label: 'Services', path: '/services', dropdown: true },
  { label: 'Service Areas', path: '/service-areas' },
  { label: 'About', path: '/about' },
  { label: 'Reviews & Projects', path: '/reviews-projects' },
  { label: 'Contact', path: '/contact' }
];

export const NEARBY_TOWNS = [
  'Charlotte',
  'Concord',
  'Harrisburg',
  'Huntersville',
  'Cornelius',
  'Davidson',
  'Matthews',
  'Mint Hill',
  'Pineville',
  'Indian Trail',
  'Weddington',
  'Waxhaw',
  'Ballantyne'
];

export const CHARLOTTE_NEIGHBORHOODS = [
  'Chantilly',
  'Cotswold',
  'Dilworth',
  'Elizabeth',
  'Highland Creek',
  'Myers Park',
  'NoDa',
  'Plaza Midwood',
  'SouthPark',
  'Uptown',
  'University Area',
  'Steele Creek'
];

// Backwards-compatible export for towns
export const ILLUSTRATIVE_TOWNS = NEARBY_TOWNS.slice(1, 8);
