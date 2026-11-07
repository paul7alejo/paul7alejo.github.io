import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const log = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/log' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    summary: z.string(),
    seq: z.number().default(0), // orders entries that share a date; higher is newer
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    status: z.string(),
    repo: z.string().url(),
    stack: z.array(z.string()).default([]),
    shows: z.array(z.string()).default([]),
    order: z.number().default(0),
  }),
});

export const collections = { log, projects };
