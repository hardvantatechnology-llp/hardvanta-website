import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  reactStrictMode: true,

  poweredByHeader: false,

  compress: true,

  productionBrowserSourceMaps: false,

  images: {

    formats: [
      "image/avif",
      "image/webp"
    ],

    qualities: [75, 90, 100],

    minimumCacheTTL: 60
  },

  experimental: {

    optimizePackageImports: [
      "lucide-react",
      "framer-motion"
    ]
  },

  compiler: {

    removeConsole:
      process.env.NODE_ENV === "production"
  },

  async headers() {

    return [
      {
        source: "/(.*)",

        headers: [

          {
            key: "X-DNS-Prefetch-Control",
            value: "on"
          },

          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN"
          },

          {
            key: "X-Content-Type-Options",
            value: "nosniff"
          },

          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin"
          },

          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()"
          }
        ]
      }
    ];
  }
};

export default nextConfig;