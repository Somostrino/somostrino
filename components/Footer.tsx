'use client';

import { useState } from 'react';
import Image from 'next/image';
import { COMPANY_INFO } from '@/lib/data';
import { Mail, MessageCircle, Copy, Check, ArrowUp, Sparkles, ExternalLink } from 'lucide-react';

export default function Footer() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(COMPANY_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contacto" className="bg-[#1B1D21] border-t border-white/10 pt-20 pb-12 relative overflow-hidden">
      {/* Glow background accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#C2FF01]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Contact Banner Header */}
        <div className="bg-[#23262D] rounded-3xl p-8 sm:p-12 border border-[#C2FF01]/30 shadow-2xl relative overflow-hidden mb-16">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#C2FF01]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1B1D21] border border-[#C2FF01]/30 text-[#C2FF01] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>CONTACTO DIRECTO</span>
            </div>

            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
              ¿Tienes un proyecto en mente o te interesa reservar a nuestros artistas?
            </h2>

            <p className="text-base sm:text-lg text-slate-300">
              Conversemos. Te asesoramos en la formulación, estrategia, producción técnica y booking para hacer crecer tu propuesta cultural.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              {/* WhatsApp Button */}
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#C2FF01] text-[#1B1D21] font-black text-base hover:bg-[#b0eb00] transition-all transform hover:-translate-y-0.5 shadow-[0_0_25px_rgba(194,255,1,0.35)]"
              >
                <MessageCircle className="w-5 h-5 fill-[#1B1D21]" />
                <span>Hablar por WhatsApp</span>
              </a>

              {/* Email Link & Copy Button */}
              <div className="flex items-center gap-2">
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-[#1B1D21] text-white font-bold text-sm border border-white/10 hover:border-[#C2FF01]/50 hover:text-[#C2FF01] transition-all"
                >
                  <Mail className="w-4 h-4 text-[#C2FF01]" />
                  <span>{COMPANY_INFO.email}</span>
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="p-4 rounded-full bg-[#1B1D21] text-slate-300 hover:text-[#C2FF01] border border-white/10 hover:border-[#C2FF01]/50 transition-all"
                  title="Copiar correo oficial"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-[#C2FF01]" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Navigation & Brand Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 py-8 border-t border-b border-white/10 items-center">
          {/* Brand Official Logo Image (Con Pajarito Agrandado) & Tagline */}
          <div className="md:col-span-5 space-y-3">
            <div className="relative h-28 w-72 sm:h-36 sm:w-96">
              <Image
                src="/logo-footer.png"
                alt="TRINO logo"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
            <p className="text-sm font-medium text-[#C2FF01] italic">
              &ldquo;{COMPANY_INFO.slogan}&rdquo;
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-5 flex flex-wrap items-center gap-6 text-xs sm:text-sm font-semibold text-slate-400">
            <a href="#quienes-somos" className="hover:text-[#C2FF01] transition-colors">
              Quiénes Somos
            </a>
            <a href="#servicios" className="hover:text-[#C2FF01] transition-colors">
              Servicios
            </a>
            <a href="#portafolio" className="hover:text-[#C2FF01] transition-colors">
              Portafolio
            </a>
            <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-[#C2FF01] transition-colors">
              Correo Oficial
            </a>
          </div>

          {/* Back to top button */}
          <div className="md:col-span-2 flex justify-start md:justify-end">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 p-3 rounded-full bg-[#23262D] text-slate-300 hover:text-[#C2FF01] border border-white/10 transition-all text-xs font-bold"
            >
              <span>Volver arriba</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between text-xs text-slate-300 gap-4">
          <p>{COMPANY_INFO.copyright}</p>
          <div className="flex items-center gap-4 text-slate-300">
            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#C2FF01] transition-colors flex items-center gap-1"
            >
              <span>Atención WhatsApp</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <span>•</span>
            <span className="text-[#C2FF01] font-mono">Santiago, Chile</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
