# 0003. Free-to-start, commission-based pricing with a Triple Guarantee

- **Status:** Accepted
- **Date:** 2026-07-09
- **Deciders:** Founding team

## Context

Early sales conversations with skeptical SMB owners keep stalling on financial risk —
"what if it doesn't work" — before we ever get to demonstrate the AI recovering jobs.
We need to remove that objection to land pilots fast and match the ROI-first thesis:
customers should pay for results, not for a promise.

## Decision

OpenClaro is **free to start** across the whole catalog — no setup fee, no monthly
retainer. We're paid a **commission on the jobs/revenue we recover** for the customer,
so our incentive is directly tied to their outcome.

This is backed by the **Triple Guarantee**:
1. **Leave any time** — no lock-in contract.
2. **Money back, guaranteed on a monthly basis.**
3. **Presence reverted** — any website or digital presence we touch is returned to
   exactly how it was before we started, if the customer leaves.

## Consequences

- Removes the biggest objection (financial risk) from the first sales conversation.
- Revenue now depends on accurately measuring recovered jobs — call tracking, booking
  counts, no-show deltas become a product requirement, not just a reporting nicety.
- The exact commission rate per service, and how a "recovered job" is defined and
  attributed, are still open (tracked in `docs/business/pricing.md`).
- The revert guarantee means every change we make on a client's behalf (website edits,
  listing updates, campaign content) needs to be recorded in a way we can roll back —
  an operational requirement now, likely a technical one later.
- Cash flow is back-loaded versus a flat retainer; cost-to-serve must stay low enough to
  sustain free onboarding before commission revenue arrives.

## Alternatives considered

- **Flat setup fee + monthly retainer** — predictable revenue, but reintroduces the
  financial risk we're trying to remove for a first-time AI buyer.
- **Hybrid (small setup fee + smaller commission)** — hedges downside but muddies the
  "no financial risk" pitch that's the current differentiator.
