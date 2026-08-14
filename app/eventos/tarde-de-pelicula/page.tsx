'use client';

import Image from 'next/image';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Ticket, 
  Music2, 
  Sparkles, 
  ArrowLeft, 
  ExternalLink, 
  Info, 
  Volume2,
  CheckCircle2,
  Play
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Configuración del evento
const EVENT_DATA = {
  title: 'UNA TARDE DE PELÍCULA',
  subtitle: 'Un concierto íntimo de películas de Disney',
  artist: 'ENNIO RAMACIOTTI',
  guest: 'Acompaña: Agustina Sepúlveda (Voz)',
  date: 'Sábado 12 de Septiembre, 2026',
  time: '18:30 hrs (Apertura) / 19:00 hrs (Inicio Show)',
  venue: 'Plaza Victoria',
  address: 'Avenida Santa Isabel 052, Providencia, Santiago',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Plaza+Victoria,+Santa+Isabel+052,+Providencia',
  ticketUrl: 'https://www.portaldisc.com/evento/tarde-de-pelicula',
  producer: 'Producido por TRINO / Katarsis',
  posterImage: '/eventos/afiche-tarde-de-pelicula.jpg',
  tickets: [
    {
      name: 'General',
      price: '$8.000',
      detail: '+ Cargo por servicio',
      features: ['Acceso general al concierto', 'Ubicación por orden de llegada', 'Apto para todas las edades'],
      popular: false,
    },
    {
      name: 'General con Cancionero',
      price: '$10.000',
      detail: '+ Cargo por servicio',
      features: ['Acceso general al concierto', 'Cancionero exclusivo impreso de regalo', 'Ubicación por orden de llegada'],
      popular: true,
    },
  ],
  // Repertorio solo con imágenes PNG
  repertoire: [
    { title: 'Hércules', image: '/eventos/repertorio/hercules.png' },
    { title: 'Mulán', image: '/eventos/repertorio/mulan.png' },
    { title: 'Tarzán', image: '/eventos/repertorio/tarzan.png' },
    { title: 'El Jorobado de Notre Dame', image: '/eventos/repertorio/notre-dame.png' },
  ],
  videos: [
    { id: 1, src: '/videos/ennio-1.mp4', title: 'Ensayo en Piano' },
    { id: 2, src: '/videos/ennio-2.mp4', title: 'Interpretación en Vivo' },
    { id: 3, src: '/videos/ennio-3.mp4', title: 'Arreglos de Disney' },
  ],
};

export default function EventoPage() {
  return (
    <div className="bg-[#1B1D21] text-white min-h-screen selection:bg-[#C2FF01] selection:text-[#1B1D21]">
      <Navbar />

      <main className="pt-28 pb-20 relative overflow-hidden">
        {/* Glow de fondo corporativo */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#C2FF01]/10 rounded-full blur-[180px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
          
          {/* Botón Volver */}
          <div>
            <a
              href="/"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#23262D] border border-white/10 text-slate-300 hover:text-[#C2FF01] hover:border-[#C2FF01]/40 transition-all text-xs font-bold uppercase tracking-wider"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Volver a Trino</span>
            </a>
          </div>

          {/* Hero del Evento */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Columna Izquierda: Detalles e Información */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#23262D] border border-[#C2FF01]/40 text-[#C2FF01] text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>CONCIERTO EN VIVO • PRODUCCIÓN TRINO</span>
              </div>

              <div className="space-y-2">
                <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">
                  {EVENT_DATA.title}
                </h1>
                <p className="text-xl sm:text-2xl font-bold text-[#C2FF01]">
                  {EVENT_DATA.subtitle}
                </p>
                <p className="text-lg text-slate-300 font-medium">
                  {EVENT_DATA.artist} <span className="text-slate-400">({EVENT_DATA.guest})</span>
                </p>
              </div>

              {/* Ficha Rápida del Evento */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="p-4 rounded-2xl bg-[#23262D] border border-white/10 flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-[#C2FF01] shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs text-slate-400 uppercase font-bold">Fecha</span>
                    <span className="text-sm font-bold text-white">{EVENT_DATA.date}</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#23262D] border border-white/10 flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#C2FF01] shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs text-slate-400 uppercase font-bold">Horario</span>
                    <span className="text-sm font-bold text-white">{EVENT_DATA.time}</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#23262D] border border-white/10 flex items-start gap-3 sm:col-span-2">
                  <MapPin className="w-5 h-5 text-[#C2FF01] shrink-0 mt-0.5" />
                  <div className="flex-1 justify-between flex items-center">
                    <div>
                      <span className="block text-xs text-slate-400 uppercase font-bold">Lugar</span>
                      <span className="text-sm font-bold text-white">{EVENT_DATA.venue} — {EVENT_DATA.address}</span>
                    </div>
                    <a
                      href={EVENT_DATA.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-[#1B1D21] text-[#C2FF01] hover:bg-[#C2FF01] hover:text-[#1B1D21] transition-colors"
                      title="Ver en Google Maps"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Botón Principal de Compra */}
              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <a
                  href={EVENT_DATA.ticketUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-8 py-5 rounded-full bg-[#C2FF01] text-[#1B1D21] font-black text-lg hover:bg-[#b0eb00] transition-all transform hover:-translate-y-0.5 shadow-[0_0_30px_rgba(194,255,1,0.4)]"
                >
                  <Ticket className="w-6 h-6 fill-[#1B1D21]" />
                  <span>COMPRA TU ENTRADA AQUÍ</span>
                </a>
              </div>
            </div>

            {/* Columna Derecha: Afiche Oficial */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md rounded-3xl overflow-hidden border-2 border-[#C2FF01]/40 shadow-[0_0_50px_rgba(0,0,0,0.8)] bg-[#23262D] group">
                <Image
                  src={EVENT_DATA.posterImage}
                  alt={EVENT_DATA.title}
                  width={600}
                  height={850}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  priority
                />
              </div>
            </div>

          </div>

          {/* Reseña & Repertorio (Sólo Íconos PNG) */}
          <div className="bg-[#23262D] rounded-3xl p-8 sm:p-12 border border-white/10 space-y-8">
            <div className="max-w-3xl space-y-4">
              <h2 className="text-2xl sm:text-4xl font-black text-white">
                Revive la magia de las grandes bandas sonoras
              </h2>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                Sumérgete en un concierto íntimo en formato piano y voz, donde reviviremos la emoción y nostalgia de los mejores clásicos de Disney. Un panorama imperdible para todas las edades, perfecto para disfrutar de un exquisito coctel mientras te dejas llevar por melodías inolvidables.
              </p>
            </div>

            {/* Grid de Íconos de Películas sin texto */}
            <div>
              <h3 className="text-xs font-bold text-[#C2FF01] uppercase tracking-wider mb-6 flex items-center gap-2">
                <Music2 className="w-4 h-4" />
                <span>Repertorio Destacado</span>
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 items-center justify-items-center">
                {EVENT_DATA.repertoire.map((item) => (
                  <div
                    key={item.title}
                    className="p-6 rounded-3xl bg-[#1B1D21] border border-white/10 hover:border-[#C2FF01]/50 transition-all flex items-center justify-center w-full h-36 relative group shadow-lg"
                    title={item.title}
                  >
                    <div className="relative w-28 h-28">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-contain group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Galería de Videos Verticales con Botón PLAY destacado */}
          <div className="space-y-6">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#23262D] text-[#C2FF01] text-xs font-bold uppercase">
                <Volume2 className="w-3.5 h-3.5" />
                <span>EXPERIENCIA EN VIVO</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-white">
                Conoce el Arte de Ennio Ramaciotti
              </h2>
              <p className="text-sm text-slate-400">
                Haz clic en el botón de reproducción para ver el video.
              </p>
            </div>

            {/* Grid de Videos en formato 9:16 con Play Overlay */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {EVENT_DATA.videos.map((vid) => (
                <div
                  key={vid.id}
                  className="relative aspect-[9/16] rounded-3xl overflow-hidden bg-[#23262D] border border-white/10 hover:border-[#C2FF01]/60 transition-all shadow-xl group"
                >
                  <video
                    src={vid.src}
                    controls
                    preload="metadata"
                    playsInline
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Badge con Título del Video */}
                  <div className="absolute top-4 left-4 right-4 pointer-events-none">
                    <span className="text-[10px] font-bold text-white uppercase tracking-wider px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10">
                      {vid.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Precios & Adquisición de Tickets */}
          <div className="space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="text-3xl sm:text-4xl font-black text-white">
                Elige tu Entrada
              </h2>
              <p className="text-sm text-slate-400">
                Evento para todas las edades. Niños pagan ticket desde los 5 años.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {EVENT_DATA.tickets.map((t) => (
                <div
                  key={t.name}
                  className={`p-8 rounded-3xl bg-[#23262D] border flex flex-col justify-between relative ${
                    t.popular ? 'border-[#C2FF01] shadow-[0_0_25px_rgba(194,255,1,0.2)]' : 'border-white/10'
                  }`}
                >
                  {t.popular && (
                    <span className="absolute -top-3 right-6 px-3 py-1 rounded-full bg-[#C2FF01] text-[#1B1D21] font-black text-[10px] uppercase tracking-wider">
                      Recomendado
                    </span>
                  )}

                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-white">{t.name}</h3>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-black text-[#C2FF01]">{t.price}</span>
                      <span className="text-xs text-slate-400">{t.detail}</span>
                    </div>

                    <ul className="space-y-2 pt-2">
                      {t.features.map((f, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-[#C2FF01] shrink-0" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6">
                    <a
                      href={EVENT_DATA.ticketUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-full font-bold text-sm transition-all ${
                        t.popular
                          ? 'bg-[#C2FF01] text-[#1B1D21] hover:bg-[#b0eb00]'
                          : 'bg-[#1B1D21] text-white border border-white/10 hover:border-[#C2FF01]/50'
                      }`}
                    >
                      <Ticket className="w-4 h-4" />
                      <span>Comprar Ticket PortalDisc</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Información Práctica del Evento */}
          <div className="p-8 rounded-3xl bg-[#23262D]/60 border border-white/10 max-w-4xl mx-auto space-y-4 text-xs text-slate-300">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <Info className="w-4 h-4 text-[#C2FF01]" />
              <span>Información Importante & Recomendaciones</span>
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 leading-relaxed">
              <li>• <strong>Apertura de puertas:</strong> 18:30 hrs / Término aprox: 20:30 hrs.</li>
              <li>• <strong>Estacionamiento:</strong> El recinto no cuenta con estacionamiento privado. Se sugiere estacionar en calles aledañas o preferir transporte público (Metro Santa Isabel).</li>
              <li>• <strong>Restricciones:</strong> No se permite el ingreso con alimentos, bebidas externas ni objetos punzocortantes.</li>
              <li>• <strong>Niños:</strong> Apto para todo público. Pagan entrada desde los 5 años cumplidos.</li>
            </ul>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
