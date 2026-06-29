import { defaultLocale, type Locale } from './site';

type ProjectText = {
	title: string;
	description: string;
	body: string[];
};

type PostText = {
	title: string;
	description: string;
	body: string[];
};

const en = {
	common: {
		home: 'Home',
		all: 'All',
		categories: 'Categories',
		tags: 'Tags',
		reading: 'min read',
		location: 'Location',
		year: 'Year',
		client: 'Client',
		email: 'Email',
		projectType: 'Project Type',
		message: 'Message',
		name: 'Name',
		formPlaceholder: 'Form placeholder',
		direct: 'Direct',
		social: 'Social',
	},
	home: {
		title: 'Haytham Okla | Luxury Photography Portfolio',
		description:
			'Luxury personal brand photography portfolio featuring cinematic stories, editorial projects, travel essays, and refined visual direction.',
		eyebrow: 'Amsterdam based visual storyteller',
		heading: 'Still frames with a cinematic pulse.',
		intro:
			'I create refined photography for people, places, and brands that want their story to feel tactile, intentional, and unforgettable.',
		portfolioCta: 'View portfolio',
		contactCta: 'Book a session',
		featuredEyebrow: 'Featured portfolio',
		featuredTitle: 'Editorial calm, cinematic edge.',
		featuredText: 'Selected work across travel, portrait, commercial, and street stories.',
		approachEyebrow: 'Approach',
		approachTitle: 'Luxury without noise.',
		approachText:
			'The work is quiet by design: natural light, precise framing, and a restrained edit that lets the subject carry the frame. Every commission is planned around mood, movement, location, and the final context where the image will live.',
		journalEyebrow: 'Journal',
		journalTitle: 'Notes from the field.',
		journalText: 'Short essays on photography, travel, gear, creative process, and visual storytelling.',
	},
	snaps: {
		title: 'Snaps',
		description: 'A scrolling visual diary of portfolio images, small moments, and the stories behind each frame.',
		eyebrow: 'Snaps',
		heading: 'A running roll of quiet frames.',
		text: 'A vertical stream of portfolio photographs with small notes underneath: title, feeling, place, and the story that made the frame matter.',
		storyLabel: 'Story',
	},
	portfolio: {
		title: 'Portfolio',
		description: 'Explore luxury travel, portrait, editorial, commercial, and street photography projects by Haytham Okla.',
		eyebrow: 'Portfolio',
		heading: 'Selected visual stories.',
		text: 'A curated archive of photographic work across personal commissions, editorial essays, travel stories, and brand-led image systems.',
		galleryLabel: 'Portfolio gallery',
		categoriesLabel: 'Portfolio categories',
	},
	blog: {
		title: 'Blog',
		description: 'Photography essays, field notes, gear thoughts, and visual direction insights by Haytham Okla.',
		eyebrow: 'Journal',
		heading: 'Essays for sharper seeing.',
		text: 'A Markdown-powered journal for field notes, creative process, gear, visual direction, and the small decisions behind cinematic images.',
		taxonomyLabel: 'Blog taxonomy',
		listLabel: 'Article listing',
	},
	about: {
		title: 'About',
		description: "Learn about Haytham Okla's photography journey, visual approach, equipment, skills, and languages.",
		eyebrow: 'About',
		heading: 'Quiet precision, human stories.',
		text: 'My work lives between documentary patience and editorial control: images that feel composed, but never overworked.',
		storyTitle: 'Personal Story',
		story: [
			'Photography began as a way to slow down and understand places more carefully. Over time, that curiosity became a visual language built on light, atmosphere, and the dignity of simple compositions.',
			'Today, I work with individuals and brands who want imagery that feels premium without becoming loud. The process is collaborative, calm, and shaped around the story each project needs to tell.',
		],
		journeyEyebrow: 'Journey',
		journeyTitle: 'From observation to direction.',
		journeyText: 'The creative practice keeps one foot in candid discovery and one foot in planned editorial structure.',
		timeline: [
			['Seeing', 'Learning to read light, gesture, space, and visual rhythm before lifting the camera.'],
			['Shaping', 'Directing scenes with restraint so the final frame remains believable and alive.'],
			['Refining', 'Editing for consistency, color discipline, and long-term brand usefulness.'],
		],
		equipment: 'Equipment',
		skills: 'Skills',
		languages: 'Languages',
	},
	contact: {
		title: 'Contact',
		description: 'Contact Haytham Okla for photography bookings, editorial assignments, brand imagery, and creative collaborations.',
		eyebrow: 'Contact',
		heading: 'Start with the story.',
		text: 'For commissions, collaborations, licensing, and editorial assignments, share a few details and I will respond with next steps.',
		namePlaceholder: 'Your name',
		emailPlaceholder: 'you@example.com',
		messagePlaceholder: 'Tell me what you are building, where it will live, and what the images need to feel like.',
		projectOptions: ['Editorial assignment', 'Personal branding', 'Commercial campaign', 'Travel story'],
	},
	contactBand: {
		eyebrow: 'Bookings and collaborations',
		heading: 'Let the next frame feel intentional.',
		text: 'Available for editorial assignments, refined personal branding, commercial campaigns, and travel-led storytelling.',
		cta: 'Start a project',
	},
	categories: {
		editorial: 'Editorial',
		travel: 'Travel',
		portrait: 'Portrait',
		commercial: 'Commercial',
		street: 'Street',
	},
} as const;

const nl = {
	common: {
		home: 'Home',
		all: 'Alles',
		categories: 'Categorieën',
		tags: 'Tags',
		reading: 'min lezen',
		location: 'Locatie',
		year: 'Jaar',
		client: 'Klant',
		email: 'E-mail',
		projectType: 'Projecttype',
		message: 'Bericht',
		name: 'Naam',
		formPlaceholder: 'Formulier placeholder',
		direct: 'Direct',
		social: 'Sociaal',
	},
	home: {
		title: 'Haytham Okla | Luxe Fotografie Portfolio',
		description:
			'Luxe persoonlijk merkportfolio met filmische verhalen, editoriale projecten, reisessays en verfijnde visuele regie.',
		eyebrow: 'Visuele verhalenverteller uit Amsterdam',
		heading: 'Stille beelden met een filmische hartslag.',
		intro:
			'Ik maak verfijnde fotografie voor mensen, plekken en merken die hun verhaal tastbaar, doelgericht en onvergetelijk willen laten voelen.',
		portfolioCta: 'Bekijk portfolio',
		contactCta: 'Boek een sessie',
		featuredEyebrow: 'Uitgelicht portfolio',
		featuredTitle: 'Editorale rust, filmische scherpte.',
		featuredText: 'Geselecteerd werk uit reis-, portret-, commerciële en straatverhalen.',
		approachEyebrow: 'Aanpak',
		approachTitle: 'Luxe zonder lawaai.',
		approachText:
			'Het werk is bewust rustig: natuurlijk licht, precieze kadrering en een beheerste nabewerking waardoor het onderwerp het beeld draagt. Elke opdracht wordt gepland rond sfeer, beweging, locatie en de uiteindelijke plek waar het beeld zal leven.',
		journalEyebrow: 'Journal',
		journalTitle: 'Notities uit het veld.',
		journalText: 'Korte essays over fotografie, reizen, apparatuur, creatief proces en visuele storytelling.',
	},
	snaps: {
		title: 'Snaps',
		description: 'Een scrollend visueel dagboek van portfoliofoto’s, kleine momenten en de verhalen achter elk beeld.',
		eyebrow: 'Snaps',
		heading: 'Een doorlopende rol van stille beelden.',
		text: 'Een verticale stroom portfoliofoto’s met kleine notities eronder: titel, gevoel, plek en het verhaal dat het beeld betekenis gaf.',
		storyLabel: 'Verhaal',
	},
	portfolio: {
		title: 'Portfolio',
		description: 'Ontdek luxe reis-, portret-, editoriale, commerciële en straatfotografieprojecten van Haytham Okla.',
		eyebrow: 'Portfolio',
		heading: 'Geselecteerde visuele verhalen.',
		text: 'Een zorgvuldig samengesteld archief van werk voor persoonlijke opdrachten, editoriale essays, reisverhalen en merksystemen.',
		galleryLabel: 'Portfolio galerij',
		categoriesLabel: 'Portfolio categorieën',
	},
	blog: {
		title: 'Blog',
		description: 'Fotografie-essays, veldnotities, gedachten over apparatuur en inzichten in visuele regie van Haytham Okla.',
		eyebrow: 'Journal',
		heading: 'Essays om scherper te kijken.',
		text: 'Een Markdown-journal voor veldnotities, creatief proces, apparatuur, visuele regie en de kleine keuzes achter filmische beelden.',
		taxonomyLabel: 'Blog taxonomie',
		listLabel: 'Artikellijst',
	},
	about: {
		title: 'Over',
		description: 'Leer meer over Haytham Okla’s fotografische reis, visuele aanpak, apparatuur, vaardigheden en talen.',
		eyebrow: 'Over',
		heading: 'Stille precisie, menselijke verhalen.',
		text: 'Mijn werk beweegt tussen documentaire geduld en editoriale controle: beelden die gecomponeerd voelen, maar nooit overwerkt.',
		storyTitle: 'Persoonlijk verhaal',
		story: [
			'Fotografie begon als een manier om langzamer te kijken en plekken zorgvuldiger te begrijpen. In de loop van de tijd werd die nieuwsgierigheid een visuele taal gebouwd op licht, sfeer en de waardigheid van eenvoudige composities.',
			'Vandaag werk ik met mensen en merken die beelden willen die premium aanvoelen zonder luid te worden. Het proces is kalm, samenwerkend en gevormd rond het verhaal dat elk project moet vertellen.',
		],
		journeyEyebrow: 'Reis',
		journeyTitle: 'Van observeren naar regisseren.',
		journeyText: 'De creatieve praktijk houdt één voet in spontane ontdekking en één voet in geplande editoriale structuur.',
		timeline: [
			['Zien', 'Licht, gebaar, ruimte en visueel ritme leren lezen voordat de camera omhoog gaat.'],
			['Vormen', 'Scènes met terughoudendheid sturen zodat het uiteindelijke beeld geloofwaardig en levend blijft.'],
			['Verfijnen', 'Bewerken voor consistentie, kleurdiscipline en langdurige bruikbaarheid voor het merk.'],
		],
		equipment: 'Apparatuur',
		skills: 'Vaardigheden',
		languages: 'Talen',
	},
	contact: {
		title: 'Contact',
		description: 'Neem contact op met Haytham Okla voor fotografieboekingen, editoriale opdrachten, merkbeelden en creatieve samenwerkingen.',
		eyebrow: 'Contact',
		heading: 'Begin met het verhaal.',
		text: 'Voor opdrachten, samenwerkingen, licenties en editoriale projecten: deel een paar details en ik reageer met de volgende stappen.',
		namePlaceholder: 'Je naam',
		emailPlaceholder: 'jij@example.com',
		messagePlaceholder: 'Vertel wat je bouwt, waar het zal verschijnen en hoe de beelden moeten voelen.',
		projectOptions: ['Editoriale opdracht', 'Personal branding', 'Commerciële campagne', 'Reisverhaal'],
	},
	contactBand: {
		eyebrow: 'Boekingen en samenwerkingen',
		heading: 'Laat het volgende beeld doelgericht voelen.',
		text: 'Beschikbaar voor editoriale opdrachten, verfijnde personal branding, commerciële campagnes en reisgedreven storytelling.',
		cta: 'Start een project',
	},
	categories: {
		editorial: 'Editorial',
		travel: 'Reizen',
		portrait: 'Portret',
		commercial: 'Commercieel',
		street: 'Straat',
	},
} as const;

const ar = {
	common: {
		home: 'الرئيسية',
		all: 'الكل',
		categories: 'التصنيفات',
		tags: 'الوسوم',
		reading: 'دقيقة قراءة',
		location: 'الموقع',
		year: 'السنة',
		client: 'العميل',
		email: 'البريد الإلكتروني',
		projectType: 'نوع المشروع',
		message: 'الرسالة',
		name: 'الاسم',
		formPlaceholder: 'نموذج تجريبي',
		direct: 'مباشر',
		social: 'التواصل',
	},
	home: {
		title: 'هيثم عقلة | بورتفوليو تصوير فاخر',
		description: 'بورتفوليو شخصي فاخر يضم قصصاً سينمائية ومشاريع تحريرية ومقالات سفر واتجاهاً بصرياً راقياً.',
		eyebrow: 'راوٍ بصري مقيم في أمستردام',
		heading: 'لقطات ثابتة بنبض سينمائي.',
		intro: 'أصنع صوراً راقية للأشخاص والأماكن والعلامات التي تريد أن يبدو قصتها ملموسة ومقصودة ولا تُنسى.',
		portfolioCta: 'شاهد الأعمال',
		contactCta: 'احجز جلسة',
		featuredEyebrow: 'أعمال مختارة',
		featuredTitle: 'هدوء تحريري وحافة سينمائية.',
		featuredText: 'مختارات من قصص السفر والبورتريه والعمل التجاري والشارع.',
		approachEyebrow: 'الأسلوب',
		approachTitle: 'فخامة بلا ضجيج.',
		approachText:
			'العمل هادئ عمداً: ضوء طبيعي، تكوين دقيق، وتحرير متزن يترك للموضوع أن يحمل الصورة. كل مهمة تُبنى حول المزاج والحركة والموقع والسياق النهائي الذي ستعيش فيه الصورة.',
		journalEyebrow: 'اليوميات',
		journalTitle: 'ملاحظات من الميدان.',
		journalText: 'مقالات قصيرة عن التصوير والسفر والمعدات والعملية الإبداعية وسرد القصص بصرياً.',
	},
	snaps: {
		title: 'لقطات',
		description: 'يوميات بصرية قابلة للتمرير من صور البورتفوليو واللحظات الصغيرة والقصص خلف كل إطار.',
		eyebrow: 'لقطات',
		heading: 'شريط متواصل من الإطارات الهادئة.',
		text: 'تدفق عمودي من صور البورتفوليو مع ملاحظات قصيرة تحت كل صورة: العنوان، الإحساس، المكان، والقصة التي جعلت الإطار مهماً.',
		storyLabel: 'القصة',
	},
	portfolio: {
		title: 'الأعمال',
		description: 'استكشف مشاريع تصوير السفر والبورتريه والتحرير والتجارة والشارع الفاخرة لهيثم عقلة.',
		eyebrow: 'الأعمال',
		heading: 'قصص بصرية مختارة.',
		text: 'أرشيف منسق لأعمال فوتوغرافية عبر التكليفات الشخصية والمقالات التحريرية وقصص السفر وأنظمة الصور للعلامات.',
		galleryLabel: 'معرض الأعمال',
		categoriesLabel: 'تصنيفات الأعمال',
	},
	blog: {
		title: 'المدونة',
		description: 'مقالات تصوير، ملاحظات ميدانية، أفكار عن المعدات ورؤى في التوجيه البصري من هيثم عقلة.',
		eyebrow: 'اليوميات',
		heading: 'مقالات لرؤية أكثر حدة.',
		text: 'مدونة مبنية بـ Markdown للملاحظات الميدانية والعملية الإبداعية والمعدات والتوجيه البصري والقرارات الصغيرة خلف الصور السينمائية.',
		taxonomyLabel: 'تصنيف المدونة',
		listLabel: 'قائمة المقالات',
	},
	about: {
		title: 'نبذة',
		description: 'تعرف على رحلة هيثم عقلة في التصوير، أسلوبه البصري، معداته، مهاراته ولغاته.',
		eyebrow: 'نبذة',
		heading: 'دقة هادئة وقصص إنسانية.',
		text: 'يقع عملي بين صبر الوثائقي وسيطرة التحرير: صور تبدو مؤلفة بعناية لكنها لا تبدو مصطنعة.',
		storyTitle: 'القصة الشخصية',
		story: [
			'بدأ التصوير كطريقة للإبطاء وفهم الأماكن بعناية أكبر. ومع الوقت تحولت تلك الفضول إلى لغة بصرية مبنية على الضوء والجو وكرامة التكوينات البسيطة.',
			'اليوم أعمل مع أفراد وعلامات يريدون صوراً راقية من دون ضجيج. العملية تعاونية وهادئة ومبنية حول القصة التي يحتاج كل مشروع إلى سردها.',
		],
		journeyEyebrow: 'الرحلة',
		journeyTitle: 'من الملاحظة إلى التوجيه.',
		journeyText: 'الممارسة الإبداعية تجمع بين الاكتشاف العفوي والبناء التحريري المخطط.',
		timeline: [
			['الرؤية', 'قراءة الضوء والإيماءة والمساحة والإيقاع البصري قبل رفع الكاميرا.'],
			['التشكيل', 'توجيه المشاهد بهدوء حتى تبقى الصورة النهائية صادقة وحية.'],
			['الصقل', 'تحرير الصور للاتساق والانضباط اللوني والفائدة الطويلة للعلامة.'],
		],
		equipment: 'المعدات',
		skills: 'المهارات',
		languages: 'اللغات',
	},
	contact: {
		title: 'تواصل',
		description: 'تواصل مع هيثم عقلة لحجوزات التصوير والمهام التحريرية وصور العلامات والتعاون الإبداعي.',
		eyebrow: 'تواصل',
		heading: 'ابدأ بالقصة.',
		text: 'للتكليفات والتعاون والترخيص والمهام التحريرية، شارك بعض التفاصيل وسأرد عليك بالخطوات التالية.',
		namePlaceholder: 'اسمك',
		emailPlaceholder: 'you@example.com',
		messagePlaceholder: 'أخبرني بما تبنيه، أين ستُستخدم الصور، وكيف يجب أن يكون إحساسها.',
		projectOptions: ['مهمة تحريرية', 'هوية شخصية', 'حملة تجارية', 'قصة سفر'],
	},
	contactBand: {
		eyebrow: 'الحجوزات والتعاون',
		heading: 'لنجعل الإطار القادم مقصوداً.',
		text: 'متاح للمهام التحريرية، الهوية الشخصية الراقية، الحملات التجارية، وسرد السفر بصرياً.',
		cta: 'ابدأ مشروعاً',
	},
	categories: {
		editorial: 'تحريري',
		travel: 'سفر',
		portrait: 'بورتريه',
		commercial: 'تجاري',
		street: 'شارع',
	},
} as const;

const tr = {
	common: {
		home: 'Ana Sayfa',
		all: 'Tümü',
		categories: 'Kategoriler',
		tags: 'Etiketler',
		reading: 'dk okuma',
		location: 'Konum',
		year: 'Yıl',
		client: 'Müşteri',
		email: 'E-posta',
		projectType: 'Proje Türü',
		message: 'Mesaj',
		name: 'İsim',
		formPlaceholder: 'Form yer tutucu',
		direct: 'Doğrudan',
		social: 'Sosyal',
	},
	home: {
		title: 'Haytham Okla | Lüks Fotoğraf Portfolyosu',
		description: 'Sinematik hikayeler, editoryal projeler, seyahat yazıları ve rafine görsel yönlendirme içeren lüks kişisel marka portfolyosu.',
		eyebrow: 'Amsterdam merkezli görsel hikaye anlatıcısı',
		heading: 'Sinematik nabzı olan durağan kareler.',
		intro: 'Hikayesinin dokunsal, bilinçli ve unutulmaz hissettirmesini isteyen insanlar, yerler ve markalar için rafine fotoğraf üretirim.',
		portfolioCta: 'Portfolyoyu gör',
		contactCta: 'Seans ayır',
		featuredEyebrow: 'Öne çıkan portfolyo',
		featuredTitle: 'Editoryal sakinlik, sinematik keskinlik.',
		featuredText: 'Seyahat, portre, ticari ve sokak hikayelerinden seçilmiş çalışmalar.',
		approachEyebrow: 'Yaklaşım',
		approachTitle: 'Gürültüsüz lüks.',
		approachText:
			'İş bilinçli olarak sakindir: doğal ışık, hassas kadraj ve öznenin kareyi taşımasına izin veren ölçülü bir düzenleme. Her çekim ruh hali, hareket, konum ve görüntünün yaşayacağı son bağlam etrafında planlanır.',
		journalEyebrow: 'Günlük',
		journalTitle: 'Sahadan notlar.',
		journalText: 'Fotoğraf, seyahat, ekipman, yaratıcı süreç ve görsel hikaye anlatımı üzerine kısa yazılar.',
	},
	snaps: {
		title: 'Kareler',
		description: 'Portfolyo fotoğraflarından, küçük anlardan ve her karenin ardındaki hikayelerden oluşan kaydırılabilir bir görsel günlük.',
		eyebrow: 'Kareler',
		heading: 'Sessiz karelerden akan bir rulo.',
		text: 'Altında küçük notlar olan dikey bir portfolyo akışı: başlık, his, yer ve kareyi önemli yapan hikaye.',
		storyLabel: 'Hikaye',
	},
	portfolio: {
		title: 'Portfolyo',
		description: 'Haytham Okla’nın lüks seyahat, portre, editoryal, ticari ve sokak fotoğraf projelerini keşfedin.',
		eyebrow: 'Portfolyo',
		heading: 'Seçilmiş görsel hikayeler.',
		text: 'Kişisel çekimler, editoryal yazılar, seyahat hikayeleri ve marka görsel sistemleri için seçilmiş fotoğraf arşivi.',
		galleryLabel: 'Portfolyo galerisi',
		categoriesLabel: 'Portfolyo kategorileri',
	},
	blog: {
		title: 'Blog',
		description: 'Haytham Okla’dan fotoğraf yazıları, saha notları, ekipman düşünceleri ve görsel yönlendirme içgörüleri.',
		eyebrow: 'Günlük',
		heading: 'Daha keskin görmek için yazılar.',
		text: 'Saha notları, yaratıcı süreç, ekipman, görsel yönlendirme ve sinematik görüntülerin arkasındaki küçük kararlar için Markdown tabanlı günlük.',
		taxonomyLabel: 'Blog sınıflandırması',
		listLabel: 'Yazı listesi',
	},
	about: {
		title: 'Hakkında',
		description: 'Haytham Okla’nın fotoğraf yolculuğu, görsel yaklaşımı, ekipmanı, becerileri ve dilleri hakkında bilgi edinin.',
		eyebrow: 'Hakkında',
		heading: 'Sessiz kesinlik, insani hikayeler.',
		text: 'İşim belgesel sabır ile editoryal kontrol arasında yaşar: düzenli hissettiren ama asla fazla işlenmemiş kareler.',
		storyTitle: 'Kişisel Hikaye',
		story: [
			'Fotoğraf, yavaşlamak ve yerleri daha dikkatli anlamak için başladı. Zamanla bu merak ışık, atmosfer ve sade kompozisyonların onuru üzerine kurulu bir görsel dile dönüştü.',
			'Bugün, gürültülü olmadan premium hissettiren görüntüler isteyen kişiler ve markalarla çalışıyorum. Süreç işbirlikçi, sakin ve her projenin anlatması gereken hikaye etrafında şekillenir.',
		],
		journeyEyebrow: 'Yolculuk',
		journeyTitle: 'Gözlemden yönlendirmeye.',
		journeyText: 'Yaratıcı pratik, bir ayağını doğal keşifte, diğerini planlı editoryal yapıda tutar.',
		timeline: [
			['Görmek', 'Kamerayı kaldırmadan önce ışığı, jesti, alanı ve görsel ritmi okumak.'],
			['Şekillendirmek', 'Son karenin inandırıcı ve canlı kalması için sahneleri ölçülü yönlendirmek.'],
			['Arıtmak', 'Tutarlılık, renk disiplini ve uzun vadeli marka kullanımı için düzenlemek.'],
		],
		equipment: 'Ekipman',
		skills: 'Beceriler',
		languages: 'Diller',
	},
	contact: {
		title: 'İletişim',
		description: 'Fotoğraf çekimleri, editoryal görevler, marka görselleri ve yaratıcı işbirlikleri için Haytham Okla ile iletişime geçin.',
		eyebrow: 'İletişim',
		heading: 'Hikayeyle başlayın.',
		text: 'Çekimler, işbirlikleri, lisanslama ve editoryal görevler için birkaç detay paylaşın; sonraki adımlarla geri döneceğim.',
		namePlaceholder: 'Adınız',
		emailPlaceholder: 'siz@example.com',
		messagePlaceholder: 'Ne inşa ettiğinizi, nerede yaşayacağını ve görüntülerin nasıl hissettirmesi gerektiğini anlatın.',
		projectOptions: ['Editoryal görev', 'Kişisel marka', 'Ticari kampanya', 'Seyahat hikayesi'],
	},
	contactBand: {
		eyebrow: 'Rezervasyonlar ve işbirlikleri',
		heading: 'Bir sonraki kare bilinçli hissettirsin.',
		text: 'Editoryal görevler, rafine kişisel marka çalışmaları, ticari kampanyalar ve seyahat odaklı hikaye anlatımı için uygunum.',
		cta: 'Proje başlat',
	},
	categories: {
		editorial: 'Editoryal',
		travel: 'Seyahat',
		portrait: 'Portre',
		commercial: 'Ticari',
		street: 'Sokak',
	},
} as const;

export const uiCopy = { en, nl, ar, tr } as const;

export const projectCopy: Record<Locale, Record<string, ProjectText>> = {
	en: {
		'alpine-stillness': {
			title: 'Alpine Stillness',
			description: 'A quiet travel story shaped by mountain weather, negative space, and the patience of dawn light.',
			body: [
				'Alpine Stillness studies the quiet moments between movement: the walk before sunrise, the wait for fog to lift, and the first edge of light moving across stone.',
				'The project was edited for restraint. Each frame keeps a deliberate amount of air around the subject so the landscape feels expansive without becoming theatrical.',
			],
		},
		'nocturne-portraits': {
			title: 'Nocturne Portraits',
			description: 'Low-light portraits built around city reflections, controlled contrast, and understated confidence.',
			body: [
				'Nocturne Portraits was created for a personal brand campaign that needed confidence without gloss. The visual direction leaned into black fabrics, reflective streets, and narrow pools of light.',
				'The result is direct, restrained, and modern: portraiture that feels polished while keeping the human presence intact.',
			],
		},
		'atelier-objects': {
			title: 'Atelier Objects',
			description: 'A refined commercial still-life series for handcrafted materials, natural textures, and tactile detail.',
			body: [
				'Atelier Objects focuses on small decisions: the fold of linen, the grain of wood, the way a handmade object holds light at its edge.',
				'The series was designed for a brand system where images needed to work across web, social, print, and retail touchpoints.',
			],
		},
		'city-lines': {
			title: 'City Lines',
			description: 'Street photography guided by architecture, gesture, and the rhythm of passing light.',
			body: ['City Lines is a study in urban timing. The work looks for the instant where architecture, shadow, and human gesture briefly align.'],
		},
	},
	nl: {
		'alpine-stillness': {
			title: 'Alpiene Stilte',
			description: 'Een rustig reisverhaal gevormd door bergweer, negatieve ruimte en het geduld van ochtendlicht.',
			body: [
				'Alpiene Stilte onderzoekt de stille momenten tussen beweging: de wandeling voor zonsopkomst, het wachten tot mist optrekt en de eerste rand licht over steen.',
				'Het project is terughoudend bewerkt. Elk beeld houdt bewust lucht rond het onderwerp, zodat het landschap groots voelt zonder theatraal te worden.',
			],
		},
		'nocturne-portraits': {
			title: 'Nocturne Portretten',
			description: 'Portretten bij weinig licht, gebouwd rond stadsreflecties, gecontroleerd contrast en ingetogen zelfvertrouwen.',
			body: [
				'Nocturne Portretten werd gemaakt voor een personal brand-campagne die zelfvertrouwen nodig had zonder glanslaag. De richting leunde op zwarte stoffen, reflecterende straten en smalle stroken licht.',
				'Het resultaat is direct, beheerst en modern: portretwerk dat gepolijst voelt terwijl de menselijke aanwezigheid intact blijft.',
			],
		},
		'atelier-objects': {
			title: 'Atelier Objecten',
			description: 'Een verfijnde commerciële stillevenserie voor handgemaakte materialen, natuurlijke texturen en tastbare details.',
			body: [
				'Atelier Objecten draait om kleine beslissingen: de vouw van linnen, de nerf van hout, de manier waarop een handgemaakt object licht vasthoudt.',
				'De serie is ontworpen voor een merksysteem waarin beelden moesten werken voor web, social, print en retail.',
			],
		},
		'city-lines': {
			title: 'Stadslijnen',
			description: 'Straatfotografie geleid door architectuur, gebaar en het ritme van passerend licht.',
			body: ['Stadslijnen is een studie in stedelijke timing. Het werk zoekt het moment waarop architectuur, schaduw en menselijk gebaar kort samenvallen.'],
		},
	},
	ar: {
		'alpine-stillness': {
			title: 'سكون الجبال',
			description: 'قصة سفر هادئة شكلها طقس الجبال والمساحة السلبية وصبر ضوء الفجر.',
			body: [
				'سكون الجبال يدرس اللحظات الهادئة بين الحركة: السير قبل الشروق، انتظار ارتفاع الضباب، وأول حافة ضوء تتحرك على الحجر.',
				'تم تحرير المشروع بتقشف بصري. كل إطار يترك مساحة مقصودة حول الموضوع ليبدو المشهد واسعاً من دون مبالغة.',
			],
		},
		'nocturne-portraits': {
			title: 'بورتريهات ليلية',
			description: 'بورتريهات منخفضة الإضاءة مبنية على انعكاسات المدينة والتباين المحكوم والثقة الهادئة.',
			body: [
				'صُنعت بورتريهات ليلية لحملة هوية شخصية احتاجت إلى الثقة من دون لمعان زائد. اتجه الأسلوب إلى الأقمشة السوداء والشوارع العاكسة وبرك الضوء الضيقة.',
				'النتيجة مباشرة ومتحفظة وحديثة: بورتريه يبدو مصقولاً مع الحفاظ على الحضور الإنساني.',
			],
		},
		'atelier-objects': {
			title: 'أشياء الأتيليه',
			description: 'سلسلة تجارية راقية للأشياء الساكنة، للمواد المصنوعة يدوياً والملمس الطبيعي والتفاصيل الملموسة.',
			body: [
				'أشياء الأتيليه تركز على القرارات الصغيرة: طية الكتان، عروق الخشب، والطريقة التي يحتفظ بها الشيء اليدوي بالضوء عند حافته.',
				'صُممت السلسلة لنظام علامة يحتاج إلى صور تعمل عبر الويب والسوشيال والطباعة ونقاط البيع.',
			],
		},
		'city-lines': {
			title: 'خطوط المدينة',
			description: 'تصوير شارع تقوده العمارة والإيماءة وإيقاع الضوء العابر.',
			body: ['خطوط المدينة دراسة في توقيت المدينة. يبحث العمل عن اللحظة التي تتقاطع فيها العمارة والظل والإيماءة البشرية لفترة قصيرة.'],
		},
	},
	tr: {
		'alpine-stillness': {
			title: 'Alp Sessizliği',
			description: 'Dağ havası, negatif alan ve şafak ışığının sabrıyla şekillenen sakin bir seyahat hikayesi.',
			body: [
				'Alp Sessizliği hareket arasındaki sessiz anları inceler: gün doğmadan yürüyüş, sisin kalkmasını beklemek ve ışığın taşa ilk dokunuşu.',
				'Proje ölçülü düzenlendi. Her kare öznenin etrafında bilinçli bir boşluk bırakarak manzaranın teatral olmadan geniş hissetmesini sağlar.',
			],
		},
		'nocturne-portraits': {
			title: 'Gece Portreleri',
			description: 'Şehir yansımaları, kontrollü kontrast ve sade bir özgüven etrafında kurulan düşük ışık portreleri.',
			body: [
				'Gece Portreleri, parlaklık yerine özgüven isteyen bir kişisel marka kampanyası için üretildi. Görsel yön, siyah kumaşlara, yansıyan sokaklara ve dar ışık havuzlarına yaslandı.',
				'Sonuç doğrudan, ölçülü ve modern: insan varlığını korurken rafine görünen portreler.',
			],
		},
		'atelier-objects': {
			title: 'Atölye Nesneleri',
			description: 'El yapımı malzemeler, doğal dokular ve dokunsal detaylar için rafine bir ticari natürmort serisi.',
			body: [
				'Atölye Nesneleri küçük kararlara odaklanır: ketenin kıvrımı, ahşabın damarı, el yapımı bir nesnenin ışığı kenarında tutuşu.',
				'Seri, görsellerin web, sosyal, basılı ve perakende temaslarında çalışması gereken bir marka sistemi için tasarlandı.',
			],
		},
		'city-lines': {
			title: 'Şehir Çizgileri',
			description: 'Mimari, jest ve geçen ışığın ritmiyle yönlenen sokak fotoğrafçılığı.',
			body: ['Şehir Çizgileri kentsel zamanlama üzerine bir çalışmadır. İş, mimari, gölge ve insan jestinin kısa süreliğine hizalandığı anı arar.'],
		},
	},
};

export const postCopy: Record<Locale, Record<string, PostText>> = {
	en: {
		'finding-silence-in-city-light': {
			title: 'Finding Silence in City Light',
			description: 'How to create quiet, cinematic images in busy streets without losing the energy of the place.',
			body: [
				'Busy streets can feel impossible until you stop trying to control everything. I begin by choosing one clean background, then waiting for the right human gesture to enter it.',
				'Silence in a city photograph is rarely about emptiness. It comes from hierarchy. One subject, one light source, one dominant line, and enough negative space for the eye to rest.',
				'The best frames often happen after the obvious moment. Let the first wave of movement pass, keep the composition ready, and wait for the quieter second beat.',
			],
		},
		'packing-for-a-lean-editorial-shoot': {
			title: 'Packing for a Lean Editorial Shoot',
			description: 'A practical field note on carrying less equipment while keeping the visual range a client expects.',
			body: [
				'A lean kit keeps attention on the subject. For editorial work, I prefer one primary body, two lenses, spare batteries, fast storage, a small light modifier, and a written shot list.',
				'The goal is not minimalism for its own sake. The goal is mobility. When the kit is simple, decisions become faster and the atmosphere on set stays more relaxed.',
				'I would rather understand one lens deeply than carry five options that slow the day down.',
			],
		},
		'why-negative-space-feels-expensive': {
			title: 'Why Negative Space Feels Expensive',
			description: 'A short essay on restraint, composition, and why premium visual systems need room to breathe.',
			body: [
				'Negative space is one of the fastest ways to make an image feel more intentional. It creates pace, gives typography somewhere to live, and lets a brand feel confident enough not to fill every inch.',
				'In photography, restraint is not absence. It is direction. When fewer elements compete for attention, every remaining detail matters more.',
				'This is why luxury imagery often feels quiet. It trusts the viewer to come closer.',
			],
		},
	},
	nl: {
		'finding-silence-in-city-light': {
			title: 'Stilte vinden in stadslicht',
			description: 'Hoe je rustige, filmische beelden maakt in drukke straten zonder de energie van de plek te verliezen.',
			body: [
				'Drukke straten voelen onmogelijk totdat je stopt met alles willen controleren. Ik begin met één rustige achtergrond en wacht tot het juiste menselijke gebaar erin verschijnt.',
				'Stilte in een stadsfoto gaat zelden over leegte. Het komt door hiërarchie: één onderwerp, één lichtbron, één dominante lijn en genoeg negatieve ruimte voor het oog.',
				'De beste beelden ontstaan vaak na het voor de hand liggende moment. Laat de eerste golf beweging voorbijgaan, houd de compositie klaar en wacht op de stillere tweede beat.',
			],
		},
		'packing-for-a-lean-editorial-shoot': {
			title: 'Inpakken voor een lichte editoriale shoot',
			description: 'Een praktische veldnotitie over minder apparatuur meenemen terwijl je de visuele range houdt die een klant verwacht.',
			body: [
				'Een lichte kit houdt de aandacht bij het onderwerp. Voor editoriaal werk kies ik één hoofdcamera, twee lenzen, extra batterijen, snelle opslag, een kleine lichtvormer en een shotlist.',
				'Het doel is geen minimalisme om het minimalisme. Het doel is mobiliteit. Als de kit eenvoudig is, worden keuzes sneller en blijft de sfeer op set rustiger.',
				'Ik begrijp liever één lens diep dan vijf opties mee te dragen die de dag vertragen.',
			],
		},
		'why-negative-space-feels-expensive': {
			title: 'Waarom negatieve ruimte duur aanvoelt',
			description: 'Een kort essay over terughoudendheid, compositie en waarom premium visuele systemen ruimte nodig hebben.',
			body: [
				'Negatieve ruimte is een van de snelste manieren om een beeld doelgerichter te laten voelen. Het geeft ritme, ruimte voor typografie en laat een merk zelfverzekerd genoeg voelen om niet alles te vullen.',
				'In fotografie is terughoudendheid geen afwezigheid. Het is richting. Als minder elementen om aandacht vragen, wordt elk overblijvend detail belangrijker.',
				'Daarom voelt luxe beeld vaak stil. Het vertrouwt erop dat de kijker dichterbij komt.',
			],
		},
	},
	ar: {
		'finding-silence-in-city-light': {
			title: 'العثور على السكون في ضوء المدينة',
			description: 'كيف تصنع صوراً هادئة وسينمائية في شوارع مزدحمة من دون فقدان طاقة المكان.',
			body: [
				'قد تبدو الشوارع المزدحمة مستحيلة حتى تتوقف عن محاولة التحكم بكل شيء. أبدأ باختيار خلفية نظيفة ثم أنتظر الإيماءة البشرية المناسبة.',
				'السكون في صورة المدينة نادراً ما يكون فراغاً. إنه يأتي من الترتيب: موضوع واحد، مصدر ضوء واحد، خط مهيمن واحد ومساحة سلبية كافية لراحة العين.',
				'أفضل الإطارات تأتي غالباً بعد اللحظة الواضحة. دع الموجة الأولى تمر، أبق التكوين جاهزاً، وانتظر الإيقاع الثاني الأكثر هدوءاً.',
			],
		},
		'packing-for-a-lean-editorial-shoot': {
			title: 'حقيبة خفيفة لجلسة تحريرية',
			description: 'ملاحظة عملية عن حمل معدات أقل مع الحفاظ على المدى البصري الذي يتوقعه العميل.',
			body: [
				'الحقيبة الخفيفة تبقي الانتباه على الموضوع. في العمل التحريري أفضل جسماً أساسياً، عدستين، بطاريات إضافية، تخزين سريع، معدل ضوء صغير وقائمة لقطات مكتوبة.',
				'الهدف ليس التقليل لذاته. الهدف هو الحركة. عندما تكون الحقيبة بسيطة تصبح القرارات أسرع ويبقى الجو في الموقع أكثر هدوءاً.',
				'أفضل أن أفهم عدسة واحدة بعمق على أن أحمل خمس خيارات تبطئ اليوم.',
			],
		},
		'why-negative-space-feels-expensive': {
			title: 'لماذا تبدو المساحة السلبية فاخرة',
			description: 'مقال قصير عن التوازن والتكوين ولماذا تحتاج الأنظمة البصرية الراقية إلى مساحة للتنفس.',
			body: [
				'المساحة السلبية من أسرع الطرق لجعل الصورة تبدو مقصودة. إنها تصنع الإيقاع وتمنح النص مكاناً وتُشعر العلامة بثقة كافية كي لا تملأ كل شيء.',
				'في التصوير، التوازن ليس غياباً. إنه اتجاه. عندما تتنافس عناصر أقل على الانتباه، يصبح كل تفصيل باقٍ أكثر أهمية.',
				'لهذا تبدو الصور الفاخرة هادئة غالباً. إنها تثق بأن المشاهد سيقترب.',
			],
		},
	},
	tr: {
		'finding-silence-in-city-light': {
			title: 'Şehir Işığında Sessizliği Bulmak',
			description: 'Kalabalık sokaklarda yerin enerjisini kaybetmeden sakin, sinematik görüntüler üretmek.',
			body: [
				'Her şeyi kontrol etmeyi bırakana kadar kalabalık sokaklar imkansız görünebilir. Önce temiz bir arka plan seçer, sonra doğru insan jestinin kadraja girmesini beklerim.',
				'Bir şehir fotoğrafındaki sessizlik çoğu zaman boşluk değildir. Hiyerarşiden gelir: tek özne, tek ışık kaynağı, tek baskın çizgi ve gözün dinlenmesi için yeterli negatif alan.',
				'En iyi kareler çoğu zaman bariz andan sonra gelir. İlk hareket dalgasını bırakın, kompozisyonu hazır tutun ve daha sessiz ikinci ritmi bekleyin.',
			],
		},
		'packing-for-a-lean-editorial-shoot': {
			title: 'Hafif Bir Editoryal Çekim İçin Çanta Hazırlamak',
			description: 'Müşterinin beklediği görsel aralığı korurken daha az ekipman taşımaya dair pratik bir saha notu.',
			body: [
				'Hafif bir set dikkati özne üzerinde tutar. Editoryal işte bir ana gövde, iki lens, yedek piller, hızlı depolama, küçük bir ışık şekillendirici ve yazılı bir çekim listesi tercih ederim.',
				'Amaç minimalizm değildir. Amaç hareket kabiliyetidir. Set basit olduğunda kararlar hızlanır ve çekim alanındaki atmosfer daha rahat kalır.',
				'Günü yavaşlatan beş seçenek taşımaktansa tek bir lensi derinlemesine anlamayı tercih ederim.',
			],
		},
		'why-negative-space-feels-expensive': {
			title: 'Negatif Alan Neden Pahalı Hisseder',
			description: 'Ölçülülük, kompozisyon ve premium görsel sistemlerin neden nefes alacak alana ihtiyaç duyduğu üzerine kısa bir yazı.',
			body: [
				'Negatif alan, bir görüntünün daha bilinçli hissetmesini sağlayan en hızlı yollardan biridir. Ritmi kurar, tipografiye yer açar ve markanın her yeri doldurmayacak kadar özgüvenli görünmesini sağlar.',
				'Fotoğrafta ölçülülük yokluk değildir. Yöndür. Daha az unsur dikkat için yarıştığında, geriye kalan her detay daha önemli olur.',
				'Lüks görsellerin çoğu zaman sessiz hissettirmesinin nedeni budur. İzleyicinin yaklaşacağına güvenir.',
			],
		},
	},
};

export function getCopy(locale: Locale) {
	return uiCopy[locale] ?? uiCopy[defaultLocale];
}

export function getProjectText(id: string, locale: Locale) {
	return projectCopy[locale]?.[id] ?? projectCopy[defaultLocale][id];
}

export function getPostText(id: string, locale: Locale) {
	return postCopy[locale]?.[id] ?? postCopy[defaultLocale][id];
}
