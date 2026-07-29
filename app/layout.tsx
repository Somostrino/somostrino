import type { Metadata } from 'next';
import { DM_Sans, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'TRINO | Agencia de Gestión y Management Cultural',
  description:
    'Darle impulso al arte, ponerle alma a la gestión. Agencia de proyectos culturales en Chile: management, producción, merchandising, booking, pauta digital y fondos concursables.',
  keywords: [
    'Trino',
    'Agencia Cultural',
    'Management Cultural Chile',
    'Agencia Katarsis',
    'Booking Artístico',
    'Gamuza',
    'Simplemente Yo',
    'LUR',
    'Deni Li',
    'Ennio Ramaciotti',
    'Laika',
    'Fondos Concursables',
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${dmSans.variable} ${plusJakartaSans.variable} scroll-smooth`}>
      <body className="bg-[#1B1D21] text-white antialiased font-sans selection:bg-[#C2FF01] selection:text-[#1B1D21]" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

