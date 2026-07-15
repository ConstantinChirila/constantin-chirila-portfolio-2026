import type { ReactNode } from "react";
import Reveal from "./Reveal";

interface PlateFrameProps {
  /** The specimen-case label, e.g. "Plate II". */
  plateNo: string;
  children: ReactNode;
  className?: string;
}

/**
 * The double-bordered folio frame with its interrupting plate-number tab.
 * Reveals on scroll like the prototype.
 */
export default function PlateFrame({
  plateNo,
  children,
  className = "",
}: PlateFrameProps) {
  return (
    <Reveal className={`plate-frame ${className}`.trim()}>
      <span className="plate-no">{plateNo}</span>
      {children}
    </Reveal>
  );
}
