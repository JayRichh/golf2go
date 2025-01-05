import { MetadataRoute } from 'next'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://golf2go.co.nz'

const staticRoutes = [
  {
    url: baseUrl,
    lastModified: '2024-01-01',
    changeFrequency: 'weekly' as const,
    priority: 1,
  },
  {
    url: `${baseUrl}/courses`,
    lastModified: '2024-01-01',
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  },
  {
    url: `${baseUrl}/gallery`,
    lastModified: '2024-01-01',
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  },
  {
    url: `${baseUrl}/about`,
    lastModified: '2024-01-01',
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  },
  {
    url: `${baseUrl}/book`,
    lastModified: '2024-01-01',
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  },
  {
    url: `${baseUrl}/terms`,
    lastModified: '2024-01-01',
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  },
  {
    url: `${baseUrl}/404`,
    lastModified: '2024-01-01',
    changeFrequency: 'yearly' as const,
    priority: 0.1,
  },
  {
    url: `${baseUrl}/500`,
    lastModified: '2024-01-01',
    changeFrequency: 'yearly' as const,
    priority: 0.1,
  }
]

export default function sitemap(): MetadataRoute.Sitemap {
  return staticRoutes
}
