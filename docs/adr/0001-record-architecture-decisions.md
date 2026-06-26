# 0001. Record architecture decisions

- **Status:** Accepted
- **Date:** 2026-06-26
- **Deciders:** Founding team

## Context

Elivram is pre-code and many foundational choices are still open (stack, wedge offer,
vertical, pricing). Decisions made now — and the reasoning behind them — will be easy to
forget as the project grows and people join. We want a lightweight, durable record so
future contributors understand *why* things are the way they are, not just *what* they are.

## Decision

We will keep Architecture Decision Records as markdown files in `docs/adr/`, one file per
decision, numbered sequentially. We follow a short Nygard-style format (Context, Decision,
Consequences, Alternatives). ADRs are immutable once accepted; superseding decisions get a
new ADR.

## Consequences

- New significant decisions get a short written record with minimal ceremony.
- Onboarding and revisiting past choices becomes much easier.
- Small overhead: contributors must remember to write one for non-trivial decisions.

## Alternatives considered

- **No formal record** — relies on memory and chat history; the reasoning gets lost.
- **A single running decision log** — harder to reference and link to a specific decision.
- **A wiki / external doc tool** — drifts from the code; we prefer decisions versioned
  alongside the repo.
