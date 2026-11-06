/**
 * Pathmaker Plumbing services catalog.
 * Sourced from real service pages, diagnostic equipment, and customer reviews.
 */

export const IMG = {
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
    imageAlt: 'A clean residential bathroom sink and drain pipe.',
    problem: 'Water draining slowly, or not at all?',
    summary: 'Help for slow, blocked, and recurring clogs in sinks, tubs, showers, and floor drains.',
    directory: {
      problems: [
        'Slow sink, tub, or shower drains',
        'Several drains backing up at once',
        'The same clog returning repeatedly'
      ],
      overview: 'Our technicians locate the obstruction, clear buildup with professional augers and snaking, and inspect lines with cameras when recurring clogs persist.'
    },
    cta: 'Request Drain Service',
    meta: {
      title: 'Drain Cleaning in Charlotte, NC | Pathmaker Plumbing',
      desc: 'Expert drain cleaning for Charlotte homeowners: professional snaking, mechanical augering, camera inspections, and clear upfront estimates.'
    },
    hero: {
      h1: 'Drain Cleaning Services in Charlotte, NC',
      intro: 'A slow drain is easy to ignore until it completely stops up. Tell us which drains are affected, and our experienced technicians will diagnose and clear the line properly.'
    },
    symptoms: {
      heading: 'Signs a drain needs attention',
      intro: 'Common warning signs homeowners encounter in sinks, showers, tubs, and basement floor drains:',
      items: [
        { icon: 'clock', t: 'Slow sink, tub, or shower', d: 'Water takes noticeably longer to leave the basin or pools around your feet.' },
        { icon: 'grid', t: 'Multiple slow fixtures', d: 'Several drains slowing at once or backing into another fixture.' },
        { icon: 'sound', t: 'Gurgling and odors', d: 'Air bubbling up through pipes, sewer odors, or gurgling when appliances run.' },
        { icon: 'repeat', t: 'Recurring clogs & backups', d: 'The same drain clogging again after cleaning, standing water at floor drains, or repeat toilet backups.' }
      ]
    },
    scope: {
      heading: 'What’s included in drain service',
      intro: 'Pathmaker Plumbing uses professional methods tailored to the pipe material and blockage type:',
      items: [
        { t: 'Drain snaking & mechanical augering', d: 'Industrial-grade augers suited to the line size to clear grease, hair, roots, and physical obstructions.' },
        { t: 'Camera inspection when needed', d: 'High-resolution video pipe inspection to pinpoint pipe cracks, root intrusion, or slope issues.' },
        { t: 'Removal of grease, roots & debris', d: 'Complete clearing of grease deposits, tree root fibers, and buildup.' },
        { t: 'Sewer line clearing & cleaning', d: 'Clearing main lateral branch lines connecting the home to municipal or septic connections.' }
      ],
      note: 'Camera inspections are deployed for recurring blockages, multiple affected fixtures, or suspected pipe damage.'
    },
    cleanVsRepair: {
      clean: 'Cleaning is recommended when the pipe structure is sound and the blockage is caused by hair, soap scum, grease, or soft buildup.',
      repair: 'Repair is necessary when camera inspection discovers cracked, collapsed, offset, or corroded pipe sections that will continuously re-clog.'
    },
    costs: {
      intro: 'Drain clearing costs depend on where the blockage is located and the tools required to reach it.',
      items: [
        { t: 'Access point', d: 'Whether an accessible cleanout is available or fixtures need removal.' },
        { t: 'Blockage severity', d: 'Simple branch line clogs versus heavy root infiltration or hardened scale.' },
        { t: 'Fixtures affected', d: 'A single sink versus whole-house main lateral backup.' },
        { t: 'Diagnostic tools', d: 'Mechanical snake versus high-definition video camera locating.' }
      ]
    },
    proof: {
      label: 'Verified Google Review — Drain Cleaning',
      reviewer: 'Anne Blythe',
      date: 'Google Review',
      review: 'John and Caleb “quickly unclogged my drain,” then found a pipe issue and gave a fair quote for a repair.'
    },
    faqs: [
      { q: 'When is a camera inspection used for drain cleaning?', a: 'We recommend camera inspection when clogs keep returning in the same spot, several fixtures are slow at once, tree roots are suspected, or before discussing any pipe repairs.' },
      { q: 'What is the difference between drain cleaning and drain repair?', a: 'Drain cleaning clears buildup (hair, soap, grease) from a structurally sound pipe. Repair is required when the pipe is cracked, corroded, misaligned, or collapsed.' },
      { q: 'What if several drains are slow at the same time?', a: 'That usually points to a stoppage in a main branch line rather than a single sink or shower. Mention this in your request so our technicians bring the right equipment.' }
    ],
    final: {
      h: 'Dealing with a slow or blocked drain in Charlotte?',
      t: 'Submit an online request with details, or call (704) 733-7507 for immediate service.'
    }
  },
  {
    slug: 'leak-repair',
    name: 'Leak Detection & Repair',
    navLabel: 'Leak Repair',
    icon: 'leak',
    image: IMG.leak,
    imageAlt: 'Professional plumbing technician checking copper pipe fittings for water leaks.',
    problem: 'Seeing drips, water stains, or a rising water bill?',
    summary: 'Non-invasive acoustic and electronic leak detection, slab leak repair, and pipe replacement.',
    directory: {
      problems: [
        'Water bill rising with no clear explanation',
        'Stains on ceilings, damp drywall, or warped cabinets',
        'Water heard running or warm spots on floors'
      ],
      overview: 'We find the exact source of hidden water leaks using acoustic and electronic detection before opening any walls or floors.'
    },
    cta: 'Request Leak Assessment',
    meta: {
      title: 'Leak Detection & Repair in Charlotte, NC | Pathmaker Plumbing',
      desc: 'Accurate electronic and acoustic leak detection, slab leak repairs, and pipe fixes for Charlotte homeowners. Diagnose first, repair properly.'
    },
    hero: {
      h1: 'Leak Detection & Pipe Repair in Charlotte, NC',
      intro: 'Some leaks are obvious; others hide beneath concrete slabs or inside walls, driving up your water bill. We pinpoint the exact leak location first, then explain the best repair option.'
    },
    symptoms: {
      heading: 'Common signs of a hidden water leak',
      intro: 'Contact us if you notice any of these warning signs in your home or yard:',
      items: [
        { icon: 'meter', t: 'Unexplained water bill spike', d: 'Your monthly water bill jumps significantly without a change in household usage.' },
        { icon: 'stain', t: 'Stains, damp floors & soft drywall', d: 'Discoloration on ceilings below bathrooms, spongy baseboards, or damp spots under sinks.' },
        { icon: 'sound', t: 'Water running sounds', d: 'The sound of trickling or rushing water behind walls when all fixtures are turned off.' },
        { icon: 'water', t: 'Warm floor spots & wet yard patches', d: 'Warm areas on slab floors, damp soil near the water meter, or standing water in the yard.' }
      ]
    },
    leakTypes: [
      { t: 'Slab / under-floor leaks', d: 'Water lines running under concrete foundations that fail from ground shifting or friction.' },
      { t: 'Underground service lines', d: 'Main water service lines connecting from the municipal water meter to the home.' },
      { t: 'Copper pinhole leaks', d: 'Small pit leaks caused by water chemistry, pipe age, or interior corrosion.' },
      { t: 'Supply lines & valves', d: 'Fittings, shut-off valves, toilet supply lines, and fixture connections.' }
    ],
    detectionTools: [
      { t: 'Electronic leak detection', d: 'Amplified frequency equipment to track active pressurized pipe leaks.' },
      { t: 'Acoustic detection', d: 'Ground microphones designed to hear subterranean and sub-slab water flow.' },
      { t: 'Video pipe inspection', d: 'Micro-cameras navigating through drain and water lines.' },
      { t: 'Pressure testing & thermal imaging', d: 'System pressure drops and infrared temperature variances around hidden leaks.' }
    ],
    scope: {
      heading: 'Our 4-step leak repair process',
      intro: 'We avoid unnecessary demolition by locating the true source before beginning work:',
      items: [
        { t: '1. Review symptoms', d: 'We check your water meter, assess bills, and examine visible moisture patterns.' },
        { t: '2. Select the right detection method', d: 'Using acoustic, electronic, or pressure testing suited to your home structure.' },
        { t: '3. Find the source before opening surfaces', d: 'We pinpoint the leak beneath the slab or behind drywall before any cutting begins.' },
        { t: '4. Explain repair options', d: 'You receive clear choices (such as spot repair vs. overhead line reroute) with upfront pricing.' }
      ]
    },
    repairScopes: [
      { t: '1. Diagnostic locating', d: 'Pinpointing the exact physical source using acoustic sensors and pressure decay tests.' },
      { t: '2. Pipe repair or reroute', d: 'Targeted spot repair or overhead PEX bypass avoiding slab demolition.' },
      { t: '3. Surface restoration', d: 'Referral to trusted local drywall, flooring, or concrete restoration contractors.' }
    ],
    safetyNote: 'If water is currently spraying or pooling inside living spaces, shut off your main water valve immediately.',
    insuranceNote:
      'We provide complete diagnostic reports, photographic documentation, and repair records suitable for homeowners insurance claims (the insurance provider determines claim coverage).',
    costs: {
      intro: 'Leak repair costs vary depending on location, accessibility, and whether a reroute is optimal.',
      items: [
        { t: 'Leak location', d: 'Accessible under-sink piping versus sub-slab foundation lines.' },
        { t: 'Repair approach', d: 'Direct localized spot repair versus overhead PEX reroute to bypass damaged sections.' },
        { t: 'Pipe material', d: 'Copper, PEX, PVC, or galvanized line transitions.' }
      ]
    },
    proof: {
      label: 'Verified Google Review — Leak Repair',
      reviewer: 'Rick Thomas',
      date: 'Google Review',
      review: 'John fixed a leaky pipe and “provided good advice on our copper pipes.”'
    },
    faqs: [
      { q: 'Will you need to jackhammer my slab for a slab leak?', a: 'Not necessarily! In many cases, we can perform an overhead pipe reroute through attic or wall spaces to bypass the leaking slab pipe completely, avoiding concrete demolition.' },
      { q: 'Do you help with insurance paperwork?', a: 'Yes. We provide detailed diagnostic write-ups, photos, and itemized repair invoices for you to submit to your insurance adjuster.' },
      { q: 'What should I do if water is actively leaking right now?', a: 'Shut off your main water valve (often located near the street meter or in the crawl space/garage) and call (704) 733-7507 immediately.' }
    ],
    final: {
      h: 'Suspect a hidden water leak in your Charlotte home?',
      t: 'Call (704) 733-7507 or send a request. We’ll pinpoint the problem and give you honest repair options.'
    }
  },
  {
    slug: 'water-heaters',
    name: 'Water Heater Services',
    navLabel: 'Water Heaters',
    icon: 'heater',
    image: IMG.heater,
    imageAlt: 'Modern high-efficiency tankless water heater installation.',
    problem: 'No hot water, inconsistent temperatures, or a leaking tank?',
    summary: 'Repair, replacement, and tankless conversions by an Authorized Rinnai dealer and installer.',
    directory: {
      problems: [
        'No hot water or runs out quickly',
        'Inconsistent temperatures and fluctuating heat',
        'Water leaking around the base of the tank'
      ],
      overview: 'We service traditional tank, tankless, and hybrid water heaters. We do not assume an older water heater automatically needs replacement — we repair whenever practical.'
    },
    cta: 'Request Water Heater Service',
    meta: {
      title: 'Water Heater Repair & Replacement Charlotte | Pathmaker Plumbing',
      desc: 'Authorized Rinnai dealer & installer serving Charlotte, NC. Repair, tank replacement, and tank-to-tankless water heater conversions.'
    },
    hero: {
      h1: 'Water Heater Repair & Installation in Charlotte, NC',
      intro: 'Whether you lost hot water this morning or want to upgrade to an energy-efficient tankless system, Pathmaker Plumbing provides honest advice on whether repair or replacement is your best value.'
    },
    symptoms: {
      heading: 'Common water heater issues',
      intro: 'Tell us what symptoms your water heater is showing:',
      items: [
        { icon: 'flame', t: 'No hot water', d: 'Burner or heating element failure leaving water completely cold.' },
        { icon: 'thermo', t: 'Inconsistent temperature', d: 'Hot water runs out much faster than usual or fluctuates while showering.' },
        { icon: 'drop', t: 'Water leaking around tank', d: 'Pooling water at the base, corroded valves, or failed expansion tank.' },
        { icon: 'sound', t: 'Rumbling or popping noises', d: 'Sediment buildup at the bottom of the tank overheating and hardening.' }
      ]
    },
    typesServiced: [
      { t: 'Tank water heaters', d: 'Gas and electric standard capacity tank units (repair, replacement, and maintenance).' },
      { t: 'Tankless water heaters', d: 'Continuous on-demand hot water systems; Authorized Rinnai dealer and certified installer.' },
      { t: 'Hybrid heat pump heaters', d: 'High-efficiency heat pump water heaters for reduced energy consumption.' },
      { t: 'Tank-to-tankless conversions', d: 'Upgrading existing tank footprints to high-efficiency tankless wall units.' }
    ],
    compare: {
      heading: 'Repair or replace? How we evaluate your unit',
      intro: '“We do not assume an older water heater automatically needs replacement.” We assess your unit objectively:',
      a: {
        t: 'Repair may make sense when',
        icon: 'wrench',
        items: [
          'The problem is a single serviceable part (thermostat, heating element, thermocouple, gas valve)',
          'The tank and heat exchanger are in good structural shape with no corrosion',
          'The unit was reliable before and repair cost is reasonable',
          'The system still meets your household hot water demand'
        ]
      },
      b: {
        t: 'Replacement may make sense when',
        icon: 'replace',
        items: [
          'The tank itself is leaking or has internal structural failure',
          'Repairs are frequent and approaching half the cost of replacement',
          'The unit is past its expected service lifespan and inefficient',
          'You want continuous hot water via tankless conversion'
        ]
      }
    },
    brandCredential: 'Authorized Rinnai dealer and installer with factory training on gas and electric tankless systems.',
    scope: {
      heading: 'Our water heater evaluation & replacement process',
      intro: 'We diagnose first, confirm repair vs. replacement suitability, and handle all local code requirements:',
      items: [
        { t: '1. Fuel & power diagnostics', d: 'Testing gas valves, burners, thermocouples, or electrical heating elements and thermostats.' },
        { t: '2. Tank structural evaluation', d: 'Checking for internal corrosion, tank fractures, failed expansion tanks, or sediment buildup.' },
        { t: '3. Capacity & sizing review', d: 'Evaluating household peak water demand for appropriate tank size or tankless GPM rating.' },
        { t: '4. Code-compliant installation', d: 'Supplying new thermal expansion tanks, pressure relief valves, safety drain pans, and gas shutoffs.' }
      ]
    },
    install: [
      { t: 'Delivery & safe removal', d: 'Delivery of your new unit and environmentally responsible recycling/disposal of the old tank.' },
      { t: 'Safety & code upgrades', d: 'Installation of temperature & pressure (T&P) relief valves, discharge piping, and expansion tanks.' },
      { t: 'Water & fuel connections', d: 'Professional copper/PEX water supply hookups and certified gas or electrical connections.' },
      { t: 'System startup & testing', d: 'Complete flushing, filling, pilot ignition, burner adjustment, and leak-check testing.' }
    ],
    installNote: 'All water heater replacements are installed in strict adherence to North Carolina plumbing codes with proper permit management.',
    costs: {
      intro: 'Water heater service and installation costs depend on several key factors:',
      items: [
        { t: 'Repair vs replacement', d: 'Component replacement (thermostat/element) versus new complete system installation.' },
        { t: 'Tank vs tankless', d: 'Standard atmospheric tank unit versus high-efficiency continuous tankless system.' },
        { t: 'Capacity and fuel source', d: '40, 50, or 75-gallon tank volume; natural gas, propane, or electric heating.' },
        { t: 'Required code upgrades', d: 'Thermal expansion tanks, safety pans, gas line upsizing, or dedicated venting.' }
      ]
    },
    proof: {
      label: 'Verified Google Review — Water Heaters',
      reviewer: 'Lynne Lambert',
      date: 'Google Review',
      review: 'Repeat customer for tankless water heater and pressure relief valve installs; “cannot recommend him enough.”'
    },
    faqs: [
      { q: 'Can my water heater be repaired instead of replaced?', a: 'Yes! If the tank itself is not leaking and internal components like heating elements, thermostats, or pressure relief valves have failed, repair is often fast and affordable.' },
      { q: 'Are you certified for tankless water heaters?', a: 'Yes, Pathmaker Plumbing is an Authorized Rinnai dealer and installer with extensive experience in gas and electric tankless installations.' },
      { q: 'What is included in a replacement estimate?', a: 'Our written estimates include the equipment, installation, code-required upgrades (expansion tank, pan, venting), permit handling, and haul-away of your old unit.' }
    ],
    final: {
      h: 'Having hot water problems in Charlotte?',
      t: 'Call (704) 733-7507 for priority water heater assistance or submit an online estimate request.'
    }
  },
  {
    slug: 'sewer-lines',
    name: 'Sewer Line Services',
    navLabel: 'Sewer Lines',
    icon: 'sewer',
    image: IMG.sewer,
    imageAlt: 'Exterior residential plumbing sewer cleanout and front yard lateral line.',
    problem: 'Recurring whole-house backups or gurgling toilets?',
    summary: 'Camera inspections, targeted spot repairs, sewer line cleanout installations, and full replacements.',
    directory: {
      problems: [
        'Multiple toilets and drains backing up simultaneously',
        'Gurgling sounds from fixtures when others drain',
        'Sewage odors or soft, wet spots in the yard'
      ],
      overview: 'We inspect lines with high-definition cameras to find the exact problem before proposing solutions. We frequently save homeowners thousands on misdiagnosed repipes.'
    },
    cta: 'Request Sewer Assessment',
    meta: {
      title: 'Sewer Line Inspection & Repair Charlotte | Pathmaker Plumbing',
      desc: 'Accurate camera diagnostics, spot repairs, backwater valve maintenance, and sewer replacements in Charlotte, NC.'
    },
    hero: {
      h1: 'Sewer Line Inspection & Repair in Charlotte, NC',
      intro: 'Main sewer line issues can feel overwhelming. We use high-definition camera inspections to pinpoint the exact condition and location of problems so you only pay for the repairs you actually need.'
    },
    symptoms: {
      heading: 'Signs of a main sewer line issue',
      intro: 'When your main sewer lateral is compromised, symptoms often affect multiple fixtures:',
      items: [
        { icon: 'repeat', t: 'Multiple fixtures backing up', d: 'Water backing up into tubs or showers when toilets are flushed or washing machines drain.' },
        { icon: 'sound', t: 'Toilets gurgling', d: 'Gurgling sounds and air bubbling up when other plumbing fixtures run.' },
        { icon: 'alert', t: 'Sewage odors', d: 'Persistent sewer gas smells around indoor cleanouts or in the front yard.' },
        { icon: 'yard', t: 'Wet or soft spots in yard', d: 'Unusual dampness, sunken grass, or lush green patches along the sewer line route.' }
      ]
    },
    scope: {
      heading: 'Our sewer diagnosis and repair process',
      intro: 'We diagnose thoroughly before proposing any repair:',
      items: [
        { t: '1. Check where backups occur', d: 'Identifying whether the blockage is in an interior branch line or the main lateral.' },
        { t: '2. High-definition camera inspection', d: 'Locating roots, pipe cracks, joint offsets, corrosion, bellies, or backwater valve clogs.' },
        { t: '3. Pinpoint depth and location', d: 'Using radio transmitters to locate the exact underground spot and depth.' },
        { t: '4. Recommend the right repair', d: 'Recommending clearing, a focused spot repair, or broader replacement — and explaining why.' }
      ]
    },
    repairOptions: [
      { t: 'Main lateral cleaning', d: 'Clearing roots, grease, and debris when the pipe structure remains sound.' },
      { t: 'Focused (spot) repair', d: 'Excavating and replacing only the damaged pipe segment rather than the entire line.' },
      { t: 'Sewer cleanout installation', d: 'Installing ground-level access cleanouts for easy maintenance and future servicing.' },
      { t: 'Broader line replacement', d: 'Replacing aged, collapsed, or severely pitched clay or cast iron lines.' }
    ],
    yardImpactNote:
      'Yard impact is always discussed during the estimate. Where trenching is required, we carefully plan excavation, manage soil displacement, and review yard restoration responsibilities in advance.',
    costs: {
      intro: 'Sewer line diagnostic and repair costs depend on pipe accessibility, depth, and repair scope:',
      items: [
        { t: 'Diagnostic locating', d: 'High-definition video camera inspection and radio sonde depth locating.' },
        { t: 'Targeted spot repair', d: 'Excavating and replacing only a single damaged section versus whole-line replacement.' },
        { t: 'Pipe depth and location', d: 'Shallow front-yard cleanout access versus deep lines beneath driveways or landscaping.' },
        { t: 'Cleanout installation', d: 'Installing ground-level access risers for ongoing maintenance and future cleanings.' }
      ]
    },
    proof: {
      label: 'Verified Google Review — Sewer Lines',
      reviewer: 'Andrew Calton',
      date: 'Google Review',
      review: '100% sewer drain blockage on a Sunday night; call back in under an hour, Ben came Monday and kept them updated.'
    },
    faqs: [
      { q: 'Do all sewer problems require replacing the whole line?', a: 'No! Many sewer problems can be resolved with thorough cleaning, clearing a backwater valve, or performing a focused spot repair on a single damaged pipe section. We always look for the repair you actually need.' },
      { q: 'How does camera inspection work?', a: 'We feed a lighted fiber-optic camera through an accessible cleanout to display real-time video of the pipe interior, revealing roots, cracks, and blockages on a digital monitor.' },
      { q: 'What if sewage is backing up into my home right now?', a: 'Stop running all water in the house immediately and call (704) 733-7507.' }
    ],
    final: {
      h: 'Suspect a sewer line issue in your Charlotte home?',
      t: 'Call (704) 733-7507 or send an assessment request. We diagnose accurately before you commit to costly repairs.'
    }
  }
];

export const SVC = Object.fromEntries(SERVICES.map(s => [s.slug, s]));

export const SERVICE_OPTIONS = [
  ...SERVICES.map(s => ({ value: s.slug, label: s.name })),
  { value: 'second-opinion', label: 'Second Opinion on Existing Quote' },
  { value: 'toilet-repair', label: 'Toilet Repair & Installation' },
  { value: 'faucets-fixtures', label: 'Faucets, Disposals & Fixtures' },
  { value: 'other', label: 'Other / Not sure' }
];

export const EXTRA_SERVICES = [
  'Toilet repair & installation',
  'Faucets, garbage disposals & supply lines',
  'Showers & bathtubs',
  'Drain pipe repair',
  'Second opinions & estimates'
];
