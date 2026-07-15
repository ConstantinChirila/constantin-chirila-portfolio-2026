import type { PlateName } from "@/app/lib/plates";

export const nav = {
  brandFirst: "Constantin",
  brandLast: "Chirila",
  links: [
    { label: "Gardens", href: "#work" },
    // Method link removed from nav (the section still lives on the homepage).
    // { label: "Method", href: "#process" },
    // Conservatory hidden until the tools are ready to show.
    // { label: "Conservatory", href: "#tools" },
    // Almanac hidden until there are articles ready.
    // { label: "Almanac", href: "almanac" },
    { label: "About", href: "about" },
    { label: "CV", href: "cv" },
  ],
  cta: { label: "Correspond", href: "#contact" },
};

export interface Discipline {
  emblem: PlateName;
  title: string;
  body: string;
  latin: string;
}

export const disciplines: Discipline[] = [
  {
    emblem: "emblem-stem",
    title: "Front-end engineering",
    body: "The part people actually touch: fast, accessible interfaces built in React and TypeScript, with clean, maintainable code and design systems that hold up as they grow.",
    latin: "the visible growth",
  },
  {
    emblem: "emblem-bloom",
    title: "Design & UX",
    body: "Where I started, over a decade ago. A real design and illustration background means interfaces judged by how they're used, not how they demo, and an eye for the details that make software feel considered.",
    latin: "where I first grew",
  },
  {
    emblem: "emblem-root",
    title: "Backend when it's needed",
    body: "When a project needs the whole thing, I build the APIs and systems behind the front-end too, so I can take an app from idea to something running, on my own.",
    latin: "the roots, within reach",
  },
];

export interface Season {
  n: string;
  title: string;
  body: string;
}

export const seasons: Season[] = [
  {
    n: "i. prepare the ground",
    title: "Frame",
    body: "Work out the real problem, the constraints, and what success looks like, before any code is written.",
  },
  {
    n: "ii. plant",
    title: "Shape",
    body: "Plan the build and choose the right tools for it. Every decision is written down, so nothing is a black box.",
  },
  {
    n: "iii. tend",
    title: "Build",
    body: "Build in short cycles, front-end first, with working software to see early and often.",
  },
  {
    n: "iv. harvest",
    title: "Launch",
    body: "Ship it. What's left is clean, documented code a team can own outright, or I stay on to keep building.",
  },
];

export type ToolStatus = "live" | "wip" | "plan";

export interface Tool {
  insect: PlateName;
  status: ToolStatus;
  statusLabel: string;
  title: string;
  body: string;
}

export const tools: Tool[] = [
  {
    insect: "insect-hummingbird",
    status: "live",
    statusLabel: "In bloom",
    title: "Playlist Exporter",
    body: "Export any Spotify playlist to a spreadsheet with ready-made YouTube search links. No migration middleman.",
  },
  {
    insect: "insect-morpho",
    status: "wip",
    statusLabel: "Budding",
    title: "Wire Protocol Tester",
    body: "Inspect and replay peer-to-peer transfers over local Wi-Fi. The debugging tool I wanted while building offline sync.",
  },
  {
    insect: "insect-beetle",
    status: "plan",
    statusLabel: "Seed",
    title: "Grid Composer",
    body: "Generate and export layout grids as CSS or design tokens. A small utility that keeps my builds consistent.",
  },
];

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "At Mention Me we worked with Constantin for a few years and were constantly impressed both by the quality and promptness of his output. He was always willing to go out of his way to make sure we (and our clients) got a great finished product.",
    name: "Simon Dring",
    role: "Head of Client Success · Mention Me",
  },
  {
    quote:
      "Having worked with Constantin for a few years, we can safely say that we are impressed and satisfied; he is thorough and knowledgeable and he always had our company's interests in mind when delivering.",
    name: "Madison Lee",
    role: "Regional Business Development Manager · iFootage Gear",
  },
  {
    // NOTE: original quote said "designer", softened to "professional" — confirm with David Hobbs.
    quote:
      "Constantin was a real pleasure to work with and we look forward to working with him again. He's definitely the kind of professional you can trust with a project from start to finish.",
    name: "David Hobbs",
    role: "Software Development Director · Workvine",
  },
];

export const clients: string[] = [
  "Diagrid",
  "Dapr",
  "Jetstack",
  "Cert Manager",
  "Purplebricks",
  "Mention Me",
  "Debenhams",
  "OVO Energy",
  "Belstaff",
  "Evans Cycles",
  "Biscuiteers",
  "University of Worcester",
  "Workvine",
];

export interface Value {
  title: string;
  body: string;
}

export const values: Value[] = [
  {
    title: "Clarity over cleverness",
    body: "Code and decisions a future team can read cold.",
  },
  {
    title: "Own it end to end",
    body: "From the first sketch to the thing running in production.",
  },
  {
    title: "Write it down",
    body: "Every trade-off documented; nothing lives only in my head.",
  },
  {
    title: "Grow it to last",
    body: "Foundations before flourishes, so the software is still standing in five years.",
  },
];

export const social = {
  github: "https://github.com/ConstantinChirila",
  linkedin: "https://www.linkedin.com/in/constantinchirila/",
  x: "https://x.com/ConstantinC",
  // Email intentionally omitted here; it is base64-encoded in EmailLink so the
  // plaintext address never ships in the static HTML for bots to scan.
};
