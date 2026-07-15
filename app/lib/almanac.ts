import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const ALMANAC_DIR = path.join(process.cwd(), "content", "almanac");

export interface PostMeta {
  slug: string;
  title: string;
  /** Display date, e.g. "2026 · 06". */
  date: string;
  /** Sortable ISO-ish key, e.g. "2026-06". */
  sort: string;
  category: string;
  excerpt: string;
  draft: boolean;
}

export interface Post extends PostMeta {
  content: string; // raw MDX body
}

function readSlug(slug: string): Post | undefined {
  const file = path.join(ALMANAC_DIR, `${slug}.mdx`);
  if (!fs.existsSync(file)) return undefined;
  const raw = fs.readFileSync(file, "utf8");
  const { data, content } = matter(raw);
  return {
    slug,
    title: String(data.title ?? slug),
    date: String(data.date ?? ""),
    sort: String(data.sort ?? data.date ?? ""),
    category: String(data.category ?? ""),
    excerpt: String(data.excerpt ?? ""),
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
    .sort((a, b) => b.sort.localeCompare(a.sort))
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    .map(({ content, ...meta }) => meta);
}

export function getPost(slug: string): Post | undefined {
  return readSlug(slug);
}
