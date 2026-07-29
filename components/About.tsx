'use client';

import { motion } from 'motion/react';
import { COMPANY_INFO } from '@/lib/data';
import { ShieldCheck, HeartHandshake, Rocket, Sparkles, CheckCircle2 } from 'lucide-react';

export default function About() {
  const pillars = [
    {
      icon: ShieldCheck,
      title: 'Gestión Integral',
      color: '#C2FF01', // Lime
      desc: 'Estructuración técnica, administrativa, contable y legal para ordenar la operación y proteger el proyecto.',
    },
    {
      icon: HeartHandshake,
      title: 'Relaciones Humanas',
      color: '#DCB8FE', // Lila
      desc: 'Trato directo, transparente y colaborativo que pone al equipo creativo y sus sensibilidades en el centro.',
    },
    {
      icon: Rocket,
      title: 'Crecimiento Sostenible',
      color: '#00BBFC', // Celeste
      desc: 'Estrategias de mediano y largo plazo (2 a 3 años) para internacionalización, convocatorias y rentabilidad.',
    },
  ];

  return (
    <section id="quienes-somos" className="py-24 bg-[#1B1D21] relative overflow-hidden border-t border-white/5">
      {/* Background Decorative Blur */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#C2FF01]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Manifesto Quote Box */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#23262D] border border-white/10 text-slate-300 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#C2FF01]" />
              <span>Manifiesto Trino</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Quiénes Somos
            </h2>

            <div className="p-8 rounded-3xl bg-[#23262D] border border-[#C2FF01]/30 relative group shadow-2xl">
              <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-[#C2FF01] flex items-center justify-center font-black text-[#1B1D21] text-xs">
                T
              </div>
              <p className="text-lg sm:text-xl md:text-2xl font-medium text-slate-100 leading-relaxed italic">
                &ldquo;{COMPANY_INFO.manifesto}&rdquo;
              </p>
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400 font-mono">
                <span>TRINO AGENCIA CULTURAL</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-[#23262D]/60 border border-white/5">
                <span className="text-xs text-slate-400 uppercase font-mono block mb-1">Enfoque</span>
                <span className="text-sm font-bold text-white">Transparencia & Rigor</span>
              </div>
              <div className="p-4 rounded-2xl bg-[#23262D]/60 border border-white/5">
                <span className="text-xs text-slate-400 uppercase font-mono block mb-1">Alcance</span>
                <span className="text-sm font-bold text-[#C2FF01]">Nacional e Internacional</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: 3 Strategic Pillars */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            <h3 className="text-xl font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C2FF01]"></span>
              Nuestros 3 Pilares Fundamentales
            </h3>

            <div className="space-y-4">
              {pillars.map((pilar, index) => {
                const IconComponent = pilar.icon;
                return (
                  <motion.div
                    key={pilar.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.15 }}
                    className="p-6 rounded-2xl bg-[#23262D] border border-white/10 hover:border-[#C2FF01]/40 transition-all group"
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform"
                        style={{ backgroundColor: `${pilar.color}15`, color: pilar.color }}
                      >
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-lg font-bold text-white flex items-center gap-2">
                          {pilar.title}
                          <CheckCircle2 className="w-4 h-4 text-[#C2FF01] opacity-0 group-hover:opacity-100 transition-opacity" />
                        </h4>
                        <p className="text-sm text-slate-300 leading-relaxed">
                          {pilar.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
