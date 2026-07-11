import Year from "./Year";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <a href="#top" className="brand">
          <svg className="brand-mark" viewBox="0 0 24 24" aria-hidden="true">
            <rect x="6.3" y="6.3" width="11.4" height="11.4" rx="1.5" transform="rotate(45 12 12)" />
          </svg>
          OpenClaro
        </a>
        <p>Open about what AI can do. Clear about what it recovers.</p>
        <nav className="footer-links">
          <a href="#modules">Modules</a>
          <a href="#guarantee">Guarantee</a>
          <a href="#faq">FAQ</a>
          <a href="#cta">Book a free consultation</a>
        </nav>
        <p className="copyright">© <Year /> OpenClaro. All rights reserved.</p>
      </div>
    </footer>
  );
}
