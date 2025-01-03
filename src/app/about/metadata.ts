import { generateMetadata as baseGenerateMetadata } from '../seo.config'
import { generateStructuredData } from '~/utils/sitemap'

export async function generateMetadata() {
  const pageKeywords = [
    'professional entertainment provider',
    'corporate event specialists',
    'business entertainment experts',
    'executive event solutions',
    'premium corporate services',
    'professional event management',
    'corporate entertainment company',
    'business function specialists',
    'Palmerston North corporate events',
    'NZ business entertainment',
    'professional event solutions',
    'corporate service provider',
    'executive entertainment experts',
    'premium business solutions',
    'corporate event management'
  ]

  const metadata = baseGenerateMetadata({
    title: 'About Golf 2 Go | Professional Corporate Entertainment Solutions',
    description: 'Leading provider of premium corporate entertainment and professional event solutions in New Zealand. Based in Palmerston North, delivering executive-grade entertainment experiences for business functions nationwide.',
    keywords: pageKeywords,
    images: [
      {
        url: '/3-fun-portable-mini-golf.jpg',
        width: 1200,
        height: 630,
        alt: 'Golf 2 Go - Professional Corporate Entertainment',
      },
      {
        url: '/4-portable-miniature-golf.jpg',
        width: 1200,
        height: 630,
        alt: 'Golf 2 Go - Premium Business Solutions',
      },
      {
        url: '/8-work-function-fun-portable-mini-golf.jpg',
        width: 1200,
        height: 630,
        alt: 'Golf 2 Go - Executive Event Solutions',
      }
    ]
  })

  return {
    ...metadata,
    other: {
      structured_data: generateStructuredData('about')
    }
  }
}
