'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { PORTFOLIO, PortfolioItem, COMPANY_INFO } from '@/lib/data';
import { Sparkles, Star, Award, ExternalLink, X, MessageCircle, ArrowRight, Disc } from 'lucide-react';

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (projectId: string) => {
    setImageErrors((prev) => ({ ...prev, [projectId]: true }));
  };

  const filteredPortfolio = PORTFOLIO;

  return (
    <section id="portafolio" className="py-24 bg-[#1B1D21] relative overflow-hidden border-t border-white/5">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#0044FD]/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#23262D] border border-[#C2FF01]/30 text-[#C2FF01] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PORTAFOLIO CULTURAL</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Nuestros Talentos & Proyectos
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Propuestas artísticas de excelencia técnica, identidad propia e impacto cultural en la escena chilena e internacional.
          </p>
        </div>

        {/* Portfolio Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPortfolio.map((project, idx) => {
            const hasError = imageErrors[project.id];

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group relative bg-[#23262D] rounded-3xl overflow-hidden border border-white/10 hover:border-[#C2FF01]/60 transition-all duration-300 flex flex-col justify-between cursor-pointer hover:shadow-[0_15px_35px_rgba(0,0,0,0.6)]"
                onClick={() => setSelectedProject(project)}
              >
                {/* Image Container with Dark Gradient Overlay */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-[#1B1D21]">
                  {!hasError ? (
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={() => handleImageError(project.id)}
                    />
                  ) : (
                    /* Fallback visual cuando la imagen no está disponible */
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-[#1B1D21] via-[#23262D] to-[#0044FD]/20 p-6 text-center">
                      <Disc className="w-12 h-12 text-[#C2FF01] mb-2 animate-pulse" />
                      <span className="text-xl font-black text-white">{project.name}</span>
                      <span className="text-xs text-slate-400 mt-1">Trino Portfolio</span>
                    </div>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-[#23262D] via-[#23262D]/60 to-transparent" />

                  {/* Top Badge Overlay */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="text-[10px] uppercase font-mono font-bold tracking-wider px-2.5 py-1 rounded-md bg-[#1B1D21]/90 backdrop-blur-md text-white border border-white/10">
                      TRINO MANAGEMENT
                    </span>
                    <div className="w-8 h-8 rounded-full bg-[#1B1D21]/80 backdrop-blur-md flex items-center justify-center text-slate-300 group-hover:text-[#C2FF01] group-hover:bg-[#1B1D21] transition-colors border border-white/10">
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>

                  {/* Title overlay on image bottom */}
                  <div className="absolute bottom-3 left-4 right-4">
                    <h3 className="text-2xl font-black text-white group-hover:text-[#C2FF01] transition-colors flex items-center gap-2">
                      {project.name}
                    </h3>
                    <p className="text-xs text-slate-300 font-medium">
                      {project.artistSub}
                    </p>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  {/* Discipline Badges */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.badges.map((badge) => (
                      <span
                        key={badge}
                        className="px-2.5 py-1 rounded-full text-xs font-bold"
                        style={{
                          backgroundColor: project.primaryColor ? `${project.primaryColor}20` : '#C2FF0120',
                          color: project.primaryColor || '#C2FF01',
                          border: `1px solid ${project.primaryColor ? `${project.primaryColor}40` : '#C2FF0140'}`,
                        }}
                      >
                        {badge}
                      </span>
                    ))}
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-300 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Highlights List preview */}
                  <div className="pt-3 border-t border-white/10 space-y-1.5">
                    {project.highlights.slice(0, 2).map((hl, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-300 truncate">
                        <Star className="w-3.5 h-3.5 text-[#C2FF01] shrink-0" />
                        <span className="truncate">{hl}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action button */}
                  <div className="pt-2 text-xs font-bold text-[#C2FF01] flex items-center justify-between group-hover:underline">
                    <span>Ver Ficha Completa & Booking</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#23262D] rounded-3xl max-w-3xl w-full border border-[#C2FF01]/40 shadow-2xl overflow-hidden text-white relative my-8"
            >
              {/* Top Banner Image */}
              <div className="relative h-64 sm:h-80 w-full bg-[#1B1D21]">
                {!imageErrors[selectedProject.id] ? (
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.name}
                    fill
                    className="object-cover"
                    onError={() => handleImageError(selectedProject.id)}
                  />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-[#1B1D21] via-[#23262D] to-[#0044FD]/30 p-6 text-center">
                    <Disc className="w-16 h-16 text-[#C2FF01] mb-2 animate-pulse" />
                    <span className="text-3xl font-black text-white">{selectedProject.name}</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#23262D] via-[#23262D]/50 to-transparent" />

                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2.5 rounded-full bg-black/70 text-slate-300 hover:text-white border border-white/20 backdrop-blur-md transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex flex-wrap gap-2 mb-2">
                    {selectedProject.badges.map((badge) => (
                      <span
                        key={badge}
                        className="px-3 py-1 rounded-full text-xs font-bold bg-black/60 backdrop-blur-md text-[#C2FF01] border border-[#C2FF01]/40"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-black text-white">
                    {selectedProject.name}
                  </h3>
                  <p className="text-sm text-slate-300 font-medium">{selectedProject.artistSub}</p>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 space-y-6">
                <div>
                  <h4 className="text-xs font-bold text-[#C2FF01] uppercase tracking-wider mb-2 flex items-center gap-2">
                    <Disc className="w-4 h-4" />
                    Reseña Artística & Biografía
                  </h4>
                  <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                    {selectedProject.fullBio}
                  </p>
                </div>

                {/* Highlights */}
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                    <Award className="w-4 h-4 text-[#C2FF01]" />
                    Hitos Destacados & Cobertura
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedProject.highlights.map((hl, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-2xl bg-[#1B1D21] border border-white/10 text-xs text-slate-200 flex items-start gap-3"
                      >
                        <Sparkles className="w-4 h-4 text-[#C2FF01] shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Booking CTA Footer */}
                <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-3">
                  <a
                    href={`${COMPANY_INFO.whatsappUrl}&text=Hola%20Trino,%20me%20gustaria%20recibir%20informacion%20y%20booking%20del%20proyecto%3A%20${encodeURIComponent(
                      selectedProject.name
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-[#C2FF01] text-[#1B1D21] font-bold text-sm shadow-[0_0_20px_rgba(194,255,1,0.3)] hover:bg-[#b0eb00] transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 fill-[#1B1D21]" />
                    <span>Solicitar Booking / Contratación</span>
                  </a>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="py-3.5 px-6 rounded-full bg-[#1B1D21] text-slate-300 font-semibold text-sm hover:text-white border border-white/10"
                  >
                    Volver al Portafolio
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
