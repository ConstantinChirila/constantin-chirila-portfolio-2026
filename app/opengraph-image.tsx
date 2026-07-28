import { OG_SIZE, OG_CONTENT_TYPE, renderOgImage } from "./lib/og";

export const alt = "Constantin Chirila · Front-end engineer & designer";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function OpengraphImage() {
  return renderOgImage({
    eyebrow: "Front-end engineer · Design & UX · Est. 2013",
    title: "Software, engineered to spec.",
    subtitle:
      "Fast, accessible interfaces in React and TypeScript, from a front-end engineer with a designer's eye.",
  });
}
