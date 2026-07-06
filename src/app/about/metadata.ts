import { generateMetadata as baseGenerateMetadata } from '../seo.config'

export async function generateMetadata() {
  return baseGenerateMetadata({
    title: 'About Us | Portable Mini Golf & Mini Putt Hire',
    description: 'New Zealand\'s first portable mini golf company. Based in Palmerston North, hiring out mini golf & mini putt courses for events nationwide since 2008.',
    path: 'about',
    images: [
      {
        url: '/3-fun-portable-mini-golf.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Portable Mini Golf Service NZ',
      },
      {
        url: '/4-portable-miniature-golf.jpg',
        width: 1200,
        height: 630,
        alt: 'Mini Golf Hire Specialists NZ',
      },
      {
        url: '/8-work-function-fun-portable-mini-golf.jpg',
        width: 1200,
        height: 630,
        alt: 'Mobile Mini Golf Solutions Provider',
      }
    ]
  })
}
