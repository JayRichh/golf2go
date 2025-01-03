import { generateMetadata as baseGenerateMetadata } from '../seo.config'
import { generateStructuredData } from '~/utils/schema'

export async function generateMetadata() {
  const pageKeywords = [
    'mini golf hire terms',
    'portable golf conditions',
    'mini golf rental terms',
    'golf hire agreement',
    'portable course booking',
    'mini golf hire policy',
    'golf rental conditions',
    'event booking terms',
    'mini golf cancellation',
    'portable golf hire',
    'golf setup terms',
    'mini golf service',
    'rental agreement nz',
    'hire conditions',
    'booking policy',
    // Service Terms
    'setup requirements',
    'delivery conditions',
    'payment terms',
    'cancellation policy',
    'hire duration',
    // Location Terms
    'palmerston north hire',
    'nz rental terms',
    'nationwide service',
    'delivery areas',
    'service locations'
  ]

  const metadata = baseGenerateMetadata({
    title: 'Terms & Conditions | Portable Mini Golf Hire NZ',
    description: 'Clear terms and conditions for portable mini golf hire in New Zealand. Professional service terms, booking conditions, and hire agreements for our mobile mini golf solutions.',
    keywords: pageKeywords,
    images: [
      {
        url: '/4-portable-miniature-golf.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Mini Golf Hire Terms NZ',
      }
    ]
  })

  return {
    ...metadata,
    other: {
      structured_data: generateStructuredData('terms'),
      'document-info': {
        'version': '2025-26',
        'last-updated': new Date().toISOString(),
        'pdf-version': '/TERMS AND CONDITIONS OF HIRE 2025-26.pdf',
        'jurisdiction': 'New Zealand'
      },
      'key-sections': [
        'Hire Agreement',
        'Booking Conditions',
        'Payment Terms',
        'Cancellation Policy',
        'Setup Requirements',
        'Delivery Terms',
        'Insurance Coverage',
        'Safety Guidelines'
      ],
      'service-terms': {
        'minimum-hire': '2 hours',
        'setup-time': '1 hour before event',
        'payment-terms': 'Deposit required at booking',
        'cancellation-notice': '48 hours',
        'weather-policy': 'Wet weather options available'
      },
      'contact-info': {
        'email': 'admin@golf2go.co.nz',
        'phone': '021849931',
        'business-hours': 'Monday to Sunday',
        'response-time': '24-48 hours'
      }
    }
  }
}
