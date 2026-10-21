import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// The guide "a tournament in 10 steps": one Markdown file per step and language,
// in src/content/guide/<locale>/<NN>-<slug>.md.
const guide = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/guide' }),
  schema: ({ image }) =>
    z.object({
      step: z.number().int().min(1),
      title: z.string(),
      /** Short summary shown in the table of contents. */
      summary: z.string(),
      /** Screenshots shown in a row under the step, enlarged on click. */
      images: z
        .array(z.object({ src: image(), alt: z.string(), caption: z.string() }))
        .default([]),
    }),
});

// Changelog, policy and legal pages, one Markdown file per page and language:
// src/content/pages/<locale>/<slug>.md, the slug being the page's URL slug.
const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    page: z.enum(['signing', 'privacy', 'legal', 'changelog']),
    title: z.string(),
    description: z.string(),
    heading: z.string(),
    lead: z.string().optional(),
    updated: z.coerce.date(),
  }),
});

export const collections = { guide, pages };
