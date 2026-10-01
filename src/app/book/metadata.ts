import { generateMetadata as baseGenerateMetadata } from '../seo.config'
import { imageSize } from '~/lib/site'

export async function generateMetadata() {
  return baseGenerateMetadata({
    title: 'Book Mini Golf Hire NZ | Get a Quote',
    description: 'Book portable mini golf & mini putt hire for your event. Flexible hire options and nationwide delivery from $190. Based in Palmerston North, serving all NZ.',
    path: 'book',
    images: [
      {
        url: '/2-parties-and-events-golf2go-portable-miniature-golf.jpg',
        ...imageSize('/2-parties-and-events-golf2go-portable-miniature-golf.jpg'),
        alt: 'Hire Professional Portable Mini Golf - Event Setup',
      },
      {
        url: '/6-Forefront-400x400-Auckland-Forefront.jpg',
        ...imageSize('/6-Forefront-400x400-Auckland-Forefront.jpg'),
        alt: 'Mini Golf Course Rental - Professional Installation',
      }
    ]
  })
}
