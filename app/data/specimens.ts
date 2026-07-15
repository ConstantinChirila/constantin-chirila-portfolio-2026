import type { PlateName } from "@/app/lib/plates";

export interface Specimen {
  slug: string;
  fig: number;
  name: string;
  binomial: string; // the tongue-in-cheek Latin
  habitat: string;
  plate: PlateName;
  alt: string;
  /** Herbarium-sheet one-liner shown on the folio. Metric is a placeholder. */
  observation: string;
  /** Placeholder headline metric (marked as unverified in the UI). */
  metric: string;
  /** Case-study copy: problem -> role -> decisions -> outcome. */
  caseStudy: {
    problem: string;
    role: string;
    decisions: string;
    outcome: string;
  };
}

export const specimens: Specimen[] = [
  {
    slug: "bitwatt",
    fig: 1,
    name: "Bitwatt",
    binomial: "Monstera energetica",
    habitat: "Energy · Blockchain",
    plate: "specimen-01-monstera",
    alt: "Botanical illustration of a monstera",
    observation:
      "Settlement time reduced by 60% after rebuilding the trading pipeline.",
    metric: "Settlement time −60%",
    caseStudy: {
      problem:
        "Energy trades were settling slowly across a blockchain ledger, and the pipeline had grown tangled enough that no one wanted to touch it. The team needed the throughput up without betting the business on a rewrite.",
      role:
        "I came in as the single accountable engineer across the stack: reshaping the settlement pipeline, the APIs feeding it, and the front-end that traders actually watched.",
      decisions:
        "We agreed the stack and the sequence together before a line changed, then rebuilt the pipeline in tight, reversible steps so trading never stopped. Every trade-off was written down so the team could follow the reasoning after I left.",
      outcome:
        "Settlement time came down by roughly 60%, on a codebase the in-house team could carry forward without me in the room.",
    },
  },
  {
    slug: "talentvine",
    fig: 2,
    name: "Talentvine",
    binomial: "Chamaedorea recruitans",
    habitat: "Recruitment · SaaS",
    plate: "specimen-02-palm",
    alt: "Botanical illustration of a parlour palm",
    observation:
      "MVP designed, architected and shipped in eight weeks, end to end.",
    metric: "MVP in 8 weeks",
    caseStudy: {
      problem:
        "A recruitment idea needed to become a product founders could put in front of real users, fast, before the market moved on.",
      role:
        "I shaped the scope, chose the stack, designed the interfaces, and built the front-end and back-end myself: one accountable partner from idea to launch.",
      decisions:
        "We scoped an MVP that earned its keep and cut everything that did not, then built in short loops so working software was in their hands early and often.",
      outcome:
        "A live product designed, architected and shipped in eight weeks, ready to learn from real users.",
    },
  },
  {
    slug: "ifootage-gear",
    fig: 3,
    name: "iFootage Gear",
    binomial: "Strelitzia commercialis",
    habitat: "E-commerce · Product",
    plate: "specimen-03-strelitzia",
    alt: "Botanical illustration of a bird of paradise",
    observation:
      "Checkout conversion up 32% after a ground-up storefront rebuild.",
    metric: "Checkout conversion +32%",
    caseStudy: {
      problem:
        "An ageing storefront was losing buyers at checkout, and small patches had stopped moving the numbers.",
      role:
        "I rebuilt the storefront from the ground up, front-end and back-end, with the buying journey as the thing every decision answered to.",
      decisions:
        "We judged the interface by how it was used, not how it demoed, and kept the checkout path as short and legible as the catalogue would allow.",
      outcome:
        "Checkout conversion rose by around 32% after the rebuild, on foundations built to last.",
    },
  },
  {
    slug: "mention-me",
    fig: 4,
    name: "Mention Me",
    binomial: "Musa referens",
    habitat: "Referral · Platform",
    plate: "specimen-04-banana",
    alt: "Botanical illustration of a young banana plant",
    observation:
      "Client-facing platform scaled past three million end users.",
    metric: "3M+ end users",
    caseStudy: {
      problem:
        "A referral platform serving many brands needed client-facing features that stayed fast and reliable as its audience grew into the millions.",
      role:
        "Over a few years I delivered across the stack, from typed APIs to the interfaces clients and their customers relied on daily.",
      decisions:
        "We put foundations before flourishes so the platform kept its footing under load, and documented the trade-offs so the wider team could own them.",
      outcome:
        "A client-facing platform that scaled past three million end users while staying dependable.",
    },
  },
];

export function getSpecimen(slug: string): Specimen | undefined {
  return specimens.find((s) => s.slug === slug);
}
