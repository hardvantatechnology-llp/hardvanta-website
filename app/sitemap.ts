import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url:
        "https://hardvantatechnologies.in",

      lastModified: new Date(),

      changeFrequency: "weekly",

      priority: 1,
    },

    {
      url:
        "https://hardvantatechnologies.in/about",

      lastModified: new Date(),

      changeFrequency: "monthly",

      priority: 0.8,
    },

    {
      url:
        "https://hardvantatechnologies.in/services",

      lastModified: new Date(),

      changeFrequency: "monthly",

      priority: 0.9,
    },
  ];
}