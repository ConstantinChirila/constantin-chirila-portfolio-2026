// Source of truth: Constantin Chirila CV 2026 ATS (public/constantin-chirila-cv.pdf).
// Facts, dates, titles, and numbers mirror the CV verbatim; prose is lightly
// copyedited only where the CV grammar needed smoothing.

export const cvProfile =
  "Senior Frontend Engineer with 10+ years building UIs and shipping production web apps. I've worked as part of founding teams and took products to launch from early MVPs. My stack is React, TypeScript, and Node.js, with a strong focus on testing, maintainable architecture, accessibility, and good UX. I use AI heavily, but as a tool to move faster and constantly try ideas. I'm comfortable owning frontend architecture, mentoring engineers, and working across product and design. Having been a designer before moving into engineering, I like to think about the product as a whole.";

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
    title: "Senior Frontend Engineer (Founding)",
    org: "Diagrid",
    period: "September 2022 – July 2026",
    body: "Initially joined to build Conductor, then continued with building Catalyst, their flagship product, which I brought from just an idea to production. Catalyst is an enterprise platform for durable workflow orchestration and AI agents, built on the open-source Dapr runtime.",
    bullets: [
      "Led the Catalyst frontend and built a shared component library system; often built or extended features on the backend side, working in Node.js and sometimes Go.",
      "Fully designed the UI for Catalyst and contributed to the UX, constantly building mocks in Figma and AI tools.",
      "Directly attracted 3 customers by building a reusable complex workflow-execution visualiser rendering thousands of nodes with real-time stats, built with Web Workers so the UI stays responsive.",
      "Added automated testing using Cypress and improved CI/CD GitHub Actions, cutting bug reports by half.",
      "Contributed to the Dapr open-source JavaScript SDK (Workflows and the Conversation API in particular); built quickstarts and sample workflows in Node.js and Python.",
      "Built AI agents and skills letting non-technical marketing staff make constant changes to the marketing website, reducing engineering requests by half. Also built agents and skills that architect and write code to our team standards, standards we set together in my early days at Diagrid.",
      "Improved First Contentful Paint by 76% on the marketing website using Google Lighthouse and React DevTools.",
      "Helped set up analytics systems through GTM, HubSpot, and Datadog.",
    ],
  },
  {
    title: "Senior Frontend Engineer",
    org: "Jetstack (acquired by Venafi)",
    period: "January 2021 – September 2022",
    body: "Led development and frontend architecture of the Jetstack Secure Platform, an enterprise product built on the open-source cert-manager project, giving teams visibility, automation, and management of machine identities across Kubernetes and OpenShift.",
    bullets: [
      "Developed a design system and a component library, and used React with TypeScript to develop the platform to release. Implemented unit testing and contributed to Playwright E2E testing.",
      "Gathered user requirements, designed and demoed tens of Figma mocks, and delivered a working MVP tested with users, from which the final product emerged.",
      "Gathered all product documentation into a custom-built Next.js SSG application rendering pages from MDX files.",
      "Contributed to deployment pipelines and mentored 4 backend engineers into frontend work.",
      "Heavily contributed to building the OSS-maintained Cert-Manager website.",
    ],
  },
  {
    title: "Frontend Engineer",
    org: "PurpleBricks",
    period: "May 2019 – January 2021",
    body: "At Purplebricks, a prominent UK hybrid online estate agent helping people buy and sell properties, I built, developed, and refactored a series of features and products with modern React, SCSS Modules, and React Query in a micro-frontend architecture.",
    bullets: [
      "Built the most important part of their high-traffic property platform, the Property Search and Listing, handling thousands of visitors a day.",
      "Led the design and build of their refunds application, which integrated a complex dynamic form used at its peak by 700 estate agents.",
      "Increased loading speed for new visitors by 35% and set up a performance budget to maintain the standard.",
      "Led the migration from Redux to React Query and Context API across 3 micro-frontends.",
      "Helped build and maintain the design system component library using Storybook.",
      "Helped the marketing team set up and track analytics, from performance to user behaviour, using Sentry, Google Analytics, and Hotjar.",
      "Helped establish a culture of automated testing and constantly reviewed and fixed accessibility.",
      "Helped develop engineering culture through an internal frontend community and mentored 3 junior engineers.",
    ],
  },
  {
    title: "Frontend Developer",
    org: "Phoebus Software Ltd",
    period: "May 2018 – May 2019",
    bullets: [
      "Owned the frontend, design, UX research, and user testing of the web entry point for banking-sector clients.",
      "Built a configurable form builder with Vue.js, TypeScript, and Webpack.",
      "Improved application UX by cutting the time to complete loan application forms by 33%.",
      "Named champion in establishing a culture of automated testing on the UI.",
    ],
  },
  {
    title: "Software Engineer / UI Designer",
    org: "Freelance · part-time",
    period: "2009 – 2022",
    body: "I've helped small businesses and founders with architecture, frontend/backend builds, product/UX, and design. Some worth mentioning:",
    bullets: [
      "Rapticore (rapticore.com): led a team of 4 frontend engineers for 3 years building a cybersecurity observability platform, owning frontend architecture and direction.",
      "Romanian Association of Medical Students: built an online mock-exam application end to end, including the backend, supporting up to 5,000 concurrent students per sitting with no drop in performance.",
      "iFootage Gear: built the e-commerce site and took part in marketing campaign planning and collateral creation. Increased sales by 19%.",
      "Mention Me: frontend and marketing builds serving UK retail brands (Debenhams, Radley, OVO Energy, Avis, and others).",
      "Stard.io: built their marketing and web application frontend using React; contributed to the Node.js backend and set up their analytics systems.",
    ],
  },
  {
    title: "Frontend Developer / Designer",
    org: "iintegra / Workvine (Flex Recruitment spin-offs)",
    period: "August 2015 – May 2018",
    body: "As a founding member at Workvine I developed a series of its IP technologies and led a team of 2 junior designers. At iintegra, implemented, rebuilt, and maintained the Applicant Tracking System (ATS) frontend while leading its design direction and user experience.",
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
      "React",
      "Next.js",
      "Node.js",
      "TypeScript",
      "JavaScript (ES2023+)",
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
      "SQL",
      "MongoDB",
      "REST APIs",
    ],
  },
  {
    label: "Testing & quality",
    items: [
      "Jest",
      "React Testing Library",
      "Cypress",
      "Playwright",
      "TDD (unit / integration / E2E)",
    ],
  },
  {
    label: "Tooling & delivery",
    items: [
      "Git / GitHub Actions (CI/CD)",
      "Webpack / Vite",
      "Kubernetes",
      "Datadog / Sentry",
      "Google Tag Manager (GTM)",
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
