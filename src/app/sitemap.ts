import type { MetadataRoute } from "next";

import { siteConfig } from "@/content/site.config";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.seo.url;
  const paths = ["", ...siteConfig.projects.map((project) => `/projects/${project.slug}`)];

  return paths.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.8,
  }));
}
