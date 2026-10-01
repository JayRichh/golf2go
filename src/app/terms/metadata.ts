import { generateMetadata as baseGenerateMetadata } from '../seo.config'
import { imageSize } from '~/lib/site'

export async function generateMetadata() {
  return baseGenerateMetadata({
    title: 'Terms & Conditions',
    description: 'Terms and conditions for portable mini golf and mini putt hire in New Zealand — simple booking conditions and hire agreements. Trusted nationwide.',
    path: 'terms',
    images: [
      {
        url: '/4-portable-miniature-golf.jpg',
        ...imageSize('/4-portable-miniature-golf.jpg'),
        alt: 'Mini Golf Hire Terms NZ',
      }
    ]
  })
}
