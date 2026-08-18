// Source of truth: Constantin Chirila CV 2026 ATS (public/constantin-chirila-cv.pdf).
// Facts, dates, titles, and numbers mirror the CV verbatim; prose is lightly
// copyedited only where the CV grammar needed smoothing.

export const cvProfile =
  "Senior Frontend Engineer with 10+ years shipping production web platforms at scale. Founding-team experience taking web applications from MVP to flagship. I specialise in React, TypeScript, and Node.js, with a strong focus on TDD, clean architecture, accessibility, and UX. I deliver with AI-assisted workflows under firm guard rails, accelerating delivery without sacrificing code quality. Comfortable steering frontend architecture and mentoring engineers; a prior decade in design means I bridge product, design, and engineering rather than just consuming specs.";

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
      "Led the Catalyst frontend, including a complex workflow-execution visualiser rendering thousands of nodes with real-time stats, offloading heavy computation to Web Workers to keep the React UI responsive; a differentiating feature that directly attracted 3 customers.",
      "Built the automated testing suite with Cypress and improved CI with GitHub Actions workflows, cutting production bug reports by 60%.",
      "Contributed to the Dapr open-source JavaScript SDK (Workflows and the Conversation API); built quickstarts and sample workflows in Node.js and Python, and occasionally contributed to the Node.js backend.",
      "Shaped product design and UX for Catalyst, continually designing and building mocks in Figma and, later, AI tools.",
      "Built AI agents and reusable skills letting non-technical teammates safely ship marketing-site changes, reducing engineering requests by 50%. Also built agents and skills that architect and write code to our team standards, standards we set together in my first months at Diagrid.",
      "Improved First Contentful Paint by 76% on the marketing website, profiling with Google Lighthouse and React DevTools.",
      "Built a shared component library system.",
      "Helped set up analytics systems through GTM, HubSpot, and Datadog.",
    ],
  },
  {
    title: "Senior Frontend Engineer",
    org: "Jetstack",
    period: "January 2021 – September 2022",
    body: "Jetstack Secure is an enterprise product built on the open-source cert-manager project, giving platform and security teams visibility, automation, and management of machine identities (TLS and mTLS) across Kubernetes and OpenShift.",
    bullets: [
      "Led development and frontend architecture of the Jetstack Secure Platform.",
      "Gathered user requirements, designed and demoed tens of Figma mocks, and delivered a working MVP tested with users, from which the final product emerged.",
      "Gathered scattered product documentation into a custom-built Next.js SSG application rendering pages from MDX files.",
      "Contributed to deployment pipelines and mentored 4 backend engineers into frontend work; supported design and marketing on the company site.",
      "Heavily contributed to building the OSS-maintained Cert-Manager website.",
    ],
  },
  {
    title: "Frontend Engineer",
    org: "PurpleBricks",
    period: "May 2019 – January 2021",
    body: "A prominent UK hybrid online estate agent helping people buy and sell properties.",
    bullets: [
      "Built Search, Listings, and a new refunds application across a high-traffic property platform using modern React and SCSS Modules.",
      "Increased loading speed for new visitors by 35% after individually conducting market research and setting up a performance budget.",
      "Led the migration from Redux to React Query and Context API across 3 micro-frontends.",
      "Helped build and heavily contributed to the design system component library; mentored 3 junior engineers.",
      "Helped the marketing team set up and track analytics, from performance to user behaviour, using Sentry, Google Analytics, and Hotjar.",
      "Helped establish a culture of writing efficient and correct unit tests.",
      "Reviewed accessibility continually; helped develop engineering culture and fostered an internal frontend community.",
    ],
  },
  {
    title: "Frontend Developer",
    org: "Phoebus Software Ltd",
    period: "May 2018 – May 2019",
    bullets: [
      "Owned the frontend, design, UX research, and user testing of the web entry point for banking-sector clients.",
      "Built a configurable form builder with Vue.js, TypeScript, and Webpack.",
      "Improved application UX by cutting the time to complete loan application forms by 38%.",
      "Helped set up and encouraged a culture of writing efficient and correct unit tests.",
    ],
  },
  {
    title: "Software Engineer / UI Designer",
    org: "Freelance · part-time",
    period: "2009 – 2022",
    body: "Technical partner to founders and product teams: architecture, frontend builds, and product/UX, often as the sole engineer. Selected work:",
    bullets: [
      "Rapticore (rapticore.com): led a team of 4 frontend engineers for 3 years building a cybersecurity observability platform, owning frontend architecture and direction.",
      "Romanian Association of Medical Students: built an online mock-exam application end to end, including the backend, supporting up to 5,000 concurrent students per sitting with no drop in performance.",
      "iFootage Gear: built the e-commerce site and participated in marketing campaign planning and collateral creation. Increased sales by 18%.",
      "Mention Me: frontend and marketing builds serving UK retail brands (Debenhams, Radley, OVO Energy, Joseph Joseph, and others).",
      "Stard.io: built their marketing and web application frontend using React; contributed to the Node.js backend and set up their analytics systems.",
    ],
  },
  {
    title: "Lead Frontend Developer / Designer",
    org: "iintegra / Workvine (Flex Recruitment spin-offs)",
    period: "August 2015 – May 2018",
    body: "Founding-team member at Workvine; developed a series of its IP technologies and led a team of 2 junior designers. At iintegra, implemented, rebuilt, and maintained the Applicant Tracking System (ATS) frontend while leading its design direction and user experience.",
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
      "Final-year projects included a web application for teaching children Spanish and the design of a mobile game user interface.",
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
    ],
  },
  {
    label: "State & data",
    items: [
      "React Query",
      "Context API",
      "Redux",
      "GraphQL",
      "PostgreSQL",
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
      "Datadog / Sentry",
      "Google Tag Manager (GTM)",
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
