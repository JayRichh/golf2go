import { generateMetadata as baseGenerateMetadata } from '../seo.config'
import { generateStructuredData } from '~/utils/sitemap'

export async function generateMetadata() {
  const pageKeywords = [
    'mini golf course designs',
    'portable golf courses',
    'Twin Hedges mini golf',
    'Bridge over the River course',
    'Multi Tunnels mini golf',
    'portable course layouts',
    'mini golf obstacles',
    'custom mini golf design',
    'professional golf setup',
    'event course layouts',
    'indoor mini golf courses',
    'outdoor mini golf setup',
    'challenging mini golf holes',
    'unique golf course features',
    'portable putting greens'
  ]

  const metadata = baseGenerateMetadata({
    title: 'Mini Golf Course Designs & Layouts | Professional Course Catalog',
    description: 'Explore our premium range of portable mini golf course layouts. From classic designs to challenging obstacles, featuring unique holes like Twin Hedges, Multi Tunnels, and Bridge over the River. Perfect for corporate events and functions.',
    keywords: pageKeywords,
    images: [
      {
        url: '/1-Twin-Hedges-3-3m-x-75m.jpg',
        width: 1200,
        height: 630,
        alt: 'Golf 2 Go - Twin Hedges Premium Course',
      },
      {
        url: '/15-Multi-tunnels-2-8m-x-9m.jpg',
        width: 1200,
        height: 630,
        alt: 'Golf 2 Go - Multi Tunnels Challenge Course',
      },
      {
        url: '/19-Bridge-over-the-River-3-3m-x-9m.jpg',
        width: 1200,
        height: 630,
        alt: 'Golf 2 Go - Bridge over the River Signature Course',
      },
      {
        url: '/12-Slalom-2-8m-x-9m.jpg',
        width: 1200,
        height: 630,
        alt: 'Golf 2 Go - Slalom Professional Course',
      }
    ]
  })

  return {
    ...metadata,
    other: {
      structured_data: generateStructuredData('courses')
    }
  }
}
