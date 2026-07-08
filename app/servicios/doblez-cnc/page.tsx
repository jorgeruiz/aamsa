import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ServiceHero } from "@/components/servicios/ServiceHero";
import { ServiceCta } from "@/components/servicios/ServiceCta";
import { FaqAccordion } from "@/components/servicios/FaqAccordion";
import { JsonLd } from "@/components/servicios/JsonLd";

export const metadata: Metadata = {
  title: "Doblez CNC de Acero de Alta Capacidad en Nuevo Leon | Aamsa",
  description:
    "Doblez CNC preciso y repetible para piezas industriales en Monterrey y Guadalupe NL. Hasta 4,000 tons x 24.4 m. Industria energetica, eolica y transporte.",
  alternates: {
    canonical: "https://aamsa.com/servicios/doblez-cnc",
    languages: {
      es: "https://aamsa.com/servicios/doblez-cnc",
      en: "https://aamsa.com/en/services/cnc-bending",
    },
  },
  openGraph: {
    title: "Doblez CNC de Acero de Alta Capacidad en Nuevo Leon | Aamsa",
    description:
      "Doblez CNC preciso y repetible para piezas industriales en Monterrey y Guadalupe NL. Hasta 4,000 tons x 24.4 m. Industria energetica, eolica y transporte.",
    url: "https://aamsa.com/servicios/doblez-cnc",
    images: [{ url: "https://aamsa.com/og/doblez-cnc.jpg" }],
    siteName: "Aamsa",
    type: "website",
    locale: "es_MX",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Doblez CNC de acero",
  name: "Doblez CNC",
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
    "Doblez CNC de alta capacidad hasta 4,000 tons x 24.4 m. 12 equipos de prensas para industria energetica, eolica, transporte y ferrocarrilera.",
};

const faqItems = [
  {
    question: "Cual es la capacidad maxima de doblez CNC de Aamsa?",
    answer:
      'Hasta 4,000 tons x 24.4 m (80") de largo, uno de los equipos de mayor capacidad a nivel internacional.',
  },
  {
    question: "Cuantos equipos de doblez tienen?",
    answer: "12 equipos de prensas, entre CNC y convencionales.",
  },
  {
    question: "A que industrias atienden con doblez CNC?",
    answer:
      "Industria energetica, eolica, transporte y ferrocarrilera, entre otras.",
  },
  {
    question: "Ofrecen maquila de doblez CNC?",
    answer: "Si, ofrecemos servicio de maquila de doblez.",
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

export default function DoblezCncPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <Navbar />
      <main>
        <ServiceHero
          eyebrow="Servicios"
          title="Doblez CNC de Acero de Alta Capacidad en Monterrey"
          id="doblez_cnc_hero"
          image="/doblez-cnc-prensa-yawei-aamsa.webp"
          imageAlt="Prensa de doblez CNC Yawei de alta capacidad en planta Aamsa"
        />

        <section id="doblez_cnc_precision" className="py-20 lg:py-28 bg-[#1B4375]">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <h2
              className="font-[family-name:var(--font-barlow)] font-black uppercase leading-tight text-white mb-8"
              style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
            >
              Doblez CNC de precision
            </h2>
            <div className="max-w-3xl">
              <div className="border-l-[3px] border-[#FF7F00] pl-6 py-2 mb-8">
                <p className="font-[family-name:var(--font-inter)] text-white italic leading-relaxed">
                  Siempre a la vanguardia, contamos con uno de los equipos de doblez de mayor capacidad a nivel internacional.
                </p>
              </div>
              <p className="font-[family-name:var(--font-inter)] text-[#B0C4DE] leading-relaxed">
                Ofrecemos nuestros servicios a la industria energetica, eolica, transporte y ferrocarrilera, entre otras, asi como servicio de <strong className="text-white">maquila</strong>. El doblez CNC garantiza piezas precisas y repetibles para manufactura de precision.
              </p>
            </div>
            <div className="mt-12 flex flex-wrap gap-3">
              <Link href="/productos/lamina" className="font-[family-name:var(--font-inter)] text-sm text-[#FF7F00] hover:text-white border border-[#2261AE] hover:border-[#FF7F00]/40 px-4 py-2 transition-colors">
                Lamina de acero para doblez
              </Link>
              <Link href="/servicios/rolado" className="font-[family-name:var(--font-inter)] text-sm text-[#FF7F00] hover:text-white border border-[#2261AE] hover:border-[#FF7F00]/40 px-4 py-2 transition-colors">
                Rolado de placa y perfiles
              </Link>
            </div>
          </div>
        </section>

        <section id="doblez_cnc_equipos" className="py-20 lg:py-28 bg-[#153460]">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
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
          headline="Solicita tu cotizacion de doblez CNC en Monterrey"
        />
      </main>
      <Footer />
    </>
  );
}
