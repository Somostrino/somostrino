'use client';

import { Sparkles } from 'lucide-react';

// Datos extraídos y categorizados de tus links de YouTube
const EXPERIENCIAS_DATA = [
  {
    id: 'r-J31F_CM0g',
    title: 'Gamuza - Filo | Concierto en GAM, Stgo.',
    category: 'Concierto en Vivo',
  },
  {
    id: '7F1y5LDWcX8',
    title: 'Desde el Lago - Olivia García & Gamuza',
    category: 'Live Session',
  },
  {
    id: 'n77p0c_pYeE',
    title: 'Gamuza - Melodía Antigua | Bariloche, ARG.',
    category: 'Gira Internacional',
  },
  {
    id: '0IRTn6o2QmE',
    title: 'SIN FRENO - Simplemente Yo x Livan.mp3 x Küyen',
    category: 'Videoclip Oficial',
  },
  {
    id: 'FQRtMHKio14',
    title: 'Simplemente Yo - Pa los Homies',
    category: 'Videoclip Oficial',
  },
  {
    id: 'K1HqJ1C1d30',
    title: 'QUIERO TO - DENI LI',
    category: 'Visualizer Oficial',
  },
];

export default function Experiencias() {
  return (
    <section id="experiencias" className="py-24 relative bg-[#1B1D21] border-t border-white/10 overflow-hidden">
      {/* Glow de fondo para ambientación */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#C2FF01]/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#23262D] border border-[#C2FF01]/30 text-[#C2FF01] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>NUESTRO TRABAJO</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white">
            Experiencias & Producciones
          </h2>
          <p className="text-lg text-slate-400 font-medium mt-4">
            Conciertos, live sessions y videoclips desarrollados e impulsados por nuestro equipo.
          </p>
        </div>

        {/* Grilla de Videos de YouTube */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {EXPERIENCIAS_DATA.map((exp) => (
            <div 
              key={exp.id} 
              className="group flex flex-col bg-[#23262D] rounded-3xl overflow-hidden border border-white/10 hover:border-[#C2FF01]/50 transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(194,255,1,0.15)]"
            >
              <div className="relative aspect-video bg-black w-full overflow-hidden">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${exp.id}?rel=0`}
                  title={exp.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <span className="text-xs font-bold text-[#C2FF01] uppercase tracking-wider mb-2">
                  {exp.category}
                </span>
                <h3 className="text-lg font-bold text-white line-clamp-2 leading-tight">
                  {exp.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
