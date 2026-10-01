import type { Metadata } from "next";

import { LocationLanding } from "~/components/LocationLanding";
import { getLocation } from "~/lib/locations";
import { imageSize } from "~/lib/site";
import { generateMetadata as buildMetadata } from "../seo.config";

const location = getLocation("palmerston-north")!;

export const metadata: Metadata = buildMetadata({
  title: location.metaTitle,
  description: location.metaDescription,
  path: location.path,
  images: [
    { url: location.heroImage, ...imageSize(location.heroImage), alt: location.h1 },
  ],
});

export default function MiniGolfPalmerstonNorthPage() {
  return <LocationLanding location={location} />;
}
