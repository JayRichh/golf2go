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

const bypass = ["/_next", "/api", "/static", "/images", "/assets"];

const toRegex = (p: string) =>
  new RegExp("^" + p.replace(/\*/g, ".*").replace(/\$/g, "") + "$", "i");

const spam = SPAM_DISALLOWS.map(toRegex);

export function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;

  if (path === "/contact") {
    return NextResponse.redirect("https://www.golf2go.co.nz/book");
  }

  if (bypass.some((p) => path.startsWith(p))) {
    return NextResponse.next();
  }

  if (spam.some((rx) => rx.test(path))) {
    return NextResponse.rewrite(new URL("/404", req.url));
  }

  if (!publicRoutes.has(path)) {
    return NextResponse.rewrite(new URL("/404", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
