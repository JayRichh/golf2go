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
