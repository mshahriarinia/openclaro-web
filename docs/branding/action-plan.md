# Brand Action Plan

> Date: 2026-07-09
> Source: [brand-analysis.md](brand-analysis.md) — this is the actionable task list
> derived from that audit's Sections 15–18 (Biggest Problems, Quick Wins, High-Impact
> Improvements, Homepage Rewrite Suggestions). Check items off as they ship; when a task
> changes the messaging/positioning meaningfully, note it back in `brand-analysis.md` so
> the audit doesn't go stale.

## How to use this list

Ordered by impact-to-effort. Do Tier 1 first — it closes the biggest trust gap for the
least work. Tier 2 requires product/ops work (real data, a backend) before the copy or
design work can land. Tier 3 is copy/positioning polish that can happen anytime but
compounds more once Tier 1–2 give it something real to point to.

---

## Tier 1 — Quick wins (ship this week)

- [x] **Standardize all CTA copy to one phrase.** Done 2026-07-10, updated 2026-07-11 —
  now "Book a free consultation" (was "Book a free revenue audit") in nav, hero, CTA
  button, and footer.
- [ ] **Wire the CTA form to a real destination.** Right now `CtaForm.js` only shows a
  client-side thank-you message and discards the input (see `app/components/CtaForm.js`)
  — no lead is captured anywhere. Connect it to an email inbox, CRM, or even a simple
  webhook/spreadsheet before driving any traffic to the page. This is the single most
  important fix: every other improvement is wasted if submissions vanish.
- [ ] **Disclose a commission range**, even provisional ("Typically 10–20% of recovered
  revenue, confirmed before anything goes live"). Add it near the pricing/guarantee
  copy. Closes the gap between the "no BS" promise and what's actually disclosed.
- [ ] **Add a one-line founder/company credibility statement** even without a full About
  page — e.g. in the footer or near the CTA ("Founded by [name], [relevant credibility
  detail]").
- [ ] **Add a visible privacy/data-handling one-liner** near the CTA form, since it
  collects name, email, and business name (e.g. "We only use this to contact you about
  your audit — no spam, no data sharing").
- [ ] **Make "illustrative example" more prominent on the demo card** — currently 12px
  gray caption text under the card; a skimmer can easily miss it and mistake the mocked
  numbers for a real result. Consider a small badge on the card itself, not just the
  caption below it.

## Tier 2 — Requires product/ops work first

- [ ] **Collect and publish 1–3 real case studies** (even from a discounted pilot
  customer in exchange for a testimonial). This single item would move Trust, Enterprise
  Readiness, and Differentiation more than any copy change — see Section 5/15 of the
  audit for why this is the top-ranked problem.
- [ ] **Build a real client-facing reporting view** for the "every action is logged and
  reported monthly" claim already in the copy (how-it-works step 3), then replace the
  illustrative hero demo card with a redacted real screenshot once it exists.
- [ ] **Write a narrow security/data-handling page** proportionate to the phone/
  calendar/CRM access being requested — doesn't need to be a full compliance page, just
  a clear statement of what OpenClaro can/can't see and how data is retained.
- [ ] **Add real specifics to "How it works"** — which phone systems and CRMs are
  actually supported, what setup looks like in practice, real timelines instead of the
  current three generic steps.

## Tier 3 — Positioning & copy polish

- [ ] **Pick and commit to one brand archetype framing.** The audit found the copy
  mostly Caregiver-coded (risk removal, guarantees) with occasional Hero-coded lines
  ("never send a caller to voicemail again"). Choose one framing and apply it
  consistently — e.g. Caregiver: "we protect your revenue" vs. Hero: "you never lose a
  customer again."
- [x] **Develop a sharper category narrative** instead of a flat 6-service grid. Done
  2026-07-10 — repositioned as "the customer-experience platform for local businesses,"
  with the six services regrouped into six named modules (Brand, Presence, Concierge,
  Growth, Reputation, Insights). See `CLAUDE.md`'s Modules section and the changelog
  below. Still open: land-and-expand sequencing across modules isn't yet reflected as an
  explicit roadmap on the page itself (see `docs/gtm/go-to-market.md`).
- [ ] **Add an emotional/aspirational layer for the owner-operator audience** — the
  current copy is entirely operational/financial; add language that speaks to the
  underlying motivation (more time back, growing past being the bottleneck), not just
  the transaction.
- [ ] **Reorder the page's messaging hierarchy**: pain (missed-call cost) → proof (real
  or clearly-labeled example) → mechanism (how the AI works) → guarantee (risk removal)
  → catalog (expand into more services) → FAQ. Currently the guarantee/risk-removal
  message repeats four times (hero, stats band, math band, guarantee section) before any
  proof appears.
- [ ] **Move "Who it's for" (verticals) higher**, right after the hero, so a visitor can
  self-qualify immediately instead of scrolling past the full service catalog and
  how-it-works section first.
- [ ] **A/B test rewrite candidates from the audit** (Section 18) against the current
  headline/subheadline/CTAs once there's enough traffic to test:
  - Headlines: "Your phone is ringing money. We make sure you pick it up." /
    "Every missed call is a job someone else gets." / "You already paid for the lead."
  - CTAs: "Show me what I'm losing" / "Calculate my missed revenue" /
    "Start recovering revenue this week"

---

## Explicitly out of scope for now

- Enterprise-readiness signals (SOC2, MSA/SLA language, named sales contacts) — the
  audit's low Enterprise Readiness score (2/10) reflects a target-market mismatch, not a
  gap to close; the ICP is owner-operated SMBs, not Fortune 500 buyers. Revisit only if
  the ICP changes.
