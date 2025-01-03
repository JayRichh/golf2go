import { generateMetadata as baseGenerateMetadata } from '../seo.config'
import { generateStructuredData } from '~/utils/schema'

export async function generateMetadata() {
  const pageKeywords = [
    'portable mini golf professional nz',
    'portable mini golf hire nz',
    'professional portable mini golf',
    'portable mini golf new zealand',
    'portable mini golf palmerston north',
    'portable mini golf setup nz',
    'portable mini golf events nz',
    'portable mini golf rental nz',
    'portable mini golf service nz',
    'portable mini golf solutions nz',
    'mini golf hire service',
    'professional mini golf events',
    'portable golf course rental',
    'mobile mini golf setup',
    'mini golf event solutions'
  ]

  const metadata = baseGenerateMetadata({
    title: 'Portable Mini Golf Professional NZ | Golf 2 Go',
    description: 'Professional portable mini golf hire service in New Zealand. Premium mobile mini golf setups for events and functions. Based in Palmerston North, serving nationwide.',
    keywords: pageKeywords,
    images: [
      {
        url: '/2-parties-and-events-golf2go-portable-miniature-golf.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Portable Mini Golf NZ - Event Setup',
      },
      {
        url: '/17-golf2go-portable-miniature-golf-close-up.jpg',
        width: 1200,
        height: 630,
        alt: 'Portable Mini Golf Hire NZ - Course Details',
      },
      {
        url: '/3-fun-portable-mini-golf.jpg',
        width: 1200,
        height: 630,
        alt: 'Mobile Mini Golf Setup NZ - Professional Service',
      }
    ]
  })

  return {
    ...metadata,
    other: {
      structured_data: generateStructuredData('home'),
      'business-type': 'Portable Mini Golf Service',
      'location': 'Palmerston North, New Zealand',
      'service-area': 'Nationwide',
      'contact-email': 'admin@golf2go.co.nz',
      'contact-phone': '021849931'
    }
  }
}
