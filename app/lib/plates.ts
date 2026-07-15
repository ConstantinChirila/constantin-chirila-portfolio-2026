// Registry of the botanical plate artwork living in /public/plates.
// Intrinsic pixel dimensions are recorded so next/image can reserve the
// correct aspect ratio without layout shift. All artwork is a transparent
// WebP cutout (see the processing pipeline in the project brief).

export type PlateName =
  | "hero-flora-left"
  | "hero-flora-right"
  | "specimen-01-monstera"
  | "specimen-02-palm"
  | "specimen-03-strelitzia"
  | "specimen-04-banana"
  | "emblem-root"
  | "emblem-stem"
  | "emblem-bloom"
  | "insect-hummingbird"
  | "insect-morpho"
  | "insect-beetle"
  | "flourish-disciplines"
  | "flourish-specimens"
  | "flourish-method"
  | "flourish-conservatory"
  | "flourish-almanac"
  | "flourish-voices"
  | "flourish-contact"
  | "contact-garland"
  | "portrait"
  | "cv-flourish";

export interface Plate {
  src: string;
  width: number;
  height: number;
}

const dims: Record<PlateName, [number, number]> = {
  "hero-flora-left": [668, 1400],
  "hero-flora-right": [888, 1400],
  "specimen-01-monstera": [588, 900],
  "specimen-02-palm": [621, 900],
  "specimen-03-strelitzia": [604, 900],
  "specimen-04-banana": [544, 900],
  "emblem-root": [492, 700],
  "emblem-stem": [313, 500],
  "emblem-bloom": [383, 500],
  "insect-hummingbird": [383, 500],
  "insect-morpho": [500, 359],
  "insect-beetle": [403, 500],
  "flourish-disciplines": [900, 579],
  "flourish-specimens": [876, 677],
  "flourish-method": [1300, 621],
  "flourish-conservatory": [900, 545],
  "flourish-almanac": [900, 461],
  "flourish-voices": [831, 794],
  "flourish-contact": [900, 500],
  "contact-garland": [1300, 420],
  "portrait": [800, 633],
  "cv-flourish": [1200, 800],
};

// Most plates are WebP cutouts; a few source files are still PNG.
const pngPlates = new Set<PlateName>(["cv-flourish"]);

export function plate(name: PlateName): Plate {
  const [width, height] = dims[name];
  const ext = pngPlates.has(name) ? "png" : "webp";
  return { src: `/plates/${name}.${ext}`, width, height };
}
