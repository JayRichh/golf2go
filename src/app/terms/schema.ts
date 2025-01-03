export const generateTermsSchema = (baseUrl: string) => ({
  "@context": "https://schema.org",
  "@type": "LegalDocument",
  "@id": `${baseUrl}/terms#document`,
  "name": "Golf 2 Go NZ Terms and Conditions",
  "description": "Terms and conditions for hiring premium portable mini golf courses and corporate entertainment solutions",
  "version": "2025-26",
  "datePublished": "2025-01-01",
  "publisher": {
    "@type": "Organization",
    "name": "Golf 2 Go NZ",
    "url": baseUrl
  },
  "inLanguage": "en-NZ",
  "isPartOf": {
    "@type": "WebSite",
    "name": "Golf 2 Go NZ",
    "url": baseUrl
  },
  "about": {
    "@type": "Service",
    "name": "Corporate Entertainment Solutions",
    "description": "Premium portable mini golf and event entertainment services"
  },
  "audience": {
    "@type": "BusinessAudience",
    "audienceType": "Corporate clients and event organizers"
  },
  "educationalLevel": "Professional",
  "keywords": [
    "corporate event terms",
    "entertainment hire agreement",
    "event booking conditions",
    "professional service terms",
    "corporate function agreement",
    "event entertainment contract",
    "business event terms",
    "premium service conditions",
    "corporate entertainment policy",
    "event management terms"
  ],
  "offers": {
    "@type": "BusinessFunction",
    "serviceType": "Corporate Entertainment",
    "areaServed": "New Zealand"
  },
  "mainEntity": {
    "@type": "WebPage",
    "name": "Terms and Conditions",
    "description": "Legal terms and conditions for corporate entertainment and event services",
    "significantLink": `${baseUrl}/TERMS AND CONDITIONS OF HIRE 2025-26.pdf`
  }
});

export const generatePdfSchema = (baseUrl: string) => ({
  "@context": "https://schema.org",
  "@type": "DigitalDocument",
  "@id": `${baseUrl}/terms/pdf#document`,
  "name": "Golf 2 Go NZ Terms and Conditions PDF",
  "encodingFormat": "application/pdf",
  "url": `${baseUrl}/TERMS AND CONDITIONS OF HIRE 2025-26.pdf`,
  "dateModified": "2025-01-01",
  "publisher": {
    "@type": "Organization",
    "name": "Golf 2 Go NZ",
    "url": baseUrl
  },
  "inLanguage": "en-NZ",
  "accessibilityFeature": [
    "highContrastDisplay",
    "readingOrder",
    "structuralNavigation",
    "tableOfContents"
  ],
  "accessMode": [
    "textual",
    "visual"
  ],
  "accessModeSufficient": [
    "textual"
  ],
  "downloadUrl": `${baseUrl}/TERMS AND CONDITIONS OF HIRE 2025-26.pdf`
});
