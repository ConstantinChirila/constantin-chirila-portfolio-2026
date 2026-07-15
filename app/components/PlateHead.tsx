import Crest from "./Crest";
import type { PlateName } from "@/app/lib/plates";

interface PlateHeadProps {
  crest?: PlateName;
  title: string;
  latin: string;
}

/**
 * Centered plate header: crest illustration, then h2, then italic Latin
 * subtitle. The About plate has no crest (solo header).
 */
export default function PlateHead({ crest, title, latin }: PlateHeadProps) {
  return (
    <div className={`plate-head${crest ? "" : " solo"}`}>
      {crest && <Crest name={crest} />}
      <div className="head-text">
        <h2>{title}</h2>
        <p className="latin">{latin}</p>
      </div>
    </div>
  );
}
