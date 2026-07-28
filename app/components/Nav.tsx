import Link from "next/link";
import { nav } from "@/app/data/content";
import EmailLink from "./EmailLink";
import MobileMenu from "./MobileMenu";

export default function Nav() {
  return (
    <header className="site-header">
      <Link className="brand" href="/#top" aria-label="Constantin Chirila, home">
        <span className="logo" aria-hidden="true">
          <span />
        </span>
        <span className="wordmark">
          {nav.brandFirst} <em>{nav.brandLast}</em>
        </span>
      </Link>

      {/* Desktop links (hidden under 900px) */}
      <nav className="site-nav" aria-label="Main">
        {nav.links.map((link) => (
          <Link key={link.href} href={link.href}>
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="header-cta">
        <Link href={nav.cvCta.href} className="cta-pill-outline">
          {nav.cvCta.label}
        </Link>
        <EmailLink className="cta-pill" subject="Hello">
          {nav.cta.label}
        </EmailLink>
      </div>

      {/* Mobile menu: native disclosure that closes on navigation */}
      <MobileMenu />
    </header>
  );
}
