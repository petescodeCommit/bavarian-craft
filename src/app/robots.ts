import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/admin/", "/api/", "/konto/"] },
    sitemap: "https://bavarian-craft.vercel.app/sitemap.xml",
  };
}
