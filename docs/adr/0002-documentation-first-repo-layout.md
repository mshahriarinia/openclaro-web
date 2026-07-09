# 0002. Documentation-first repo layout

- **Status:** Accepted
- **Date:** 2026-06-26
- **Deciders:** Founding team

## Context

The business is pre-code, but the thinking that matters most right now is non-technical:
strategy, pricing, go-to-market, marketing, and competitor research. We want these
captured in the repo so they evolve alongside any future product code and stay versioned,
reviewable, and linkable — rather than scattered across docs tools and chats.

## Decision

We organize the repo around documentation first, with a clear `docs/` taxonomy:

```
CLAUDE.md                  # project context for AI/code assistants
docs/business/             # strategy, pricing
docs/gtm/                  # go-to-market
docs/marketing/            # positioning, brand, channels
docs/research/             # competitor & market research
docs/adr/                  # architecture decision records
site/                      # static marketing site
```

These start as structured placeholders and get filled in as decisions are made. Product
code, when it exists, will be added alongside without disrupting this layout.

## Consequences

- Business reasoning is versioned and reviewable like code.
- Clear home for each kind of document; easy to find and cross-link.
- Placeholders make open decisions visible (each file lists its own TBDs).
- As real product code lands, we may introduce top-level dirs (e.g. `apps/`, `services/`);
  that can be recorded in a future ADR if it's a significant shift.

## Alternatives considered

- **External docs tool (Notion/Google Docs)** — better editing UX, but drifts from the
  repo and isn't versioned with the work.
- **Single README** — doesn't scale once there are many distinct concerns.
