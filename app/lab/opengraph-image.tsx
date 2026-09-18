import { OG_SIZE, OG_CONTENT_TYPE, renderOgImage } from "../lib/og";

export const alt = "Lab · Constantin Chirila";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function OpengraphImage() {
  return renderOgImage({
    eyebrow: "Workshop · Lab",
    title: "Lab.",
    subtitle:
      "Tools, apps and experiments I build and ship myself. Some free, some open source, some for sale.",
  });
}
