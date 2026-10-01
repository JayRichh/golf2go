import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

import { Container } from "~/components/ui/Container";
import { Text } from "~/components/ui/Text";

/** Closing green band: heading, one line, a white "Get a Hire Quote" button and an optional Contact link. */
export function CtaBand({
  title,
  children,
  withContact = false,
}: {
  title: ReactNode;
  children: ReactNode;
  withContact?: boolean;
}) {
  return (
    <section className="bg-primary py-20 text-primary-foreground md:py-24">
      <Container size="xl" className="text-center">
        <Text variant="h2" className="font-bold tracking-tight">
          {title}
        </Text>
        <Text variant="lg" className="mx-auto mt-4 max-w-2xl">
          {children}
        </Text>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/book"
            className="btn-inverse inline-flex w-full items-center justify-center gap-2 px-8 py-3 sm:w-auto sm:min-w-[200px]"
          >
            <Text variant="lg">Get a Hire Quote</Text>
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </Link>
          {withContact && (
            <Link
              href="/contact"
              className="btn-outline-inverse inline-flex w-full items-center justify-center gap-2 px-8 py-3 sm:w-auto sm:min-w-[200px]"
            >
              <Text variant="lg">Contact Us</Text>
            </Link>
          )}
        </div>
      </Container>
    </section>
  );
}
