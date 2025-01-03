import { generateMetadata as baseGenerateMetadata } from '../seo.config'
import { generateStructuredData } from '~/utils/sitemap'

export async function generateMetadata() {
  const pageKeywords = [
    'corporate event gallery',
    'professional event photos',
    'business function gallery',
    'executive event showcase',
    'corporate entertainment examples',
    'professional setup gallery',
    'business event portfolio',
    'corporate function photos',
    'executive entertainment gallery',
    'premium event showcase',
    'Palmerston North corporate events',
    'NZ business functions',
    'professional event solutions',
    'corporate entertainment portfolio',
    'executive function gallery'
  ]

  const metadata = baseGenerateMetadata({
    title: 'Professional Corporate Event Gallery | Premium Entertainment Solutions',
    description: 'Explore our portfolio of successful corporate events and professional functions. View premium entertainment setups, executive-grade configurations, and business event solutions delivered across New Zealand.',
    keywords: pageKeywords,
    images: [
      {
        url: '/2-parties-and-events-golf2go-portable-miniature-golf.jpg',
        width: 1200,
        height: 630,
        alt: 'Golf 2 Go - Premium Corporate Event Solutions',
      },
      {
        url: '/6-Forefront-400x400-Auckland-Forefront.jpg',
        width: 1200,
        height: 630,
        alt: 'Golf 2 Go - Professional Business Functions',
      },
      {
        url: '/8-work-function-fun-portable-mini-golf.jpg',
        width: 1200,
        height: 630,
        alt: 'Golf 2 Go - Executive Corporate Entertainment',
      },
      {
        url: '/30-Tiger-400x400-Golf-Tournaments.jpg',
        width: 1200,
        height: 630,
        alt: 'Golf 2 Go - Premium Business Events',
      }
    ]
  })

  return {
    ...metadata,
    other: {
      structured_data: generateStructuredData('gallery')
    }
  }
}
