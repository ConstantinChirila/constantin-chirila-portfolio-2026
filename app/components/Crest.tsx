import PlateImage from "./PlateImage";
import type { PlateName } from "@/app/lib/plates";

interface CrestProps {
  name: PlateName;
  className?: string;
}

/** The engraved crest illustration that heads a plate. Decorative. */
export default function Crest({ name, className = "crest" }: CrestProps) {
  return (
    <div className={className}>
      <PlateImage name={name} alt="" sizes="(max-width: 760px) 82vw, 480px" />
    </div>
  );
}
