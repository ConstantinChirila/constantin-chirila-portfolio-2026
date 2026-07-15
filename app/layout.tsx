import type { Metadata, Viewport } from "next";
import { fontVariables } from "./fonts";
import "./globals.css";

const SITE_URL = "https://constantinchirila.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Constantin Chirila · Front-end engineer & designer",
  description:
    "Constantin Chirila is a UK-based front-end engineer with a strong design and UX background, building fast, accessible interfaces in React and TypeScript, and the backend to run them when a project needs it.",
  openGraph: {
    type: "website",
    title: "Constantin Chirila · Front-end engineer & designer",
    description:
      "Constantin Chirila is a UK-based front-end engineer with a strong design and UX background, building fast, accessible interfaces in React and TypeScript, and the backend to run them when a project needs it.",
    url: SITE_URL,
    siteName: "Constantin Chirila",
  },
  twitter: {
    card: "summary_large_image",
    title: "Constantin Chirila · Front-end engineer & designer",
    description:
      "UK-based front-end engineer with a designer's eye. React, TypeScript, and the backend when it's needed.",
  },
  // Favicon and OG image are provided by the app/icon.svg and
  // app/opengraph-image.tsx file conventions.
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "only light",
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
      </head>
      <body>{children}</body>
    </html>
  );
}
