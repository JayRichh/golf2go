import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Terms & Conditions | Golf 2 Go NZ Hire Agreement",
    description: "Read our terms and conditions for mini golf hire services. Clear information about bookings, cancellations, and hire agreements for Golf 2 Go NZ events.",
    openGraph: {
      title: "Terms & Conditions | Golf 2 Go NZ Hire Agreement",
      description: "Read our terms and conditions for mini golf hire services. Clear information about bookings, cancellations, and hire agreements for Golf 2 Go NZ events.",
      images: [
        {
          url: "/5-cropped-golf2go-logo-1.jpg",
          width: 1200,
          height: 630,
          alt: "Golf 2 Go NZ - Terms and Conditions",
        },
      ],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
