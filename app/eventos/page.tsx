'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X, Calendar, ExternalLink, Sparkles, Ticket, History } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface Evento {
  id: string;
  title: string;
  date: string;
  isoDate: string; // Fecha ISO para filtrado automático
  description: string;
  link: string;
  image: string;
  customUrl?: string; // Enlace a subpágina propia (si aplica)
}

const EVENTOS_LIST: Evento[] = [
  // --- PRÓXIMOS EVENTOS ---
  {
    id: 'tarde-de-pelicula',
    title: 'UNA TARDE DE PELÍCULA EN PLAZA VICTORIA',
    date: 'Sábado 12 de Septiembre 2026, 18:30 hrs.',
    isoDate: '2026-09-12T18:30:00',
    description: 'Un concierto íntimo de películas de Disney en formato piano y voz junto a Ennio Ramaciotti y Agustina Sepúlveda.',
    link: 'https://www.portaldisc.com/evento/tarde-de-pelicula',
    image: '/eventos/afiche-tarde-de-pelicula.jpg',
    customUrl: '/eventos/tarde-de-pelicula',
  },
  {
    id: 'gamuza-otra-noche-3',
    title: 'GAMUZA: OTRA NOCHE MÁS AQUÍ EN KILOMBO',
    date: 'Domingo 16 de agosto 2026, 16:30 hrs.',
    isoDate: '2026-08-16T16:30:00',
    description: 'Show vespertino de "Otra noche más aquí" en formato íntimo y acústico, esta vez desde Kilombo Bar en Barrio Brasil.',
    link: 'https://www.portaldisc.com/evento/otra-noche-mas-aqui-3',
    image: '/eventos/posters/plaza-victoria-3.jpg',
  },
  {
    id: 'gamuza-otra-noche-2',
    title: 'GAMUZA: OTRA NOCHE MÁS AQUÍ EN PLAZA VICTORIA',
    date: 'Sábado 15 de agosto 2026, 19:30 hrs.',
    isoDate: '2026-08-15T19:30:00',
    description: 'Segunda fecha de la serie de shows acústicos de Gamuza en Plaza Victoria, invitando a la complicidad del living de una casa.',
    link: 'https://www.portaldisc.com/evento/otra-noche-mas-aqui-2',
    image: '/eventos/posters/plaza-victoria-2.jpg',
  },

  // --- EVENTOS ANTERIORES Y NUEVOS REGISTROS ---
  {
    id: 'gamuza-otra-noche-1',
    title: 'GAMUZA: OTRA NOCHE MÁS AQUÍ EN PLAZA VICTORIA',
    date: 'Sábado 8 de agosto 2026, 19:30 hrs.',
    isoDate: '2026-08-08T19:30:00',
    description: 'Gamuza abre un espacio en formato acústico y despojado para la cercanía en Plaza Victoria tras su nominación a los Premios Pulsar 2026.',
    link: 'https://www.portaldisc.com/evento/otra-noche-mas-aqui',
    image: '/eventos/posters/plaza-victoria-1.jpg',
  },
  {
    id: 'drip-lanzamiento',
    title: 'SIMPLEMENTE YO + SOLONACHO: LANZAMIENTO DRIP',
    date: 'Jueves 2 de abril 2026, 20:00 hrs.',
    isoDate: '2026-04-02T20:00:00',
    description: 'Estreno oficial del videoclip “Drip” junto a Simplemente Yo y SoloNacho, con proyección exclusiva, shows en vivo e invitados como C-Funk.',
    link: 'https://www.portaldisc.com/evento/drip-simplemente-yo-x-solonacho',
    image: '/eventos/posters/drip-lanzamiento.jpg',
  },
  {
    id: 'gamuza-salamaster-2026',
    title: 'GAMUZA: CIERRE DE GIRA EN SALA MÁSTER',
    date: 'Sábado 28 de marzo 2026',
    isoDate: '2026-03-28T20:00:00',
    description: 'Gamuza cierra su exitosa gira con una noche memorable en la emblemática Sala Máster de la Universidad de Chile.',
    link: 'https://portaldisc.com/evento/gamuzaensalamaster',
    image: '/eventos/posters/gamuza-sala-master.jpg',
  },
  {
    id: 'gamuza-laserena-2',
    title: 'GAMUZA: LA AMISTAD HECHA BOLERO EN LA SERENA',
    date: 'Viernes 6 de febrero 2026, 21:00 hrs.',
    isoDate: '2026-02-06T21:00:00',
    description: 'Segunda función en La Serena para disfrutar en la noche un reencuentro con el bolero desde una mirada contemporánea.',
    link: 'https://www.portaldisc.com/evento/gira-lahb-laserena-gamuza',
    image: '/eventos/posters/la-serena-2-2026.jpg',
  },
  {
    id: 'gamuza-laserena-1',
    title: 'GAMUZA: LA AMISTAD HECHA BOLERO EN EL NUEVO PEREGRINO',
    date: 'Viernes 6 de febrero 2026, 18:00 hrs.',
    isoDate: '2026-02-06T18:00:00',
    description: 'Primera función en La Serena presentando en vivo las canciones de su nuevo disco en El Nuevo Peregrino.',
    link: 'https://www.portaldisc.com/evento/gira-lahb-laserena-gamuza2',
    image: '/eventos/posters/la-serena-2026.jpg',
  },
  {
    id: 'gamuza-cinzano-2026',
    title: 'GAMUZA: EN BAR CINZANO VALPARAÍSO',
    date: 'Jueves 5 de febrero 2026',
    isoDate: '2026-02-05T20:00:00',
    description: 'Valparaíso puerto querido, qué alegría volver para cantar y compartir con ustedes nuestro nuevo show.',
    link: 'https://www.instagram.com/p/DUGye9Hgatk/',
    image: '/eventos/posters/gamuza-cinzano.jpg',
  },
  {
    id: 'gamuza-valdivia',
    title: 'GAMUZA: LA AMISTAD HECHA BOLERO EN VALDIVIA',
    date: 'Sábado 24 de enero 2026, 19:30 hrs.',
    isoDate: '2026-01-24T19:30:00',
    description: 'En el marco de su gira, Gamuza se presenta en With Love Valdivia en una noche donde las historias compartidas son las protagonistas.',
    link: 'https://www.portaldisc.com/evento/gira-lahb-valdivia-gamuza',
    image: '/eventos/posters/valdivia-2026.jpg',
  },
  {
    id: 'gamuza-bariloche-2026',
    title: 'GAMUZA: EN CASA MACACHA BARILOCHE',
    date: 'Domingo 18 de enero 2026',
    isoDate: '2026-01-18T20:00:00',
    description: 'La banda chilena Gamuza llega por primera vez fuera de Chile a Bariloche en el marco de su gira. Show íntimo en Casa Macacha.',
    link: 'https://www.instagram.com/p/DTWJ1Uzjhkm/',
    image: '/eventos/posters/gamuza-casa-macacha.jpg',
  },
  {
    id: 'gamuza-puerto-varas-2026',
    title: 'GAMUZA: EN CENTRO DE ARTE MOLINO MACHMAR EN PUERTO VARAS',
    date: 'Sábado 17 de enero 2026',
    isoDate: '2026-01-17T20:00:00',
    description: 'Volvemos a Puerto Varas para compartir con ustedes nuestro nuevo espectáculo en el Centro de Arte Molino Machmar.',
    link: 'https://www.instagram.com/p/DTNNtp4lZsY/',
    image: '/eventos/posters/gamuza-puerto-varas.jpg',
  },
  {
    id: 'gamuza-osorno-2026',
    title: 'GAMUZA: LA AMISTAD HECHA BOLERO EN OSORNO',
    date: 'Jueves 15 de enero 2026, 19:30 hrs.',
    isoDate: '2026-01-15T19:30:00',
    description: 'Gamuza llega a Osorno presentando las canciones de su reciente disco en un show cercano y cargado de emoción en Taberna Pirata.',
    link: 'https://www.portaldisc.com/evento/gira-lahb-osorno-gamuza',
    image: '/eventos/posters/osorno-2026.jpg',
  },
  {
    id: 'gamuza-temuco-2026',
    title: 'GAMUZA: LA AMISTAD HECHA BOLERO EN TEMUCO',
    date: 'Sábado 10 de enero 2026, 19:30 hrs.',
    isoDate: '2026-01-10T19:30:00',
    description: 'La gira continúa llegando a Temuco con un concierto especial en La Perrera para reencontrarse con el bolero contemporáneo.',
    link: 'https://www.portaldisc.com/evento/gira-lahb-temuco-gamuza',
    image: '/eventos/posters/temuco-2026.jpg',
  },
  {
    id: 'gamuza-talca',
    title: 'GAMUZA: LA AMISTAD HECHA BOLERO EN TALCA',
    date: 'Viernes 9 de enero 2026, 19:30 hrs.',
    isoDate: '2026-01-09T19:30:00',
    description: 'Gamuza da inicio a su gira presentando en vivo las canciones de su reciente disco en un show íntimo en Gato Loco Bar.',
    link: 'https://www.portaldisc.com/evento/gira-lahb-talca-gamuza',
    image: '/eventos/posters/talca-2026.jpg',
  },
  {
    id: 'gamuza-lanzamiento-gam-2026',
    title: 'GAMUZA: LANZAMIENTO DE DISCO LA AMISTAD HECHA BOLERO EN GAM',
    date: 'Miércoles 7 de enero 2026',
    isoDate: '2026-01-07T20:00:00',
    description: 'Gamuza llega a GAM para celebrar el lanzamiento oficial de su primer larga duración "La amistad hecha bolero" con banda completa.',
    link: 'https://gam.cl/es/que-hacer-en-gam/musica-popular/gamuza/',
    image: '/eventos/posters/gamuza-gam.jpg',
  },
  {
    id: 'simplementeyo-ceira-2025',
    title: 'SIMPLEMENTE YO: EN ESPACIO CEIRA EN IRARRÁZAVAL',
    date: 'Viernes 19 de diciembre 2025',
    isoDate: '2025-12-19T20:00:00',
    description: 'SIDE SHOWS CONFIRMADOS — FINAL SPOILER 2025. Se suma Simplemente Yo y Soffi con shows especiales para romper el ritmo de la noche.',
    link: 'https://www.instagram.com/p/DSNZqk8jnmE/',
    image: '/eventos/posters/simplementeyo-spoiler.jpg',
  },
  {
    id: 'pre-escucha-2',
    title: 'PRE-ESCUCHA GAMUZA: LA AMISTAD HECHA BOLERO',
    date: 'Viernes 10 de octubre 2025, 19:00 hrs.',
    isoDate: '2025-10-10T19:00:00',
    description: 'Segunda fecha de pre-escucha exclusiva del nuevo disco "La Amistad Hecha Bolero" en sonido inmersivo en Estudio Vinilo.',
    link: 'https://www.portaldisc.com/evento/la-amistad-hecha-bolero-2',
    image: '/eventos/posters/pre-escucha-2-2025.jpg',
  },
  {
    id: 'pre-escucha-1',
    title: 'PRE-ESCUCHA GAMUZA: LA AMISTAD HECHA BOLERO',
    date: 'Jueves 9 de octubre 2025, 19:15 hrs.',
    isoDate: '2025-10-09T19:15:00',
    description: 'Pre-escucha exclusiva del nuevo disco de la banda en Dolby Atmos. Una velada íntima con vino de honor en comunidad.',
    link: 'https://www.portaldisc.com/evento/la-amistad-hecha-bolero',
    image: '/eventos/posters/pre-escucha-2025.jpg',
  },
  {
    id: 'fonda-gamuza',
    title: 'CUANDO EMPECÉ A CURARME - GAMUZA EN JARDÍN MALLINKRODT',
    date: 'Sábado 13 de septiembre 2025, 18:00 hrs.',
    isoDate: '2025-09-13T18:00:00',
    description: '¡Se arma la Fonda de Gamuza! Un show para cantar boleros a todo pulmón, mover la patita con el tiki-tiki-ti y brindar como corresponde.',
    link: 'https://www.portaldisc.com/evento/septiembre-con-gamuza',
    image: '/eventos/posters/mallinkrodt-2025.jpg',
  },
  {
    id: 'gamuza-santiago-2',
    title: 'GAMUZA EN SANTIAGO: BAR RAMBLAS (2DA FECHA)',
    date: 'Jueves 7 de agosto 2025, 19:30 hrs.',
    isoDate: '2025-08-07T19:30:00',
    description: 'Segunda fecha en Santiago tras agotar entradas en 3 días para su primer show. Una propuesta que fusiona el bolero con sonidos contemporáneos.',
    link: 'https://www.portaldisc.com/evento/gamuzaensantiago2',
    image: '/eventos/posters/ramblas-2-2025.jpg',
  },
  {
    id: 'simplemente-yo-cafe901',
    title: 'SIMPLEMENTE YO EN CAFÉ 901',
    date: 'Sábado 2 de agosto 2025, 17:00 hrs.',
    isoDate: '2025-08-02T17:00:00',
    description: '¡Ven a vivir una experiencia única junto a Simplemente Yo en Providencia! Un show cargado de rap y G-Funk en la escena urbana chilena.',
    link: 'https://www.portaldisc.com/evento/simplemente-yo-cafe-901',
    image: '/eventos/posters/cafe-901-2025.jpg',
  },
  {
    id: 'gamuza-chillan',
    title: 'GAMUZA EN CHILLÁN: ESPACIO LA ALDEA',
    date: 'Viernes 1 de agosto 2025, 20:30 hrs.',
    isoDate: '2025-08-01T20:30:00',
    description: 'Gamuza llega a Chillán con "Los Frutos Del Invierno", una experiencia íntima donde el bolero se encuentra con sonidos contemporáneos.',
    link: 'https://www.portaldisc.com/evento/gamuzaenchillan',
    image: '/eventos/posters/chillan-2025.jpg',
  },
  {
    id: 'gamuza-santiago-1',
    title: 'GAMUZA EN SANTIAGO: BAR RAMBLAS',
    date: 'Jueves 31 de julio 2025, 19:30 hrs.',
    isoDate: '2025-07-31T19:30:00',
    description: '"Los Frutos Del Invierno" marca el inicio de la temporada invernal de la banda, invitando a sumergirse en su nuevo universo sonoro.',
    link: 'https://www.portaldisc.com/evento/gamuzaensantiago',
    image: '/eventos/posters/ramblas-1-2025.jpg',
  },
  {
    id: 'gamuza-trotamundos-2025',
    title: 'GAMUZA: EN TERRAZA TROTAMUNDOS EN QUILPUÉ',
    date: 'Sábado 26 de julio 2025',
    isoDate: '2025-07-26T20:00:00',
    description: 'Querida gente de la quinta, ansiosos de poder volver a presentarnos compartiendo parte de lo nuevo que se viene: "Los frutos del invierno".',
    link: 'https://www.instagram.com/p/DLJCrDoMyWq/',
    image: '/eventos/posters/gamuza-trotamundos.jpg',
  },
  {
    id: 'gamuza-rancagua-2',
    title: 'GAMUZA EN RANCAGUA: EL VIEJO RANCAGUA',
    date: 'Jueves 24 de julio 2025, 20:00 hrs.',
    isoDate: '2025-07-24T20:00:00',
    description: 'Gamuza presenta su nuevo show "Los Frutos Del Invierno", una experiencia íntima donde el bolero se encuentra con nuevas sonoridades.',
    link: 'https://www.portaldisc.com/evento/gamuzaenrancagua2',
    image: '/eventos/posters/rancagua-2-2025.jpg',
  },
  {
    id: 'olivia-garcia',
    title: 'OLIVIA GARCÍA: C. C. DE ESPAÑA',
    date: 'Lunes 21 de abril 2025, 19:30 hrs.',
    isoDate: '2025-04-21T19:30:00',
    description: 'Olivia García presentará en vivo su nuevo single "Este Atardecer" con su inconfundible fusión de indie, pop y folclore latinoamericano.',
    link: 'https://www.portaldisc.com/evento/oliviagarcia-esteatardecer',
    image: '/eventos/posters/cce-olivia-2025.jpg',
  },
  {
    id: 'cierre-gira-losleones',
    title: 'CIERRE DE GIRA: GAMUZA EN SALA LOS LEONES',
    date: 'Sábado 15 de marzo 2025, 19:15 hrs.',
    isoDate: '2025-03-15T19:15:00',
    description: 'Gamuza cierra esta inolvidable etapa de gira veraniega con un show especial en Sala Los Leones, en el corazón de Recoleta.',
    link: 'https://www.portaldisc.com/evento/cierredegiragamuza',
    image: '/eventos/posters/los-leones-2025.jpg',
  },
  {
    id: 'gamuza-rancagua-1',
    title: 'GAMUZA EN EL VIEJO RANCAGUA',
    date: 'Viernes 14 de marzo 2025, 20:30 hrs.',
    isoDate: '2025-03-14T20:30:00',
    description: 'Después de una exitosa gira con 7 fechas, Gamuza llega a Rancagua para ofrecer una velada única llena de boleros.',
    link: 'https://www.portaldisc.com/evento/gamuzaenrancagua',
    image: '/eventos/posters/rancagua-2025.jpg',
  },
  {
    id: 'gamuza-valparaiso',
    title: 'GAMUZA EN VALPARAÍSO: LEMUTT BAR',
    date: 'Sábado 1 de marzo 2025, 20:00 hrs.',
    isoDate: '2025-03-01T20:00:00',
    description: 'Gamuza llega a Lemutt en Valparaíso para cerrar su Gira Verano 2025 con una velada llena de emoción y boleros reinventados.',
    link: 'https://www.portaldisc.com/evento/gamuzaenvalparaiso',
    image: '/eventos/posters/valparaiso-2025.jpg',
  },
  {
    id: 'gamuza-laserena-2025',
    title: 'GAMUZA EN LA SERENA: EL NUEVO PEREGRINO',
    date: 'Viernes 21 de febrero 2025, 21:45 hrs.',
    isoDate: '2025-02-21T21:45:00',
    description: 'Gamuza llega a El Nuevo Peregrino en La Serena para llenar la noche de boleros únicos y emociones inolvidables.',
    link: 'https://www.portaldisc.com/evento/gamuzaenlaserena',
    image: '/eventos/posters/la-serena-2025.jpg',
  },
  {
    id: 'gamuza-crapula-2025',
    title: 'GAMUZA: EN BAR CRÁPULA EN CONCEPCIÓN',
    date: 'Jueves 13 de febrero 2025',
    isoDate: '2025-02-13T20:00:00',
    description: 'Los boleros se toman el Bar Crápula en Concepción para compartir una noche inolvidable en el sur de Chile.',
    link: 'https://www.instagram.com/p/DF-tZX4xnIU/',
    image: '/eventos/posters/gamuza-crapula.jpg',
  },
  {
    id: 'gamuza-osorno-2025',
    title: 'GAMUZA EN OSORNO: TABERNA PIRATA',
    date: 'Miércoles 12 de febrero 2025, 21:00 hrs.',
    isoDate: '2025-02-12T21:00:00',
    description: 'Gamuza llegará a Taberna Pirata en Osorno para deleitar al público con su propuesta única de boleros contemporáneos.',
    link: 'https://www.portaldisc.com/evento/gamuzaentabernapirata',
    image: '/eventos/posters/osorno-2025.jpg',
  },
  {
    id: 'gamuza-jardinera-2025',
    title: 'GAMUZA: EN LA JARDINERA EN PUCÓN',
    date: 'Sábado 8 de febrero 2025',
    isoDate: '2025-02-08T20:00:00',
    description: 'Tendremos en nuestra querida Jardinera al trío de voces, guitarras y percusiones, interpretando lo mejor del bolero.',
    link: 'https://share.google/Eq6XuEFYFEOxAsQRZ',
    image: '/eventos/posters/gamuza-jardinera.jpg',
  },
  {
    id: 'gamuza-temuco-2025',
    title: 'GAMUZA EN TEMUCO: LA PERRERA',
    date: 'Viernes 7 de febrero 2025, 20:00 hrs.',
    isoDate: '2025-02-07T20:00:00',
    description: 'Gamuza llega a Temuco con su inconfundible estilo para regalar una velada inolvidable llena de boleros y emociones en el Bar La Perrera.',
    link: 'https://www.portaldisc.com/evento/gamuzaenlaperrera',
    image: '/eventos/posters/temuco-2025.jpg',
  },
  {
    id: 'olivia-scd-2024',
    title: 'OLIVIA GARCÍA: CONCIERTO UN NUEVO REFUGIO EN SALA SCD',
    date: 'Domingo 8 de septiembre 2024',
    isoDate: '2024-09-08T20:00:00',
    description: 'Concierto preparado con mucho amor y dedicación en banda completa para presentar "Un Nuevo Refugio" en Sala SCD.',
    link: 'https://www.instagram.com/p/C-lovdKpwiZ/',
    image: '/eventos/posters/olivia-sala-scd.jpg',
  },
  {
    id: 'muchacho-padre-2024',
    title: 'MUCHACHO DE LUNA: EN CENTRO CULTURAL DE PADRE LAS CASAS',
    date: 'Jueves 22 de agosto 2024',
    isoDate: '2024-08-22T20:00:00',
    description: 'Propuesta minimalista y ascética que busca el clima de esa Andalucía del llano ardiente y mágica donde la luna ilumina el amor.',
    link: 'https://www.instagram.com/p/C-2fcqiR7gX/',
    image: '/eventos/posters/muchacho-padre.jpg',
  },
  {
    id: 'olivia-crapula-2024',
    title: 'OLIVIA GARCÍA: EN BAR CRÁPULA EN CONCEPCIÓN',
    date: 'Sábado 20 de julio 2024',
    isoDate: '2024-07-20T20:00:00',
    description: 'Concierto por primera vez en Concepción, anticipando el esperado estreno de Un Nuevo Refugio.',
    link: 'https://www.instagram.com/p/C9kmMFTJDFn/',
    image: '/eventos/posters/olivia-concepcion.jpg',
  },
  {
    id: 'olivia-chillan-2024',
    title: 'OLIVIA GARCÍA: EN LATINOS BAR EN CHILLÁN',
    date: 'Viernes 19 de julio 2024',
    isoDate: '2024-07-19T20:00:00',
    description: 'Concierto por primera vez en Chillán, anticipando el estreno de Un Nuevo Refugio.',
    link: 'https://www.instagram.com/p/C9cwoEgJV2u/',
    image: '/eventos/posters/olivia-chillan.jpg',
  },
  {
    id: 'he-nacido-uc-2024',
    title: 'HE NACIDO PARA VERTE SONREÍR: EN TEATRO UC EN ÑUÑOA',
    date: 'Del 02 al 06 de enero 2024',
    isoDate: '2024-01-06T20:00:00',
    description: 'La sensible pieza de Santiago Loza bajo la dirección de Paulo Brunetti, con actuaciones de Blanca Lewin y Bernabé Madrigal.',
    link: 'https://teatrouc.uc.cl/evento/he-nacido-para-verte-sonreir-exitos-teatrales-3/',
    image: '/eventos/posters/he-nacido-uc.jpg',
  },
  {
    id: 'olivia-guada-master-2023',
    title: 'OLIVIA GARCÍA + GUADA: EN SALA MÁSTER U. DE CHILE',
    date: 'Miércoles 29 de noviembre 2023',
    isoDate: '2023-11-29T20:00:00',
    description: 'Noche especial compartiendo escenario con grandes referentes de la música en un recinto emblemático.',
    link: 'https://portaldisc.com/evento/guadayoliviagarciaensalamaster',
    image: '/eventos/posters/olivia-sala-master.jpg',
  },
  {
    id: 'dani-abarza-ummo-2023',
    title: 'DANI ABARZA: EN BAR UMMO EN PROVIDENCIA',
    date: 'Viernes 4 de agosto 2023',
    isoDate: '2023-08-04T20:00:00',
    description: 'Evento especial de despedida en Bar Ummo Providencia, acompañada por Olivia García y amigos artistas.',
    link: 'https://portaldisc.com/evento/despedida-dani-abarza',
    image: '/eventos/posters/dani-abarza-ummo.jpg',
  },
  {
    id: 'he-nacido-puertomontt-2023',
    title: 'HE NACIDO PARA VERTE SONREÍR: EN TEATRO DIEGO RIVERA PUERTO MONTT',
    date: 'Lunes 17 de julio 2023',
    isoDate: '2023-07-17T20:00:00',
    description: 'Montaje protagonizado por Blanca Lewin y Bernabé Madrigal en los Temporales Internacionales de Teatro de Puerto Montt.',
    link: 'https://teatrodiegorivera.cl/cartelera/temporales-teatrales-presenta-he-nacido',
    image: '/eventos/posters/he-nacido-puerto-montt.jpg',
  },
  {
    id: 'he-nacido-mori-2023',
    title: 'HE NACIDO PARA VERTE SONREÍR: EN TEATRO MORI EN RECOLETA',
    date: 'Del 05 al 28 de mayo 2023',
    isoDate: '2023-05-28T20:00:00',
    description: 'Una obra lacerante, profunda y de gran carga poética sobre las formas de la locura y el enigma del ser humano.',
    link: 'https://www.ticketmaster.cl/event/he-nacido-para-verte-sonreir-recoleta',
    image: '/eventos/posters/he-nacido-mori.jpg',
  },
  {
    id: 'he-nacido-finis-2023',
    title: 'HE NACIDO PARA VERTE SONREÍR: EN TEATRO FINIS TERRAE',
    date: 'Del 11 al 14 de enero 2023',
    isoDate: '2023-01-14T20:00:00',
    description: 'El monólogo de la madre transcurre entre la melancolía y la tristeza con un humor secreto necesario para soportar el dolor.',
    link: 'https://teatrofinisterrae.cl/evento/he-nacido-para-verte-sonreir/',
    image: '/eventos/posters/he-nacido-finis-terrae.jpg',
  },
  {
    id: 'muchacho-rancagua-2022',
    title: 'MUCHACHO DE LUNA: EN TEATRO CASA DEL ARTE EN RANCAGUA',
    date: 'Del 3 al 5 de marzo 2022',
    isoDate: '2022-03-05T20:00:00',
    description: 'Obra aplaudida con más de 120 funciones, realizada con éxito de crítica en Chile y Argentina.',
    link: 'https://www.facebook.com/photo?fbid=350369967106362',
    image: '/eventos/posters/muchacho-rancagua.jpg',
  },
];

export default function EventosPage() {
  const [selectedEvento, setSelectedEvento] = useState<Evento | null>(null);

  // Filtrado automático según la fecha actual
  const now = new Date();

  // Próximos eventos
  const proximosEventos = EVENTOS_LIST
    .filter((e) => new Date(e.isoDate) >= now)
    .sort((a, b) => new Date(a.isoDate).getTime() - new Date(b.isoDate).getTime());

  // Eventos pasados
  const eventosPasados = EVENTOS_LIST
    .filter((e) => new Date(e.isoDate) < now)
    .sort((a, b) => new Date(b.isoDate).getTime() - new Date(a.isoDate).getTime());

  // Función para renderizar cada tarjeta (link o modal)
  const renderCard = (evento: Evento, isUpcoming: boolean) => {
    const borderClass = isUpcoming 
      ? 'border-2 border-[#C2FF01]/50 hover:border-[#C2FF01] shadow-xl hover:shadow-[0_0_30px_rgba(194,255,1,0.3)]'
      : 'border border-white/10 hover:border-[#C2FF01]/50 shadow-lg hover:shadow-[0_0_20px_rgba(194,255,1,0.15)] opacity-85 hover:opacity-100';

    const cardContent = (
      <>
        {/* Fondo difuminado dinámico */}
        <Image
          src={evento.image}
          alt=""
          fill
          className="object-cover blur-xl opacity-50 scale-125 pointer-events-none"
        />

        {/* Imagen principal completa */}
        <div className="relative w-full h-full p-1.5">
          <Image
            src={evento.image}
            alt={evento.title}
            fill
            className="object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
      </>
    );

    const commonClasses = `group relative aspect-[3/4] rounded-2xl overflow-hidden bg-[#1B1D21] ${borderClass} transition-all duration-300 hover:-translate-y-1 text-left cursor-pointer block`;

    if (evento.customUrl) {
      return (
        <a key={evento.id} href={evento.customUrl} className={commonClasses}>
          {cardContent}
        </a>
      );
    }

    return (
      <button key={evento.id} onClick={() => setSelectedEvento(evento)} className={commonClasses}>
        {cardContent}
      </button>
    );
  };

  return (
    <div className="bg-[#1B1D21] text-white min-h-screen selection:bg-[#C2FF01] selection:text-[#1B1D21]">
      <Navbar />

      <main className="pt-32 pb-24 relative overflow-hidden">
        {/* Glow de ambiente */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[#C2FF01]/5 rounded-full blur-[180px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
          
          {/* SECCIÓN 1: PRÓXIMOS EVENTOS */}
          {proximosEventos.length > 0 && (
            <section className="space-y-8">
              <div className="flex items-center gap-3">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#23262D] text-[#C2FF01] text-xs font-bold uppercase tracking-wider border border-[#C2FF01]/40 shadow-[0_0_15px_rgba(194,255,1,0.15)]">
                  <Sparkles className="w-4 h-4" />
                  <span>PRÓXIMOS EVENTOS</span>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {proximosEventos.map((e) => renderCard(e, true))}
              </div>
            </section>
          )}

          {/* SECCIÓN 2: EVENTOS QUE TE PERDISTE */}
          {eventosPasados.length > 0 && (
            <section className="space-y-8 pt-6 border-t border-white/10">
              <div className="flex items-center gap-3">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#23262D] text-slate-400 text-xs font-bold uppercase tracking-wider border border-white/10">
                  <History className="w-4 h-4 text-slate-400" />
                  <span>EVENTOS QUE TE PERDISTE</span>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {eventosPasados.map((e) => renderCard(e, false))}
              </div>
            </section>
          )}

        </div>
      </main>

      {/* Pop-up Modal para eventos estándar */}
      {selectedEvento && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedEvento(null)}
        >
          <div 
            className="bg-[#23262D] border border-[#C2FF01]/40 rounded-3xl max-w-2xl w-full p-6 sm:p-8 relative shadow-[0_0_50px_rgba(0,0,0,0.9)] space-y-6 overflow-hidden max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botón Cerrar */}
            <button
              onClick={() => setSelectedEvento(null)}
              className="absolute top-4 right-4 p-2.5 rounded-full bg-[#1B1D21] text-slate-300 hover:text-[#C2FF01] border border-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
              {/* Afiche en el Modal */}
              <div className="sm:col-span-5 relative aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 shadow-lg bg-[#1B1D21]">
                <Image
                  src={selectedEvento.image}
                  alt=""
                  fill
                  className="object-cover blur-xl opacity-50 scale-125 pointer-events-none"
                />
                <div className="relative w-full h-full p-2">
                  <Image
                    src={selectedEvento.image}
                    alt={selectedEvento.title}
                    fill
                    className="object-contain drop-shadow-md"
                  />
                </div>
              </div>

              {/* Información del Evento */}
              <div className="sm:col-span-7 space-y-4">
                <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">
                  {selectedEvento.title}
                </h3>

                <div className="flex items-center gap-2 text-xs font-bold text-[#C2FF01] bg-[#1B1D21] px-3 py-2 rounded-xl border border-white/10">
                  <Calendar className="w-4 h-4 shrink-0" />
                  <span>{selectedEvento.date}</span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {selectedEvento.description}
                </p>

                <div className="pt-2">
                  <a
                    href={selectedEvento.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#C2FF01] text-[#1B1D21] font-black text-sm hover:bg-[#b0eb00] transition-all shadow-[0_0_20px_rgba(194,255,1,0.3)]"
                  >
                    <Ticket className="w-4 h-4" />
                    <span>MÁS INFORMACIÓN</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
