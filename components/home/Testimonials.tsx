"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MotionSection } from "@/components/ui/MotionSection";

const testimonials = [
  {
    quote:
      "Llevamos más de 10 años trabajando con Aamsa para todo el habilitado de lámina de nuestra línea de producción. La calidad es consistente y los tiempos de entrega, confiables. No consideramos otro proveedor.",
    author: "Gerente de Compras",
    company: "Empresa de manufactura metálica, Monterrey NL",
  },
  {
    quote:
      "Necesitábamos piezas de acero con geometrías complejas para un proyecto de construcción industrial. Aamsa entregó en plazo, con las especificaciones al milímetro. El equipo de ventas siempre responde rápido.",
    author: "Director de Proyectos",
    company: "Contratista industrial, Nuevo León",
  },
  {
    quote:
      "El servicio de doblez CNC de Aamsa nos permite reducir pasos en nuestra línea de ensamble. Las piezas llegan listas para soldar, con ángulos perfectos. Eso vale mucho en producción en serie.",
    author: "Jefe de Planta",
    company: "Empresa automotriz Tier 2, Monterrey",
  },
];

const gridChildVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
};

export function Testimonials() {
  const shouldReduce = useReducedMotion();

  return (
    <section className="py-24 lg:py-32 bg-[#0047AB] relative overflow-hidden">
      {/* Background dot grid */}
      <div className="absolute inset-0 dot-grid opacity-10" />
      {/* Top border accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FF7F00] via-transparent to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <MotionSection className="mb-16">
          <div className="flex items-center gap-3 mb-5">
            <span className="block w-12 h-[3px] bg-[#FF7F00]" />
            <span className="font-[family-name:var(--font-barlow)] text-sm font-bold uppercase tracking-[0.14em] text-[#FF7F00]">
              Testimonios
            </span>
          </div>
          <h2
            className="font-[family-name:var(--font-barlow)] font-black uppercase leading-none text-white"
            style={{ fontSize: "clamp(36px, 5vw, 60px)" }}
          >
            Lo que dicen
            <br />
            nuestros clientes
          </h2>
        </MotionSection>

        <motion.div
          className="grid md:grid-cols-3 gap-6"
          variants={
            shouldReduce
              ? {}
              : {
                  visible: {
                    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
                  },
                }
          }
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              variants={shouldReduce ? {} : gridChildVariants}
              className="bg-[#003885] border border-white/10 p-8 relative"
            >
              {/* Quote mark */}
              <div
                className="font-[family-name:var(--font-barlow)] text-[80px] font-black leading-none text-[#FF7F00]/20 absolute top-4 right-6"
                aria-hidden="true"
              >
                &ldquo;
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-5" aria-label="5 de 5 estrellas">
                {[...Array(5)].map((_, s) => (
                  <svg
                    key={s}
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="#FF7F00"
                    aria-hidden="true"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>

              <blockquote className="font-[family-name:var(--font-inter)] text-sm text-[#A0A8C8] leading-relaxed mb-6 relative z-10">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <div className="border-t border-white/10 pt-5">
                <div className="font-[family-name:var(--font-barlow)] text-base font-bold uppercase text-white">
                  {t.author}
                </div>
                <div className="font-[family-name:var(--font-inter)] text-xs text-[#606888] mt-0.5">
                  {t.company}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
