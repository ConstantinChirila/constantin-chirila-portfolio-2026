import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";
import PlateFrame from "@/app/components/PlateFrame";
import Splotch from "@/app/components/Splotch";
import { getAllPosts, getPost } from "@/app/lib/almanac";

// Lock the route to slugs produced at build time; unknown slugs 404 instead of
// reaching the filesystem loader on demand.
export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Field note not found" };
  return {
    title: `${post.title} · The almanac`,
    description: post.excerpt,
    alternates: { canonical: `/almanac/${post.slug}` },
    openGraph: { title: post.title, description: post.excerpt },
  };
}

export default async function AlmanacPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const { content } = await compileMDX({ source: post.content });

  return (
    <>
      <section id="notes">
        <Splotch colour="periwinkle" />
        <div className="wrap">
          <PlateFrame plateNo="Field note">
            <Link href="/almanac" className="case-back">
              ← Back to the almanac
            </Link>

            <div className="case-head">
              <p className="cap" style={{ fontStyle: "normal", letterSpacing: ".2em", textTransform: "uppercase", fontSize: 14 }}>
                {post.date} · {post.category}
                {post.draft ? " · Draft" : ""}
              </p>
              <h1>{post.title}</h1>
            </div>

            <article className="case-body almanac-prose">{content}</article>
          </PlateFrame>
        </div>
      </section>
    </>
  );
}
