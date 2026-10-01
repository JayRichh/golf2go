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
  /** Optional long-form sections rendered between "Areas" and "What's included" */
  body?: { heading: string; paragraphs: string[] }[];
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
    body: [
      {
        heading: "Mini golf for Wellington offices and conferences",
        paragraphs: [
          "The central city is packed with offices, conference rooms and function venues, and a portable course fits neatly into any of them. Every hole works indoors, so a wet, windy afternoon does not have to cancel the fun. Twin Hedges takes up 3.3m × 7.5m, while Slalom and Multi-tunnels each need 2.8m × 9m, so share your floor measurements and we will choose holes that suit the room.",
          "At a conference, a short course in the foyer gives delegates something to do between sessions and an easy way to start a conversation. At a staff party or team building afternoon, a 6 or 9-hole round lets teams compete for bragging rights, with a play-off on the trickiest hole to settle a tie.",
          "For a long event, consider two clusters of holes, one near the entrance and one near the food, so guests drift between them. Large conference venues and small boardrooms can both work with the right combination of holes.",
        ],
      },
      {
        heading: "From the Hutt Valley to the Kapiti Coast",
        paragraphs: [
          "We also travel beyond the CBD to Lower Hutt, Upper Hutt, Porirua, Wainuiomata and the Kapiti Coast. School galas, church fundraisers, sports club prizegivings and backyard birthdays can all book the single-hole Hole in One Challenge or a full 3, 6 or 9-hole course.",
          "Whatever the suburb, we deliver the course, set it up and pack it down, so there is nothing for you to carry, assemble or store afterwards.",
        ],
      },
      {
        heading: "Pricing for Wellington hires",
        paragraphs: [
          "The Hole in One Challenge ranges from $190 to $500, and full 3, 6 and 9-hole courses range from $575 to $2500. Where your event lands depends on the number of holes, how long you keep the course and where in the region you are. Bookings need a minimum of 48 hours notice, and every quote is free, so send us the date and venue and we will price it for you.",
        ],
      },
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
    metaTitle: 'Mini Golf Hire Palmerston North | Mini Putt',
    metaDescription:
      'Mini golf hire from our Palmerston North home base. Indoor or outdoor, delivered, set up & packed down in Feilding, Levin & Whanganui. From $190. Free quote.',
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
    body: [
      {
        heading: "Hire from our home base",
        paragraphs: [
          "Golf 2 Go is based in Palmerston North, so city events sit right on our doorstep. Delivery is priced by distance from Palmerston North, which means local hires carry the smallest travel component. That makes a mini golf course a simple extra for city schools, clubs, churches and workplaces.",
          "We deliver, set up and pack down every course ourselves, whether the venue is a school hall, a function room in the city centre, a sports club lounge or a family backyard.",
          "For a work function in the city, a 6 or 9-hole round turns a quiet Friday afternoon into a team competition. For a school or kindergarten fundraiser, the Hole in One Challenge makes a simple stall: charge a small fee per shot and offer a prize for an ace. For a birthday, a few holes on the back lawn keep kids and adults busy between food and presents.",
        ],
      },
      {
        heading: "Around the Manawatu",
        paragraphs: [
          "Beyond the city we travel to Feilding, Ashhurst, Levin and Whanganui. A school gala in Feilding, a club fundraiser in Levin or a family birthday in Ashhurst can each book the single-hole Hole in One Challenge or a 3, 6 or 9-hole course.",
          "Indoor and outdoor setups both work, so a community hall can host the course as easily as a lawn. Send us the measurements of the space and we will choose from layouts such as Holy Bridge (3.3m × 7.5m), Triple Kidney (3.4m × 9m) and Bridge over the River (3.3m × 9m).",
        ],
      },
      {
        heading: "Prices and booking in Palmerston North",
        paragraphs: [
          "The Hole in One Challenge is priced from $190 to $500, and full 3, 6 or 9-hole courses from $575 to $2500, depending on holes, duration and location. We need at least 48 hours notice for every booking. Tell us your date, your venue and roughly how many guests you expect, and we will send back a free quote.",
        ],
      },
    ],
    faqs: [
      {
        question: 'Are you based in Palmerston North?',
        answer:
          'Yes — Palmerston North is our home base. That means delivery and setup from our Palmerston North base for mini golf hire across the Manawatu-Whanganui region.',
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
      'Mini golf & mini putt hire in New Plymouth, Stratford, Hawera & Inglewood. Delivery, setup and pack-down — delivery quoted by distance. From $190.',
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
    body: [
      {
        heading: "Mini golf at New Plymouth venues",
        paragraphs: [
          "New Plymouth has a mix of conference venues, function centres, school halls and waterfront parks, and a portable mini putt course can work in any of them. Our holes are built for indoor and outdoor use, so a function room and a lawn are equally good homes for the course.",
          "For a corporate function or conference in the city, a short course in a foyer or breakout area gives guests something to do between sessions. For a wedding reception or a birthday, a lawn course keeps guests entertained while the hosts get on with the day.",
        ],
      },
      {
        heading: "Choosing a layout for a city venue",
        paragraphs: [
          "Tell us the size of your space and we will pick holes to suit. Twin Hedges measures 3.3m × 7.5m, while Slalom and Multi-tunnels each measure 2.8m × 9m and suit long, narrow rooms. A single Hole in One Challenge is ideal for a trade stand or a promotion in a busy lobby, while a 6 or 9-hole round gives a bigger crowd a full course to work through.",
          "If your function has a theme, the course can sit alongside it: put prizes at the final hole, keep a scoreboard by the bar, or run a team competition across the evening.",
          "If your venue has set bump-in and bump-out times, tell us your venue's access times when you book. The same applies to waterfront and park venues where vehicle access may be limited, so mention any restrictions when you enquire.",
        ],
      },
      {
        heading: "Getting a New Plymouth quote",
        paragraphs: [
          "Hire starts from $190 for the Hole in One Challenge, which ranges up to $500, and full courses run from $575 to $2500. Delivery is priced by distance from Palmerston North and quoted separately alongside the hire price. We need at least 48 hours notice for every booking, and we deliver, set up and pack down the course for you. Every booking starts with a free quote, so tell us your date, your venue and how many holes you would like.",
        ],
      },
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
    body: [
      {
        heading: "Across the whole Taranaki region",
        paragraphs: [
          "Taranaki events are spread right around the maunga, from Waitara on the north coast to Hawera in the south and Opunake on the western side. We travel to Stratford, Inglewood, Oakura and the towns in between, and we deliver, set up and pack down the course wherever your venue is.",
          "Country school galas, community days, rugby and netball club prizegivings and town hall fundraisers can all make use of a mini golf course. It gives families a reason to stay longer and gives organisers a crowd-pleasing extra without any setup on their part.",
        ],
      },
      {
        heading: "Which option suits a small-town event?",
        paragraphs: [
          "A lone Hole in One Challenge makes an easy stall to staff: charge a gold coin per go and hand out a reward to anyone who aces it. A 3, 6 or 9-hole course works as a feature activity where families play a full round together.",
          "Both work indoors in a community hall or outdoors on a domain or school field. Let us know the size of the space and whether it is inside or out, and we will plan a layout that suits the site.",
          "The price depends on how long you need the course, so tell us your event hours and ask for a quote. For a one-off evening, a shorter hire keeps the cost down. Coastal spots like Oakura and Opunake suit a lawn setup in summer, while a community hall in Stratford or Inglewood works in the cooler months.",
        ],
      },
      {
        heading: "Taranaki pricing",
        paragraphs: [
          "Expect $190 to $500 for the one-hole challenge and $575 to $2500 for a full course; the number of holes, the hours and the location decide where you land. For towns further from our base, travel makes up a larger share, because delivery is priced by distance from Palmerston North and quoted separately alongside the hire price. Every booking needs at least 48 hours notice.",
        ],
      },
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
  {
    slug: 'auckland',
    path: 'mini-golf-auckland',
    name: 'Auckland',
    areaServed: 'Auckland',
    region: 'the Auckland Region',
    heroImage: '/3-fun-portable-mini-golf.jpg',
    geo: { latitude: -36.8485, longitude: 174.7633 },
    metaTitle: 'Mini Golf Hire Auckland | Portable Mini Putt',
    metaDescription:
      'Portable mini golf & mini putt hire for Auckland events, North Shore to Manukau. We deliver, set up and pack down, indoors or out. From $190. Free quote.',
    h1: 'Mini Golf & Mini Putt Hire in Auckland',
    intro:
      'Auckland has no shortage of venues, and a portable mini golf course can turn almost any of them into a games room for the day. Golf 2 Go makes the trip north from Palmerston North with a complete mini putt setup, installs it where you want it and takes it away again once play wraps up. A city-centre office could use one to break up a long conference programme; a family on the North Shore might set one up for a birthday on the lawn. The range runs from a lone Hole in One Challenge, handy for a promotion or prize draw, through to 3, 6 or 9 holes for a bigger crowd. Since it is a long drive, delivery is priced by distance from Palmerston North and quoted separately alongside the hire price.',
    places: [
      'Auckland Central',
      'North Shore',
      'Manukau',
      'Henderson',
      'Howick',
      'Papakura',
    ],
    body: [
      {
        heading: 'Matching a layout to an Auckland floor plan',
        paragraphs: [
          'Floor space in Auckland venues varies a lot, from a tight breakout corner beside a lift lobby to an open school field in Papakura. Twin Hedges measures 3.3m × 7.5m, while Slalom and Multi-tunnels are longer and narrower at 2.8m × 9m. Knowing those footprints lets us plan which holes fit well before the day.',
          'A rough sketch or a photo of the room is plenty. Mention doorways, pillars and where people will gather, and we can map out a route that flows instead of blocking the bar or the buffet.',
          'Holy Bridge shares the 3.3m × 7.5m footprint of Twin Hedges, so a pair of them can sit side by side in a function suite or a school hall where length is limited. In a long, narrow corridor or marquee, the 2.8m-wide Slalom and Multi-tunnels holes use the length without crowding the walls. Triple Kidney, at 3.4m × 9m, is the widest of the set and belongs on an open lawn or a larger conference floor.',
        ],
      },
      {
        heading: 'What the Auckland trip means for your booking',
        paragraphs: [
          'Your total is made up of the course itself, how long you keep it, and the drive north from our Manawatu base. That last part shrinks or grows with the address, so Howick and Henderson may not cost the same to reach.',
          'The minimum lead-in is 48 hours, which is the same rule we apply everywhere. With an Auckland booking, though, getting your enquiry in early leaves room to sort out venue access, loading zones and parking with your venue manager.',
          'Put the full venue address in your enquiry, whether that is Auckland Central or out in Papakura, so the delivery line in your quote reflects the actual trip.',
        ],
      },
      {
        heading: 'Ideas for Auckland events',
        paragraphs: [
          'Product launches and trade stands can run the Hole in One Challenge as a prize draw that pulls a crowd. Staff socials can split into teams for a 9-hole tournament with a scoreboard on the wall. Community groups can charge a gold coin per round. Whatever the format, nobody on your side has to assemble anything.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Is Auckland too far for you to travel?',
        answer:
          'No. Our home base is Palmerston North, but we make the trip to Auckland for hires from the North Shore down to Papakura. You get the full service there too: drop-off, installation and removal.',
      },
      {
        question: 'Which Auckland indoor spaces suit a mini putt course?',
        answer:
          'Office floors, conference rooms, function suites, community centres and school halls can all take a course. The holes are built for inside use as well as outside, so the deciding factor is simply how much clear floor you can offer.',
      },
      {
        question: 'Why does an Auckland quote include a travel component?',
        answer:
          'Delivery is priced by distance from Palmerston North, so an Auckland job carries more travel than a Manawatu one. Hire itself starts from $190 and also depends on hole count and hours; your free quote lists the delivery cost separately.',
      },
    ],
    keywords: [
      'mini golf hire auckland',
      'portable mini golf auckland',
      'mini putt hire auckland',
      'indoor mini golf auckland',
    ],
  },
  {
    slug: 'hamilton',
    path: 'mini-golf-hamilton',
    name: 'Hamilton',
    areaServed: 'Hamilton',
    region: 'the Waikato',
    heroImage: '/7-portable-miniature-golf.jpg',
    geo: { latitude: -37.787, longitude: 175.2793 },
    metaTitle: 'Mini Golf Hire Hamilton | Portable Mini Putt',
    metaDescription:
      'Mini golf & mini putt hire in Hamilton and the Waikato, including Cambridge & Te Awamutu. Delivered, set up and packed down. From $190. Get a free quote.',
    h1: 'Portable Mini Golf Hire in Hamilton & the Waikato',
    intro:
      'Searching for mini putt hire in Hamilton, New Zealand? Golf 2 Go can bring a portable course to your event anywhere around the Waikato, whether that is a Hamilton school, a sports club in Cambridge, a woolshed party near Te Awamutu or an office in Huntly. We drive up from Palmerston North, put the holes down in your chosen spot, and lift them again when the day is over. Your guests just turn up and play. For a stall or a promotion, the one-hole Hole in One Challenge does the job; a 3, 6 or 9-hole layout suits a party or work function where people want to wander through a whole round. The courses work indoors as well as outdoors; tell us whether your venue is inside or out when you book. Delivery is priced by distance from Palmerston North and quoted separately.',
    places: [
      'Hamilton',
      'Cambridge',
      'Te Awamutu',
      'Huntly',
      'Ngaruawahia',
      'Morrinsville',
    ],
    body: [
      {
        heading: 'Mini golf for Waikato events of every size',
        paragraphs: [
          'A course gives people something to do between the speeches, the food and the catch-ups. Around the Waikato that might be a club prizegiving, a workplace function, a birthday on a back lawn or a stall at a community fundraiser.',
          'For a smaller crowd, the single-hole Hole in One Challenge is priced from $190 up to $500. Larger groups do better with more holes, since several players can be out on the course at once and the queue stays short. A 9-hole round with mixed layouts gives keen players a proper test.',
          'Rural venues around Morrinsville and Ngaruawahia work just as well as city halls. A woolshed, a marae dining hall or a club rooms floor can each take a few holes, and a big farm lawn could take a full 9-hole circuit with space left over for the barbecue. In Cambridge or Te Awamutu, a few holes could slot into a market day or a sports club open day.',
        ],
      },
      {
        heading: 'What to send us for a Hamilton quote',
        paragraphs: [
          'Give us four details and we can price the job: the date, the town or suburb, inside or outside, and roughly how many hours you want the course on site. The town matters because the travel cost depends on it.',
          'Book at least 48 hours ahead. After you confirm, we deliver, set up and pack down the course.',
        ],
      },
      {
        heading: 'Indoor or outdoor in the Waikato',
        paragraphs: [
          'The courses work indoors as well as outdoors; tell us whether your venue is inside or out when you book. Venues, halls and offices all suit the holes, as do lawns and fields. A smaller indoor space may suit a smaller combination of holes.',
          'Inside a school hall or on a club rooms floor, the shorter holes are the easier fit: Twin Hedges and Holy Bridge each take 3.3m × 7.5m. A sports field or a big back lawn has the length for the 9m holes as well, such as Slalom, Multi-tunnels and Bridge over the River, so an outdoor Waikato event can run a longer, more varied round.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Which Waikato towns can you reach?',
        answer:
          'Hamilton and the surrounding towns, including Cambridge, Te Awamutu, Huntly, Ngaruawahia and Morrinsville. Wherever the venue is, the drop-off, setup and pack-down are handled by us.',
      },
      {
        question: 'Can the course be set up indoors in Hamilton?',
        answer:
          'Yes. The courses work indoors as well as outdoors, so venues, halls and offices around Hamilton all suit the holes. Tell us whether your venue is inside or out when you book.',
      },
      {
        question: 'What makes up a Hamilton hire quote?',
        answer:
          'Three things: how many holes you pick, how long you keep them, and the travel from Palmerston North. Hire starts from $190 for a single hole. Send your details and we will reply with a free quote.',
      },
    ],
    keywords: [
      'mini golf hire hamilton',
      'mini putt hire hamilton',
      'portable mini golf waikato',
      'mini golf hire hamilton nz',
    ],
  },
  {
    slug: 'tauranga',
    path: 'mini-golf-tauranga',
    name: 'Tauranga',
    areaServed: 'Tauranga',
    region: 'the Bay of Plenty',
    heroImage: '/4-portable-miniature-golf.jpg',
    geo: { latitude: -37.6878, longitude: 176.1651 },
    metaTitle: 'Mini Golf Hire Tauranga | Portable Mini Putt',
    metaDescription:
      'Portable mini golf hire in Tauranga, Mount Maunganui & the Bay of Plenty. Indoor or outdoor mini putt, delivered and set up. From $190. Request a free quote.',
    h1: 'Mini Golf Hire in Tauranga & the Bay of Plenty',
    intro:
      'From a summer barbecue at the Mount to a staff day in Te Puke, a mini putt course gives Bay of Plenty guests an easy way to mingle. Golf 2 Go hires out portable mini golf for events across Tauranga, Mount Maunganui, Papamoa, Katikati and Omokoroa. We bring the course from our Palmerston North base, lay it out at your venue, and pack it up afterwards. There are two ways to play. The Hole in One Challenge is a single, eye-catching hole for competitions and brand activations. The 3, 6 and 9-hole options form a proper circuit for parties and functions. Indoors or outdoors both work. Delivery is priced by distance from Palmerston North and quoted separately alongside the hire price.',
    places: [
      'Tauranga',
      'Mount Maunganui',
      'Papamoa',
      'Te Puke',
      'Katikati',
      'Omokoroa',
    ],
    body: [
      {
        heading: 'Courtyard, lawn or hall',
        paragraphs: [
          'Plenty of Bay events are planned for outside, and plenty happen in halls and function rooms. Every hole works indoors as well as outdoors, so a courtyard, a lawn or a hall can all host the course.',
          'Give us the measurements of your space. Bridge over the River (3.3m × 9m) and Triple Kidney (3.4m × 9m) need more length than Twin Hedges (3.3m × 7.5m), so a shorter room might call for a slightly different mix. Slalom and Multi-tunnels are the narrowest at 2.8m wide, which helps on a courtyard or deck at the Mount where width is tight but nine metres of length is available.',
        ],
      },
      {
        heading: 'One hole or a full circuit?',
        paragraphs: [
          'Choose the single hole when the course is a sideshow: a brand activation, a stall, a giveaway. Choose a circuit when it is a main attraction, as at a birthday, a school gala, a fundraiser, a wedding or a work do. A beachside barbecue in Papamoa could feature a short course on the grass, while a harbourside function suits a relaxed round as the light fades.',
          'Not sure? Describe the event and the crowd and we will recommend something that suits both the space and the budget. Bookings need 48 hours notice at minimum.',
        ],
      },
      {
        heading: 'Making the most of a Bay of Plenty hire',
        paragraphs: [
          'Put the course somewhere guests pass on the way to food or drinks, and it fills itself. Add a scorecard or a small prize for a hole in one and people come back for a second try. For longer events, a 6 or 9-hole circuit spreads players out and avoids a bottleneck at the first tee.',
          'Corporate hosts around the harbour can use a short course as a conference breakout, while sports clubs might run a putting contest at their end-of-season prizegiving. Couples planning a relaxed reception may want something for guests to do during photos, and a lawn course covers that neatly. Whatever the occasion, tell us the start time, the finish time and the space, and the rest is on us.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Will you come to Mount Maunganui or Papamoa?',
        answer:
          'Yes. Tauranga, the Mount, Papamoa and the wider Bay of Plenty are all places we travel to, and the setup and pack-down are part of the job.',
      },
      {
        question: 'Can the mini putt go inside a Tauranga function room?',
        answer:
          'It can. Halls, offices and function rooms suit the courses as well as gardens and courtyards. Measure the room, send us the numbers and we will work out what fits.',
      },
      {
        question: 'How is mini golf hire priced for the Bay of Plenty?',
        answer:
          'Prices begin at $190. Hole count and hire length set the base, then delivery is added by distance from Palmerston North. Ask us and we will send a free quote.',
      },
    ],
    keywords: [
      'mini golf hire tauranga',
      'portable mini golf tauranga',
      'mini putt hire bay of plenty',
      'mini golf hire mount maunganui',
    ],
  },
  {
    slug: 'hawkes-bay',
    path: 'mini-golf-hawkes-bay',
    name: "Hawke's Bay",
    areaServed: "Hawke's Bay",
    region: "Hawke's Bay",
    heroImage: '/2-parties-and-events-golf2go-portable-miniature-golf.jpg',
    geo: { latitude: -39.5655, longitude: 176.8804 },
    metaTitle: "Mini Golf Hire Hawke's Bay | Mini Putt Hire",
    metaDescription:
      "Mini golf & mini putt hire in Hawke's Bay: Napier, Hastings & Havelock North. Delivered, set up and packed down, indoors or out. From $190. Free quote.",
    h1: "Portable Mini Golf Hire in Napier, Hastings & Hawke's Bay",
    intro:
      "Hosting something in Napier, Hastings or Havelock North? A portable mini putt course is an easy add-on that suits all sorts of crowds. Golf 2 Go travels from Palmerston North to bring the full kit to Hawke's Bay, then handles the installation at your venue and the clean-up at the end. You pick the scale: one Hole in One Challenge for a giveaway or competition, or a 3, 6 or 9-hole course where groups can play a full round. A school hall in Taradale, a vineyard lawn, an office in Hastings or a backyard in Clive are all fair game, since the holes are made for inside and outside use. Delivery is priced by distance from Palmerston North and quoted separately alongside the hire price.",
    places: [
      'Napier',
      'Hastings',
      'Havelock North',
      'Taradale',
      'Clive',
      'Waipukurau',
    ],
    body: [
      {
        heading: "Mini putt for Hawke's Bay functions and celebrations",
        paragraphs: [
          "A course gives guests an activity they can drop in and out of. That works at a wedding, a birthday, a conference break, a team building afternoon or a fundraiser, and young and old can play side by side.",
          'Our layouts carry names like Holy Bridge, Twin Hedges and Multi-tunnels, each with its own obstacles. Mixing a few keeps a 6 or 9-hole round varied from the first tee to the last.',
        ],
      },
      {
        heading: 'Getting a quote for Napier or Hastings',
        paragraphs: [
          'Share the date, the venue and whether you will be inside or out. Because the delivery charge follows the distance, the venue address is what lets us give you an accurate total.',
          'Unsure how many holes you need? Tell us roughly how many guests are coming and how long the course will be in use, and we will recommend an option. Allow at least 48 hours between booking and event.',
        ],
      },
      {
        heading: 'Placing the course on the day',
        paragraphs: [
          'Lawns, terraces and halls all work, but think about flow. A course near the entrance becomes an icebreaker as people arrive; one beside the dance floor or the bar keeps a crowd busy later in the evening. Tell us which you prefer and we will set the holes out to suit.',
          'Vineyard and garden venues around Havelock North can take the course on the lawn, while Napier and Hastings function rooms suit an indoor layout. On a vineyard lawn, the 9m-long holes such as Triple Kidney (3.4m × 9m) and Bridge over the River (3.3m × 9m) have room to stretch out. A function room that cannot spare nine metres of length can still take Holy Bridge or Twin Hedges.',
          'For a long afternoon function, consider splitting the course into two smaller clusters so that groups at different ends of the venue each have their own holes to play. For a short promotion, one well-placed Hole in One Challenge near the main walkway is easier for passers-by to spot than several holes tucked away in a corner.',
        ],
      },
    ],
    faqs: [
      {
        question: "Do you provide mini golf hire in Hawke's Bay?",
        answer:
          "We do. Napier, Hastings, Havelock North and the towns around them are on our list of places we travel to, and the full drop-off, installation and removal comes with every hire.",
      },
      {
        question: 'Could the holes go inside a Napier or Hastings venue?',
        answer:
          'Absolutely. Function rooms, halls and offices are all good options, as are lawns and terraces. Send us the floor dimensions and we will sketch a layout around them.',
      },
      {
        question: "What does mini golf hire in Hawke's Bay cost?",
        answer:
          'The starting point is $190. More holes or longer hire raises it, and travel is added based on distance from Palmerston North. Ask us for a free quote.',
      },
    ],
    keywords: [
      "mini golf hire hawke's bay",
      'mini golf hire napier',
      'mini golf hire hastings',
      'portable mini putt hawkes bay',
    ],
  },
  {
    slug: 'whanganui',
    path: 'mini-golf-whanganui',
    name: 'Whanganui',
    areaServed: 'Whanganui',
    region: 'Whanganui and Rangitikei',
    heroImage: '/3-fun-portable-mini-golf.jpg',
    geo: { latitude: -39.9301, longitude: 175.0479 },
    metaTitle: 'Mini Golf Hire Whanganui | Portable Mini Putt',
    metaDescription:
      'Mini golf & mini putt hire in Whanganui, Marton & Bulls. We deliver, set up and pack down; delivery quoted by distance. From $190.',
    h1: 'Mini Golf & Mini Putt Hire in Whanganui',
    intro:
      'Whanganui is a short drive from our Palmerston North base. Golf 2 Go hires out portable mini golf and mini putt for events across the river city and nearby towns such as Castlecliff, Marton, Bulls, Hunterville and Taihape. We deliver the holes, set them up at your venue and pack them down when your event finishes. A one-hole Hole in One Challenge suits a gala stall, a raffle or a shop promotion. A 3, 6 or 9-hole course suits a birthday, a club night, a fundraiser, a wedding or a staff function. Halls, school fields and backyards all work because the courses run indoors and outdoors. Delivery is priced by distance from Palmerston North, and every quote is free.',
    places: [
      'Whanganui',
      'Castlecliff',
      'Marton',
      'Bulls',
      'Hunterville',
      'Taihape',
    ],
    body: [
      {
        heading: 'Mini golf for Whanganui schools, clubs and families',
        paragraphs: [
          'School galas and club fundraisers need activities that keep people coming back to the stall. A Hole in One Challenge is simple to grasp and easy to run as a competition, while a multi-hole course gives families something to do together. Players take their shot and move on, which keeps the line moving on a busy gala day.',
          'For private parties, a 3 or 6-hole course fits into a backyard or hall and keeps guests entertained. There is nothing for the host to build, because assembly and removal are part of the service.',
          'In a Whanganui school hall, a 3-hole set built from Twin Hedges and Holy Bridge (3.3m × 7.5m each) leaves space around the edges for spectators and a stall table. Out on a school field or a Marton sports ground there is room for the 9m holes too, such as Slalom or Triple Kidney, and the whole course can move indoors if the gala is held under cover.',
        ],
      },
      {
        heading: 'Pricing for Whanganui and Rangitikei events',
        paragraphs: [
          'Single-hole hire starts from $190, and full 3, 6 and 9-hole courses range from $575 to $2500. Where you land depends on the hole count, the hours and the travel distance from Palmerston North.',
          'Get your request in at least 48 hours before the event. Include the date, the venue and a rough guest count, and we will check availability and come back with a price.',
        ],
      },
      {
        heading: 'Running a fundraiser round',
        paragraphs: [
          'Raising funds? Charge a small fee for each go and pin a leaderboard up near the start. Offering a reward for an ace encourages repeat attempts, and a team challenge between classes or club grades adds friendly rivalry.',
          'For a club night or a family reunion, a 6-hole layout spread around the room keeps everyone moving. Older relatives can play a slow, chatty round while the kids race ahead, and nobody needs any golf experience to enjoy it. If the gathering spills outside, the holes can go on the lawn instead, so long as you let us know the plan when you book.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Do you hire mini golf in Whanganui?',
        answer:
          'Yes. Whanganui and the towns around it, such as Marton, Bulls and Hunterville, are close to our base, and we look after the drop-off, installation and pick-up for you.',
      },
      {
        question: 'Will it fit in a Whanganui community or school hall?',
        answer:
          'Yes, if there is enough floor space. Every layout we hire can be used under a roof or in the open air, so community halls, school halls, offices and function rooms are all candidates. Pass on the room measurements and we will pick a combination to suit.',
      },
      {
        question: 'How much does mini golf hire in Whanganui cost?',
        answer:
          'It begins at $190 for one hole. Adding holes or hours changes the price, as does the short travel distance from Palmerston North. Ask for a free quote to see the exact figure.',
      },
    ],
    keywords: [
      'mini golf hire whanganui',
      'mini putt hire whanganui',
      'portable mini golf whanganui',
      'mini golf hire marton',
    ],
  },
];

export const getLocation = (slug: string): Location | undefined =>
  locations.find((l) => l.slug === slug);
