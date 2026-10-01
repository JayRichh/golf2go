import type { Metadata } from "next";

import { EventLanding } from "~/components/EventLanding";
import { getEventType } from "~/lib/event-types";
import { imageSize } from "~/lib/site";
import { generateMetadata as buildMetadata } from "../seo.config";

const event = getEventType("corporate-events")!;

export const metadata: Metadata = buildMetadata({
  title: event.metaTitle,
  description: event.metaDescription,
  path: event.path,
  images: [
    { url: event.heroImage, ...imageSize(event.heroImage), alt: event.h1 },
  ],
});

export default function MiniGolfCorporateEventsPage() {
  return <EventLanding event={event} />;
}
