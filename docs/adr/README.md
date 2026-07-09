# Architecture Decision Records (ADRs)

This directory records the significant decisions made on OpenClaro — technical and,
where they shape the product, business decisions too.

An ADR captures **one decision**: the context that forced it, the choice made, and the
consequences. They're immutable once accepted — to change a decision, add a new ADR that
supersedes the old one (and mark the old one `Superseded`).

## Index

| # | Title | Status |
|---|---|---|
| [0001](0001-no-build-static-landing-site.md) | No-build static landing site | Accepted |
| [0002](0002-documentation-first-repo-layout.md) | Documentation-first repo layout | Accepted |
| [0003](0003-free-to-start-commission-pricing-with-triple-guarantee.md) | Free-to-start, commission-based pricing with a Triple Guarantee | Accepted |

## How to add one

1. Copy `template.md` to `NNNN-short-title.md` (next number, zero-padded).
2. Fill it in. Keep it short — a screenful is plenty.
3. Add a row to the index above.
4. Status starts `Proposed`, becomes `Accepted` when decided.

Statuses: `Proposed` · `Accepted` · `Superseded by [NNNN]` · `Deprecated`.
