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
}

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://golf2go.co.nz'

// Core business pages with high priority
const primaryRoutes: Route[] = [
  {
    path: '/',
    changeFrequency: 'weekly',
    priority: 1.0
  },
  {
    path: '/courses',
    changeFrequency: 'weekly',
    priority: 0.9
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
    priority: 0.8
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

// Helper function to validate sitemap priority
function validateSitemapPriority(priority: number): number {
  return Math.max(0, Math.min(1, priority));
}

// Process routes with proper formatting
function processRoutes(routes: Route[]): MetadataRoute.Sitemap {
  return routes.map(route => ({
    url: `${baseUrl}${route.path}`,
    lastModified: formatSitemapDate(route.lastModified || new Date()),
    changeFrequency: route.changeFrequency || 'weekly',
    priority: validateSitemapPriority(route.priority || 0.5)
  }));
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
