import type { Metadata } from "next";
import Link from "next/link";
import PlateFrame from "@/app/components/PlateFrame";
import PlateImage from "@/app/components/PlateImage";
import Splotch from "@/app/components/Splotch";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <>
      <section id="notfound">
        <Splotch colour="coral" />
        <div className="wrap">
          <PlateFrame plateNo="Plate ∅">
            <div className="case-head">
              <div className="crest">
                <PlateImage
                  name="specimen-03-strelitzia"
                  alt=""
                  priority
                  sizes="(max-width: 640px) 80vw, 360px"
                />
              </div>
              <h1>Lost in the undergrowth</h1>
              <p className="cap">
                Pagina non inventa · fam. Quadringenti-quattuor
              </p>
            </div>

            <p className="cv-intro">
              The page you were looking for isn&apos;t here. It may have been
              moved, renamed, or never planted at all. No harm done: let&apos;s
              get you back on the path.
            </p>

            <div className="almanac-more">
              <Link href="/" className="btn solid">
                Back to the folio
              </Link>
            </div>
          </PlateFrame>
        </div>
      </section>
    </>
  );
}
