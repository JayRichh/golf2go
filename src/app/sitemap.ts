import { MetadataRoute } from 'next'

export type SitemapFrequency =
  | "always"
  | "hourly"
  | "daily"
  | "weekly"
  | "monthly"
  | "yearly"
  | "never";

interface Route {
  path: string;
  lastModified?: Date | string;
  changeFrequency?: SitemapFrequency;
  priority?: number;
  images?: {
    url: string;
    caption?: string;
    title?: string;
  }[];
}

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://golf2go.co.nz'

// Core business pages with high priority
const primaryRoutes: Route[] = [
  {
    path: '/',
    changeFrequency: 'weekly',
    priority: 1.0,
    images: [
      {
        url: `${baseUrl}/5-cropped-golf2go-logo-1.jpg`,
        title: 'Golf2Go Logo',
      }
    ]
  },
  {
    path: '/courses',
    changeFrequency: 'weekly',
    priority: 0.9,
    images: [
      {
        url: `${baseUrl}/10-Triple-Kidney-3-4m-x-9m.jpg`,
        title: 'Triple Kidney Course',
        caption: 'Triple Kidney 3.4m x 9m Mini Golf Course'
      },
      {
        url: `${baseUrl}/12-Slalom-2-8m-x-9m.jpg`,
        title: 'Slalom Course',
        caption: 'Slalom 2.8m x 9m Mini Golf Course'
      }
    ]
  },
  {
    path: '/book',
    changeFrequency: 'weekly',
    priority: 0.9
  }
]

// Secondary content pages
const secondaryRoutes: Route[] = [
  {
    path: '/gallery',
    changeFrequency: 'weekly',
    priority: 0.8,
    images: [
      {
        url: `${baseUrl}/2-parties-and-events-golf2go-portable-miniature-golf.jpg`,
        title: 'Parties and Events',
        caption: 'Golf2Go Portable Miniature Golf for Parties and Events'
      },
      {
        url: `${baseUrl}/3-fun-portable-mini-golf.jpg`,
        title: 'Fun Portable Mini Golf',
        caption: 'Fun Portable Mini Golf Experience'
      },
      {
        url: `${baseUrl}/4-portable-miniature-golf.jpg`,
        title: 'Portable Miniature Golf',
        caption: 'Portable Miniature Golf Setup'
      }
    ]
  },
  {
    path: '/about',
    changeFrequency: 'monthly',
    priority: 0.7
  }
]

// Support pages with lower priority
const supportRoutes: Route[] = [
  {
    path: '/terms',
    changeFrequency: 'monthly',
    priority: 0.6
  }
]

// Helper function to format date for sitemap
function formatSitemapDate(date: Date | string): string {
  const d = new Date(date);
  return d.toISOString();
}

// Helper function to format priority to 1 decimal place
function formatSitemapPriority(priority: number): number {
  return Number(Math.max(0, Math.min(1, priority)).toFixed(1));
}

// Process routes with proper formatting
function processRoutes(routes: Route[]): MetadataRoute.Sitemap {
  return routes.map(route => {
    const sitemapEntry: MetadataRoute.Sitemap[number] = {
      url: `${baseUrl}${route.path}`,
      lastModified: formatSitemapDate(route.lastModified || new Date()),
      changeFrequency: route.changeFrequency || 'weekly',
      priority: formatSitemapPriority(route.priority || 0.5)
    };

    // Add images if present - Next.js expects an array of image URLs
    if (route.images && route.images.length > 0) {
      sitemapEntry.images = route.images.map(img => img.url.toString());
    }

    return sitemapEntry;
  });
}

export default function sitemap(): MetadataRoute.Sitemap {
  // Combine and process all routes
  const allRoutes = [
    ...processRoutes(primaryRoutes),
    ...processRoutes(secondaryRoutes),
    ...processRoutes(supportRoutes)
  ];

  return allRoutes;
}
