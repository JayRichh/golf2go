import { Metadata } from 'next'
import { seoKeywords } from '~/utils/sitemap'

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

const VALID_PATHS = new Set(['', 'about', 'courses', 'gallery', 'book', 'terms'])

// Priority SEO Keywords from Search Console (0-click opportunities)
const priorityKeywords = [
  'mini putt',
  'indoor mini golf palmerston north',
  'new plymouth mini golf',
  'mini golf wellington',
  'portable mini golf hire',
  'mini putt hire',
  'portable mini putt',
  'indoor mini golf wellington',
  'mini golf palmerston north',
  'mini golf new plymouth',
  'portable mini golf wellington',
  'portable mini golf taranaki',
  'mini golf taranaki'
]

const canonical = (p?: string) => {
  if (!p) return BASE_URL
  const clean = p.replace(/^\/+/, '').toLowerCase()
  return VALID_PATHS.has(clean) && clean ? `${BASE_URL}/${clean}` : BASE_URL
}

/* ------------------------------------------------------------------ */

export function generateMetadata({
  title,
  description,
  keywords = [],
  path,
  images = defaultImages
}: MetadataProps): Metadata {
  const fullTitle = `${title ? `${title} | ` : ''}Golf 2 Go NZ - Mini Putt & Portable Mini Golf Hire`
  const fullDesc =
    description ??
    "New Zealand's leading portable mini golf hire and mini putt service. Professional indoor mini golf Palmerston North, mini golf Wellington, New Plymouth mini golf. Nationwide portable mini golf hire."
  const url = canonical(path)

  return {
    title: fullTitle,
    description: fullDesc,
    keywords: [...new Set([...priorityKeywords, ...keywords, ...seoKeywords])].join(', '),
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
      nocache: true,
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








