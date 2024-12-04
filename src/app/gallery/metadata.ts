import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Event Gallery",
    description: "View our gallery of successful events and mini golf course setups. See how Golf 2 Go can transform your venue into a mini golf paradise.",
    openGraph: {
      title: "Event Gallery - Golf 2 Go",
      description: "View our gallery of successful events and mini golf course setups. See how Golf 2 Go can transform your venue into a mini golf paradise.",
      images: [
        {
          url: "/2-parties-and-events-golf2go-portable-miniature-golf.jpg",
          width: 1200,
          height: 630,
          alt: "Golf 2 Go - Events and Parties",
        },
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
