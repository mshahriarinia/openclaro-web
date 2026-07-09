"use client";

import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const revealEls = document.querySelectorAll("[data-reveal]");

    if (!reduceMotion && "IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { rootMargin: "0px 0px -8% 0px" }
      );
      revealEls.forEach((el) => observer.observe(el));
      return () => observer.disconnect();
    }

    revealEls.forEach((el) => el.classList.add("is-visible"));
  }, []);

  return null;
}
