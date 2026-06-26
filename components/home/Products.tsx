"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MotionSection } from "@/components/ui/MotionSection";

const products = [
  {
    id: "gabinetes",
    title: "Gabinetes",
    description:
      "Gabinetes metálicos industriales fabricados a medida para resguardo de equipo eléctrico, electrónico y de control.",
    href: "/productos/gabinetes",
  },
  {
    id: "bases-maquinaria",
    title: "Bases para Maquinaria",
    description:
      "Estructuras y bases de acero diseñadas para soportar maquinaria pesada con estabilidad y resistencia.",
    href: "/productos/bases-maquinaria",
  },
  {
    id: "prototipos",
    title: "Prototipos",
    description:
      "Desarrollo de prototipos en acero para validación de diseño antes de entrar a producción en serie.",
    href: "/productos/prototipos",
  },
  {
    id: "guardas-seguridad",
    title: "Guardas de Seguridad",
    description:
      "Guardas y protecciones metálicas para maquinaria industrial, cumpliendo normativas de seguridad.",
    href: "/productos/guardas-seguridad",
  },
  {
    id: "piezas-especiales",
    title: "Piezas Especiales",
    description:
      "Fabricación de piezas únicas y componentes especiales según plano o muestra del cliente.",
    href: "/productos/piezas-especiales",
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

  return (
    <section className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
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
              Lo que
              <br />
              Fabricamos
            </h2>
            <p className="font-[family-name:var(--font-inter)] text-white/70 max-w-md leading-relaxed text-sm md:text-base">
              Productos terminados y componentes metálicos para la industria.
              Desde prototipos hasta producción en serie, cada pieza fabricada
              a la medida de tu proyecto.
            </p>
          </div>
        </MotionSection>

        {/* Products grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={shouldReduce ? {} : gridParentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={shouldReduce ? {} : gridChildVariants}
              className="group bg-white/10 backdrop-blur-sm border border-white/15 p-8 flex flex-col transition-colors duration-200 hover:bg-white/15 hover:border-[#FF7F00]/40"
            >
              {/* Icon dot */}
              <div className="w-3 h-3 bg-[#FF7F00] mb-6" />

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
