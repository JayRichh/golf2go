import { MetadataRoute } from 'next'

import { PRICES_PATH, eventTypes } from '~/lib/event-types'
import { locations } from '~/lib/locations'
import { absUrl } from '~/lib/site'

// Build-time timestamp — refreshes on every deploy rather than a frozen literal.
const BUILD = new Date().toISOString()

type Route = { path: string; freq: string; pri: number; imgs?: string[] }

const routes: Route[] = [
  {
    path: '',
    freq: 'daily',
    pri: 1.0,
    imgs: [
      absUrl('/2-parties-and-events-golf2go-portable-miniature-golf.jpg'),
      absUrl('/17-golf2go-portable-miniature-golf-close-up.jpg'),
      absUrl('/3-fun-portable-mini-golf.jpg'),
      absUrl('/5-cropped-golf2go-logo-1.jpg')
    ]
  },
  {
    path: '/courses',
    freq: 'weekly',
    pri: 0.9,
    imgs: [
      absUrl('/1-Twin-Hedges-3-3m-x-75m.jpg'),
      absUrl('/10-Triple-Kidney-3-4m-x-9m.jpg'),
      absUrl('/12-Slalom-2-8m-x-9m.jpg'),
      absUrl('/15-Multi-tunnels-2-8m-x-9m.jpg'),
      absUrl('/16-Holy-Bridge-3-3m-x-75m.jpg'),
      absUrl('/19-Bridge-over-the-River-3-3m-x-9m.jpg')
    ]
  },
  {
    path: '/book',
    freq: 'weekly',
    pri: 0.95,
    imgs: [
      absUrl('/8-work-function-fun-portable-mini-golf.jpg'),
      absUrl('/30-Tiger-400x400-Golf-Tournaments.jpg')
    ]
  },
  // Location landing pages — derived from the single locations source so a new
  // location automatically gets a sitemap entry.
  ...locations.map(l => ({
    path: `/${l.path}`,
    freq: 'weekly',
    pri: 0.85,
    imgs: [absUrl(l.heroImage)]
  })),
  // Event-type landing pages — derived from the eventTypes source.
  ...eventTypes.map(e => ({
    path: `/${e.path}`,
    freq: 'monthly',
    pri: 0.8,
    imgs: [absUrl(e.heroImage)]
  })),
  {
    path: `/${PRICES_PATH}`,
    freq: 'monthly',
    pri: 0.8,
    imgs: [absUrl('/3-fun-portable-mini-golf.jpg')]
  },
  {
    path: '/gallery',
    freq: 'weekly',
    pri: 0.8,
    imgs: [
      absUrl('/2-parties-and-events-golf2go-portable-miniature-golf.jpg'),
      absUrl('/3-fun-portable-mini-golf.jpg'),
      absUrl('/4-portable-miniature-golf.jpg'),
      absUrl('/7-portable-miniature-golf.jpg'),
      absUrl('/8-work-function-fun-portable-mini-golf.jpg'),
      absUrl('/9-portable-mini-putt.jpg'),
      absUrl('/17-golf2go-portable-miniature-golf-close-up.jpg')
    ]
  },
  {
    path: '/about',
    freq: 'monthly',
    pri: 0.7,
    imgs: [
      absUrl('/6-Forefront-400x400-Auckland-Forefront.jpg'),
      absUrl('/5-cropped-golf2go-logo-1.jpg')
    ]
  },
  {
    path: '/contact',
    freq: 'monthly',
    pri: 0.7
  },
  {
    path: '/terms',
    freq: 'yearly',
    pri: 0.5
  }
]

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(r => ({
    url: absUrl(r.path),
    lastModified: BUILD,
    changeFrequency: r.freq as any,
    priority: r.pri,
    images: r.imgs ?? []
  }))
}
