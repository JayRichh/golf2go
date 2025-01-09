import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// List of valid routes
const validRoutes = ['', 'about', 'courses', 'gallery', 'book', 'terms']

// Patterns that indicate spam attempts
const spamPatterns = [
  // Product and review patterns
  /\/product\//i,
  /\/a2f6product\//i,
  /\/reviews$/i,
  
  // File extensions
  /\.html$/i,
  
  // Category and listing patterns
  /\/category\/\d+/i,
  /\/listing$/i,
  
  // Feed and sitemap patterns
  /\/feed\//i,
  /\/sitemap-.*\.xml$/i,
  
  // Product name patterns
  /\/(Cat|Dog)-/i,
  /portable-.*golf/i,
  /work-function/i,
  /mini-golf/i,
  /miniature-golf/i,
  /mini-putt/i,
  
  // Random short directory patterns
  /\/[a-z]{2,4}\/\d/i,
  
  // Numbered paths
  /\/\d+\/\d+\/listing/i,
  
  // Random product URLs
  /\/[a-z]+\/\d+u\d+\.html/i
]

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname

  // Strip leading slash and remove trailing slash if present
  const cleanPath = path.replace(/^\/|\/$/g, '')

  // Check if it's a valid route
  if (!validRoutes.includes(cleanPath)) {
    // Check if it matches any spam patterns
    if (spamPatterns.some(pattern => pattern.test(path))) {
      // Return 404 for spam routes
      return new NextResponse(null, { status: 404 })
    }

    // For other invalid routes, check if they're not system routes
    if (!path.startsWith('/_next') && 
        !path.startsWith('/api') && 
        !path.startsWith('/static') &&
        !path.startsWith('/images') &&
        !path.endsWith('.xml') &&
        !path.endsWith('.txt') &&
        !path.endsWith('.ico') &&
        !path.endsWith('.png') &&
        !path.endsWith('.jpg') &&
        !path.endsWith('.jpeg') &&
        !path.endsWith('.svg')) {
      return new NextResponse(null, { status: 404 })
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * 1. /api/ routes
     * 2. /_next/ (Next.js internals)
     * 3. /_static (inside /public)
     * 4. /_vercel (Vercel internals)
     * 5. Static files (e.g. /favicon.ico, /sitemap.xml, /robots.txt)
     */
    '/((?!api|_next|_static|_vercel|[\\w-]+\\.\\w+).*)',
  ],
}
