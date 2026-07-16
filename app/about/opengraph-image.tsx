import { OG_SIZE, OG_CONTENT_TYPE, renderOgImage } from "../lib/og";

export const alt = "About Constantin Chirila";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function OpengraphImage() {
  return renderOgImage({
    eyebrow: "About · The gardener",
    titleLead: "The",
    titleAccent: "gardener.",
    subtitle:
      "A Romanian-born British front-end engineer with a designer's background, building for the web since 2013.",
  });
}
