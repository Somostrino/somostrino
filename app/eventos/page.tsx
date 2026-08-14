'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X, Calendar, ExternalLink, Sparkles, Ticket } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface Evento {
  id: string;
  title: string;
  date: string;
  description: string;
  link: string;
  image: string;
}

const EVENTOS_LIST: Evento[] = [
  {
    id: 'tarde-de-pelicula',
    title: 'UNA TARDE DE PELÍCULA EN PLAZA VICTORIA',
    date: 'Sábado 12 de Septiembre 2026, 18:30 hrs.',
    description: 'Un concierto íntimo de películas de Disney en formato piano y voz junto a Ennio Ramaciotti y Agustina Sepúlveda.',
    link: 'https://www.portaldisc.com/evento/tarde-de-pelicula',
    image: '/eventos/afiche-tarde-de-pelicula.jpg',
  },
  {
    id: 'gamuza-otra-noche-3',
    title: 'GAMUZA: OTRA NOCHE MÁS AQUÍ EN KILOMBO',
    date: 'Domingo 16 de agosto 2026, 16:30 hrs.',
    description: 'Show vespertino de "Otra noche más aquí" en formato íntimo y acústico, esta vez desde Kilombo Bar en Barrio Brasil.',
    link: 'https://www.portaldisc.com/evento/otra-noche-mas-aqui-3',
    image: '/eventos/posters/plaza-victoria-3.jpg',
  },
  {
    id: 'gamuza-otra-noche-2',
    title: 'GAMUZA: OTRA NOCHE MÁS AQUÍ EN PLAZA VICTORIA',
    date: 'Sábado 15 de agosto 2026, 19:30 hrs.',
    description: 'Segunda fecha de la serie de shows acústicos de Gamuza en Plaza Victoria, invitando a la complicidad del living de una casa.',
    link: 'https://www.portaldisc.com/evento/otra-noche-mas-aqui-2',
    image: '/eventos/posters/plaza-victoria-2.jpg',
  },
  {
    id: 'gamuza-otra-noche-1',
    title: 'GAMUZA: OTRA NOCHE MÁS AQUÍ EN PLAZA VICTORIA',
    date: 'Sábado 8 de agosto 2026, 19:30 hrs.',
    description: 'Gamuza abre un espacio en formato acústico y despojado para la cercanía en Plaza Victoria tras su nominación a los Premios Pulsar 2026.',
    link: 'https://www.portaldisc.com/evento/otra-noche-mas-aqui',
    image: '/eventos/posters/plaza-victoria-1.jpg',
  },
  {
    id: 'drip-lanzamiento',
    title: 'SIMPLEMENTE YO + SOLONACHO: LANZAMIENTO DRIP',
    date: 'Jueves 2 de abril 2026, 20:00 hrs.',
    description: 'Estreno oficial del videoclip “Drip” junto a Simplemente Yo y SoloNacho, con proyección exclusiva, shows en vivo e invitados como C-Funk.',
    link: 'https://www.portaldisc.com/evento/drip-simplemente-yo-x-solonacho',
    image: '/eventos/posters/drip-lanzamiento.jpg',
  },
  {
    id: 'gamuza-laserena-2',
    title: 'GAMUZA: LA AMISTAD HECHA BOLERO EN LA SERENA',
    date: 'Viernes 6 de febrero 2026, 21:00 hrs.',
    description: 'Segunda función en La Serena para disfrutar en la noche un reencuentro con el bolero desde una mirada contemporánea.',
    link: 'https://www.portaldisc.com/evento/gira-lahb-laserena-gamuza',
    image: '/eventos/posters/la-serena-2-2026.jpg',
  },
  {
    id: 'gamuza-laserena-1',
    title: 'GAMUZA: LA AMISTAD HECHA BOLERO EN EL NUEVO PEREGRINO',
    date: 'Viernes 6 de febrero 2026, 18:00 hrs.',
    description: 'Primera función en La Serena presentando en vivo las canciones de su nuevo disco en El Nuevo Peregrino.',
    link: 'https://www.portaldisc.com/evento/gira-lahb-laserena-gamuza2',
    image: '/eventos/posters/la-serena-2026.jpg',
  },
  {
    id: 'gamuza-valdivia',
    title: 'GAMUZA: LA AMISTAD HECHA BOLERO EN VALDIVIA',
    date: 'Sábado 24 de enero 2026, 19:30 hrs.',
    description: 'En el marco de su gira, Gamuza se presenta en With Love Valdivia en una noche donde las historias compartidas son las protagonistas.',
    link: 'https://www.portaldisc.com/evento/gira-lahb-valdivia-gamuza',
    image: '/eventos/posters/valdivia-2026.jpg',
  },
  {
    id: 'gamuza-osorno-2026',
    title: 'GAMUZA: LA AMISTAD HECHA BOLERO EN OSORNO',
    date: 'Jueves 15 de enero 2026, 19:30 hrs.',
    description: 'Gamuza llega a Osorno presentando las canciones de su reciente disco en un show cercano y cargado de emoción en Taberna Pirata.',
    link: 'https://www.portaldisc.com/evento/gira-lahb-osorno-gamuza',
    image: '/eventos/posters/osorno-2026.jpg',
  },
  {
    id: 'gamuza-temuco-2026',
    title: 'GAMUZA: LA AMISTAD HECHA BOLERO EN TEMUCO',
    date: 'Sábado 10 de enero 2026, 19:30 hrs.',
    description: 'La gira continúa llegando a Temuco con un concierto especial en La Perrera para reencontrarse con el bolero contemporáneo.',
    link: 'https://www.portaldisc.com/evento/gira-lahb-temuco-gamuza',
    image: '/eventos/posters/temuco-2026.jpg',
  },
  {
    id: 'gamuza-talca',
    title: 'GAMUZA: LA AMISTAD HECHA BOLERO EN TALCA',
    date: 'Viernes 9 de enero 2026, 19:30 hrs.',
    description: 'Gamuza da inicio a su gira presentando en vivo las canciones de su reciente disco en un show íntimo en Gato Loco Bar.',
    link: 'https://www.portaldisc.com/evento/gira-lahb-talca-gamuza',
    image: '/eventos/posters/talca-2026.jpg',
  },
  {
    id: 'pre-escucha-2',
    title: 'PRE-ESCUCHA GAMUZA: LA AMISTAD HECHA BOLERO',
    date: 'Viernes 10 de octubre 2025, 19:00 hrs.',
    description: 'Segunda fecha de pre-escucha exclusiva del nuevo disco "La Amistad Hecha Bolero" en sonido inmersivo en Estudio Vinilo.',
    link: 'https://www.portaldisc.com/evento/la-amistad-hecha-bolero-2',
    image: '/eventos/posters/pre-escucha-2-2025.jpg',
  },
  {
    id: 'pre-escucha-1',
    title: 'PRE-ESCUCHA GAMUZA: LA AMISTAD HECHA BOLERO',
    date: 'Jueves 9 de octubre 2025, 19:15 hrs.',
    description: 'Pre-escucha exclusiva del nuevo disco de la banda en Dolby Atmos. Una velada íntima con vino de honor en comunidad.',
    link: 'https://www.portaldisc.com/evento/la-amistad-hecha-bolero',
    image: '/eventos/posters/pre-escucha-2025.jpg',
  },
  {
    id: 'fonda-gamuza',
    title: 'CUANDO EMPECÉ A CURARME - GAMUZA EN JARDÍN MALLINKRODT',
    date: 'Sábado 13 de septiembre 2025, 18:00 hrs.',
    description: '¡Se arma la Fonda de Gamuza! Un show para cantar boleros a todo pulmón, mover la patita con el tiki-tiki-ti y brindar como corresponde.',
    link: 'https://www.portaldisc.com/evento/septiembre-con-gamuza',
    image: '/eventos/posters/mallinkrodt-2025.jpg',
  },
  {
    id: 'gamuza-santiago-2',
    title: 'GAMUZA EN SANTIAGO: BAR RAMBLAS (2DA FECHA)',
    date: 'Jueves 7 de agosto 2025, 19:30 hrs.',
    description: 'Segunda fecha en Santiago tras agotar entradas en 3 días para su primer show. Una propuesta que fusiona el bolero con sonidos contemporáneos.',
    link: 'https://www.portaldisc.com/evento/gamuzaensantiago2',
    image: '/eventos/posters/ramblas-2-2025.jpg',
  },
  {
    id: 'simplemente-yo-cafe901',
    title: 'SIMPLEMENTE YO EN CAFÉ 901',
    date: 'Sábado 2 de agosto 2025, 17:00 hrs.',
    description: '¡Ven a vivir una experiencia única junto a Simplemente Yo en Providencia! Un show cargado de rap y G-Funk en la escena urbana chilena.',
    link: 'https://www.portaldisc.com/evento/simplemente-yo-cafe-901',
    image: '/eventos/posters/cafe-901-2025.jpg',
  },
  {
    id: 'gamuza-chillan',
    title: 'GAMUZA EN CHILLÁN: ESPACIO LA ALDEA',
    date: 'Viernes 1 de agosto 2025, 20:30 hrs.',
    description: 'Gamuza llega a Chillán con "Los Frutos Del Invierno", una experiencia íntima donde el bolero se encuentra con sonidos contemporáneos.',
    link: 'https://www.portaldisc.com/evento/gamuzaenchillan',
    image: '/eventos/posters/chillan-2025.jpg',
  },
  {
    id: 'gamuza-santiago-1',
    title: 'GAMUZA EN SANTIAGO: BAR RAMBLAS',
    date: 'Jueves 31 de julio 2025, 19:30 hrs.',
    description: '"Los Frutos Del Invierno" marca el inicio de la temporada invernal de la banda, invitando a sumergirse en su nuevo universo sonoro.',
    link: 'https://www.portaldisc.com/evento/gamuzaensantiago',
    image: '/eventos/posters/ramblas-1-2025.jpg',
  },
  {
    id: 'gamuza-rancagua-2',
    title: 'GAMUZA EN RANCAGUA: EL VIEJO RANCAGUA',
    date: 'Jueves 24 de julio 2025, 20:00 hrs.',
    description: 'Gamuza presenta su nuevo show "Los Frutos Del Invierno", una experiencia íntima donde el bolero se encuentra con nuevas sonoridades.',
    link: 'https://www.portaldisc.com/evento/gamuzaenrancagua2',
    image: '/eventos/posters/rancagua-2-2025.jpg',
  },
  {
    id: 'olivia-garcia',
    title: 'OLIVIA GARCÍA: C. C. DE ESPAÑA',
    date: 'Lunes 21 de abril 2025, 19:30 hrs.',
    description: 'Olivia García presentará en vivo su nuevo single "Este Atardecer" con su inconfundible fusión de indie, pop y folclore latinoamericano.',
    link: 'https://www.portaldisc.com/evento/oliviagarcia-esteatardecer',
    image: '/eventos/posters/cce-olivia-2025.jpg',
  },
  {
    id: 'cierre-gira-losleones',
    title: 'CIERRE DE GIRA: GAMUZA EN SALA LOS LEONES',
    date: 'Sábado 15 de marzo 2025, 19:15 hrs.',
    description: 'Gamuza cierra esta inolvidable etapa de gira veraniega con un show especial en Sala Los Leones, en el corazón de Recoleta.',
    link: 'https://www.portaldisc.com/evento/cierredegiragamuza',
    image: '/eventos/posters/los-leones-2025.jpg',
  },
  {
    id: 'gamuza-rancagua-1',
    title: 'GAMUZA EN EL VIEJO RANCAGUA',
    date: 'Viernes 14 de marzo 2025, 20:30 hrs.',
    description: 'Después de una exitosa gira con 7 fechas, Gamuza llega a Rancagua para ofrecer una velada única llena de boleros.',
    link: 'https://www.portaldisc.com/evento/gamuzaenrancagua',
    image: '/eventos/posters/rancagua-2025.jpg',
  },
  {
    id: 'gamuza-valparaiso',
    title: 'GAMUZA EN VALPARAÍSO: LEMUTT BAR',
    date: 'Sábado 1 de marzo 2025, 20:00 hrs.',
    description: 'Gamuza llega a Lemutt en Valparaíso para cerrar su Gira Verano 2025 con una velada llena de emoción y boleros reinventados.',
    link: 'https://www.portaldisc.com/evento/gamuzaenvalparaiso',
    image: '/eventos/posters/valparaiso-2025.jpg',
  },
  {
    id: 'gamuza-laserena-2025',
    title: 'GAMUZA EN LA SERENA: EL NUEVO PEREGRINO',
    date: 'Viernes 21 de febrero 2025, 21:45 hrs.',
    description: 'Gamuza llega a El Nuevo Peregrino en La Serena para llenar la noche de boleros únicos y emociones inolvidables.',
    link: 'https://www.portaldisc.com/evento/gamuzaenlaserena',
    image: '/eventos/posters/la-serena-2025.jpg',
  },
  {
    id: 'gamuza-osorno-2025',
    title: 'GAMUZA EN OSORNO: TABERNA PIRATA',
    date: 'Miércoles 12 de febrero 2025, 21:00 hrs.',
    description: 'Gamuza llegará a Taberna Pirata en Osorno para deleitar al público con su propuesta única de boleros contemporáneos.',
    link: 'https://www.portaldisc.com/evento/gamuzaentabernapirata',
    image: '/eventos/posters/osorno-2025.jpg',
  },
  {
    id: 'gamuza-temuco-2025',
    title: 'GAMUZA EN TEMUCO: LA PERRERA',
    date: 'Viernes 7 de febrero 2025, 20:00 hrs.',
    description: 'Gamuza llega a Temuco con su inconfundible estilo para regalar una velada inolvidable llena de boleros y emociones en el Bar La Perrera.',
    link: 'https://www.portaldisc.com/evento/gamuzaenlaperrera',
    image: '/eventos/posters/temuco-2025.jpg',
  },
];

export default function EventosPage() {
  const [selectedEvento, setSelectedEvento] = useState<Evento | null>(null);

  return (
    <div className="bg-[#1B1D21] text-white min-h-screen selection:bg-[#C2FF01] selection:text-[#1B1D21]">
      <Navbar />

      <main className="pt-32 pb-24 relative overflow-hidden">
        {/* Glow de ambiente */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[#C2FF01]/5 rounded-full blur-[180px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
          
          {/* Header discreto */}
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#23262D] text-[#C2FF01] text-xs font-bold uppercase tracking-wider border border-[#C2FF01]/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>CARTELERA OFICIAL DE EVENTOS</span>
            </div>
          </div>

          {/* Grilla Puramente Visual (Afiches) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {EVENTOS_LIST.map((evento) => (
              <button
                key={evento.id}
                onClick={() => setSelectedEvento(evento)}
                className="group relative aspect-[3/4] rounded-2xl overflow-hidden bg-[#23262D] border border-white/10 hover:border-[#C2FF01] transition-all duration-300 shadow-xl hover:shadow-[0_0_30px_rgba(194,255,1,0.25)] hover:-translate-y-1 text-left cursor-pointer"
              >
                <Image
                  src={evento.image}
                  alt={evento.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
              </button>
            ))}
          </div>

        </div>
      </main>

      {/* Pop-up Modal al hacer clic en un afiche */}
      {selectedEvento && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
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
              <div className="sm:col-span-5 relative aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 shadow-lg">
                <Image
                  src={selectedEvento.image}
                  alt={selectedEvento.title}
                  fill
                  className="object-cover"
                />
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
                    <span>IR A PORTALTICKETS</span>
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
