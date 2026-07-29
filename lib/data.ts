export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  category: 'management' | 'produccion' | 'digital' | 'booking' | 'fondos';
  shortDesc: string;
  fullDesc: string;
  tags: string[];
  accentColor: string; // HEX
  iconName: string;
}

export interface PortfolioItem {
  id: string;
  name: string;
  artistSub: string;
  badges: string[];
  category: 'musica' | 'urbano' | 'teatro' | 'instrumental';
  description: string;
  fullBio: string;
  highlights: string[];
  image: string;
  primaryColor: string; // HEX
  secondaryColor: string; // HEX
  mediaLink?: string;
  spotifyLink?: string;
}

export const COMPANY_INFO = {
  name: 'TRINO',
  parentBrand: 'Agencia Katarsis',
  slogan: 'Darle impulso al arte, ponerle alma a la gestión',
  manifesto:
    'Somos TRINO, una agencia de proyectos culturales que impulsa propuestas artísticas con foco en la gestión integral y las relaciones humanas, ordenando la operación y la estrategia para que crezcan de forma sostenible en el tiempo.',
  email: 'hola@somostrino.cl',
  website: 'www.somostrino.cl',
  whatsappUrl:
    'https://wa.me/56982989599?text=Hola%20Trino,%20me%20gustaria%20recibir%20informacion',
  whatsappNumber: '+56 9 8298 9599',
  copyright: '© 2026 TRINO. www.somostrino.cl',
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'management-cultural',
    number: '01',
    title: 'Management Cultural',
    category: 'management',
    shortDesc: 'Acuerdos estratégicos de colaboración a largo plazo (2 a 3 años).',
    fullDesc:
      'Planificación integral, desarrollo de carrera artística y alianzas estratégicas para proyectar propuestas culturales a largo plazo con sostenibilidad financiera y administrativa.',
    tags: ['Estrategia 360°', 'Desarrollo de Carrera', 'Acuerdos 2-3 Años'],
    accentColor: '#C2FF01', // Lime
    iconName: 'Compass',
  },
  {
    id: 'gestion-merchandising',
    number: '02',
    title: 'Gestión de Merchandising',
    category: 'digital',
    shortDesc:
      'Modelos de inversión de capital flexibles, infraestructura e-commerce, boleteo e IVA, y personal para eventos.',
    fullDesc:
      'Diseño, producción y comercialización de productos oficiales del artista. Manejo de stock, plataforma de venta online, facturación, tributación y staff para venta en shows en vivo.',
    tags: ['E-Commerce', 'Boleteo e IVA', 'Staff en Eventos', 'Inversión Flexible'],
    accentColor: '#DCB8FE', // Lila
    iconName: 'ShoppingBag',
  },
  {
    id: 'produccion-eventos',
    number: '03',
    title: 'Producción de Eventos',
    category: 'produccion',
    shortDesc:
      'Producción técnica y logística para conciertos y funciones (Jefe técnico, Tour Manager, Productor).',
    fullDesc:
      'Ejecución impecable en terreno. Coordinación de recintos, riders técnicos, logística de traslado, cronogramas de prueba de sonido y equipo profesional en vivo.',
    tags: ['Jefe Técnico', 'Tour Manager', 'Producción de Campo'],
    accentColor: '#FE4502', // Mandarina
    iconName: 'Sliders',
  },
  {
    id: 'community-manager-rrss',
    number: '04',
    title: 'Community Manager & RRSS',
    category: 'digital',
    shortDesc:
      'Creación de contenido para IG y TikTok, jornadas de rodaje, cobertura en vivo y planes de contenido.',
    fullDesc:
      'Estrategia de comunicación digital adaptada al perfil del proyecto. Generación de videos verticales, fotos de backstage, calendario editorial y atención directa a la comunidad.',
    tags: ['IG & TikTok', 'Jornadas de Rodaje', 'Cobertura en Vivo'],
    accentColor: '#00BBFC', // Celeste
    iconName: 'Share2',
  },
  {
    id: 'pauta-digital-advertising',
    number: '05',
    title: 'Pauta Digital & Advertising',
    category: 'digital',
    shortDesc: 'Gestión profesional de campañas pagadas en Meta, YouTube y TikTok.',
    fullDesc:
      'Optimización de presupuesto publicitario para promoción de lanzamientos discográficos, venta de entradas a conciertos y alcance de nuevos oyentes objetivos.',
    tags: ['Meta Ads', 'YouTube Ads', 'TikTok Ads', 'Venta de Tickets'],
    accentColor: '#0044FD', // Azul Pop
    iconName: 'TrendingUp',
  },
  {
    id: 'impulso-artistico',
    number: '06',
    title: 'Impulso Artístico',
    category: 'management',
    shortDesc:
      'Asesorías en estrategia, definición de relato/público, manual de marca y sesiones fotográficas.',
    fullDesc:
      'Consultoría estética y conceptual. Ayudamos al artista a definir su identidad visual, narrativa, público objetivo y posicionamiento claro en el mercado actual.',
    tags: ['Manual de Marca', 'Definición de Relato', 'Sesiones Fotográficas'],
    accentColor: '#C2FF01', // Lime
    iconName: 'Sparkles',
  },
  {
    id: 'portafolio-audiovisual-prensa',
    number: '07',
    title: 'Portafolio Audiovisual & Prensa',
    category: 'produccion',
    shortDesc:
      'Producción de contenido en vivo (YouTube), generación de Dossier, EPK y redacción/difusión de comunicados de prensa.',
    fullDesc:
      'Herramientas clave para la industria. Grabación de sesiones en directo, dossiers promocionales de alto impacto visual y gestión de medios impresos, digitales y radiales.',
    tags: ['Sesiones YouTube', 'Dossier & EPK', 'Difusión de Prensa'],
    accentColor: '#DCB8FE', // Lila
    iconName: 'Video',
  },
  {
    id: 'booking-giras',
    number: '08',
    title: 'Booking & Giras',
    category: 'booking',
    shortDesc:
      'Gestión de fechas individuales, giras nacionales e internacionales y venta de entradas.',
    fullDesc:
      'Agendamiento y negociación de presentaciones en vivo, festivales, teatros y circuitos de conciertos dentro de Chile y en el extranjero.',
    tags: ['Giras Nacionales', 'Giras Internacionales', 'Circuitos Live'],
    accentColor: '#FE4502', // Mandarina
    iconName: 'MapPin',
  },
  {
    id: 'fondos-concursables',
    number: '09',
    title: 'Fondos Concursables',
    category: 'fondos',
    shortDesc:
      'Asesoría personalizada, acompañamiento y redacción completa para postulación a fondos públicos/privados.',
    fullDesc:
      'Especialistas en formulación de proyectos para Fondos de la Música, FONDART, CORFO y convocatorias internacionales, garantizando coherencia presupuestaria y metodológica.',
    tags: ['FONDART / Fondo Música', 'Formulación Técnica', 'Acompañamiento'],
    accentColor: '#00BBFC', // Celeste
    iconName: 'FileCheck',
  },
  {
    id: 'venta-corporativa-arriendo',
    number: '10',
    title: 'Venta Corporativa & Arriendo',
    category: 'booking',
    shortDesc:
      'Mailing y gestión de proyectos para colegios, municipios y empresas. Arriendo de equipamiento técnico (Mesa de sonido, Sistema PA, Microfonía).',
    fullDesc:
      'Comercialización de espectáculos para eventos privados, instituciones educativas y corporativas. Provisión de equipamiento de audio profesional para eventos.',
    tags: ['Mapeo Institucional', 'Municipios y Empresas', 'Arriendo de Audio PA'],
    accentColor: '#0044FD', // Azul Pop
    iconName: 'Briefcase',
  },
];

export const PORTFOLIO: PortfolioItem[] = [
  {
    id: 'gamuza',
    name: 'GAMUZA',
    artistSub: 'Dúo de Neo-Bolero & Balada Romántica',
    badges: ['Neo-Bolero', 'Música Romántica Contemporánea'],
    category: 'musica',
    description:
      'Referente en la renovación del bolero y la música romántica contemporánea en Chile. Integrado por Gonzalo Anaís y Joaquín Mayer, el dúo fusiona la música latinoamericana con un sonido moderno y puesta en escena fresca. Su aclamado álbum debut "La amistad hecha bolero" fue nominado en 2026 a los Premios PULSAR como "Mejor Álbum de Balada o Música Romántica".',
    fullBio:
      'GAMUZA reinterpreta el bolero y la música latinoamericana desde un lenguaje contemporáneo que conecta de inmediato con nuevas generaciones. Con 3 giras nacionales e internacionalización en Bariloche (Argentina), la agrupación ha sido destacada en medios de alta relevancia como La Tercera, El Mercurio, CNN y La Cuarta, proyectándose firmemente hacia el mercado latinoamericano.',
    highlights: [
      'Nominación Premios PULSAR 2026 ("Mejor Álbum de Balada o Música Romántica")',
      '3 Giras Nacionales y concierto internacional en Bariloche, Argentina',
      'Prensa destacada en La Tercera, El Mercurio, CNN Chile y La Cuarta',
      'Álbum debut: "La amistad hecha bolero"',
    ],
    image: '/portfolio/gamuza.jpg',
    primaryColor: '#DCB8FE', // Lila
    secondaryColor: '#C2FF01', // Lime
  },
  {
    id: 'simplemente-yo',
    name: 'SIMPLEMENTE YO',
    artistSub: 'Proyecto de Rap & Cultura Urbana',
    badges: ['Rap', 'G-Funk', 'Cultura Urbana'],
    category: 'urbano',
    description:
      'Proyecto de rap y cultura urbana liderado por una emergente figura nacional. Con un sonido profundamente influenciado por el G-Funk, rescata las rimas y ritmos de la vieja escuela para fusionarlos con el estilo urbano contemporáneo.',
    fullBio:
      'Ha ganado terreno rápidamente en el circuito en vivo gracias a destacadas colaboraciones con exponentes de la música chilena como SoloNacho y el histórico C-Funk. Su propuesta destaca por una lírica honesta que transita entre la nostalgia callejera y el romanticismo, posicionándose como una de las apuestas de nicho más refrescantes del país.',
    highlights: [
      'Sonido característico G-Funk & Old School moderno',
      'Featurings estelares con C-Funk y SoloNacho',
      'Lírica con identidad urbana, nostalgia y romanticismo callejero',
      'Catálogo oficial disponible en las principales plataformas digitales',
    ],
    image: '/portfolio/simplemente-yo.jpg',
    primaryColor: '#FE4502', // Mandarina
    secondaryColor: '#C2FF01',
  },
  {
    id: 'lur',
    name: 'LUR (Los Últimos Románticos CL)',
    artistSub: 'Dúo Urbano & Rap Romántico',
    badges: ['Rap Romántico', 'Dúo Urbano', 'Crowdfunding'],
    category: 'urbano',
    description:
      'Nuevo dúo chileno conformado por Simplemente Yo y SoloNacho. Debut oficial con su primer sencillo "Dopamina", distribuido bajo el alero de Trino a través de Symphonic, producido con beat de JDiller, mezcla de CrisMol y máster de Claudio Becerra.',
    fullBio:
      'LUR (Los Últimos Románticos CL) une a dos talentos independientes de la escena urbana. Su lanzamiento debut incluye un videoclip a cargo de DimePipe y By Famn, celebrado con un show en vivo en Kilombo. Durante este hito dieron el vamos a su campaña de Crowdfunding para acelerar el financiamiento de su futuro álbum de larga duración (LP).',
    highlights: [
      'Sencillo debut "Dopamina" (Beat JDiller, Mezcla CrisMol, Master C. Becerra)',
      'Distribución global por Symphonic & Management por TRINO',
      'Videoclip oficial realizado por DimePipe y By Famn',
      'Campaña activa de Crowdfunding para el lanzamiento de su álbum LP',
    ],
    image: '/portfolio/lur.jpg',
    primaryColor: '#00BBFC', // Celeste
    secondaryColor: '#DCB8FE',
  },
  {
    id: 'deni-li',
    name: 'DENI LI',
    artistSub: 'Cantante de Pop Urbano & Reggaetón',
    badges: ['Pop Urbano', 'Reggaetón'],
    category: 'urbano',
    description:
      'Cantante chilena oriunda de Colina. Marca un hito en su carrera bajo el sello Katarsis Music con el lanzamiento de "Quiero To", destacando por un ritmo bailable y fresco que consolida su versatilidad lírica y evolución vocal.',
    fullBio:
      'Tras hits previos como "Perreo Animal" y "La Última y Nos Vamos", DENI LI demuestra un crecimiento vocal constante y un carisma escénico único. Su catálogo completo y visualizers oficiales se encuentran disponibles en Spotify, Apple Music y YouTube.',
    highlights: [
      'Nuevo sencillo "Quiero To" bajo el sello Katarsis Music',
      'Hits destacados: "Perreo Animal" y "La Última y Nos Vamos"',
      'Catálogo completo en Spotify, Apple Music y YouTube',
      'Propuesta bailable y versátil en el pop urbano nacional',
    ],
    image: '/portfolio/deni-li.jpg',
    primaryColor: '#DCB8FE', // Lila
    secondaryColor: '#FE4502',
  },
  {
    id: 'ennio-ramaciotti',
    name: 'ENNIO RAMACIOTTI',
    artistSub: 'Pianista, Multiinstrumentista & Docente',
    badges: ['Pianista', 'Multiinstrumentista', 'Docente'],
    category: 'instrumental',
    description:
      'Pianista, multiinstrumentista y profesor de música egresado del Instituto Profesional Escuela Moderna de Música y Danza. Instructor de teclado y ensamblador en School of Rock Santiago y colaborador en diversos proyectos musicales.',
    fullBio:
      'Además de su valiosa labor pedagógica guiando a bandas emergentes, Ennio Ramaciotti participa activamente en la escena nacional colaborando y tocando en vivo en diversos proyectos musicales de distintas sonoridades con una técnica limpia y versátil.',
    highlights: [
      'Estudios en el IP Escuela Moderna de Música y Danza',
      'Instructor de teclado y ensamblador en School of Rock Santiago',
      'Músico de sesión y arreglista en múltiples proyectos nacionales',
      'Trayectoria activa en interpretación en vivo y docencia',
    ],
    image: '/portfolio/ennio-ramaciotti.jpg',
    primaryColor: '#0044FD', // Azul Pop
    secondaryColor: '#C2FF01',
  },
  {
    id: 'laika',
    name: 'LAIKA (Historia de una estrella fugaz)',
    artistSub: 'Obra de Teatro Familiar & Puppetry',
    badges: ['Teatro Familiar', 'Marionetas', 'Poesía Visual'],
    category: 'teatro',
    description:
      'Emotiva obra de teatro familiar producida por la Compañía de Teatro Farolito. Utiliza teatro gestual, manipulación de marionetas y objetos para narrar la travesía de la famosa perrita callejera de Moscú que viajó al espacio.',
    fullBio:
      'El montaje explora con poesía visual la relación entre Laika y su entrenador Oleg Gazenko. A través de una delicada manipulación técnica y trabajo escénico, aborda temas universales como la empatía, el sacrificio, el afecto y el progreso científico.',
    highlights: [
      'Producción oficial de la Compañía de Teatro Farolito',
      'Técnicas de teatro gestual, marionetas y trabajo con objetos',
      'Relato poético centrado en la empatía, el sacrificio y la memoria',
      'Formato ideal para salas de teatro, municipios y centros culturales',
    ],
    image: '/portfolio/laika.jpg',
    primaryColor: '#C2FF01', // Lime
    secondaryColor: '#00BBFC',
  },
];

export const BRAND_STATS = [
  { value: '10+', label: 'Servicios Especializados' },
  { value: '6', label: 'Proyectos Culturales Estelares' },
  { value: '3+', label: 'Giras Nacionales & Internacionales' },
  { value: '360°', label: 'Gestión Integral & Transparente' },
];
