import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Book Now | Golf 2 Go NZ Event Booking & Hire",
    description: "Reserve your portable mini golf experience today. Easy online booking for corporate events, team building, parties, and special occasions throughout New Zealand.",
    openGraph: {
      title: "Book Now | Golf 2 Go NZ Event Booking & Hire",
      description: "Reserve your portable mini golf experience today. Easy online booking for corporate events, team building, parties, and special occasions throughout New Zealand.",
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
