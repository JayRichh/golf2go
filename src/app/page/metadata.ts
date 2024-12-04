import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Golf 2 Go - Premium Portable Mini Golf",
    description: "Experience the ultimate portable mini golf solution for your events. Professional setup and delivery across New Zealand.",
    openGraph: {
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
  };
}
