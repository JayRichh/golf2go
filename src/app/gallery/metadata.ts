import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Event Gallery | Golf 2 Go NZ Success Stories",
    description: "Explore our portfolio of successful mini golf events across New Zealand. See real examples of corporate functions, parties, and custom course setups in action.",
    openGraph: {
      title: "Event Gallery | Golf 2 Go NZ Success Stories",
      description: "Explore our portfolio of successful mini golf events across New Zealand. See real examples of corporate functions, parties, and custom course setups in action.",
      images: [
        {
          url: "/3-fun-portable-mini-golf.jpg",
          width: 1200,
          height: 630,
          alt: "Golf 2 Go - Fun Mini Golf Setup",
        },
        {
          url: "/8-work-function-fun-portable-mini-golf.jpg",
          width: 1200,
          height: 630,
          alt: "Golf 2 Go - Work Functions",
        },
        {
          url: "/17-golf2go-portable-miniature-golf-close-up.jpg",
          width: 1200,
          height: 630,
          alt: "Golf 2 Go - Course Details",
        },
      ],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
