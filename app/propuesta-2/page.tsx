import { Navbar2 } from "@/components/propuesta2/Navbar2";
import { Hero2 } from "@/components/propuesta2/Hero2";
import { Services2 } from "@/components/propuesta2/Services2";
import { Stats2 } from "@/components/propuesta2/Stats2";
import { Process2 } from "@/components/propuesta2/Process2";
import { Testimonials2 } from "@/components/propuesta2/Testimonials2";
import { ContactCTA2 } from "@/components/propuesta2/ContactCTA2";
import { Footer2 } from "@/components/propuesta2/Footer2";
import { MarqueeStrip } from "@/components/animations/MarqueeStrip";

export const metadata = {
  title: "Corte y Doblez de Acero en Monterrey | Aamsa — Propuesta 2",
  description:
    "Más de 40 años ofreciendo corte láser, plasma CNC, doblez CNC y rolado en Nuevo León.",
};

const capabilities = [
  "Corte Láser",
  "Corte Plasma CNC",
  "Doblez CNC",
  "Corte Guillotina",
  "Corte Pantógrafo",
  "Rolado",
  "Habilitado de Lámina",
  "Distribución de Acero",
  "Corte Láser",
  "Corte Plasma CNC",
  "Doblez CNC",
  "Corte Guillotina",
];

export default function Propuesta2Page() {
  return (
    <>
      <Navbar2 />
      <main>
        <Hero2 />
        {/* Capabilities marquee — one per page, between hero and services */}
        <MarqueeStrip
          items={capabilities}
          bgColor="#F7F7F8"
          textColor="#6B7280"
          accentColor="#FF7F00"
        />
        <Services2 />
        <Stats2 />
        <Process2 />
        <Testimonials2 />
        <ContactCTA2 />
      </main>
      <Footer2 />
    </>
  );
}
