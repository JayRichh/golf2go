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
    path: 'book',
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

  const schemas = generateStructuredData('book', '/book')

  return {
    ...metadata,
    other: {
      ...metadata.other,
      'schema:BreadcrumbList': JSON.stringify(schemas[0]), // Breadcrumbs
      'schema:Service': JSON.stringify(schemas[1]), // Service schema
      'booking-info': {
        'minimum-notice': '48 hours',
        'availability': '7 days a week',
        'service-hours': '7am - 9pm',
        'setup-time': '1-2 hours',
        'minimum-hire': '3 hours',
        'maximum-hire': 'No limit - multi-day available',
        'deposit-required': '20% to secure booking'
      },
      'pricing-info': {
        'base-rate': 'From $190 NZD',
        'duration': 'Per event/day',
        'delivery': 'Location-based rates',
        'setup-fee': 'Included in hire',
        'payment-terms': 'Balance due 7 days before event',
        'cancellation-policy': '48 hours notice required'
      },
      'booking-options': [
        'Single Hole Hire',
        'Multi-Course Setup',
        'Full Event Package',
        'Custom Configurations',
        'Extended Hire Periods',
        'Regular Booking Discounts'
      ],
      'hire-includes': [
        'Professional Setup',
        'Equipment Provided',
        'Delivery Service',
        'Event Support',
        'Safety Briefing',
        'Insurance Coverage',
        'Backup Equipment'
      ],
      'payment-methods': [
        'Bank Transfer',
        'Invoice Payment',
        'Corporate Billing',
        'Advance Deposit',
        'Split Payment Options'
      ],
      'service-area': {
        'primary': 'Palmerston North',
        'coverage': 'Nationwide',
        'delivery-zones': [
          'Manawatu Region',
          'Wellington Region',
          'Auckland Area',
          'All Major NZ Cities'
        ],
        'travel-fees': 'Location-based rates apply'
      },
      'event-types': [
        'Corporate Functions',
        'Team Building',
        'Private Parties',
        'School Events',
        'Community Festivals',
        'Trade Shows',
        'Product Launches'
      ],
      'support-info': {
        'email': 'admin@golf2go.co.nz',
        'phone': '021849931',
        'response-time': '24-48 hours',
        'emergency-support': 'Available during events',
        'setup-assistance': 'Professional team provided',
        'technical-support': 'On-call during hire period'
      }
    }
  }
}
