import { getCollection } from 'astro:content';
import { absoluteUrl, defaultLocale, locales, navItems, type Locale } from '../lib/site';

export async function GET() {
	const [posts, projects] = await Promise.all([getCollection('blog'), getCollection('portfolio')]);
	const staticPages = navItems.map((item) => item.href);
	const blogPages = posts.map((post) => `/blog/${post.id}/`);
	const projectPages = projects.map((project) => `/portfolio/${project.id}/`);
	const baseUrls = [...staticPages, ...blogPages, ...projectPages];
	const translatedLocales = Object.keys(locales).filter((locale) => locale !== defaultLocale) as Locale[];
	const localizedUrls = translatedLocales.flatMap((locale) => baseUrls.map((url) => `/${locale}${url}`));
	const urls = [...baseUrls, ...localizedUrls];

	return new Response(
		`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
			.map((url) => `  <url><loc>${absoluteUrl(url)}</loc></url>`)
			.join('\n')}\n</urlset>`,
		{
			headers: {
				'Content-Type': 'application/xml',
			},
		},
	);
}
