import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/api/',
        '/_next/',
        '/static/',
      ],
    },
    sitemap: 'https://golf2go.co.nz/sitemap.xml',
    host: 'https://golf2go.co.nz',
  }
}
