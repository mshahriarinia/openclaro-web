# Business Strategy

> Status: **placeholder** — fill in as decisions are made.

## Vision & mission
OpenClaro exists to bring openness and clarity to businesses: we identify and take on
any part of a business that AI can competently handle, so owners can focus on what only
they can do. "Open" — transparent about what the AI is doing and what it can/can't
replace. "Claro" — clarity: measurable, understandable results instead of vague AI hype.

## Business model
- Revenue model: **Free to start, commission on jobs recovered** (per-outcome/
  performance pricing). No setup fee, no monthly retainer. Backed by OpenClaro's
  Triple Guarantee — leave any time, money back guaranteed monthly, presence reverted
  to pre-engagement state if the customer leaves. See
  [ADR 0003](../adr/0003-free-to-start-commission-pricing-with-triple-guarantee.md).
- Pricing tiers: _TBD (commission rate per service — see docs/business/pricing.md)_
- Margins / cost-to-serve: _TBD (telephony minutes, LLM tokens, SMS, support)_

## ICP (Ideal Customer Profile)
- Vertical: _TBD (home services / medical / e-commerce)_
- Business size: _TBD (revenue, # employees, # locations)_
- Buying trigger: _TBD (missing calls, no-shows, dead lead list)_

## Wedge offer
_Which single service do we lead with? Current hypothesis: speed-to-lead + missed-call
text-back (cheapest to run, easiest first sale)._


Ordered roughly by ease-of-sale / strength of offer.

### Organic outlook
Any place this business has presence: 
- Website: 
    - Update the description, services, details
    - Add the latest positive reviews
    - Integrate Google analytics
    Note: We are basically building an AI-based CMS. Unlike wordpress and drupal where you install different plugins for different things, you setup agentic capabilitites that are descriptive and do the same. These agentic capabilities are maintained by somebody. not the business owner. 

- Yelp, Google maps, Apple maps: 
    - Claim and verify the page
    - Keep basics accurate: hours, phone, address, website, services/categories, seasonal hours, new offerings, etc.
    - Respond to messages
    - Respond to reviews
    - Refresh photos regularly with captions
    - Update the "From this business" section (specialties, history, owner info) seasonally or whenever it goes out of date.
    - Booking integration
    

Similarly for Facebook page, Instagram, TikTok.

- Monthly report across channels


### Paid outlook - ads (in pilot)

### Inbound and outbound voice/text agent
1. **Speed-to-lead + missed-call text-back** — *Easiest first sale; brutal ROI.*
   Web leads and missed calls go cold in minutes. An instant auto-text starts the
   conversation while intent is hot. Cheap to run.

2. **AI voice front office** — *Strongest offer for phone-driven businesses.*
   Businesses miss 20–40% of inbound calls (after hours, on jobs, double-booked). In home services one missed call can be a $300–$5,000 job. Recovering 2–3 jobs/mo makes
   the fee trivial.
   Product offering: 
     - During work hours: Take the call, book the job on the CRM, dispatch the technician 
     - After hours: Take the call, book the job on the CRM

3. **Database reactivation + lead nurture** — *Best "prove it fast" offer.*
   Businesses sit on hundreds of dead leads/past customers. An AI reactivation campaign books appointments in week one from a list they already own; ongoing nurture keeps it warm. Birthday reminders, Giftcards for referrals.

4. **Appointment booking + no-show reduction** — *Measurable before/after.*
   No-shows are pure lost revenue for practices (an empty dental/med-spa chair = $200–
   $1,000). Automated confirmations, reminders, easy rescheduling. Track no-show rate before vs. after.

5. **Reputation / review engine** — *Bundle add-on, not a flagship.*
   More reviews → higher local map ranking → more leads. Automated post-service review requests; route unhappy customers to private feedback.

6. **AI live selling agent** — *E-commerce / catalog play.*
   Talks to customers as they browse a product catalog, answering questions and guiding purchases in real time.

## Candidate verticals

- **Home services** (plumbing, HVAC, electrical, roofing, siding) — phone-driven, high job value; missed-call and speed-to-lead offers land hardest here.
- **Medical / dental / med-spa** — no-show reduction and booking are the core pain; higher trust bar, HIPAA considerations apply.
- **E-commerce / retail** — home for the live-selling agent.

## Key risks & assumptions
_TBD_

## Open decisions
- [ ] Lead/wedge offer
- [ ] First vertical
- [x] Pricing model — free to start, commission on jobs recovered (ADR 0003)
- [x] Company / product naming — OpenClaro
