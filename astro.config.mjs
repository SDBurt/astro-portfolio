import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import remarkGfm from "remark-gfm";
import remarkToc from "remark-toc";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { unified } from "@astrojs/markdown-remark";

import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  site: "https://www.sdburt.com",

  // Astro 7's default processor (satteri) does not run remark/rehype plugins,
  // so the slug/anchor/GFM pipeline below is only applied through `unified`.
  // `trailingSlash: "never"` has to match `trailingSlash: false` in vercel.json,
  // otherwise canonicals, the sitemap and the feed all advertise URLs that
  // Vercel 308-redirects.
  trailingSlash: "never",
  markdown: {
    processor: unified({
      remarkPlugins: [remarkGfm, remarkToc],
      rehypePlugins: [
        rehypeSlug,
        [
          // `wrap` turns the heading text itself into the permalink, so the
          // link must not be hidden from assistive tech or removed from the
          // tab order.
          rehypeAutolinkHeadings,
          { behavior: "wrap", properties: { className: ["anchor-link"] } },
        ],
      ],
    }),
  },

  // Enable prefetching for faster navigation
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover'
  },

  // Build optimizations
  build: {
    concurrency: 2, // Parallel builds for better performance
    inlineStylesheets: 'auto', // Inline critical CSS
  },

  // Image optimization configuration
  // (no remotePatterns: every image is same-origin)

  // Compress HTML output
  compressHTML: true,

  integrations: [
    mdx({
      optimize: true, // Enable MDX optimization for better build performance
      syntaxHighlight: "shiki",
      shikiConfig: {
        theme: "github-dark",
        wrap: true,
      },
    }),
    sitemap(),
  ],

  adapter: vercel(),

  // Vite optimizations
  vite: {
    build: {
      // Inline small assets for better performance
      assetsInlineLimit: 2048,
      // CSS code splitting
      cssCodeSplit: true,
    },
  },
});