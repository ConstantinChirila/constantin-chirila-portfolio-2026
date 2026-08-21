import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";
import { getAllPosts, getPost } from "@/app/lib/almanac";
import { codeTheme } from "@/app/lib/code-theme";
import { siteName, siteUrl } from "@/app/lib/site";
import { FlowDiagram, RelayDiagram, StateCard } from "@/app/components/diagrams";

// Tables need a scroll container so wide content never forces the page to
// scroll horizontally on small screens.
const mdxComponents = {
  table: (props: React.ComponentPropsWithoutRef<"table">) => (
    <div className="table-scroll">
      <table {...props} />
    </div>
  ),
  FlowDiagram,
  RelayDiagram,
  StateCard,
};

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
  // The layout's title template appends "· Constantin Chirila"; post titles
  // are long, so no "· Notes" infix (SERPs truncate around 60 characters).
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/almanac/${post.slug}` },
    openGraph: {
      type: "article",
      url: `/almanac/${post.slug}`,
      siteName,
      title: post.title,
      description: post.excerpt,
      publishedTime: post.published,
      authors: [siteName],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
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

  const { content } = await compileMDX({
    source: post.content,
    components: mdxComponents,
    options: {
      // Our MDX is trusted local content. next-mdx-remote v6 strips JSX
      // expression attributes (e.g. the diagrams' nodes={[...]}) unless
      // blockJS is off; the milder blockDangerousJS guard stays on.
      blockJS: false,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
          [
            rehypePrettyCode,
            // keepBackground off: .article-prose pre already paints the ink
            // ground, so the theme only supplies token colours.
            { theme: codeTheme, keepBackground: false, defaultLang: "text" },
          ],
        ],
      },
    },
  });

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.published,
    url: `${siteUrl}/almanac/${post.slug}`,
    mainEntityOfPage: `${siteUrl}/almanac/${post.slug}`,
    author: { "@type": "Person", name: siteName, url: siteUrl },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />
      <section className="page-hero article-hero">
        <span className="eyebrow">
          <time dateTime={post.published}>{post.date}</time>
          {post.draft ? " · Draft" : ""}
        </span>
        <h1>{post.title}</h1>
      </section>

      <section className="page-body">
        <div className="article-wrap">
          <Link href="/almanac" className="article-back">
            ← All notes
          </Link>
          <article className="article-prose">{content}</article>
        </div>
      </section>
    </>
  );
}
