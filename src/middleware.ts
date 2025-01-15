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
  /\/\d{3,}u\d{3,}/i, // Matches /123u456 patterns
  /\/[a-z]{2,6}\/\d{3,}[a-z]\d{3,}/i, // Matches /ddvm/300u28131 patterns
  
  // Product spam patterns
  /-\d{5,}\.html$/i, // Matches product IDs
  /NEW-[\w-]+-\d+\.html$/i, // Matches NEW-Product-Name-12345.html
  
  // Common spam directories
  /\/(temp|tmp|updates|includes|misc|profiles|scripts|upgrade|vendor)/i,
  
  // Random PHP files
  /[a-z]{2,8}\.php$/i, // Matches short PHP filenames
]

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // 1. Allow Next.js system routes and assets
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/images') ||
    pathname.startsWith('/assets') ||
    pathname === '/favicon.ico' ||
    pathname === '/sitemap.xml' ||
    pathname === '/robots.txt' ||
    pathname === '/manifest.json'
  ) {
    return NextResponse.next()
  }

  // 2. Block known malicious patterns
  if (BLOCKED_PATTERNS.some(pattern => pattern.test(pathname))) {
    return NextResponse.redirect(new URL('/404', request.url), { status: 301 })
  }

  // 3. Handle clean routes
  const cleanPath = pathname.slice(1) // Remove leading slash

  // If not a valid route, return 404
  if (!VALID_ROUTES.has(cleanPath)) {
    return NextResponse.redirect(new URL('/404', request.url), { status: 301 })
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    // Match all paths except Next.js system files
    '/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
}
