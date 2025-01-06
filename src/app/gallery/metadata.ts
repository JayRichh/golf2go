import { generateMetadata as baseGenerateMetadata } from '../seo.config'
import { generateStructuredData } from '~/utils/schema'

export async function generateMetadata() {
  const pageKeywords = [
    'portable mini golf photos nz',
    'mini golf course pictures',
    'portable golf setup images',
    'mini golf event gallery',
    'portable mini golf examples',
    'mini golf course photos',
    'mobile golf setup gallery',
    'mini golf hire photos',
    'portable golf layouts',
    'mini golf setup pictures',
    'mini putt course images',
    'putt putt setup photos',
    'portable golf gallery',
    'mini golf event photos',
    'golf course setups nz',
    'mini golf installations',
    'portable golf events',
    'mini golf configurations',
    'mobile golf layouts',
    'mini golf setup examples'
  ]

  const metadata = baseGenerateMetadata({
    title: 'Portable Mini Golf Gallery NZ | Course Setup Examples',
    description: 'View our portable mini golf course setups and layouts. Professional mini golf installations for events across New Zealand. Based in Palmerston North, available nationwide.',
    keywords: pageKeywords,
    path: 'gallery',
    images: [
      {
        url: '/2-parties-and-events-golf2go-portable-miniature-golf.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Portable Mini Golf Setup - Event Configuration',
      },
      {
        url: '/6-Forefront-400x400-Auckland-Forefront.jpg',
        width: 1200,
        height: 630,
        alt: 'Mini Golf Course Setup - Professional Installation',
      },
      {
        url: '/8-work-function-fun-portable-mini-golf.jpg',
        width: 1200,
        height: 630,
        alt: 'Portable Mini Golf Layout - Event Setup',
      },
      {
        url: '/30-Tiger-400x400-Golf-Tournaments.jpg',
        width: 1200,
        height: 630,
        alt: 'Mini Golf Course Configuration - Professional Setup',
      }
    ]
  })

  const schemas = generateStructuredData('gallery', '/gallery')

  return {
    ...metadata,
    other: {
      ...metadata.other,
      'schema:BreadcrumbList': JSON.stringify(schemas[0]), // Breadcrumbs
      'schema:ImageGallery': JSON.stringify(schemas[1]), // Gallery schema
      'gallery-categories': [
        'Course Layouts',
        'Setup Examples',
        'Event Configurations',
        'Installation Photos'
      ],
      'featured-setups': [
        'Twin Hedges Layout',
        'Multi Tunnels Setup',
        'Bridge Challenge Course',
        'Slalom Configuration'
      ],
      'image-types': [
        'Course Photos',
        'Setup Images',
        'Event Pictures',
        'Installation Gallery'
      ],
      'setup-locations': 'Indoor and Outdoor Venues Across NZ',
      'image-count': '30+',
      'last-updated': new Date().toISOString().split('T')[0],
      'gallery-features': [
        'Professional Course Photos',
        'Event Setup Documentation',
        'Installation Process',
        'Venue Examples'
      ]
    }
  }
}
