import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const imageSchema = z.object({
	src: z.string().url(),
	alt: z.string(),
	width: z.number(),
	height: z.number(),
});

const portfolio = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/portfolio' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		category: z.enum(['editorial', 'travel', 'portrait', 'commercial', 'street']),
		client: z.string().optional(),
		location: z.string(),
		year: z.number(),
		featured: z.boolean().default(false),
		cover: imageSchema,
		gallery: z.array(imageSchema),
	}),
});

const blog = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		category: z.string(),
		tags: z.array(z.string()).default([]),
		cover: imageSchema,
	}),
});

export const collections = { portfolio, blog };
