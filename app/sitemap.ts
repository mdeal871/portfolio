import type { MetadataRoute } from "next";

const SITE_URL = "https://masondeal.dev"; // update once the domain is live

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/engineering", "/web-design", "/about", "/contact"];

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
