import Image from "next/image";
import { ReactNode } from "react";

import { Container } from "~/components/ui/Container";

/**
 * Page hero: the event photo at full strength under a dark scrim, white text on top.
 * Replaces the old green-washed hero (image at 30% opacity over bg-primary).
 */
export function PhotoHero({
  image,
  alt = "",
  children,
}: {
  image: string;
  alt?: string;
  children: ReactNode;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-gray-900 text-white">
      <Image src={image} alt={alt} fill priority sizes="100vw" className="-z-10 object-cover" />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-t from-black/80 via-black/60 to-black/40"
        aria-hidden="true"
      />
      <Container size="xl" className="py-20 md:py-28">
        <div className="mx-auto max-w-3xl text-center">{children}</div>
      </Container>
    </section>
  );
}
