import path from "node:path";

// Offline font support for sandboxed agent environments where external network is restricted
if (process.env.ANTIGRAVITY_AGENT || process.env.OFFLINE_FONTS) {
  process.env.NEXT_FONT_GOOGLE_MOCKED_RESPONSES = path.resolve(
    "./mocked-google-fonts.json"
  );
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  experimental: {
    cpus: 1,
    staticGenerationMaxConcurrency: 1,
    staticGenerationRetryCount: 3,
  },
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
