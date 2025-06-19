import { MetadataRoute } from 'next'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://golf2go.co.nz'
const BUILD = '2025-06-19T00:00:00Z'

const routes = [
  { path: '/', freq: 'weekly', pri: 1, imgs: [`${baseUrl}/5-cropped-golf2go-logo-1.jpg`] },
  { path: '/courses', freq: 'weekly', pri: 0.9, imgs: [
      `${baseUrl}/10-Triple-Kidney-3-4m-x-9m.jpg`,
      `${baseUrl}/12-Slalom-2-8m-x-9m.jpg`
    ]},
  { path: '/book', freq: 'weekly', pri: 0.9 },
  { path: '/gallery', freq: 'weekly', pri: 0.8, imgs: [
      `${baseUrl}/2-parties-and-events-golf2go-portable-miniature-golf.jpg`,
      `${baseUrl}/3-fun-portable-mini-golf.jpg`,
      `${baseUrl}/4-portable-miniature-golf.jpg`
    ]},
  { path: '/about', freq: 'monthly', pri: 0.7 },
  { path: '/terms', freq: 'monthly', pri: 0.6 }
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
