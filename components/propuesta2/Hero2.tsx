"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { WordReveal } from "@/components/animations/WordReveal";
import { MagneticButton } from "@/components/animations/MagneticButton";

export function Hero2() {
  const shouldReduce = useReducedMotion();

  const fadeUp = (delay = 0) => ({
    initial: { opacity: shouldReduce ? 1 : 0, y: shouldReduce ? 0 : 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, delay, ease: [0.23, 1, 0.32, 1] },
    },
  });

  return (
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden bg-white">
      {/* Orange left accent column */}
      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#FF7F00]" aria-hidden="true" />

      {/* Subtle grid lines — geometric industrial feel on white */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#F0F1F5 1px, transparent 1px), linear-gradient(90deg, #F0F1F5 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Right panel — navy block with factory photo */}
      <div
        className="absolute top-0 right-0 h-full w-[38%] bg-[#2D315D] hidden lg:block overflow-hidden"
        aria-hidden="true"
      >
        <Image
          src="/corte-laser-lamina-acero-aamsa.webp"
          alt="Corte láser de lámina de acero en planta industrial Aamsa Nuevo León"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-[#2D315D]/70" />
      </div>

      {/* Ghost text behind right panel */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none select-none hidden lg:block pr-8"
        aria-hidden="true"
      >
        <span
          className="font-[family-name:var(--font-barlow)] font-black text-white leading-none"
          style={{ fontSize: "clamp(100px, 16vw, 220px)", opacity: 0.06 }}
        >
          AAMSA
        </span>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-28 pb-20 w-full">
        <div className="grid lg:grid-cols-12 gap-0 items-stretch min-h-[calc(100dvh-120px)]">
          {/* Left — copy (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center pr-0 lg:pr-16">
            {/* Year badge */}
            <motion.div {...fadeUp(0)} className="flex items-center gap-3 mb-8">
              <div className="flex items-center gap-2 border border-gray-200 px-3 py-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-[#FF7F00]" />
                <span className="font-[family-name:var(--font-barlow)] text-xs font-bold uppercase tracking-[0.18em] text-gray-500">
                  Est. 1985 — Guadalupe, N.L.
                </span>
              </div>
            </motion.div>

            {/* H1 — word reveal */}
            <div className="mb-8">
              <WordReveal
                text="Precisión"
                as="h1"
                delay={0.06}
                onMount={true}
                className="font-[family-name:var(--font-barlow)] font-black uppercase leading-none text-[#0D0F1A] block"
                style={{ fontSize: "clamp(52px, 8vw, 96px)", letterSpacing: "-0.01em" }}
              />
              <WordReveal
                text="en acero"
                as="h1"
                delay={0.18}
                onMount={true}
                className="font-[family-name:var(--font-barlow)] font-black uppercase leading-none text-[#FF7F00] block"
                style={{ fontSize: "clamp(52px, 8vw, 96px)", letterSpacing: "-0.01em" }}
              />
              <WordReveal
                text="desde 1985"
                as="h1"
                delay={0.30}
                onMount={true}
                className="font-[family-name:var(--font-barlow)] font-black uppercase leading-none text-[#0D0F1A] block"
                style={{ fontSize: "clamp(52px, 8vw, 96px)", letterSpacing: "-0.01em" }}
              />
            </div>

            <motion.p
              {...fadeUp(0.44)}
              className="font-[family-name:var(--font-inter)] text-base text-gray-500 max-w-[44ch] leading-relaxed mb-10"
            >
              Corte láser, plasma CNC, doblez CNC y rolado para la industria
              manufacturera del noreste de México. Cotización en 24 horas.
            </motion.p>

            {/* CTAs */}
            <motion.div {...fadeUp(0.56)} className="flex flex-col sm:flex-row gap-3">
              <MagneticButton strength={0.2}>
                <motion.a
                  href="https://wa.me/528183600414?text=Hola%2C%20me%20gustar%C3%ADa%20solicitar%20una%20cotizaci%C3%B3n"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Solicitar cotización por WhatsApp"
                  whileHover={shouldReduce ? {} : { y: -2, scale: 1.02 }}
                  whileTap={shouldReduce ? {} : { scale: 0.96, y: 0 }}
                  transition={{ duration: 0.18, ease: [0.23, 1, 0.32, 1] }}
                  className="inline-flex items-center gap-3 bg-[#FF7F00] hover:bg-[#CC6600] text-white font-[family-name:var(--font-barlow)] text-sm font-bold uppercase tracking-widest px-8 py-4 transition-colors duration-200 cursor-pointer"
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
                className="inline-flex items-center gap-2 border border-gray-300 hover:border-[#0D0F1A] text-gray-600 hover:text-[#0D0F1A] font-[family-name:var(--font-barlow)] text-sm font-bold uppercase tracking-widest px-8 py-4 transition-colors duration-200 cursor-pointer"
              >
                Ver Servicios
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </motion.a>
            </motion.div>

            {/* Credentials strip */}
            <motion.div
              {...fadeUp(0.68)}
              className="mt-12 pt-8 border-t border-gray-100 flex items-center gap-8"
            >
              {[
                { value: "40+", label: "años" },
                { value: "6", label: "procesos" },
                { value: "NL", label: "noreste" },
              ].map((item) => (
                <div key={item.label} className="flex items-baseline gap-2">
                  <span className="font-[family-name:var(--font-barlow)] text-2xl font-black text-[#FF7F00]">
                    {item.value}
                  </span>
                  <span className="font-[family-name:var(--font-inter)] text-xs text-gray-400 uppercase tracking-widest">
                    {item.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — navy panel content (5 cols) */}
          <motion.div
            {...fadeUp(0.2)}
            className="lg:col-span-5 relative hidden lg:flex flex-col justify-center pl-12 pr-8"
          >
            <div className="font-[family-name:var(--font-barlow)] text-[11px] font-bold uppercase tracking-[0.22em] text-white/40 mb-6">
              Servicios principales
            </div>
            <div className="flex flex-col gap-0">
              {[
                "Corte Láser",
                "Corte Plasma CNC",
                "Doblez CNC",
                "Corte Guillotina",
                "Corte Pantógrafo",
                "Rolado",
              ].map((service, i) => (
                <motion.div
                  key={service}
                  initial={shouldReduce ? false : { opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.07, duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
                  className="flex items-center justify-between py-4 border-b border-white/10 group"
                >
                  <span className="font-[family-name:var(--font-barlow)] text-lg font-bold uppercase tracking-wide text-white group-hover:text-[#FF7F00] transition-colors duration-200">
                    {service}
                  </span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="text-white/30 group-hover:text-[#FF7F00] transition-colors duration-200"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </motion.div>
              ))}
            </div>
            {/* Contact callout */}
            <motion.a
              {...fadeUp(0.88)}
              href="https://wa.me/528183600414"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contactar por WhatsApp"
              className="mt-8 flex items-center gap-3 text-white/60 hover:text-white transition-colors group"
            >
              <div className="w-8 h-8 border border-white/20 flex items-center justify-center group-hover:border-[#FF7F00]/60 transition-colors">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-[#FF7F00]" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <span className="font-[family-name:var(--font-inter)] text-sm">+52 81 8360-0414</span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
