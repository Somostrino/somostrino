'use client';

import { motion } from 'motion/react';
import { ArrowRight, MessageCircle, Sparkles } from 'lucide-react';
import { COMPANY_INFO, BRAND_STATS } from '@/lib/data';

export default function Hero() {
  return (
    <section id="inicio" className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden bg-[#1B1D21]">
      {/* Glow Effects Background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C2FF01]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-[#DCB8FE]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-[#0044FD]/10 rounded-full blur-[130px] pointer-events-none" />

      {/* Decorative Grid Lines */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(to right, #ffffff 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-8">
          {/* Agency Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#23262D] border border-[#C2FF01]/30 text-[#C2FF01] text-xs sm:text-sm font-bold uppercase tracking-widest shadow-[0_0_15px_rgba(194,255,1,0.15)]"
          >
            <Sparkles className="w-4 h-4 text-[#C2FF01]" />
            <span>AGENCIA DE PROYECTOS CULTURALES</span>
          </motion.div>

          {/* Main Slogan Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white leading-[1.05]"
          >
            Darle impulso al <span className="text-[#C2FF01] underline decoration-[#C2FF01]/40 underline-offset-8">arte</span>, ponerle alma a la <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DCB8FE] via-[#00BBFC] to-[#C2FF01]">gestión</span>
          </motion.h1>

          {/* Slogan Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl text-slate-300 font-normal leading-relaxed max-w-3xl mx-auto"
          >
            Ordenamos la operación, el booking y la estrategia para que las propuestas artísticas y culturales crezcan de forma sostenible en el tiempo.
          </motion.p>

          {/* CTA Button Group */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <a
              href="#portafolio"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#C2FF01] text-[#1B1D21] font-black text-base hover:bg-[#b0eb00] transition-all transform hover:-translate-y-1 shadow-[0_0_30px_rgba(194,255,1,0.35)]"
            >
              <span>EXPLORAR PORTAFOLIO</span>
              <ArrowRight className="w-5 h-5" />
            </a>

            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#23262D] text-white font-bold text-base hover:bg-[#2A2D36] border border-[#C2FF01]/40 transition-all hover:border-[#C2FF01]"
            >
              <MessageCircle className="w-5 h-5 text-[#C2FF01] fill-[#C2FF01]/20" />
              <span>HABLAR POR WHATSAPP</span>
            </a>
          </motion.div>
        </div>

        {/* Brand Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 bg-[#23262D]/60 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-white/10"
        >
          {BRAND_STATS.map((stat, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center text-center p-3 sm:p-4 rounded-2xl bg-[#1B1D21]/50 border border-white/5 hover:border-[#C2FF01]/30 transition-all"
            >
              <span className="text-3xl sm:text-4xl md:text-5xl font-black text-[#C2FF01] tracking-tight">
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm font-medium text-slate-300 mt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
