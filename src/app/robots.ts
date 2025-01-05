import { MetadataRoute } from 'next'

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
          '/api/',
          '/_next/',
          '/static/',
          '/*.json$',
          '/*?*',
          '/*/index',
          '/*/page/*',
          '//+'
        ]
      }
    ],
    sitemap: 'https://golf2go.co.nz/sitemap.xml',
    host: 'https://golf2go.co.nz'
  }
}
