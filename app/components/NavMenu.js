"use client";

import { useState } from "react";

export default function NavMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav
        className={`nav-links${open ? " open" : ""}`}
        id="navLinks"
        onClick={(e) => {
          if (e.target.closest("a")) setOpen(false);
        }}
      >
        <a href="#modules">Modules</a>
        <a href="#guarantee">Guarantee</a>
        <a href="#verticals">Who it&apos;s for</a>
        <a href="#faq">FAQ</a>
        <a href="#cta" className="btn btn-sm">Book a free consultation</a>
      </nav>
      <button
        className="nav-toggle"
        aria-label="Toggle menu"
        aria-expanded={open}
        aria-controls="navLinks"
        onClick={() => setOpen((o) => !o)}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
          <path d="M4 7h16M4 12h16M4 17h16" />
        </svg>
      </button>
    </>
  );
}
