import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog";
import { getAdminDb } from "@/lib/db";

export const dynamic = "force-dynamic";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = "https://bavarian-craft.vercel.app";

  const db = getAdminDb();
  const { data: products } = await db
    .from("products")
    .select("slug, updatedAt")
    .eq("active", true);

  const productEntries: MetadataRoute.Sitemap = (products ?? []).map((p) => ({
    url: `${base}/produkte/${p.slug}`,
    lastModified: new Date(p.updatedAt),
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/produkte`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    ...productEntries,
    { url: `${base}/konfigurieren`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    ...blogEntries,
    { url: `${base}/ueber-uns`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/impressum`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.2 },
    { url: `${base}/datenschutz`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.2 },
  ];
}
