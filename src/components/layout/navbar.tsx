"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "~/components/ui/Container";

const navigation = [
  { name: "Courses", href: "/courses" },
  { name: "Gallery", href: "/gallery" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-white shadow-sm backdrop-blur-md">
      <Container size="xl" className="px-3 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          <div className="flex items-center gap-8">
            <Link 
              href="/" 
              className="flex items-center transition-transform hover:scale-[0.98]"
              aria-label="Golf 2 Go Home"
            >
              <div className="relative h-10 w-[120px]">
                <Image
                  src="/5-cropped-golf2go-logo-1.jpg"
                  alt="Golf 2 Go"
                  fill
                  className="object-contain"
                  priority
                  sizes="120px"
                />
              </div>
            </Link>
            <div className="hidden sm:flex sm:gap-2">
              {navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`group relative inline-flex items-center px-3 py-2 text-[15px] font-medium transition-colors ${
                      isActive 
                        ? "text-primary" 
                        : "text-gray-700 hover:text-primary"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {item.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 h-0.5 w-full bg-primary" />
                    )}
                    <span className={`absolute bottom-0 left-0 h-0.5 w-0 bg-primary transition-all duration-200 group-hover:w-full ${isActive ? 'hidden' : ''}`} />
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="flex items-center gap-3 md:gap-6">
            {/* Always visible phone number - mobile first approach */}
            <a
              href="tel:021849931"
              className="flex items-center gap-1.5 md:gap-2 text-[14px] md:text-[15px] font-medium text-gray-700 transition-colors hover:text-primary"
              aria-label="Call us at 021 849931"
            >
              <svg
                className="h-4 w-4 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
              <span className="whitespace-nowrap">021 849931</span>
            </a>
            <Link 
              href="/book" 
              className="btn-primary hidden sm:inline-flex"
              aria-label="Book Now"
            >
              Book Now
            </Link>

            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 transition-colors hover:bg-gray-100 hover:text-primary sm:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle menu"
            >
              <span className="sr-only">
                {isMobileMenuOpen ? "Close menu" : "Open menu"}
              </span>
              {isMobileMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  aria-hidden="true"
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

        <div
          id="mobile-menu"
          className={`transform overflow-hidden transition-all duration-300 ease-in-out sm:hidden ${
            isMobileMenuOpen ? "max-h-96" : "max-h-0"
          }`}
          aria-hidden={!isMobileMenuOpen}
        >
          <div className="space-y-1 pb-3 pt-2">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2.5 text-[15px] font-medium transition-colors ${
                    isActive 
                      ? "bg-green-50 text-primary" 
                      : "text-gray-700 hover:bg-gray-50 hover:text-primary"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.name}
                </Link>
              );
            })}
            {/* Phone number removed from mobile menu since it's now always visible in main navbar */}
            <div className="px-3 py-2">
              <Link
                href="/book"
                className="btn-primary w-full justify-center"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Book Now"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </nav>
  );
}
