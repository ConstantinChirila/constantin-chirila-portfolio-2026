// Single source of truth for the site's absolute URL and identity. Override the
// domain per-environment with NEXT_PUBLIC_SITE_URL (e.g. a Vercel preview URL)
// so canonical/OG absolute URLs never point at the wrong host.
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://constantinchirila.com"
).replace(/\/$/, "");

export const siteName = "Constantin Chirila";

export const siteTitle = "Constantin Chirila · Front-end engineer & designer";

export const siteDescription =
  "Constantin Chirila is a UK-based front-end engineer with a strong design and UX background, building fast, accessible interfaces in React and TypeScript, and the backend to run them when a project needs it.";
