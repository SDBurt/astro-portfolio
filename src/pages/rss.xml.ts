import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE_TITLE, FEED } from "@/config/site";

type Context = {
  site: string;
};

export async function GET(context: Context) {
  const blog = (await getCollection("blog")).filter((post) => !post.data.draft);

  const projects = (await getCollection("projects")).filter(
    (project) => !project.data.draft
  );

  const items = [...blog, ...projects].sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
  );

  return rss({
    title: SITE_TITLE,
    description: FEED.DESCRIPTION,
    site: context.site,
    // Mirrors `trailingSlash: "never"` so feed links are not redirects.
    trailingSlash: false,
    customData: "<language>en-us</language>",
    items: items.map((item) => ({
      title: item.data.title,
      description: item.data.description,
      pubDate: item.data.date,
      link: `/${item.collection}/${item.id}`,
    })),
  });
}
