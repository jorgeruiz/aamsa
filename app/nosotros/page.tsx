import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { NosotrosContent } from "@/components/nosotros/NosotrosContent";

export const metadata: Metadata = {
  title: "Nosotros — Historia, Misión y Valores | Aamsa",
  description:
    "Desde 1981 transformando acero con tecnología de vanguardia. Conoce la historia, misión, visión y valores de Aamsa, pioneros en corte láser CNC en México.",
  alternates: {
    canonical: "https://aamsa.com/nosotros",
  },
  openGraph: {
    title: "Nosotros — Historia, Misión y Valores | Aamsa",
    description:
      "Desde 1981 transformando acero con tecnología de vanguardia. Conoce la historia, misión, visión y valores de Aamsa.",
    url: "https://aamsa.com/nosotros",
    siteName: "Aamsa",
    type: "website",
    locale: "es_MX",
  },
};

export default function NosotrosPage() {
  return (
    <>
      <Navbar />
      <main>
        <NosotrosContent />
      </main>
      <Footer />
    </>
  );
}
