import type { Metadata, Viewport } from "next";
import { fontVariables } from "./fonts";
import { siteUrl, siteName, siteTitle, siteDescription } from "./lib/site";
import { social } from "./data/content";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s · Constantin Chirila",
  },
  description: siteDescription,
  // Canonical is set per-page (see each page's metadata) so routes without one
  // — e.g. the 404 — don't inherit a wrong canonical from the layout.
  openGraph: {
    type: "website",
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName,
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description:
      "UK-based front-end engineer with a designer's eye. React, TypeScript, and the backend when it's needed.",
  },
  // Favicon and OG images are provided by the app/icon.svg and
  // opengraph-image.tsx file conventions (root + per route).
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "only light",
};

// Person + WebSite structured data for the knowledge graph.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      name: siteName,
      url: siteUrl,
      jobTitle: "Front-end engineer & designer",
      description: siteDescription,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Birmingham",
        addressCountry: "GB",
      },
      sameAs: [social.github, social.linkedin, social.x],
    },
    {
      "@type": "WebSite",
      name: siteName,
      url: siteUrl,
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={fontVariables}>
      <head>
        <meta name="supported-color-schemes" content="light" />
        {/* Ensure reveal-on-scroll content is visible even without JS. */}
        <noscript>
          {/* eslint-disable-next-line react/no-danger */}
          <style
            dangerouslySetInnerHTML={{
              __html: ".reveal{opacity:1 !important;transform:none !important}",
            }}
          />
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Nav />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
