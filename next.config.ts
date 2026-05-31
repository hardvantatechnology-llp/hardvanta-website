import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  poweredByHeader: false,

  compress: true,

  productionBrowserSourceMaps: false,

  trailingSlash: false,

  images: {
    qualities: [75, 85, 100],

    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },

      {
        protocol: "https",
        hostname: "plus.unsplash.com",
      },
    ],

    formats: [
      "image/avif",
      "image/webp",
    ],

    minimumCacheTTL:
      60 * 60 * 24 * 30,

    dangerouslyAllowSVG: true,

    contentDispositionType:
      "inline",

    contentSecurityPolicy:
      "default-src 'self'; script-src 'none'; sandbox;",
  },

  experimental: {
    optimizeCss: true,

    scrollRestoration: true,

    optimizePackageImports: [
      "lucide-react",
      "framer-motion",
    ],
  },

  compiler: {
    removeConsole:
      process.env.NODE_ENV === "production"
        ? {
            exclude: ["error"],
          }
        : false,
  },

  async headers() {
    return [
      {
        source: "/(.*)",

        headers: [
          {
            key:
              "X-DNS-Prefetch-Control",

            value: "on",
          },

          {
            key:
              "X-Frame-Options",

            value:
              "SAMEORIGIN",
          },

          {
            key:
              "X-Content-Type-Options",

            value:
              "nosniff",
          },

          {
            key:
              "Referrer-Policy",

            value:
              "strict-origin-when-cross-origin",
          },

          {
            key:
              "Permissions-Policy",

            value:
              "camera=(), microphone=(), geolocation=(), browsing-topics=()",
          },

          {
            key:
              "Strict-Transport-Security",

            value:
              "max-age=63072000; includeSubDomains; preload",
          },

          {
            key:
              "Cross-Origin-Opener-Policy",

            value:
              "same-origin",
          },

          {
            key:
              "Cross-Origin-Resource-Policy",

            value:
              "same-origin",
          },

          {
            key:
              "Origin-Agent-Cluster",

            value: "?1",
          },
        ],
      },
    ];
  },
};

export default nextConfig;