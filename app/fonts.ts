import { Cormorant_Garamond, EB_Garamond, IBM_Plex_Mono } from "next/font/google";

// Display: headings, brand, Latin lines, figure captions
export const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-display",
});

// Body: all body copy, small-caps labels
export const body = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-body",
});

// Mono: dates, small annotations
export const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-mono",
});

export const fontVariables = `${display.variable} ${body.variable} ${mono.variable}`;
