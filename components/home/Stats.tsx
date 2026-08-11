"use client";

import { motion, useReducedMotion } from "framer-motion";
import { CountUp } from "@/components/animations/CountUp";
import { MotionSection } from "@/components/ui/MotionSection";

const stats = [
  {
    numeric: 45,
    prefix: "+",
    suffix: "",
    label: "Años",
    description: "Centro de Servicio Acero",
  },
  {
    numeric: 6,
    prefix: "",
    suffix: "",
    label: "Procesos",
    description: "Láser, Plasma CNC, Doblez, Guillotina, Pantógrafo, Rolado",
  },
  {
    numeric: 5,
    prefix: "",
    suffix: "",
    label: "Líneas de contacto",
    description: "",
    contactLines: [
      { type: "web", value: "www.aamsa.com", href: "https://www.aamsa.com" },
      { type: "email", value: "ventas@aamsa.com", href: "mailto:ventas@aamsa.com" },
      { type: "whatsapp", value: "+52 81-1511-5660", href: "https://wa.me/528115115660" },
      { type: "phone", value: "+52 81-8360-0414", href: "tel:8183600414" },
      { type: "phone", value: "+52 800-11 ACERO", href: "tel:80011acero" },
    ],
  },
];

export function Stats() {
  const shouldReduce = useReducedMotion();

  return (
    <section className="relative py-24 lg:py-32 bg-[#1B4375] overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-20" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FF7F00]/40 to-transparent" />

      <div className="relative max-w-[1440px] mx-auto px-6 lg:px-10">
        {/* Differentiator headline */}
        <MotionSection className="mb-20 max-w-4xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="block w-10 h-[3px] bg-[#FF7F00]" />
            <span className="font-[family-name:var(--font-barlow)] text-xs font-bold uppercase tracking-[0.18em] text-[#FF7F00]">
              Por qué Aamsa
            </span>
          </div>
          <h2
            className="font-[family-name:var(--font-barlow)] font-black uppercase leading-none text-white"
            style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
          >
            Manufactura industrial
            <br />
            respaldada por más de{" "}
            <span className="text-[#FF7F00]">cuatro décadas</span>
            <br />
            de experiencia
          </h2>
        </MotionSection>

        {/* Stats — separated by 1px lines, no card boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#2261AE]">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={shouldReduce ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.23, 1, 0.32, 1] }}
              viewport={{ once: true }}
              className="bg-[#1B4375] p-8 lg:p-10 group"
            >
              {/* Animated orange underline on hover */}
              <div className="relative mb-2">
                <span className="font-[family-name:var(--font-barlow)] font-black text-[#FF7F00]" style={{ fontSize: "clamp(48px, 6vw, 72px)", lineHeight: 1 }}>
                  {stat.prefix}
                </span>
                <CountUp
                  to={stat.numeric}
                  suffix={stat.suffix}
                  className="font-[family-name:var(--font-barlow)] font-black text-[#FF7F00]"
                  style={{ fontSize: "clamp(48px, 6vw, 72px)", lineHeight: 1 }}
                />
                {/* Reveal bar — clip-path from left on hover */}
                <motion.div
                  className="absolute -bottom-2 left-0 h-[2px] bg-[#FF7F00]"
                  initial={{ width: 0 }}
                  whileInView={{ width: "48px" }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1, ease: [0.23, 1, 0.32, 1] }}
                  viewport={{ once: true }}
                />
              </div>
              <div className="font-[family-name:var(--font-barlow)] text-sm font-bold uppercase tracking-wider text-white mt-4 mb-2">
                {stat.label}
              </div>
              {stat.description && (
                <p className="font-[family-name:var(--font-inter)] text-xs text-[#7A9CC0] leading-relaxed">
                  {stat.description}
                </p>
              )}
              {"contactLines" in stat && stat.contactLines && (
                <div className="flex flex-col gap-1.5 mt-1">
                  {stat.contactLines.map((line: { type: string; value: string; href: string }) => (
                    <a
                      key={line.value}
                      href={line.href}
                      target={line.type === "web" ? "_blank" : undefined}
                      rel={line.type === "web" ? "noopener noreferrer" : undefined}
                      className="font-[family-name:var(--font-inter)] text-xs text-[#7A9CC0] hover:text-[#FF7F00] transition-colors flex items-center gap-1.5"
                    >
                      {line.type === "whatsapp" && (
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="text-green-500 flex-shrink-0" aria-hidden="true">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                      )}
                      {line.type === "phone" && (
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="flex-shrink-0" aria-hidden="true">
                          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.01 2.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.29 6.29l1.28-1.28a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                        </svg>
                      )}
                      {line.value}
                    </a>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
