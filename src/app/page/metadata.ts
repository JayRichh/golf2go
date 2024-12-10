import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Golf 2 Go NZ | Premium Portable Mini Golf Hire",
    description: "New Zealand's leading portable mini golf rental service. Professional setup and delivery nationwide for corporate events, parties, and special occasions.",
    openGraph: {
      title: "Golf 2 Go NZ | Premium Portable Mini Golf Hire",
      description: "New Zealand's leading portable mini golf rental service. Professional setup and delivery nationwide for corporate events, parties, and special occasions.",
      images: [
        {
          url: "/2-parties-and-events-golf2go-portable-miniature-golf.jpg",
          width: 1200,
          height: 630,
          alt: "Golf 2 Go - Portable Mini Golf Events",
        },
        {
          url: "/17-golf2go-portable-miniature-golf-close-up.jpg",
          width: 1200,
          height: 630,
          alt: "Golf 2 Go - Course Close Up",
        },
      ],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
