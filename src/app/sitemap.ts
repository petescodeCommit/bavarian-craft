import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://bavarian-craft.vercel.app";
  return [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/produkte`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/konfigurieren`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/ueber-uns`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/impressum`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.2 },
    { url: `${base}/datenschutz`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.2 },
  ];
}
