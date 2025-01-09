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
          '/preview/*',

          // Block spam patterns
          '/product/*',
          '/a2f6product/*',
          '/*.html',
          '/Cat-*',
          '/Dog-*',
          '/category/*',
          '/feed/*',
          '/sitemap-*',
          '/portable-*',
          '/work-function-*',
          '/reviews',
          // Block random short directory names
          '/[a-z]{2,4}/*',
          // Block numbered paths
          '/[0-9]/*',
          // Block specific patterns
          '/*-golf/',
          '/*-putt/',
          '/*-mini-golf/',
          '/*-miniature-golf/'
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
