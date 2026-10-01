import Link from "next/link";

import { Container } from "~/components/ui/Container";
import { Text } from "~/components/ui/Text";
import { PRICES_PATH, eventTypes } from "~/lib/event-types";
import { locations } from "~/lib/locations";

/**
 * Contextual internal links shared by the location and event landing pages:
 * pricing, event types and service areas. The current page is excluded.
 */
export function RelatedLinks({ currentPath }: { currentPath: string }) {
  const events = eventTypes.filter((e) => e.path !== currentPath);
  const areas = locations.filter((l) => l.path !== currentPath);

  return (
    <section className="bg-background-secondary py-20">
      <Container size="xl">
        <div className="mx-auto grid max-w-3xl gap-10 sm:grid-cols-2">
          <div>
            <Text variant="h3" className="font-bold tracking-tight text-foreground">
              Plan Your Event
            </Text>
            <ul className="mt-4 space-y-2">
              {currentPath !== PRICES_PATH && (
                <li>
                  <Link href={`/${PRICES_PATH}`} className="text-primary underline hover:no-underline">
                    Mini golf hire prices
                  </Link>
                </li>
              )}
              <li>
                <Link href="/courses" className="text-primary underline hover:no-underline">
                  Course layouts and sizes
                </Link>
              </li>
              {events.map((e) => (
                <li key={e.path}>
                  <Link href={`/${e.path}`} className="text-primary underline hover:no-underline">
                    Mini golf for {e.name.toLowerCase()}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Text variant="h3" className="font-bold tracking-tight text-foreground">
              Areas We Travel To
            </Text>
            <ul className="mt-4 grid grid-cols-2 gap-2">
              {areas.map((l) => (
                <li key={l.path}>
                  <Link href={`/${l.path}`} className="text-primary underline hover:no-underline">
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
