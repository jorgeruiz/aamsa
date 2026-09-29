import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ServiceHero } from "@/components/servicios/ServiceHero";
import { ServiceCta } from "@/components/servicios/ServiceCta";
import { FaqAccordion } from "@/components/servicios/FaqAccordion";
import { JsonLd } from "@/components/servicios/JsonLd";

const PAGE_DESCRIPTION =
  "Doblado acero NL con 12 prensas CNC de hasta 4,000 tons × 24.4 m. Piezas repetibles para industria eólica, energética y ferrocarrilera en Nuevo León. Cotiza.";

export const metadata: Metadata = {
  title: "Doblez CNC de Lámina y Placa | Aamsa — Acero Industrial en Monterrey",
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: "https://aamsa.com/servicios/doblez-cnc",
    languages: {
      es: "https://aamsa.com/servicios/doblez-cnc",
      en: "https://aamsa.com/en/services/cnc-bending",
    },
  },
  openGraph: {
    title: "Doblez CNC de Lámina y Placa | Aamsa — Acero Industrial en Monterrey",
    description: PAGE_DESCRIPTION,
    url: "https://aamsa.com/servicios/doblez-cnc",
    images: [{ url: "https://aamsa.com/og/doblez-cnc.jpg" }],
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
      serviceType: "Doblez CNC",
      name: "Doblez CNC de Lámina y Placa",
      description: PAGE_DESCRIPTION,
      url: "https://aamsa.com/servicios/doblez-cnc",
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
          name: "¿Cuál es la capacidad máxima de doblez CNC de Aamsa?",
          acceptedAnswer: {
            "@type": "Answer",
            text: 'Hasta 4,000 tons x 24.4 m (80") de largo, uno de los equipos de mayor capacidad a nivel internacional.',
          },
        },
        {
          "@type": "Question",
          name: "¿Cuántos equipos de doblez tienen?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "12 equipos de prensas, entre CNC y convencionales.",
          },
        },
        {
          "@type": "Question",
          name: "¿A qué industrias atienden con doblez CNC?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Industria energética, eólica, transporte y ferrocarrilera, entre otras.",
          },
        },
        {
          "@type": "Question",
          name: "¿Ofrecen maquila de doblez CNC?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí, ofrecemos servicio de maquila de doblez.",
          },
        },
      ],
    },
  ],
};

const faqItems = [
  {
    question: "¿Cuál es la capacidad máxima de doblez CNC de Aamsa?",
    answer:
      'Hasta 4,000 tons x 24.4 m (80") de largo, uno de los equipos de mayor capacidad a nivel internacional.',
  },
  {
    question: "¿Cuántos equipos de doblez tienen?",
    answer: "12 equipos de prensas, entre CNC y convencionales.",
  },
  {
    question: "¿A qué industrias atienden con doblez CNC?",
    answer:
      "Industria energética, eólica, transporte y ferrocarrilera, entre otras.",
  },
  {
    question: "¿Ofrecen maquila de doblez CNC?",
    answer: "Sí, ofrecemos servicio de maquila de doblez.",
  },
];

export default function DoblezCncPage() {
  return (
    <>
      <JsonLd data={combinedSchema} />
      <Navbar />
      <main>
        <ServiceHero
          eyebrow="Servicios"
          title="Doblez CNC de Acero de Alta Capacidad"
          id="doblez_cnc_hero"
          image="/doblez-cnc-prensa-yawei-aamsa.webp"
          imageAlt="Prensa de doblez CNC Yawei de alta capacidad en planta Aamsa"
        />

        <section id="doblez_cnc_precision" className="py-20 lg:py-28 bg-[#1B4375]">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
            <h2
              className="font-[family-name:var(--font-barlow)] font-black uppercase leading-tight text-white mb-8"
              style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
            >
              Doblez CNC de precisión
            </h2>
            <div className="max-w-3xl">
              <div className="border-l-[3px] border-[#FF7F00] pl-6 py-2 mb-8">
                <p className="font-[family-name:var(--font-inter)] text-white italic leading-relaxed">
                  Siempre a la vanguardia, contamos con uno de los equipos de doblez de mayor capacidad a nivel internacional.
                </p>
              </div>
              <p className="font-[family-name:var(--font-inter)] text-[#B0C4DE] leading-relaxed">
                Ofrecemos nuestros servicios a la industria energética, eólica, transporte y ferrocarrilera, entre otras, así como servicio de <strong className="text-white">maquila</strong>. El doblez CNC garantiza piezas precisas y repetibles para manufactura de precisión.
              </p>
            </div>
            <div className="mt-12 flex flex-wrap gap-3">
              <Link href="/productos/lamina" className="font-[family-name:var(--font-inter)] text-sm text-[#FF7F00] hover:text-white border border-[#2261AE] hover:border-[#FF7F00]/40 px-4 py-2 transition-colors">
                Lámina de acero para doblez
              </Link>
              <Link href="/servicios/rolado" className="font-[family-name:var(--font-inter)] text-sm text-[#FF7F00] hover:text-white border border-[#2261AE] hover:border-[#FF7F00]/40 px-4 py-2 transition-colors">
                Rolado de placa y perfiles
              </Link>
            </div>
          </div>
        </section>

        <section id="doblez_cnc_equipos" className="py-20 lg:py-28 bg-[#153460]">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
            <h2
              className="font-[family-name:var(--font-barlow)] font-black uppercase leading-tight text-white mb-12"
              style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
            >
              Contamos con 12 equipos de prensas
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Doblez CNC hasta 4,000 tons",
                  desc: 'Servicio de doblez CNC hasta 4,000 tons x 24.4 m (80") de largo.',
                },
                {
                  title: "Prensas CNC y convencionales",
                  desc: "Prensas CNC de hasta 120 tons x 8' de largo. Prensas convencionales de hasta 400 tons x 20' de largo.",
                },
                {
                  title: "Doblez CNC hasta 2,000 tons",
                  desc: "Servicio de doblez CNC hasta 2,000 tons x 16 m de largo.",
                },
              ].map((equipo) => (
                <div
                  key={equipo.title}
                  className="bg-[#1B4375] border border-[#2261AE] border-t-[3px] border-t-[#FF7F00] p-8"
                >
                  <h3 className="font-[family-name:var(--font-barlow)] text-lg font-bold uppercase text-white mb-4">
                    {equipo.title}
                  </h3>
                  <p className="font-[family-name:var(--font-inter)] text-sm text-[#B0C4DE] leading-relaxed">
                    {equipo.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="doblez_cnc_faq" className="py-20 lg:py-28 bg-[#1B4375]">
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
          id="doblez_cnc_cta"
          headline="Solicita tu cotización de doblez CNC"
        />
      </main>
      <Footer />
    </>
  );
}
