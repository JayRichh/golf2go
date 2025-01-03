import { generateMetadata as baseGenerateMetadata } from '../seo.config'
import { generateStructuredData } from '~/utils/sitemap'

export async function generateMetadata() {
  const pageKeywords = [
    'corporate entertainment terms',
    'professional event policies',
    'business function terms',
    'executive event conditions',
    'corporate booking terms',
    'professional service agreement',
    'business event terms',
    'corporate function policies',
    'event booking conditions',
    'professional hire terms',
    'Palmerston North events',
    'NZ corporate entertainment',
    'business service terms',
    'corporate event policies',
    'professional booking terms'
  ]

  const metadata = baseGenerateMetadata({
    title: 'Terms and Conditions | Professional Corporate Entertainment',
    description: 'Professional terms and conditions for corporate entertainment and business event services. Clear policies for premium event solutions, professional setups, and executive function bookings.',
    keywords: pageKeywords,
    images: [
      {
        url: '/4-portable-miniature-golf.jpg',
        width: 1200,
        height: 630,
        alt: 'Golf 2 Go - Professional Corporate Terms',
      }
    ]
  })

  return {
    ...metadata,
    other: {
      structured_data: generateStructuredData('terms'),
      'pdf-version': '/TERMS AND CONDITIONS OF HIRE 2025-26.pdf'
    }
  }
}
