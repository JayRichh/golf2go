import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { Text } from "~/components/ui/Text";

/** Split an intro into its first sentence (hero lede) and the rest (opening body paragraph). */
export function splitLede(intro: string): [string, string] {
  const [lede, ...rest] = intro.split(/(?<=[.?!])\s+/);
  return [lede, rest.join(" ")];
}

/** The hero's quote button and courses link, styled for the dark photo scrim. */
export function HeroActions({
  quoteLabel = "Get a Hire Quote",
  coursesLabel = "View Our Courses",
}: {
  quoteLabel?: string;
  coursesLabel?: string;
}) {
  return (
    <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
      <Link href="/book" className="btn-primary inline-flex items-center gap-2 px-8 py-3">
        <Text variant="lg">{quoteLabel}</Text>
        <ArrowRight className="h-5 w-5" aria-hidden="true" />
      </Link>
      <Link href="/courses" className="btn-outline-inverse inline-flex items-center gap-2 px-8 py-3">
        <Text variant="lg">{coursesLabel}</Text>
      </Link>
    </div>
  );
}
