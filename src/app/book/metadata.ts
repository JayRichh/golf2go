import { generateMetadata as baseGenerateMetadata } from '../seo.config'
import { generateStructuredData } from '~/utils/sitemap'

export async function generateMetadata() {
  const pageKeywords = [
    'corporate event booking',
    'professional entertainment hire',
    'business function reservations',
    'executive event booking',
    'corporate entertainment quotes',
    'professional event planning',
    'business event bookings',
    'corporate function reservations',
    'premium event booking',
    'professional service hire',
    'Palmerston North corporate bookings',
    'NZ business event hire',
    'corporate entertainment booking',
    'executive function reservations',
    'professional event quotes'
  ]

  const metadata = baseGenerateMetadata({
    title: 'Book Professional Corporate Entertainment | Premium Event Solutions',
    description: 'Request premium corporate entertainment solutions for your business event. Professional setup and service for executive functions, corporate events, and business entertainment across New Zealand.',
    keywords: pageKeywords,
    images: [
      {
        url: '/2-parties-and-events-golf2go-portable-miniature-golf.jpg',
        width: 1200,
        height: 630,
        alt: 'Golf 2 Go - Professional Corporate Bookings',
      },
      {
        url: '/6-Forefront-400x400-Auckland-Forefront.jpg',
        width: 1200,
        height: 630,
        alt: 'Golf 2 Go - Premium Business Events',
      }
    ]
  })

  return {
    ...metadata,
    other: {
      structured_data: generateStructuredData('book'),
      'contact-email': 'admin@golf2go.co.nz',
      'contact-phone': '021849931',
      'business-hours': 'Monday to Sunday',
      'service-area': 'Palmerston North and nationwide',
      'response-time': '24-48 hours'
    }
  }
}
