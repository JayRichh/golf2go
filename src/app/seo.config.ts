import { Metadata } from 'next'
import { seoKeywords } from '~/utils/sitemap'

export type MetadataProps = {
  title?: string
  description?: string
  keywords?: string[]
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

export function generateMetadata({
  title,
  description,
  keywords = [],
  images = defaultImages,
}: MetadataProps): Metadata {
  const finalTitle = `${title ? `${title} | ` : ''}Golf 2 Go NZ - Premium Portable Mini Golf Hire`
  const finalDescription = description || 'New Zealand\'s leading portable mini golf rental service. Professional setup and delivery nationwide for corporate events, parties, and special occasions.'

  return {
    title: finalTitle,
    description: finalDescription,
    keywords: [...keywords, ...seoKeywords].join(', '),
    authors: [{ name: 'Golf 2 Go NZ' }],
    creator: 'Golf 2 Go NZ',
    publisher: 'Golf 2 Go NZ',
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      title: finalTitle,
      description: finalDescription,
      url: 'https://golf2go.co.nz',
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
      canonical: 'https://golf2go.co.nz',
      languages: {
        'en-NZ': 'https://golf2go.co.nz'
      }
    },
    other: {
      'business-type': 'Corporate Entertainment',
      'location': 'Palmerston North, New Zealand',
      'contact-email': 'admin@golf2go.co.nz',
      'contact-phone': '021 849931'
    },
    metadataBase: new URL('https://golf2go.co.nz'),
  }
}
