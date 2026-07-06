import { generateMetadata as baseGenerateMetadata } from '../seo.config'

export async function generateMetadata() {
  const metadata = baseGenerateMetadata({
    title: 'Mini Putt & Portable Mini Golf Hire NZ',
    description: 'Professional mini putt and portable mini golf hire across New Zealand. Indoor mini golf Palmerston North, mini golf Wellington, New Plymouth mini golf services. Mobile mini putt setup for corporate events nationwide.',
    path: '',
    images: [
      {
        url: '/2-parties-and-events-golf2go-portable-miniature-golf.jpg',
        width: 1200,
        height: 630,
        alt: 'Mini Golf Setup NZ - Corporate Event',
      },
      {
        url: '/17-golf2go-portable-miniature-golf-close-up.jpg',
        width: 1200,
        height: 630,
        alt: 'Mini Putt Hire NZ - Course Setup',
      },
      {
        url: '/3-fun-portable-mini-golf.jpg',
        width: 1200,
        height: 630,
        alt: 'Corporate Mini Golf Events NZ',
      }
    ]
  })

  return {
    ...metadata,
    other: {
      ...metadata.other,
      'business-type': 'Event Entertainment Service',
      'primary-service': 'Mini Golf Hire',
      'location-base': 'Palmerston North, New Zealand',
      'location-coverage': 'Nationwide Service',
      'service-regions': 'Manawatu-Whanganui, Wellington Region, Auckland Area, Canterbury, Bay of Plenty, Hawkes Bay',
      'service-highlights': 'Corporate Events, Full Setup Service, Nationwide Coverage, Team Building, Business Functions, Conference Activities',
      'business-focus': 'Corporate Entertainment',
      'business-specialties': 'Business Events, Team Building, Corporate Functions, Conferences, Trade Shows',
      'contact-email': 'admin@golf2go.co.nz',
      'contact-phone': '021849931',
      'business-hours': '7am - 9pm daily',
      'response-time': '24-48 hours',
      'booking-notice': '48 hours minimum',
      'certifications': 'Liability Insurance, Event Management, Health & Safety, GST Registered'
    }
  }
}
