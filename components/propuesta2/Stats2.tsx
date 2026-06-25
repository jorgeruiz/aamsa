"use client";

import { motion, useReducedMotion } from "framer-motion";
import { CountUp } from "@/components/animations/CountUp";

const stats = [
  { numeric: 40, suffix: "+", label: "Años de operación continua" },
  { numeric: 6, suffix: "", label: "Procesos integrados en planta" },
  { numeric: 3, suffix: "", label: "Líneas directas de contacto" },
  { numeric: 100, suffix: "%", label: "Dedicados al sector industrial" },
];

export function Stats2() {
  const shouldReduce = useReducedMotion();

  return (
    <section className="py-24 lg:py-32 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Differentiator copy — minimal, centered */}
        <motion.div
          initial={shouldReduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: [0.23, 1, 0.32, 1] }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <h2
            className="font-[family-name:var(--font-barlow)] font-black uppercase leading-none text-[#0D0F1A] mb-6"
            style={{ fontSize: "clamp(32px, 5vw, 60px)" }}
          >
            Cuatro décadas de
            <br />
            <span className="text-[#FF7F00]">exactitud industrial</span>
          </h2>
          <p className="font-[family-name:var(--font-inter)] text-gray-500 leading-relaxed max-w-xl mx-auto">
            Aamsa opera desde 1985 sirviendo a la industria manufacturera,
            automotriz y de construcción del noreste de México.
          </p>
        </motion.div>

        {/* Stats — clean horizontal, separated by lines, no card boxes */}
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-gray-200 border border-gray-200">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={shouldReduce ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.09, ease: [0.23, 1, 0.32, 1] }}
              className="p-8 lg:p-12 flex flex-col justify-between"
            >
              <CountUp
                to={stat.numeric}
                suffix={stat.suffix}
                className="font-[family-name:var(--font-barlow)] font-black text-[#FF7F00] block"
                style={{ fontSize: "clamp(48px, 6vw, 72px)", lineHeight: 1 }}
              />
              {/* Orange reveal bar */}
              <div>
                <motion.div
                  className="h-[2px] bg-[#FF7F00] mb-3"
                  initial={{ width: 0 }}
                  whileInView={{ width: "32px" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.3 + i * 0.09, ease: [0.23, 1, 0.32, 1] }}
                />
                <p className="font-[family-name:var(--font-inter)] text-sm text-gray-500 leading-snug">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Navy authority bar */}
        <motion.div
          initial={shouldReduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
          className="mt-8 bg-[#2D315D] p-8 flex flex-col md:flex-row items-start md:items-center gap-6"
        >
          <div className="flex-shrink-0">
            <div className="font-[family-name:var(--font-barlow)] text-xs font-bold uppercase tracking-[0.18em] text-white/40 mb-1">
              Garantía de calidad
            </div>
            <div className="font-[family-name:var(--font-barlow)] text-2xl font-black uppercase text-white">
              Tolerancias exactas
            </div>
          </div>
          <div className="w-px h-12 bg-white/10 hidden md:block" />
          <p className="font-[family-name:var(--font-inter)] text-sm text-white/60 leading-relaxed max-w-xl">
            Cada pieza que sale de nuestra planta cumple las especificaciones del plano.
            Sin excepciones. Es el compromiso que sostenemos con cada cliente desde hace 40 años.
          </p>
          <motion.a
            href="https://wa.me/528183600414?text=Hola%2C%20me%20gustar%C3%ADa%20solicitar%20una%20cotizaci%C3%B3n"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Solicitar cotización por WhatsApp"
            whileHover={shouldReduce ? {} : { y: -3, scale: 1.02 }}
            whileTap={shouldReduce ? {} : { scale: 0.96, y: 0 }}
            transition={{ duration: 0.18, ease: [0.23, 1, 0.32, 1] }}
            className="flex-shrink-0 bg-[#FF7F00] hover:bg-[#CC6600] text-white font-[family-name:var(--font-barlow)] text-sm font-bold uppercase tracking-widest px-6 py-3 transition-colors duration-200 cursor-pointer"
          >
            Cotizar
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
