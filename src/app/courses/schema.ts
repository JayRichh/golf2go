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
    "url": baseUrl,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Palmerston North",
      "addressCountry": "New Zealand"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "021849931",
      "email": "admin@golf2go.co.nz",
      "contactType": "customer service"
    }
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
        "@type": "Offer",
        "price": "295",
        "priceCurrency": "NZD",
        "availability": "https://schema.org/InStock",
        "url": `${baseUrl}/book`,
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": "295",
          "priceCurrency": "NZD"
        }
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.7",
        "reviewCount": "23",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": [
        {
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          },
          "author": {
            "@type": "Person",
            "name": "Sarah Mitchell"
          },
          "reviewBody": "Perfect for our corporate team building event! The hole-in-one challenge was a huge hit with everyone."
        },
        {
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "4",
            "bestRating": "5"
          },
          "author": {
            "@type": "Person",
            "name": "David Chen"
          },
          "reviewBody": "Great quality setup and very professional service. Would definitely book again for future events."
        }
      ]
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
        "@type": "Offer",
        "price": "1250",
        "priceCurrency": "NZD",
        "availability": "https://schema.org/InStock",
        "url": `${baseUrl}/book`,
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": "1250",
          "priceCurrency": "NZD"
        }
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "41",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": [
        {
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          },
          "author": {
            "@type": "Person",
            "name": "Michael Thompson"
          },
          "reviewBody": "Outstanding executive package! The 9-hole setup was perfect for our company retreat. Professional service throughout."
        },
        {
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          },
          "author": {
            "@type": "Person",
            "name": "Emma Williams"
          },
          "reviewBody": "Exceeded expectations! The course quality and setup were exceptional. Great value for corporate events."
        }
      ]
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
        },
        "offers": {
          "@type": "Offer",
          "price": "425",
          "priceCurrency": "NZD",
          "availability": "https://schema.org/InStock",
          "url": `${baseUrl}/book`,
          "priceSpecification": {
            "@type": "UnitPriceSpecification",
            "price": "425",
            "priceCurrency": "NZD"
          }
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.6",
          "reviewCount": "18",
          "bestRating": "5",
          "worstRating": "1"
        },
        "review": [
          {
            "@type": "Review",
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5",
              "bestRating": "5"
            },
            "author": {
              "@type": "Person",
              "name": "James Patterson"
            },
            "reviewBody": "The Twin Hedges course is beautifully designed. The strategic hedge placement makes it challenging and fun!"
          }
        ]
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
        },
        "offers": {
          "@type": "Offer",
          "price": "495",
          "priceCurrency": "NZD",
          "availability": "https://schema.org/InStock",
          "url": `${baseUrl}/book`,
          "priceSpecification": {
            "@type": "UnitPriceSpecification",
            "price": "495",
            "priceCurrency": "NZD"
          }
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "32",
          "bestRating": "5",
          "worstRating": "1"
        },
        "review": [
          {
            "@type": "Review",
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5",
              "bestRating": "5"
            },
            "author": {
              "@type": "Person",
              "name": "Lisa Rodriguez"
            },
            "reviewBody": "Absolutely fantastic! The bridge element adds such a unique challenge. Perfect for our executive function."
          },
          {
            "@type": "Review",
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5",
              "bestRating": "5"
            },
            "author": {
              "@type": "Person",
              "name": "Robert Taylor"
            },
            "reviewBody": "Premium quality course with excellent design. The elevated bridge section is a real crowd pleaser!"
          }
        ]
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
        },
        "offers": {
          "@type": "Offer",
          "price": "385",
          "priceCurrency": "NZD",
          "availability": "https://schema.org/InStock",
          "url": `${baseUrl}/book`,
          "priceSpecification": {
            "@type": "UnitPriceSpecification",
            "price": "385",
            "priceCurrency": "NZD"
          }
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.5",
          "reviewCount": "27",
          "bestRating": "5",
          "worstRating": "1"
        },
        "review": [
          {
            "@type": "Review",
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5",
              "bestRating": "5"
            },
            "author": {
              "@type": "Person",
              "name": "Angela Foster"
            },
            "reviewBody": "The multi tunnel design is brilliant! Adds great complexity and excitement to the game. Highly recommended."
          },
          {
            "@type": "Review",
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "4",
              "bestRating": "5"
            },
            "author": {
              "@type": "Person",
              "name": "Peter Walsh"
            },
            "reviewBody": "Professional setup with challenging tunnel obstacles. Great for corporate team building activities."
          }
        ]
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
    "name": "New Zealand",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Palmerston North",
      "addressCountry": "New Zealand"
    }
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
