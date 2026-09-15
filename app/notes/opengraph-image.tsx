import { OG_SIZE, OG_CONTENT_TYPE, renderOgImage } from "../lib/og";

export const alt = "Notes · Constantin Chirila";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function OpengraphImage() {
  return renderOgImage({
    eyebrow: "Writing · Notes",
    title: "Notes.",
    subtitle:
      "Working notes on frontend engineering, design systems, and performance.",
  });
}
