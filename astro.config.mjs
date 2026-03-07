import { defineConfig, envField } from "astro/config";
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
  site: "https://sdburt.com",
  trailingSlash: "never",

  env: {
    schema: {
      PUBLIC_POSTHOG_KEY: envField.string({ context: "client", access: "public", optional: true }),
      PUBLIC_POSTHOG_HOST: envField.string({ context: "client", access: "public", optional: true, default: "https://us.i.posthog.com" }),
    },
  },

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

  integrations: [
    react(),
    mdx({
      optimize: true,
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
    sitemap({
      serialize(item) {
        if (item.url.endsWith("/") && item.url !== "https://sdburt.com/") {
          item.url = item.url.slice(0, -1);
        }
        return item;
      },
    }),
  ],

  adapter: vercel(),

  vite: {
    build: {
      assetsInlineLimit: 2048,
      cssCodeSplit: true,
    },
    ssr: {
      noExternal: ['react-aria-components']
    }
  },
});
