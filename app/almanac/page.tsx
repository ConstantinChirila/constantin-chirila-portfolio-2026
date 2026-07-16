import type { Metadata } from "next";
import Link from "next/link";
import PlateFrame from "@/app/components/PlateFrame";
import PlateHead from "@/app/components/PlateHead";
import Splotch from "@/app/components/Splotch";
import { getAllPosts } from "@/app/lib/almanac";

export const metadata: Metadata = {
  title: "The almanac",
  description:
    "Field notes and observations on front-end engineering, design, and the odd experiment.",
  alternates: { canonical: "/almanac" },
};

export default function AlmanacPage() {
  const posts = getAllPosts();

  return (
    <>
      <section id="notes">
        <Splotch colour="periwinkle" />
        <div className="wrap">
          <PlateFrame plateNo="Plate V">
            <PlateHead
              crest="flourish-almanac"
              title="The almanac"
              latin="field notes & observations"
            />
            {posts.length > 0 ? (
              posts.map((p) => (
                <Link
                  className="entry"
                  href={`/almanac/${p.slug}`}
                  key={p.slug}
                >
                  <span className="d">{p.date}</span>
                  <h4>{p.title}</h4>
                  <span className="c">{p.draft ? "Draft" : p.category}</span>
                </Link>
              ))
            ) : (
              <p className="cv-intro">
                Nothing pressed here just yet. Field notes are on the way.
              </p>
            )}
          </PlateFrame>
        </div>
      </section>
    </>
  );
}
