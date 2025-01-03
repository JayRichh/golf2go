import { generateMetadata as baseGenerateMetadata } from '../seo.config'
import { generateStructuredData } from '~/utils/sitemap'

export async function generateMetadata() {
  const pageKeywords = [
    'portable mini golf hire NZ',
    'mobile mini golf rental',
    'corporate event entertainment',
    'professional mini golf setup',
    'event activity solutions',
    'mini golf party hire',
    'corporate function activities',
    'team building mini golf',
    'portable entertainment hire',
    'event planning services'
  ]

  const metadata = baseGenerateMetadata({
    title: 'Premium Portable Mini Golf Solutions',
    description: 'New Zealand\'s leading portable mini golf rental service. Professional setup and delivery nationwide for corporate events, parties, and special occasions. Transform your event with our premium mini golf solutions.',
    keywords: pageKeywords,
    images: [
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
        alt: 'Golf 2 Go - Premium Course Details',
      },
      {
        url: '/3-fun-portable-mini-golf.jpg',
        width: 1200,
        height: 630,
        alt: 'Golf 2 Go - Corporate Event Setup',
      }
    ]
  })

  return {
    ...metadata,
    other: {
      'google-site-verification': 'your-verification-code',
      structured_data: generateStructuredData('home')
    }
  }
}
