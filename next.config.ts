import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    agentFeedback: true,
  },
  // The agent libraries are loaded by Node at runtime, not bundled: langsmith has an optional `ws` import the bundler cannot resolve.
  // deepagents is bundled on purpose: left external, Vercel loads it as CommonJS and fails with "Cannot use import statement outside a module".
  serverExternalPackages: ["langchain", "langsmith", "@langchain/core", "@langchain/openai", "openai", "@langchain/langgraph"],
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
