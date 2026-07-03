"use client";

import { motion, useReducedMotion } from "framer-motion";
import { CountUp } from "@/components/animations/CountUp";
import { MotionSection } from "@/components/ui/MotionSection";

const stats = [
  {
    numeric: 45,
    prefix: "+",
    suffix: "",
    label: "Años de operación",
    description: "Desde 1981 sirviendo a la industria del noreste de México",
  },
  {
    numeric: 6,
    prefix: "",
    suffix: "",
    label: "Procesos integrados",
    description: "Láser, Plasma CNC, Doblez, Guillotina, Pantógrafo, Rolado",
  },
  {
    numeric: 3,
    prefix: "",
    suffix: "",
    label: "Líneas de contacto",
    description: "",
    phones: ["800 11 Acero", "8183600414", "8115115660"],
  },
];

export function Stats() {
  const shouldReduce = useReducedMotion();

  return (
    <section className="relative py-24 lg:py-32 bg-[#245a9c] overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-20" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FF7F00]/40 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
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
            respaldada por{" "}
            <span className="text-[#FF7F00]">más de cuatro décadas</span>
            <br />
            de operación continua
          </h2>
        </MotionSection>

        {/* Stats — separated by 1px lines, no card boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#3a72b5]">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={shouldReduce ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.23, 1, 0.32, 1] }}
              viewport={{ once: true }}
              className="bg-[#245a9c] p-8 lg:p-10 group"
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
              {"phones" in stat && stat.phones && (
                <div className="flex flex-col gap-1">
                  {stat.phones.map((phone: string) => (
                    <span key={phone} className="font-[family-name:var(--font-inter)] text-xs text-[#7A9CC0]">
                      {phone}
                    </span>
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
