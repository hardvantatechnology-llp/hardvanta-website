import type { MetadataRoute } from "next";

export default function sitemap():
  MetadataRoute.Sitemap {

  return [

    {
      url:
        "https://hardvantatechnologies.in",

      lastModified:
        new Date(),

      changeFrequency:
        "weekly",

      priority: 1,
    },

    {
      url:
        "https://hardvantatechnologies.in/about",

      lastModified:
        new Date(),

      changeFrequency:
        "monthly",

      priority: 0.9,
    },

    {
      url:
        "https://hardvantatechnologies.in/services",

      lastModified:
        new Date(),

      changeFrequency:
        "weekly",

      priority: 0.95,
    },

    {
      url:
        "https://hardvantatechnologies.in/research",

      lastModified:
        new Date(),

      changeFrequency:
        "weekly",

      priority: 0.92,
    },

    {
      url:
        "https://hardvantatechnologies.in/industries",

      lastModified:
        new Date(),

      changeFrequency:
        "monthly",

      priority: 0.88,
    },

    {
      url:
        "https://hardvantatechnologies.in/team",

      lastModified:
        new Date(),

      changeFrequency:
        "monthly",

      priority: 0.82,
    },

    {
      url:
        "https://hardvantatechnologies.in/blog",

      lastModified:
        new Date(),

      changeFrequency:
        "weekly",

      priority: 0.85,
    },

    {
      url:
        "https://hardvantatechnologies.in/contact",

      lastModified:
        new Date(),

      changeFrequency:
        "monthly",

      priority: 0.9,
    },
  ];
}