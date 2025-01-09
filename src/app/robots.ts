import { MetadataRoute } from 'next'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://golf2go.co.nz'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: [
          '/',
          '/about',
          '/courses',
          '/gallery',
          '/book',
          '/terms'
        ],
        disallow: [
          '/api/*',
          '/_next/*',
          '/static/*',
          '/product/*',
          '/feed/*'
        ]
      }
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl
  }
}
