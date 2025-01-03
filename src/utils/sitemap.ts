import { MetadataRoute } from 'next'

const baseUrl = 'https://golf2go.co.nz'

// Generic Mini Golf Terms
const genericTerms: string[] = [
  'mini golf',
  'miniature golf',
  'putt putt',
  'mini putt',
  'crazy golf',
  'golf games',
  'putting games',
  'golf activities',
  'golf entertainment',
  'mini golf games'
]

// Portable/Mobile Terms
const portableTerms: string[] = [
  'portable mini golf',
  'mobile mini golf',
  'portable putt putt',
  'mobile putting',
  'portable golf games',
  'traveling mini golf',
  'movable mini golf',
  'pop up mini golf',
  'temporary mini golf',
  'inflatable mini golf'
]

// Event Types
const eventTerms: string[] = [
  'party mini golf',
  'event mini golf',
  'wedding mini golf',
  'birthday mini golf',
  'corporate mini golf',
  'school mini golf',
  'fundraiser mini golf',
  'festival mini golf',
  'fair mini golf',
  'celebration mini golf'
]

// Location Terms
const locationTerms: string[] = [
  'mini golf near me',
  'mini golf nz',
  'mini golf new zealand',
  'mini golf north island',
  'mini golf south island',
  'mini golf auckland',
  'mini golf wellington',
  'mini golf christchurch',
  'mini golf palmerston north',
  'mini golf manawatu'
]

// Service Terms
const serviceTerms: string[] = [
  'mini golf hire',
  'mini golf rental',
  'mini golf setup',
  'mini golf installation',
  'mini golf delivery',
  'mini golf service',
  'mini golf booking',
  'mini golf packages',
  'mini golf quotes',
  'mini golf pricing'
]

// Activity Terms
const activityTerms: string[] = [
  'outdoor mini golf',
  'indoor mini golf',
  'backyard mini golf',
  'garden mini golf',
  'home mini golf',
  'office mini golf',
  'venue mini golf',
  'park mini golf',
  'beach mini golf',
  'lawn mini golf'
]

// Occasion Terms
const occasionTerms: string[] = [
  'summer mini golf',
  'winter mini golf',
  'holiday mini golf',
  'christmas mini golf',
  'easter mini golf',
  'weekend mini golf',
  'night mini golf',
  'day mini golf',
  'evening mini golf',
  'afternoon mini golf'
]

// Equipment Terms
const equipmentTerms: string[] = [
  'mini golf course',
  'mini golf holes',
  'mini golf obstacles',
  'mini golf putters',
  'mini golf balls',
  'mini golf equipment',
  'mini golf sets',
  'mini golf supplies',
  'mini golf accessories',
  'mini golf gear'
]

// Experience Terms
const experienceTerms: string[] = [
  'fun mini golf',
  'easy mini golf',
  'challenging mini golf',
  'professional mini golf',
  'family mini golf',
  'kids mini golf',
  'adult mini golf',
  'group mini golf',
  'team mini golf',
  'competitive mini golf'
]

// Business Terms
const businessTerms: string[] = [
  'mini golf business',
  'mini golf company',
  'mini golf provider',
  'mini golf service',
  'mini golf supplier',
  'mini golf vendor',
  'mini golf contractor',
  'mini golf operator',
  'mini golf specialist',
  'mini golf expert'
]

export const seoKeywords = [
  ...genericTerms,
  ...portableTerms,
  ...eventTerms,
  ...locationTerms,
  ...serviceTerms,
  ...activityTerms,
  ...occasionTerms,
  ...equipmentTerms,
  ...experienceTerms,
  ...businessTerms,
  // Combined Terms
  ...genericTerms.map((term: string) => `portable ${term}`),
  ...genericTerms.map((term: string) => `mobile ${term}`),
  ...genericTerms.map((term: string) => `${term} hire`),
  ...genericTerms.map((term: string) => `${term} rental`),
  ...genericTerms.map((term: string) => `${term} nz`),
  ...portableTerms.map((term: string) => `${term} hire nz`),
  ...portableTerms.map((term: string) => `${term} rental nz`),
  ...eventTerms.map((term: string) => `portable ${term}`),
  ...locationTerms.map((term: string) => `portable mini golf ${term}`),
  ...serviceTerms.map((term: string) => `professional ${term}`),
  // Long-tail Keywords
  'portable mini golf for parties nz',
  'mobile mini golf for events nz',
  'mini golf rental for weddings nz',
  'portable putt putt hire near me',
  'mobile mini golf for corporate events',
  'portable mini golf course rental',
  'mini golf setup for parties',
  'mobile putting green hire',
  'portable golf games for events',
  'mini golf equipment rental nz'
]

// [Rest of the file with sitemap and structured data remains the same...]
