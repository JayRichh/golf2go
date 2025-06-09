// File: /src/middleware.ts
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

// wildcard → regex converter
const toRegex = (p: string) =>
  new RegExp("^" + p.replace(/\*/g, ".*").replace(/\$/g, "") + "$", "i");

const spamPatterns = SPAM_DISALLOWS.map(toRegex);

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // 1. contact → book
  if (pathname === "/contact") {
    return NextResponse.redirect("https://www.golf2go.co.nz/book");
  }

  // 2. skip ANY file (has a dot), e.g. /5-cropped-golf2go-logo-1.jpg
  if (pathname.includes(".")) {
    return NextResponse.next();
  }

  // 3. skip system prefixes
  if (bypassPrefixes.some((pre) => pathname.startsWith(pre))) {
    return NextResponse.next();
  }

  // 4. block spam patterns
  if (spamPatterns.some((rx) => rx.test(pathname))) {
    return NextResponse.rewrite(new URL("/404", req.url));
  }

  // 5. only allow our public routes
  if (!publicRoutes.has(pathname)) {
    return NextResponse.rewrite(new URL("/404", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // don't run on _next/static, _next/image, any request containing a dot,
    // or these known files
    "/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|manifest.json|.*\\..*).*)",
  ],
};
