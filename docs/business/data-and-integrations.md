# Data & Integrations

> Status: **placeholder** — fill in as decisions are made.

How OpenClaro actually gets a client's customer/contact data to run each module — and
what that implies for consent, cost-to-serve, and the security/data-handling page still
tracked as open in `docs/branding/action-plan.md` (Tier 2).

## What each module actually needs

| Module | Data needed | Source (MVP) | Source (mature) |
|---|---|---|---|
| Concierge | The live call/message event, not history | Forwarded number we provision (Twilio-style) | Webhook into their existing phone system, if it has one |
| Growth | Existing contact/lead list | Manual CSV export from their CRM/POS/spreadsheet | Live CRM integration (sync, not one-time export) |
| Booking / reminders | Appointment/calendar data | Access to their existing calendar or scheduling tool | Two-way calendar/PMS integration |
| Presence | Their business listing accounts | Direct login/API access to Google Business Profile, Yelp, etc. | Same, just more accounts/locations |
| Reputation | Completed-job events, to trigger review requests | Manual trigger or tied to the booking/calendar data above | Tied into whatever job-completion event their PMS/CRM emits |
| Brand | Existing site/listing content | Manual audit + rebuild | Same — this is a one-time standardization, not an ongoing feed |
| Insights | Everything logged above | Our own event log across modules | Same, just more sources feeding it |

## Sourcing approach

Start with **manual upload + a provisioned phone number** for the wedge offer
(Concierge + Growth) — no integration work required to land a first client. Build a real
integration for a specific CRM/calendar/phone system only once enough clients use it to
justify the maintenance cost (this is the biggest unresolved cost-to-serve driver in
`docs/business/pricing.md`).

## Consent & compliance

Sending SMS/calls to a reactivated or existing contact list has real legal requirements
(TCPA in the US, plus carrier/A2P registration for business SMS) — this isn't optional
paperwork, it's a real risk if skipped. Needs:
- A documented basis for contacting each person we reach out to (existing customer
  relationship vs. cold list matters a lot here — cold outreach has a much higher bar).
- Opt-out handling (STOP/unsubscribe) built into any automated text, not just a
  courtesy.
- A retention/access policy for whatever we pull in — this is also what the "security/
  data-handling page" in `docs/branding/action-plan.md` needs to state plainly to
  prospects: what we can see, what we do with it, how long we keep it.

## Open decisions
- [ ] Which CRM/calendar/phone systems to build real integrations for first (depends on
  the first vertical/ICP decision in `docs/business/strategy.md`)
- [ ] Consent/opt-out flow for reactivation campaigns (cold list vs. existing customers)
- [ ] Data retention policy, and the client-facing security/data-handling page that
  states it (tracked in `docs/branding/action-plan.md` Tier 2)
- [ ] Who provisions the forwarded phone number/messaging line — us or the client's
  existing provider
