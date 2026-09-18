/**
 * Tools, apps and experiments I build and ship myself: free, open source, paid,
 * or just for my own desk. Distinct from the client engagements in `work`
 * (app/data/content.ts). The array order is the page order, newest or most
 * interesting first, so no date field is needed.
 */

export type LabStatus = "Live" | "WIP" | "Archived";

export type LabKind =
  | "Web app"
  | "macOS app"
  | "CLI"
  | "Game"
  | "Library"
  | "Claude skill";

export interface LabLink {
  /** Shown on the pill; a bare domain reads better than "Visit". */
  label: string;
  href: string;
}

export interface LabArt {
  /** Path under /public. Rendered only once the file actually exists, so an
   *  item can be listed before its artwork is ready. */
  src: string;
  alt: string;
}

export interface LabItem {
  /** Stable key, and the anchor the home page band links to (/lab#id). */
  id: string;
  name: string;
  /** One line. The thing itself, in the fewest words possible. */
  lede: string;
  /** Two or three sentences of substance. */
  blurb: string;
  status: LabStatus;
  kind: LabKind;
  /** Outbound links. Empty for anything not released. */
  links: LabLink[];
  /** Optional line explaining an empty links list or an odd status. */
  note?: string;
  art?: LabArt;
}

export const lab: LabItem[] = [
  {
    id: "bits-and-bobs",
    name: "Bits & Bobs",
    lede: "Free UK calculators for money and everyday maths. No sign-up, no email.",
    blurb:
      "A small library of single-purpose web calculators: UK take-home salary, mortgage repayments and overpayments, compound interest, percentages, unit conversion, commute time, countdowns and arrow spine. Every tool is one page, works instantly with sensible defaults, and encodes its state in the URL, so any result is a shareable link.",
    status: "Live",
    kind: "Web app",
    links: [{ label: "bitsnbobs.tools", href: "https://bitsnbobs.tools" }],
    art: {
      src: "/lab/bits-and-bobs.webp",
      alt: "Bits & Bobs sticker sheet: pastel tiles for a wallet, a house, a percentage sign, a rising trend, a stopwatch and a unit conversion, beside a live countdown and a take-home pay figure.",
    },
  },
  {
    id: "deskpouch",
    name: "Deskpouch",
    lede: "One macOS menubar app for every capture tool on my desk.",
    blurb:
      "Hold-to-talk dictation transcribed on the Neural Engine, a screen recorder, screenshot capture with an annotation editor, and a magnifying colour picker, all behind one shell. A single panel drops from the menubar and is the whole app, while a floating pill reports what is happening and offers the next step. Swift 6 and SwiftUI, everything local, no accounts and no cloud.",
    status: "WIP",
    kind: "macOS app",
    links: [],
    note: "Built for my own desk, in daily use, not publicly released.",
    art: {
      src: "/lab/deskpouch.webp",
      alt: "Deskpouch's menubar panel floating over a desk, listing its capture tools as rows, with the screen recorder row opened into a region picker.",
    },
  },
];
