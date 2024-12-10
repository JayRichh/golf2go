import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "About Us | Golf 2 Go NZ - Our Story & Experience",
    description: "Discover Golf 2 Go's journey as New Zealand's premier portable mini golf provider. Over a decade of experience delivering exceptional event entertainment nationwide.",
    openGraph: {
      title: "About Us | Golf 2 Go NZ - Our Story & Experience",
      description: "Discover Golf 2 Go's journey as New Zealand's premier portable mini golf provider. Over a decade of experience delivering exceptional event entertainment nationwide.",
      images: [
        {
          url: "/6-Forefront-400x400-Auckland-Forefront.jpg",
          width: 1200,
          height: 630,
          alt: "Golf 2 Go - Professional Event Services",
        },
        {
          url: "/30-Tiger-400x400-Golf-Tournaments.jpg",
          width: 1200,
          height: 630,
          alt: "Golf 2 Go - Tournament Setup",
        },
      ],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
