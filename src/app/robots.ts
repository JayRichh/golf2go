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
          // System and API routes
          '/api/*',
          '/_next/*',
          '/static/*',
          
          // Prevent indexing of non-canonical URLs
          '/*.json$',
          '/*?*',
          '/*/index',
          '/*/page/*',
          
          // Prevent infinite crawling
          '*///*',
          '*/?*',
          '*/&*',
          '*/#*',
          
          // Prevent duplicate content
          '*/amp/',
          '*/print/',
          '*/pdf/',
          
          // Prevent crawling of utility pages
          '/error',
          '/404',
          '/500',
          '/loading',
          
          // Prevent crawling of development routes
          '/test/*',
          '/dev/*',
          '/preview/*'
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
