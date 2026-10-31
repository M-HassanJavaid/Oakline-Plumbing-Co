/**
 * All business details in this file are fictional placeholders for demonstration
 * purposes and must be verified with a real business owner before reuse.
 */

export const FAQ = {
  home: [
    {
      q: 'How do I request plumbing service?',
      a: 'Fill in the short form with your name, phone, ZIP code, and the service you need, or call if it’s urgent.',
      link: { label: 'Go to the contact page', to: '/contact' }
    },
    {
      q: 'Is submitting a form the same as booking an appointment?',
      a: 'No. A form tells the team what you need. Someone would review it, confirm your area and availability, then follow up to arrange next steps.'
    },
    {
      q: 'How can I check whether my address is covered?',
      a: 'Enter your ZIP code in the request form or check the service area page. Coverage is always confirmed by staff before a visit.',
      link: { label: 'Check service area', to: '/service-areas' }
    },
    {
      q: 'What information should I provide about my plumbing issue?',
      a: 'Where the problem is, what you’ve noticed, how long it’s been happening, and whether it’s getting worse. A sentence or two is plenty.'
    }
  ],
  services: [
    {
      q: 'What if I don’t know what the issue is?',
      a: 'That’s common. Choose “Other / Not sure” in the form and describe what you’re seeing. The team can help figure out which service fits.'
    },
    {
      q: 'Can I request an estimate?',
      a: 'Yes, you can ask for one in your request. Most estimates need an in-person look first, and a live site would explain the company’s actual estimate policy.'
    },
    {
      q: 'What information is needed?',
      a: 'Your name, phone number, ZIP code, and the service you think you need. A short description helps but is optional.'
    },
    {
      q: 'How is availability confirmed?',
      a: 'A team member contacts you after reviewing your request. Availability is never confirmed by the form itself.'
    }
  ],
  areas: [
    {
      q: 'Do you cover my ZIP code?',
      a: 'In this concept, Charlotte is the demonstration focus. A live site would list verified coverage, and staff would always confirm your address.'
    },
    {
      q: 'What if my town isn’t listed?',
      a: 'Call or send a request anyway with your ZIP code. The team can tell you whether they can help or not.'
    },
    {
      q: 'Does availability depend on the type of service?',
      a: 'It can. Larger jobs like sewer or water heater replacement may have different coverage or scheduling than smaller repairs.'
    }
  ],
  contact: [
    {
      q: 'Is this a confirmed booking?',
      a: 'No. Sending a request lets the team know what you need. An appointment is only confirmed when someone contacts you and agrees on a time.'
    },
    {
      q: 'What if my issue is urgent?',
      a: 'Call instead of using the form, especially for active leaks, backups, or no water. The form isn’t monitored like a phone line.'
    },
    {
      q: 'How quickly will someone respond?',
      a: 'A live site would state the company’s real response policy here. This concept doesn’t promise a response time.'
    },
    {
      q: 'Can I send a photo?',
      a: 'Photo uploads are turned off in this demo. A live site would enable them only once secure handling and retention are defined.'
    }
  ]
};
