import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const VALID_ROUTES = new Set(['', 'about', 'courses', 'gallery', 'book', 'terms', 'contact'])

const BLOCKED_PATTERNS = [
  /\.(php|html|asp|aspx|jsp|cgi|pl|exe|dll|jar|json|sql|zip|tar|gz|log|bak)$/i,
  /wp-|wordpress|dup-installer|xmlrpc|install|admin|login|backup|cache|cgi-bin|bin|feed|rss/i,
  /\.well-known|\.env|\.git|\.svn|\.htaccess|\.htpasswd/i,
  /\/\d+u\d+/i, /\/[a-z]{2,8}\/\d+u\d+/i, /\/[a-z]{2,8}\/\d+/i,
  /\/category\/.*?\/\d+$/i, /\/category\/\d+\/\d+$/i, /\/category\/.*?\/listing$/i,
  /\/a2f6product\/product_id\/m\d+\/reviews$/i, /-\d{5,}\.html$/i,
  /\/20\d{2}-\d{2}-\d{2}\/\d+$/i,
  /\/(temp|tmp|updates|includes|misc|profiles|scripts|upgrade|vendor)/i,
  /\/tag\//i, /\/Fix-\d+\//i, /\/product\//i, /\/reviews\//i
]

const gone = () => new Response('Gone', { status: 410, headers: { 'X-Robots-Tag': 'noindex, nofollow' } })
const notFound = () => new Response(null, { status: 404, headers: { 'X-Robots-Tag': 'noindex, nofollow' } })

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (
    pathname.startsWith('/_next') || pathname.startsWith('/api') ||
    pathname.startsWith('/images') || pathname.startsWith('/assets') ||
    ['/favicon.ico', '/sitemap.xml', '/robots.txt', '/manifest.json', '/404'].includes(pathname) ||
    pathname.match(/\.(jpe?g|png|gif|svg|ico|webp|pdf)$/i)
  ) return NextResponse.next()

  if (BLOCKED_PATTERNS.some(r => r.test(pathname))) return gone()

  if (!VALID_ROUTES.has(pathname.slice(1))) return notFound()

  return NextResponse.next()
}

export const config = { matcher: ['/:path*'] }
