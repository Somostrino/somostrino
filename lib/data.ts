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
  parentBrand: '',
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
      'Referente en la renovación del bolero en Chile. Integrado por Gonzalo Anaís y Joaquín Mayer, el dúo fusiona la música latinoamericana con un lenguaje contemporáneo. Su disco debut "La amistad hecha bolero" fue nominado en 2026 a los Premios PULSAR como "Mejor Álbum de Balada o Música Romántica". Cuentan con 3 giras nacionales, internacionalización en Argentina y destaque en medios como La Tercera, El Mercurio y CNN.',
    fullBio:
      'GAMUZA ha revolucionado la escena con su elegancia melódica y poética cercana. Integrado por Gonzalo Anaís y Joaquín Mayer, combinan la intimidad acústica del guitarrón y la guitarra clásica con arreglos vocales exquisitos. Con su aclamado álbum debut "La amistad hecha bolero", conquistaron la crítica especializada con nominaciones estelares y constantes presentaciones a tablero vuelto.',
    highlights: [
      'Nominado Premios PULSAR 2026 ("Mejor Álbum de Balada o Música Romántica")',
      '3 Giras Nacionales y gira internacional por Argentina',
      'Cobertura destacada en La Tercera, El Mercurio y CNN Chile',
      'Álbum debut: "La amistad hecha bolero"',
    ],
    image:
      'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1200&auto=format&fit=crop',
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
      'Proyecto de rap y cultura urbana liderado por una emergente figura nacional. Con un sonido influenciado por el G-Funk, rescata rimas de la vieja escuela fusionadas con estilo urbano actual. Destaca por colaboraciones con referentes como C-Funk y SoloNacho, y una lírica que transita entre la nostalgia callejera y el romanticismo.',
    fullBio:
      'Con un groove inconfundible marcado por sintetizadores analógicos, líneas de bajo pesadas y cadencia pausada pero potente, SIMPLEMENTE YO representa la frescura del hip-hop con raíces en el G-Funk costero y la poesía urbana santiaguina. Sus producciones han congregado a grandes leyendas de la escena nacional.',
    highlights: [
      'Sonido característico G-Funk & Old School moderno',
      'Featurings estelares con C-Funk y SoloNacho',
      'Lírica con identidad urbana, nostalgia y romanticismo callejero',
      'Amplia presencia en eventos y festivales de música urbana',
    ],
    image:
      'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=1200&auto=format&fit=crop',
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
      'Nuevo dúo formado por Simplemente Yo y SoloNacho. Debut estelar con su sencillo "Dopamina", producido con beat de JDiller y distribuido por Trino vía Symphonic. El proyecto incluye lanzamiento de videoclip oficial, shows en vivo y una activa campaña de Crowdfunding para financiar su primer álbum LP.',
    fullBio:
      'La unión de dos mentes líricas potentes de la escena nacional dio vida a LUR (Los Últimos Románticos CL). Su propuesta entrelaza cajas rítmicas profundas, melodías envolventes y una visión honesta del amor en tiempos modernos. Con el respaldo de Symphonic y la gestión integral de TRINO, preparan su esperado álbum debut.',
    highlights: [
      'Sencillo debut "Dopamina" producido por JDiller',
      'Distribución global por Symphonic & Management por TRINO',
      'Videoclip oficial de alto impacto estético y narrativo',
      'Campaña activa de Crowdfunding para el lanzamiento de su álbum LP',
    ],
    image:
      'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1200&auto=format&fit=crop',
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
      'Cantante chilena oriunda de Colina. Destaca por su versatilidad vocal y ritmo fresco bailable con sencillos como "Quiero To", "Perreo Animal" y "La Última y Nos Vamos", disponibles en Spotify, Apple Music y YouTube.',
    fullBio:
      'DENI LI es pura energía y talento vocal. Originaria de Colina, ha construido una sólida propuesta de pop urbano con carisma escénico y letras empoderadas. Sus shows en vivo son una explosión de coreografía, beats potentes y conexión inmediata con el público joven.',
    highlights: [
      'Hits destacados: "Quiero To", "Perreo Animal" y "La Última y Nos Vamos"',
      'Proyecto estelar de pop urbano y reggaetón',
      'Presencia en plataformas digitales: Spotify, Apple Music, YouTube',
      'Shows en vivo con cuerpo de baile e impacto escénico',
    ],
    image:
      'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1200&auto=format&fit=crop',
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
      'Pianista, arreglista y profesor de música egresado del Instituto Escuela Moderna. Docente e instructor en School of Rock Santiago y colaborador activo en diversos proyectos musicales de la escena nacional.',
    fullBio:
      'Con una formación técnica depurada e intuición compositiva versátil, Ennio Ramaciotti transita fluidamente entre la música académica, el jazz, la dirección musical y las producciones contemporáneas. Su labor pedagógica en School of Rock y sus participaciones en vivo lo ubican como un músico imprescindible en el circuito.',
    highlights: [
      'Egresado del Instituto Escuela Moderna de Música',
      'Docente e instructor en School of Rock Santiago',
      'Arreglista y pianista de sesión para destacados artistas chilenos',
      'Formato solista y ensambles instrumentales de cámara/jazz',
    ],
    image:
      'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?q=80&w=1200&auto=format&fit=crop',
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
      'Obra de teatro familiar producida por la Compañía de Teatro Farolito. Utiliza teatro gestual, manipulación de marionetas y objetos para relatar la travesía de la famosa perrita de Moscú en el espacio, abordando la empatía y el sacrificio.',
    fullBio:
      'Una pieza escénica conmovedora que cautiva tanto a niños como adultos. A través de títeres articulados, iluminación tenue espacial y una delicada banda sonora original, "LAIKA" revisita la historia espacial con sensibilidad poética, invitando a reflexionar sobre la compasión, los lazos afectivos y los límites de la ciencia.',
    highlights: [
      'Producción oficial de la Compañía de Teatro Farolito',
      'Teatro gestual, manipulación experta de marionetas y objetos',
      'Formato ideal para centros culturales, teatros municipales y colegios',
      'Temáticas universales: empatía, memoria, ciencia y afectos',
    ],
    image:
      'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?q=80&w=1200&auto=format&fit=crop',
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
