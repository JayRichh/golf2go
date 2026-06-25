import type { Metadata } from "next";

import { LocationLanding } from "~/components/LocationLanding";
import { getLocation } from "~/lib/locations";
import { generateMetadata as buildMetadata } from "../seo.config";

const location = getLocation("wellington")!;

export const metadata: Metadata = buildMetadata({
  title: location.metaTitle,
  description: location.metaDescription,
  path: location.path,
  images: [
    { url: location.heroImage, width: 1200, height: 630, alt: location.h1 },
  ],
});

export default function MiniGolfWellingtonPage() {
  return <LocationLanding location={location} />;
}
