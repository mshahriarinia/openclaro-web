import ScrollReveal from "./components/ScrollReveal";
import CtaForm from "./components/CtaForm";

export default function HomePage() {
  return (
    <main>
      <ScrollReveal />

      {/* Hero */}
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy" data-reveal>
            <p className="eyebrow">Slow to respond. Fast to lose revenue.</p>
            <h1 className="display">Turn your business to an AI-assisted system that scales</h1>
            <p className="lead">
              OpenClaro is a catalog of AI services that act inside your business —
              texting back missed calls, reviving cold leads, guarding against no-shows.
              You stay in control; AI does the work.
            </p>
            <div className="hero-actions">
              <a href="#cta" className="btn btn-lg">Book a free revenue audit</a>
              <a href="#services" className="btn btn-ghost btn-lg">See the services catalog</a>
            </div>
            <ul className="hero-proof">
              <li><svg className="check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg>Live in days</li>
              <li><svg className="check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg>No contracts — leave any time</li>
              <li><svg className="check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg>Money-back, monthly</li>
            </ul>
          </div>

          <div className="hero-demo" data-reveal>
            <div className="demo-card" role="img" aria-label="Example: four AI services from the OpenClaro catalog each taking independent action for a business this month">
              <div className="demo-head">
                <span className="demo-dot" aria-hidden="true"></span>
                OpenClaro catalog · <strong>live</strong>
              </div>
              <ol className="demo-feed">
                <li>
                  <span className="demo-time">Mon 7:42p</span>
                  <div className="demo-body">
                    <span className="badge badge-ai">Speed-to-lead</span>
                    <p className="bubble">Hi, this is Apex Plumbing — sorry we missed your call! How can we help?</p>
                  </div>
                </li>
                <li>
                  <span className="demo-time">Tue 10:15a</span>
                  <div className="demo-body">
                    <span className="badge badge-miss">Reactivation</span>
                    <p>90-day-old lead re-engaged by text — <strong>booked a consult</strong> for Thursday.</p>
                  </div>
                </li>
                <li>
                  <span className="demo-time">Wed 8:00a</span>
                  <div className="demo-body">
                    <span className="badge badge-cust">No-show guard</span>
                    <p>Reminder sent for tomorrow&apos;s 2:00 PM appointment — <strong>confirmed, slot secured</strong>.</p>
                  </div>
                </li>
                <li>
                  <span className="demo-time">Thu 4:30p</span>
                  <div className="demo-body">
                    <span className="badge badge-book">Reputation</span>
                    <p>Job completed → review request sent — <strong>5-star review posted</strong>.</p>
                  </div>
                </li>
              </ol>
              <div className="demo-tally">
                <span>This month, across the catalog</span>
                <span className="demo-figures"><strong>42 actions</strong> · <strong>$14,300</strong></span>
              </div>
            </div>
            <p className="demo-caption">Illustrative example — a few of the AI services from the catalog, each acting independently.</p>
          </div>
        </div>
      </section>

      
      {/** Team credibility 
      
      <section className="credibility">
        <div className="container credibility-inner">
          <p className="credibility-label">Built by a team that has shipped AI at</p>
          <ul className="credibility-logos">
            <li>X <span className="credibility-sub">(formerly Twitter)</span></li>
            <li>Spotify</li>
            <li>Dataminr</li>
          </ul>
        </div>
      </section>
      */}

      {/* Stats band */}
      <section className="stats">
        <div className="container stats-grid">
          <div className="stat"><strong>Every action</strong><span>logged and reported monthly</span></div>
          <div className="stat"><strong>Days</strong><span>from kickoff to live</span></div>
          <div className="stat"><strong>Monthly</strong><span>money-back guarantee</span></div>
        </div>
      </section>

      {/* The math */}
      <section className="math">
        <div className="container math-inner" data-reveal>
          <h2 className="display">A missed call, a cold lead, an empty chair — any one can be a $300–$5,000 job.</h2>
          <p className="section-sub">You already paid to attract that customer. Recovering them with AI that acts on your behalf is the cheapest revenue you&apos;ll ever add.</p>
          <div className="equation" aria-label="Example: 3 recovered jobs per month times 800 dollar average ticket equals 2,400 dollars per month back on your books">
            <span className="chip"><strong>3</strong> recovered jobs / mo</span>
            <span className="op" aria-hidden="true">×</span>
            <span className="chip"><strong>$800</strong> avg ticket</span>
            <span className="op" aria-hidden="true">=</span>
            <span className="chip chip-result"><strong>$2,400</strong> / mo back on your books</span>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section" id="services">
        <div className="container">
          <div className="section-head" data-reveal>
            <p className="eyebrow">The catalog</p>
            <h2 className="display">Six AI pieces. Pick what fits, add more anytime.</h2>
            <p className="section-sub">Each service is a self-contained AI piece you plug into your business — start with the
            leak that hurts most, and add more as the numbers prove out. Every piece you add makes
            your business a little more efficient, streamlined, predictable, and futuristic.</p>
          </div>

          <div className="cards">
            <article className="card" data-reveal>
              <div className="card-top">
                <span className="icon-box"><svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" aria-hidden="true"><path d="M13 2 4.5 13.5H11L10 22l8.5-11.5H13z" /></svg></span>
                <span className="card-tag">Easiest first win</span>
              </div>
              <h3>Speed-to-lead + missed-call text-back</h3>
              <p>Web leads and missed calls go cold in minutes. An instant, natural text
              starts the conversation while intent is hot.</p>
              <p className="card-metric">Respond in seconds, not hours.</p>
            </article>

            <article className="card" data-reveal>
              <div className="card-top">
                <span className="icon-box"><svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 4h4l2 5-2.5 1.5a12 12 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" /></svg></span>
                <span className="card-tag">High job value</span>
              </div>
              <h3>AI voice receptionist</h3>
              <p>After hours, on a job, double-booked — the AI answers every call, books the
              job on your calendar, and dispatches. One missed call can be a $300–$5,000 job.</p>
              <p className="card-metric">Never send a caller to voicemail again.</p>
            </article>

            <article className="card" data-reveal>
              <div className="card-top">
                <span className="icon-box"><svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 12a9 9 0 1 1-2.64-6.36L21 8" /><path d="M21 3v5h-5" /></svg></span>
                <span className="card-tag">Prove it fast</span>
              </div>
              <h3>Database reactivation + nurture</h3>
              <p>You&apos;re sitting on hundreds of dead leads and past customers. An AI campaign
              books appointments in week one from a list you already own — then keeps it warm.</p>
              <p className="card-metric">Revenue from contacts you already have.</p>
            </article>

            <article className="card" data-reveal>
              <div className="card-top">
                <span className="icon-box"><svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M3 10h18M8 3v4M16 3v4" /></svg></span>
                <span className="card-tag">Measurable</span>
              </div>
              <h3>Booking + no-show reduction</h3>
              <p>An empty chair is pure lost revenue — $200–$1,000 for practices. Automated
              confirmations, reminders, and easy rescheduling, with the no-show rate tracked
              before vs. after.</p>
              <p className="card-metric">Fewer empty slots, full days.</p>
            </article>

            <article className="card" data-reveal>
              <div className="card-top">
                <span className="icon-box"><svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" aria-hidden="true"><path d="M12 3l2.9 5.9 6.5.9-4.7 4.6 1.1 6.4L12 17.8 6.2 20.8l1.1-6.4L2.6 9.8l6.5-.9z" /></svg></span>
                <span className="card-tag">Bundle add-on</span>
              </div>
              <h3>Reputation / review engine</h3>
              <p>More reviews mean higher local ranking and more leads. Automated post-service
              review requests, with unhappy customers routed to private feedback first.</p>
              <p className="card-metric">Climb the local rankings on autopilot.</p>
            </article>

            <article className="card" data-reveal>
              <div className="card-top">
                <span className="icon-box"><svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6 8h12l-1.2 12.2a1.8 1.8 0 0 1-1.8 1.8H9a1.8 1.8 0 0 1-1.8-1.8L6 8z" /><path d="M9 10V7a3 3 0 0 1 6 0v3" /></svg></span>
                <span className="card-tag">E-commerce</span>
              </div>
              <h3>AI live selling agent</h3>
              <p>An AI that talks with shoppers as they browse your catalog — answering
              questions and guiding them to checkout in real time.</p>
              <p className="card-metric">A salesperson on every product page.</p>
            </article>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section section-alt" id="how">
        <div className="container">
          <div className="section-head" data-reveal>
            <p className="eyebrow">How it works</p>
            <h2 className="display">Live in days. Measured monthly.</h2>
          </div>
          <div className="steps">
            <div className="step" data-reveal>
              <span className="step-num display">01</span>
              <h3>Find the leak</h3>
              <p>We audit where revenue slips away — missed calls, slow lead response,
              no-shows, or a dead contact list — and put a dollar figure on it.</p>
            </div>
            <div className="step" data-reveal>
              <span className="step-num display">02</span>
              <h3>Deploy the AI</h3>
              <p>We set up and tune the right piece for your business, connect it to the tools
              you already run on — phone, calendar, CRM, and beyond — and you approve everything
              before it goes live.</p>
            </div>
            <div className="step" data-reveal>
              <span className="step-num display">03</span>
              <h3>Measure the lift</h3>
              <p>Jobs recovered, response times, no-show rate — every action is logged and
              reported monthly, so you see exactly what came back and what we earned.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Verticals */}
      <section className="section" id="verticals">
        <div className="container">
          <div className="section-head" data-reveal>
            <p className="eyebrow">Who it&apos;s for</p>
            <h2 className="display">Built for businesses where a missed contact costs real money.</h2>
            <p className="section-sub">From owner-operated shops to $50M multi-location operations.</p>
          </div>
          <div className="verticals">
            <div className="vertical" data-reveal>
              <span className="icon-box"><svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 11l8-7 8 7" /><path d="M6 9.5V20h12V9.5" /></svg></span>
              <h3>Home services</h3>
              <p>Plumbing, HVAC, electrical, roofing. Phone-driven and high job value —
              missed calls and slow lead response hurt the most here.</p>
            </div>
            <div className="vertical" data-reveal>
              <span className="icon-box"><svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="M12 8v8M8 12h8" /></svg></span>
              <h3>Medical, dental &amp; med-spa</h3>
              <p>No-shows and booking are the core pain. Confirmations and reminders that
              keep chairs full — tracked before vs. after.</p>
            </div>
            <div className="vertical" data-reveal>
              <span className="icon-box"><svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6 8h12l-1.2 12.2a1.8 1.8 0 0 1-1.8 1.8H9a1.8 1.8 0 0 1-1.8-1.8L6 8z" /><path d="M9 10V7a3 3 0 0 1 6 0v3" /></svg></span>
              <h3>E-commerce &amp; retail</h3>
              <p>Online stores that want a live AI selling agent guiding shoppers through
              the catalog and into checkout in real time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="section dark" id="guarantee">
        <div className="container">
          <div className="section-head" data-reveal>
            <p className="eyebrow">Zero risk</p>
            <h2 className="display">The OpenClaro Triple Guarantee.</h2>
            <p className="section-sub">Free to start. We earn a commission only on the jobs we recover.</p>
          </div>
          <div className="guar-grid">
            <div className="guar" data-reveal>
              <span className="icon-box"><svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M14 4h5v16h-5" /><path d="M3 12h11M10 8l4 4-4 4" /></svg></span>
              <h3>Leave any time</h3>
              <p>No contracts. If it isn&apos;t working for you, walk away — no questions, no fees.</p>
            </div>
            <div className="guar" data-reveal>
              <span className="icon-box"><svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="M15 9.5c-.6-1-1.7-1.5-3-1.5-1.8 0-3 .9-3 2s1.2 1.7 3 2 3 1 3 2-1.2 2-3 2c-1.3 0-2.4-.5-3-1.5" /><path d="M12 6v2M12 16v2" /></svg></span>
              <h3>Money back, monthly</h3>
              <p>Guaranteed month by month — if we didn&apos;t deliver, you don&apos;t pay. Simple.</p>
            </div>
            <div className="guar" data-reveal>
              <span className="icon-box"><svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 14 4 9l5-5" /><path d="M4 9h10a6 6 0 0 1 0 12h-3" /></svg></span>
              <h3>Your presence, restored</h3>
              <p>Everything we touch — website, listings, campaigns — goes back exactly the
              way it was when we started.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" id="faq">
        <div className="container faq-wrap">
          <div className="section-head" data-reveal>
            <p className="eyebrow">Questions</p>
            <h2 className="display">Straight answers.</h2>
          </div>
          <div className="faq" data-reveal>
            <details open>
              <summary>What does it cost?</summary>
              <p>Nothing upfront — no setup fee, no monthly retainer. Before anything goes
              live we agree on a simple commission for each job we recover. If we recover
              nothing, you pay nothing.</p>
            </details>
            <details>
              <summary>What counts as a &ldquo;recovered job&rdquo;?</summary>
              <p>We define it together before launch — for example, a booked appointment
              that came from a missed call we answered. Every recovered job is logged and
              itemized in your monthly report, so there&apos;s never a debate about the number.</p>
            </details>
            <details>
              <summary>How fast can we go live?</summary>
              <p>Days, not months. We connect to your existing phone, calendar, and CRM,
              tune the AI to how your business actually talks, and you approve it before it
              takes its first call.</p>
            </details>
            <details>
              <summary>What happens if we part ways?</summary>
              <p>You can leave any time — and everything we manage on your behalf is
              restored to exactly how it was before we started. That&apos;s the third leg of the
              Triple Guarantee.</p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section" id="cta">
        <div className="container">
          <div className="cta-card" data-reveal>
            <h2 className="display">See what you&apos;re leaking — and what you&apos;d get back.</h2>
            <p>Book a free revenue audit. We&apos;ll show you exactly where customers are
            slipping away, and what recovering them is worth.</p>
            <CtaForm />
            <p className="cta-small">Free · No commitment · About 20 minutes</p>
          </div>
        </div>
      </section>
    </main>
  );
}
