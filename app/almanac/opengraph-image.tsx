import { OG_SIZE, OG_CONTENT_TYPE, renderOgImage } from "../lib/og";

export const alt = "The almanac · Constantin Chirila";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function OpengraphImage() {
  return renderOgImage({
    eyebrow: "The almanac · Field notes",
    titleLead: "The",
    titleAccent: "almanac.",
    subtitle:
      "Field notes and observations on front-end engineering, design, and the odd experiment.",
  });
}
