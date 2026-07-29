'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SERVICES, ServiceItem, COMPANY_INFO } from '@/lib/data';
import {
  Compass,
  ShoppingBag,
  Sliders,
  Share2,
  TrendingUp,
  Sparkles,
  Video,
  MapPin,
  FileCheck,
  Briefcase,
  X,
  MessageCircle,
  ArrowRight,
  CheckCircle2,
  Info,
} from 'lucide-react';

// Icon Map Helper
const iconMap: Record<string, React.ElementType> = {
  Compass,
  ShoppingBag,
  Sliders,
  Share2,
  TrendingUp,
  Sparkles,
  Video,
  MapPin,
  FileCheck,
  Briefcase,
};

export default function Services() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const filteredServices = SERVICES;

  return (
    <section id="servicios" className="py-24 bg-[#1B1D21] relative overflow-hidden border-t border-white/5">
      {/* Background Lighting */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#C2FF01]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#23262D] border border-[#C2FF01]/30 text-[#C2FF01] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>SOLUCIONES CULTURALES 360°</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Nuestros Servicios
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Estructuras organizadas, estratégicas y operativas adaptadas a las necesidades específicas de la industria creativa y artística.
          </p>
        </div>



        {/* Services Grid (10 Cards) */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, index) => {
            const Icon = iconMap[service.iconName] || Sparkles;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group relative bg-[#23262D] rounded-3xl p-6 sm:p-8 border border-white/10 hover:border-[#C2FF01]/60 transition-all duration-300 flex flex-col justify-between hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] cursor-pointer"
                onClick={() => setSelectedService(service)}
              >
                {/* Header info */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform"
                      style={{
                        backgroundColor: `${service.accentColor}15`,
                        color: service.accentColor,
                        borderColor: `${service.accentColor}30`,
                      }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span
                      className="text-2xl font-black font-mono tracking-tighter opacity-40 group-hover:opacity-100 transition-opacity"
                      style={{ color: service.accentColor }}
                    >
                      {service.number}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#C2FF01] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed mb-6 line-clamp-3">
                    {service.shortDesc}
                  </p>
                </div>

                {/* Footer tags & CTA */}
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-[#1B1D21] text-slate-300 border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-bold text-slate-300 group-hover:text-[#C2FF01]">
                    <span className="flex items-center gap-1.5">
                      <Info className="w-3.5 h-3.5" />
                      Ver detalle completo
                    </span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#23262D] rounded-3xl p-6 sm:p-8 max-w-2xl w-full border border-[#C2FF01]/40 shadow-2xl relative overflow-hidden text-white"
            >
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-[#1B1D21] text-slate-400 hover:text-white border border-white/10"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#1B1D21] text-[#C2FF01] font-bold border border-[#C2FF01]/30">
                  SERVICIO {selectedService.number}
                </span>
                <span className="text-xs text-slate-400 uppercase font-mono">
                  {selectedService.category}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white mb-4">
                {selectedService.title}
              </h3>

              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                    Resumen Ejecutivo
                  </h4>
                  <p className="text-base text-slate-200">{selectedService.shortDesc}</p>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                    Alcance & Detalle Operativo
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {selectedService.fullDesc}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Entregables Clave
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedService.tags.map((tag) => (
                      <div
                        key={tag}
                        className="flex items-center gap-2 p-2.5 rounded-xl bg-[#1B1D21] text-xs text-slate-200 border border-white/5"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#C2FF01] shrink-0" />
                        <span>{tag}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row gap-3">
                <a
                  href={`${COMPANY_INFO.whatsappUrl}&text=Hola%20Trino,%20me%20interesa%20consultar%20por%20el%20servicio%3A%20${encodeURIComponent(
                    selectedService.title
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-[#C2FF01] text-[#1B1D21] font-bold text-sm shadow-[0_0_20px_rgba(194,255,1,0.3)] hover:bg-[#b0eb00] transition-colors"
                >
                  <MessageCircle className="w-4 h-4 fill-[#1B1D21]" />
                  <span>Consultar por este Servicio</span>
                </a>
                <button
                  onClick={() => setSelectedService(null)}
                  className="py-3 px-6 rounded-full bg-[#1B1D21] text-slate-300 font-semibold text-sm hover:text-white border border-white/10"
                >
                  Cerrar
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
