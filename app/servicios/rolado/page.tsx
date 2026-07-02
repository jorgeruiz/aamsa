import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ServiceHero } from "@/components/servicios/ServiceHero";
import { ServiceCta } from "@/components/servicios/ServiceCta";
import { FaqAccordion } from "@/components/servicios/FaqAccordion";
import { JsonLd } from "@/components/servicios/JsonLd";

export const metadata: Metadata = {
  title: "Rolado de Acero para Piezas Curvas en Nuevo Leon | Aamsa",
  description:
    "Servicio de rolado de lamina, placa y perfiles para cilindros, tanques y estructuras en Monterrey y Guadalupe NL. Roladora CNC de 4 rodillos. Cotiza ya.",
  alternates: {
    canonical: "https://aamsa.com/servicios/rolado",
    languages: {
      es: "https://aamsa.com/servicios/rolado",
      en: "https://aamsa.com/en/services/rolling",
    },
  },
  openGraph: {
    title: "Rolado de Acero para Piezas Curvas en Nuevo Leon | Aamsa",
    description:
      "Servicio de rolado de lamina, placa y perfiles para cilindros, tanques y estructuras en Monterrey y Guadalupe NL. Roladora CNC de 4 rodillos. Cotiza ya.",
    url: "https://aamsa.com/servicios/rolado",
    images: [{ url: "https://aamsa.com/og/rolado.jpg" }],
    siteName: "Aamsa",
    type: "website",
    locale: "es_MX",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Rolado de acero",
  name: "Rolado",
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
    "Rolado de lamina, placa y perfiles hasta 1 1/4\" x 10' de ancho con roladora CNC de 4 rodillos. 7 roladoras disponibles.",
};

const faqItems = [
  {
    question: "Que materiales pueden rolar?",
    answer:
      'Lamina, placa y perfiles hasta 1 1/4" de espesor x 10\' de ancho.',
  },
  {
    question: "Para que se usa el servicio de rolado?",
    answer:
      "Para fabricar cilindros, tanques y estructuras curvas en proyectos industriales.",
  },
  {
    question: "Que ventaja tiene la roladora CNC de 4 rodillos?",
    answer: "Mayor precision y menor desperdicio de material.",
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

export default function RoladoPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <Navbar />
      <main>
        <ServiceHero
          eyebrow="Servicios"
          title="Rolado de Acero para Piezas Curvas en Monterrey"
          id="rolado_hero"
        />

        <section id="rolado_precision" className="py-20 lg:py-28 bg-[#0F2440]">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <h2
              className="font-[family-name:var(--font-barlow)] font-black uppercase leading-tight text-white mb-8"
              style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
            >
              Rolado CNC de precision
            </h2>
            <div className="max-w-3xl">
              <div className="border-l-[3px] border-[#FF7F00] pl-6 py-2 mb-8">
                <p className="font-[family-name:var(--font-inter)] text-white italic leading-relaxed">
                  Roladora CNC de 4 rodillos para mayor precision y menor desperdicio de material.
                </p>
              </div>
              <p className="font-[family-name:var(--font-inter)] text-[#B0C4DE] leading-relaxed">
                Ofrecemos servicio de rolado de acero para cilindros, tanques y estructuras, con precision y calidad en cada proyecto industrial.
              </p>
            </div>
            <div className="mt-12 flex flex-wrap gap-3">
              <Link href="/productos/placa" className="font-[family-name:var(--font-inter)] text-sm text-[#FF7F00] hover:text-white border border-[#1A4070] hover:border-[#FF7F00]/40 px-4 py-2 transition-colors">
                Placa de acero para rolado
              </Link>
              <Link href="/servicios/doblez-cnc" className="font-[family-name:var(--font-inter)] text-sm text-[#FF7F00] hover:text-white border border-[#1A4070] hover:border-[#FF7F00]/40 px-4 py-2 transition-colors">
                Doblez CNC de alta capacidad
              </Link>
            </div>
          </div>
        </section>

        <section id="rolado_equipos" className="py-20 lg:py-28 bg-[#0A1A2E]">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <h2
              className="font-[family-name:var(--font-barlow)] font-black uppercase leading-tight text-white mb-8"
              style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
            >
              Contamos con 7 roladoras
            </h2>
            <div className="max-w-3xl">
              <p className="font-[family-name:var(--font-inter)] text-[#B0C4DE] leading-relaxed">
                Rolado de lamina, placa y perfiles hasta 1 1/4&quot; x 10&apos; de ancho.
              </p>
            </div>
          </div>
        </section>

        <section id="rolado_faq" className="py-20 lg:py-28 bg-[#0F2440]">
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
          headline="Solicita tu cotizacion de rolado en Monterrey"
        />
      </main>
      <Footer />
    </>
  );
}
