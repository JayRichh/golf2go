import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { SPAM_DISALLOWS } from "./app/spam_disallow";

const publicRoutes = new Set([
  "/",
  "/about",
  "/courses",
  "/gallery",
  "/book",
  "/terms",
  "/help",
  "/privacy",
  "/favicon.ico",
  "/manifest.json",
  "/sitemap.xml",
]);

const bypassPrefixes = ["/_next", "/api", "/static", "/images", "/assets"];

const toRegex = (pattern: string) =>
  new RegExp("^" + pattern.replace(/\*/g, ".*").replace(/\$/g, "") + "$", "i");

const spamPatterns = SPAM_DISALLOWS.map(toRegex);

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (pathname === "/contact") {
    return NextResponse.redirect("https://www.golf2go.co.nz/book");
  }

  if (bypassPrefixes.some((prefix) => pathname.startsWith(prefix))) {
    return NextResponse.next();
  }

  if (spamPatterns.some((rx) => rx.test(pathname))) {
    return NextResponse.rewrite(new URL("/404", req.url));
  }

  if (!publicRoutes.has(pathname)) {
    return NextResponse.rewrite(new URL("/404", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|manifest.json|images).*)",
  ],
};
