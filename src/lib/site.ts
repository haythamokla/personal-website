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
	url: 'https://haythamokla.github.io',
	base: '/personal-website',
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
	{ key: 'home', href: '/' },
	{ key: 'snaps', href: '/snaps/' },
	{ key: 'portfolio', href: '/portfolio/' },
	{ key: 'blog', href: '/blog/' },
	{ key: 'about', href: '/about/' },
	{ key: 'contact', href: '/contact/' },
];

export const translations = {
	en: {
		nav: {
			home: 'Home',
			snaps: 'Snaps',
			portfolio: 'Portfolio',
			blog: 'Blog',
			about: 'About',
			contact: 'Contact',
		},
		skip: 'Skip to content',
		footerText: 'Luxury photography, cinematic visual direction, and thoughtful stories from Amsterdam.',
		footerNav: 'Footer navigation',
		socialLinks: 'Social links',
		languageOptions: 'Language options',
	},
	nl: {
		nav: {
			home: 'Home',
			snaps: 'Snaps',
			portfolio: 'Portfolio',
			blog: 'Blog',
			about: 'Over',
			contact: 'Contact',
		},
		skip: 'Ga naar inhoud',
		footerText: 'Luxe fotografie, filmische visuele richting en doordachte verhalen vanuit Amsterdam.',
		footerNav: 'Voetnavigatie',
		socialLinks: 'Sociale links',
		languageOptions: 'Taalopties',
	},
	ar: {
		nav: {
			home: 'الرئيسية',
			snaps: 'لقطات',
			portfolio: 'الأعمال',
			blog: 'المدونة',
			about: 'نبذة',
			contact: 'تواصل',
		},
		skip: 'انتقل إلى المحتوى',
		footerText: 'تصوير فاخر، وتوجيه بصري سينمائي، وقصص مدروسة من أمستردام.',
		footerNav: 'روابط التذييل',
		socialLinks: 'روابط التواصل',
		languageOptions: 'خيارات اللغة',
	},
	tr: {
		nav: {
			home: 'Ana Sayfa',
			snaps: 'Kareler',
			portfolio: 'Portfolyo',
			blog: 'Blog',
			about: 'Hakkında',
			contact: 'İletişim',
		},
		skip: 'İçeriğe geç',
		footerText: 'Amsterdam merkezli lüks fotoğrafçılık, sinematik görsel yönlendirme ve düşünceli hikayeler.',
		footerNav: 'Alt menü',
		socialLinks: 'Sosyal bağlantılar',
		languageOptions: 'Dil seçenekleri',
	},
} as const;

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

export function imageSrc(src: string) {
	return src.startsWith('http') ? src : pathWithBase(src);
}

export function pathWithBase(path = '/') {
	const normalizedPath = path.startsWith('/') ? path : `/${path}`;
	if (normalizedPath === site.base || normalizedPath.startsWith(`${site.base}/`)) {
		return normalizedPath;
	}
	return `${site.base}${normalizedPath}`.replace(/\/$/, '/') || site.base;
}

export function getLocaleFromPath(pathname: string): Locale {
	const cleanPath = stripBaseFromPath(pathname);
	const segment = cleanPath.split('/').filter(Boolean)[0] as Locale | undefined;
	return segment && segment in locales ? segment : defaultLocale;
}

export function removeLocaleFromPath(pathname: string) {
	const withoutBase = stripBaseFromPath(pathname);
	const parts = withoutBase.split('/').filter(Boolean);
	const first = parts[0] as Locale | undefined;
	const withoutLocale = first && first in locales ? parts.slice(1) : parts;
	return `/${withoutLocale.join('/')}${withoutLocale.length ? '/' : ''}`;
}

function stripBaseFromPath(pathname: string) {
	if (pathname === site.base) return '/';
	if (pathname.startsWith(`${site.base}/`)) return pathname.slice(site.base.length);
	return pathname;
}

export function localizedPath(pathname: string, locale: Locale) {
	const cleanPath = removeLocaleFromPath(pathname);
	if (locale === defaultLocale) return pathWithBase(cleanPath);
	return pathWithBase(`/${locale}${cleanPath}`);
}

export function getTranslations(locale: Locale) {
	return translations[locale] ?? translations[defaultLocale];
}

export function readingTime(body = '') {
	const words = body.trim().split(/\s+/).filter(Boolean).length;
	return Math.max(1, Math.ceil(words / 220));
}
