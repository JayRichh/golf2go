import { generateMetadata as baseGenerateMetadata } from '../seo.config'
import { generateStructuredData } from '~/utils/sitemap'

export async function generateMetadata() {
  const pageKeywords = [
    'Golf 2 Go NZ company',
    'mini golf business history',
    'professional event company',
    'NZ entertainment provider',
    'corporate event specialists',
    'event planning experts',
    'mini golf industry leader',
    'trusted event partner',
    'experienced event team',
    'event management company',
    'professional setup service',
    'nationwide event coverage',
    'quality entertainment provider',
    'established event company',
    'premium event solutions'
  ]

  const metadata = baseGenerateMetadata({
    title: 'About Us | Leading NZ Event Entertainment Provider',
    description: 'Golf 2 Go NZ - New Zealand\'s first and most trusted portable mini golf provider since 2008. Delivering premium entertainment solutions for corporate events, team building, and special occasions nationwide.',
    keywords: pageKeywords,
    images: [
      {
        url: '/6-Forefront-400x400-Auckland-Forefront.jpg',
        width: 1200,
        height: 630,
        alt: 'Golf 2 Go - Professional Event Team',
      },
      {
        url: '/30-Tiger-400x400-Golf-Tournaments.jpg',
        width: 1200,
        height: 630,
        alt: 'Golf 2 Go - Professional Tournament Setup',
      },
      {
        url: '/2-parties-and-events-golf2go-portable-miniature-golf.jpg',
        width: 1200,
        height: 630,
        alt: 'Golf 2 Go - Premium Event Solutions',
      }
    ]
  })

  return {
    ...metadata,
    other: {
      structured_data: generateStructuredData('about'),
      'business-type': 'Entertainment Service Provider',
      'year-established': '2008',
      'service-area': 'New Zealand Wide',
      'business-status': 'Industry Leader'
    }
  }
}
