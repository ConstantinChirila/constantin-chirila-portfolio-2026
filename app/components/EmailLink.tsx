"use client";

import { useEffect, useState, type ReactNode } from "react";

// Address is base64-encoded so the plaintext never appears in the static HTML,
// where email harvesters scan. It is decoded in the browser only.
const ENC = "aGVsbG9AY29uc3RhbnRpbmNoaXJpbGEuY29t";
const decode = () => (typeof atob === "function" ? atob(ENC) : "");

interface EmailLinkProps {
  className?: string;
  /** Optional mailto subject line. */
  subject?: string;
  /**
   * When true, the link text is the (decoded) address itself, shown only after
   * hydration. Otherwise `children` is used as the label.
   */
  showAddress?: boolean;
  /** Fallback label rendered on the server and before JS decodes the address. */
  fallback?: string;
  children?: ReactNode;
}

/**
 * A bot-resistant email link. The server renders a plain button with no href
 * and no address; on mount the browser decodes the address and wires up the
 * mailto. Clicking before hydration still works via the onClick fallback.
 */
export default function EmailLink({
  className,
  subject,
  showAddress = false,
  fallback = "Email me",
  children,
}: EmailLinkProps) {
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    setEmail(decode());
  }, []);

  const mailto = (address: string) =>
    `mailto:${address}${subject ? `?subject=${encodeURIComponent(subject)}` : ""}`;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!email) {
      e.preventDefault();
      const address = decode();
      if (address) window.location.href = mailto(address);
    }
  };

  return (
    <a
      className={className}
      href={email ? mailto(email) : undefined}
      onClick={handleClick}
      rel="nofollow"
    >
      {showAddress ? (email ?? fallback) : (children ?? fallback)}
    </a>
  );
}
