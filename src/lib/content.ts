import type { CollectionEntry } from 'astro:content';
import { defaultLocale, type Locale } from './site';

export function getBlogLocale(post: CollectionEntry<'blog'>): Locale {
	const firstSegment = post.id.split('/')[0] as Locale | undefined;
	return firstSegment && ['en', 'nl', 'tr', 'ar'].includes(firstSegment) ? firstSegment : defaultLocale;
}

export function getBlogSlug(post: CollectionEntry<'blog'>) {
	const parts = post.id.split('/').filter(Boolean);
	return parts.length > 1 ? parts.slice(1).join('/') : post.id;
}

export function getLocalizedBlogPosts(posts: CollectionEntry<'blog'>[], locale: Locale) {
	return posts
		.filter((post) => getBlogLocale(post) === locale)
		.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export function findLocalizedBlogPost(posts: CollectionEntry<'blog'>[], locale: Locale, slug: string) {
	return posts.find((post) => getBlogLocale(post) === locale && getBlogSlug(post) === slug);
}
