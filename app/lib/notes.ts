import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const ALMANAC_DIR = path.join(process.cwd(), "content", "notes");

// Slugs map to filenames, so restrict them to a safe charset. This blocks path
// traversal (e.g. "../../etc/passwd") before any value reaches the filesystem.
const SLUG_RE = /^[a-z0-9-]+$/;

// Drafts are excluded everywhere for now, so /notes shows its coming-soon
// state until a post is published (draft: false). Flip to
// `process.env.NODE_ENV !== "production"` to preview drafts in development.
const includeDrafts = false;

export interface PostMeta {
  slug: string;
  title: string;
  /** Display date, e.g. "2026 · 06". */
  date: string;
  /** Sortable ISO-ish key, e.g. "2026-06". */
  sort: string;
  /** Full ISO publish date, e.g. "2026-06-14". Used for JSON-LD, OG article
   *  tags, the RSS feed, sitemap lastModified, and <time> elements. */
  published: string;
  category: string;
  excerpt: string;
  /** Estimated reading time, e.g. "5 min read" (~200 wpm). */
  readTime: string;
  draft: boolean;
}

export interface Post extends PostMeta {
  content: string; // raw MDX body
}

function readSlug(slug: string): Post | undefined {
  if (!SLUG_RE.test(slug)) return undefined;
  const file = path.join(ALMANAC_DIR, `${slug}.mdx`);
  if (!fs.existsSync(file)) return undefined;
  const raw = fs.readFileSync(file, "utf8");
  const { data, content } = matter(raw);
  const words = content.trim().split(/\s+/).length;
  return {
    slug,
    title: String(data.title ?? slug),
    date: String(data.date ?? ""),
    sort: String(data.sort ?? data.date ?? ""),
    published: String(data.published ?? `${data.sort ?? ""}-01`),
    category: String(data.category ?? ""),
    excerpt: String(data.excerpt ?? ""),
    readTime: `${Math.max(1, Math.round(words / 200))} min read`,
    draft: Boolean(data.draft ?? false),
    content,
  };
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(ALMANAC_DIR)) return [];
  return fs
    .readdirSync(ALMANAC_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => readSlug(f.replace(/\.mdx$/, "")))
    .filter((p): p is Post => Boolean(p))
    .filter((p) => includeDrafts || !p.draft)
    // newest first; tie-break on slug for a stable, deterministic order
    .sort((a, b) => b.sort.localeCompare(a.sort) || a.slug.localeCompare(b.slug))
    .map(({ content: _content, ...meta }) => meta);
}

export function getPost(slug: string): Post | undefined {
  const post = readSlug(slug);
  if (!post) return undefined;
  if (!includeDrafts && post.draft) return undefined;
  return post;
}
