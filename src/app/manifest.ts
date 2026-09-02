import type { MetadataRoute } from "next";

import { seo } from "@/lib/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${seo.name} — ${seo.tagline}`,
    short_name: seo.name,
    description: seo.description,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ff5a1f",
    lang: "en",
    categories: ["business", "finance"],
    icons: [
      { src: "/icon", sizes: "512x512", type: "image/png" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}
