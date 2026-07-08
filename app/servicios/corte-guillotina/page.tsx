import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ServiceHero } from "@/components/servicios/ServiceHero";
import { ServiceCta } from "@/components/servicios/ServiceCta";
import { FaqAccordion } from "@/components/servicios/FaqAccordion";
import { JsonLd } from "@/components/servicios/JsonLd";

export const metadata: Metadata = {
  title: "Corte Guillotina de Lamina de Acero en Nuevo Leon | Aamsa",
  description:
    "Corte guillotina de lamina de acero con alta precision y rapidez en Monterrey y Guadalupe NL. Ideal para produccion en serie. Solicita tu cotizacion.",
  alternates: {
    canonical: "https://aamsa.com/servicios/corte-guillotina",
    languages: {
      es: "https://aamsa.com/servicios/corte-guillotina",
      en: "https://aamsa.com/en/services/guillotine-cutting",
    },
  },
  openGraph: {
    title: "Corte Guillotina de Lamina de Acero en Nuevo Leon | Aamsa",
    description:
      "Corte guillotina de lamina de acero con alta precision y rapidez en Monterrey y Guadalupe NL. Ideal para produccion en serie. Solicita tu cotizacion.",
    url: "https://aamsa.com/servicios/corte-guillotina",
    images: [{ url: "https://aamsa.com/og/corte-guillotina.jpg" }],
    siteName: "Aamsa",
    type: "website",
    locale: "es_MX",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Corte guillotina de lamina de acero",
  name: "Corte Guillotina",
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
    "Corte guillotina de lamina de acero desde 1/4\" hasta 1\" de espesor, ancho de 10' a 22'. 6 equipos disponibles.",
};

const faqItems = [
  {
    question: "Que espesores maneja el corte guillotina?",
    answer: 'Desde 1/4" hasta 1" de espesor.',
  },
  {
    question: "Que ancho de pieza pueden cortar con guillotina?",
    answer: "Desde 10' hasta 22' de ancho.",
  },
  {
    question: "Para que es ideal el corte guillotina?",
    answer:
      "Para piezas largas o cuadros de cualquier tamano y para produccion en serie con rapidez y precision.",
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

export default function CorteGuillotinaPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <Navbar />
      <main>
        <ServiceHero
          eyebrow="Servicios"
          title="Corte Guillotina de Lamina de Acero en Monterrey"
          id="corte_guillotina_hero"
          image="/corte-guillotina-lamina-aamsa.webp"
          imageAlt="Cizalla guillotina industrial con piezas de lamina de acero cortadas en planta Aamsa Nuevo Leon"
        />

        <section id="corte_guillotina_servicio" className="py-20 lg:py-28 bg-[#1B4375]">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <h2
              className="font-[family-name:var(--font-barlow)] font-black uppercase leading-tight text-white mb-8"
              style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
            >
              Servicio de corte por guillotina
            </h2>
            <div className="max-w-3xl">
              <p className="font-[family-name:var(--font-inter)] text-[#B0C4DE] leading-relaxed">
                Contamos con servicio de corte por guillotina para piezas largas o cuadros de cualquier tamano, con alta precision y rapidez. Es la opcion ideal para produccion en serie de lamina de acero.
              </p>
            </div>
            <div className="mt-12 flex flex-wrap gap-3">
              <Link href="/productos/lamina" className="font-[family-name:var(--font-inter)] text-sm text-[#FF7F00] hover:text-white border border-[#2261AE] hover:border-[#FF7F00]/40 px-4 py-2 transition-colors">
                Lamina de acero en varios calibres
              </Link>
              <Link href="/servicios/corte-laser" className="font-[family-name:var(--font-inter)] text-sm text-[#FF7F00] hover:text-white border border-[#2261AE] hover:border-[#FF7F00]/40 px-4 py-2 transition-colors">
                Corte laser CNC de alta precision
              </Link>
            </div>
          </div>
        </section>

        <section id="corte_guillotina_equipos" className="py-20 lg:py-28 bg-[#153460]">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <h2
              className="font-[family-name:var(--font-barlow)] font-black uppercase leading-tight text-white mb-8"
              style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
            >
              Contamos con 6 equipos de guillotinas
            </h2>
            <div className="max-w-3xl">
              <p className="font-[family-name:var(--font-inter)] text-[#B0C4DE] leading-relaxed">
                Capacidad de corte desde 1/4&quot; hasta 1&quot; de espesor, con ancho de 10&apos; hasta 22&apos;.
              </p>
            </div>
          </div>
        </section>

        <section id="corte_guillotina_faq" className="py-20 lg:py-28 bg-[#1B4375]">
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
          id="corte_guillotina_cta"
          headline="Solicita tu cotizacion de corte guillotina en Monterrey"
        />
      </main>
      <Footer />
    </>
  );
}
