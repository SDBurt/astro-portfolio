import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import remarkGfm from "remark-gfm";
import remarkToc from "remark-toc";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  site: "https://www.sdburt.com",

  // Enable prefetching for faster navigation
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport'
  },

  // Build optimizations
  build: {
    concurrency: 2, // Parallel builds for better performance
  },

  // Image optimization configuration
  image: {
    remotePatterns: [{ protocol: "https" }]
  },

  // Compress HTML output
  compressHTML: true,

  integrations: [
    react(),
    mdx({
      optimize: true, // Enable MDX optimization for better build performance
      syntaxHighlight: "shiki",
      shikiConfig: {
        theme: "github-dark",
        wrap: true,
      },
      remarkPlugins: [remarkGfm, remarkToc],
      rehypePlugins: [
        rehypeSlug,
        [
          rehypeAutolinkHeadings,
          {
            behavior: "wrap",
            properties: {
              className: ["anchor-link"],
              ariaHidden: true,
              tabIndex: -1,
            },
          },
        ],
      ],
      gfm: true,
    }),
    sitemap(),
  ],

  adapter: vercel(),

  // Vite optimizations
  vite: {
    build: {
      // Inline small assets for better performance
      assetsInlineLimit: 1024,
      // CSS code splitting
      cssCodeSplit: true,
    },
  },
});