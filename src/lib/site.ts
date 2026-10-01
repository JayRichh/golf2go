// Single source of truth for the public origin. The Vercel Production domain is
// the www host and the apex redirects to it, so every canonical, sitemap entry,
// robots directive and JSON-LD @id must use this value. Do NOT read env vars
// here: a stale NEXT_PUBLIC_BASE_URL must never be able to flip the host.
export const SITE_URL = 'https://www.golf2go.co.nz'
export const SITE_NAME = 'Golf 2 Go NZ'
export const PHONE = '021 849931'
export const EMAIL = 'admin@golf2go.co.nz'

/** The single LocalBusiness node, declared once in the root layout. Reference it by @id everywhere else. */
export const ORG_ID = `${SITE_URL}/#organization`

/** Absolute URL for a route path ("" or "/" → SITE_URL, "/x" → SITE_URL/x). */
export const absUrl = (path = ''): string => {
  const clean = path.replace(/^\/+/, '').replace(/\/+$/, '')
  return clean ? `${SITE_URL}/${clean}` : SITE_URL
}

/** Real pixel sizes of the photos used as page heroes / OG images. */
const IMAGE_SIZES: Record<string, { width: number; height: number }> = {
  '/2-parties-and-events-golf2go-portable-miniature-golf.jpg': { width: 1060, height: 596 },
  '/3-fun-portable-mini-golf.jpg': { width: 1060, height: 596 },
  '/4-portable-miniature-golf.jpg': { width: 992, height: 558 },
  '/7-portable-miniature-golf.jpg': { width: 992, height: 558 },
  '/8-work-function-fun-portable-mini-golf.jpg': { width: 1060, height: 455 },
  '/9-portable-mini-putt.jpg': { width: 787, height: 576 },
  '/17-golf2go-portable-miniature-golf-close-up.jpg': { width: 928, height: 1060 },
}

export const imageSize = (url: string): { width: number; height: number } => {
  const size = IMAGE_SIZES[url]
  if (!size) throw new Error(`imageSize: unknown image ${url}`)
  return size
}
