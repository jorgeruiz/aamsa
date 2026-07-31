"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { MotionSection } from "@/components/ui/MotionSection";

const products = [
  {
    id: "placas",
    title: "Placas de Acero",
    description:
      "Placa de acero al carbón y resistentes a la abrasión, incluyendo A36, SAE1045, SAE4140, A572 Gr. 50, Brinar, Maxil, Hardox y Strenx.",
    href: "/productos/placa",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    id: "lamina",
    title: "Lámina",
    description:
      "Lámina de acero en diversos calibres y acabados.",
    href: "/productos/lamina",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M4 7h16v2H4zM4 11h16v2H4zM4 15h16v2H4z" />
        <path d="M6 5l14 0M6 19l14 0" strokeOpacity="0.4" />
      </svg>
    ),
  },
  {
    id: "perfiles",
    title: "Perfiles",
    description:
      "Perfiles metálicos ligeros y estructurales.",
    href: "/productos/perfiles",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M5 4h14v2H13v12h6v2H5v-2h6V6H5z" />
        <path d="M8 10h8" strokeOpacity="0.4" />
      </svg>
    ),
  },
  {
    id: "joist-girders",
    title: "Joist & Girders",
    description:
      "Vigas de alma abierta y cabrillas diseñadas y fabricadas conforme a las especificaciones de ingeniería de cada proyecto.",
    href: "/productos/joist-girders",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M3 8l4-4h10l4 4v12H3z" />
        <path d="M3 8h18" />
        <path d="M7 4v4" strokeOpacity="0.4" />
      </svg>
    ),
  },
];

const gridParentVariants = {
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};

const gridChildVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
};

export function Products() {
  const shouldReduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Fade triggers around 60% into section, slower transition
  const overlayOpacity = useTransform(scrollYProgress, [0.25, 0.45], [0, 1]);

  return (
    <section ref={sectionRef} className="relative py-24 lg:py-32 bg-[#2261AE]">
      {/* Fade-in overlay that transitions to #0F2440 */}
      <motion.div
        className="absolute inset-0 bg-[#1B4375] pointer-events-none"
        style={{ opacity: overlayOpacity }}
      />

      <div className="relative max-w-[1536px] mx-auto px-6 lg:px-12 xl:px-16">
        <MotionSection className="mb-16">
          <div className="flex items-center gap-3 mb-5">
            <span className="block w-12 h-[3px] bg-[#FF7F00]" />
            <span className="font-[family-name:var(--font-barlow)] text-sm font-bold uppercase tracking-[0.14em] text-[#FF7F00]">
              Productos
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2
              className="font-[family-name:var(--font-barlow)] font-black uppercase leading-none text-white"
              style={{ fontSize: "clamp(36px, 5vw, 60px)" }}
            >
              Nuestros
              <br />
              Productos
            </h2>
            <p className="font-[family-name:var(--font-inter)] text-white/70 max-w-md leading-relaxed text-sm md:text-base">
              Amplia variedad de aceros para las necesidades de la industria, en diferentes grados y especificaciones.
            </p>
          </div>
        </MotionSection>

        {/* Products grid — 2x2 */}
        <motion.div
          className="grid md:grid-cols-2 gap-6"
          variants={shouldReduce ? {} : gridParentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={shouldReduce ? {} : gridChildVariants}
              className="group bg-white/8 backdrop-blur-sm border border-white/10 p-8 flex flex-col transition-colors duration-200 hover:bg-white/15 hover:border-[#FF7F00]/40"
            >
              {/* Product icon */}
              <div className="text-[#FF7F00] mb-6">{product.icon}</div>

              <h3 className="font-[family-name:var(--font-barlow)] text-2xl font-bold uppercase text-white mb-3 group-hover:text-[#FF7F00] transition-colors duration-200">
                {product.title}
              </h3>

              <p className="font-[family-name:var(--font-inter)] text-sm text-white/70 leading-relaxed mb-8 flex-1">
                {product.description}
              </p>

              <motion.a
                href={product.href}
                whileHover={shouldReduce ? {} : { x: 4 }}
                transition={{ duration: 0.18, ease: [0.23, 1, 0.32, 1] }}
                className="inline-flex items-center gap-2 font-[family-name:var(--font-barlow)] text-sm font-bold uppercase tracking-widest text-[#FF7F00] hover:text-white transition-colors duration-200"
              >
                Ver más
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
