import type { MetadataRoute } from "next";

const SITE_URL = "https://masondeal.dev"; // update once the domain is live

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
