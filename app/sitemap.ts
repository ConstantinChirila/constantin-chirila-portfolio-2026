import type { MetadataRoute } from "next";
import { siteUrl } from "./lib/site";
import { getAllPosts } from "./lib/notes";

export default function sitemap(): MetadataRoute.Sitemap {
  // getAllPosts excludes drafts (see includeDrafts in app/lib/notes.ts).
  const posts = getAllPosts();
  const newestPost = posts[0]?.published;

  const staticRoutes: MetadataRoute.Sitemap = [
    // No trailing slash on the root so it matches the page's canonical.
    { url: siteUrl, changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/about`, changeFrequency: "yearly", priority: 0.8 },
    { url: `${siteUrl}/cv`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/lab`, changeFrequency: "monthly", priority: 0.7 },
    {
      url: `${siteUrl}/notes`,
      changeFrequency: "weekly",
      priority: 0.6,
      ...(newestPost && { lastModified: newestPost }),
    },
  ];

  const postRoutes: MetadataRoute.Sitemap = posts.map((p) => ({
    url: `${siteUrl}/notes/${p.slug}`,
    lastModified: p.published,
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  return [...staticRoutes, ...postRoutes];
}
