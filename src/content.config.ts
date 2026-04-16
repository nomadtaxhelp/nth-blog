import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    slug: z.string(),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('felix'),
    category: z.enum(['paraguay', 'tax-residency', 'us-llc']),
    tags: z.array(z.string()).default([]),
    heroImage: z.string().optional(),
    heroAlt: z.string().optional(),
    readingTime: z.number().optional(),
    answerCapsule: z.string().optional(),
    faqItems: z
      .array(
        z.object({
          question: z.string(),
          answer: z.string(),
        })
      )
      .optional(),
    contentUpgrade: z.string().optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

const upgrades = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/upgrades' }),
  schema: z.object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
    pdfUrl: z.string().optional(),
    brevoListId: z.string().optional(),
    thumbnailUrl: z.string().optional(),
  }),
});

export const collections = { posts, upgrades };
