import type { ReactNode } from "react";

/**
 * The feathered vellum halo behind the hero text: a translucent paper fill
 * with a large soft box-shadow (NOT a hard card) so copy stays legible over
 * the flora cutouts.
 */
export default function VellumPanel({ children }: { children: ReactNode }) {
  return <div className="hero-inner">{children}</div>;
}
