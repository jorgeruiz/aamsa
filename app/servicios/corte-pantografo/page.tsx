import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ServiceHero } from "@/components/servicios/ServiceHero";
import { ServiceCta } from "@/components/servicios/ServiceCta";
import { FaqAccordion } from "@/components/servicios/FaqAccordion";
import { JsonLd } from "@/components/servicios/JsonLd";

export const metadata: Metadata = {
  title: "Corte Pantógrafo CNC en Monterrey y Guadalupe NL | Aamsa",
  description:
    'Servicio de corte pantógrafo CNC para acero al carbón de 3/8" a 9" de espesor en Nuevo León. Precisión, rapidez y 45 años de experiencia. Cotiza ya.',
  alternates: {
    canonical: "https://aamsa.com/servicios/corte-pantografo",
    languages: {
      es: "https://aamsa.com/servicios/corte-pantografo",
      en: "https://aamsa.com/en/services/pantograph-cutting",
    },
  },
  openGraph: {
    title: "Corte Pantógrafo CNC en Monterrey y Guadalupe NL | Aamsa",
    description:
      'Servicio de corte pantógrafo CNC para acero al carbón de 3/8" a 9" de espesor en Nuevo León. Precisión, rapidez y 45 años de experiencia. Cotiza ya.',
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
  serviceType: "Corte pantógrafo CNC de acero",
  name: "Corte Pantógrafo CNC",
  provider: {
    "@type": "LocalBusiness",
    name: "Aamsa — Abastecedora de Aceros y Maquilas S.A. de C.V.",
    telephone: "+52-81-8360-0414",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Av. Benito Juárez Km 7.5 S/N Col. Los Lermas",
      addressLocality: "Guadalupe",
      addressRegion: "Nuevo León",
      postalCode: "67190",
      addressCountry: "MX",
    },
  },
  areaServed: { "@type": "State", name: "Nuevo León" },
  description:
    'Corte pantógrafo CNC de acero al carbón de 3/8" a 9" de espesor. 4 equipos en área de 2,000 m2. Anillos, discos, cuadros y figuras especiales.',
};

const faqItems = [
  {
    question: "¿Qué espesores corta el pantógrafo CNC de Aamsa?",
    answer: 'Desde 3/8" hasta 9" de espesor en acero al carbón.',
  },
  {
    question: "¿Qué tipo de piezas pueden fabricar con pantógrafo?",
    answer:
      "Anillos, discos, cuadros y figuras especiales diseñadas por computadora, a la medida o por pieza.",
  },
  {
    question: "¿Manejan producción en serie o solo prototipos?",
    answer:
      "Trabajamos alta, mediana y baja producción, así como prototipos.",
  },
  {
    question: "¿Ofrecen maquila de corte pantógrafo?",
    answer: "Sí, si el cliente cuenta con el material.",
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
          title="Corte Pantógrafo CNC en Monterrey"
          id="corte_pantografo_hero"
          image="/corte-pantografo-metal-aamsa.webp"
          imageAlt="Antorchas de corte pantógrafo CNC cortando placa de acero con chispas en planta Aamsa Nuevo León"
        />

        <section id="corte_pantografo_que_es" className="py-20 lg:py-28 bg-[#1B4375]">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
            <h2
              className="font-[family-name:var(--font-barlow)] font-black uppercase leading-tight text-white mb-8"
              style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
            >
              ¿Qué es el corte pantógrafo?
            </h2>
            <div className="max-w-3xl">
              <p className="font-[family-name:var(--font-inter)] text-[#B0C4DE] leading-relaxed">
                Contamos con servicio de corte con pantógrafo CNC para toda la industria, desde 3/8&quot; a 9&quot; de espesor en acero al carbón. Damos el servicio de venta de material a la medida o por pieza, ya sea en anillos, discos, cuadros o figuras especiales diseñadas por computadora; trabajando en alta, mediana o baja producción, así como prototipos. Adicionalmente ofrecemos el servicio de <strong className="text-white">maquila</strong> si el cliente cuenta con el material.
              </p>
            </div>
            <div className="mt-12 flex flex-wrap gap-3">
              <Link href="/servicios/corte-laser" className="font-[family-name:var(--font-inter)] text-sm text-[#FF7F00] hover:text-white border border-[#2261AE] hover:border-[#FF7F00]/40 px-4 py-2 transition-colors">
                Corte láser CNC para mayor precisión en espesores delgados
              </Link>
              <Link href="/productos/placa" className="font-[family-name:var(--font-inter)] text-sm text-[#FF7F00] hover:text-white border border-[#2261AE] hover:border-[#FF7F00]/40 px-4 py-2 transition-colors">
                Placa de acero para corte industrial en NL
              </Link>
            </div>
          </div>
        </section>

        <section id="corte_pantografo_equipos" className="py-20 lg:py-28 bg-[#153460]">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
            <h2
              className="font-[family-name:var(--font-barlow)] font-black uppercase leading-tight text-white mb-8"
              style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
            >
              Contamos con 4 equipos de pantógrafos
            </h2>
            <div className="max-w-3xl">
              <p className="font-[family-name:var(--font-inter)] text-[#B0C4DE] leading-relaxed">
                Actualmente contamos con un área de 2,000 m² dedicada exclusivamente a este proceso, con 4 máquinas pantógrafo que cortan desde 3/8&quot; hasta 9&quot; de espesor.
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
          headline="Solicita cotización de corte pantógrafo en Monterrey y recibe atención técnica especializada"
        />
      </main>
      <Footer />
    </>
  );
}
