import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#1B1D21] text-white selection:bg-[#C2FF01] selection:text-[#1B1D21]">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Footer />
    </main>
  );
}
