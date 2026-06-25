import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: { absolute: 'Mini Golf & Mini Putt Hire Gallery | Golf 2 Go NZ' },
  description:
    'See our portable mini golf and mini putt courses in action — parties, events, fundraisers and corporate functions across New Zealand. Browse the Golf 2 Go gallery.',
  openGraph: {
    title: 'Mini Golf & Mini Putt Hire Gallery | Golf 2 Go NZ',
    description:
      'Browse photos of our portable mini golf hire at events across New Zealand — parties, fundraisers and corporate functions.',
    type: 'website',
    locale: 'en_NZ',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mini Golf & Mini Putt Hire Gallery | Golf 2 Go NZ',
    description:
      'Photos of Golf 2 Go portable mini golf hire at events across New Zealand.',
  },
  alternates: {
    canonical: 'https://golf2go.co.nz/gallery',
  },
  other: {
    'geo.region': 'NZ-MWT',
    'geo.placename': 'Palmerston North',
    'geo.position': '-40.3523;175.6082',
    ICBM: '-40.3523, 175.6082',
  },
};
