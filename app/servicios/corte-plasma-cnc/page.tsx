import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ServiceHero } from "@/components/servicios/ServiceHero";
import { ServiceCta } from "@/components/servicios/ServiceCta";
import { FaqAccordion } from "@/components/servicios/FaqAccordion";
import { JsonLd } from "@/components/servicios/JsonLd";

export const metadata: Metadata = {
  title: "Corte Plasma CNC de Acero Grueso en Nuevo Leon | Aamsa",
  description:
    "Corte plasma CNC rapido y eficiente para acero de alto espesor en Monterrey y Guadalupe NL. Con biselado y taladro. Ideal para proyectos industriales.",
  alternates: {
    canonical: "https://aamsa.com/servicios/corte-plasma-cnc",
    languages: {
      es: "https://aamsa.com/servicios/corte-plasma-cnc",
      en: "https://aamsa.com/en/services/plasma-cnc-cutting",
    },
  },
  openGraph: {
    title: "Corte Plasma CNC de Acero Grueso en Nuevo Leon | Aamsa",
    description:
      "Corte plasma CNC rapido y eficiente para acero de alto espesor en Monterrey y Guadalupe NL. Con biselado y taladro. Ideal para proyectos industriales.",
    url: "https://aamsa.com/servicios/corte-plasma-cnc",
    images: [{ url: "https://aamsa.com/og/corte-plasma-cnc.jpg" }],
    siteName: "Aamsa",
    type: "website",
    locale: "es_MX",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Corte plasma CNC de acero",
  name: "Corte Plasma CNC",
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
    "Corte plasma CNC de 400 Amp con biselado y taladro para acero de alto espesor. Cama de 3 m x 16 m.",
};

const faqItems = [
  {
    question: "Para que tipo de acero conviene el corte plasma CNC?",
    answer:
      "Es ideal para acero de alto espesor donde se requiere rapidez y eficiencia en proyectos industriales.",
  },
  {
    question: "Que capacidad tiene el equipo de plasma de Aamsa?",
    answer:
      "Corte plasma CNC de 400 Amp con biselado y taladro, en cama de 3 m x 16 m.",
  },
  {
    question: "Cual es la ventaja del corte plasma frente a otros procesos?",
    answer:
      "Menor riesgo de deformaciones gracias a la compactacion calorifica de la zona de corte.",
  },
  {
    question: "Ofrecen maquila de corte plasma?",
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

export default function CortePlasmaCncPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <Navbar />
      <main>
        <ServiceHero
          eyebrow="Servicios"
          title="Corte Plasma CNC para Acero Grueso en Nuevo Leon"
          id="corte_plasma_hero"
          image="/corte-plasma-cnc.png"
          imageAlt="Equipo de corte plasma CNC en planta Aamsa"
        />

        {/* Que es el corte plasma CNC */}
        <section id="corte_plasma_que_es" className="py-20 lg:py-28 bg-[#1B4375]">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <h2
              className="font-[family-name:var(--font-barlow)] font-black uppercase leading-tight text-white mb-8"
              style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
            >
              Que es el corte con plasma CNC?
            </h2>
            <div className="max-w-3xl">
              <p className="font-[family-name:var(--font-inter)] text-[#B0C4DE] leading-relaxed mb-8">
                El corte por plasma se basa en la accion termica y mecanica de un chorro de gas calentado por un arco electrico de corriente continua establecido entre un electrodo ubicado en la antorcha y la pieza a mecanizar. El chorro de plasma lanzado contra la pieza penetra la totalidad del espesor a cortar, fundiendo y expulsando el material.
              </p>
              <div className="border-l-[3px] border-[#FF7F00] pl-6 py-2">
                <p className="font-[family-name:var(--font-inter)] text-white italic leading-relaxed">
                  La ventaja principal de este sistema radica en su reducido riesgo de deformaciones debido a la compactacion calorifica de la zona de corte.
                </p>
              </div>
            </div>
            <div className="mt-12 flex flex-wrap gap-3">
              <Link href="/servicios/corte-laser" className="font-[family-name:var(--font-inter)] text-sm text-[#FF7F00] hover:text-white border border-[#2261AE] hover:border-[#FF7F00]/40 px-4 py-2 transition-colors">
                Corte laser CNC para espesores delgados
              </Link>
              <Link href="/servicios/corte-pantografo" className="font-[family-name:var(--font-inter)] text-sm text-[#FF7F00] hover:text-white border border-[#2261AE] hover:border-[#FF7F00]/40 px-4 py-2 transition-colors">
                Corte pantografo para maximo espesor
              </Link>
              <Link href="/productos/placa" className="font-[family-name:var(--font-inter)] text-sm text-[#FF7F00] hover:text-white border border-[#2261AE] hover:border-[#FF7F00]/40 px-4 py-2 transition-colors">
                Placa de acero para corte industrial
              </Link>
            </div>
          </div>
        </section>

        {/* Equipos */}
        <section id="corte_plasma_equipos" className="py-20 lg:py-28 bg-[#153460]">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <h2
              className="font-[family-name:var(--font-barlow)] font-black uppercase leading-tight text-white mb-8"
              style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
            >
              Contamos con 2 equipos de corte plasma
            </h2>
            <div className="max-w-xl">
              <div className="bg-[#1B4375] border border-[#2261AE] border-t-[3px] border-t-[#FF7F00] p-8">
                <h3 className="font-[family-name:var(--font-barlow)] text-lg font-bold uppercase text-white mb-4">
                  Plasma CNC de 400 Amp
                </h3>
                <p className="font-[family-name:var(--font-inter)] text-sm text-[#B0C4DE] leading-relaxed">
                  Servicio de corte plasma CNC de 400 Amp, con biselado y taladro, con cama de 3 m x 16 m.
                </p>
              </div>
            </div>
            <div className="mt-10 max-w-3xl">
              <h2
                className="font-[family-name:var(--font-barlow)] font-black uppercase leading-tight text-white mb-6"
                style={{ fontSize: "clamp(24px, 3vw, 36px)" }}
              >
                Ideal para industria manufacturera
              </h2>
              <p className="font-[family-name:var(--font-inter)] text-[#B0C4DE] leading-relaxed">
                El corte plasma CNC es la mejor opcion para acero de alto espesor en proyectos industriales exigentes de la industria manufacturera en Monterrey y Nuevo Leon. Tambien ofrecemos servicio de <strong className="text-white">maquila</strong> si el cliente cuenta con el material.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="corte_plasma_faq" className="py-20 lg:py-28 bg-[#1B4375]">
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
          id="corte_plasma_cta"
          headline="Solicita tu cotizacion de corte plasma CNC en Monterrey"
        />
      </main>
      <Footer />
    </>
  );
}
