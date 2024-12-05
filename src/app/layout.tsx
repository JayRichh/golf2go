import localFont from "next/font/local";
import type { Metadata } from "next";

import { Footer } from "~/components/layout/footer";
import { Navbar } from "~/components/layout/navbar";
import { PageTransition } from "~/components/ui/PageTransition";

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
    default: "Golf 2 Go",
    template: "%s | Golf 2 Go",
  },
  description: "Premium portable mini golf courses for your events",
  manifest: "/manifest.json",
  icons: {
    icon: "/birdie.png",
    shortcut: "/birdie.png",
    apple: "/birdie.png",
  },
  openGraph: {
    type: "website",
    locale: "en_NZ",
    url: "https://golf2go.co.nz",
    siteName: "Golf 2 Go",
    title: "Golf 2 Go - Premium Portable Mini Golf",
    description: "Premium portable mini golf courses for your events",
    images: [
      {
        url: "/2-parties-and-events-golf2go-portable-miniature-golf.jpg",
        width: 1200,
        height: 630,
        alt: "Golf 2 Go - Portable Mini Golf Events",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Golf 2 Go - Premium Portable Mini Golf",
    description: "Premium portable mini golf courses for your events",
    images: ["/2-parties-and-events-golf2go-portable-miniature-golf.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://golf2go.co.nz",
  },
  verification: {
    google: "google-site-verification",
  },
  category: "Entertainment",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} antialiased`}>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#008000" />
        <link rel="apple-touch-icon" href="/birdie.png" />
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
      </body>
    </html>
  );
}
