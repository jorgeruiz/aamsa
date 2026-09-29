import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ServiceHero } from "@/components/servicios/ServiceHero";
import { ServiceCta } from "@/components/servicios/ServiceCta";
import { FaqAccordion } from "@/components/servicios/FaqAccordion";
import { JsonLd } from "@/components/servicios/JsonLd";

const PAGE_DESCRIPTION =
  "Rolado acero Monterrey con roladora CNC de 4 rodillos: lámina, placa y perfiles hasta 1¼\" × 10'. 7 roladoras para cilindros y tanques industriales en NL.";

export const metadata: Metadata = {
  title: "Rolado de Acero CNC | Aamsa — Acero Industrial en Monterrey",
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: "https://aamsa.com/servicios/rolado",
    languages: {
      es: "https://aamsa.com/servicios/rolado",
      en: "https://aamsa.com/en/services/rolling",
    },
  },
  openGraph: {
    title: "Rolado de Acero CNC | Aamsa — Acero Industrial en Monterrey",
    description: PAGE_DESCRIPTION,
    url: "https://aamsa.com/servicios/rolado",
    images: [{ url: "https://aamsa.com/og/rolado.jpg" }],
    siteName: "Aamsa",
    type: "website",
    locale: "es_MX",
  },
};

const combinedSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      serviceType: "Rolado Industrial",
      name: "Rolado de Acero CNC",
      description: PAGE_DESCRIPTION,
      url: "https://aamsa.com/servicios/rolado",
      provider: {
        "@type": "LocalBusiness",
        name: "Aamsa — Abastecedora de Aceros y Maquilas S.A. de C.V.",
        url: "https://aamsa.com",
        telephone: "+52-81-8360-0414",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Av. Benito Juárez Km 7.5 S/N Col. Los Lermas",
          addressLocality: "Monterrey",
          addressRegion: "Nuevo León",
          postalCode: "67190",
          addressCountry: "MX",
        },
      },
      areaServed: { "@type": "State", name: "Nuevo León" },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "¿Qué materiales pueden rolar?",
          acceptedAnswer: {
            "@type": "Answer",
            text: 'Lámina, placa y perfiles hasta 1 1/4" de espesor x 10\' de ancho.',
          },
        },
        {
          "@type": "Question",
          name: "¿Para qué se usa el servicio de rolado?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Para fabricar cilindros, tanques y estructuras curvas en proyectos industriales.",
          },
        },
        {
          "@type": "Question",
          name: "¿Qué ventaja tiene la roladora CNC de 4 rodillos?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Mayor precisión y menor desperdicio de material.",
          },
        },
      ],
    },
  ],
};

const faqItems = [
  {
    question: "¿Qué materiales pueden rolar?",
    answer:
      'Lámina, placa y perfiles hasta 1 1/4" de espesor x 10\' de ancho.',
  },
  {
    question: "¿Para qué se usa el servicio de rolado?",
    answer:
      "Para fabricar cilindros, tanques y estructuras curvas en proyectos industriales.",
  },
  {
    question: "¿Qué ventaja tiene la roladora CNC de 4 rodillos?",
    answer: "Mayor precisión y menor desperdicio de material.",
  },
];

export default function RoladoPage() {
  return (
    <>
      <JsonLd data={combinedSchema} />
      <Navbar />
      <main>
        <ServiceHero
          eyebrow="Servicios"
          title="Rolado de Acero para Piezas Curvas"
          id="rolado_hero"
          image="/rolado-lamina-acero-aamsa.webp"
          imageAlt="Roladora industrial formando lámina de acero en curva en planta Aamsa Nuevo León"
        />

        <section id="rolado_precision" className="py-20 lg:py-28 bg-[#1B4375]">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
            <h2
              className="font-[family-name:var(--font-barlow)] font-black uppercase leading-tight text-white mb-8"
              style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
            >
              Rolado CNC de precisión
            </h2>
            <div className="max-w-3xl">
              <div className="border-l-[3px] border-[#FF7F00] pl-6 py-2 mb-8">
                <p className="font-[family-name:var(--font-inter)] text-white italic leading-relaxed">
                  Roladora CNC de 4 rodillos para mayor precisión y menor desperdicio de material.
                </p>
              </div>
              <p className="font-[family-name:var(--font-inter)] text-[#B0C4DE] leading-relaxed">
                Ofrecemos servicio de rolado de acero para cilindros, tanques y estructuras, con precisión y calidad en cada proyecto industrial.
              </p>
            </div>
            <div className="mt-12 flex flex-wrap gap-3">
              <Link href="/productos/placa" className="font-[family-name:var(--font-inter)] text-sm text-[#FF7F00] hover:text-white border border-[#2261AE] hover:border-[#FF7F00]/40 px-4 py-2 transition-colors">
                Placa de acero para rolado
              </Link>
              <Link href="/servicios/doblez-cnc" className="font-[family-name:var(--font-inter)] text-sm text-[#FF7F00] hover:text-white border border-[#2261AE] hover:border-[#FF7F00]/40 px-4 py-2 transition-colors">
                Doblez CNC de alta capacidad
              </Link>
            </div>
          </div>
        </section>

        <section id="rolado_equipos" className="py-20 lg:py-28 bg-[#153460]">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
            <h2
              className="font-[family-name:var(--font-barlow)] font-black uppercase leading-tight text-white mb-8"
              style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
            >
              Contamos con 7 roladoras
            </h2>
            <div className="max-w-3xl">
              <p className="font-[family-name:var(--font-inter)] text-[#B0C4DE] leading-relaxed">
                Rolado de lámina, placa y perfiles hasta 1 1/4&quot; x 10&apos; de ancho.
              </p>
            </div>
          </div>
        </section>

        <section id="rolado_faq" className="py-20 lg:py-28 bg-[#1B4375]">
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
          id="rolado_cta"
          headline="Solicita tu cotización de rolado de acero en Monterrey"
        />
      </main>
      <Footer />
    </>
  );
}
