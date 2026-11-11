import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Disable Next.js dev overlay button (the "N" floating badge) */
  devIndicators: false,
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
