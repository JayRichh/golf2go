import Link from "next/link";

import { Container } from "~/components/ui/Container";
import { Text } from "~/components/ui/Text";

const navigation = {
  company: [
    { name: "About Us", href: "/about" },
    { name: "Gallery", href: "/gallery" },
  ],
  services: [
    { name: "Our Courses", href: "/courses" },
    { name: "Book Now", href: "/book" },
  ],
  contact: [
    { name: "Email", value: "admin@golf2go.co.nz", href: "mailto:admin@golf2go.co.nz", icon: "📧" },
    { name: "Phone", value: "021 849931", href: "tel:021849931", icon: "📞" },
    { name: "Location", value: "Palmerston North, New Zealand", href: "#", icon: "📍" },
  ],
  legal: [
    { name: "Terms and Conditions", href: "/terms" },
  ],
};

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border/50 bg-background">
      <Container size="xl" className="px-3 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="grid grid-cols-2 gap-12 sm:grid-cols-3 lg:grid-cols-4">
          <div>
            <Text variant="sm" className="font-semibold uppercase tracking-wider text-foreground">
              Company
            </Text>
            <ul className="mt-4 space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="transition-colors hover:text-foreground">
                    <Text variant="base" className="text-foreground-secondary">
                      {item.name}
                    </Text>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <Text variant="sm" className="font-semibold uppercase tracking-wider text-foreground">
              Services
            </Text>
            <ul className="mt-4 space-y-3">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="transition-colors hover:text-foreground">
                    <Text variant="base" className="text-foreground-secondary">
                      {item.name}
                    </Text>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <Text variant="sm" className="font-semibold uppercase tracking-wider text-foreground">
              Contact
            </Text>
            <ul className="mt-4 space-y-3">
              {navigation.contact.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
                  >
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                      {item.icon}
                    </span>
                    <Text variant="base" className="text-foreground-secondary">
                      {item.value}
                    </Text>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <Text variant="sm" className="font-semibold uppercase tracking-wider text-foreground">
              Legal
            </Text>
            <ul className="mt-4 space-y-3">
              {navigation.legal.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="transition-colors hover:text-foreground">
                    <Text variant="base" className="text-foreground-secondary">
                      {item.name}
                    </Text>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border/50 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <Link href="/" className="transition-colors hover:text-primary/90">
              <Text variant="h4" className="font-bold text-primary">
                Golf 2 Go
              </Text>
            </Link>
            <div className="flex flex-col items-center gap-2 sm:items-end">
              <Text variant="base" className="text-foreground-secondary">
                © {new Date().getFullYear()} Golf 2 Go. All rights reserved.
              </Text>
              <Text variant="sm" className="text-foreground-secondary">
                Site by{" "}
                <a
                  href="https://jayrich.dev"
                  className="text-primary hover:text-primary/90"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  jay
                </a>
              </Text>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
