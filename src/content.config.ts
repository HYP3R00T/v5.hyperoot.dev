import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';
import { SITE } from 'config';

const article = defineCollection({
  loader: glob({ base: "./src/content/article", pattern: "**/*.{md,mdx}" }),
  // Type-check frontmatter using a schema
  schema: ({ image }) =>
    z.object({
      author: z.string().default(SITE.author),
      pubDatetime: z.date(),
      modDatetime: z.date().optional().nullable(),
      title: z.string(),
      featured: z.boolean().optional().default(false),
      draft: z.boolean().optional().default(false),
      category: z.string(),
      tags: z.array(z.string()).default([""]),
      description: z.string(),
      cover: image(),
      coverAlt: z.string(),
    }),
});

const project = defineCollection({
  loader: glob({ base: "./src/content/project", pattern: "**/*.{md,mdx}" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      altDescription: z.string(),
      pubDatetime: z.date(),
      modDatetime: z.date().optional().nullable(),
      tags: z.array(z.string()),
      githubRepo: z.string(), // format: "username/repo"
      documentation: z.string().optional(),
      featured: z.boolean().optional().default(false),
      draft: z.boolean().default(false),
      cover: image(),
      coverAlt: z.string(),
    }),
});

export const collections = { article, project };
