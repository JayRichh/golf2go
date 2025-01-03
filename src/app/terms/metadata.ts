import { generateMetadata as baseGenerateMetadata } from '../seo.config'
import { generateStructuredData } from '~/utils/sitemap'

export async function generateMetadata() {
  const pageKeywords = [
    'event hire terms',
    'booking conditions NZ',
    'event service agreement',
    'hire terms and conditions',
    'event booking policy',
    'service guarantees',
    'cancellation policy',
    'event insurance coverage',
    'booking requirements',
    'payment terms',
    'service conditions',
    'event hire agreement',
    'liability coverage',
    'safety requirements',
    'professional standards'
  ]

  const metadata = baseGenerateMetadata({
    title: 'Terms & Conditions | Professional Event Hire Agreement',
    description: 'Clear and comprehensive terms for Golf 2 Go NZ event bookings. Including hire conditions, safety requirements, insurance coverage, and service guarantees for all corporate events and functions.',
    keywords: pageKeywords,
    images: [
      {
        url: '/2-parties-and-events-golf2go-portable-miniature-golf.jpg',
        width: 1200,
        height: 630,
        alt: 'Golf 2 Go - Professional Event Services',
      }
    ]
  })

  return {
    ...metadata,
    other: {
      structured_data: generateStructuredData('terms'),
      'document-type': 'Terms and Conditions',
      'last-updated': '2025-26',
      'legal-compliance': 'NZ Consumer Law',
      'coverage-type': 'Event Services Agreement'
    }
  }
}
