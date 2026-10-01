import { Home, Search } from "lucide-react";

import Link from "next/link";

import { Container } from "~/components/ui/Container";
import { Text } from "~/components/ui/Text";

export default function NotFound() {
  return (
    <Container
      size="sm"
      className="flex min-h-[50vh] flex-col items-center justify-center py-16 text-center"
    >
      <Search className="h-8 w-8 text-primary" aria-hidden="true" />
      <Text variant="h2" className="mt-6 font-semibold">
        Page Not Found
      </Text>
      <Text variant="base" className="mt-2 text-foreground-secondary">
        Sorry, we couldn&apos;t find the page you&apos;re looking for.
      </Text>
      <Link href="/" className="btn-primary mt-8 inline-flex items-center gap-2 px-6 py-3">
        <Home className="h-5 w-5" aria-hidden="true" />
        Return Home
      </Link>
    </Container>
  );
}
