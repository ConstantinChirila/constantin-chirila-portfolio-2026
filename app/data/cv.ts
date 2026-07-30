// Source of truth: Constantin Chirila CV 2026 v2 (public/constantin-chirila-cv.pdf).
// Facts, dates, titles, and numbers mirror the PDF verbatim; prose is lightly
// copyedited only where the PDF grammar needed smoothing.

export const cvProfile =
  "Senior software engineer with 10+ years building production web applications, focused on React and TypeScript at scale. Founding-team experience taking developer-tools products from MVP to flagship. I design maintainable, scalable frontend architecture and can own delivery end to end, from data layer to interface, using AI-assisted workflows to move quickly without sacrificing code quality. A prior decade in design and UX means I bridge product, design, and engineering rather than just consuming specs.";

export const cvMeta =
  "Senior frontend engineer · Design-led · Backend capable · Birmingham, UK";

export interface Role {
  title: string;
  org: string;
  period: string;
  /** Optional intro line above the achievement bullets. */
  body?: string;
  /** Achievement bullets. */
  bullets?: string[];
}

export const experience: Role[] = [
  {
    title: "Senior Frontend Engineer",
    org: "Diagrid",
    period: "September 2022 – July 2026",
    body: "Founding-team engineer. Built Conductor, then built the Catalyst MVP and owned its frontend architecture as the team took it to flagship.",
    bullets: [
      "Led the Catalyst frontend, including a complex workflow-execution visualiser handling thousands of nodes with real-time stats; a differentiating feature that directly attracted several customers.",
      "Built the automated testing suite and improved CI, cutting production bug reports by 60%.",
      "Contributed to the Dapr open-source JavaScript SDK (Workflows and the Conversation API); built quickstarts and sample workflows in Node.js and Python, and occasionally contributed to the Node.js backend.",
      "Shaped product design and UX for Catalyst.",
      "Built AI agents and reusable skills letting non-technical teammates safely ship marketing-site changes, reducing engineering requests by 50%.",
      "Improved First Contentful Paint by 76% on the marketing website.",
    ],
  },
  {
    title: "Senior Frontend Engineer",
    org: "Jetstack",
    period: "January 2021 – September 2022",
    bullets: [
      "Led development and frontend architecture of the Jetstack Secure Platform.",
      "Rebuilt product documentation as a single Next.js + MDX application.",
      "Contributed to deployment pipelines and mentored 4 backend engineers into frontend work; supported design and marketing on the company site.",
      "Contributed to the Cert-Manager website.",
    ],
  },
  {
    title: "Frontend Engineer",
    org: "PurpleBricks",
    period: "May 2019 – January 2021",
    bullets: [
      "Built Search, Listings, and a new refunds application across a high-traffic property platform.",
      "Increased the web application performance by 35%.",
      "Led the migration from Redux to React Query + Context across 3 micro-frontends.",
      "Contributed heavily to the design system; mentored 4 junior engineers.",
    ],
  },
  {
    title: "Frontend Developer",
    org: "Phoebus Software Ltd",
    period: "May 2018 – May 2019",
    bullets: [
      "Owned the frontend of the web entry point for banking-sector clients.",
      "Built a configurable form builder with VueJS, TypeScript, and Webpack; improved application UX by reducing the time to complete a loan application by 38%.",
    ],
  },
  {
    title: "Software Engineer / UI Designer",
    org: "Freelance · part-time",
    period: "2009 – 2022",
    body: "Technical partner to founders and product teams: architecture, frontend builds, and product/UX, often as the sole engineer. Selected work:",
    bullets: [
      "Rapticore (rapticore.com, 2019–2022): led a team of 4 frontend engineers for 3 years building a cybersecurity observability platform, owning frontend architecture and direction.",
      "Romanian Association of Medical Students: built an online mock-exam application end to end, including the backend, supporting up to 5,000 concurrent students per sitting with no drop in performance.",
      "iFootage Gear: built the e-commerce site and participated in marketing campaign planning and collateral creation. Increased sales by 18%.",
      "Mention Me: frontend and marketing builds serving UK retail brands (Debenhams, Radley, OVO Energy, Joseph Joseph, and others).",
      "Stard.io: built their marketing and web application frontend.",
    ],
  },
  {
    title: "Lead Frontend Developer / Designer",
    org: "iintegra / Workvine (Flex Recruitment spin-offs)",
    period: "August 2015 – May 2018",
    body: "At Workvine I was part of the founding team, developed a series of its IP technologies, and led a team of 2 junior designers. At iintegra I implemented, rebuilt, and maintained their Applicant Tracking System (ATS) frontend and led its design direction and user experience.",
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
    qualification: "Math and Computer Science",
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
      "Kubernetes (working knowledge)",
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
