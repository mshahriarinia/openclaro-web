"use client";

import { useState } from "react";

export default function CtaForm() {
  const [note, setNote] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value || "there";
    setNote(
      `Thanks, ${name.split(" ")[0]}! This is a demo form — connect it to your CRM to capture leads.`
    );
    form.reset();
  }

  return (
    <>
      <form className="cta-form" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your name" required />
        <input type="email" name="email" placeholder="Work email" required />
        <input type="text" name="business" placeholder="Business name" />
        <button type="submit" className="btn btn-lg">Book a free revenue audit</button>
      </form>
      <p className="cta-note" id="formNote">{note}</p>
    </>
  );
}
