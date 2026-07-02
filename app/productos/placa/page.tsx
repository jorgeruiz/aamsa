import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ServiceHero } from "@/components/servicios/ServiceHero";
import { ServiceCta } from "@/components/servicios/ServiceCta";
import { FaqAccordion } from "@/components/servicios/FaqAccordion";
import { JsonLd } from "@/components/servicios/JsonLd";

export const metadata: Metadata = {
  title: "Placa de Acero en Diferentes Espesores en Nuevo Leon | Aamsa",
  description:
    "Venta de placa y planchones de acero A-36, AR-400, SAE 1045, 4140, Hardox y Strenx en Monterrey y Guadalupe NL. Inventario inmediato y corte a la medida.",
  alternates: {
    canonical: "https://aamsa.com/productos/placa",
    languages: {
      es: "https://aamsa.com/productos/placa",
      en: "https://aamsa.com/en/products/steel-plate",
    },
  },
  openGraph: {
    title: "Placa de Acero en Diferentes Espesores en Nuevo Leon | Aamsa",
    description:
      "Venta de placa y planchones de acero A-36, AR-400, SAE 1045, 4140, Hardox y Strenx en Monterrey y Guadalupe NL. Inventario inmediato y corte a la medida.",
    url: "https://aamsa.com/productos/placa",
    images: [{ url: "https://aamsa.com/og/placa.jpg" }],
    siteName: "Aamsa",
    type: "website",
    locale: "es_MX",
  },
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Placa de Acero",
  description:
    "Placa y planchones de acero A-36, AR-400, SAE 1045, SAE 4140, A572 GR-50, Hardox y Strenx en diferentes espesores. Inventario inmediato y corte a la medida.",
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
    question: "Que grados de placa de acero manejan?",
    answer:
      "A-36, AR-400, SAE 1045, SAE 4140, A572 GR-50, Hardox y Strenx, entre otros.",
  },
  {
    question: "Que espesores de planchon venden?",
    answer:
      'Desde 3" hasta 8 3/4" de espesor; los mayores a 5" se importan, con certificado de calidad de molino.',
  },
  {
    question: "Ofrecen corte de placa a la medida?",
    answer:
      "Si, ademas de placas completas ofrecemos corte y venta de acero a la medida.",
  },
  {
    question: "Que placa conviene para resistencia a la abrasion?",
    answer:
      "Placa AR-400 (dureza 360-444 BHN) o Hardox, disenadas para resistir el desgaste.",
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

/* Full 23-row table for Placa Ancha Orilla Recortada */
const placaData = [
  { pulg: '3/16"', mm: "4.78", kgm2: "37.84", kgpie2: "3.52", c5x20: "352", c6x20: "422", c7x20: "492", c8x20: "562", c10x20: "703" },
  { pulg: '1/4"', mm: "6.35", kgm2: "50.38", kgpie2: "4.68", c5x20: "468", c6x20: "562", c7x20: "655", c8x20: "749", c10x20: "936" },
  { pulg: '5/16"', mm: "7.94", kgm2: "62.93", kgpie2: "5.85", c5x20: "585", c6x20: "702", c7x20: "819", c8x20: "936", c10x20: "1,170" },
  { pulg: '3/8"', mm: "9.53", kgm2: "75.47", kgpie2: "7.01", c5x20: "701", c6x20: "842", c7x20: "982", c8x20: "1,123", c10x20: "1,403" },
  { pulg: '1/2"', mm: "12.70", kgm2: "100.77", kgpie2: "9.36", c5x20: "936", c6x20: "1,123", c7x20: "1,311", c8x20: "1,498", c10x20: "1,872" },
  { pulg: '5/8"', mm: "15.88", kgm2: "125.96", kgpie2: "11.70", c5x20: "1,170", c6x20: "1,404", c7x20: "1,638", c8x20: "1,872", c10x20: "2,340" },
  { pulg: '3/4"', mm: "19.05", kgm2: "151.15", kgpie2: "14.04", c5x20: "1,404", c6x20: "1,685", c7x20: "1,966", c8x20: "2,247", c10x20: "2,808" },
  { pulg: '7/8"', mm: "22.23", kgm2: "176.35", kgpie2: "16.38", c5x20: "1,638", c6x20: "1,966", c7x20: "2,293", c8x20: "2,621", c10x20: "3,276" },
  { pulg: '1"', mm: "25.40", kgm2: "201.53", kgpie2: "18.72", c5x20: "1,872", c6x20: "2,247", c7x20: "2,621", c8x20: "2,996", c10x20: "3,745" },
  { pulg: '1 1/8"', mm: "28.58", kgm2: "226.73", kgpie2: "21.07", c5x20: "2,107", c6x20: "2,528", c7x20: "2,949", c8x20: "3,370", c10x20: "4,213" },
  { pulg: '1 1/4"', mm: "31.75", kgm2: "251.92", kgpie2: "23.41", c5x20: "2,341", c6x20: "2,809", c7x20: "3,277", c8x20: "3,745", c10x20: "4,681" },
  { pulg: '1 3/8"', mm: "34.93", kgm2: "277.11", kgpie2: "25.75", c5x20: "2,575", c6x20: "3,089", c7x20: "3,604", c8x20: "4,119", c10x20: "5,149" },
  { pulg: '1 1/2"', mm: "38.10", kgm2: "302.30", kgpie2: "28.09", c5x20: "2,809", c6x20: "3,370", c7x20: "3,932", c8x20: "4,494", c10x20: "5,617" },
  { pulg: '1 5/8"', mm: "41.28", kgm2: "327.49", kgpie2: "30.43", c5x20: "3,043", c6x20: "3,651", c7x20: "4,260", c8x20: "4,868", c10x20: "6,085" },
  { pulg: '1 3/4"', mm: "44.45", kgm2: "352.69", kgpie2: "32.77", c5x20: "3,277", c6x20: "3,932", c7x20: "4,587", c8x20: "5,243", c10x20: "6,554" },
  { pulg: '2"', mm: "50.80", kgm2: "403.07", kgpie2: "37.45", c5x20: "3,745", c6x20: "4,494", c7x20: "5,242", c8x20: "5,991", c10x20: "7,489" },
  { pulg: '2 1/4"', mm: "57.15", kgm2: "453.45", kgpie2: "42.13", c5x20: "4,213", c6x20: "5,055", c7x20: "5,898", c8x20: "6,740", c10x20: "8,425" },
  { pulg: '2 1/2"', mm: "63.50", kgm2: "503.84", kgpie2: "46.81", c5x20: "4,681", c6x20: "5,617", c7x20: "6,553", c8x20: "7,489", c10x20: "9,361" },
  { pulg: '2 3/4"', mm: "69.85", kgm2: "554.22", kgpie2: "51.49", c5x20: "5,149", c6x20: "6,179", c7x20: "7,208", c8x20: "8,238", c10x20: "10,298" },
  { pulg: '3"', mm: "76.20", kgm2: "604.60", kgpie2: "56.17", c5x20: "5,617", c6x20: "6,740", c7x20: "7,864", c8x20: "8,987", c10x20: "11,234" },
  { pulg: '3 1/2"', mm: "88.90", kgm2: "705.37", kgpie2: "65.54", c5x20: "6,554", c6x20: "7,864", c7x20: "9,175", c8x20: "10,485", c10x20: "13,106" },
  { pulg: '4"', mm: "101.60", kgm2: "806.14", kgpie2: "74.90", c5x20: "7,490", c6x20: "8,988", c7x20: "10,486", c8x20: "11,983", c10x20: "14,979" },
  { pulg: '5"', mm: "127.00", kgm2: "1,007.67", kgpie2: "93.63", c5x20: "9,363", c6x20: "11,235", c7x20: "13,108", c8x20: "14,980", c10x20: "18,725" },
];

const grades = [
  {
    title: "Placa A-36",
    desc: "El acero A36 tiene densidad de 7,860 kg/m3 (0.28 lb/in3). En espesores menores de 8\" el limite de fluencia minimo es 250 MPa (36 ksi) y el de rotura 400 MPa (58 ksi); para espesores mayores, la fluencia minima es 220 MPa (32 ksi). Por su composicion quimica simple, es facil de soldar, lo que lo hace atractivo para construccion.",
  },
  {
    title: "Planchon",
    desc: 'Venta de planchon de acero desde 3" hasta 8 3/4" de espesor. En el mercado nacional solo se fabrican planchones hasta 5"; los mas gruesos se importan. Contamos con certificado de calidad de molino.',
  },
  {
    title: "Placa SAE 1045",
    desc: "Compuesta principalmente de carbono. Conocida por su buena resistencia y propiedades de impacto. Facil de soldar con cualquier tipo de soplete, ideal para constructoras.",
  },
  {
    title: "Placa SAE 4140",
    desc: "Contiene cromo, molibdeno y hierro, proporcionando dureza uniforme y alta resistencia. Facil de mecanizar y responde bien al tratamiento termico.",
  },
  {
    title: "Placa Comercial",
    desc: "Acero economico sin certificado de calidad. Util para trabajos que no requieren alta calidad en el material.",
  },
  {
    title: "Placa Hardox",
    desc: "Placa plegable y soldable resistente a la abrasion, ideal para aplicaciones de alta resistencia al desgaste.",
  },
  {
    title: "Placa Strenx",
    desc: "Placa de acero fino, resistente y de alta prestacion que hace los productos mas ligeros y seguros.",
  },
  {
    title: "Placa AR-400",
    desc: "Acero de aleacion alto en carbono para aplicaciones resistentes a la abrasion y desgaste. Dureza de 360 a 444 BHN.",
  },
];

export default function PlacaPage() {
  return (
    <>
      <JsonLd data={productSchema} />
      <JsonLd data={faqSchema} />
      <Navbar />
      <main>
        <ServiceHero
          eyebrow="Productos"
          title="Placa de Acero en Diferentes Espesores en Monterrey"
          id="placa_hero"
          image="/planta-general.png"
          imageAlt="Placa de acero en planta Aamsa"
        />

        {/* Intro */}
        <section className="py-16 bg-[#0F2440]">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <p className="font-[family-name:var(--font-inter)] text-lg text-[#B0C4DE] leading-relaxed max-w-3xl">
              En Aamsa contamos con venta de placa y planchones de acero. Manejamos varios grados como Acero A-36, AR-400, SAE 1045, SAE 4140, A572 GR-50, Hardox y Strenx, entre otros, con un gran inventario para entrega inmediata en Nuevo Leon.
            </p>
          </div>
        </section>

        {/* Corte a la medida */}
        <section id="placa_corte_medida" className="py-20 lg:py-28 bg-[#0A1A2E]">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <h2
              className="font-[family-name:var(--font-barlow)] font-black uppercase leading-tight text-white mb-8"
              style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
            >
              Servicio de corte a la medida
            </h2>
            <div className="max-w-3xl">
              <p className="font-[family-name:var(--font-inter)] text-[#B0C4DE] leading-relaxed">
                Ademas de vender las placas completas, ofrecemos el servicio de corte o venta de acero a la medida de tu requerimiento.
              </p>
            </div>
          </div>
        </section>

        {/* Tabla completa 23 filas */}
        <section id="placa_tabla" className="py-20 lg:py-28 bg-[#0F2440]">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <h2
              className="font-[family-name:var(--font-barlow)] font-black uppercase leading-tight text-white mb-10"
              style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
            >
              Placa Ancha con Orilla Recortada
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[800px] border-collapse">
                <thead>
                  <tr className="border-b-2 border-[#FF7F00]">
                    {["Pulg.", "mm", "kg/m2", "kg/pie2", "5'x20'", "6'x20'", "7'x20'", "8'x20'", "10x20'"].map((h) => (
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
                  {placaData.map((row) => (
                    <tr key={row.pulg} className="border-b border-[#1A4070] hover:bg-[#0A1A2E]/50">
                      <td className="font-[family-name:var(--font-inter)] text-sm text-white py-3 px-3 font-medium">{row.pulg}</td>
                      <td className="font-[family-name:var(--font-inter)] text-sm text-[#B0C4DE] py-3 px-3">{row.mm}</td>
                      <td className="font-[family-name:var(--font-inter)] text-sm text-[#B0C4DE] py-3 px-3">{row.kgm2}</td>
                      <td className="font-[family-name:var(--font-inter)] text-sm text-[#B0C4DE] py-3 px-3">{row.kgpie2}</td>
                      <td className="font-[family-name:var(--font-inter)] text-sm text-[#B0C4DE] py-3 px-3">{row.c5x20}</td>
                      <td className="font-[family-name:var(--font-inter)] text-sm text-[#B0C4DE] py-3 px-3">{row.c6x20}</td>
                      <td className="font-[family-name:var(--font-inter)] text-sm text-[#B0C4DE] py-3 px-3">{row.c7x20}</td>
                      <td className="font-[family-name:var(--font-inter)] text-sm text-[#B0C4DE] py-3 px-3">{row.c8x20}</td>
                      <td className="font-[family-name:var(--font-inter)] text-sm text-[#B0C4DE] py-3 px-3">{row.c10x20}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Grados de placa */}
        <section id="placa_grados" className="py-20 lg:py-28 bg-[#0A1A2E]">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <h2
              className="font-[family-name:var(--font-barlow)] font-black uppercase leading-tight text-white mb-12"
              style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
            >
              Grados de placa
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {grades.map((grade) => (
                <div
                  key={grade.title}
                  className="bg-[#0F2440] border border-[#1A4070] border-t-[3px] border-t-[#FF7F00] p-8"
                >
                  <h3 className="font-[family-name:var(--font-barlow)] text-lg font-bold uppercase text-white mb-4">
                    {grade.title}
                  </h3>
                  <p className="font-[family-name:var(--font-inter)] text-sm text-[#B0C4DE] leading-relaxed">
                    {grade.desc}
                  </p>
                </div>
              ))}
            </div>
            {/* Internal links */}
            <div className="mt-12 flex flex-wrap gap-3">
              <Link href="/servicios/corte-pantografo" className="font-[family-name:var(--font-inter)] text-sm text-[#FF7F00] hover:text-white border border-[#1A4070] hover:border-[#FF7F00]/40 px-4 py-2 transition-colors">
                Corte pantografo de placa gruesa
              </Link>
              <Link href="/servicios/corte-plasma-cnc" className="font-[family-name:var(--font-inter)] text-sm text-[#FF7F00] hover:text-white border border-[#1A4070] hover:border-[#FF7F00]/40 px-4 py-2 transition-colors">
                Corte plasma CNC de placa
              </Link>
              <Link href="/servicios/rolado" className="font-[family-name:var(--font-inter)] text-sm text-[#FF7F00] hover:text-white border border-[#1A4070] hover:border-[#FF7F00]/40 px-4 py-2 transition-colors">
                Rolado de placa
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="placa_faq" className="py-20 lg:py-28 bg-[#0F2440]">
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
          id="placa_cta"
          headline="Solicita tu cotizacion de placa de acero en Monterrey"
        />
      </main>
      <Footer />
    </>
  );
}
