import type { CSSProperties } from "react";

export type SplotchColour = "rose" | "ochre" | "periwinkle" | "coral";

interface SplotchProps {
  /** Watercolour accent colour; maps to the section rotation. */
  colour?: SplotchColour;
  /** Extra positional class (the hero/contact use .s1/.s2/.c1/.c2). */
  className?: string;
  style?: CSSProperties;
}

/**
 * The blurred watercolour blob that carries the "occasional colour". Position
 * and size come from section-scoped CSS (e.g. #work .splotch); keep it fully
 * inside its section so overflow:hidden never slices the blur into a hard band.
 */
export default function Splotch({ colour, className = "", style }: SplotchProps) {
  const colourStyle: CSSProperties | undefined = colour
    ? { background: `var(--${colour})` }
    : undefined;
  return (
    <span
      aria-hidden="true"
      className={`splotch ${className}`.trim()}
      style={{ ...colourStyle, ...style }}
    />
  );
}
