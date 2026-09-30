"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MotionSection } from "@/components/ui/MotionSection";
import { ContactForm } from "@/components/contacto/ContactForm";
import { useWhatsAppModal } from "@/components/ui/WhatsAppModal";

const contactMethods = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
    label: "WhatsApp",
    value: "+52 81-1511-5660",
    description: "Respuesta inmediata en horario laboral",
    href: "#",
    color: "bg-green-600",
    isWhatsApp: true,
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.01 2.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.29 6.29l1.28-1.28a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
    label: "Teléfono directo",
    value: "+52 81-8360-0414",
    description: "Lunes a viernes, 8:00 - 18:00",
    href: "tel:8183600414",
    color: "bg-[#1B4375]",
    isWhatsApp: false,
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.01 2.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.29 6.29l1.28-1.28a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
    label: "Línea 800",
    value: "+52 800-11 ACERO",
    description: "Sin costo desde cualquier parte de México",
    href: "tel:80011acero",
    color: "bg-[#2261AE]",
    isWhatsApp: false,
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    label: "Correo electrónico",
    value: "ventas@aamsa.com",
    description: "Envíanos planos y especificaciones",
    href: "mailto:ventas@aamsa.com",
    color: "bg-[#FF7F00]",
    isWhatsApp: false,
  },
];

export function ContactoContent() {
  const shouldReduce = useReducedMotion();
  const { openWhatsAppModal } = useWhatsAppModal();

  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-20 lg:pt-44 lg:pb-28 bg-[#1B4375] overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none"
          aria-hidden="true"
        >
          <span
            className="font-[family-name:var(--font-barlow)] font-black text-white opacity-[0.03]"
            style={{ fontSize: "clamp(100px, 20vw, 300px)" }}
          >
            HOLA
          </span>
        </div>

        <div className="relative max-w-[1440px] mx-auto px-6 lg:px-10">
          <MotionSection>
            <div className="flex items-center gap-3 mb-6">
              <span className="block w-12 h-[3px] bg-[#FF7F00]" />
              <span className="font-[family-name:var(--font-barlow)] text-sm font-bold uppercase tracking-[0.14em] text-[#FF7F00]">
                Contacto
              </span>
            </div>
            <h1
              className="font-[family-name:var(--font-barlow)] font-black uppercase leading-none text-white max-w-3xl"
              style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
            >
              Hablemos de
              <br />
              <span className="text-[#FF7F00]">tu proyecto</span>
            </h1>
            <p className="mt-6 font-[family-name:var(--font-inter)] text-[#B0C4DE] leading-relaxed max-w-2xl text-lg">
              Envíanos tu plano o descripción de la pieza y recibe tu cotización con precio, tiempo de entrega y especificaciones del proceso recomendado.
            </p>
          </MotionSection>
        </div>
      </section>

      {/* Form + Contact Methods */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form — wider */}
            <div className="lg:col-span-3">
              <MotionSection>
                <div className="flex items-center gap-3 mb-6">
                  <span className="block w-12 h-[3px] bg-[#FF7F00]" />
                  <span className="font-[family-name:var(--font-barlow)] text-sm font-bold uppercase tracking-[0.14em] text-[#FF7F00]">
                    Solicita tu cotización
                  </span>
                </div>
                <h2
                  className="font-[family-name:var(--font-barlow)] font-black uppercase leading-none text-[#1B4375] mb-8"
                  style={{ fontSize: "clamp(28px, 3.5vw, 40px)" }}
                >
                  Formulario de contacto
                </h2>
                <ContactForm />
              </MotionSection>
            </div>

            {/* Contact methods sidebar */}
            <div className="lg:col-span-2 space-y-4">
              <MotionSection delay={0.1}>
                <div className="flex items-center gap-3 mb-6">
                  <span className="block w-12 h-[3px] bg-[#FF7F00]" />
                  <span className="font-[family-name:var(--font-barlow)] text-sm font-bold uppercase tracking-[0.14em] text-[#FF7F00]">
                    Otros canales
                  </span>
                </div>
              </MotionSection>

              {contactMethods.map((method, i) => (
                <MotionSection key={method.label} delay={0.1 + i * 0.06}>
                  <motion.a
                    href={method.isWhatsApp ? undefined : method.href}
                    onClick={method.isWhatsApp ? (e: React.MouseEvent) => { e.preventDefault(); openWhatsAppModal(); } : undefined}
                    target={!method.isWhatsApp && method.href.startsWith("http") ? "_blank" : undefined}
                    rel={!method.isWhatsApp && method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    whileHover={shouldReduce ? {} : { y: -2 }}
                    whileTap={shouldReduce ? {} : { scale: 0.98, y: 0 }}
                    transition={{ duration: 0.18, ease: [0.23, 1, 0.32, 1] }}
                    className="group flex items-start gap-4 p-5 border border-gray-200 hover:border-[#FF7F00]/40 bg-white transition-colors duration-200 cursor-pointer"
                  >
                    <div className={`w-10 h-10 ${method.color} flex items-center justify-center text-white flex-shrink-0`}>
                      {method.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-[family-name:var(--font-inter)] text-xs text-[#5a7a9c] uppercase tracking-wider mb-0.5">
                        {method.label}
                      </div>
                      <div className="font-[family-name:var(--font-barlow)] text-lg font-bold uppercase text-[#1B4375] group-hover:text-[#FF7F00] transition-colors">
                        {method.value}
                      </div>
                      <p className="mt-0.5 font-[family-name:var(--font-inter)] text-xs text-[#5a7a9c]">
                        {method.description}
                      </p>
                    </div>
                  </motion.a>
                </MotionSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Location + Map */}
      <section className="py-20 lg:py-28 bg-[#F7F9FC]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <MotionSection>
              <div className="flex items-center gap-3 mb-6">
                <span className="block w-12 h-[3px] bg-[#FF7F00]" />
                <span className="font-[family-name:var(--font-barlow)] text-sm font-bold uppercase tracking-[0.14em] text-[#FF7F00]">
                  Ubicación
                </span>
              </div>
              <h2
                className="font-[family-name:var(--font-barlow)] font-black uppercase leading-none text-[#1B4375] mb-8"
                style={{ fontSize: "clamp(32px, 4vw, 48px)" }}
              >
                Visítanos
              </h2>

              <address className="not-italic space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#1B4375] flex items-center justify-center text-white flex-shrink-0 mt-0.5">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-[family-name:var(--font-barlow)] text-base font-bold uppercase tracking-wide text-[#1B4375] mb-1">
                      Dirección
                    </div>
                    <p className="font-[family-name:var(--font-inter)] text-[#5a7a9c] leading-relaxed">
                      Av. Benito Juárez Km 7.5 S/N Col. Los Lermas
                      <br />
                      Guadalupe, Nuevo León
                      <br />
                      C.P. 67188, México
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#1B4375] flex items-center justify-center text-white flex-shrink-0 mt-0.5">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-[family-name:var(--font-barlow)] text-base font-bold uppercase tracking-wide text-[#1B4375] mb-1">
                      Horario
                    </div>
                    <p className="font-[family-name:var(--font-inter)] text-[#5a7a9c] leading-relaxed">
                      Lunes a viernes: 8:00 — 18:00
                      <br />
                      Sábado: 8:00 — 13:00
                    </p>
                  </div>
                </div>
              </address>
            </MotionSection>

            {/* Map embed */}
            <MotionSection delay={0.15}>
              <div className="aspect-[4/3] w-full bg-gray-200 border border-gray-200 overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3594.8!2d-100.2297!3d25.6866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8662c2d0e1c1c1c1%3A0x1234567890abcdef!2sAv.+Benito+Ju%C3%A1rez+Km+7.5%2C+Los+Lermas%2C+Guadalupe%2C+N.L.!5e0!3m2!1ses!2smx!4v1700000000000!5m2!1ses!2smx"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación de AAMSA en Google Maps"
                />
              </div>
            </MotionSection>
          </div>
        </div>
      </section>
    </>
  );
}
