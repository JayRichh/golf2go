import { generateMetadata as baseGenerateMetadata } from '../seo.config'
import { generateStructuredData } from '~/utils/sitemap'

export async function generateMetadata() {
  const pageKeywords = [
    'mini golf event photos',
    'corporate event gallery',
    'mini golf function images',
    'event success stories',
    'corporate party photos',
    'team building events',
    'mini golf setup gallery',
    'event venue photos',
    'corporate function gallery',
    'mini golf party images',
    'event planning inspiration',
    'corporate event ideas',
    'mini golf event examples',
    'professional event setups',
    'corporate entertainment photos'
  ]

  const metadata = baseGenerateMetadata({
    title: 'Event Gallery & Success Stories | Corporate Mini Golf Events',
    description: 'Browse our extensive portfolio of successful mini golf events across New Zealand. View professional setups for corporate functions, team building events, and custom course configurations. Get inspired for your next event.',
    keywords: pageKeywords,
    images: [
      {
        url: '/3-fun-portable-mini-golf.jpg',
        width: 1200,
        height: 630,
        alt: 'Golf 2 Go - Professional Event Setup with Custom Course Layout',
      },
      {
        url: '/8-work-function-fun-portable-mini-golf.jpg',
        width: 1200,
        height: 630,
        alt: 'Golf 2 Go - Corporate Team Building Event in Action',
      },
      {
        url: '/17-golf2go-portable-miniature-golf-close-up.jpg',
        width: 1200,
        height: 630,
        alt: 'Golf 2 Go - Premium Course Features and Professional Setup',
      },
      {
        url: '/2-parties-and-events-golf2go-portable-miniature-golf.jpg',
        width: 1200,
        height: 630,
        alt: 'Golf 2 Go - Large Scale Corporate Event Configuration',
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
