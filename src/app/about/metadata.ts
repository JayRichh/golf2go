import { generateMetadata as baseGenerateMetadata } from '../seo.config'
import { generateStructuredData } from '~/utils/schema'

export async function generateMetadata() {
  const pageKeywords = [
    'portable mini golf company nz',
    'mini golf hire business',
    'professional golf service',
    'mobile golf provider',
    'mini golf specialists',
    'portable golf experts',
    'mini golf rental company',
    'golf entertainment service',
    'mini putt professionals',
    'portable course provider',
    'mini golf experience',
    'golf setup service',
    'mobile entertainment company',
    'mini golf solutions',
    'portable golf business',
    // Location & Service
    'palmerston north golf hire',
    'nz mini golf service',
    'nationwide golf rental',
    'mobile golf setup nz',
    'professional golf hire',
    // Experience & Quality
    'experienced golf provider',
    'quality mini golf hire',
    'trusted golf service',
    'reliable golf rental',
    'premium golf solutions'
  ]

  const metadata = baseGenerateMetadata({
    title: 'About Golf 2 Go NZ | Professional Portable Mini Golf Provider',
    description: 'Leading provider of professional portable mini golf solutions in New Zealand. Based in Palmerston North, delivering premium mobile mini golf experiences nationwide since 2008.',
    keywords: pageKeywords,
    path: 'about',
    images: [
      {
        url: '/3-fun-portable-mini-golf.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Portable Mini Golf Service NZ',
      },
      {
        url: '/4-portable-miniature-golf.jpg',
        width: 1200,
        height: 630,
        alt: 'Mini Golf Hire Specialists NZ',
      },
      {
        url: '/8-work-function-fun-portable-mini-golf.jpg',
        width: 1200,
        height: 630,
        alt: 'Mobile Mini Golf Solutions Provider',
      }
    ]
  })

  const schemas = generateStructuredData('about', '/about')

  return {
    ...metadata,
    other: {
      ...metadata.other,
      'schema:BreadcrumbList': JSON.stringify(schemas[0]), // Breadcrumbs
      'schema:AboutPage': JSON.stringify(schemas[1]), // About schema
      'business-details': {
        'established': '2008',
        'location': 'Palmerston North, New Zealand',
        'service-area': 'Nationwide Coverage',
        'specialization': 'Professional Portable Mini Golf',
        'business-type': 'Entertainment Service Provider',
        'registration': 'New Zealand Registered Company',
        'industry': 'Mobile Entertainment Solutions'
      },
      'service-highlights': [
        'Professional Setup Service',
        'Nationwide Delivery',
        'Custom Course Configurations',
        'Full Event Support',
        'Professional Equipment',
        'Expert Installation',
        'Comprehensive Insurance'
      ],
      'business-values': [
        'Professional Service',
        'Quality Equipment',
        'Reliable Delivery',
        'Customer Satisfaction',
        'Safety First',
        'Environmental Responsibility',
        'Community Engagement'
      ],
      'experience-areas': [
        'Corporate Events',
        'Professional Functions',
        'Team Building',
        'Special Occasions',
        'School Events',
        'Community Festivals',
        'Private Parties'
      ],
      'contact-info': {
        'email': 'admin@golf2go.co.nz',
        'phone': '021849931',
        'hours': 'Monday to Sunday',
        'response': '24-48 hours',
        'booking-notice': '48 hours minimum',
        'support-hours': '7am - 9pm daily',
        'emergency-contact': 'Available for event support'
      },
      'certifications': [
        'Health and Safety Compliant',
        'Public Liability Insurance',
        'Professional Event Management',
        'Equipment Safety Certified'
      ]
    }
  }
}
