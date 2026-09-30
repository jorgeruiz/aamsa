import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ContactoContent } from "@/components/contacto/ContactoContent";

export const metadata: Metadata = {
  title: "Contacto — Cotiza tu Proyecto de Acero | Aamsa",
  description:
    "Contacta a Aamsa para cotizar servicios de corte láser, plasma CNC, doblez y más. WhatsApp, teléfono, email o visítanos en Guadalupe, Nuevo León.",
  alternates: {
    canonical: "https://aamsa.com/contacto",
  },
  openGraph: {
    title: "Contacto — Cotiza tu Proyecto de Acero | Aamsa",
    description:
      "Contacta a Aamsa para cotizar servicios de corte láser, plasma CNC, doblez y más.",
    url: "https://aamsa.com/contacto",
    siteName: "Aamsa",
    type: "website",
    locale: "es_MX",
  },
};

export default function ContactoPage() {
  return (
    <>
      <Navbar />
      <main>
        <ContactoContent />
      </main>
      <Footer />
    </>
  );
}
