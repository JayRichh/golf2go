import { generateMetadata as baseGenerateMetadata } from '../seo.config'
import { generateStructuredData } from '~/utils/schema'

export async function generateMetadata() {
  const pageKeywords = [
    // NZ-Specific Terms
    'mini putt hire nz',
    'mini putt terms nz',
    'kiwi event hire',
    'aotearoa event entertainment',
    'nz corporate activities',
    'mini putt rental nz',
    // Business Terms
    'mini golf hire terms',
    'portable golf conditions',
    'mini golf rental terms',
    'golf hire agreement',
    'portable course booking',
    'mini golf hire policy',
    'golf rental conditions',
    'event booking terms',
    // Regional Terms
    'palmerston north hire',
    'manawatu event hire',
    'north island entertainment',
    'wellington region activities',
    'auckland corporate events',
    // Service Terms
    'setup requirements nz',
    'delivery conditions',
    'payment terms',
    'cancellation policy',
    'hire duration',
    // B2B Specific
    'corporate event terms',
    'business function hire',
    'company event booking',
    'trade show entertainment',
    'conference activities nz'
  ]

  const metadata = baseGenerateMetadata({
    title: 'Terms & Conditions | Mini Golf Hire NZ',
    description: 'Clear terms for mini golf hire in New Zealand. Simple booking conditions and hire agreements for mobile mini golf solutions. Trusted by businesses nationwide.',
    keywords: pageKeywords,
    path: 'terms',
    images: [
      {
        url: '/4-portable-miniature-golf.jpg',
        width: 1200,
        height: 630,
        alt: 'Mini Golf Hire Terms NZ',
      }
    ]
  })

  const schemas = generateStructuredData('terms', '/terms')

  return {
    ...metadata,
    other: {
      ...metadata.other,
      'schema:BreadcrumbList': JSON.stringify(schemas[0]), // Breadcrumbs
      'schema:WebPage': JSON.stringify(schemas[1]), // Terms schema
      'document-info': {
        'version': '2025-26',
        'last-updated': new Date().toISOString(),
        'pdf-version': '/TERMS AND CONDITIONS OF HIRE 2025-26.pdf',
        'jurisdiction': 'New Zealand',
        'governing-law': 'New Zealand Law',
        'gst-registered': 'Yes',
        'business-registration': 'NZ Registered Company'
      },
      'key-sections': [
        'Hire Agreement',
        'Booking Conditions',
        'Payment Terms',
        'Cancellation Policy',
        'Setup Requirements',
        'Delivery Terms',
        'Insurance Coverage',
        'Safety Guidelines',
        'GST Information',
        'Privacy Policy'
      ],
      'service-terms': {
        'minimum-hire': '2 hours',
        'setup-time': '1 hour before event',
        'payment-terms': 'Deposit required at booking',
        'cancellation-notice': '48 hours',
        'weather-policy': 'Wet weather options available',
        'gst-handling': 'All prices include GST',
        'insurance-coverage': 'Full liability insurance included',
        'damage-policy': 'Coverage details'
      },
      'business-coverage': {
        'regions': [
          'Manawatu-Whanganui',
          'Wellington Region',
          'Auckland Area',
          'Bay of Plenty',
          'Canterbury',
          'Hawke\'s Bay',
          'Nationwide Service Available'
        ],
        'service-radius': 'All major NZ centers',
        'delivery-options': 'Nationwide delivery available'
      },
      'contact-info': {
        'email': 'admin@golf2go.co.nz',
        'phone': '021849931',
        'business-hours': 'Monday to Sunday',
        'response-time': '24-48 hours',
        'emergency-contact': 'Available for event support',
        'physical-location': 'Palmerston North, NZ'
      }
    }
  }
}
