import type { NextConfig } from "next";

// GitHub Pages serves the site under /<repo-name>, so only apply the
// base path when building in GitHub Actions. Local dev stays at "/".
const basePath = process.env.GITHUB_ACTIONS ? "/nextbites" : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
  experimental: {
    agentFeedback: true,
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
