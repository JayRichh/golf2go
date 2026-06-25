export const generateContactSchema = (baseUrl: string) => ({
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact Golf 2 Go NZ — Mini Golf & Mini Putt Hire",
  "url": `${baseUrl}/contact`,
  "description": "Contact Golf 2 Go for portable mini golf and mini putt hire across New Zealand.",
  "mainEntity": {
    "@type": "LocalBusiness",
    "@id": `${baseUrl}/#organization`,
    "name": "Golf 2 Go NZ",
    "url": baseUrl,
    "telephone": "+64-21-849931",
    "email": "admin@golf2go.co.nz",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Palmerston North",
      "addressRegion": "Manawatu-Whanganui",
      "addressCountry": "NZ"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-40.3523",
      "longitude": "175.6082"
    },
    "areaServed": {
      "@type": "Country",
      "name": "New Zealand"
    },
    "serviceType": [
      "Portable Mini Golf Hire",
      "Mini Putt Hire",
      "Party & Event Hire",
      "Corporate & Team Building"
    ],
    "priceRange": "$190-$2500",
    "openingHours": "Mo-Su 08:00-20:00",
    "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer"],
    "currenciesAccepted": "NZD"
  },
  "potentialAction": {
    "@type": "CommunicateAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": `${baseUrl}/contact`,
      "inLanguage": "en-NZ"
    }
  }
});

export const generateContactFormSchema = () => ({
  "@context": "https://schema.org",
  "@type": "ContactPoint",
  "contactType": "customer service",
  "telephone": "+64-21-849931",
  "email": "admin@golf2go.co.nz",
  "availableLanguage": ["English"],
  "areaServed": "NZ",
  "hoursAvailable": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "opens": "08:00",
    "closes": "20:00"
  }
});
