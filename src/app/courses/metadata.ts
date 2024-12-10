import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Mini Golf Course Designs | Golf 2 Go NZ Course Catalog",
    description: "Browse our extensive range of portable mini golf course layouts. From classic designs to challenging obstacles, featuring unique holes like Twin Hedges and Bridge over the River.",
    openGraph: {
      title: "Mini Golf Course Designs | Golf 2 Go NZ Course Catalog",
      description: "Browse our extensive range of portable mini golf course layouts. From classic designs to challenging obstacles, featuring unique holes like Twin Hedges and Bridge over the River.",
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
