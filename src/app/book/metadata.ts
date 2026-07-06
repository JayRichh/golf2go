import { generateMetadata as baseGenerateMetadata } from '../seo.config'

export async function generateMetadata() {
  return baseGenerateMetadata({
    title: 'Book Mini Golf Hire NZ | Get a Quote',
    description: 'Book portable mini golf & mini putt hire for your event. Easy online booking, flexible hire options and nationwide delivery from $190. Based in Palmerston North, serving all NZ.',
    path: 'book',
    images: [
      {
        url: '/2-parties-and-events-golf2go-portable-miniature-golf.jpg',
        width: 1200,
        height: 630,
        alt: 'Hire Professional Portable Mini Golf - Event Setup',
      },
      {
        url: '/6-Forefront-400x400-Auckland-Forefront.jpg',
        width: 1200,
        height: 630,
        alt: 'Mini Golf Course Rental - Professional Installation',
      }
    ]
  })
}
