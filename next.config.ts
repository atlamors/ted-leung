import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow development assets and live updates through the current preview tunnel.
  allowedDevOrigins: ["daily-required-subsidiary-placed.trycloudflare.com"],
  turbopack: {
    rules: {
      // Leave CSS modules to Next.js so their scoped class exports stay intact.
      "globals.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
