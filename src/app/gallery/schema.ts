import { ORG_ID } from '~/lib/site';

export const generateGallerySchema = (baseUrl: string, images: any[]) => ({
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  "@id": `${baseUrl}/gallery#gallery`,
  "name": "Golf 2 Go NZ Professional Event Gallery",
  "description": "Premium corporate entertainment and event solutions gallery showcasing professional setups and successful events",
  "publisher": {
    "@id": ORG_ID
  },
  "image": images.map(img => ({
    "@type": "ImageObject",
    "@id": `${baseUrl}${img.src}#image`,
    "url": `${baseUrl}${img.src}`,
    "name": img.title,
    "description": img.alt,
    "caption": img.title,
    "contentUrl": `${baseUrl}${img.src}`,
    "width": "1200",
    "height": "800",
    "encodingFormat": "image/jpeg",
    "representativeOfPage": img.id === "2",
    "thumbnail": {
      "@type": "ImageObject",
      "url": `${baseUrl}${img.src}`,
      "width": "300",
      "height": "200"
    }
  })),
  "about": {
    "@type": "Service",
    "name": "Corporate Entertainment Solutions",
    "description": "Professional portable mini golf and event entertainment services"
  },
  "keywords": [
    "corporate event gallery",
    "professional event photos",
    "premium entertainment solutions",
    "corporate function gallery",
    "event setup examples",
    "professional mini golf events",
    "corporate entertainment gallery",
    "business function photos",
    "executive event gallery",
    "premium event solutions"
  ],
  "mainEntity": {
    "@type": "CollectionPage",
    "name": "Professional Event Gallery",
    "description": "Showcase of premium corporate entertainment and event solutions",
    "primaryImageOfPage": {
      "@type": "ImageObject",
      "url": `${baseUrl}/2-parties-and-events-golf2go-portable-miniature-golf.jpg`
    },
    "provider": {
      "@id": ORG_ID
    }
  },
  "potentialAction": {
    "@type": "ViewAction",
    "target": `${baseUrl}/gallery`
  }
});

export const generateImageSchema = (baseUrl: string, image: any) => ({
  "@context": "https://schema.org",
  "@type": "ImageObject",
  "@id": `${baseUrl}${image.src}#image`,
  "url": `${baseUrl}${image.src}`,
  "name": image.title,
  "description": image.alt,
  "caption": image.title,
  "contentUrl": `${baseUrl}${image.src}`,
  "width": "1200",
  "height": "800",
  "encodingFormat": "image/jpeg",
  "author": {
    "@id": ORG_ID
  },
  "copyrightHolder": {
    "@id": ORG_ID
  },
  "copyrightYear": "2025",
  "license": `${baseUrl}/terms`
});
