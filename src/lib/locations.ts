export interface LocationFaq {
  question: string;
  answer: string;
}

export interface Location {
  slug: string;
  /** Page path, e.g. "mini-golf-wellington" */
  path: string;
  /** Display name of the city/region */
  name: string;
  /** Schema.org areaServed name */
  areaServed: string;
  region: string;
  heroImage: string;
  /** GeoCoordinates for the LocalBusiness service node */
  geo: { latitude: number; longitude: number };
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  /** Towns / suburbs covered */
  places: string[];
  faqs: LocationFaq[];
  /** Priority keywords this page targets (used in copy, not meta keywords) */
  keywords: string[];
}

export const locations: Location[] = [
  {
    slug: 'wellington',
    path: 'mini-golf-wellington',
    name: 'Wellington',
    areaServed: 'Wellington',
    region: 'Wellington Region',
    heroImage: '/2-parties-and-events-golf2go-portable-miniature-golf.jpg',
    geo: { latitude: -41.2865, longitude: 174.7762 },
    metaTitle: 'Mini Golf Hire Wellington | Portable Mini Putt',
    metaDescription:
      'Portable mini golf & mini putt hire in Wellington — Lower Hutt, Upper Hutt & Porirua. Full delivery and setup, indoor or outdoor, from $190. Get a free quote.',
    h1: 'Portable Mini Golf & Mini Putt Hire in Wellington',
    intro:
      'Bring the fun to your next event with portable mini golf hire across the Wellington region. We deliver, set up and pack down a complete mini putt course at your venue — indoors or outdoors — for parties, birthdays, fundraisers, weddings and corporate functions throughout Wellington City, Lower Hutt, Upper Hutt and Porirua.',
    places: [
      'Wellington City',
      'Lower Hutt',
      'Upper Hutt',
      'Porirua',
      'Kapiti Coast',
      'Wainuiomata',
    ],
    faqs: [
      {
        question: 'Do you deliver mini golf hire across Wellington?',
        answer:
          'Yes — we deliver, set up and pack down portable mini golf and mini putt courses across the Wellington region, including Wellington City, Lower Hutt, Upper Hutt, Porirua and the Kapiti Coast.',
      },
      {
        question: 'Can you set up indoor mini golf in Wellington venues?',
        answer:
          'Absolutely. Our portable courses are designed to work indoors, making them ideal for Wellington conference centres, function rooms, offices and community halls.',
      },
      {
        question: 'How much does mini golf hire cost in Wellington?',
        answer:
          'Hire starts from $190. The final price depends on the number of holes, hire duration and your location. Request a free quote and we will confirm pricing for your Wellington event.',
      },
    ],
    keywords: [
      'mini golf wellington',
      'portable mini golf wellington',
      'indoor mini golf wellington',
      'mini putt hire wellington',
    ],
  },
  {
    slug: 'palmerston-north',
    path: 'mini-golf-palmerston-north',
    name: 'Palmerston North',
    areaServed: 'Palmerston North',
    region: 'Manawatu-Whanganui',
    heroImage: '/17-golf2go-portable-miniature-golf-close-up.jpg',
    geo: { latitude: -40.3523, longitude: 175.6082 },
    metaTitle: 'Mini Golf Hire Palmerston North | Indoor Mini Putt',
    metaDescription:
      'Indoor & outdoor mini golf hire in Palmerston North and the Manawatu — Feilding, Levin & Whanganui. Delivery and setup included, from $190. Get a free quote.',
    h1: 'Portable Mini Golf & Mini Putt Hire in Palmerston North',
    intro:
      'Golf 2 Go is based in Palmerston North, so the Manawatu is our home turf. We provide indoor and outdoor portable mini golf hire for parties, school galas, fundraisers, birthdays and corporate events across Palmerston North, Feilding, Levin and Whanganui — fully delivered and set up at your venue.',
    places: [
      'Palmerston North',
      'Feilding',
      'Levin',
      'Whanganui',
      'Ashhurst',
      'Manawatu',
    ],
    faqs: [
      {
        question: 'Are you based in Palmerston North?',
        answer:
          'Yes — Palmerston North is our home base. That means fast, reliable delivery and setup for mini golf hire across the Manawatu-Whanganui region.',
      },
      {
        question: 'Do you offer indoor mini golf in Palmerston North?',
        answer:
          'We do. Our portable courses are perfect for indoor mini golf at Palmerston North venues, halls, offices and conference spaces, as well as outdoor events.',
      },
      {
        question: 'What does mini golf hire cost in Palmerston North?',
        answer:
          'Mini golf hire starts from $190, depending on the number of holes and hire duration. Get in touch for a free quote tailored to your Palmerston North event.',
      },
    ],
    keywords: [
      'mini golf palmerston north',
      'indoor mini golf palmerston north',
      'portable mini golf palmerston north',
      'mini putt hire palmerston north',
    ],
  },
  {
    slug: 'new-plymouth',
    path: 'mini-golf-new-plymouth',
    name: 'New Plymouth',
    areaServed: 'New Plymouth',
    region: 'Taranaki',
    heroImage: '/3-fun-portable-mini-golf.jpg',
    geo: { latitude: -39.0556, longitude: 174.0752 },
    metaTitle: 'Mini Golf Hire New Plymouth | Portable Mini Putt',
    metaDescription:
      'Portable mini golf & mini putt hire in New Plymouth and across Taranaki — Stratford, Hawera & Inglewood. Delivery and setup included, from $190. Get a free quote.',
    h1: 'Portable Mini Golf & Mini Putt Hire in New Plymouth',
    intro:
      'Planning an event in New Plymouth? Our portable mini golf hire brings a complete mini putt course to your venue anywhere in Taranaki. Great for birthdays, parties, fundraisers, school events and corporate functions across New Plymouth, Stratford, Hawera and Inglewood — we handle delivery, setup and pack-down.',
    places: [
      'New Plymouth',
      'Stratford',
      'Hawera',
      'Inglewood',
      'Waitara',
      'Oakura',
    ],
    faqs: [
      {
        question: 'Do you provide mini golf hire in New Plymouth?',
        answer:
          'Yes — we deliver and set up portable mini golf and mini putt courses across New Plymouth and the wider Taranaki region, including Stratford, Hawera and Inglewood.',
      },
      {
        question: 'Can the mini golf be set up indoors in New Plymouth?',
        answer:
          'Yes. Our courses work indoors and outdoors, so they suit New Plymouth halls, venues and offices as well as outdoor parties and events.',
      },
      {
        question: 'How much is mini golf hire in New Plymouth?',
        answer:
          'Hire starts from $190 and varies with the number of holes and duration. Contact us for a free quote for your New Plymouth or Taranaki event.',
      },
    ],
    keywords: [
      'new plymouth mini golf',
      'mini golf new plymouth',
      'portable mini golf new plymouth',
      'mini putt hire new plymouth',
    ],
  },
  {
    slug: 'taranaki',
    path: 'mini-golf-taranaki',
    name: 'Taranaki',
    areaServed: 'Taranaki',
    region: 'Taranaki',
    heroImage: '/4-portable-miniature-golf.jpg',
    geo: { latitude: -39.3538, longitude: 174.4385 },
    metaTitle: 'Mini Golf Hire Taranaki | Portable Mini Putt',
    metaDescription:
      'Portable mini golf & mini putt hire across Taranaki — New Plymouth, Stratford, Hawera & Inglewood. Full delivery and setup, from $190. Get a free quote.',
    h1: 'Portable Mini Golf & Mini Putt Hire in Taranaki',
    intro:
      'Golf 2 Go provides portable mini golf hire right across the Taranaki region. We bring a complete mini putt course to your venue — fully delivered and set up — for parties, fundraisers, school galas, weddings and corporate events in New Plymouth, Stratford, Hawera, Inglewood and surrounding towns.',
    places: [
      'New Plymouth',
      'Stratford',
      'Hawera',
      'Inglewood',
      'Waitara',
      'Opunake',
    ],
    faqs: [
      {
        question: 'Which Taranaki towns do you cover?',
        answer:
          'We provide mini golf hire across the whole Taranaki region, including New Plymouth, Stratford, Hawera, Inglewood, Waitara and Opunake.',
      },
      {
        question: 'Do you set up mini golf indoors or outdoors in Taranaki?',
        answer:
          'Both. Our portable courses are suited to indoor venues and outdoor events alike, anywhere in Taranaki.',
      },
      {
        question: 'What does mini golf hire cost in Taranaki?',
        answer:
          'Hire starts from $190, depending on the number of holes and hire duration. Request a free quote and we will confirm pricing for your Taranaki event.',
      },
    ],
    keywords: [
      'mini golf taranaki',
      'portable mini golf taranaki',
      'mini putt hire taranaki',
      'portable mini putt taranaki',
    ],
  },
];

export const getLocation = (slug: string): Location | undefined =>
  locations.find((l) => l.slug === slug);
