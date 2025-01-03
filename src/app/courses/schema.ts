export const generateCoursesSchema = (baseUrl: string) => ({
  "@context": "https://schema.org",
  "@type": "ProductCollection",
  "@id": `${baseUrl}/courses#collection`,
  "name": "Premium Corporate Entertainment Solutions",
  "description": "Professional portable mini golf courses for corporate events and business functions",
  "url": `${baseUrl}/courses`,
  "provider": {
    "@type": "Organization",
    "name": "Golf 2 Go NZ",
    "url": baseUrl
  },
  "itemListElement": [
    {
      "@type": "Product",
      "name": "Hole in One Challenge",
      "description": "Premium single-hole setup perfect for corporate competitions and professional events",
      "brand": {
        "@type": "Brand",
        "name": "Golf 2 Go NZ"
      },
      "category": "Corporate Entertainment",
      "image": `${baseUrl}/2-parties-and-events-golf2go-portable-miniature-golf.jpg`,
      "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "NZD",
        "availability": "https://schema.org/InStock",
        "highPrice": "500",
        "lowPrice": "190",
        "offerCount": "3",
        "priceValidUntil": new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString()
      }
    },
    {
      "@type": "Product",
      "name": "Executive Course Package",
      "description": "Professional 9-hole course setup for premium corporate events and functions",
      "brand": {
        "@type": "Brand",
        "name": "Golf 2 Go NZ"
      },
      "category": "Corporate Entertainment",
      "image": `${baseUrl}/3-fun-portable-mini-golf.jpg`,
      "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "NZD",
        "availability": "https://schema.org/InStock",
        "highPrice": "2500",
        "lowPrice": "575",
        "offerCount": "5",
        "priceValidUntil": new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString()
      }
    }
  ]
});

export const generateCourseTypesSchema = (baseUrl: string) => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@type": "Product",
        "name": "Twin Hedges Premium Course",
        "description": "Professional 3.3m x 7.5m course with strategic hedge placements",
        "image": `${baseUrl}/1-Twin-Hedges-3-3m-x-75m.jpg`,
        "brand": {
          "@type": "Brand",
          "name": "Golf 2 Go NZ"
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 2,
      "item": {
        "@type": "Product",
        "name": "Bridge over the River Executive Course",
        "description": "Premium 3.3m x 9m course with elevated bridge section",
        "image": `${baseUrl}/19-Bridge-over-the-River-3-3m-x-9m.jpg`,
        "brand": {
          "@type": "Brand",
          "name": "Golf 2 Go NZ"
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 3,
      "item": {
        "@type": "Product",
        "name": "Multi Tunnels Professional Course",
        "description": "Advanced 2.8m x 9m course with multiple tunnel obstacles",
        "image": `${baseUrl}/15-Multi-tunnels-2-8m-x-9m.jpg`,
        "brand": {
          "@type": "Brand",
          "name": "Golf 2 Go NZ"
        }
      }
    }
  ],
  "numberOfItems": 3
});

export const generateServiceSchema = (baseUrl: string) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${baseUrl}/courses#service`,
  "name": "Professional Corporate Entertainment Solutions",
  "description": "Premium portable mini golf experiences for corporate events and business functions",
  "provider": {
    "@type": "Organization",
    "name": "Golf 2 Go NZ",
    "url": baseUrl
  },
  "areaServed": {
    "@type": "Country",
    "name": "New Zealand"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Corporate Entertainment Packages",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Corporate Events Package",
          "description": "Premium entertainment solutions for corporate functions"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Executive Functions Package",
          "description": "High-end entertainment for executive events"
        }
      }
    ]
  },
  "serviceType": "Corporate Entertainment",
  "termsOfService": `${baseUrl}/terms`
});
