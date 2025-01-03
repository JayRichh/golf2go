import { generateMetadata as baseGenerateMetadata } from '../seo.config'
import { generateStructuredData } from '~/utils/sitemap'

export async function generateMetadata() {
  const pageKeywords = [
    'corporate entertainment courses',
    'professional event solutions',
    'executive function layouts',
    'business event setups',
    'corporate activity designs',
    'premium entertainment configurations',
    'professional course layouts',
    'corporate function setups',
    'executive entertainment solutions',
    'business event courses',
    'corporate team building layouts',
    'professional entertainment designs',
    'premium event configurations',
    'executive function setups',
    'corporate entertainment solutions'
  ]

  const metadata = baseGenerateMetadata({
    title: 'Professional Corporate Entertainment Solutions | Premium Course Catalog',
    description: 'Discover our premium range of professional entertainment solutions for corporate events. Featuring executive-grade course designs including Twin Hedges Premium, Multi Tunnels Professional, and Bridge over the River Executive layouts. Perfect for corporate functions and business events.',
    keywords: pageKeywords,
    images: [
      {
        url: '/1-Twin-Hedges-3-3m-x-75m.jpg',
        width: 1200,
        height: 630,
        alt: 'Golf 2 Go - Premium Corporate Entertainment Solutions',
      },
      {
        url: '/15-Multi-tunnels-2-8m-x-9m.jpg',
        width: 1200,
        height: 630,
        alt: 'Golf 2 Go - Professional Business Event Setups',
      },
      {
        url: '/19-Bridge-over-the-River-3-3m-x-9m.jpg',
        width: 1200,
        height: 630,
        alt: 'Golf 2 Go - Executive Function Configurations',
      },
      {
        url: '/12-Slalom-2-8m-x-9m.jpg',
        width: 1200,
        height: 630,
        alt: 'Golf 2 Go - Premium Corporate Solutions',
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
