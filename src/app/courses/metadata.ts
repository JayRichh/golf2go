import { generateMetadata as baseGenerateMetadata } from '../seo.config'
import { generateStructuredData } from '~/utils/schema'

export async function generateMetadata() {
  const pageKeywords = [
    'portable mini golf courses nz',
    'portable mini golf layouts',
    'mini golf course hire nz',
    'portable golf course setup',
    'mobile mini golf courses',
    'professional mini golf holes',
    'portable putting courses',
    'mini golf course rental nz',
    'portable golf obstacles',
    'mini golf setup options',
    'palmerston north mini golf',
    'nz portable golf courses',
    'mini golf course designs',
    'portable golf configurations',
    'professional course layouts',
    'mini putt course hire',
    'putt putt course rental',
    'portable crazy golf',
    'mobile putting green',
    'temporary golf course'
  ]

  const metadata = baseGenerateMetadata({
    title: 'Portable Mini Golf Courses NZ | Professional Course Layouts',
    description: 'Explore our professional portable mini golf courses available for hire in NZ. From single hole setups to full course configurations. Premium portable mini golf solutions based in Palmerston North.',
    keywords: pageKeywords,
    path: 'courses',
    images: [
      {
        url: '/1-Twin-Hedges-3-3m-x-75m.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Portable Mini Golf Course - Twin Hedges Layout',
      },
      {
        url: '/15-Multi-tunnels-2-8m-x-9m.jpg',
        width: 1200,
        height: 630,
        alt: 'Portable Mini Golf Course NZ - Multi Tunnels Setup',
      },
      {
        url: '/19-Bridge-over-the-River-3-3m-x-9m.jpg',
        width: 1200,
        height: 630,
        alt: 'Mobile Mini Golf Course - Bridge Challenge Layout',
      },
      {
        url: '/12-Slalom-2-8m-x-9m.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Mini Golf Course - Slalom Configuration',
      }
    ]
  })

  const schemas = generateStructuredData('courses', '/courses')

  return {
    ...metadata,
    other: {
      ...metadata.other,
      'schema:BreadcrumbList': JSON.stringify(schemas[0]), // Breadcrumbs
      'schema:SportsActivityLocation': JSON.stringify(schemas[1]), // Course schema
      'course-types': [
        'Single Hole Setup (3.3m x 7.5m)',
        'Double Course Layout (2.8m x 9m)',
        'Triple Hole Configuration (3.4m x 9m)',
        'Full Course Setup (Multiple Layouts)'
      ],
      'setup-options': 'Indoor and Outdoor Configurations',
      'price-range': 'From $190 NZD',
      'delivery-area': 'Nationwide Service Available',
      'course-features': [
        'Professional Grade Equipment',
        'Custom Layout Options',
        'Full Setup Service',
        'Event Management Support'
      ]
    }
  }
}
