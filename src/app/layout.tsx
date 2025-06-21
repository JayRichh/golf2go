import localFont from "next/font/local";
import type { Metadata } from "next";

import { Footer } from "~/components/layout/footer";
import { Navbar } from "~/components/layout/navbar";
import { PageTransition } from "~/components/ui/PageTransition";
import { Analytics } from "@vercel/analytics/react"
import "./globals.css";

// Load fonts locally for better performance
const geist = localFont({
  src: [
    {
      path: "./fonts/GeistVF.woff",
      weight: "300 700",
      style: "normal",
    },
  ],
  variable: "--font-geist",
  preload: true,
  display: "swap",
});

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://golf2go.co.nz';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Golf 2 Go NZ | Mini Putt & Portable Mini Golf Hire | Wellington, Palmerston North, New Plymouth",
    template: "%s | Golf 2 Go NZ - Mini Putt & Portable Mini Golf Hire",
  },
  description: "New Zealand's leading portable mini golf hire and mini putt service. Indoor mini golf Palmerston North, mini golf Wellington, New Plymouth mini golf. Professional portable mini golf hire nationwide.",
  manifest: "/manifest.json",
  applicationName: "Golf 2 Go NZ",
  keywords: [
    // Priority SEO Keywords (0-click opportunities)
    "mini putt",
    "indoor mini golf palmerston north",
    "new plymouth mini golf",
    "mini golf wellington",
    "portable mini golf hire",
    "mini putt hire",
    "portable mini putt",
    "indoor mini golf wellington",
    "mini golf palmerston north",
    "mini golf new plymouth",
    "portable mini golf wellington",
    "portable mini golf taranaki",
    "mini golf taranaki",
    // Corporate/Business keywords
    "corporate entertainment solutions",
    "business event planning",
    "professional team building",
    "executive entertainment",
    "corporate function activities",
    "premium event solutions",
    "business entertainment services",
    "corporate engagement activities",
    "professional event management",
    "executive recreation planning"
  ],
  authors: [{ name: "Golf 2 Go NZ", url: baseUrl }],
  creator: "Golf 2 Go NZ",
  publisher: "Golf 2 Go NZ",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  icons: {
    icon: [
      { url: "/birdie.png", sizes: "32x32" },
      { url: "/birdie.png", sizes: "192x192" },
      { url: "/birdie.png", sizes: "512x512" },
    ],
    shortcut: "/birdie.png",
    apple: [
      { url: "/birdie.png", sizes: "180x180" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_NZ",
    url: baseUrl,
    siteName: "Golf 2 Go NZ",
    title: "Golf 2 Go NZ - Mini Putt & Portable Mini Golf Hire | Wellington, Palmerston North, New Plymouth",
    description: "New Zealand's leading portable mini golf hire and mini putt service. Indoor mini golf Palmerston North, mini golf Wellington, New Plymouth mini golf. Professional portable mini golf hire nationwide.",
    images: [
      {
        url: "/2-parties-and-events-golf2go-portable-miniature-golf.jpg",
        width: 1200,
        height: 630,
        alt: "Golf 2 Go NZ - Premium Corporate Events",
      },
      {
        url: "/17-golf2go-portable-miniature-golf-close-up.jpg",
        width: 1200,
        height: 630,
        alt: "Golf 2 Go NZ - Professional Event Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Golf 2 Go NZ - Mini Putt & Portable Mini Golf Hire | Wellington, Palmerston North, New Plymouth",
    description: "New Zealand's leading portable mini golf hire and mini putt service. Indoor mini golf Palmerston North, mini golf Wellington, New Plymouth mini golf. Professional portable mini golf hire nationwide.",
    images: [
      "/2-parties-and-events-golf2go-portable-miniature-golf.jpg",
      "/17-golf2go-portable-miniature-golf-close-up.jpg"
    ],
    creator: "@Golf2GoNZ",
    site: "@Golf2GoNZ",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: baseUrl,
    languages: {
      "en-NZ": baseUrl,
    },
  },
  verification: {
    google: "google-site-verification",
    other: {
      "msvalidate.01": "bing-verification",
      "yandex-verification": "yandex-verification"
    }
  },
  other: {
    category: "Business Services",
    classification: "Corporate Entertainment",
    rating: "Professional",
    industry: "Corporate Entertainment & Event Solutions",
    businessType: "Professional Services"
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${baseUrl}/#organization`,
  name: "Golf 2 Go NZ",
  url: baseUrl,
  logo: {
    "@type": "ImageObject",
    url: `${baseUrl}/birdie.png`,
    width: "512",
    height: "512"
  },
  description: "New Zealand's leading portable mini golf hire and mini putt service provider",
  foundingDate: "2008",
  foundingLocation: {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressRegion: "Palmerston North",
      addressCountry: "NZ"
    }
  },
  areaServed: [
    {
      "@type": "City",
      name: "Wellington",
      description: "Mini golf Wellington services and portable mini golf hire"
    },
    {
      "@type": "City",
      name: "Palmerston North",
      description: "Indoor mini golf Palmerston North and portable mini putt hire"
    },
    {
      "@type": "City",
      name: "New Plymouth",
      description: "New Plymouth mini golf services and portable mini golf hire"
    },
    {
      "@type": "State",
      name: "Taranaki",
      description: "Portable mini golf hire across Taranaki region"
    },
    {
      "@type": "Country",
      name: "New Zealand",
      description: "Nationwide portable mini golf and mini putt hire services"
    }
  ],
  serviceArea: [
    "Wellington",
    "Palmerston North",
    "New Plymouth",
    "Taranaki",
    "Manawatu-Whanganui",
    "Auckland",
    "Christchurch",
    "Hamilton"
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Portable Mini Golf Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Portable Mini Golf Hire",
          description: "Professional portable mini golf course rental and setup"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Indoor Mini Golf Setup",
          description: "Indoor mini golf solutions for venues and events"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Mini Putt Events",
          description: "Mini putt course hire for corporate and private events"
        }
      }
    ]
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "021849931",
    email: "admin@golf2go.co.nz",
    contactType: "customer service",
    areaServed: "NZ",
    availableLanguage: "English"
  },
  sameAs: [
    "https://www.linkedin.com/company/golf2go-nz",
    "https://www.facebook.com/golf2gonz",
    "https://www.instagram.com/golf2gonz"
  ]
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${baseUrl}/#website`,
  name: "Golf 2 Go NZ",
  url: baseUrl,
  description: "New Zealand's leading corporate entertainment and event solutions provider. Premium interactive experiences for business functions, team building, and professional events.",
  publisher: {
    "@id": `${baseUrl}/#organization`
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${baseUrl}/?s={search_term_string}`
    },
    "query-input": "required name=search_term_string"
  },
  mainEntity: {
    "@id": `${baseUrl}/#organization`
  },
  inLanguage: "en-NZ",
  copyrightYear: "2025",
  copyrightHolder: {
    "@id": `${baseUrl}/#organization`
  }
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-NZ" className={`${geist.variable} antialiased`}>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#008000" />
        <meta name="format-detection" content="telephone=yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Golf 2 Go NZ" />
        <link rel="apple-touch-icon" href="/birdie.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify([organizationSchema, websiteSchema]) }}
        />
      </head>
      <body className="flex min-h-screen flex-col bg-background font-sans">
        {/* Background pattern */}
        <div className="fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-[0.02]" />
        </div>

        {/* Main content */}
        <Navbar />
        <main className="flex-1">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />

        {/* Overlay for mobile menu */}
        <div id="mobile-menu-overlay" />

        <Analytics />
      </body>
    </html>
  );
}
