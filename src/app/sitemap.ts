import { MetadataRoute } from 'next'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://golf2go.co.nz'
const BUILD = '2025-06-21T00:00:00Z'

const routes = [
  {
    path: '',
    freq: 'daily',
    pri: 1.0,
    imgs: [
      `${baseUrl}/2-parties-and-events-golf2go-portable-miniature-golf.jpg`,
      `${baseUrl}/17-golf2go-portable-miniature-golf-close-up.jpg`,
      `${baseUrl}/3-fun-portable-mini-golf.jpg`,
      `${baseUrl}/5-cropped-golf2go-logo-1.jpg`
    ]
  },
  {
    path: '/courses',
    freq: 'weekly',
    pri: 0.9,
    imgs: [
      `${baseUrl}/1-Twin-Hedges-3-3m-x-75m.jpg`,
      `${baseUrl}/10-Triple-Kidney-3-4m-x-9m.jpg`,
      `${baseUrl}/12-Slalom-2-8m-x-9m.jpg`,
      `${baseUrl}/15-Multi-tunnels-2-8m-x-9m.jpg`,
      `${baseUrl}/16-Holy-Bridge-3-3m-x-75m.jpg`,
      `${baseUrl}/19-Bridge-over-the-River-3-3m-x-9m.jpg`
    ]
  },
  {
    path: '/book',
    freq: 'weekly',
    pri: 0.95,
    imgs: [
      `${baseUrl}/8-work-function-fun-portable-mini-golf.jpg`,
      `${baseUrl}/30-Tiger-400x400-Golf-Tournaments.jpg`
    ]
  },
  {
    path: '/gallery',
    freq: 'weekly',
    pri: 0.8,
    imgs: [
      `${baseUrl}/2-parties-and-events-golf2go-portable-miniature-golf.jpg`,
      `${baseUrl}/3-fun-portable-mini-golf.jpg`,
      `${baseUrl}/4-portable-miniature-golf.jpg`,
      `${baseUrl}/7-portable-miniature-golf.jpg`,
      `${baseUrl}/8-work-function-fun-portable-mini-golf.jpg`,
      `${baseUrl}/9-portable-mini-putt.jpg`,
      `${baseUrl}/17-golf2go-portable-miniature-golf-close-up.jpg`
    ]
  },
  {
    path: '/about',
    freq: 'monthly',
    pri: 0.7,
    imgs: [
      `${baseUrl}/6-Forefront-400x400-Auckland-Forefront.jpg`,
      `${baseUrl}/5-cropped-golf2go-logo-1.jpg`
    ]
  },
  {
    path: '/terms',
    freq: 'yearly',
    pri: 0.5
  }
]

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(r => ({
    url: `${baseUrl}${r.path}`,
    lastModified: BUILD,
    changeFrequency: r.freq as any,
    priority: r.pri,
    images: r.imgs ?? []
  }))
}
