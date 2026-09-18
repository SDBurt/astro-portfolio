import type { APIRoute } from "astro";

// Single source of truth for robots.txt: `public/robots.txt` used to shadow this
// route, so edits here silently did nothing.
const robotsTxt = `User-agent: *
Allow: /
Disallow: /api/
Disallow: /admin/
Disallow: /private/
Disallow: /.git/
Disallow: /node_modules/
Disallow: /config/
Disallow: /logs/
Disallow: /*?*session=
Disallow: /*?*token=

# security.txt is deliberately crawlable (RFC 9116)

User-agent: Googlebot-Image
Allow: /

Crawl-delay: 1

Sitemap: ${new URL("sitemap-index.xml", import.meta.env.SITE).href}
`;

export const GET: APIRoute = () => {
  return new Response(robotsTxt, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};
