/**
 * All business details in this file are fictional placeholders for demonstration
 * purposes and must be verified with a real business owner before reuse.
 */

export const IMG = {
  // Illustrative stock imagery. Each image has an SVG fallback if it fails to load.
  hero: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=1200&q=75',
  drain: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=70',
  leak: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=1000&q=70',
  heater: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1000&q=70',
  sewer: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1000&q=70',
  kitchen: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1000&q=70',
  bath: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1000&q=70'
};

export const SERVICES = [
  {
    slug: 'drain-cleaning',
    name: 'Drain Cleaning',
    navLabel: 'Drain Cleaning',
    icon: 'drain',
    image: IMG.drain,
    imageAlt: 'A bathroom sink and drain, used to illustrate drain cleaning work.',
    problem: 'Water draining slowly, or not at all?',
    summary: 'Help for slow, blocked, and recurring clogs in sinks, tubs, showers, and floor drains.',
    directory: {
      problems: ['Sink or tub draining slowly', 'Standing water after a shower', 'The same clog coming back'],
      overview: 'A technician looks at how and where the drain is blocked, explains how it could be cleared, and asks before starting any work.'
    },
    cta: 'Request Drain Service',
    meta: {
      title: 'Drain Cleaning in Charlotte | Oakline Plumbing Co. (Concept)',
      desc: 'Concept page explaining drain cleaning help for Charlotte homeowners: common symptoms, how a visit works, and what affects cost.'
    },
    hero: {
      h1: 'Drain Cleaning Services in Charlotte, NC',
      intro: 'A slow drain is easy to live with until it isn’t. Tell us which drains are affected and how long it’s been happening, and we’ll explain what a visit would involve before anything is cleared.'
    },
    symptoms: {
      heading: 'Signs a drain needs attention',
      intro: 'These are common reasons homeowners reach out. They point to a problem worth checking, not to a specific cause.',
      items: [
        { icon: 'clock', t: 'Slow drainage', d: 'Water takes noticeably longer to leave the sink, tub, or shower than it used to.' },
        { icon: 'water', t: 'Standing water', d: 'Water pools around your feet in the shower or sits in the basin after use.' },
        { icon: 'repeat', t: 'Clogs that return', d: 'A drain clears for a few days or weeks, then slows down again.' },
        { icon: 'grid', t: 'More than one fixture', d: 'Several drains are slow at once, which can mean the blockage is further down the line.' }
      ]
    },
    scope: {
      heading: 'What drain help may involve',
      intro: 'The right method depends on where the blockage is and what’s causing it. These are examples of what a visit can include, not a fixed package.',
      items: [
        { t: 'Looking at the affected drains', d: 'Checking which fixtures are slow and whether the problem is local to one drain or shared.' },
        { t: 'Mechanical clearing', d: 'Using hand or machine augers suited to the drain size to clear the blockage.' },
        { t: 'Camera inspection', d: 'Shown here as an example. A live site would list this only if the company offers it.' },
        { t: 'Hydro-jetting', d: 'High-pressure water cleaning, listed only if offered and suitable for the pipe condition.' }
      ],
      note: 'Camera inspection and hydro-jetting are placeholders in this concept. Real capabilities must be confirmed before they’re listed.'
    },
    costs: {
      intro: 'No two drain calls are the same. These are the things that usually change the cost of the work. Real pricing would come from the business, not this page.',
      items: [
        { t: 'Access', d: 'How easy it is to reach the drain or cleanout.' },
        { t: 'Severity', d: 'A simple hair clog versus a buildup further down the line.' },
        { t: 'Number of drains', d: 'One sink versus several fixtures that need attention.' },
        { t: 'Equipment needed', d: 'Whether hand tools are enough or larger equipment is required.' },
        { t: 'Timing', d: 'After-hours charges, only if the business actually applies them.' }
      ]
    },
    proof: {
      label: 'Drain cleaning project story',
      review: 'A genuine review that mentions drain service appears here, with source and permission.'
    },
    faqs: [
      { q: 'Does drain clearing include a camera inspection?', a: 'Not automatically. A camera inspection is a separate step that’s useful when clogs keep returning or several drains are affected. A live site would confirm whether it’s offered and how it’s priced.' },
      { q: 'Why do clogs keep coming back?', a: 'Recurring clogs often mean the blockage wasn’t fully cleared or there’s buildup further along the pipe. The cause can only be confirmed by looking at the drain, which is why we’d ask how often it’s happened.' },
      { q: 'What if several drains are slow at the same time?', a: 'That can point to a problem in a shared line rather than one fixture. Mention every slow drain in your request so the technician can plan the visit properly. If drains are backing up, call instead.' },
      { q: 'How do I request drain service?', a: 'Use the request form with your ZIP code and a short description, or call if water is backing up right now. A request is not a booked appointment; someone would follow up to confirm availability.' }
    ],
    final: {
      h: 'Dealing with a slow or blocked drain?',
      t: 'Send a short request with the drains affected. If water is backing up right now, calling is faster.'
    }
  },
  {
    slug: 'leak-repair',
    name: 'Leak Detection & Repair',
    navLabel: 'Leak Repair',
    icon: 'leak',
    image: IMG.leak,
    imageAlt: 'A plumber working on pipe fittings, used to illustrate leak repair work.',
    problem: 'Seeing drips, stains, or damp spots?',
    summary: 'Finding where water is escaping, explaining the repair, and being clear about what’s included.',
    directory: {
      problems: ['Dripping under a sink', 'Water stain on a ceiling or wall', 'Water bill higher than usual'],
      overview: 'We separate finding the leak from fixing it, so you know what each step involves and what may be outside the plumbing scope.'
    },
    cta: 'Request Leak Assessment',
    meta: {
      title: 'Leak Detection & Repair | Oakline Plumbing Co. (Concept)',
      desc: 'Concept page on leak detection and repair in Charlotte: possible signs, how leaks are assessed, and how repair and restoration scopes differ.'
    },
    hero: {
      h1: 'Leak Detection & Plumbing Repair in Charlotte',
      intro: 'Some leaks are easy to see. Others show up as a stain, a damp patch, or a bill that doesn’t make sense. We explain how a leak would be located and what repairing it could involve, step by step.'
    },
    symptoms: {
      heading: 'Possible signs of a leak',
      intro: 'Any of these can have more than one cause. We won’t diagnose a leak from a description alone, but they’re worth mentioning in your request.',
      items: [
        { icon: 'drop', t: 'Visible dripping', d: 'Water dripping from a pipe, joint, valve, or fixture connection.' },
        { icon: 'stain', t: 'Water stains', d: 'Brown or yellow marks on ceilings or walls, especially below bathrooms.' },
        { icon: 'water', t: 'Damp spots', d: 'Soft flooring, warped cabinets, or patches that stay damp.' },
        { icon: 'meter', t: 'Unexpected water use', d: 'A water bill that jumps without a change in how you use water.' }
      ]
    },
    leakTypes: [
      { t: 'Accessible leaks', d: 'Leaks at fixtures, under sinks, at shut-off valves, or along exposed pipes. These are usually easier to locate and repair.' },
      { t: 'Hidden leaks', d: 'Leaks inside walls, ceilings, or under floors. Finding these may need specialized detection methods, listed only if the business offers them.' }
    ],
    scope: {
      heading: 'How a leak is assessed',
      intro: 'Assessment comes before any repair is proposed. In a live site, each step below would reflect the company’s actual process.',
      items: [
        { t: 'Observation', d: 'Looking at visible signs, where water appears, and when it happens.' },
        { t: 'Detection methods', d: 'Moisture readings or other tools, described only if genuinely offered.' },
        { t: 'Access discussion', d: 'If a pipe is behind a surface, talking through whether an opening is needed before anything is cut.' },
        { t: 'Repair options', d: 'Explaining what could be done, with your approval required before work starts.' }
      ]
    },
    repairScopes: [
      { t: 'Finding the leak', d: 'Locating where water is escaping. This can be a separate visit or charge.' },
      { t: 'Repairing the plumbing', d: 'Fixing or replacing the affected pipe, joint, or fixture.' },
      { t: 'Opening & restoration', d: 'Cutting into drywall or flooring, and repairing it afterward, may be handled by others.' }
    ],
    costs: {
      intro: 'Leak work varies a lot. These factors usually shape the estimate.',
      items: [
        { t: 'Accessibility', d: 'Exposed pipe versus a leak behind a finished wall or floor.' },
        { t: 'Materials', d: 'The pipe type and parts needed for the repair.' },
        { t: 'Complexity', d: 'A single joint versus a longer section of damaged pipe.' },
        { t: 'Scope boundaries', d: 'Whether restoration of walls or floors is part of the job or separate.' }
      ]
    },
    safetyNote: 'If water is actively leaking, call rather than send a form. Any instructions about shutting off water or electricity would be written and reviewed by a qualified professional before a live site publishes them.',
    proof: {
      label: 'Leak repair project story',
      review: 'A genuine review that mentions leak repair appears here, with source and permission.'
    },
    faqs: [
      { q: 'Will you need to open a wall?', a: 'Not always. If a leak is behind a finished surface, the technician would explain why access is needed and agree on it with you before cutting anything.' },
      { q: 'Is leak detection separate from repair?', a: 'Often, yes. Finding a leak and repairing it are different steps and may be priced separately. A live site would explain the company’s actual policy here.' },
      { q: 'What if water damage is happening right now?', a: 'Call instead of using the form. A form is meant for planned requests and isn’t monitored like a phone line.' },
      { q: 'What happens after I request help?', a: 'Someone reviews your details, confirms your area is covered, and follows up about availability. Sending a request doesn’t book an appointment.' }
    ],
    final: {
      h: 'Think you might have a leak?',
      t: 'Tell us where you’re seeing water or stains. For active leaks, call so someone can talk you through next steps.'
    }
  },
  {
    slug: 'water-heaters',
    name: 'Water Heater Services',
    navLabel: 'Water Heaters',
    icon: 'heater',
    image: IMG.heater,
    imageAlt: 'Plumbing tools and fittings, used to illustrate water heater service.',
    problem: 'No hot water, or a unit that’s getting old?',
    summary: 'Repair or replacement guidance, with a clear explanation of what an estimate includes.',
    directory: {
      problems: ['No hot water at all', 'Temperature keeps changing', 'Water around the base of the tank'],
      overview: 'We help you weigh repair against replacement based on what’s found in person, not guesswork, and explain what an installation would include.'
    },
    cta: 'Request Water Heater Service',
    meta: {
      title: 'Water Heater Repair & Replacement | Oakline (Concept)',
      desc: 'Concept page on water heater repair and replacement in Charlotte: common problems, repair vs. replacement factors, and what an estimate covers.'
    },
    hero: {
      h1: 'Water Heater Repair & Replacement in Charlotte',
      intro: 'Whether you’ve lost hot water this morning or you’re planning ahead for an older unit, we explain your options clearly so you can decide what makes sense for your home.'
    },
    symptoms: {
      heading: 'Common water heater problems',
      intro: 'These are the issues homeowners usually describe. The actual cause is confirmed during an in-person assessment.',
      items: [
        { icon: 'flame', t: 'No hot water', d: 'The tap runs cold, or hot water runs out much faster than it used to.' },
        { icon: 'thermo', t: 'Inconsistent temperature', d: 'Water swings between hot and lukewarm during a single shower.' },
        { icon: 'drop', t: 'Leaks', d: 'Water around the base of the tank or at the connections.' },
        { icon: 'sound', t: 'Noises', d: 'Popping, rumbling, or knocking sounds from the unit.' },
        { icon: 'calendar', t: 'Aging equipment', d: 'The unit is older and you want to plan before it fails.' }
      ]
    },
    compare: {
      heading: 'Repair or replace? What to talk through',
      intro: 'These are the factors a technician would discuss with you after seeing the unit. They aren’t an online diagnosis.',
      a: {
        t: 'When repair may make sense',
        icon: 'wrench',
        items: [
          'The unit is relatively new and in good overall condition',
          'The problem is a single part, such as a thermostat or element',
          'There are no signs of tank corrosion or leaking from the tank itself',
          'Repair cost is small compared with replacement'
        ]
      },
      b: {
        t: 'When replacement may make sense',
        icon: 'replace',
        items: [
          'The unit is near or past its expected lifespan',
          'The tank itself is leaking or visibly corroded',
          'Repairs are becoming frequent or costly',
          'Your household’s hot water needs have changed'
        ]
      }
    },
    equipment: [
      { t: 'Tank water heaters', d: 'Storage tank units, listed only if the company services them.' },
      { t: 'Tankless water heaters', d: 'On-demand units, listed only if genuinely serviced.' },
      { t: 'Gas and electric', d: 'Fuel types confirmed with the owner before publishing.' },
      { t: 'Brands serviced', d: 'Brand names appear only when verified. None are claimed here.' }
    ],
    scope: {
      heading: 'How the assessment and estimate work',
      intro: 'You’ll know what’s being checked and how options are explained before you agree to anything.',
      items: [
        { t: 'What you share', d: 'The unit’s age if known, fuel type, location in the home, and what you’ve noticed.' },
        { t: 'What’s inspected', d: 'The unit, connections, venting where relevant, and signs of leaks or wear.' },
        { t: 'How options are explained', d: 'Repair and replacement options are laid out with what each would involve.' },
        { t: 'How costs are shown', d: 'A written estimate that lists what’s included, before you approve any work.' }
      ]
    },
    install: [
      { t: 'Removal & disposal', d: 'Whether taking away the old unit is included.' },
      { t: 'Access', d: 'Attics, closets, or tight spaces can affect the work involved.' },
      { t: 'Permits & inspection', d: 'Who arranges required permits and inspections.' },
      { t: 'Code upgrades', d: 'Any changes needed to meet current requirements.' },
      { t: 'Scheduling', d: 'How installation timing is agreed after approval.' }
    ],
    installNote: 'What’s included always depends on the written proposal for your home.',
    warranty: [
      { t: 'Manufacturer warranty', d: 'Covers the equipment itself, under the manufacturer’s own terms.' },
      { t: 'Labor warranty', d: 'Covers the installation work, only if the company actually provides one.' },
      { t: 'Financing', d: 'Shown only if a real, documented financing option exists. None is offered here.' }
    ],
    costs: {
      intro: 'Water heater costs depend on several things. A real estimate would be based on your home and unit.',
      items: [
        { t: 'Repair vs. replacement', d: 'Replacing a part usually costs less than a new unit.' },
        { t: 'Unit type and size', d: 'Tank capacity, tankless, and fuel type all affect price.' },
        { t: 'Installation conditions', d: 'Location, venting, and code-related changes.' },
        { t: 'Permits', d: 'Local permit and inspection requirements.' }
      ]
    },
    proof: {
      label: 'Water heater installation story',
      review: 'A genuine review that mentions water heater work appears here, with source and permission.'
    },
    faqs: [
      { q: 'Can my water heater be repaired?', a: 'It depends on the unit’s age, condition, and what’s wrong. A technician would need to see it in person before recommending repair or replacement.' },
      { q: 'What types of water heaters do you service?', a: 'In a live site, this answer would list the exact types and fuel sources the company works on. This concept doesn’t claim any.' },
      { q: 'What’s included in an estimate?', a: 'A written estimate should show the recommended work, parts, labor, and anything excluded. Details depend on the company’s real estimate policy.' },
      { q: 'Who handles removal of the old unit?', a: 'This would be stated in your proposal. Removal and disposal may or may not be included.' },
      { q: 'What warranty applies?', a: 'The manufacturer warranty covers the equipment. Any labor warranty depends on what the company actually offers, which a live site would state plainly.' }
    ],
    final: {
      h: 'Need help with your water heater?',
      t: 'Send a request with the unit’s age if you know it. If you have no hot water and need it soon, call to check availability.'
    }
  },
  {
    slug: 'sewer-lines',
    name: 'Sewer Line Services',
    navLabel: 'Sewer Lines',
    icon: 'sewer',
    image: IMG.sewer,
    imageAlt: 'A residential home and front yard, used to illustrate sewer line service.',
    problem: 'Backups that keep coming back?',
    summary: 'Careful assessment of sewer line problems, with honest explanations of repair options and yard impact.',
    directory: {
      problems: ['Several drains backing up', 'Gurgling from toilets or drains', 'Sewage smell indoors or outside'],
      overview: 'Sewer issues can feel serious. We explain how they’re assessed and what the possible next steps are, without promising a result before the line is inspected.'
    },
    cta: 'Request Sewer Assessment',
    meta: {
      title: 'Sewer Line Inspection & Repair | Oakline (Concept)',
      desc: 'Concept page on sewer line assessment in Charlotte: warning signs, inspection options, possible next steps, and trenchless vs. excavation.'
    },
    hero: {
      h1: 'Sewer Line Inspection & Repair in Charlotte',
      intro: 'Sewer problems are stressful, and they’re hard to judge from inside the house. We explain how a line is assessed, what the options might be, and what could affect your yard, before anything is decided.'
    },
    symptoms: {
      heading: 'Warning signs worth checking',
      intro: 'These signs suggest the main line may need attention. None of them proves a specific failure on its own.',
      items: [
        { icon: 'repeat', t: 'Recurring backups', d: 'Drains back up more than once, especially at the lowest fixtures in the home.' },
        { icon: 'grid', t: 'Several slow drains', d: 'Multiple fixtures slow down at the same time.' },
        { icon: 'sound', t: 'Unusual sounds', d: 'Gurgling from toilets or drains when other fixtures are used.' },
        { icon: 'yard', t: 'Changes outside', d: 'Unusually wet or lush patches in the yard, or odors near the cleanout.' }
      ]
    },
    scope: {
      heading: 'How sewer problems are assessed',
      intro: 'Assessment options are listed here only as examples. A live site would show the methods the company genuinely uses.',
      items: [
        { t: 'Conversation first', d: 'Understanding which drains are affected, how often, and any history with the line.' },
        { t: 'Camera inspection', d: 'Viewing the inside of the line, only if this service is actually offered.' },
        { t: 'Locating the problem', d: 'Identifying where along the line an issue appears, where tools allow.' },
        { t: 'Reviewing findings', d: 'Walking you through what was seen and what it could mean.' }
      ]
    },
    nextSteps: [
      { t: 'Clearing the line', d: 'Removing a blockage when the line itself is in workable condition.' },
      { t: 'Targeted repair', d: 'Fixing a specific damaged section, depending on location and access.' },
      { t: 'Replacement', d: 'Replacing a longer section when repair isn’t practical. Depends on findings and services offered.' }
    ],
    compare: {
      heading: 'Trenchless vs. excavation',
      intro: 'Whether trenchless methods are possible depends on the line’s condition, layout, and what the company offers. Neither option is promised here.',
      a: {
        t: 'Trenchless methods',
        icon: 'trenchless',
        items: [
          'May reduce digging when the line is suitable',
          'Eligibility depends on pipe condition and layout',
          'Some access points are still usually needed',
          'Offered only if the business performs this work'
        ]
      },
      b: {
        t: 'Traditional excavation',
        icon: 'shovel',
        items: [
          'Digging to reach and repair or replace the line',
          'Can be necessary when trenchless isn’t suitable',
          'Affects landscaping, driveways, or walkways',
          'Restoration responsibilities agreed in advance'
        ]
      }
    },
    costs: {
      intro: 'Sewer work has more variables than most plumbing jobs. These shape the estimate.',
      items: [
        { t: 'Access', d: 'Where the cleanout is and how easy the line is to reach.' },
        { t: 'Excavation', d: 'Whether digging is needed, and how much.' },
        { t: 'Restoration', d: 'Who restores landscaping, concrete, or walkways afterward.' },
        { t: 'Permits', d: 'Local permit and inspection requirements.' },
        { t: 'Scope', d: 'Clearing, a short repair, or a longer replacement.' }
      ]
    },
    proof: {
      label: 'Sewer line project story',
      review: 'A genuine review that mentions sewer work appears here, with source and permission.'
    },
    faqs: [
      { q: 'How is a sewer problem diagnosed?', a: 'By looking at the line itself, often with a camera if the company offers it. Symptoms alone can’t confirm what’s wrong.' },
      { q: 'Can my yard be preserved?', a: 'Sometimes, if trenchless repair is suitable and offered. It isn’t possible in every case, and any yard impact would be explained before work is approved.' },
      { q: 'Is a camera inspection included?', a: 'That depends on the company’s actual services and pricing. A live site would state this clearly.' },
      { q: 'What happens after the assessment?', a: 'You’d get an explanation of what was found and the possible options, then decide whether to approve any work.' }
    ],
    final: {
      h: 'Worried about your sewer line?',
      t: 'Request an assessment and describe what you’ve noticed. If sewage is backing up into the home, call right away.'
    }
  }
];

export const SVC = Object.fromEntries(SERVICES.map(s => [s.slug, s]));

export const SERVICE_OPTIONS = [
  ...SERVICES.map(s => ({ value: s.slug, label: s.name })),
  { value: 'other', label: 'Other / Not sure' }
];
