import type { MetadataRoute } from "next";

export default function robots():
  MetadataRoute.Robots {

  return {

    rules: [

      {
        userAgent: "*",

        allow: "/",
      },

      {
        userAgent: "Googlebot",

        allow: "/",
      },

      {
        userAgent: "Bingbot",

        allow: "/",
      },
    ],

    sitemap:
      "https://hardvantatechnologies.in/sitemap.xml",

    host:
      "https://hardvantatechnologies.in",
  };
}