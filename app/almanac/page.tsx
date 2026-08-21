import type { Metadata } from "next";
import Link from "next/link";
import ComingSoon from "@/app/components/ComingSoon";
import { getAllPosts } from "@/app/lib/almanac";
import { siteName } from "@/app/lib/site";

const pageTitle = "Notes · Constantin Chirila";
const pageDescription =
  "Notes on frontend engineering, design systems, and performance by Constantin Chirila.";

// openGraph/twitter are set per page because Next replaces (not merges) these
// objects, so pages without them inherit the home page's values wholesale.
export const metadata: Metadata = {
  title: "Notes",
  description: pageDescription,
  alternates: { canonical: "/almanac" },
  openGraph: {
    type: "website",
    url: "/almanac",
    siteName,
    title: pageTitle,
    description: pageDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
  },
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
                <span className="main">
                  <span className="title">{p.title}</span>
                  <span className="dek">{p.excerpt}</span>
                </span>
                {p.draft && <span className="cat">Draft</span>}
                <span className="meta">
                  <time className="date" dateTime={p.published}>
                    {p.date}
                  </time>
                  <span className="time">{p.readTime}</span>
                </span>
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
