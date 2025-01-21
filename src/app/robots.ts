import { MetadataRoute } from 'next'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://golf2go.co.nz'

// Valid routes that should be crawled
const validRoutes = ['/', '/about', '/courses', '/gallery', '/book', '/terms']

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: validRoutes,
        disallow: [
          // System and API paths
          '/api/',
          '/_next/',
          '/static/',
          
          // File extensions
          '/*.php$',
          '/*.html$',
          '/*.asp$',
          '/*.aspx$',
          '/*.jsp$',
          '/*.cgi$',
          '/*.pl$',
          '/*.sql$',
          '/*.zip$',
          '/*.tar$',
          '/*.gz$',
          '/*.log$',
          '/*.bak$',
          '/*.json$',
          '/*.exe$',
          '/*.dll$',
          '/*.jar$',
          
          // WordPress and CMS patterns
          '/wp-*',
          '/wordpress/',
          '/dup-installer/',
          '/xmlrpc.php',
          '/install/',
          '/admin/',
          '/login/',
          '/backup/',
          '/cache/',
          '/feed/',
          '/rss/',
          
          // Common attack vectors
          '/.well-known/',
          '/.env',
          '/.git/',
          '/.svn/',
          '/.htaccess',
          '/.htpasswd',
          
          // System directories
          '/cgi-bin/',
          '/bin/',
          '/temp/',
          '/tmp/',
          '/assets/admin/',
          '/includes/',
          '/misc/',
          '/modules/',
          '/profiles/',
          '/scripts/',
          '/updates/',
          '/upgrade/',
          '/vendor/',
          
          // Numeric and random character patterns (common in spam)
          '/*/[0-9]*u[0-9]*',
          '/[a-z]{2,6}/[0-9]+u[0-9]+',
          '/[a-z]{3,8}/*',
          
          // Category and listing patterns
          '/category/*',
          '/*/listing',
          
          // Product and review patterns
          '/a2f6product/*',
          '/*-[0-9][0-9][0-9][0-9][0-9][0-9].html',
          '/*-[0-9][0-9][0-9][0-9][0-9].html',
          '/product/*',
          '/reviews/*',
          
          // Date patterns
          '/20[0-9][0-9]-[0-9][0-9]-[0-9][0-9]/*',
          
          // Random product name patterns
          '/*.html',
          '/tag/*',
          '/Fix-*',
          '/NEW-*',
          
          // Additional spam patterns
          '/*/reviews',
          '/product_id/*',
        ],
        crawlDelay: 10
      }
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl
  }
}
