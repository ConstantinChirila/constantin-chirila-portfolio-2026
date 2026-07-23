import type { PlateName } from "@/app/lib/plates";

export const cvProfile =
  "Senior software engineer with 10+ years building production web applications, focused on React and TypeScript at scale. Founding-team experience taking developer-tools products from MVP to flagship. I design maintainable, scalable front-end architecture and can own delivery end to end, from data layer to interface, using AI-assisted workflows to move quickly without sacrificing code quality. A prior decade in design and UX means I bridge product, design, and engineering rather than just consuming specs.";

export const cvMeta =
  "Senior front-end engineer · Design-led, backend capable · Birmingham, UK";

export interface Role {
  title: string;
  org: string;
  period: string;
  /** Optional intro line above the achievement bullets. */
  body?: string;
  /** Achievement bullets. */
  bullets?: string[];
  /** Specimen illustration reused as a herbarium marker. */
  plate: PlateName;
}

export const experience: Role[] = [
  {
    title: "Senior Front End Engineer",
    org: "Diagrid",
    period: "September 2022 – August 2026",
    body: "Founding-team engineer. Built Conductor, then took Catalyst from MVP to flagship product, owning front-end architecture throughout.",
    bullets: [
      "Led the Catalyst front end, including a complex workflow-execution visualiser handling thousands of nodes with real-time stats: a USP that directly attracted several customers.",
      "Built the automated testing suite and improved CI, reducing bug-fix requests by 60%.",
      "Contributed to the Dapr open-source JavaScript SDK, working on Workflows and the Conversation API.",
      "Shaped product design and UX for Catalyst.",
      "Built AI agents and reusable skills that let non-technical teammates safely ship marketing-site changes, cutting engineering requests by 50%.",
      "Increased marketing website performance (FCP) by 76%.",
    ],
    plate: "specimen-01-monstera",
  },
  {
    title: "Senior Front End Engineer",
    org: "Jetstack",
    period: "January 2021 – September 2022",
    bullets: [
      "Led development and front-end architecture of the Jetstack Secure platform.",
      "Rebuilt product documentation as a single Next.js and MDX application.",
      "Contributed to deployment pipelines and mentored 4 backend engineers into front-end work; supported design and marketing on the company site.",
      "Contributed to the cert-manager website.",
    ],
    plate: "specimen-03-strelitzia",
  },
  {
    title: "Front End Engineer",
    org: "Purplebricks",
    period: "May 2019 – January 2021",
    bullets: [
      "Built Search, Listings, and a new refunds application across a high-traffic property platform.",
      "Increased web application performance by 35%.",
      "Led the migration from Redux to React Query and Context across 3 micro-front-ends.",
      "Contributed heavily to the design system; mentored 4 junior engineers.",
    ],
    plate: "specimen-02-palm",
  },
  {
    title: "Front End Developer",
    org: "Phoebus Software Ltd",
    period: "May 2018 – May 2019",
    bullets: [
      "Owned the front end of the web entry point for banking-sector clients.",
      "Built a configurable form builder with Vue.js, TypeScript, and Webpack; improved UX by reducing the time to complete a loan application by 38%.",
    ],
    plate: "specimen-04-banana",
  },
  {
    title: "Software Engineer / UI Designer (Freelance)",
    org: "Independent",
    period: "2009 – Present",
    body: "Technical partner to founders and product teams: architecture, front-end builds, and product/UX, often as the sole engineer. Selected work:",
    bullets: [
      "Rapticore: led a team of 4 front-end engineers for 3 years building a cybersecurity observability platform, owning front-end architecture and direction.",
      "Romanian Association of Medical Students: built an online mock-exam application supporting up to 5,000 concurrent students per sitting with no drop in performance.",
      "iFootage Gear: built the e-commerce site and helped plan marketing campaigns and collateral. Increased sales by 18%.",
      "Mention Me: front-end and marketing builds serving UK retail brands (Debenhams, Radley, OVO Energy, Joseph Joseph, and others).",
      "Stard.io: built their marketing site and web application front end.",
    ],
    plate: "specimen-01-monstera",
  },
  {
    title: "Lead Front End Developer / Designer",
    org: "iintegra / Workvine",
    period: "August 2015 – May 2018",
    body: "A founding-team member at Workvine, where I built a series of its IP technologies and led a team of two junior designers. At iintegra I rebuilt and maintained the front-end of their Applicant Tracking System (ATS) and led its design direction and UX.",
    plate: "specimen-03-strelitzia",
  },
];

export interface Education {
  qualification: string;
  place: string;
  period: string;
  detail?: string;
}

export const education: Education[] = [
  {
    qualification: "BA (Hons) Creative Digital Media and Illustration",
    place: "University of Worcester, UK",
    period: "2011 – 2014",
    detail:
      "Final-year projects included a web application for teaching children Spanish and the UI design for a mobile game.",
  },
  {
    qualification: "Mathematics and Computer Science",
    place: "Danube Lyceum, Romania",
    period: "2003 – 2007",
  },
];

export interface SkillGroup {
  label: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    label: "Languages & core",
    items: [
      "TypeScript",
      "JavaScript (ES2023+)",
      "React",
      "Next.js",
      "Node.js",
      "HTML5 / CSS3 / SASS",
      "Python",
      "Kubernetes basics",
    ],
  },
  {
    label: "State & data",
    items: [
      "React Query",
      "Context API",
      "Redux",
      "GraphQL",
      "MongoDB",
      "REST APIs",
    ],
  },
  {
    label: "Testing & quality",
    items: [
      "Jest",
      "React Testing Library",
      "Playwright",
      "Cypress",
      "TDD (unit / integration / E2E)",
    ],
  },
  {
    label: "Tooling & delivery",
    items: [
      "Git / GitHub Actions (CI/CD)",
      "Webpack / Vite",
      "Lighthouse / Web Vitals",
      "WCAG",
      "Storybook",
      "Figma / Photoshop",
    ],
  },
  {
    label: "Practices",
    items: [
      "Modular / component architecture",
      "Responsive design",
      "AI-assisted development (Claude Code, local LLM workflows, agents)",
    ],
  },
];
