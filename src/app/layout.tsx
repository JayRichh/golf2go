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

export const metadata: Metadata = {
  metadataBase: new URL("https://golf2go.co.nz"),
  title: {
    default: "Golf 2 Go NZ | Premium Corporate Entertainment Solutions",
    template: "%s | Golf 2 Go NZ - Professional Event Solutions",
  },
  description: "New Zealand's leading corporate entertainment and event solutions provider. Premium interactive experiences for business functions, team building, and professional events.",
  manifest: "/manifest.json",
  applicationName: "Golf 2 Go NZ",
  keywords: [
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
  authors: [{ name: "Golf 2 Go NZ", url: "https://golf2go.co.nz" }],
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
    url: "https://golf2go.co.nz",
    siteName: "Golf 2 Go NZ",
    title: "Golf 2 Go NZ - Premium Corporate Entertainment Solutions",
    description: "New Zealand's leading corporate entertainment and event solutions provider. Premium interactive experiences for business functions, team building, and professional events.",
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
    title: "Golf 2 Go NZ - Premium Corporate Entertainment Solutions",
    description: "New Zealand's leading corporate entertainment and event solutions provider. Premium interactive experiences for business functions, team building, and professional events.",
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
    canonical: "https://golf2go.co.nz",
    languages: {
      "en-NZ": "https://golf2go.co.nz",
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
  "@type": "Organization",
  "@id": "https://golf2go.co.nz/#organization",
  name: "Golf 2 Go NZ",
  url: "https://golf2go.co.nz",
  logo: {
    "@type": "ImageObject",
    url: "https://golf2go.co.nz/birdie.png",
    width: "512",
    height: "512"
  },
  description: "New Zealand's leading corporate entertainment and event solutions provider",
  foundingDate: "2008",
  foundingLocation: {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressRegion: "Auckland",
      addressCountry: "NZ"
    }
  },
  areaServed: {
    "@type": "Country",
    name: "New Zealand"
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+64-800-GOLF2GO",
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

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-NZ" className={`${geist.variable} antialiased`}>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#008000" />
        <meta name="format-detection" content="telephone=yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Golf 2 Go NZ" />
        <link rel="apple-touch-icon" href="/birdie.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
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
