import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/app/components/Nav";
import Footer from "@/app/components/Footer";
import PlateFrame from "@/app/components/PlateFrame";
import PlateHead from "@/app/components/PlateHead";
import Splotch from "@/app/components/Splotch";
import { getAllPosts } from "@/app/lib/almanac";

export const metadata: Metadata = {
  title: "The almanac · Constantin Chirila",
  description:
    "Field notes and observations on full-stack delivery, product, and the odd experiment.",
};

export default function AlmanacPage() {
  const posts = getAllPosts();

  return (
    <>
      <Nav />
      <section id="notes">
        <Splotch colour="periwinkle" />
        <div className="wrap">
          <PlateFrame plateNo="Plate V">
            <PlateHead
              crest="flourish-almanac"
              title="The almanac"
              latin="field notes & observations"
            />
            {posts.map((p) => (
              <Link className="entry" href={`/almanac/${p.slug}`} key={p.slug}>
                <span className="d">{p.date}</span>
                <h4>{p.title}</h4>
                <span className="c">{p.draft ? "Draft" : p.category}</span>
              </Link>
            ))}
          </PlateFrame>
        </div>
      </section>
      <Footer />
    </>
  );
}
