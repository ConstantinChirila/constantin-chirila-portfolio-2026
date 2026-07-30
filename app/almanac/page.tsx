import type { Metadata } from "next";
import Link from "next/link";
import ComingSoon from "@/app/components/ComingSoon";
import { getAllPosts } from "@/app/lib/almanac";

export const metadata: Metadata = {
  title: "Notes",
  description:
    "Notes on frontend engineering, design systems, and performance by Constantin Chirila.",
  alternates: { canonical: "/almanac" },
};

export default function AlmanacPage() {
  const posts = getAllPosts();

  return (
    <>
      <section className="page-hero">
        <span className="eyebrow">Writing</span>
        <h1>Notes.</h1>
        <p className="caption">
          Working notes on frontend engineering, design systems, and
          performance.
        </p>
      </section>

      <section className="page-body">
        {posts.length > 0 ? (
          <div className="notes-list">
            {posts.map((p, i) => (
              <Link className="entry" href={`/almanac/${p.slug}`} key={p.slug}>
                <span className="no">{String(i + 1).padStart(2, "0")}</span>
                <span className="title">{p.title}</span>
                <span className="cat">
                  {p.draft ? "Draft" : p.category}
                </span>
                <span className="date">{p.date}</span>
              </Link>
            ))}
          </div>
        ) : (
          <ComingSoon
            className="notes-empty"
            dek="Nothing published yet. The first pieces, on performance budgets, design tokens, and rendering at scale, land here soon."
          />
        )}
      </section>
    </>
  );
}
