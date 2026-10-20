import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// The guide "a tournament in 10 steps": one Markdown file per step and language,
// in src/content/guide/<locale>/<NN>-<slug>.md.
const guide = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/guide' }),
  schema: z.object({
    step: z.number().int().min(1),
    title: z.string(),
    /** Short summary shown in the table of contents. */
    summary: z.string(),
  }),
});

export const collections = { guide };
