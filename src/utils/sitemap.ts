const _baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://golf2go.co.nz'

// NZ-Specific Terms
const nzTerms: string[] = [
  'mini putt nz',
  'mini putt hire',
  'kiwi mini golf',
  'aotearoa mini golf',
  'mini golf manawatu',
  'mini putt palmy',
  'mini golf welly',
  'mini golf akl',
  'mini putt chch',
  'mini golf tauranga',
  'mini putt hamilton',
  'mini golf napier',
  'mini putt dunedin'
]

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

// B2B and Corporate Terms
const corporateTerms: string[] = [
  'corporate event entertainment',
  'business function activities',
  'team building games',
  'conference entertainment',
  'trade show activities',
  'corporate fun day',
  'staff event ideas',
  'business entertainment',
  'corporate recreation',
  'workplace activities',
  'company event games',
  'corporate party ideas'
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
  'mini golf manawatu',
  'mini golf hawkes bay',
  'mini golf bay of plenty',
  'mini golf waikato'
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

// Industry-Specific Terms
const industryTerms: string[] = [
  'hospitality entertainment nz',
  'event planning activities',
  'conference entertainment ideas',
  'corporate function games',
  'business event activities',
  'team building solutions',
  'workplace entertainment',
  'staff morale activities',
  'company social ideas',
  'business party games'
]

export const seoKeywords = [
  ...nzTerms,
  ...genericTerms,
  ...corporateTerms,
  ...portableTerms,
  ...eventTerms,
  ...locationTerms,
  ...serviceTerms,
  ...activityTerms,
  ...occasionTerms,
  ...equipmentTerms,
  ...experienceTerms,
  ...businessTerms,
  ...industryTerms,
  // NZ Combined Terms
  ...nzTerms.map((term: string) => `hire ${term}`),
  ...nzTerms.map((term: string) => `book ${term}`),
  ...nzTerms.map((term: string) => `rent ${term}`),
  // Corporate Combined Terms
  ...corporateTerms.map((term: string) => `${term} nz`),
  ...corporateTerms.map((term: string) => `${term} new zealand`),
  // Generic Combined Terms
  ...genericTerms.map((term: string) => `portable ${term}`),
  ...genericTerms.map((term: string) => `mobile ${term}`),
  ...genericTerms.map((term: string) => `${term} hire`),
  ...genericTerms.map((term: string) => `${term} rental`),
  ...genericTerms.map((term: string) => `${term} nz`),
  // Location Combined Terms
  ...locationTerms.map((term: string) => `portable mini golf ${term}`),
  ...locationTerms.map((term: string) => `mini putt hire ${term}`),
  // Service Combined Terms
  ...serviceTerms.map((term: string) => `professional ${term}`),
  // Long-tail Keywords
  // NZ-Specific Long-tail
  'mini putt hire for corporate events nz',
  'portable mini golf auckland region',
  'mobile mini putt wellington area',
  'mini golf rental palmerston north',
  'corporate mini golf hire nz',
  'mini putt for business events nz',
  'portable mini golf north island',
  'mobile mini putt south island',
  // B2B Long-tail
  'corporate team building mini golf',
  'business function entertainment nz',
  'conference activity ideas auckland',
  'workplace event games wellington',
  'staff party mini golf hire',
  'corporate entertainment packages nz',
  'business event planning activities',
  'company social mini golf rental',
  // Event-Specific Long-tail
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
