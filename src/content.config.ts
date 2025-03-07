import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';
import { SITE } from 'config';

const article = defineCollection({
  // Load Markdown and MDX files in the `src/content/blog/` directory.
  loader: glob({ base: "./content/blog", pattern: "**/*.{md,mdx}" }),
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
      cover: image().optional(),
      coverAlt: z.string().optional(),
    }),
});

export const collections = { article };
