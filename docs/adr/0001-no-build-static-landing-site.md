# 0001. No-build static landing site

- **Status:** Accepted
- **Date:** 2026-06-26
- **Deciders:** Founding team

## Context

We need a marketing landing page now to explain the catalog and capture demo requests,
well before any product stack is chosen. The site's only job today is to communicate the
offer and collect leads. Speed to ship and zero maintenance matter more than richness.

## Decision

The landing site (`site/`) is plain HTML, CSS, and vanilla JS with **no build step, no
framework, and no dependencies**. It can be opened directly or served as static files and
hosted anywhere (GitHub Pages, Netlify, S3, etc.). The demo form is front-end only for now
and will be wired to a CRM/backend later.

## Consequences

- Anyone can edit the page with no toolchain; it deploys as static files for free.
- No dependency upgrades, build breakage, or security patching for the marketing site.
- If the page grows into a real web app (auth, dashboards), we will revisit this with a
  new ADR and likely adopt a framework then.
- The demo form does not yet persist leads — a follow-up decision is needed for lead capture.

## Alternatives considered

- **A framework (Next.js/Astro/etc.)** — overkill for a single marketing page right now;
  adds build/deploy complexity before it's warranted.
- **A website builder (Webflow/Framer/Carrd)** — fast, but content lives outside the repo
  and is harder to version alongside our docs.
