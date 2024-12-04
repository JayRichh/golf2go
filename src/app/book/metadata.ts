import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Book Your Mini Golf Event",
    description: "Book your portable mini golf event with Golf 2 Go. Perfect for corporate events, parties, and special occasions.",
    openGraph: {
      title: "Book Your Mini Golf Event - Golf 2 Go",
      description: "Book your portable mini golf event with Golf 2 Go. Perfect for corporate events, parties, and special occasions.",
      images: [
        {
          url: "/8-work-function-fun-portable-mini-golf.jpg",
          width: 1200,
          height: 630,
          alt: "Golf 2 Go - Corporate Events and Functions",
        },
        {
          url: "/2-parties-and-events-golf2go-portable-miniature-golf.jpg",
          width: 1200,
          height: 630,
          alt: "Golf 2 Go - Events and Parties",
        },
      ],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
