import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ServiceHero } from "@/components/servicios/ServiceHero";
import { ServiceCta } from "@/components/servicios/ServiceCta";
import { FaqAccordion } from "@/components/servicios/FaqAccordion";
import { JsonLd } from "@/components/servicios/JsonLd";

export const metadata: Metadata = {
  title: "Corte Laser CNC de Acero en Monterrey y Nuevo Leon | Aamsa",
  description:
    "Servicio de corte laser CNC en Monterrey y Guadalupe NL. Alta precision en acero al carbon, inoxidable y aluminio, cualquier espesor. Cotiza hoy.",
  alternates: {
    canonical: "https://aamsa.com/servicios/corte-laser",
    languages: {
      es: "https://aamsa.com/servicios/corte-laser",
      en: "https://aamsa.com/en/services/laser-cutting",
    },
  },
  openGraph: {
    title: "Corte Laser CNC de Acero en Monterrey y Nuevo Leon | Aamsa",
    description:
      "Servicio de corte laser CNC en Monterrey y Guadalupe NL. Alta precision en acero al carbon, inoxidable y aluminio, cualquier espesor. Cotiza hoy.",
    url: "https://aamsa.com/servicios/corte-laser",
    images: [{ url: "https://aamsa.com/og/corte-laser.jpg" }],
    siteName: "Aamsa",
    type: "website",
    locale: "es_MX",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Corte laser CNC de acero",
  name: "Corte Laser CNC",
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
    'Servicio de corte laser CNC de alta precision en acero al carbon, inoxidable, aluminio, bronce y laton. Espesores de calibre 30 a 3/4". 8 equipos disponibles.',
};

const faqItems = [
  {
    question: "Que materiales pueden cortar con laser?",
    answer:
      "Acero al carbon, acero inoxidable, aluminio, bronce y laton, entre otros.",
  },
  {
    question: "Que espesores maneja el corte laser de Aamsa?",
    answer:
      'Desde calibre 30 hasta 3/4" de espesor, segun el equipo utilizado.',
  },
  {
    question: "Cual es la pieza maxima que pueden cortar?",
    answer: "Hasta 2.5 m de ancho por 24 m de largo.",
  },
  {
    question: "Ofrecen servicio de maquila si ya tengo el material?",
    answer:
      "Si, ofrecemos maquila de corte laser cuando el cliente aporta el material.",
  },
  {
    question: "Donde estan ubicados?",
    answer:
      "En Av. Benito Juarez Km 7.5, Col. Los Lermas, Guadalupe, Nuevo Leon, con cobertura en Monterrey y todo Nuevo Leon.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function CorteLaserPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <Navbar />
      <main>
        <ServiceHero
          eyebrow="Servicios"
          title="Corte Laser CNC de Acero en Monterrey"
          id="corte_laser_hero"
          image="/corte-laser.png"
          imageAlt="Equipo de corte laser CNC en planta Aamsa"
        />

        {/* Que es el corte con laser */}
        <section id="corte_laser_que_es" className="py-20 lg:py-28 bg-[#1B4375]">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <h2
              className="font-[family-name:var(--font-barlow)] font-black uppercase leading-tight text-white mb-8"
              style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
            >
              Que es el corte con laser?
            </h2>
            <div className="max-w-3xl">
              <p className="font-[family-name:var(--font-inter)] text-[#B0C4DE] leading-relaxed mb-6">
                El corte con laser es un proceso de division termico para el tratamiento de laminas y placas. El rayo laser se genera en una fuente laser (resonador) y se guia mediante espejos o una fibra transportadora hasta el cabezal de corte, donde se enfoca con una lente a un diametro menor y de mucha potencia. Al entrar en contacto con la placa, el rayo enfocado hace que el material se funda. Existen dos tipos de fuente laser: los laseres de CO2 y los laseres de fibra.
              </p>
              <p className="font-[family-name:var(--font-inter)] text-[#B0C4DE] leading-relaxed mb-8">
                <strong className="text-white">Materiales que trabajamos:</strong> acero al carbon, acero inoxidable, aluminio, bronce, laton, entre otros.
              </p>
              <div className="border-l-[3px] border-[#FF7F00] pl-6 py-2">
                <p className="font-[family-name:var(--font-inter)] text-white italic leading-relaxed">
                  El servicio que brindamos de corte laser es de la mas alta tecnologia, con un proceso automatizado de alta precision, obteniendo asi piezas con mejor calidad en su corte y tolerancia.
                </p>
              </div>
            </div>

            {/* Internal links */}
            <div className="mt-12 flex flex-wrap gap-3">
              <Link href="/productos/placa" className="font-[family-name:var(--font-inter)] text-sm text-[#FF7F00] hover:text-white border border-[#2261AE] hover:border-[#FF7F00]/40 px-4 py-2 transition-colors">
                Placa de acero en Monterrey
              </Link>
              <Link href="/servicios/corte-pantografo" className="font-[family-name:var(--font-inter)] text-sm text-[#FF7F00] hover:text-white border border-[#2261AE] hover:border-[#FF7F00]/40 px-4 py-2 transition-colors">
                Corte pantografo CNC para mayor espesor
              </Link>
            </div>
          </div>
        </section>

        {/* Equipos */}
        <section id="corte_laser_equipos" className="py-20 lg:py-28 bg-[#153460]">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <h2
              className="font-[family-name:var(--font-barlow)] font-black uppercase leading-tight text-white mb-12"
              style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
            >
              Contamos con 8 equipos de corte laser
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Laser CNC hasta 12,000 watts",
                  desc: 'Maquina de corte laser CNC de hasta 12,000 W x 2.5 m x 24 m. Espesores de corte de calibre 30 a 3/4".',
                },
                {
                  title: "Laser CNC hasta 4,000 watts",
                  desc: "Maquina de corte laser CNC de hasta 4,000 W x 2 m x 4 m. Espesores de calibre 30 a 1/2\". Cortatubos de hasta 6 m de largo y 160 mm de diametro.",
                },
                {
                  title: "Laser CNC hasta 4,400 watts",
                  desc: 'Maquinas de corte laser CNC de hasta 4,400 W x 2.5 m x 12 m. Cortando espesores desde calibre 30 hasta 5/8".',
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

        {/* Industrias */}
        <section id="corte_laser_industrias" className="py-20 lg:py-28 bg-[#1B4375]">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <h2
              className="font-[family-name:var(--font-barlow)] font-black uppercase leading-tight text-white mb-8"
              style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
            >
              Industrias que atendemos
            </h2>
            <div className="max-w-3xl">
              <p className="font-[family-name:var(--font-inter)] text-[#B0C4DE] leading-relaxed">
                Apoyamos a clientes de la industria metal-mecanica, automotriz, agroindustrial, alimenticia, petroquimica, medica, limpieza y arquitectonica, entre otras. Contamos con experiencia en exportaciones directas, virtuales y permisos de Sub-Maquilas IMMEX. Somos socios estrategicos de empresas nacionales, trasnacionales, extranjeras y personas fisicas. Trabajamos prototipos y producciones bajas, medianas y altas; cortamos piezas de hasta 2.5 m de ancho x 24 m de largo, en espesores de calibre 30 a 3/4&quot;. Tambien ofrecemos servicio de <strong className="text-white">maquila</strong> si el cliente cuenta con el material.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="corte_laser_faq" className="py-20 lg:py-28 bg-[#153460]">
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
          id="corte_laser_cta"
          headline="Solicita tu cotizacion de corte laser en Monterrey -- mas de 45 anos de experiencia industrial"
        />
      </main>
      <Footer />
    </>
  );
}
