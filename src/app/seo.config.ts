import { Metadata } from 'next'

export type MetadataProps = {
  title?: string
  description?: string
  keywords?: string[]
  /** Route path, e.g. "/", "about", "/courses" */
  path?: string
  images?: { url: string; width: number; height: number; alt: string }[]
}

/* ------------------------------------------------------------------ */

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://golf2go.co.nz'

const defaultImages = [
  {
    url: '/2-parties-and-events-golf2go-portable-miniature-golf.jpg',
    width: 1200,
    height: 630,
    alt: 'Golf 2 Go - Professional Mini Golf Events'
  },
  {
    url: '/17-golf2go-portable-miniature-golf-close-up.jpg',
    width: 1200,
    height: 630,
    alt: 'Golf 2 Go - Course Details'
  }
]

const canonical = (p?: string) => {
  if (!p) return BASE_URL
  const clean = p.replace(/^\/+/, '').replace(/\/+$/, '').toLowerCase()
  // Resolve every page to its own URL. An unrecognised non-empty path still
  // canonicalises to itself rather than silently collapsing to the homepage
  // (which would de-index the page).
  return clean ? `${BASE_URL}/${clean}` : BASE_URL
}

/* ------------------------------------------------------------------ */

export function generateMetadata({
  title,
  description,
  path,
  images = defaultImages
}: MetadataProps): Metadata {
  // Append a short, brand-only suffix and guard against double-branding so the
  // rendered <title> stays under ~60 chars (Google SERP truncation point).
  const fullTitle = title
    ? /golf 2 go/i.test(title)
      ? title
      : `${title} | Golf 2 Go NZ`
    : 'Golf 2 Go NZ | Mini Putt & Portable Mini Golf Hire NZ'
  const fullDesc =
    description ??
    "Hire portable mini golf & mini putt anywhere in NZ — Wellington, Palmerston North, New Plymouth & Taranaki. Full delivery and setup, from $190. Get a free quote."
  const url = canonical(path)

  return {
    // `absolute` bypasses the root layout's title.template so the brand suffix
    // is not appended a second time.
    title: { absolute: fullTitle },
    description: fullDesc,
    authors: [{ name: 'Golf 2 Go NZ' }],
    creator: 'Golf 2 Go NZ',
    publisher: 'Golf 2 Go NZ',
    openGraph: {
      title: fullTitle,
      description: fullDesc,
      url,
      siteName: 'Golf 2 Go NZ',
      images,
      locale: 'en_NZ',
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: fullDesc,
      images: images.map(i => i.url)
    },
    alternates: { canonical: url },
    metadataBase: new URL(BASE_URL),
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1
      }
    },
    other: {
      'business-type': 'Corporate Entertainment',
      location: 'Palmerston North, New Zealand',
      'contact-email': 'admin@golf2go.co.nz',
      'contact-phone': '021 849931'
    }
  }
}








