export const defaultLocale = 'en';

export const locales = {
	en: { label: 'English', dir: 'ltr' },
	nl: { label: 'Dutch', dir: 'ltr' },
	ar: { label: 'Arabic', dir: 'rtl' },
	tr: { label: 'Turkish', dir: 'ltr' },
} as const;

export type Locale = keyof typeof locales;

export const site = {
	name: 'Haytham Okla',
	title: 'Haytham Okla | Luxury Photography Portfolio',
	description:
		'Luxury personal brand photography portfolio featuring cinematic stories, editorial projects, travel essays, and refined visual direction.',
	url: 'https://forsimo.github.io',
	base: '/haytham-portfolio',
	author: 'Haytham Okla',
	email: 'hello@haythamokla.com',
	phone: '+31 6 0000 0000',
	location: 'Amsterdam, Netherlands',
	socials: [
		{ label: 'Instagram', href: 'https://instagram.com/' },
		{ label: 'YouTube', href: 'https://youtube.com/' },
		{ label: 'LinkedIn', href: 'https://linkedin.com/' },
		{ label: 'Behance', href: 'https://behance.net/' },
	],
};

export const navItems = [
	{ label: 'Home', href: '/' },
	{ label: 'Portfolio', href: '/portfolio/' },
	{ label: 'Blog', href: '/blog/' },
	{ label: 'About', href: '/about/' },
	{ label: 'Contact', href: '/contact/' },
];

export const categoryLabels = {
	editorial: 'Editorial',
	travel: 'Travel',
	portrait: 'Portrait',
	commercial: 'Commercial',
	street: 'Street',
};

export const imageCatalog = {
	hero: {
		src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2400&q=82',
		alt: 'A cinematic mountain road photographed during soft golden light.',
		width: 2400,
		height: 1600,
	},
	studio: {
		src: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1800&q=82',
		alt: 'A professional camera prepared for an editorial photography session.',
		width: 1800,
		height: 1200,
	},
};

export function absoluteUrl(path = '/') {
	return new URL(pathWithBase(path), site.url).toString();
}

export function pathWithBase(path = '/') {
	const normalizedPath = path.startsWith('/') ? path : `/${path}`;
	if (normalizedPath === site.base || normalizedPath.startsWith(`${site.base}/`)) {
		return normalizedPath;
	}
	return `${site.base}${normalizedPath}`.replace(/\/$/, '/') || site.base;
}

export function getLocaleFromPath(pathname: string): Locale {
	const segment = pathname.split('/').filter(Boolean)[0] as Locale | undefined;
	return segment && segment in locales ? segment : defaultLocale;
}

export function readingTime(body = '') {
	const words = body.trim().split(/\s+/).filter(Boolean).length;
	return Math.max(1, Math.ceil(words / 220));
}
