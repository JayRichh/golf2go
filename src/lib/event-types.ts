// Event-type landing pages. Pure data: this module is imported by the edge
// middleware, so it must not import components, icons or anything server-only.

export interface EventType {
  slug: string;
  /** Page path, e.g. "mini-golf-corporate-events" */
  path: string;
  /** Short display name, e.g. "Corporate Events" */
  name: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  /** Existing image in /public */
  heroImage: string;
  /** 5–6 short bullets */
  highlights: string[];
  body: { heading: string; paragraphs: string[] }[];
  /** 3–4 questions, rendered and emitted as FAQPage */
  faqs: { question: string; answer: string }[];
  /** Priority keywords this page targets (used in copy, not meta keywords) */
  keywords: string[];
}

export const eventTypes: EventType[] = [
  {
    slug: 'corporate-events',
    path: 'mini-golf-corporate-events',
    name: 'Corporate Events',
    metaTitle: 'Corporate Mini Golf Hire | Team Building',
    metaDescription:
      'Mini golf hire for corporate events, conferences, team building, promotions and trade shows. Indoor or outdoor, delivered and set up. From $190. Free quote.',
    h1: 'Corporate Mini Golf Hire for Work Events & Team Building',
    intro:
      'Give your next work function something people will actually talk about. Golf 2 Go supplies portable mini golf and mini putt for conferences, staff parties, team building days, client functions, promotions and trade shows. We bring the course to your office, venue or exhibition space, install it before doors open and remove it at the close, so your organisers can concentrate on guests rather than logistics.',
    heroImage: '/8-work-function-fun-portable-mini-golf.jpg',
    highlights: [
      'Indoor setups for offices, conference venues and exhibition halls',
      'Hole in One Challenge for stands, promotions and prize draws',
      '3, 6 and 9-hole courses for team building and staff parties',
      'Installed before your guests arrive and removed afterwards',
      'Several layouts, each with different obstacles',
      'Free, no-obligation quote for your function',
    ],
    body: [
      {
        heading: 'Mini golf for conferences and trade shows',
        paragraphs: [
          'A conference programme is long, and a break-out activity gives delegates a reason to get up, move and talk to each other. A short mini putt course in a foyer or breakout area does that without taking over the room.',
          'On a trade show stand, the Hole in One Challenge works as a draw card. Visitors take a shot, your staff get a natural opening for a conversation, and an ace prize gives people a reason to return later in the day.',
        ],
      },
      {
        heading: 'Team building that everyone can join',
        paragraphs: [
          'Mini golf asks for a steady hand and a bit of luck rather than fitness or experience, so the whole team can play on the same terms. Split into groups, keep a scorecard, and finish with a play-off on the trickiest hole.',
          'For an end-of-year function, a 6 or 9-hole course keeps several groups moving at once. Layouts such as Twin Hedges (3.3m × 7.5m) and Slalom (2.8m × 9m) each add a different challenge to the round.',
        ],
      },
      {
        heading: 'Planning a corporate booking',
        paragraphs: [
          'Our company is based in Palmerston North and serves workplaces nationwide. Pricing for a corporate job reflects the number of holes, how many hours of play you need and where the venue sits, and it all appears in a written quote before you sign off.',
          'Give us two full days of notice at the very least. It helps if your event manager sends the venue floor plan, bump-in and bump-out times and any venue rules on access, so we can line up the installation with everyone else on site.',
        ],
      },
      {
        heading: 'Branding and prizes',
        paragraphs: [
          'Promotions work best with a clear reward. Offer a voucher, a product sample or a spot in a prize draw for anyone who aces the hole, and collect entries as people play. For staff events, a trophy for the winning team and a booby prize for the worst score keep the mood light.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can you set up mini golf inside an office or conference venue?',
        answer:
          'Yes. Our portable courses are designed for indoor as well as outdoor use, so offices, conference centres, function rooms and exhibition halls all work. Send the floor dimensions and we will propose a layout.',
      },
      {
        question: 'Is mini golf a good fit for a trade show stand?',
        answer:
          'The single-hole Hole in One Challenge is well suited to stands and promotions. It needs less room than a full course and gives passing visitors an easy reason to stop.',
      },
      {
        question: 'What does corporate mini golf hire cost?',
        answer:
          'A single Hole in One Challenge sits between $190 and $500. A full 3, 6 or 9-hole course for a work function is priced from $575 up to $2500, with the figure set by hole count, hours and venue location.',
      },
      {
        question: 'Do our staff need to help with setup?',
        answer:
          'No. Installation before the event and removal afterwards are both done by us, so your team does not need to lift a thing.',
      },
    ],
    keywords: [
      'corporate mini golf hire',
      'team building mini golf',
      'mini golf hire for conferences',
      'trade show mini golf hire',
    ],
  },
  {
    slug: 'birthday-parties',
    path: 'mini-golf-birthday-parties',
    name: 'Birthday Parties',
    metaTitle: 'Mini Golf Hire for Birthday Parties',
    metaDescription:
      'Portable mini golf hire for birthday parties at home, in a hall or at a park. We deliver, set up and pack down. Indoor or outdoor, from $190. Get a free quote.',
    h1: 'Mini Golf Party Hire for Birthdays',
    intro:
      'Turn a backyard, a hall or a park into a mini golf course for the afternoon. Whether it is a seventh birthday or a fortieth, Golf 2 Go can bring a portable mini putt course to the party. The holes arrive, go down where you point, and disappear again when the cake is gone, so the person hosting gets to enjoy the celebration too.',
    heroImage: '/9-portable-mini-putt.jpg',
    highlights: [
      'Course comes to your home, hall or party venue',
      'Works in the backyard or indoors',
      'Pick one challenge hole or a full 3, 6 or 9-hole circuit',
      'No assembly for the birthday host',
      'Something guests of different ages can play together',
      'Free quote, hire from $190',
    ],
    body: [
      {
        heading: 'A party activity that runs itself',
        paragraphs: [
          'Party guests arrive at different times, and a mini golf course gives everyone something to do from the moment they walk in. Players can drop in for a round, step out for cake and come back for another go.',
          'There is nothing for you to build or put away. You choose the spot, we set the course up, and it is ready when your guests are.',
        ],
      },
      {
        heading: 'Choosing the right size for your party',
        paragraphs: [
          'For a smaller gathering, the one-hole challenge makes a simple competition: whoever sinks it first wins a lolly bag. For a bigger group, a 3 or 6-hole course keeps more players busy at the same time.',
          'Our layouts include Holy Bridge, Multi-tunnels and Bridge over the River, each with its own obstacles. If you are short on space, tell us the measurements and we will pick holes that fit.',
        ],
      },
      {
        heading: 'Kids parties and adult birthdays',
        paragraphs: [
          'For younger children, the tunnels and bridges add plenty of fun, and getting the ball through at all is a win. Run a simple game where everyone gets three tries per hole and the birthday child plays first. Stickers or a small treat make a good reward for anyone who scores a hole in one.',
          'For a grown-up birthday, mini golf works as a relaxed activity alongside drinks and nibbles. Keep a scorecard on a clipboard, crown a champion at the end of the night, and let the birthday guest choose the hardest hole for a final shoot-out.',
        ],
      },
      {
        heading: 'Booking your birthday mini golf',
        paragraphs: [
          'We operate out of Palmerston North and travel to parties around the country. Your cost depends on the hole count, the number of hours and how far the party address is from us.',
          'Two days ahead is the latest we can take a booking. Send us the date, the address and a rough guest count and you will get a free price back.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can you set up mini golf in our backyard?',
        answer:
          'Yes. Our courses are portable and work outdoors as well as indoors, so a backyard, hall or hired venue are all on the table. Measure the area and we will recommend which holes to bring.',
      },
      {
        question: 'How much is mini golf hire for a birthday party?',
        answer:
          'Most small parties start with the one-hole challenge, priced from $190 up to $500. Bigger birthdays with a 3, 6 or 9-hole course fall between $575 and $2500, depending on holes, hours and the party location.',
      },
      {
        question: 'How much notice do you need for a party booking?',
        answer:
          'At least 48 hours, so send us the party date and address as soon as you have them.',
      },
    ],
    keywords: [
      'mini golf party hire',
      'birthday party mini golf hire',
      'mini putt hire for kids party',
      'backyard mini golf hire',
    ],
  },
  {
    slug: 'school-galas-fundraisers',
    path: 'mini-golf-school-galas-fundraisers',
    name: 'School Galas & Fundraisers',
    metaTitle: 'Mini Golf Hire for School Galas & Fundraisers',
    metaDescription:
      'Portable mini golf hire for school galas, fairs and fundraisers. Run a Hole in One Challenge or a full mini putt course. Delivered and set up. From $190.',
    h1: 'Mini Golf Hire for School Galas & Fundraisers',
    intro:
      'Looking for a gala stall that draws a queue? Golf 2 Go provides portable mini golf and mini putt for school galas, community fairs, club days and fundraisers. Run a Hole in One Challenge with a prize for the best shot, or set up a full course as a feature activity. We bring it, install it and take it away again, so your volunteers can concentrate on running the day.',
    heroImage: '/7-portable-miniature-golf.jpg',
    highlights: [
      'Hole in One Challenge for gala stalls and competitions',
      '3, 6 and 9-hole courses as a feature activity',
      'Set up on a field, court or school hall',
      'Installation and removal done for you',
      'Easy for volunteers to supervise',
      'Free quote, hire from $190',
    ],
    body: [
      {
        heading: 'Raising money with mini golf',
        paragraphs: [
          'A mini golf stall is simple to run as a fundraiser. You decide what to charge per round or per shot, and the course gives families a reason to stay at your stall a little longer.',
          'The Hole in One Challenge lends itself to a leaderboard or a prize for an ace. A full course works well as a ticketed activity alongside the food stalls and raffles.',
        ],
      },
      {
        heading: 'Indoors or outdoors on the day',
        paragraphs: [
          'Galas and fairs are often planned for outdoors, with a hall as a backup. Our courses can be set up indoors as well as outdoors, so you have options if the forecast changes.',
          'Holes come in a range of sizes, for example Twin Hedges at 3.3m × 7.5m and Multi-tunnels at 2.8m × 9m. Tell us how much room the stall has and we will choose holes that fit.',
        ],
      },
      {
        heading: 'Rostering volunteers for the stall',
        paragraphs: [
          'You could run the stall with two volunteers: one to take payment and hand out balls, and one to keep the line moving and record scores. A clear sign with the price per go and the prize on offer saves a lot of explaining.',
          'Older students can take a shift too. Give them a float, a scoreboard and a time slot, and the stall becomes part of the learning on the day.',
        ],
      },
      {
        heading: 'Booking for your school or club',
        paragraphs: [
          'Golf 2 Go works out of Palmerston North and takes gala and fundraiser bookings from schools and clubs around New Zealand. The amount you pay comes down to the number of holes, the length of the gala and the distance to your grounds.',
          'Committees should lock in the hire no later than 48 hours before gates open. Share the date, the venue and your expected crowd with us and we will prepare a free quote to take to your next meeting.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can a school hire mini golf for a gala day?',
        answer:
          'Yes. Schools, PTAs and community groups can hire portable mini golf for galas, fairs and fundraisers, and the drop-off, installation and pick-up are all handled by us.',
      },
      {
        question: 'Which option works best for a fundraiser stall?',
        answer:
          'The Hole in One Challenge is a single hole that suits a stall or competition. If you want a bigger attraction, a 3, 6 or 9-hole course lets more people play at once.',
      },
      {
        question: 'What will a gala hire cost our committee?',
        answer:
          'Budget $190 to $500 for the one-hole challenge, or $575 to $2500 for a full course. The final number depends on how many holes, how many hours and how far you are from Palmerston North.',
      },
      {
        question: 'Can the course be set up in a school hall?',
        answer:
          'Yes. A hall, gym, covered court or field will all do. Tell us roughly how big the area is and we will plan the holes around it.',
      },
    ],
    keywords: [
      'school gala mini golf hire',
      'fundraiser mini golf hire',
      'hole in one challenge hire',
      'gala stall ideas mini golf',
    ],
  },
  {
    slug: 'weddings',
    path: 'mini-golf-weddings',
    name: 'Weddings',
    metaTitle: 'Wedding Mini Golf Hire | Portable Mini Putt',
    metaDescription:
      'Portable mini golf hire for weddings and receptions. A relaxed lawn or indoor game for guests, delivered, set up and packed down. From $190. Get a free quote.',
    h1: 'Wedding Mini Golf Hire',
    intro:
      'Weddings have plenty of in-between moments: photos, the gap before the reception, the hour after dinner. A portable mini golf or mini putt course gives guests something relaxed to do while they wait. Golf 2 Go brings the course to your venue, lays it out on the lawn or indoors, and clears it away once the celebrations wind down, so there is one less thing on your list.',
    heroImage: '/16-Holy-Bridge-3-3m-x-75m.jpg',
    highlights: [
      'A lawn game guests can enjoy between moments',
      'Suits garden venues and function rooms alike',
      'A single challenge hole or a full course',
      'Nothing for the wedding party to put together',
      'Named layouts with bridges, tunnels and hedges',
      'Free quote, hire from $190',
    ],
    body: [
      {
        heading: 'Keeping guests entertained during photos',
        paragraphs: [
          'While the wedding party is away for photos, guests can be left standing around. A mini putt course on the lawn gives them something to do that does not need instructions or teams.',
          'A Hole in One Challenge can also become part of the day. Guests take a shot, and anyone who sinks it first try could win a bottle of something or a spot at the front of the dinner queue.',
        ],
      },
      {
        heading: 'Fitting the course into your venue',
        paragraphs: [
          'Our courses are designed for indoor and outdoor use, so you can set up on a lawn, a terrace or inside a function room. Holy Bridge (3.3m × 7.5m) and the longer Triple Kidney (3.4m × 9m) add a bit of character to the round.',
          'Tell us how much room your venue has and where you would like the course, and we will suggest a combination of holes that fits around the rest of the day.',
        ],
      },
      {
        heading: 'Ideas for a wedding round',
        paragraphs: [
          'Name each hole after a moment in your story, such as where you met or your first holiday together, with a small sign at each tee. Put a guest book or a polaroid camera at the last hole so guests leave a message when they finish.',
          'For a bit of friendly competition, pit the bride’s side against the groom’s side and announce the winning team during the speeches. Children at the wedding get something to do as well, which gives their parents a chance to relax.',
        ],
      },
      {
        heading: 'Booking wedding mini golf',
        paragraphs: [
          'Weddings anywhere in New Zealand can book from our Palmerston North base. Your price comes from three things: the holes you choose, how long they stay at the venue, and how far the venue is from us. Your quote spells it out.',
          'The minimum lead time is 48 hours, but it is worth locking it in alongside the rest of your suppliers. Once the venue and date are fixed, send them through and we will look after the drop-off, setup and removal.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can you set up mini golf at our wedding venue?',
        answer:
          'Yes. The course is brought to your venue and installed by us. It can go on a lawn or terrace, or inside a function room if you prefer.',
      },
      {
        question: 'What does wedding mini golf hire cost?',
        answer:
          'Couples wanting one feature hole pay $190 to $500. A full 3, 6 or 9-hole course for the reception costs $575 to $2500, depending on how many holes, how many hours and where the venue is.',
      },
      {
        question: 'Do we need to set anything up ourselves?',
        answer:
          'No. Drop-off, installation and removal are all part of the hire, so you and your wedding party only need to tell us where the course should go.',
      },
    ],
    keywords: [
      'wedding mini golf hire',
      'wedding lawn games hire',
      'mini putt hire wedding',
      'wedding reception games nz',
    ],
  },
];

export const getEventType = (slug: string): EventType | undefined =>
  eventTypes.find((e) => e.slug === slug);
