# Product

<!-- impeccable:product-schema 1 -->

> Written 2026-10-01 from the brief Jay supplied and from repository evidence. No init interview took place: the session had no question tool and could write only two files. Items marked "stated in site copy, unverified" or "unknown" are waiting for Jay to confirm or correct.

## Platform

web

## Users

- **Primary:** event organisers booking entertainment for a single date and venue. They organise birthdays, school galas, fundraisers, weddings, conferences, corporate and team-building days, promotions and trade shows.
- **The job:** find out whether Golf 2 Go covers their area, what fits their space and crowd, what it roughly costs, and then ask for a quote. They do this on the `/book` form or by phoning 021 849931 (email admin@golf2go.co.nz).
- **How they arrive:** mostly from search. "mini golf hire" earns about a 50% click-through rate. Location queries bring impressions to the location pages, but those pages get a low click-through rate.
- Phone or desktop split: unknown.

## Product Purpose

Golf 2 Go NZ hires out portable mini golf and mini putt. The business is based in Palmerston North. It delivers, sets up and packs down courses at the customer's venue, indoors or outdoors, anywhere in New Zealand. Wellington, Manawatū and Taranaki are the core areas, and anywhere further is priced by distance.

Success means more quote requests submitted through `/book`, and more phone calls. The site has no online payment and no instant booking. Every booking starts as a quote.

## Positioning

The course comes to the event; the customer does not go to a course. The service covers delivery, setup and pack-down, with no assembly by the customer. It suits indoor venues as well as outdoor sites. The layouts are named and measured, so organisers can match one to their floor space.

- "New Zealand's first portable mini golf company … since 2008": stated in site copy, unverified.

## Operating Context

- **Booking flow:**
  1. The organiser submits the `/book` form: contact details, event date, location, participant count, number of holes (1–6 or 9), number of days, and extra requirements. They must also accept the terms.
  2. `/api/contact` emails the request.
  3. Golf 2 Go replies with a quote.
- **Notice period:** at least 48 hours.
- **Terms of hire:** `public/TERMS AND CONDITIONS OF HIRE 2025-26.pdf` (with a .doc copy). The `/terms` page also covers them.
- **Business hours:** Mon–Fri 9–5, Sat 10–4, Sun by appointment. Stated in site copy (book help panel), unverified.
- **Reply time:** "Typically respond within 24 hours." Stated in site copy, unverified.

## Capabilities and Constraints

- **Offer:**
  - Hole in One Challenge (a single hole).
  - 3, 6 and 9-hole courses, with several layouts and obstacles. Two examples: Twin Hedges is 3.3m × 7.5m and Slalom is 2.8m × 9m.
- **Pricing:**
  - Hire starts from $190.
  - A single hole costs $190–$500.
  - Full courses cost $575–$2,500.
  - The `/book` form shows an estimate from a holes × days table. Its label says "excl. GST", which appears nowhere else on the site, so GST treatment is stated in site copy and unverified. The form also offers 2, 4 and 5-hole options that the public price bands do not mention.
- **Coverage:** Wellington region, Palmerston North/Manawatū, New Plymouth/Taranaki, and nationwide by distance. Location pages exist for Auckland, Hamilton, Hawke's Bay, Tauranga and Whanganui.
- **Not established:**
  - Course capacity (players per hour).
  - Setup time.
  - Whether a power or surface is required.
  - Weather policy.
  - Deposit or cancellation terms beyond the terms PDF.

## Brand Commitments

- **Name:** "Golf 2 Go" / "Golf 2 Go NZ".
- **Binding constraints (Jay):**
  - Keep the logo (`public/5-cropped-golf2go-logo-1.jpg`), the birdie mark (`public/birdie.png`), the green primary palette, the existing photography, the copy and the page structure.
  - Keep all existing functionality.
- **Voice:** plain, friendly and practical NZ English, as in the current copy.

## Evidence on Hand

- **Layout photos:** 18 photographs with each layout's dimensions in the filename, in `public/` (for example `1-Twin-Hedges-3-3m-x-75m.jpg` and `29-Alcapoco-3-3m-x-75.jpg`). `/courses` shows only 6 of them.
- **Event photos:** `2-parties-and-events-…jpg`, `3-fun-portable-mini-golf.jpg`, `8-work-function-fun-…jpg` and others, plus the `/gallery` set.
- **Two client-branded images:** `30-Tiger-400x400-Golf-Tournaments.jpg` and `6-Forefront-400x400-Auckland-Forefront.jpg`. What they represent is unknown, and they must not be presented as endorsements until confirmed.
- **Terms of hire:** PDF and DOC, 2025-26.
- **Absent:** testimonials, reviews, case studies, client lists, ratings and counts of events delivered. Future work must not invent any of these.

## Product Principles

1. **Quote first.** Every page leads to the `/book` form or the phone number, and nothing gets in the way of either.
2. **Show the real thing.** Real course photos, real layout names and real dimensions persuade an organiser better than generic claims.
3. **Answer the organiser's questions on the page:** area covered, fit for the space, price range and notice period.
4. **Say only what is true.** Prices, coverage and history must match what the business confirms.

## Accessibility & Inclusion

No product-specific requirement has been established. Use WCAG 2.1 AA as the baseline.
