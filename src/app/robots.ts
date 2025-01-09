import { MetadataRoute } from 'next'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://golf2go.co.nz'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        disallow: [
          // Block everything by default
          '/',
          
          // System and API routes
          '/api/*',
          '/_next/*',
          '/static/*',
          
          // Block spam patterns
          '/product/*',
          '/a2f6product/*',
          '/category/*',
          '/feed/*'
        ],
        allow: [
          '/',
          '/about',
          '/courses',
          '/gallery',
          '/book',
          '/terms'
        ]
      },
      {
        userAgent: 'GPTBot',
        disallow: ['/']
      },
      {
        userAgent: 'CCBot',
        disallow: ['/']
      }
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl
  }
}
