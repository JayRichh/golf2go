import { generateMetadata as baseGenerateMetadata } from '../seo.config'
import { generateStructuredData } from '~/utils/schema'

export async function generateMetadata() {
  const pageKeywords = [
    // PRIORITY Keywords from Search Console (0-click opportunities)
    'mini putt',
    'indoor mini golf palmerston north',
    'new plymouth mini golf',
    'mini golf wellington',
    'portable mini golf hire',
    // Location-Specific High Priority
    'mini golf palmerston north',
    'mini putt wellington',
    'portable mini golf wellington',
    'indoor mini golf wellington',
    'mini golf new plymouth',
    'mini putt new plymouth',
    'portable mini golf taranaki',
    'mini golf taranaki',
    // Service Variations
    'mini putt hire',
    'mini putt hire nz',
    'portable mini putt',
    'indoor mini putt',
    'mobile mini golf',
    'mini golf hire',
    'portable mini golf hire nz',
    'mini golf setup nz',
    'portable mini golf new zealand',
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
    title: 'Mini Putt & Portable Mini Golf Hire | Wellington, Palmerston North, New Plymouth',
    description: 'Professional mini putt and portable mini golf hire across New Zealand. Indoor mini golf Palmerston North, mini golf Wellington, New Plymouth mini golf services. Mobile mini putt setup for corporate events nationwide.',
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
      'schema:FAQ': JSON.stringify(schemas[1]), // FAQ schema
      'business-type': 'Event Entertainment Service',
      'primary-service': 'Mini Golf Hire',
      'location-base': 'Palmerston North, New Zealand',
      'location-coverage': 'Nationwide Service',
      'service-regions': 'Manawatu-Whanganui, Wellington Region, Auckland Area, Canterbury, Bay of Plenty, Hawkes Bay',
      'service-highlights': 'Corporate Events, Full Setup Service, Nationwide Coverage, Team Building, Business Functions, Conference Activities',
      'business-focus': 'Corporate Entertainment',
      'business-specialties': 'Business Events, Team Building, Corporate Functions, Conferences, Trade Shows',
      'contact-email': 'admin@golf2go.co.nz',
      'contact-phone': '021849931',
      'business-hours': '7am - 9pm daily',
      'response-time': '24-48 hours',
      'booking-notice': '48 hours minimum',
      'certifications': 'Liability Insurance, Event Management, Health & Safety, GST Registered'
    }
  }
}
