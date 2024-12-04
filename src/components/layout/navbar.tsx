"use client";

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { Container } from "~/components/ui/Container";
import { Text } from "~/components/ui/Text";

const navigation = [
  { name: "Courses", href: "/courses" },
  { name: "Gallery", href: "/gallery" },
  { name: "About", href: "/about" },
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
      <Container size="xl" className="px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center transition-colors hover:text-primary/90">
              <Image
                src="/5-cropped-golf2go-logo-1.jpg"
                alt="Golf 2 Go"
                width={120}
                height={40}
                className="object-contain"
              />
            </Link>
            <div className="hidden sm:flex sm:gap-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="inline-flex items-center px-3 py-2 transition-colors hover:text-foreground"
                >
                  <Text variant="sm" className="font-medium text-foreground-secondary">
                    {item.name}
                  </Text>
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="tel:021849931"
              className="hidden items-center gap-2 px-3 py-2 text-primary transition-colors hover:text-primary/90 sm:inline-flex"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
              <Text variant="sm" className="font-medium">
                021 849931
              </Text>
            </a>
            <Link href="/book" className="btn-primary hidden sm:inline-flex">
              <Text variant="sm" className="font-medium">
                Book Now
              </Text>
            </Link>

            {/* Mobile menu button */}
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-foreground-secondary transition-colors hover:bg-background-secondary hover:text-foreground sm:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`transform overflow-hidden transition-all duration-300 ease-in-out sm:hidden ${
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="space-y-1 pb-3 pt-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2 transition-colors hover:bg-background-secondary hover:text-foreground"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Text variant="base" className="font-medium text-foreground-secondary">
                  {item.name}
                </Text>
              </Link>
            ))}
            <a
              href="tel:021849931"
              className="flex items-center gap-2 px-3 py-2 text-primary transition-colors hover:text-primary/90"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
              <Text variant="base" className="font-medium">
                021 849931
              </Text>
            </a>
            <div className="px-3 py-2">
              <Link
                href="/book"
                className="btn-primary w-full justify-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Text variant="sm" className="font-medium">
                  Book Now
                </Text>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </nav>
  );
}
