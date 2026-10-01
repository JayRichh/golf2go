import { generateMetadata as baseGenerateMetadata } from '../seo.config'
import { imageSize } from '~/lib/site'

export async function generateMetadata() {
  return baseGenerateMetadata({
    title: 'Mini Putt & Portable Mini Golf Hire NZ',
    path: '',
    images: [
      {
        url: '/2-parties-and-events-golf2go-portable-miniature-golf.jpg',
        ...imageSize('/2-parties-and-events-golf2go-portable-miniature-golf.jpg'),
        alt: 'Mini Golf Setup NZ - Corporate Event',
      },
      {
        url: '/17-golf2go-portable-miniature-golf-close-up.jpg',
        ...imageSize('/17-golf2go-portable-miniature-golf-close-up.jpg'),
        alt: 'Mini Putt Hire NZ - Course Setup',
      },
      {
        url: '/3-fun-portable-mini-golf.jpg',
        ...imageSize('/3-fun-portable-mini-golf.jpg'),
        alt: 'Corporate Mini Golf Events NZ',
      }
    ]
  })
}
