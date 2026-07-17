import { OG_SIZE, OG_CONTENT_TYPE, renderOgImage } from "../lib/og";

export const alt = "Constantin Chirila · Curriculum Vitae";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function OpengraphImage() {
  return renderOgImage({
    eyebrow: "Senior front-end engineer · Design-led · Birmingham, UK",
    titleLead: "Curriculum",
    titleAccent: "Vitae.",
    subtitle:
      "10+ years building for the web: experience, education, and the tools I work with.",
  });
}
