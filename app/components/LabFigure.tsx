import Image from "next/image";
import type { LabArt } from "@/app/data/lab";
import { Lattice, Moire, Nested, Spiral } from "./plates";

/** The generated plates an item falls back to when it has no artwork yet.
 *  Waves is deliberately excluded: it samples 21 paths at 8px steps across a
 *  1600px viewBox, which is tens of kB of coordinates for a 340px frame. */
const plates = [Lattice, Nested, Spiral, Moire];

/**
 * Deterministic choice from the item's id: the same item always draws the same
 * plate, across builds and between server and client.
 */
function plateFor(id: string) {
  const sum = [...id].reduce((n, c) => n + c.charCodeAt(0), 0);
  return plates[sum % plates.length];
}

interface LabFigureProps {
  id: string;
  /** Omitted when the item has no artwork, or its file is not in /public. */
  art?: LabArt;
  /** Zero-padded plate number, e.g. "01". */
  index: string;
}

/**
 * The left-hand identifier for a lab row. Artwork when there is any, generated
 * line-art when there is not, so the figure column is never a hole and every
 * row keeps the same silhouette.
 */
export default function LabFigure({ id, art, index }: LabFigureProps) {
  const Plate = plateFor(id);

  return (
    <figure className="lab-art">
      <div className="frame">
        {art ? (
          <Image
            alt={art.alt}
            fill
            sizes="(max-width: 780px) 92vw, (max-width: 1100px) 240px, 340px"
            src={art.src}
          />
        ) : (
          <div className="plate-art" aria-hidden="true">
            <Plate />
          </div>
        )}
      </div>
      <figcaption className="cap">Fig. {index}</figcaption>
    </figure>
  );
}
