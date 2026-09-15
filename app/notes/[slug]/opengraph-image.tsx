import { notFound } from "next/navigation";
import { getAllPosts, getPost } from "@/app/lib/notes";
import { OG_SIZE, OG_CONTENT_TYPE, renderOgImage } from "@/app/lib/og";

export const alt = "Notes · Constantin Chirila";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  // Post titles vary a lot in length; step the display size down so long
  // titles still fit the 1200x630 card.
  const titleSize =
    post.title.length > 55 ? 56 : post.title.length > 35 ? 68 : 88;

  return renderOgImage({
    eyebrow: `Notes · ${post.date}`,
    title: post.title,
    subtitle: post.excerpt,
    titleSize,
  });
}
