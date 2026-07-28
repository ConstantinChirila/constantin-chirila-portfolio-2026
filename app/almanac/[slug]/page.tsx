import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";
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
  if (!post) return { title: "Note not found" };
  return {
    title: `${post.title} · Notes`,
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
      <section className="page-hero">
        <span className="eyebrow">
          {post.date} · {post.category}
          {post.draft ? " · Draft" : ""}
        </span>
        <h1>{post.title}</h1>
      </section>

      <section className="page-body">
        <Link href="/almanac" className="article-back">
          ← All notes
        </Link>
        <article className="article-prose">{content}</article>
      </section>
    </>
  );
}
