import Link from "next/link";
import { nav } from "@/app/data/content";
import EmailLink from "./EmailLink";
import MobileMenu from "./MobileMenu";

export default function Nav() {
  return (
    <nav>
      <div className="wrap">
        <Link className="brand" href="/#top">
          {nav.brandFirst} <em>{nav.brandLast}</em>
        </Link>

        {/* Desktop links (hidden under 900px) */}
        <div className="navlinks">
          {nav.links.map((link) => (
            <Link key={link.href} href={`/${link.href}`}>
              {link.label}
            </Link>
          ))}
        </div>
        <EmailLink className="navcta" subject="Hello">
          {nav.cta.label}
        </EmailLink>

        {/* Mobile menu: native disclosure that closes on navigation */}
        <MobileMenu />
      </div>
    </nav>
  );
}
