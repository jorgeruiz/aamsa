"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MotionSection } from "@/components/ui/MotionSection";

const contactMethods = [
  {
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
    label: "WhatsApp",
    value: "8115115660",
    href: "https://wa.me/528115115660?text=Hola%2C%20me%20gustar%C3%ADa%20solicitar%20una%20cotizaci%C3%B3n",
    primary: true,
  },
  {
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden="true"
      >
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.01 2.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.29 6.29l1.28-1.28a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
    label: "Teléfono",
    value: "800 11 Acero",
    href: "tel:80011acero",
    primary: false,
  },
  {
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden="true"
      >
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.01 2.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.29 6.29l1.28-1.28a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
    label: "Teléfono",
    value: "8183600414",
    href: "tel:8183600414",
    primary: false,
  },
];

export function ContactCTA() {
  const shouldReduce = useReducedMotion();

  return (
    <section className="py-24 lg:py-32 bg-[#0A1A2E] relative overflow-hidden">
      {/* Large background text */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none"
        aria-hidden="true"
      >
        <span
          className="font-[family-name:var(--font-barlow)] font-black text-white opacity-[0.02]"
          style={{ fontSize: "clamp(80px, 15vw, 200px)" }}
        >
          AAMSA
        </span>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — headline */}
          <MotionSection>
            <div className="flex items-center gap-3 mb-6">
              <span className="block w-12 h-[3px] bg-[#FF7F00]" />
              <span className="font-[family-name:var(--font-barlow)] text-sm font-bold uppercase tracking-[0.14em] text-[#FF7F00]">
                Cotización sin costo
              </span>
            </div>
            <h2
              className="font-[family-name:var(--font-barlow)] font-black uppercase leading-none text-white mb-6"
              style={{ fontSize: "clamp(40px, 5vw, 64px)" }}
            >
              ¿Necesitas corte
              <br />o doblez de acero?
              <br />
              <span className="text-[#FF7F00]">Cotiza hoy.</span>
            </h2>
            <p className="font-[family-name:var(--font-inter)] text-[#B0C4DE] leading-relaxed max-w-md">
              Envíanos tu plano o descripción de la pieza y recibe tu
              cotización con precio, tiempo de entrega y especificaciones del
              proceso recomendado.
            </p>

            {/* Location */}
            <div className="mt-8 flex items-start gap-3">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#FF7F00"
                strokeWidth="1.5"
                className="mt-1 flex-shrink-0"
                aria-hidden="true"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <div>
                <div className="font-[family-name:var(--font-inter)] text-sm text-[#B0C4DE] leading-relaxed">
                  Av. Benito Juárez Km 7.5 S/N Col. Los Lermas
                  <br />
                  Guadalupe, Nuevo León, C.P. 67188
                </div>
              </div>
            </div>
          </MotionSection>

          {/* Right — contact methods */}
          <MotionSection delay={0.15}>
            <div className="flex flex-col gap-4">
              {contactMethods.map((method) => (
                <motion.a
                  key={method.label}
                  href={method.href}
                  target={method.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    method.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  aria-label={
                    method.label === "WhatsApp"
                      ? "Solicitar cotización por WhatsApp"
                      : undefined
                  }
                  whileHover={shouldReduce ? {} : { y: -2 }}
                  whileTap={shouldReduce ? {} : { scale: 0.98, y: 0 }}
                  transition={{ duration: 0.18, ease: [0.23, 1, 0.32, 1] }}
                  className={`group flex items-center gap-5 p-6 border transition-colors duration-200 ${
                    method.primary
                      ? "bg-[#FF7F00] border-[#FF7F00] hover:bg-[#CC6600] hover:border-[#CC6600] text-white"
                      : "bg-[#0F2440] border-[#1A4070] hover:border-[#FF7F00]/40 text-[#F0F2FF]"
                  }`}
                >
                  <div
                    className={`flex-shrink-0 ${method.primary ? "text-white" : "text-[#FF7F00]"}`}
                  >
                    {method.icon}
                  </div>
                  <div className="flex-1">
                    <div
                      className={`font-[family-name:var(--font-inter)] text-xs uppercase tracking-wider mb-1 ${
                        method.primary ? "text-white/70" : "text-[#7A9CC0]"
                      }`}
                    >
                      {method.label}
                    </div>
                    <div
                      className={`font-[family-name:var(--font-barlow)] text-xl font-bold uppercase ${
                        method.primary ? "text-white" : "text-white group-hover:text-[#FF7F00]"
                      } transition-colors`}
                    >
                      {method.value}
                    </div>
                  </div>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className={`flex-shrink-0 transition-transform duration-200 group-hover:translate-x-1 ${
                      method.primary ? "text-white" : "text-[#7A9CC0]"
                    }`}
                    aria-hidden="true"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </motion.a>
              ))}
            </div>

          </MotionSection>
        </div>
      </div>
    </section>
  );
}
