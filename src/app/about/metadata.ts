import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "About Golf 2 Go",
    description: "Learn about Golf 2 Go, New Zealand's premier portable mini golf provider. Professional service with years of experience in event entertainment.",
    openGraph: {
      title: "About Golf 2 Go - Premium Portable Mini Golf",
      description: "Learn about Golf 2 Go, New Zealand's premier portable mini golf provider. Professional service with years of experience in event entertainment.",
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
