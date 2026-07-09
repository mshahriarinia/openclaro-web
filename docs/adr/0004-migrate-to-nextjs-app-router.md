# 0004. Migrate to Next.js App Router

- **Status:** Accepted
- **Date:** 2026-07-09
- **Deciders:** Founding team

## Context

[0001](0001-no-build-static-landing-site.md) deliberately kept the landing site as plain
HTML/CSS/JS with no build step, framework, or dependencies — speed to ship and zero
maintenance mattered more than richness while the site's only job was to communicate the
offer and collect leads.

We now want Vercel Web Analytics on the site. Its React integration
(`@vercel/analytics/next`, the `<Analytics />` component) only runs inside a Next.js/React
app — it cannot be used from plain static HTML/JS. That single requirement is the trigger
for this migration; the site itself is not being redesigned.

## Decision

Migrate `site/` (plain HTML/CSS/JS) to a Next.js App Router app at `app/`, as a
lift-and-shift: same markup, same CSS design tokens, same copy, and the same four
interactive behaviors that `main.js` provided (footer year, mobile nav toggle,
scroll-reveal, CTA form submit), each ported into a small Client Component. Everything else
stays a Server Component. Plain JavaScript/JSX, no TypeScript. `vercel.json`'s static-output
override and the `site/` directory are removed — Vercel's zero-config Next.js detection
handles build/output/routing now. `<Analytics />` is mounted in the root layout.

This supersedes ADR 0001.

## Consequences

- Vercel Web Analytics works via its supported React integration.
- The site now has a build step and dependencies (`next`, `react`, `react-dom`,
  `@vercel/analytics`) — dependency upgrades and build maintenance apply going forward,
  which ADR 0001 had explicitly avoided.
- Fonts (Fraunces, Inter) are self-hosted via `next/font/google` instead of loaded from the
  Google Fonts CDN, removing a third-party request.
- The page is still statically prerendered (`next build` marks `/` as static), so hosting
  behavior is close to before despite the added toolchain.
- Any future feature that needs a real backend or more app-like behavior now has a
  framework already in place to build on.

## Alternatives considered

- **Script-tag Web Analytics integration** (`/_vercel/insights/script.js` added directly to
  the static HTML) — would have delivered the same analytics data without reversing ADR
  0001 or adding a build step. Rejected because the user explicitly chose to migrate to
  Next.js now rather than defer that decision.
