import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: { absolute: 'Mini Golf Courses & Mini Putt Hire | Golf 2 Go NZ' },
  description:
    'Browse our portable mini golf courses for hire — the Hole in One Challenge and 3, 6 & 9 hole courses for parties, events and corporate functions across NZ. From $190.',
  openGraph: {
    title: 'Mini Golf Courses & Mini Putt Hire | Golf 2 Go NZ',
    description:
      'Portable mini golf courses for hire — Hole in One Challenge and 3, 6 & 9 hole courses for parties, events and corporate functions across New Zealand.',
    type: 'website',
    locale: 'en_NZ',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mini Golf Courses & Mini Putt Hire | Golf 2 Go NZ',
    description:
      'Portable mini golf courses for hire across New Zealand — from the Hole in One Challenge to full 9 hole courses.',
  },
  alternates: {
    canonical: 'https://golf2go.co.nz/courses',
  },
  other: {
    'geo.region': 'NZ-MWT',
    'geo.placename': 'Palmerston North',
    'geo.position': '-40.3523;175.6082',
    ICBM: '-40.3523, 175.6082',
  },
};
