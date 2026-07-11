# Pricing & Packaging

> Status: **placeholder** — fill in as decisions are made.

## Pricing model
**Custom, per-module pricing — quoted after a free consultation.** No public
commission-rate or rate-card claim. Backed by OpenClaro's Triple Guarantee: leave any
time, money back guaranteed, and presence reverted to pre-engagement state if the
customer leaves. See
[ADR 0005](../adr/0005-custom-per-module-pricing-replaces-commission-only.md), which
supersedes the original free-to-start/commission-only model
([ADR 0003](../adr/0003-free-to-start-commission-pricing-with-triple-guarantee.md)).

Why the change: commission-only pricing required defining and attributing a "recovered
job" per module. That worked for the original call/lead-driven services but breaks down
for Brand, Presence, and Insights, which don't have a natural countable unit to
commission against.

Still open: the actual per-module pricing structure (flat fee? usage-based? still
commission for some modules, like Concierge/Growth, where "recovered job" attribution
does work?) — none of this is decided yet. The homepage FAQ deliberately punts to "reach
out for exact breakdown" rather than guessing at numbers here.

## Packaging approach
_TBD — standalone modules, bundles, or land-and-expand from one wedge module?_

## Per-module pricing (draft)

| Module | Pricing structure | Notes |
|---|---|---|
| Brand | _TBD_ | No natural "recovered job" unit — likely flat/setup-style pricing |
| Presence | _TBD_ | Ongoing/continuous — likely a flat monthly fee |
| Concierge | _TBD_ | Commission-on-recovered-job may still fit here (call answered, booked) |
| Growth | _TBD_ | Commission-on-recovered-job may still fit here (lead reactivated, booked) |
| Reputation | _TBD_ | No natural per-job unit — likely flat/volume-based |
| Insights | _TBD_ | Reporting layer — likely bundled with other modules, not priced standalone |

## ROI framing (the actual sell)
_TBD — for each module, the "recover/save N units and the fee is trivial next to it"
math. The outcome framing (see the homepage's "math" section) still holds regardless of
how a module is billed._

## Cost-to-serve drivers
_TBD — telephony minutes, LLM tokens, SMS volume, human support overhead._

## Open decisions
- [x] Flat retainer vs. performance/outcome pricing — superseded: moved from blanket
  commission-only to custom per-module pricing (ADR 0005, was ADR 0003)
- [ ] Per-module pricing structure (flat / usage-based / commission where it fits)
- [ ] Bundle discounts
- [x] Free trial / pilot terms — decided: no separate trial; the Triple Guarantee
  (leave any time, money-back guarantee, presence reverted) covers this
- [ ] Commission rate for modules where commission still fits (Concierge, Growth)
- [ ] Definition/attribution of a "recovered job" for Concierge/Growth
