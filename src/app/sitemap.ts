import type { MetadataRoute } from "next";

import { absolute } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: absolute("/"), lastModified, changeFrequency: "weekly", priority: 1 },
    { url: absolute("/portfolio"), lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: absolute("/founders"), lastModified, changeFrequency: "weekly", priority: 0.8 },
    { url: absolute("/partners"), lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: absolute("/investors"), lastModified, changeFrequency: "monthly", priority: 0.8 },
  ];
}
