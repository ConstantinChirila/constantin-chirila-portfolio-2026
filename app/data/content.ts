export const nav = {
  brandFirst: "Constantin",
  brandLast: "Chirila",
  links: [
    { label: "Work", href: "/#work" },
    { label: "Lab", href: "/lab" },
    { label: "Notes", href: "/notes" },
    { label: "About", href: "/about" },
  ],
  cvCta: { label: "CV", href: "/cv" },
  cta: { label: "Email me", href: "#contact" },
};

export const hero = {
  eyebrow: "Frontend engineer · Design & UX · Est. 2013",
  title: "From idea to shipped.",
  intro:
    "I'm a frontend engineer with a designer's eye. I build fast, accessible interfaces in React and TypeScript, and the backend to run them when a project needs it. Design is where I started, so I care how the whole thing feels, not just how it works.",
  plateLabel: "3 disciplines → 1 build",
};

export interface ToolkitRow {
  index: string;
  label: string;
  chips: string[];
}

// Content mirrors the CV skill groups (app/data/cv.ts, sourced from the CV
// PDF), phrased for the toolkit table.
export const toolkit: ToolkitRow[] = [
  {
    index: "A",
    label: "Languages & core",
    chips: [
      "React",
      "Next.js",
      "Node.js",
      "TypeScript",
      "JavaScript ES2023+",
      "HTML5 · CSS3 · SASS",
      "Python",
    ],
  },
  {
    index: "B",
    label: "State & data",
    chips: [
      "React Query",
      "Context API",
      "Redux",
      "GraphQL",
      "SQL",
      "MongoDB",
      "REST APIs",
    ],
  },
  {
    index: "C",
    label: "Testing & quality",
    chips: [
      "Jest",
      "React Testing Library",
      "Cypress",
      "Playwright",
      "TDD: unit · integration · E2E",
    ],
  },
  {
    index: "D",
    label: "Tooling & delivery",
    chips: [
      "Git",
      "GitHub Actions CI/CD",
      "Webpack",
      "Vite",
      "Kubernetes",
      "Datadog · Sentry",
      "Google Tag Manager",
      "Lighthouse · Web Vitals",
      "WCAG",
      "Storybook",
      "Figma",
      "Photoshop",
    ],
  },
  {
    index: "E",
    label: "Practices",
    chips: [
      "Modular / component architecture",
      "Responsive design",
      "AI-assisted development",
      "Claude Code · local LLM workflows · agents",
    ],
  },
];

export type DisciplinePlate = "spiral" | "lattice" | "nested";

export interface Discipline {
  plate: DisciplinePlate;
  plateLabel: string;
  title: string;
  body: string;
  chips: string[];
}

export const disciplines: Discipline[] = [
  {
    plate: "spiral",
    plateLabel: "01 / VISIBLE LAYER",
    title: "Frontend engineering.",
    body: "The part people actually touch: fast, accessible interfaces in React and TypeScript, with clean code and design systems that hold up as they grow.",
    chips: ["React", "TypeScript", "Next.js"],
  },
  {
    plate: "lattice",
    plateLabel: "02 / ORIGIN",
    title: "Design & UX.",
    body: "Where I started, over a decade ago. Interfaces judged by how they're used, not how they demo, plus an eye for the details that make software feel considered.",
    chips: ["Figma", "Systems", "Motion"],
  },
  {
    plate: "nested",
    plateLabel: "03 / SUBSTRUCTURE",
    title: "Backend when needed.",
    body: "When a project needs the whole thing, I build the APIs and systems behind the frontend too, taking it from idea to something running, on my own.",
    chips: ["Node", "Postgres", "APIs"],
  },
];

export interface WorkEntry {
  no: string;
  client: string;
  scope: string;
  type: "Startup" | "Scale-up" | "OSS";
  stack: string;
  year: string;
}

// Dates cross-checked against the CV; Dapr work happened inside the Diagrid
// engagement, hence the shared range.
export const work: WorkEntry[] = [
  {
    no: "01",
    client: "Diagrid",
    scope: "Conductor & Catalyst: frontend architecture, workflow visualiser",
    type: "Startup",
    stack: "React · Next.js · TS · Node.js · Python · k8s · Cypress · CI/CD",
    year: "2022–26",
  },
  {
    no: "02",
    client: "Dapr",
    scope: "Open-source JS SDK: Workflows, Conversation API",
    type: "OSS",
    stack: "TypeScript · Node.js · Dapr",
    year: "2022–26",
  },
  {
    no: "03",
    client: "Jetstack (acquired by Venafi)",
    scope: "Secure Platform frontend, docs as one Next.js app",
    type: "Startup",
    stack: "React · TS · Playwright · Next.js · k8s",
    year: "2021–22",
  },
  {
    no: "04",
    client: "Cert Manager",
    scope: "Website & documentation frontend",
    type: "OSS",
    stack: "Next.js · MDX",
    year: "2022",
  },
  {
    no: "05",
    client: "PurpleBricks",
    scope: "Search, listings, refunds app across micro-frontends",
    type: "Scale-up",
    stack: "React · TS · Next.js · Storybook · Cypress · React Query",
    year: "2019–21",
  },
  {
    no: "06",
    client: "Rapticore",
    scope: "Cybersecurity observability UI: led 4 engineers, design + frontend",
    type: "Startup",
    stack: "React · TS",
    year: "2019–22",
  },
  {
    no: "07",
    client: "Mention Me",
    scope: "Referral frontends for UK retail brands",
    type: "Scale-up",
    stack: "Design · JS · CSS · HTML",
    year: "2016–19",
  },
  {
    no: "08",
    client: "Workvine",
    scope: "Founding team: product UI, end-to-end delivery",
    type: "Startup",
    stack: "Design · JS · CSS · HTML",
    year: "2015–18",
  },
];

export const previousClients: string[] = [
  "OVO Energy",
  "Belstaff",
  "Debenhams",
  "Evans Cycles",
  "Biscuiteers",
  "University of Worcester",
  "Iintegra",
  "Flex Recruitment",
];

export interface MethodStage {
  numeral: string;
  title: string;
  body: string;
}

export const method: MethodStage[] = [
  {
    numeral: "I",
    title: "Frame",
    body: "Work out the real problem, the constraints, and what success looks like, before any code is written.",
  },
  {
    numeral: "II",
    title: "Shape",
    body: "Plan the build and choose the right tools for it. Every decision written down, so the team can follow it later.",
  },
  {
    numeral: "III",
    title: "Build",
    body: "Short cycles, frontend first, with working software to see early and often.",
  },
  {
    numeral: "IV",
    title: "Launch",
    body: "Ship it. What's left is clean, documented code a team can own outright, or I stay on and keep building.",
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
      "Constantly impressed by both the quality and promptness of his output. Always willing to go out of his way so we, and our clients, got a great finished product.",
    name: "Simon Dring",
    role: "Head of Client Success · Mention Me",
  },
  {
    quote:
      "Thorough and knowledgeable. He always had our company's interests in mind when delivering.",
    name: "Madison Lee",
    role: "Regional BD Manager · iFootage Gear",
  },
  {
    // NOTE: original quote said "designer", softened to "professional", confirm with David Hobbs.
    quote:
      "A real pleasure to work with. Definitely the kind of professional you can trust with a project from start to finish.",
    name: "David Hobbs",
    role: "Software Development Director · Workvine",
  },
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
    title: "Build it to last",
    body: "Foundations before flourishes, so the software is still standing in five years.",
  },
];

export const contact = {
  label: "Correspondence",
  title: "Something worth building?",
  details: [
    { term: "Based", detail: "United Kingdom · remote" },
    { term: "Practising", detail: "Since 2013" },
    { term: "Response", detail: "Within one working day" },
  ],
};

export const social = {
  github: "https://github.com/ConstantinChirila",
  linkedin: "https://www.linkedin.com/in/constantinchirila/",
  x: "https://x.com/ConstantinC",
  // Email intentionally omitted here; it is base64-encoded in EmailLink so the
  // plaintext address never ships in the static HTML for bots to scan.
};

// test
