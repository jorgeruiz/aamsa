"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { WordReveal } from "@/components/animations/WordReveal";
import { MagneticButton } from "@/components/animations/MagneticButton";

export function Hero() {
  const shouldReduce = useReducedMotion();

  const fadeUp = (delay = 0) => ({
    initial: { opacity: shouldReduce ? 1 : 0, y: shouldReduce ? 0 : 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay, ease: [0.23, 1, 0.32, 1] },
    },
  });

  return (
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden bg-[#1B4375]">
      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />

      {/* Diagonal navy panel */}
      <div className="absolute top-0 right-0 w-[55%] h-full pointer-events-none">
        {/* Factory photo behind the panel */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: "polygon(18% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
        >
          <Image
            src="/corte-laser-lamina-acero-aamsa.webp"
            alt="Corte láser de lámina de acero en planta industrial Aamsa Nuevo León"
            fill
            className="object-cover opacity-60"
            priority
          />
        </div>
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#2261AE]/30 via-[#1B4375]/40 to-transparent"
          style={{ clipPath: "polygon(18% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
        />
        {/* Diagonal orange hairline */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <line
            x1="18"
            y1="0"
            x2="0"
            y2="100"
            stroke="#FF7F00"
            strokeWidth="0.15"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </div>

      {/* Ghost number — subtle parallax via CSS */}
      <div
        className="absolute bottom-0 right-0 pointer-events-none select-none"
        aria-hidden="true"
      >
        <motion.span
          className="font-[family-name:var(--font-barlow)] font-black leading-none text-white"
          style={{ fontSize: "clamp(160px, 24vw, 320px)", opacity: 0.03 }}
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
        >
          45
        </motion.span>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-32 pb-20 w-full">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          {/* Left — copy */}
          <div className="lg:col-span-7">
            {/* Eyebrow (one total — Taste rule) */}
            <motion.div {...fadeUp(0)} className="flex items-center gap-3 mb-6">
              <span className="block w-10 h-[3px] bg-[#FF7F00]" />
              <span className="font-[family-name:var(--font-barlow)] text-xs font-bold uppercase tracking-[0.18em] text-[#FF7F00]">
                Guadalupe, Nuevo León — +45 Años
              </span>
            </motion.div>

            {/* H1 — word-by-word clip reveal */}
            <div className="mb-6">
              <WordReveal
                text="Transformamos acero,"
                as="h1"
                delay={0.08}
                onMount={true}
                className="font-[family-name:var(--font-barlow)] font-black uppercase leading-none text-white block"
                style={{ fontSize: "clamp(38px, 6.5vw, 76px)", letterSpacing: "-0.01em" }}
              />
              <WordReveal
                text="comprometidos con el"
                as="h1"
                delay={0.22}
                onMount={true}
                className="font-[family-name:var(--font-barlow)] font-black uppercase leading-none text-[#FF7F00] block"
                style={{ fontSize: "clamp(38px, 6.5vw, 76px)", letterSpacing: "-0.01em" }}
              />
              <WordReveal
                text="cuidado del medio ambiente"
                as="h1"
                delay={0.36}
                onMount={true}
                className="font-[family-name:var(--font-barlow)] font-black uppercase leading-none text-white block"
                style={{ fontSize: "clamp(38px, 6.5vw, 76px)", letterSpacing: "-0.01em" }}
              />
            </div>

            {/* Subtext */}
            <motion.p
              {...fadeUp(0.5)}
              className="font-[family-name:var(--font-inter)] text-lg text-[#B0C4DE] max-w-[42ch] leading-relaxed mb-10"
            >
              Prototipos, desarrollo de nuevos productos, baja, mediana y alta
              producción.
            </motion.p>

            {/* CTAs */}
            <motion.div {...fadeUp(0.6)} className="flex flex-col sm:flex-row gap-4">
              <MagneticButton strength={0.25}>
                <motion.a
                  href="https://wa.me/528115115660?text=Hola%2C%20me%20gustar%C3%ADa%20solicitar%20una%20cotizaci%C3%B3n"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Solicitar cotización por WhatsApp"
                  whileHover={shouldReduce ? {} : { y: -2, scale: 1.02 }}
                  whileTap={shouldReduce ? {} : { scale: 0.96, y: 0 }}
                  transition={{ duration: 0.18, ease: [0.23, 1, 0.32, 1] }}
                  className="inline-flex items-center gap-3 bg-[#FF7F00] hover:bg-[#CC6600] text-white font-[family-name:var(--font-barlow)] text-base font-bold uppercase tracking-widest px-8 py-4 transition-colors duration-200 cursor-pointer"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Solicitar Cotización
                </motion.a>
              </MagneticButton>

              <motion.a
                href="/servicios"
                whileHover={shouldReduce ? {} : { y: -2 }}
                whileTap={shouldReduce ? {} : { scale: 0.96, y: 0 }}
                transition={{ duration: 0.18, ease: [0.23, 1, 0.32, 1] }}
                className="inline-flex items-center gap-2 border border-[#2261AE] hover:border-[#FF7F00]/50 text-[#B0C4DE] hover:text-white font-[family-name:var(--font-barlow)] text-base font-bold uppercase tracking-widest px-8 py-4 transition-colors duration-200 cursor-pointer"
              >
                Ver Servicios
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </motion.a>
            </motion.div>

            {/* Trust strip */}
            <motion.div
              {...fadeUp(0.75)}
              className="mt-12 pt-8 border-t border-[#2261AE] flex flex-wrap gap-8"
            >
              {[
                { value: "+45", label: "Años de operación" },
                { value: "6", label: "Procesos integrados" },
                { value: "NL", label: "Nuevo León" },
              ].map((item) => (
                <div key={item.label}>
                  <div className="font-[family-name:var(--font-barlow)] text-3xl font-black text-[#FF7F00]">
                    {item.value}
                  </div>
                  <div className="font-[family-name:var(--font-inter)] text-[11px] text-[#7A9CC0] uppercase tracking-widest mt-0.5">
                    {item.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — capability panel */}
          <motion.div
            {...fadeUp(0.3)}
            className="lg:col-span-5 relative hidden lg:block"
          >
            <div className="relative">
              <div className="absolute top-5 right-5 w-full h-full bg-[#2261AE]/15 border border-[#2261AE]/40" />
              <div className="relative bg-[#153460] border border-[#2261AE] border-t-[3px] border-t-[#FF7F00] p-8">
                <div className="font-[family-name:var(--font-barlow)] text-[11px] font-bold uppercase tracking-[0.2em] text-[#FF7F00] mb-6">
                  Capacidades de planta
                </div>
                {[
                  { process: "Corte Láser CNC", spec: "2,500 x 12,000 mm" },
                  { process: "Corte Plasma CNC", spec: "3 x 15 m" },
                  { process: "Doblez CNC", spec: "16 m longitud" },
                  { process: "Corte Guillotina", spec: "¾\" x 22'" },
                  { process: "Corte Pantógrafo", spec: "3 x 15 m" },
                  { process: "Rolado", spec: "Desde Ø 2 m" },
                ].map((item, i) => (
                  <motion.div
                    key={item.process}
                    initial={shouldReduce ? false : { opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.06, duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                    className={`flex items-center justify-between py-3 ${i < 5 ? "border-b border-[#2261AE]" : ""}`}
                  >
                    <span className="font-[family-name:var(--font-inter)] text-sm font-medium text-[#F0F2FF]">
                      {item.process}
                    </span>
                    <span className="font-[family-name:var(--font-inter)] text-xs text-[#7A9CC0]">
                      {item.spec}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
