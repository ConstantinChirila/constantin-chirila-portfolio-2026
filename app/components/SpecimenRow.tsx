import Link from "next/link";
import PlateImage from "./PlateImage";
import type { Specimen } from "@/app/data/specimens";

/**
 * A herbarium-sheet row on the folio: illustration, name, habitat, and a
 * placeholder observation. Links to the case study.
 */
export default function SpecimenRow({ specimen }: { specimen: Specimen }) {
  return (
    <Link className="specimen" href={`/specimens/${specimen.slug}`}>
      <div className="fig">
        <div className="plate-slot">
          <PlateImage
            name={specimen.plate}
            alt={specimen.alt}
            className="plate-img"
            sizes="(max-width: 860px) 260px, 240px"
          />
        </div>
        <p className="cap">
          Fig. {specimen.fig} · {specimen.binomial}
        </p>
      </div>
      <div>
        <h3>{specimen.name}</h3>
        <p className="caps habitat">Habitat: {specimen.habitat}</p>
        <p className="obs">
          <span className="ph">Placeholder observation</span>
          {specimen.observation}
        </p>
      </div>
      <span className="arw" aria-hidden="true">
        →
      </span>
    </Link>
  );
}
