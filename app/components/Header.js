import NavMenu from "./NavMenu";

export default function Header() {
  return (
    <header className="site-header" id="top">
      <div className="container nav">
        <a href="#top" className="brand" aria-label="OpenClaro home">
          <svg className="brand-mark" viewBox="0 0 24 24" aria-hidden="true">
            <rect x="6.3" y="6.3" width="11.4" height="11.4" rx="1.5" transform="rotate(45 12 12)" />
          </svg>
          OpenClaro
        </a>
        <NavMenu />
      </div>
    </header>
  );
}
