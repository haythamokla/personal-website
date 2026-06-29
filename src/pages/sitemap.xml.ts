import { getCollection } from 'astro:content';
import { absoluteUrl, navItems } from '../lib/site';

export async function GET() {
	const [posts, projects] = await Promise.all([getCollection('blog'), getCollection('portfolio')]);
	const staticPages = navItems.map((item) => item.href);
	const blogPages = posts.map((post) => `/blog/${post.id}/`);
	const projectPages = projects.map((project) => `/portfolio/${project.id}/`);
	const urls = [...staticPages, ...blogPages, ...projectPages];

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
