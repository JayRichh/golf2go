import { generateMetadata as baseGenerateMetadata } from '../seo.config'
import { generateStructuredData } from '~/utils/schema'

export async function generateMetadata() {
  const pageKeywords = [
    'hire portable mini golf nz',
    'book mini golf course',
    'rent mini golf setup',
    'mini golf hire prices',
    'portable golf booking',
    'mini golf rental cost',
    'book putt putt course',
    'mini golf hire rates',
    'portable golf quotes',
    'mini golf booking nz',
    'hire mini putt course',
    'rent portable golf',
    'mini golf setup cost',
    'book golf entertainment',
    'portable golf hire',
    'mini golf packages',
    'golf course rental',
    'event golf booking',
    'mobile golf hire',
    'mini golf reservations',
    // Location-specific
    'palmerston north mini golf hire',
    'manawatu mini golf rental',
    'nz mini golf bookings',
    'portable golf north island',
    'mini golf hire near me'
  ]

  const metadata = baseGenerateMetadata({
    title: 'Book Portable Mini Golf NZ | Professional Course Hire',
    description: 'Book our professional portable mini golf courses for your event. Easy online booking, flexible hire options, and nationwide delivery. Based in Palmerston North, serving all NZ.',
    keywords: pageKeywords,
    images: [
      {
        url: '/2-parties-and-events-golf2go-portable-miniature-golf.jpg',
        width: 1200,
        height: 630,
        alt: 'Hire Professional Portable Mini Golf - Event Setup',
      },
      {
        url: '/6-Forefront-400x400-Auckland-Forefront.jpg',
        width: 1200,
        height: 630,
        alt: 'Mini Golf Course Rental - Professional Installation',
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
      'response-time': '24-48 hours',
      'booking-options': [
        'Single Hole Hire',
        'Multi-Course Setup',
        'Full Event Package',
        'Custom Configurations'
      ],
      'hire-includes': [
        'Professional Setup',
        'Equipment Provided',
        'Delivery Service',
        'Event Support'
      ],
      'payment-methods': [
        'Bank Transfer',
        'Invoice Payment',
        'Corporate Billing'
      ],
      'hire-duration': 'Flexible rental periods available',
      'delivery-info': 'Nationwide delivery and setup service'
    }
  }
}
