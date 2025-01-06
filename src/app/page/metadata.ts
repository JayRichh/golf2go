import { generateMetadata as baseGenerateMetadata } from '../seo.config'
import { generateStructuredData } from '~/utils/schema'

export async function generateMetadata() {
  const pageKeywords = [
    // NZ-Specific Terms
    'mini putt hire nz',
    'mini golf palmy',
    'mini putt rental nz',
    'kiwi mini golf hire',
    'aotearoa mini golf events',
    'mini golf manawatu',
    'mini putt welly',
    'mini golf akl',
    // Service Terms
    'mini golf hire nz',
    'portable mini golf hire nz',
    'mini golf setup nz',
    'portable mini golf new zealand',
    'portable mini golf palmerston north',
    'mini golf setup nz',
    // B2B/Corporate Terms
    'corporate event mini golf nz',
    'business function mini golf',
    'conference entertainment nz',
    'team building activities nz',
    'corporate entertainment palmy',
    'business event solutions nz',
    // Regional Coverage
    'north island mini golf hire',
    'south island mini golf events',
    'nationwide mini putt service',
    'mobile mini golf wellington',
    'portable mini golf auckland',
    'mini golf hire christchurch',
    // Service Features
    'mini golf setup',
    'mobile mini golf setup',
    'portable golf course rental',
    'event mini golf solutions',
    'mini golf event planning',
    'corporate entertainment packages'
  ]

  const metadata = baseGenerateMetadata({
    title: 'Mini Golf Hire NZ | Corporate Events & Team Building',
    description: 'Quality portable mini golf hire across New Zealand. Mobile mini putt setups for corporate events, team building & functions. Based in Palmerston North, serving nationwide. Trusted by Kiwi businesses.',
    keywords: pageKeywords,
    path: '',
    images: [
      {
        url: '/2-parties-and-events-golf2go-portable-miniature-golf.jpg',
        width: 1200,
        height: 630,
        alt: 'Mini Golf Setup NZ - Corporate Event',
      },
      {
        url: '/17-golf2go-portable-miniature-golf-close-up.jpg',
        width: 1200,
        height: 630,
        alt: 'Mini Putt Hire NZ - Course Setup',
      },
      {
        url: '/3-fun-portable-mini-golf.jpg',
        width: 1200,
        height: 630,
        alt: 'Corporate Mini Golf Events NZ',
      }
    ]
  })

  const schemas = generateStructuredData('home', '/')

  return {
    ...metadata,
    other: {
      ...metadata.other,
      'schema:Organization': JSON.stringify(schemas[0]), // Organization schema
      'business-type': 'Event Entertainment Service',
      'primary-service': 'Mini Golf Hire',
      'location': {
        'base': 'Palmerston North, New Zealand',
        'coverage': 'Nationwide Service',
        'regions': [
          'Manawatu-Whanganui',
          'Wellington Region',
          'Auckland Area',
          'Canterbury',
          'Bay of Plenty',
          'Hawke\'s Bay'
        ]
      },
      'service-highlights': [
        'Corporate Events',
        'Full Setup Service',
        'Nationwide Coverage',
        'Team Building',
        'Business Functions',
        'Conference Activities'
      ],
      'business-focus': {
        'primary': 'Corporate Entertainment',
        'specialties': [
          'Business Events',
          'Team Building',
          'Corporate Functions',
          'Conferences',
          'Trade Shows'
        ]
      },
      'contact-info': {
        'email': 'admin@golf2go.co.nz',
        'phone': '021849931',
        'hours': '7am - 9pm daily',
        'response': '24-48 hours',
        'booking-notice': '48 hours minimum'
      },
      'certifications': [
        'Liability Insurance',
        'Event Management',
        'Health & Safety',
        'GST Registered'
      ]
    }
  }
}
