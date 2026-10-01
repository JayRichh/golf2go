import { generateMetadata as baseGenerateMetadata } from '../seo.config'

export async function generateMetadata() {
  return baseGenerateMetadata({
    title: 'Mini Putt & Portable Mini Golf Hire NZ',
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
}
