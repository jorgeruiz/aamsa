import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ServiceHero } from "@/components/servicios/ServiceHero";
import { ServiceCta } from "@/components/servicios/ServiceCta";
import { FaqAccordion } from "@/components/servicios/FaqAccordion";
import { JsonLd } from "@/components/servicios/JsonLd";

export const metadata: Metadata = {
  title: "Joists y Joist Girders de Acero en Nuevo León | Aamsa",
  description:
    "Fabricación de Joists y Joist Girders de acero certificados por SJI. Vigas de alma abierta y cabrillas para techos y entrepisos. Proyectos en México y EE.UU.",
  alternates: {
    canonical: "https://aamsa.com/productos/joists-girders",
    languages: {
      es: "https://aamsa.com/productos/joists-girders",
      en: "https://aamsa.com/en/products/joists-girders",
    },
  },
  openGraph: {
    title: "Joists y Joist Girders de Acero en Nuevo León | Aamsa",
    description:
      "Fabricación de Joists y Joist Girders de acero certificados por SJI. Vigas de alma abierta y cabrillas para techos y entrepisos. Proyectos en México y EE.UU.",
    url: "https://aamsa.com/productos/joists-girders",
    images: [{ url: "https://aamsa.com/og/joists-girders.jpg" }],
    siteName: "Aamsa",
    type: "website",
    locale: "es_MX",
  },
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Joists y Joist Girders de Acero",
  description:
    "Vigas de alma abierta (Joists) y cabrillas (Joist Girders) de acero fabricados conforme a estándares SJI. Soluciones estructurales para techos y entrepisos en proyectos comerciales, industriales e institucionales.",
  category: "Acero estructural",
  brand: { "@type": "Brand", name: "Aamsa" },
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    priceCurrency: "MXN",
    seller: {
      "@type": "Organization",
      name: "Aamsa — Abastecedora de Aceros y Maquilas S.A. de C.V.",
    },
  },
};

const faqItems = [
  {
    question: "¿Qué son los Joists de acero?",
    answer:
      "Son vigas de alma abierta que funcionan como elementos estructurales secundarios, soportando las cargas de techos y entrepisos y transmitiéndolas hacia los elementos estructurales principales.",
  },
  {
    question: "¿Qué son los Joist Girders?",
    answer:
      "Son cabrillas de acero que funcionan como elementos estructurales principales, diseñados para recibir cargas concentradas provenientes de los Joists y transmitirlas hacia columnas u otros elementos de soporte.",
  },
  {
    question: "¿Cuentan con certificación para fabricación de Joists?",
    answer:
      "Sí, en alianza con GA Steel contamos con la certificación del Steel Joist Institute (SJI), garantizando que nuestros productos cumplen con los estándares de la industria.",
  },
  {
    question: "¿Para qué tipo de proyectos se usan los Joists y Joist Girders?",
    answer:
      "Son ideales para proyectos comerciales, industriales e institucionales que requieren sistemas de techos y entrepisos eficientes, con espacio para el paso de instalaciones mecánicas, eléctricas y de plomería.",
  },
  {
    question: "¿Atienden proyectos fuera de México?",
    answer:
      "Sí, fabricamos y entregamos Joists y Joist Girders para proyectos en México y Estados Unidos.",
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

const galleryImages = [
  {
    src: "/joists-almacen-aamsa.jpeg",
    alt: "Joists de acero terminados en almacén de planta Aamsa",
  },
  {
    src: "/joists-apilados-aamsa.jpeg",
    alt: "Joists de alma abierta apilados listos para embarque en Aamsa",
  },
  {
    src: "/joists-produccion-aamsa.jpeg",
    alt: "Línea de producción de Joists de acero en planta Aamsa",
  },
  {
    src: "/joist-girder-planta-aamsa.jpeg",
    alt: "Joist Girder de gran formato en nave industrial Aamsa",
  },
  {
    src: "/joists-embarque-aamsa.jpeg",
    alt: "Joists y Joist Girders cargados en tráiler para entrega",
  },
  {
    src: "/joists-carga-trailer-aamsa.jpeg",
    alt: "Cabrillas de acero listas para transporte en planta Aamsa",
  },
];

export default function JoistsGirdersPage() {
  return (
    <>
      <JsonLd data={productSchema} />
      <JsonLd data={faqSchema} />
      <Navbar />
      <main>
        <ServiceHero
          eyebrow="Productos"
          title="Joists y Joist Girders de Acero"
          id="joists_girders_hero"
          image="/joists-almacen-aamsa.jpeg"
          imageAlt="Joists de acero de alma abierta fabricados en planta Aamsa Nuevo León"
        />

        {/* Intro */}
        <section className="py-16 bg-[#1B4375]">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
            <p className="font-[family-name:var(--font-inter)] text-lg text-[#B0C4DE] leading-relaxed max-w-3xl">
              Los Joists y Joist Girders de acero son elementos estructurales de alma abierta diseñados para proporcionar resistencia, eficiencia y flexibilidad en sistemas de techos y entrepisos. Su configuración permite un uso eficiente del acero y facilita el paso de instalaciones mecánicas, eléctricas y de plomería dentro de la estructura.
            </p>
          </div>
        </section>

        {/* Alianza GA Steel + SJI */}
        <section id="joists_girders_alianza" className="py-20 lg:py-28 bg-[#153460]">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
            <h2
              className="font-[family-name:var(--font-barlow)] font-black uppercase leading-tight text-white mb-8"
              style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
            >
              Fabricación certificada SJI
            </h2>
            <div className="max-w-3xl">
              <div className="border-l-[3px] border-[#FF7F00] pl-6 py-2 mb-8">
                <p className="font-[family-name:var(--font-inter)] text-white italic leading-relaxed">
                  AAMSA, en alianza con GA Steel, fabrica vigas de alma abierta y cabrillas de acero de alta calidad, con precisión y de acuerdo con los estándares de la industria.
                </p>
              </div>
              <p className="font-[family-name:var(--font-inter)] text-[#B0C4DE] leading-relaxed">
                Contamos con la certificación del <strong className="text-white">Steel Joist Institute (SJI)</strong>, ofreciendo soluciones estructurales confiables para proyectos en México y Estados Unidos. Cada pieza se diseña y fabrica conforme a las especificaciones de ingeniería de cada proyecto.
              </p>
            </div>
          </div>
        </section>

        {/* Joists */}
        <section id="joists_girders_joists" className="py-20 lg:py-28 bg-[#1B4375]">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2
                  className="font-[family-name:var(--font-barlow)] font-black uppercase leading-tight text-white mb-8"
                  style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
                >
                  Joists — Vigas de Alma Abierta
                </h2>
                <p className="font-[family-name:var(--font-inter)] text-[#B0C4DE] leading-relaxed mb-6">
                  Los Joists funcionan principalmente como <strong className="text-white">elementos estructurales secundarios</strong>, soportando las cargas de techos y entrepisos y transmitiéndolas hacia los elementos estructurales principales.
                </p>
                <ul className="space-y-3">
                  {[
                    "Soporte eficiente para sistemas de techo y entrepiso",
                    "Configuración de alma abierta para paso de instalaciones",
                    "Uso optimizado de acero para reducir peso estructural",
                    "Ideal para proyectos comerciales, industriales e institucionales",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="block w-1.5 h-1.5 bg-[#FF7F00] rounded-full mt-2 flex-shrink-0" />
                      <span className="font-[family-name:var(--font-inter)] text-sm text-[#B0C4DE] leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative h-80 lg:h-96 overflow-hidden">
                <Image
                  src="/joists-produccion-aamsa.jpeg"
                  alt="Línea de producción de Joists de acero en planta Aamsa"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Joist Girders */}
        <section id="joists_girders_cabrillas" className="py-20 lg:py-28 bg-[#153460]">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-80 lg:h-96 overflow-hidden order-2 lg:order-1">
                <Image
                  src="/joist-girder-planta-aamsa.jpeg"
                  alt="Joist Girder de gran formato en nave industrial Aamsa"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h2
                  className="font-[family-name:var(--font-barlow)] font-black uppercase leading-tight text-white mb-8"
                  style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
                >
                  Joist Girders — Cabrillas
                </h2>
                <p className="font-[family-name:var(--font-inter)] text-[#B0C4DE] leading-relaxed mb-6">
                  Los Joist Girders son <strong className="text-white">elementos estructurales principales</strong> diseñados para recibir cargas concentradas provenientes de los Joists y transmitirlas hacia columnas u otros elementos de soporte.
                </p>
                <ul className="space-y-3">
                  {[
                    "Elemento estructural principal para grandes claros",
                    "Recibe y distribuye cargas concentradas de Joists",
                    "Fabricación a la medida según especificaciones de ingeniería",
                    "Solución eficiente para naves industriales y edificios comerciales",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="block w-1.5 h-1.5 bg-[#FF7F00] rounded-full mt-2 flex-shrink-0" />
                      <span className="font-[family-name:var(--font-inter)] text-sm text-[#B0C4DE] leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Galería */}
        <section id="joists_girders_galeria" className="py-20 lg:py-28 bg-[#1B4375]">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
            <h2
              className="font-[family-name:var(--font-barlow)] font-black uppercase leading-tight text-white mb-12"
              style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
            >
              Ingeniería, precisión y resistencia
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {galleryImages.map((img) => (
                <div key={img.src} className="relative h-56 lg:h-64 overflow-hidden group">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1B4375]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>

            {/* Internal links */}
            <div className="mt-12 flex flex-wrap gap-3">
              <Link href="/productos/placa" className="font-[family-name:var(--font-inter)] text-sm text-[#FF7F00] hover:text-white border border-[#2261AE] hover:border-[#FF7F00]/40 px-4 py-2 transition-colors">
                Placa de acero para proyectos estructurales
              </Link>
              <Link href="/servicios/corte-laser" className="font-[family-name:var(--font-inter)] text-sm text-[#FF7F00] hover:text-white border border-[#2261AE] hover:border-[#FF7F00]/40 px-4 py-2 transition-colors">
                Corte láser CNC de acero
              </Link>
              <Link href="/servicios/doblez-cnc" className="font-[family-name:var(--font-inter)] text-sm text-[#FF7F00] hover:text-white border border-[#2261AE] hover:border-[#FF7F00]/40 px-4 py-2 transition-colors">
                Doblez CNC de alta capacidad
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="joists_girders_faq" className="py-20 lg:py-28 bg-[#153460]">
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
          id="joists_girders_cta"
          headline="Solicita tu cotización de Joists y Joist Girders"
        />
      </main>
      <Footer />
    </>
  );
}
