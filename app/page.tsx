import type { Metadata } from 'next'
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { Services } from "@/components/home/Services";
import { Products } from "@/components/home/Products";
import { Stats } from "@/components/home/Stats";
import { Process } from "@/components/home/Process";
import { ContactCTA } from "@/components/home/ContactCTA";


export const metadata: Metadata = {
  "title": "Aceros Aamsa | Distribuidor de Acero en Monterrey",
  "description": "Somos tu proveedor de acero en Monterrey y NL. Amplio catálogo, entregas puntuales y atención experta. ¡Solicita tu cotización hoy!"
}

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Products />
        <Stats />
        <Process />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
