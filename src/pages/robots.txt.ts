import type { APIRoute } from "astro";

const sitemapUrl = new URL("sitemap-index.xml", import.meta.env.SITE).href;

const robotsTxt = `
User-agent: *
Allow: /

# Block query parameter variants from being indexed
Disallow: /*?*ref=
Disallow: /*?*session=
Disallow: /*?*token=
Disallow: /*?*utm_

# Block non-content paths
Disallow: /api/
Disallow: /.well-known/
Disallow: /admin/
Disallow: /private/

# Block common attack vectors
Disallow: /.git/
Disallow: /node_modules/
Disallow: /.env
Disallow: /*wp-admin/
Disallow: /*wp-login.php
Disallow: /*wp-content/

# Sitemap
Sitemap: ${sitemapUrl}
`.trim();

export const GET: APIRoute = () => {
  return new Response(robotsTxt, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};