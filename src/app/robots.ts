import { MetadataRoute } from 'next'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://golf2go.co.nz'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{
      userAgent: '*',
      allow: ['/', '/about', '/courses', '/gallery', '/book', '/terms'],
      disallow: [
        '/_next/', '/api/', '/static/', '/cgi-bin/', '/bin/',
        '/admin/', '/login/', '/install/', '/backup/', '/cache/',
        '/wp-*', '/wordpress/', '/xmlrpc.php',
        '/product/*', '/reviews/*', '/category/*', '/tag/*',
        '/*u*', '/*-[0-9]{5,}.html$', '/20*/', '/temp/', '/tmp/', '/vendor/'
      ],
      crawlDelay: 10
    }],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl
  }
}
