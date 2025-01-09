import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Valid routes for our simple app
const validRoutes = new Set([
  '', 
  'about', 
  'courses', 
  'gallery', 
  'book', 
  'terms',
  'robots.txt',
  'sitemap.xml'
])

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname
  const cleanPath = path.replace(/^\/|\/$/g, '')

  // Allow all static files and system routes
  if (path.includes('.') || 
      path.startsWith('/_next') || 
      path.startsWith('/api') || 
      path.startsWith('/static')) {
    return NextResponse.next()
  }

  // Only allow valid routes
  if (!validRoutes.has(cleanPath)) {
    return new NextResponse(null, { status: 404 })
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!_next|static|api|.*\\.[\\w]+$).*)'
  ]
}
