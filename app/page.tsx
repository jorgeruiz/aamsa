import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { Services } from "@/components/home/Services";
import { Stats } from "@/components/home/Stats";
import { Process } from "@/components/home/Process";
import { Testimonials } from "@/components/home/Testimonials";
import { ContactCTA } from "@/components/home/ContactCTA";
import { MarqueeStrip } from "@/components/animations/MarqueeStrip";

const capabilities = [
  "Corte Láser",
  "Corte Plasma CNC",
  "Doblez CNC",
  "Corte Guillotina",
  "Corte Pantógrafo",
  "Rolado",
  "45+ Años",
  "Guadalupe N.L.",
  "Corte Láser",
  "Corte Plasma CNC",
  "Doblez CNC",
  "Corte Guillotina",
];

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <MarqueeStrip
          items={capabilities}
          bgColor="#0F2440"
          textColor="#7A9CC0"
          accentColor="#FF7F00"
        />
        <Services />
        <Stats />
        <Process />
        <Testimonials />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
