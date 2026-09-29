import type { Metadata } from 'next'
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { Services } from "@/components/home/Services";
import { Products } from "@/components/home/Products";
import { Stats } from "@/components/home/Stats";
import { Process } from "@/components/home/Process";
import { ContactCTA } from "@/components/home/ContactCTA";
import { JsonLd } from "@/components/servicios/JsonLd";


export const metadata: Metadata = {
  "title": "Aceros Aamsa | Distribuidor de Acero en Monterrey",
  "description": "Somos tu proveedor de acero en Monterrey y NL. Amplio catálogo, entregas puntuales y atención experta. ¡Solicita tu cotización hoy!"
}

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Products />
        <Stats />
        <Process />
        <ContactCTA />
      </main>
      <Footer />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "¿Qué productos de acero distribuye Aamsa en Monterrey?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Aamsa distribuye lámina y placa de acero en distintos calibres, así como servicios de corte y doblez para la industria en Monterrey y Guadalupe, Nuevo León."
              }
            },
            {
              "@type": "Question",
              "name": "¿Dónde está ubicado Aamsa?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Aamsa está ubicado en Guadalupe, Nuevo León, en el área metropolitana de Monterrey. Atendemos proyectos industriales en toda la región noreste de México."
              }
            },
            {
              "@type": "Question",
              "name": "¿Cómo puedo contactar a Aamsa por teléfono en Monterrey?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Puedes contactarnos directamente desde nuestra página de contacto o solicitar una cotización en línea. Nuestro equipo en Monterrey responde en menos de 24 horas."
              }
            },
            {
              "@type": "Question",
              "name": "¿Aamsa cuenta con certificación ISO 9001?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Sí, Aamsa está certificado bajo la norma ISO 9001, garantizando procesos de calidad en distribución y procesamiento de acero industrial. Con más de 40 años en la industria, la calidad es parte de nuestra operación diaria."
              }
            }
          ]
        }}
      />
    </>
  );
}
