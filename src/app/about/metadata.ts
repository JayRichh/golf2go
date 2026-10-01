import { generateMetadata as baseGenerateMetadata } from '../seo.config'
import { imageSize } from '~/lib/site'

export async function generateMetadata() {
  return baseGenerateMetadata({
    title: 'About Us | Portable Mini Golf & Mini Putt Hire',
    description: 'New Zealand\'s first portable mini golf company. Based in Palmerston North, hiring out mini golf & mini putt courses for events nationwide since 2008.',
    path: 'about',
    images: [
      {
        url: '/3-fun-portable-mini-golf.jpg',
        ...imageSize('/3-fun-portable-mini-golf.jpg'),
        alt: 'Professional Portable Mini Golf Service NZ',
      },
      {
        url: '/4-portable-miniature-golf.jpg',
        ...imageSize('/4-portable-miniature-golf.jpg'),
        alt: 'Mini Golf Hire Specialists NZ',
      },
      {
        url: '/8-work-function-fun-portable-mini-golf.jpg',
        ...imageSize('/8-work-function-fun-portable-mini-golf.jpg'),
        alt: 'Mobile Mini Golf Solutions Provider',
      }
    ]
  })
}
