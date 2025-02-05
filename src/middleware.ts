import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Valid routes from seo.config.ts
const VALID_ROUTES = new Set(['', 'about', 'courses', 'gallery', 'book', 'terms'])

// Blocked patterns
const BLOCKED_PATTERNS = [
  // File extensions
  /\.(php|html|asp|aspx|jsp|cgi|pl|exe|dll|jar|json|sql|zip|tar|gz|log|bak)$/i,
  
  // WordPress and common CMS patterns
  /wp-|wordpress|dup-installer|xmlrpc|install|admin|login|backup|cache|cgi-bin|bin|feed|rss/i,
  
  // Common attack patterns
  /\.well-known|\.env|\.git|\.svn|\.htaccess|\.htpasswd/i,
  
  // Random numeric/alphanumeric patterns
  /\/\d{1,}u\d{1,}/i, // Matches any /123u456 patterns
  /\/[a-z]{2,8}\/\d{1,}u\d{1,}/i, // Matches /ddvm/300u28131 patterns
  /\/[a-z]{2,8}\/[0-9]+/i, // Matches random char/number combinations
  
  // Category and listing patterns
  /\/category\/.*?\/\d+$/i, // Matches /category/41_1499_1500/1
  /\/category\/\d+\/\d+$/i, // Matches /category/877/8
  /\/category\/.*?\/listing$/i, // Matches category listings
  
  // Product and review patterns
  /\/a2f6product\/product_id\/m\d+\/reviews$/i, // Matches product review URLs
  /-\d{5,}\.html$/i, // Matches product IDs
  /NEW-[\w-]+-\d+\.html$/i, // Matches NEW-Product-Name-12345.html
  /[\w-]+-\d{5,}\.html$/i, // Matches Product-Name-12345.html
  
  // Date patterns
  /\/20\d{2}-\d{2}-\d{2}\/\d+$/i, // Matches /2020-09-28/55
  
  // Common spam directories
  /\/(temp|tmp|updates|includes|misc|profiles|scripts|upgrade|vendor)/i,
  
  // Random PHP files
  /[a-z]{2,8}\.php$/i, // Matches short PHP filenames
  
  // Additional spam patterns
  /\/tag\//i, // Matches tag URLs
  /\/Fix-\d+\//i, // Matches Fix-#### patterns
  /\/[a-z]{2,8}\/[0-9]+u[0-9]+\.html$/i, // Matches random/number combinations
  /\/product\//i, // Matches product URLs
  /\/reviews\//i // Matches review URLs
]

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Handle contact route redirect
  if (pathname === '/contact') {
    return NextResponse.redirect('https://www.golf2go.co.nz/book')
  }

  // 1. Allow Next.js system routes, assets and special paths
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/images') ||
    pathname.startsWith('/assets') ||
    pathname === '/favicon.ico' ||
    pathname === '/sitemap.xml' ||
    pathname === '/robots.txt' ||
    pathname === '/manifest.json' ||
    pathname === '/404' || // Allow direct access to 404 page
    pathname.endsWith('.jpg') ||
    pathname.endsWith('.jpeg') ||
    pathname.endsWith('.png') ||
    pathname.endsWith('.gif') ||
    pathname.endsWith('.svg') ||
    pathname.endsWith('.ico') ||
    pathname.endsWith('.webp') ||
    pathname.endsWith('.pdf')
  ) {
    return NextResponse.next()
  }

  // 2. Block known malicious patterns
  if (BLOCKED_PATTERNS.some(pattern => pattern.test(pathname))) {
    return NextResponse.rewrite(new URL('/404', request.url))
  }

  // 3. Handle clean routes
  const cleanPath = pathname.slice(1) // Remove leading slash

  // If not a valid route, rewrite to 404 (don't redirect)
  if (!VALID_ROUTES.has(cleanPath)) {
    return NextResponse.rewrite(new URL('/404', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    // Match all paths except Next.js system files
    '/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
}
