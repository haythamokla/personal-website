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
		eyebrow: 'South Holland based visual storyteller',
		heading: 'Still frames with a cinematic pulse.',
		intro:
			'I create refined photography for people, places, and brands that want their story to feel tactile, intentional, and unforgettable.',
		portfolioCta: 'View portfolio',
		contactCta: 'Book a session',
		featuredEyebrow: 'Featured portfolio',
		featuredTitle: 'Editorial calm, cinematic edge.',
		featuredText: 'Selected work across Afterglow, Atmosphere, Human, and Monochrome.',
		approachEyebrow: 'Approach',
		approachTitle: 'Quiet light, human stories.',
		approachText:
			'The work follows the same rhythm as the portfolio: quiet light, honest emotion, careful framing, and images that leave room for the story to breathe.',
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
		description: 'Explore four minimal photography collections by Haytham Okla: Afterglow, Atmosphere, Human, and Monochrome.',
		eyebrow: 'Portfolio',
		heading: 'Selected visual stories.',
		text: 'A curated archive of quiet light, atmosphere, human stories, and monochrome studies.',
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
		languageText: 'The service is available in several languages.',
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
		text: 'Available for portraits, couples, lifestyle sessions, and visual stories with intention.',
		cta: 'Start a project',
	},
	categories: {
		afterglow: 'Afterglow',
		atmosphere: 'Atmosphere',
		human: 'Human',
		monochrome: 'Monochrome',
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
		eyebrow: 'Visuele verhalenverteller uit Zuid-Holland',
		heading: 'Stille beelden met een filmische hartslag.',
		intro:
			'Ik maak verfijnde fotografie voor mensen, plekken en merken die hun verhaal tastbaar, doelgericht en onvergetelijk willen laten voelen.',
		portfolioCta: 'Bekijk portfolio',
		contactCta: 'Boek een sessie',
		featuredEyebrow: 'Uitgelicht portfolio',
		featuredTitle: 'Editorale rust, filmische scherpte.',
		featuredText: 'Geselecteerd werk uit Nagloed, Atmosfeer, Menselijk en Monochroom.',
		approachEyebrow: 'Aanpak',
		approachTitle: 'Stil licht, menselijke verhalen.',
		approachText:
			'Het werk volgt hetzelfde ritme als het portfolio: stil licht, eerlijke emotie, zorgvuldige kadrering en beelden die ruimte laten voor het verhaal.',
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
		description: 'Ontdek vier minimale fotocollecties van Haytham Okla: Nagloed, Atmosfeer, Menselijk en Monochroom.',
		eyebrow: 'Portfolio',
		heading: 'Geselecteerde visuele verhalen.',
		text: 'Een zorgvuldig samengesteld archief van stil licht, atmosfeer, menselijke verhalen en monochrome studies.',
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
		languageText: 'De service is beschikbaar in meerdere talen.',
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
		text: 'Beschikbaar voor portretten, koppels, lifestyle-sessies en visuele verhalen met intentie.',
		cta: 'Start een project',
	},
	categories: {
		afterglow: 'Nagloed',
		atmosphere: 'Atmosfeer',
		human: 'Menselijk',
		monochrome: 'Monochroom',
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
		eyebrow: 'راوٍ بصري مقيم في جنوب هولندا',
		heading: 'لقطات ثابتة بنبض سينمائي.',
		intro: 'أصنع صوراً راقية للأشخاص والأماكن والعلامات التي تريد أن يبدو قصتها ملموسة ومقصودة ولا تُنسى.',
		portfolioCta: 'شاهد الأعمال',
		contactCta: 'احجز جلسة',
		featuredEyebrow: 'أعمال مختارة',
		featuredTitle: 'هدوء تحريري وحافة سينمائية.',
		featuredText: 'مختارات من الوهج الأخير والأجواء والإنسان وأحادي اللون.',
		approachEyebrow: 'الأسلوب',
		approachTitle: 'ضوء هادئ، وقصص إنسانية.',
		approachText:
			'يتبع العمل نفس إيقاع البورتفوليو: ضوء هادئ، إحساس صادق، تكوين دقيق، وصور تترك مساحة للقصة كي تتنفس.',
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
		description: 'استكشف أربع مجموعات تصوير بسيطة لهيثم عقلة: الوهج الأخير، الأجواء، الإنسان، وأحادي اللون.',
		eyebrow: 'الأعمال',
		heading: 'قصص بصرية مختارة.',
		text: 'أرشيف منسق للضوء الهادئ، والأجواء، والقصص الإنسانية، ودراسات الأبيض والأسود.',
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
		languageText: 'الخدمة متاحة بعدة لغات.',
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
		text: 'متاح للبورتريهات، والأزواج، وجلسات اللايف ستايل، والقصص البصرية ذات النية الواضحة.',
		cta: 'ابدأ مشروعاً',
	},
	categories: {
		afterglow: 'الوهج الأخير',
		atmosphere: 'الأجواء',
		human: 'الإنسان',
		monochrome: 'أحادي اللون',
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
		eyebrow: 'Güney Hollanda merkezli görsel hikaye anlatıcısı',
		heading: 'Sinematik nabzı olan durağan kareler.',
		intro: 'Hikayesinin dokunsal, bilinçli ve unutulmaz hissettirmesini isteyen insanlar, yerler ve markalar için rafine fotoğraf üretirim.',
		portfolioCta: 'Portfolyoyu gör',
		contactCta: 'Seans ayır',
		featuredEyebrow: 'Öne çıkan portfolyo',
		featuredTitle: 'Editoryal sakinlik, sinematik keskinlik.',
		featuredText: 'Gün Batımı Işığı, Atmosfer, İnsan ve Monokromdan seçilmiş çalışmalar.',
		approachEyebrow: 'Yaklaşım',
		approachTitle: 'Sessiz ışık, insan hikayeleri.',
		approachText:
			'İş, portfolyonun ritmini takip eder: sessiz ışık, dürüst duygu, dikkatli kadraj ve hikayenin nefes almasına alan bırakan görüntüler.',
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
		description: 'Haytham Okla’nın dört minimal fotoğraf koleksiyonunu keşfedin: Gün Batımı Işığı, Atmosfer, İnsan ve Monokrom.',
		eyebrow: 'Portfolyo',
		heading: 'Seçilmiş görsel hikayeler.',
		text: 'Sessiz ışık, atmosfer, insan hikayeleri ve monokrom çalışmalarından oluşan seçilmiş bir arşiv.',
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
		languageText: 'Hizmet birkaç dilde sunulabilir.',
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
		text: 'Portreler, çiftler, lifestyle çekimleri ve niyet taşıyan görsel hikayeler için uygunum.',
		cta: 'Proje başlat',
	},
	categories: {
		afterglow: 'Gün Batımı Işığı',
		atmosphere: 'Atmosfer',
		human: 'İnsan',
		monochrome: 'Monokrom',
	},
} as const;

export const uiCopy = { en, nl, ar, tr } as const;

export const projectCopy: Record<Locale, Record<string, ProjectText>> = {
	en: {
		afterglow: {
			title: 'Afterglow',
			description: 'A collection of quiet moments shaped by the last light of the day. Silhouettes, coastlines, and fading sunsets where light becomes the subject.',
			body: ['Quiet moments shaped by the last light of the day.'],
		},
		atmosphere: {
			title: 'Atmosphere',
			description: 'A collection of places, details, textures, and compositions that simply feel beautiful. Images focused on mood, design, and visual harmony.',
			body: ['Places, details, textures, and compositions held together by mood.'],
		},
		human: {
			title: 'Human',
			description: 'A collection of moments that tell human stories. Love, loneliness, connection, distance, and the emotions hidden inside everyday life.',
			body: ['Human stories carried by love, distance, connection, and everyday emotion.'],
		},
		monochrome: {
			title: 'Monochrome',
			description: 'A collection of black and white photographs where light, contrast, and composition speak louder than color.',
			body: ['Black and white photographs where light, contrast, and composition lead.'],
		},
	},
	nl: {
		afterglow: {
			title: 'Nagloed',
			description: 'Een collectie stille momenten gevormd door het laatste licht van de dag. Silhouetten, kustlijnen en verdwijnende zonsondergangen waarin licht het onderwerp wordt.',
			body: ['Stille momenten gevormd door het laatste licht van de dag.'],
		},
		atmosphere: {
			title: 'Atmosfeer',
			description: 'Een collectie plekken, details, texturen en composities die simpelweg mooi aanvoelen. Beelden gericht op sfeer, ontwerp en visuele harmonie.',
			body: ['Plekken, details, texturen en composities verbonden door sfeer.'],
		},
		human: {
			title: 'Menselijk',
			description: 'Een collectie momenten die menselijke verhalen vertellen. Liefde, eenzaamheid, verbinding, afstand en de emoties verborgen in het dagelijks leven.',
			body: ['Menselijke verhalen gedragen door liefde, afstand, verbinding en dagelijkse emotie.'],
		},
		monochrome: {
			title: 'Monochroom',
			description: 'Een collectie zwart-witfoto’s waarin licht, contrast en compositie luider spreken dan kleur.',
			body: ['Zwart-witfoto’s waarin licht, contrast en compositie leiden.'],
		},
	},
	ar: {
		afterglow: {
			title: 'الوهج الأخير',
			description: 'مجموعة من اللحظات الهادئة التي شكلها آخر ضوء في اليوم. ظلال، سواحل، وغروب يتلاشى حيث يصبح الضوء هو الموضوع.',
			body: ['لحظات هادئة شكلها آخر ضوء في اليوم.'],
		},
		atmosphere: {
			title: 'الأجواء',
			description: 'مجموعة من الأماكن والتفاصيل والملمس والتكوينات التي تبدو جميلة ببساطة. صور تركز على المزاج والتصميم والتناغم البصري.',
			body: ['أماكن وتفاصيل وملمس وتكوينات يجمعها المزاج.'],
		},
		human: {
			title: 'الإنسان',
			description: 'مجموعة من اللحظات التي تحكي قصصاً إنسانية. الحب، الوحدة، الاتصال، المسافة، والمشاعر المخفية داخل الحياة اليومية.',
			body: ['قصص إنسانية يحملها الحب والمسافة والاتصال ومشاعر الحياة اليومية.'],
		},
		monochrome: {
			title: 'أحادي اللون',
			description: 'مجموعة من الصور بالأبيض والأسود حيث يتحدث الضوء والتباين والتكوين بصوت أعلى من اللون.',
			body: ['صور بالأبيض والأسود يقودها الضوء والتباين والتكوين.'],
		},
	},
	tr: {
		afterglow: {
			title: 'Gün Batımı Işığı',
			description: 'Günün son ışığıyla şekillenen sessiz anlardan oluşan bir koleksiyon. Işığın özneye dönüştüğü silüetler, kıyılar ve solan gün batımları.',
			body: ['Günün son ışığıyla şekillenen sessiz anlar.'],
		},
		atmosphere: {
			title: 'Atmosfer',
			description: 'Güzel hissettiren yerler, detaylar, dokular ve kompozisyonlardan oluşan bir koleksiyon. Ruh hali, tasarım ve görsel uyuma odaklanan görüntüler.',
			body: ['Ruh haliyle birleşen yerler, detaylar, dokular ve kompozisyonlar.'],
		},
		human: {
			title: 'İnsan',
			description: 'İnsan hikayeleri anlatan anlardan oluşan bir koleksiyon. Sevgi, yalnızlık, bağ, mesafe ve gündelik hayatın içinde saklı duygular.',
			body: ['Sevgi, mesafe, bağ ve gündelik duygularla taşınan insan hikayeleri.'],
		},
		monochrome: {
			title: 'Monokrom',
			description: 'Işık, kontrast ve kompozisyonun renkten daha güçlü konuştuğu siyah beyaz fotoğraflardan oluşan bir koleksiyon.',
			body: ['Işık, kontrast ve kompozisyonun öne çıktığı siyah beyaz fotoğraflar.'],
		},
	},
};

export const postCopy: Record<Locale, Record<string, PostText>> = {
	en: {
		'how-should-you-prepare-for-a-photoshoot': {
			title: 'How Should You Prepare for a Photoshoot?',
			description: 'Simple answers to the most common questions people ask before a photoshoot, from outfits and arrival time to posing and feeling relaxed.',
			body: [
						"Preparing for a photoshoot doesn't have to be complicated. A few simple steps can help you feel more comfortable, more confident, and get the best possible results. Here are the most common questions people ask before a photoshoot.",
						"What Should I Wear to a Photoshoot? Wear clothes that make you feel comfortable and confident. Neutral colours and simple outfits usually photograph best, while large logos and busy patterns can distract from the final images. If you're taking photos with someone else, choose outfits that complement each other instead of matching exactly.",
						"Should I Get a Good Night's Sleep Before My Photoshoot? Yes. Being well-rested helps you feel more energetic and relaxed, which naturally shows in your expressions. Feeling your best often leads to better photographs.",
						"How Early Should I Arrive? Try to arrive five to ten minutes before your scheduled session. Arriving early gives you time to relax and allows the photoshoot to begin without feeling rushed.",
						"What If I Don't Know How to Pose? That's completely normal. Most people aren't professional models. Your photographer will guide you throughout the session with simple directions, so you don't need to worry about posing or knowing what to do.",
						"Do I Need to Look Perfect? Not at all. The best photographs usually come from genuine smiles, natural movement, and real emotions rather than perfect poses. Relax, enjoy the experience, and let your personality show.",
						"Should I Bring Anything With Me? If you'd like to make your photos more personal, feel free to bring meaningful items such as flowers, a blanket, your pet, or anything that reflects your personality or tells part of your story.",
						"Should I Look for Inspiration Before the Photoshoot? Yes. Looking at photos you like on Pinterest, Instagram, or other websites can help you discover styles, poses, or moods that appeal to you. Sharing a few inspiration photos with your photographer also helps ensure you're both working toward the same vision.",
						"Do I Need to Look at the Camera? No. Some of the best photos happen when you're simply walking, talking, laughing, or interacting naturally. Looking away from the camera often creates more authentic and relaxed images.",
						"How Can I Enjoy My Photoshoot More? Don't put pressure on yourself to be perfect. Trust the process, be yourself, and focus on enjoying the experience. When you're relaxed and having fun, it naturally shows in the final photographs."
			],
		},
	},
	nl: {},
	ar: {},
	tr: {},
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
