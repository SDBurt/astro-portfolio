import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import { unified } from "@astrojs/markdown-remark";
import sitemap from "@astrojs/sitemap";
import remarkGfm from "remark-gfm";
import remarkToc from "remark-toc";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

// https://astro.build/config
export default defineConfig({
  site: "https://sdburt.com",
  trailingSlash: "never",

  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover'
  },

  build: {
    inlineStylesheets: 'auto',
  },

  image: {
    remotePatterns: [{ protocol: "https" }]
  },

  compressHTML: true,

  markdown: {
    processor: unified({
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
    }),
    syntaxHighlight: "shiki",
    shikiConfig: {
      theme: "github-dark",
      wrap: true,
    },
  },

  integrations: [
    mdx({
      optimize: true,
    }),
    sitemap({
      serialize(item) {
        if (item.url.endsWith("/") && item.url !== "https://sdburt.com/") {
          item.url = item.url.slice(0, -1);
        }
        return item;
      },
    }),
  ],

  vite: {
    build: {
      assetsInlineLimit: 2048,
      cssCodeSplit: true,
      sourcemap: false,
    },
  },
});
