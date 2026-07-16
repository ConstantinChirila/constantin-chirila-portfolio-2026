import type { MetadataRoute } from "next";
import { siteUrl } from "./lib/site";
import { getAllPosts } from "./lib/almanac";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${siteUrl}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/about`, changeFrequency: "yearly", priority: 0.8 },
    { url: `${siteUrl}/cv`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/almanac`, changeFrequency: "weekly", priority: 0.6 },
  ];

  // getAllPosts already excludes drafts in production.
  const posts: MetadataRoute.Sitemap = getAllPosts().map((p) => ({
    url: `${siteUrl}/almanac/${p.slug}`,
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  return [...staticRoutes, ...posts];
}
