import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Our Mini Golf Courses",
    description: "Explore our range of premium portable mini golf courses. From classic designs to challenging layouts, perfect for any event.",
    openGraph: {
      title: "Mini Golf Courses - Golf 2 Go",
      description: "Explore our range of premium portable mini golf courses. From classic designs to challenging layouts, perfect for any event.",
      images: [
        {
          url: "/1-Twin-Hedges-3-3m-x-75m.jpg",
          width: 1200,
          height: 630,
          alt: "Golf 2 Go - Twin Hedges Course",
        },
        {
          url: "/15-Multi-tunnels-2-8m-x-9m.jpg",
          width: 1200,
          height: 630,
          alt: "Golf 2 Go - Multi Tunnels Course",
        },
        {
          url: "/19-Bridge-over-the-River-3-3m-x-9m.jpg",
          width: 1200,
          height: 630,
          alt: "Golf 2 Go - Bridge over the River Course",
        },
      ],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
