import type { PlateName } from "@/app/lib/plates";

export const cvProfile =
  "Software engineer with 10+ years building web applications, specialising in front-end with React and TypeScript. A design and UX background helps me bridge product, design and engineering, and I use AI-assisted development to deliver faster and work across the wider stack.";

export const cvMeta = "Front-end engineer & UX · Birmingham, United Kingdom";

export interface Role {
  title: string;
  org: string;
  period: string;
  body: string;
  /** Specimen illustration reused as a herbarium marker. */
  plate: PlateName;
}

export const experience: Role[] = [
  {
    title: "Senior Front End Engineer",
    org: "Diagrid",
    period: "September 2022 – August 2026",
    body: "As a founding-team engineer I helped build Conductor, then took Catalyst from MVP to flagship product. I led major front-end work including a complex workflow-execution visualiser, automated testing and CI improvements. I also shaped product design and UX, contributed to the Dapr open-source JavaScript SDK, and built AI agents and skills that let non-technical teammates safely update the marketing site.",
    plate: "specimen-01-monstera",
  },
  {
    title: "Senior Front End Engineer",
    org: "Jetstack",
    period: "January 2021 – September 2022",
    body: "I combined engineering with design and UX across several products. I led the development and design of the Jetstack Secure platform, rebuilt the documentation as a single Next.js and MDX application, and contributed to deployment pipelines. I also mentored engineers and supported the design and marketing teams with the company website.",
    plate: "specimen-03-strelitzia",
  },
  {
    title: "Front End Engineer",
    org: "Purplebricks",
    period: "May 2019 – January 2021",
    body: "Front-end engineer across Search, Listings and a new refunds application. I improved search usability and performance, increased marketing-site performance by 25%, and supported the move from Redux to React Query and Context. I contributed heavily to the design system and mentored junior engineers and School of Code students.",
    plate: "specimen-02-palm",
  },
  {
    title: "Front End Developer",
    org: "Phoebus Software Ltd",
    period: "May 2018 – May 2019",
    body: "I owned the front-end of the web entry point for their flagship banking software and helped build a form builder. Built with JavaScript (ES7), Vue.js and TypeScript on Webpack, while improving the UX of their online apps.",
    plate: "specimen-04-banana",
  },
  {
    title: "Front End Designer / Developer",
    org: "pieceofpie.co",
    period: "2009 – Present",
    body: "As a freelancer I consult and build web products and marketing collateral for clients including Mention Me (and their clients: Debenhams, Evans, Hush, Dorothy Perkins, Biscuiteers, Radley, Boomf, Belstaff, Joseph Joseph, OVO Energy), the University of Worcester, RazorSharp Productions and iFootage Gear.",
    plate: "specimen-01-monstera",
  },
  {
    title: "Front End Developer & Lead Designer",
    org: "iintegra / Workvine",
    period: "August 2015 – May 2018",
    body: "A founding-team member at Workvine, where I built and improved a range of its IP technologies and guided the design and marketing teams, leading a team of two junior designers. At iintegra I rebuilt and maintained the front-end of their Applicant Tracking System (ATS) and led its design direction and UX.",
    plate: "specimen-03-strelitzia",
  },
];

export interface PreviousRole {
  title: string;
  org: string;
  period: string;
}

export const previousRoles: PreviousRole[] = [
  {
    title: "Web and Graphic Designer",
    org: "Flex Plus Recruitment",
    period: "2014 – 2015",
  },
  {
    title: "Recruitment Ambassador & Student Mentor",
    org: "University of Worcester",
    period: "2013 – 2014",
  },
  { title: "Photographer", org: "Adevarul Holding", period: "2009 – 2010" },
  {
    title: "Jr. Front End Designer",
    org: "Unique Illusion Studio",
    period: "2006 – 2007",
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
  // {
  //   qualification: "Photography",
  //   place: "Galati School of Art, Romania",
  //   period: "2008 – 2010",
  // },
  {
    qualification: "Mathematics and Computer Science",
    place: "Danube Lyceum, Romania",
    period: "2003 – 2007",
  },
];

export const skills = {
  strong: [
    "TypeScript",
    "React",
    "CSS (SASS)",
    "Node.js",
    "Next.js",
    "Design & UX",
    "Responsive design",
    "Git / GitHub CI",
    "TDD / Unit / E2E",
    "Cypress / Playwright / Jest",
  ],
  knowledgeable: ["Python", "Kubernetes", "GraphQL", "C# ASP.NET"],
};
