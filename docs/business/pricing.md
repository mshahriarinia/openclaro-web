# Pricing & Packaging

> Status: **placeholder** — fill in as decisions are made.

> **Note (2026-07-11):** the live homepage's FAQ no longer states the free-to-start/
> commission-on-recovered-job specifics below — it now says "Each module would be
> expensed according to your business need. Please reach out to us for exact
> breakdown." That may be a deliberate move toward custom/negotiated pricing, or just
> softening while exact numbers are still open. Until that's confirmed, this doc and
> [ADR 0003](../adr/0003-free-to-start-commission-pricing-with-triple-guarantee.md)
> remain the decided model — reconcile or supersede the ADR if the model is actually
> changing, rather than letting the page and the docs drift apart. See the 2026-07-11
> changelog entry in `docs/branding/brand-analysis.md` for the full diff.

## Pricing model
**Free to start — no setup fee, no monthly retainer.** OpenClaro is paid a commission
on the jobs/revenue we recover for the customer. Backed by OpenClaro's Triple Guarantee:
leave any time, money back guaranteed monthly, and presence reverted to pre-engagement
state if the customer leaves. See
[ADR 0003](../adr/0003-free-to-start-commission-pricing-with-triple-guarantee.md).

Still open: the commission rate per service, and how a "recovered job" is defined and
attributed for each one (call answered? booked? completed?).

## Packaging approach
_TBD — standalone services, bundles, or land-and-expand from one wedge offer?_

## Per-service pricing (draft)

| Service | Setup fee | Monthly | Performance component | Notes |
|---|---|---|---|---|
| Speed-to-lead + missed-call text-back | Free | $0 | Commission on jobs recovered (rate _TBD_) | Cheapest to run |
| AI voice receptionist | Free | $0 | Commission on jobs recovered (rate _TBD_) | Strongest phone-driven offer |
| Database reactivation + nurture | Free | $0 | Commission on jobs recovered (rate _TBD_) | "Prove it fast" |
| Appointment booking + no-show reduction | Free | $0 | Commission on jobs recovered (rate _TBD_) | Measurable before/after |
| Reputation / review engine | Free | $0 | Commission on jobs recovered (rate _TBD_) | Bundle add-on |
| AI live selling agent | Free | $0 | Commission on jobs recovered (rate _TBD_) | E-commerce |

## ROI framing (the actual sell)
_TBD — for each service, the "recover N units and the commission is trivial next to it"
math._

## Cost-to-serve drivers
_TBD — telephony minutes, LLM tokens, SMS volume, human support overhead._

## Open decisions
- [x] Flat retainer vs. performance/outcome pricing — decided: performance/outcome,
  free to start (ADR 0003)
- [ ] Bundle discounts
- [x] Free trial / pilot terms — decided: no separate trial; the Triple Guarantee
  (leave any time, monthly money-back, presence reverted) covers this
- [ ] Commission rate per service
- [ ] Definition/attribution of a "recovered job" per service
