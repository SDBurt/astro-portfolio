import { defineCollection, z } from "astro:content";
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional(),
    image: image().optional(),
    imageAlt: z.string().optional(),
    tags: z.array(z.string()).default([]),
    author: z.string().default("Sean Burt"),
    readingTime: z.number().optional(),
    featured: z.boolean().default(false)
  }),
});

const work = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/work" }),
  schema: ({ image }) => z.object({
    company: z.string(),
    role: z.string(),
    dateStart: z.coerce.date(),
    dateEnd: z.union([z.coerce.date(), z.string()]),
    logo: image().optional(),
    location: z.string().optional(),
    skills: z.array(z.string()).default([])
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/projects" }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional(),
    demoURL: z.string().optional(),
    repoURL: z.string().optional(),
    image: image().optional(),
    imageAlt: z.string().optional(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    status: z.enum(["completed", "in-progress", "planned"]).default("completed")
  }),
});

export const collections = { blog, work, projects };