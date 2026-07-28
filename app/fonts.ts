import { Archivo, IBM_Plex_Mono } from "next/font/google";

// Display / UI: headings, wordmark, work-table client names, stat numbers
export const display = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-display",
});

// Mono: labels, body copy, chips, buttons, nav
export const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-mono",
});

export const fontVariables = `${display.variable} ${mono.variable}`;
