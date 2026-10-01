import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

import { Container } from "~/components/ui/Container";
import { PRICES_PATH, eventTypes } from "~/lib/event-types";
import { locations } from "~/lib/locations";

const navigation = {
  company: [
    { name: "About Us", href: "/about" },
    { name: "Gallery", href: "/gallery" },
    { name: "Terms and Conditions", href: "/terms" },
  ],
  services: [
    { name: "Our Courses", href: "/courses" },
    { name: "Book Now", href: "/book" },
    { name: "Contact", href: "/contact" },
  ],
  // Derived from the data sources so new pages are linked automatically.
  locations: locations.map((l) => ({ name: `Mini Golf ${l.name}`, href: `/${l.path}` })),
  events: [
    ...eventTypes.map((e) => ({ name: e.name, href: `/${e.path}` })),
    { name: "Hire Prices", href: `/${PRICES_PATH}` },
  ],
  contact: [
    { name: "Email", value: "admin@golf2go.co.nz", href: "mailto:admin@golf2go.co.nz", icon: Mail },
    { name: "Phone", value: "021 849931", href: "tel:021849931", icon: Phone },
    { name: "Location", value: "Palmerston North, New Zealand", href: undefined, icon: MapPin },
  ],
};

const linkClass = "text-foreground-secondary transition-colors hover:text-foreground";

function LinkColumn({ title, items }: { title: string; items: { name: string; href: string }[] }) {
  return (
    <div>
      <p className="text-sm font-semibold text-foreground">{title}</p>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li key={item.name}>
            <Link href={item.href} className={linkClass}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-background">
      <Container size="xl" className="px-3 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="grid grid-cols-2 gap-12 sm:grid-cols-3 lg:grid-cols-5">
          <LinkColumn title="Company" items={navigation.company} />
          <LinkColumn title="Services" items={navigation.services} />
          <LinkColumn title="Locations" items={navigation.locations} />
          <LinkColumn title="Events" items={navigation.events} />

          <div>
            <p className="text-sm font-semibold text-foreground">Contact</p>
            <ul className="mt-4 space-y-3">
              {navigation.contact.map((item) => (
                <li key={item.name} className="flex items-start gap-2">
                  <item.icon className="mt-1 h-4 w-4 flex-shrink-0 text-primary" aria-hidden="true" />
                  {item.href ? (
                    <a href={item.href} className={`break-words ${linkClass}`}>
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-foreground-secondary">{item.value}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <Link href="/" className="text-xl font-bold text-primary hover:underline">
            Golf 2 Go
          </Link>
          <div className="flex flex-col items-center gap-2 text-foreground-secondary sm:items-end">
            <p>© {new Date().getFullYear()} Golf 2 Go. All rights reserved.</p>
            <p className="text-sm">
              Site by{" "}
              <a
                href="https://jayrich.dev"
                className="text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                jay
              </a>
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
