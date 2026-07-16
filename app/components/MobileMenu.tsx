"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav } from "@/app/data/content";
import EmailLink from "./EmailLink";

/**
 * Mobile disclosure menu. Uses a native <details> (so it works without JS) but
 * closes itself on link click and on route change, since a client-side
 * navigation would otherwise leave the panel open.
 */
export default function MobileMenu() {
  const ref = useRef<HTMLDetailsElement>(null);
  const pathname = usePathname();

  const close = () => {
    if (ref.current) ref.current.open = false;
  };

  // Close after a route change (covers programmatic / same-hash navigations).
  useEffect(() => {
    close();
  }, [pathname]);

  return (
    <details ref={ref} className="mobilemenu">
      <summary aria-label="Toggle menu">
        <span className="bars" aria-hidden="true" />
      </summary>
      {/* Any click inside the panel (a link or the email CTA) closes the menu */}
      <div className="mobilemenu-panel" onClick={close}>
        {nav.links.map((link) => (
          <Link key={link.href} href={`/${link.href}`}>
            {link.label}
          </Link>
        ))}
        <EmailLink subject="Hello">{nav.cta.label}</EmailLink>
      </div>
    </details>
  );
}
