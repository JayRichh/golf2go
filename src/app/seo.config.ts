import { Metadata } from 'next'
import { seoKeywords } from '~/utils/sitemap'

export type MetadataProps = {
  title?: string
  description?: string
  keywords?: string[]
  path?: string
  images?: {
    url: string
    width: number
    height: number
    alt: string
  }[]
}

const defaultImages = [
  {
    url: '/2-parties-and-events-golf2go-portable-miniature-golf.jpg',
    width: 1200,
    height: 630,
    alt: 'Golf 2 Go - Professional Mini Golf Events',
  },
  {
    url: '/17-golf2go-portable-miniature-golf-close-up.jpg',
    width: 1200,
    height: 630,
    alt: 'Golf 2 Go - Course Details',
  },
]

// Map of valid routes to their canonical paths
const VALID_ROUTES = new Map([
  ['home', ''],
  ['about', 'about'],
  ['courses', 'courses'],
  ['gallery', 'gallery'],
  ['book', 'book'],
  ['terms', 'terms']
]);

// Helper function to generate clean canonical URLs
function generateCanonicalUrl(path?: string): string {
  const baseUrl = 'https://golf2go.co.nz';
  if (!path) return baseUrl;

  // Extract the route identifier from the path
  const routeId = path.toLowerCase()
    .split('|')[0]
    .trim()
    .split(' ')[0];

  // Get the canonical path from our valid routes map
  const canonicalPath = VALID_ROUTES.get(routeId);
  
  // If it's not a valid route, return base URL
  if (!canonicalPath) return baseUrl;
  
  return `${baseUrl}/${canonicalPath}`;
}

export function generateMetadata({
  title,
  description,
  keywords = [],
  path,
  images = defaultImages,
}: MetadataProps): Metadata {
  const finalTitle = `${title ? `${title} | ` : ''}Golf 2 Go NZ - Premium Portable Mini Golf Hire`
  const finalDescription = description || 'New Zealand\'s leading portable mini golf rental service. Professional setup and delivery nationwide for corporate events, parties, and special occasions.'
  const canonicalUrl = generateCanonicalUrl(path || title);

  return {
    title: finalTitle,
    description: finalDescription,
    keywords: [...keywords, ...seoKeywords].join(', '),
    authors: [{ name: 'Golf 2 Go NZ' }],
    creator: 'Golf 2 Go NZ',
    publisher: 'Golf 2 Go NZ',
    openGraph: {
      title: finalTitle,
      description: finalDescription,
      url: canonicalUrl,
      siteName: 'Golf 2 Go NZ',
      images,
      locale: 'en_NZ',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: finalTitle,
      description: finalDescription,
      images: images.map(img => img.url),
    },
    verification: {
      other: {
        'msvalidate.01': '',
        'yandex-verification': ''
      }
    },
    alternates: {
      canonical: canonicalUrl,
      languages: {
        'en-NZ': canonicalUrl
      }
    },
    other: {
      'business-type': 'Corporate Entertainment',
      'location': 'Palmerston North, New Zealand',
      'contact-email': 'admin@golf2go.co.nz',
      'contact-phone': '021 849931'
    },
    metadataBase: new URL('https://golf2go.co.nz'),
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
        'max-snippet': -1,
      },
    },
  }
}
