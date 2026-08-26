"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { MotionSection } from "@/components/ui/MotionSection";

const products = [
  {
    id: "placas",
    title: "Placas de Acero",
    description:
      "Placa de acero al carbón y resistentes a la abrasión, incluyendo A36, SAE1045, SAE4140, A572 Gr. 50, Brinar, Maxil, Hardox y Strenx.",
    href: "/productos/placa",
    image: "/placa-home.jpeg",
  },
  {
    id: "lamina",
    title: "Lámina",
    description:
      "Lámina de acero en diversos calibres y acabados.",
    href: "/productos/lamina",
    image: "/estructurales-home.jpeg",
  },
  {
    id: "perfiles",
    title: "Perfiles",
    description:
      "Perfiles metálicos ligeros y estructurales.",
    href: "/productos/perfiles",
    image: "/perfiles-ligeros-home.jpeg",
  },
  {
    id: "joist-girders",
    title: "Joist & Girders",
    description:
      "Vigas de alma abierta y cabrillas diseñadas y fabricadas conforme a las especificaciones de ingeniería de cada proyecto.",
    href: "/productos/joists-girders",
    image: "/joist-home.jpeg",
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

      <div className="relative max-w-[1440px] mx-auto px-6 lg:px-10">
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
              className="group relative overflow-hidden border border-white/10 min-h-[320px] flex flex-col justify-end transition-colors duration-300 hover:border-[#FF7F00]/40"
            >
              {/* Background image */}
              <Image
                src={product.image}
                alt={product.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-all duration-500 brightness-[0.35] group-hover:brightness-[0.65] group-hover:scale-105"
              />

              {/* Color overlay */}
              <div className="absolute inset-0 bg-[#0F2440]/60 transition-opacity duration-500 group-hover:opacity-30" />

              {/* Content */}
              <div className="relative z-10 p-8 flex flex-col">
                <h3 className="font-[family-name:var(--font-barlow)] text-2xl font-bold uppercase text-white mb-3 group-hover:text-[#FF7F00] transition-colors duration-200">
                  {product.title}
                </h3>

                <p className="font-[family-name:var(--font-inter)] text-sm text-white/70 leading-relaxed mb-6">
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
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
