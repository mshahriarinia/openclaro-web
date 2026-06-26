# CLAUDE.md

Guidance for working in this repository.

## What this is

**Elivram** — a startup offering a catalog of done-for-you AI services to small and
mid-sized businesses. The thesis: most local/SMB businesses leak revenue through slow
or missed customer contact. Each service below plugs a specific, measurable leak and is
sold on ROI ("recover N jobs/month and the fee pays for itself").

Status: **pre-code.** This repo currently holds only project documentation. No product
code, stack, or infrastructure has been chosen yet.

## Service catalog

Ordered roughly by ease-of-sale / strength of offer.

1. **Speed-to-lead + missed-call text-back** — *Easiest first sale; brutal ROI.*
   Web leads and missed calls go cold in minutes. An instant auto-text starts the
   conversation while intent is hot. Cheap to run.

2. **AI voice receptionist** — *Strongest offer for phone-driven businesses.*
   Businesses miss 20–40% of inbound calls (after hours, on jobs, double-booked). In
   home services one missed call can be a $300–$5,000 job. Recovering 2–3 jobs/mo makes
   the fee trivial.

3. **Database reactivation + lead nurture** — *Best "prove it fast" offer.*
   Businesses sit on hundreds of dead leads/past customers. An AI reactivation campaign
   books appointments in week one from a list they already own; ongoing nurture keeps it
   warm.

4. **Appointment booking + no-show reduction** — *Measurable before/after.*
   No-shows are pure lost revenue for practices (an empty dental/med-spa chair = $200–
   $1,000). Automated confirmations, reminders, easy rescheduling. Track no-show rate
   before vs. after.

5. **Reputation / review engine** — *Bundle add-on, not a flagship.*
   More reviews → higher local map ranking → more leads. Automated post-service review
   requests; route unhappy customers to private feedback. Somewhat commoditized.

6. **AI live selling agent** — *E-commerce / catalog play.*
   Talks to customers as they browse a product catalog, answering questions and guiding
   purchases in real time.

## Candidate verticals

- **Home services** (plumbing, HVAC, electrical, roofing) — phone-driven, high job
  value; missed-call and speed-to-lead offers land hardest here.
- **Medical / dental / med-spa** — no-show reduction and booking are the core pain;
  higher trust bar, HIPAA considerations apply.
- **E-commerce / retail** — home for the live-selling agent.

## Project documentation map

Non-code aspects of the business live under `docs/` (all placeholders to be filled in):

- `docs/business/strategy.md` — vision, business model, ICP, wedge offer, risks.
- `docs/business/pricing.md` — packaging, per-service pricing, ROI framing, cost-to-serve.
- `docs/gtm/go-to-market.md` — wedge sequencing, sales motion, first-10-customers plan.
- `docs/marketing/marketing.md` — positioning, brand, channels, funnel, metrics.
- `docs/research/competitor-research.md` — market sizing, competitor landscape, benchmarks.
- `docs/adr/` — Architecture Decision Records (why we made significant choices).

Keep these updated as decisions get made; cross-reference open decisions below.
When you make a significant decision, add an ADR (see `docs/adr/README.md`).

## How to work in this repo

- The wedge vertical and lead offer are **not yet decided.** Don't assume one; confirm
  before building vertical-specific logic.
- No stack has been chosen. The services imply telephony (e.g. Twilio), an LLM layer,
  SMS, and booking/CRM integrations — but treat all of these as open decisions until
  the user picks.
- Frame work in terms of the **measurable outcome** each service sells (jobs recovered,
  no-show rate, reviews generated). That ROI framing is the core of the business.
- Keep this file updated as decisions get made (stack, wedge offer, vertical, naming).
