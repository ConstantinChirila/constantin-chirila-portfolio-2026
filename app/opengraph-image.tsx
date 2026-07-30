import { OG_SIZE, OG_CONTENT_TYPE, renderOgImage } from "./lib/og";

export const alt = "Constantin Chirila · Frontend engineer & designer";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function OpengraphImage() {
  return renderOgImage({
    eyebrow: "Frontend engineer · Design & UX · Est. 2013",
    title: "From idea to shipped.",
    subtitle:
      "Fast, accessible interfaces in React and TypeScript, from a frontend engineer with a designer's eye.",
  });
}
