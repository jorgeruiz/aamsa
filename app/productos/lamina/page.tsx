import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ServiceHero } from "@/components/servicios/ServiceHero";
import { ServiceCta } from "@/components/servicios/ServiceCta";
import { FaqAccordion } from "@/components/servicios/FaqAccordion";
import { JsonLd } from "@/components/servicios/JsonLd";

export const metadata: Metadata = {
  title: "Lamina de Acero en Varios Calibres en Nuevo Leon | Aamsa",
  description:
    "Venta de lamina de acero rolado en caliente, en frio, antiderrapante y A-572 GR 50 en Monterrey y Guadalupe NL. Disponibilidad inmediata y corte a la medida.",
  alternates: {
    canonical: "https://aamsa.com/productos/lamina",
    languages: {
      es: "https://aamsa.com/productos/lamina",
      en: "https://aamsa.com/en/products/steel-sheet",
    },
  },
  openGraph: {
    title: "Lamina de Acero en Varios Calibres en Nuevo Leon | Aamsa",
    description:
      "Venta de lamina de acero rolado en caliente, en frio, antiderrapante y A-572 GR 50 en Monterrey y Guadalupe NL. Disponibilidad inmediata y corte a la medida.",
    url: "https://aamsa.com/productos/lamina",
    images: [{ url: "https://aamsa.com/og/lamina.jpg" }],
    siteName: "Aamsa",
    type: "website",
    locale: "es_MX",
  },
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Lamina de Acero",
  description:
    "Lamina de acero rolado en caliente, rolado en frio, antiderrapante y A-572 GR 50 en varios calibres. Disponibilidad inmediata y corte a la medida.",
  category: "Acero estructural",
  brand: { "@type": "Brand", name: "Aamsa" },
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    priceCurrency: "MXN",
    seller: {
      "@type": "Organization",
      name: "Aamsa -- Abastecedora de Aceros y Maquilas S.A. de C.V.",
    },
  },
};

const faqItems = [
  {
    question: "Que tipos de lamina de acero venden?",
    answer:
      "Rolado en caliente, rolado en frio, antiderrapante y A-572 GR 50.",
  },
  {
    question: "Que espesores maneja la lamina antiderrapante?",
    answer: 'Desde calibre C-14 hasta 1/2" de espesor.',
  },
  {
    question: "Ofrecen corte a la medida de lamina?",
    answer:
      "Si, vendemos desde una lamina hasta mayoreo, con servicio de corte a la medida.",
  },
  {
    question: "Para que se usa la lamina rolado en caliente?",
    answer:
      "Fabricacion de ruedas, piezas automotrices, tubos, edificios, puentes, ferrocarriles y chasis, entre otros.",
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

const antiderrapanteData = [
  { calibre: '1/4"', pulg: "0.250", mm: "6.35", kgm2: "53.35", c3x8: "119.03", c3x10: "148.78", c4x8: "158.71", c4x10: "198.38" },
  { calibre: '3/16"', pulg: "0.188", mm: "4.75", kgm2: "39.96", c3x8: "89.15", c3x10: "111.44", c4x8: "118.87", c4x10: "148.59" },
  { calibre: "10", pulg: "0.135", mm: "3.42", kgm2: "29.45", c3x8: "65.70", c3x10: "82.13", c4x8: "87.61", c4x10: "109.51" },
  { calibre: '1/8"', pulg: "0.125", mm: "3.18", kgm2: "26.67", c3x8: "59.50", c3x10: "78.38", c4x8: "79.33", c4x10: "99.17" },
  { calibre: "11", pulg: "0.120", mm: "3.04", kgm2: "26.16", c3x8: "58.36", c3x10: "72.95", c4x8: "77.82", c4x10: "97.27" },
  { calibre: "12", pulg: "0.105", mm: "2.66", kgm2: "22.86", c3x8: "51.00", c3x10: "63.75", c4x8: "68.05", c4x10: "85.01" },
  { calibre: "14", pulg: "0.075", mm: "1.90", kgm2: "16.77", c3x8: "37.41", c3x10: "46.77", c4x8: "49.88", c4x10: "62.36" },
];

export default function LaminaPage() {
  return (
    <>
      <JsonLd data={productSchema} />
      <JsonLd data={faqSchema} />
      <Navbar />
      <main>
        <ServiceHero
          eyebrow="Productos"
          title="Lamina de Acero en Varios Calibres en Monterrey"
          id="lamina_hero"
          image="/planta-interior.png"
          imageAlt="Lamina de acero en planta Aamsa"
        />

        {/* Intro */}
        <section className="py-16 bg-[#0F2440]">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <p className="font-[family-name:var(--font-inter)] text-lg text-[#B0C4DE] leading-relaxed max-w-3xl">
              Venta de laminas de acero rolado en caliente, rolado en frio y antiderrapante, con disponibilidad inmediata y servicio de corte a la medida en Nuevo Leon.
            </p>
          </div>
        </section>

        {/* Lamina Antiderrapante con tabla */}
        <section id="lamina_antiderrapante" className="py-20 lg:py-28 bg-[#0A1A2E]">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <h2
              className="font-[family-name:var(--font-barlow)] font-black uppercase leading-tight text-white mb-8"
              style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
            >
              Lamina Antiderrapante
            </h2>
            <p className="font-[family-name:var(--font-inter)] text-[#B0C4DE] leading-relaxed mb-10 max-w-3xl">
              Venta de lamina antiderrapante desde C-14 hasta 1/2&quot; de espesor.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[700px] border-collapse">
                <thead>
                  <tr className="border-b-2 border-[#FF7F00]">
                    {["Calibre", "Pulg.", "mm", "kg/m2", "3x8'", "3'x10'", "4x8'", "4'x10'"].map((h) => (
                      <th
                        key={h}
                        className="font-[family-name:var(--font-barlow)] text-xs font-bold uppercase tracking-wider text-[#FF7F00] text-left py-3 px-3"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {antiderrapanteData.map((row) => (
                    <tr key={row.calibre} className="border-b border-[#1A4070] hover:bg-[#0F2440]/50">
                      <td className="font-[family-name:var(--font-inter)] text-sm text-white py-3 px-3 font-medium">{row.calibre}</td>
                      <td className="font-[family-name:var(--font-inter)] text-sm text-[#B0C4DE] py-3 px-3">{row.pulg}</td>
                      <td className="font-[family-name:var(--font-inter)] text-sm text-[#B0C4DE] py-3 px-3">{row.mm}</td>
                      <td className="font-[family-name:var(--font-inter)] text-sm text-[#B0C4DE] py-3 px-3">{row.kgm2}</td>
                      <td className="font-[family-name:var(--font-inter)] text-sm text-[#B0C4DE] py-3 px-3">{row.c3x8}</td>
                      <td className="font-[family-name:var(--font-inter)] text-sm text-[#B0C4DE] py-3 px-3">{row.c3x10}</td>
                      <td className="font-[family-name:var(--font-inter)] text-sm text-[#B0C4DE] py-3 px-3">{row.c4x8}</td>
                      <td className="font-[family-name:var(--font-inter)] text-sm text-[#B0C4DE] py-3 px-3">{row.c4x10}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Rolado en frio */}
        <section id="lamina_rolado_frio" className="py-20 lg:py-28 bg-[#0F2440]">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <h2
              className="font-[family-name:var(--font-barlow)] font-black uppercase leading-tight text-white mb-8"
              style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
            >
              Lamina Rolado en Frio
            </h2>
            <div className="max-w-3xl">
              <p className="font-[family-name:var(--font-inter)] text-[#B0C4DE] leading-relaxed">
                El acero rolado en frio se obtiene de material rolado en caliente sometido a un proceso de laminacion en frio para reducir su espesor y obtener mayor aptitud al conformado y mejor acabado superficial. Es apto para maquinaria y equipo, perfiles y tuberia, tambores y envases, industria automotriz y otros usos industriales.
              </p>
            </div>
          </div>
        </section>

        {/* Rolado en caliente */}
        <section id="lamina_rolado_caliente" className="py-20 lg:py-28 bg-[#0A1A2E]">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <h2
              className="font-[family-name:var(--font-barlow)] font-black uppercase leading-tight text-white mb-8"
              style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
            >
              Lamina Rolado en Caliente
            </h2>
            <div className="max-w-3xl">
              <p className="font-[family-name:var(--font-inter)] text-[#B0C4DE] leading-relaxed mb-8">
                Damos servicio de venta desde una lamina hasta mayoreo, ademas de corte a la medida. El acero rolado en caliente sin decapar es el producto primario del proceso productivo: se recalienta el planchon para producir rollos de acero con espesores desde 0.075&quot; hasta 0.625&quot;.
              </p>
              <div className="border-l-[3px] border-[#FF7F00] pl-6 py-2">
                <p className="font-[family-name:var(--font-inter)] text-white italic leading-relaxed">
                  Los usos mas comunes son fabricacion de ruedas, piezas automotrices y tubos, asi como construccion de edificios, puentes, ferrocarriles y chasis de automoviles y camiones, entre otros.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* A-572 GR 50 */}
        <section id="lamina_a572" className="py-20 lg:py-28 bg-[#0F2440]">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <h2
              className="font-[family-name:var(--font-barlow)] font-black uppercase leading-tight text-white mb-8"
              style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
            >
              Lamina A-572 GR 50
            </h2>
            <div className="max-w-3xl">
              <p className="font-[family-name:var(--font-inter)] text-[#B0C4DE] leading-relaxed mb-8">
                La lamina A572 GR 50 es una especificacion normalizada para acero estructural de alta resistencia y baja aleacion de columbio-vanadio.
              </p>
              <div className="border-l-[3px] border-[#FF7F00] pl-6 py-2">
                <p className="font-[family-name:var(--font-inter)] text-white italic leading-relaxed">
                  La resistencia a la corrosion atmosferica es la misma de las placas de acero al carbon.
                </p>
              </div>
            </div>
            {/* Internal links */}
            <div className="mt-12 flex flex-wrap gap-3">
              <Link href="/servicios/corte-laser" className="font-[family-name:var(--font-inter)] text-sm text-[#FF7F00] hover:text-white border border-[#1A4070] hover:border-[#FF7F00]/40 px-4 py-2 transition-colors">
                Corte laser de lamina
              </Link>
              <Link href="/servicios/corte-guillotina" className="font-[family-name:var(--font-inter)] text-sm text-[#FF7F00] hover:text-white border border-[#1A4070] hover:border-[#FF7F00]/40 px-4 py-2 transition-colors">
                Corte guillotina de lamina
              </Link>
              <Link href="/servicios/doblez-cnc" className="font-[family-name:var(--font-inter)] text-sm text-[#FF7F00] hover:text-white border border-[#1A4070] hover:border-[#FF7F00]/40 px-4 py-2 transition-colors">
                Doblez CNC de lamina
              </Link>
              <Link href="/servicios/rolado" className="font-[family-name:var(--font-inter)] text-sm text-[#FF7F00] hover:text-white border border-[#1A4070] hover:border-[#FF7F00]/40 px-4 py-2 transition-colors">
                Rolado de lamina
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="lamina_faq" className="py-20 lg:py-28 bg-[#0A1A2E]">
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
          id="lamina_cta"
          headline="Solicita tu cotizacion de lamina de acero en Monterrey"
        />
      </main>
      <Footer />
    </>
  );
}
