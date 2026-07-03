import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ServiceHero } from "@/components/servicios/ServiceHero";
import { ServiceCta } from "@/components/servicios/ServiceCta";
import { FaqAccordion } from "@/components/servicios/FaqAccordion";
import { JsonLd } from "@/components/servicios/JsonLd";

export const metadata: Metadata = {
  title: "Corte Pantografo CNC en Monterrey y Guadalupe NL | Aamsa",
  description:
    'Servicio de corte pantografo CNC para acero al carbon de 3/8" a 9" de espesor en Nuevo Leon. Precision, rapidez y 45 anos de experiencia. Cotiza ya.',
  alternates: {
    canonical: "https://aamsa.com/servicios/corte-pantografo",
    languages: {
      es: "https://aamsa.com/servicios/corte-pantografo",
      en: "https://aamsa.com/en/services/pantograph-cutting",
    },
  },
  openGraph: {
    title: "Corte Pantografo CNC en Monterrey y Guadalupe NL | Aamsa",
    description:
      'Servicio de corte pantografo CNC para acero al carbon de 3/8" a 9" de espesor en Nuevo Leon. Precision, rapidez y 45 anos de experiencia. Cotiza ya.',
    url: "https://aamsa.com/servicios/corte-pantografo",
    images: [{ url: "https://aamsa.com/og/corte-pantografo.jpg" }],
    siteName: "Aamsa",
    type: "website",
    locale: "es_MX",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Corte pantografo CNC de acero",
  name: "Corte Pantografo CNC",
  provider: {
    "@type": "LocalBusiness",
    name: "Aamsa -- Abastecedora de Aceros y Maquilas S.A. de C.V.",
    telephone: "+52-81-8360-0414",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Av. Benito Juarez Km 7.5 S/N Col. Los Lermas",
      addressLocality: "Guadalupe",
      addressRegion: "Nuevo Leon",
      postalCode: "67190",
      addressCountry: "MX",
    },
  },
  areaServed: { "@type": "State", name: "Nuevo Leon" },
  description:
    'Corte pantografo CNC de acero al carbon de 3/8" a 9" de espesor. 4 equipos en area de 2,000 m2. Anillos, discos, cuadros y figuras especiales.',
};

const faqItems = [
  {
    question: "Que espesores corta el pantografo CNC de Aamsa?",
    answer: 'Desde 3/8" hasta 9" de espesor en acero al carbon.',
  },
  {
    question: "Que tipo de piezas pueden fabricar con pantografo?",
    answer:
      "Anillos, discos, cuadros y figuras especiales disenadas por computadora, a la medida o por pieza.",
  },
  {
    question: "Manejan produccion en serie o solo prototipos?",
    answer:
      "Trabajamos alta, mediana y baja produccion, asi como prototipos.",
  },
  {
    question: "Ofrecen maquila de corte pantografo?",
    answer: "Si, si el cliente cuenta con el material.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export default function CortePantografoPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <Navbar />
      <main>
        <ServiceHero
          eyebrow="Servicios"
          title="Corte Pantografo CNC en Monterrey"
          id="corte_pantografo_hero"
          image="/corte-pantografo.png"
          imageAlt="Equipo de corte pantografo CNC en planta Aamsa"
        />

        <section id="corte_pantografo_que_es" className="py-20 lg:py-28 bg-[#1B4375]">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <h2
              className="font-[family-name:var(--font-barlow)] font-black uppercase leading-tight text-white mb-8"
              style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
            >
              Que es el corte pantografo?
            </h2>
            <div className="max-w-3xl">
              <p className="font-[family-name:var(--font-inter)] text-[#B0C4DE] leading-relaxed">
                Contamos con servicio de corte con pantografo CNC para toda la industria, desde 3/8&quot; a 9&quot; de espesor en acero al carbon. Damos el servicio de venta de material a la medida o por pieza, ya sea en anillos, discos, cuadros o figuras especiales disenadas por computadora; trabajando en alta, mediana o baja produccion, asi como prototipos. Adicionalmente ofrecemos el servicio de <strong className="text-white">maquila</strong> si el cliente cuenta con el material.
              </p>
            </div>
            <div className="mt-12 flex flex-wrap gap-3">
              <Link href="/servicios/corte-laser" className="font-[family-name:var(--font-inter)] text-sm text-[#FF7F00] hover:text-white border border-[#2261AE] hover:border-[#FF7F00]/40 px-4 py-2 transition-colors">
                Corte laser CNC para mayor precision en espesores delgados
              </Link>
              <Link href="/productos/placa" className="font-[family-name:var(--font-inter)] text-sm text-[#FF7F00] hover:text-white border border-[#2261AE] hover:border-[#FF7F00]/40 px-4 py-2 transition-colors">
                Placa de acero para corte industrial en NL
              </Link>
            </div>
          </div>
        </section>

        <section id="corte_pantografo_equipos" className="py-20 lg:py-28 bg-[#153460]">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <h2
              className="font-[family-name:var(--font-barlow)] font-black uppercase leading-tight text-white mb-8"
              style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
            >
              Contamos con 4 equipos de pantografos
            </h2>
            <div className="max-w-3xl">
              <p className="font-[family-name:var(--font-inter)] text-[#B0C4DE] leading-relaxed">
                Actualmente contamos con un area de 2,000 m2 dedicada exclusivamente a este proceso, con 4 maquinas pantografo que cortan desde 3/8&quot; hasta 9&quot; de espesor.
              </p>
            </div>
          </div>
        </section>

        <section id="corte_pantografo_faq" className="py-20 lg:py-28 bg-[#1B4375]">
          <div className="max-w-3xl mx-auto px-6 lg:px-10">
            <h2
              className="font-[family-name:var(--font-barlow)] font-black uppercase leading-tight text-white mb-10"
              style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
            >
              Preguntas frecuentes
            </h2>
            <FaqAccordion items={faqItems} />
          </div>
        </section>

        <ServiceCta
          id="corte_pantografo_cta"
          headline="Solicita cotizacion de corte pantografo en Monterrey y recibe atencion tecnica especializada"
        />
      </main>
      <Footer />
    </>
  );
}
