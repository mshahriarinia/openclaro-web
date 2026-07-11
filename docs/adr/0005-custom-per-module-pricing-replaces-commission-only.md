# 0005. Custom, per-module pricing replaces commission-only

- **Status:** Accepted
- **Date:** 2026-07-11
- **Deciders:** Founding team

## Context

[ADR 0003](0003-free-to-start-commission-pricing-with-triple-guarantee.md) committed to
a single public pricing mechanic across the whole product: free to start, paid via a
commission on the jobs/revenue recovered. That worked cleanly for the original
call/lead-driven services (missed-call text-back, voice receptionist, reactivation,
no-show reduction) where a "recovered job" is a countable, attributable unit.

Since then the product was regrouped into six modules (see `CLAUDE.md`'s Modules
section) — Brand, Presence, Concierge, Growth, Reputation, Insights. Brand, Presence, and
Insights don't have a natural "recovered job" to attribute a commission to: there's no
single countable unit for "we standardized your Google Business profile" or "we kept your
listing accurate this month." Committing publicly to a commission-only model before that
attribution problem is solved would mean overpromising specifics we can't yet back up —
which conflicts with the "No BS" promise that's core to the brand.

## Decision

OpenClaro moves from a blanket public "free to start, commission on jobs recovered"
claim to **custom, per-module pricing, quoted after a free consultation** (see the
homepage CTA, "Book a free consultation," and the FAQ's "What does it cost?" answer).
There is no public commission-rate or rate-card claim on the homepage.

The **Triple Guarantee is retained and now carries the "zero risk" pitch on its own**,
independent of the billing mechanic:
1. **Leave any time** — no lock-in contract.
2. **Money back, guaranteed.**
3. **Presence reverted** — any website or digital presence we touch is returned to
   exactly how it was before we started, if the customer leaves.

Commission-based billing isn't ruled out — it may still be the right structure for
individual modules (Concierge, Growth) in an actual customer quote — but it's no longer
asserted as *the* model on the public page.

## Consequences

- Unblocks selling Brand, Presence, and Insights without first solving "recovered job"
  attribution for modules where that unit doesn't naturally exist.
- The public "zero financial risk" pitch now rests entirely on the money-back guarantee,
  not on a "you only pay if we deliver" commission formula — the guarantee's terms need
  to be concrete enough (what triggers a refund, over what window) to actually carry that
  weight once real customers are on it.
- Sales now requires an actual quoting step (the "free consultation") before a customer
  knows what they'll pay — slower/higher-touch than "sign up, $0 down" self-serve framing,
  but consistent with a still-founder-led sales motion at this stage.
- `docs/business/pricing.md`'s per-service commission-rate table is no longer the pricing
  model; it needs reworking around a per-module custom-quote framework once real pricing
  logic exists.
- Cash flow assumptions in ADR 0003 (back-loaded, commission arrives after recovery) no
  longer hold as stated; revisit once real module pricing (flat fee, usage-based, hybrid)
  is decided.

## Alternatives considered

- **Hybrid — keep commission-only for Concierge/Growth, custom pricing for the rest** —
  more precisely mirrors where "recovered job" attribution actually works, but a mixed
  billing model per module is harder to explain simply on a single homepage FAQ answer
  than "reach out for a breakdown." Revisit once there are enough real quotes to know if
  the mix is worth surfacing.
- **Solve job-attribution for every module before launching them** — most faithful to the
  original ADR 0003 pitch, but blocks shipping Brand/Presence/Insights on an open modeling
  problem instead of a real customer conversation.
