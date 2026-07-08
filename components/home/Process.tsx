"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { MotionSection } from "@/components/ui/MotionSection";

const steps = [
  {
    number: "01",
    title: "Envía tu plano o especificaciones",
    description:
      "Comparte el plano técnico, archivo DXF/DWG o tus especificaciones de material y cantidad por WhatsApp o correo a ventas@aamsa.com.",
  },
  {
    number: "02",
    title: "Recibe cotización",
    description:
      "Nuestro equipo de ventas revisa los requerimientos y te envía una cotización detallada con precio, tiempo de entrega y especificaciones del proceso.",
  },
  {
    number: "03",
    title: "Aprobación y programación",
    description:
      "Una vez aprobada la cotización y condiciones, tu orden entra a programa de producción. Te confirmamos fecha de entrega antes de arrancar.",
  },
  {
    number: "04",
    title: "Procesado y control de calidad",
    description:
      "Procesamos tu orden con equipos CNC de última generación.",
  },
];

export function Process() {
  const shouldReduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Same timing as Products: fade at ~60%, slower
  const overlayOpacity = useTransform(scrollYProgress, [0.25, 0.45], [0, 1]);

  return (
    <section ref={sectionRef} className="relative py-24 lg:py-32 bg-[#1B4375]">
      {/* Fade-in overlay to light gray-blue */}
      <motion.div
        className="absolute inset-0 bg-[#D8E6F1] pointer-events-none"
        style={{ opacity: overlayOpacity }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-10 items-center mb-16">
          <MotionSection>
            <div className="flex items-center gap-3 mb-5">
              <span className="block w-12 h-[3px] bg-[#FF7F00]" />
              <span className="font-[family-name:var(--font-barlow)] text-sm font-bold uppercase tracking-[0.14em] text-[#FF7F00]">
                Proceso
              </span>
            </div>
            <h2
              className="font-[family-name:var(--font-barlow)] font-black uppercase leading-none text-[#1B4375]"
              style={{ fontSize: "clamp(36px, 5vw, 60px)" }}
            >
              Cotizar es sencillo.
              <br />
              Entregar a tiempo,
              <br />
              <span className="text-[#FF7F00]">nuestro compromiso.</span>
            </h2>
          </MotionSection>

          {/* Blueprint photo */}
          <MotionSection delay={0.15} className="hidden lg:block">
            <div className="relative h-64 overflow-hidden border border-[#C8D3E3]">
              <Image
                src="/plano-tecnico.png"
                alt="Plano técnico de acero"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#D8E6F1]/60" />
            </div>
          </MotionSection>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0 relative">
          {/* Connector line */}
          <div className="absolute top-8 left-0 right-0 h-px bg-[#C8D3E3] hidden lg:block" />

          {steps.map((step, i) => (
            <MotionSection key={step.number} delay={i * 0.1} className="relative">
              <div className="lg:pr-8">
                {/* Number with dot */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-white border border-[#C8D3E3] flex items-center justify-center relative z-10">
                    <span className="font-[family-name:var(--font-barlow)] text-2xl font-black text-[#FF7F00]">
                      {step.number}
                    </span>
                  </div>
                  {/* Active step accent */}
                  {i === 0 && (
                    <div className="absolute inset-0 w-16 h-16 bg-[#FF7F00]/10 border border-[#FF7F00]/40 -translate-x-1 -translate-y-1" />
                  )}
                </div>

                <h3 className="font-[family-name:var(--font-barlow)] text-xl font-bold uppercase text-[#1B4375] mb-3 leading-tight">
                  {step.title}
                </h3>
                <p className="font-[family-name:var(--font-inter)] text-sm text-[#4A5B75] leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Vertical separator for mobile/tablet */}
              {i < 3 && (
                <div className="block lg:hidden w-px h-8 bg-[#C8D3E3] ml-8 mt-6" />
              )}
            </MotionSection>
          ))}
        </div>

        {/* Final CTA */}
        <MotionSection className="mt-16 flex flex-col sm:flex-row gap-4">
          <motion.a
            href="https://wa.me/528115115660?text=Hola%2C%20quiero%20solicitar%20una%20cotizaci%C3%B3n%20de%20corte%20y%20doblez%20de%20acero"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Solicitar cotización por WhatsApp"
            whileHover={shouldReduce ? {} : { y: -3, scale: 1.02 }}
            whileTap={shouldReduce ? {} : { scale: 0.96, y: 0 }}
            transition={{ duration: 0.18, ease: [0.23, 1, 0.32, 1] }}
            className="inline-flex items-center gap-3 bg-[#FF7F00] hover:bg-[#CC6600] text-white font-[family-name:var(--font-barlow)] text-base font-bold uppercase tracking-widest px-8 py-4 transition-colors duration-200 cursor-pointer"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Solicitar Cotización por WhatsApp
          </motion.a>
          <motion.a
            href="mailto:ventas@aamsa.com"
            whileHover={shouldReduce ? {} : { y: -2 }}
            whileTap={shouldReduce ? {} : { scale: 0.96, y: 0 }}
            transition={{ duration: 0.18, ease: [0.23, 1, 0.32, 1] }}
            className="inline-flex items-center gap-2 border border-[#1B4375]/20 hover:border-[#FF7F00]/50 text-[#1B4375] hover:text-[#FF7F00] font-[family-name:var(--font-barlow)] text-base font-bold uppercase tracking-widest px-8 py-4 transition-colors duration-200 cursor-pointer"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            ventas@aamsa.com
          </motion.a>
        </MotionSection>
      </div>
    </section>
  );
}
