import { generateMetadata as baseGenerateMetadata } from '../seo.config'
import { generateStructuredData } from '~/utils/sitemap'

export async function generateMetadata() {
  const pageKeywords = [
    'corporate entertainment solutions',
    'professional event services',
    'business function activities',
    'executive team building',
    'corporate mini golf events',
    'premium event entertainment',
    'professional event setup',
    'corporate activity solutions',
    'business event planning',
    'executive entertainment options',
    'Palmerston North corporate events',
    'NZ business entertainment',
    'professional function activities',
    'corporate team building',
    'premium entertainment solutions'
  ]

  const metadata = baseGenerateMetadata({
    title: 'Professional Corporate Entertainment Solutions',
    description: 'Premium corporate entertainment and event solutions provider in New Zealand. Professional setup and nationwide service for business functions, corporate events, and executive team building activities.',
    keywords: pageKeywords,
    images: [
      {
        url: '/2-parties-and-events-golf2go-portable-miniature-golf.jpg',
        width: 1200,
        height: 630,
        alt: 'Golf 2 Go - Professional Corporate Events',
      },
      {
        url: '/17-golf2go-portable-miniature-golf-close-up.jpg',
        width: 1200,
        height: 630,
        alt: 'Golf 2 Go - Premium Business Solutions',
      },
      {
        url: '/3-fun-portable-mini-golf.jpg',
        width: 1200,
        height: 630,
        alt: 'Golf 2 Go - Executive Event Setup',
      }
    ]
  })

  return {
    ...metadata,
    other: {
      structured_data: generateStructuredData('home')
    }
  }
}
