import { generateMetadata as baseGenerateMetadata } from '../seo.config'
import { generateStructuredData } from '~/utils/sitemap'

export async function generateMetadata() {
  const pageKeywords = [
    'mini golf booking NZ',
    'event hire booking',
    'corporate event reservation',
    'mini golf event planning',
    'party booking system',
    'corporate function hire',
    'team building reservation',
    'event equipment booking',
    'mini golf hire rates',
    'corporate event packages',
    'party activity booking',
    'professional event hire',
    'online event booking',
    'instant quote system',
    'event date availability'
  ]

  const metadata = baseGenerateMetadata({
    title: 'Book Now | Professional Mini Golf Event Hire',
    description: 'Reserve your premium portable mini golf experience today. Simple online booking for corporate events, team building activities, parties, and special occasions throughout New Zealand. Instant quotes and availability checking.',
    keywords: pageKeywords,
    images: [
      {
        url: '/8-work-function-fun-portable-mini-golf.jpg',
        width: 1200,
        height: 630,
        alt: 'Golf 2 Go - Professional Corporate Event Setup',
      },
      {
        url: '/2-parties-and-events-golf2go-portable-miniature-golf.jpg',
        width: 1200,
        height: 630,
        alt: 'Golf 2 Go - Premium Event Configuration',
      },
      {
        url: '/3-fun-portable-mini-golf.jpg',
        width: 1200,
        height: 630,
        alt: 'Golf 2 Go - Custom Event Layout',
      }
    ]
  })

  return {
    ...metadata,
    other: {
      structured_data: generateStructuredData('booking'),
      'booking-availability': 'realtime',
      'pricing-display': 'dynamic',
      'response-time': 'instant'
    }
  }
}
