export const generateBookingSchema = (baseUrl: string) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${baseUrl}/book#service`,
  "name": "Portable Mini Golf & Mini Putt Hire",
  "serviceType": "Portable Mini Golf Hire",
  "provider": {
    "@type": "Organization",
    "@id": `${baseUrl}/#organization`,
    "name": "Golf 2 Go NZ",
    "url": baseUrl
  },
  "areaServed": {
    "@type": "Country",
    "name": "New Zealand"
  },
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "NZD",
    "availability": "https://schema.org/InStock",
    "lowPrice": "190",
    "highPrice": "2500",
    "offerCount": "4",
    "offers": [
      {
        "@type": "Offer",
        "name": "1 Hole Hire",
        "price": "190.00",
        "priceCurrency": "NZD",
        "description": "Single hole portable mini golf setup — ideal for the Hole in One Challenge"
      },
      {
        "@type": "Offer",
        "name": "3 Hole Hire",
        "price": "338.00",
        "priceCurrency": "NZD",
        "description": "3 hole portable mini golf course hire"
      },
      {
        "@type": "Offer",
        "name": "6 Hole Hire",
        "price": "455.00",
        "priceCurrency": "NZD",
        "description": "6 hole portable mini golf course hire"
      },
      {
        "@type": "Offer",
        "name": "9 Hole Course Hire",
        "price": "575.00",
        "priceCurrency": "NZD",
        "description": "Full 9 hole portable mini golf course hire"
      }
    ]
  },
  "potentialAction": {
    "@type": "ReserveAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": `${baseUrl}/book`,
      "inLanguage": "en-NZ",
      "actionPlatform": [
        "http://schema.org/DesktopWebPlatform",
        "http://schema.org/MobileWebPlatform"
      ]
    },
    "result": {
      "@type": "Reservation",
      "name": "Mini Golf Hire Booking"
    }
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Mini Golf Hire Options",
    "itemListElement": [
      {
        "@type": "OfferCatalog",
        "name": "Parties & Events",
        "description": "Portable mini golf hire for birthdays, parties, fundraisers and community events"
      },
      {
        "@type": "OfferCatalog",
        "name": "Corporate & Team Building",
        "description": "Mini putt hire for corporate functions, conferences and team building"
      },
      {
        "@type": "OfferCatalog",
        "name": "Schools & Fundraisers",
        "description": "Mini golf hire for school galas, fairs and fundraising events"
      }
    ]
  },
  "serviceOutput": {
    "@type": "Thing",
    "name": "Mini Golf Hire Experience",
    "description": "Complete portable mini golf course delivered and set up at your venue"
  },
  "termsOfService": `${baseUrl}/terms`
});

export const generateFormSchema = (baseUrl: string) => ({
  "@context": "https://schema.org",
  "@type": "WebForm",
  "name": "Mini Golf Hire Booking Form",
  "url": `${baseUrl}/book`,
  "encodingType": "application/x-www-form-urlencoded",
  "actionableFeedbackPolicy": `${baseUrl}/terms`,
  "availableLanguage": {
    "@type": "Language",
    "name": "English",
    "alternateName": "en-NZ"
  }
});
