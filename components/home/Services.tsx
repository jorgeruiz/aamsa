"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { MotionSection } from "@/components/ui/MotionSection";

const services = [
  {
    id: "corte-laser",
    image: "/corte-laser.png",
    title: "Corte Láser",
    description:
      "Corte de lámina y placa de acero con calidad superior. Ideal para piezas con tolerancias estrictas y acabados de calidad en series medianas y grandes.",
    spec: "Hasta 25mm · Acero, Inox, Aluminio",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden="true"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
    href: "/servicios/corte-laser",
  },
  {
    id: "corte-plasma-cnc",
    image: "/corte-plasma-cnc.png",
    title: "Corte Plasma CNC",
    description:
      "Para placa gruesa de acero al carbón. Control numérico computarizado garantiza repetibilidad en producciones de alto volumen.",
    spec: "Hasta 50mm · Acero al carbón",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
      </svg>
    ),
    href: "/servicios/corte-plasma-cnc",
  },
  {
    id: "doblez-cnc",
    image: "/doblez-cnc.png",
    title: "Doblez CNC",
    description:
      "Doblado con prensa hidráulica y control numérico. Ángulos controlados, radios consistentes y dimensiones reproducibles en cada pieza.",
    spec: "Hasta 6m longitud · Múltiples calibres",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden="true"
      >
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    href: "/servicios/doblez-cnc",
  },
  {
    id: "corte-guillotina",
    image: "/corte-guillotina.png",
    title: "Corte Guillotina",
    description:
      "Corte recto de lámina en grandes formatos. Velocidad y economía para troquelería, habilitado de material y producción de blancos en serie.",
    spec: "Lámina hasta 10mm · Corte recto",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden="true"
      >
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <path d="M16 10a4 4 0 01-8 0" />
      </svg>
    ),
    href: "/servicios/corte-guillotina",
  },
  {
    id: "corte-pantografo",
    image: "/corte-pantografo.png",
    title: "Corte Pantógrafo",
    description:
      "Versatilidad para piezas de geometría irregular y formatos especiales. Opción económica para prototipos y lotes pequeños con perfil complejo.",
    spec: "Formatos irregulares · Acero",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden="true"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
    href: "/servicios/corte-pantografo",
  },
  {
    id: "rolado",
    image: "/rolado.png",
    title: "Rolado",
    description:
      "Formado curvo de lámina, placa y perfiles metálicos. Arcos, cilindros y formas cónicas para proyectos de construcción, instalaciones y manufactura.",
    spec: "Lámina, placa y perfiles · Curvas y arcos",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4l3 3" />
      </svg>
    ),
    href: "/servicios/rolado",
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

export function Services() {
  const shouldReduce = useReducedMotion();

  return (
    <section className="relative py-24 lg:py-32 bg-[#2261AE]">
      {/* Section header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <MotionSection className="mb-16">
          <div className="flex items-center gap-3 mb-5">
            <span className="block w-12 h-[3px] bg-[#FF7F00]" />
            <span className="font-[family-name:var(--font-barlow)] text-sm font-bold uppercase tracking-[0.14em] text-[#FF7F00]">
              Servicios
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2
              className="font-[family-name:var(--font-barlow)] font-black uppercase leading-none text-white"
              style={{ fontSize: "clamp(36px, 5vw, 60px)" }}
            >
              Transformación
              <br />
              de Acero Industrial
            </h2>
            <p className="font-[family-name:var(--font-inter)] text-white/70 max-w-sm leading-relaxed text-sm md:text-base">
              Seis procesos integrados bajo un mismo techo. Habilitado de
              material y maquila para la industria del noreste de México.
            </p>
          </div>
        </MotionSection>

        {/* Services grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={shouldReduce ? {} : gridParentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {services.map((service) => (
            <motion.article
              key={service.id}
              variants={shouldReduce ? {} : gridChildVariants}
              whileHover={
                shouldReduce ? {} : { scale: 1.02, transition: { duration: 0.2, ease: "easeOut" } }
              }
            >
              <Link
                href={service.href}
                className="group block bg-[#1B4375] border border-white/10 border-t-[3px] border-t-[#FF7F00] h-full transition-colors duration-200 hover:border-[#FF7F00]/40 hover:bg-[#2261AE] overflow-hidden"
              >
                {/* Service photo */}
                <div className="relative w-full h-40 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1B4375] via-[#1B4375]/30 to-transparent" />
                </div>

                <div className="p-8 pt-4">
                  {/* Icon */}
                  <div className="text-[#FF7F00] mb-6">{service.icon}</div>

                {/* Title */}
                <h3 className="font-[family-name:var(--font-barlow)] text-2xl font-bold uppercase text-white mb-3 group-hover:text-[#FF7F00] transition-colors duration-200">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="font-[family-name:var(--font-inter)] text-sm text-white/70 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Spec badge */}
                <div className="flex items-center justify-between">
                  <span className="font-[family-name:var(--font-inter)] text-xs text-white/50 uppercase tracking-wider">
                    {service.spec}
                  </span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#FF7F00"
                    strokeWidth="2"
                    className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-200"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
                </div>{/* /p-8 wrapper */}
              </Link>
            </motion.article>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <MotionSection className="mt-12 text-center">
          <motion.a
            href="https://wa.me/528115115660?text=Hola%2C%20me%20gustar%C3%ADa%20solicitar%20una%20cotizaci%C3%B3n"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Solicitar cotización por WhatsApp"
            whileHover={shouldReduce ? {} : { y: -3, scale: 1.02 }}
            whileTap={shouldReduce ? {} : { scale: 0.96, y: 0 }}
            transition={{ duration: 0.18, ease: [0.23, 1, 0.32, 1] }}
            className="inline-flex items-center gap-3 bg-[#FF7F00] hover:bg-[#CC6600] text-white font-[family-name:var(--font-barlow)] text-base font-bold uppercase tracking-widest px-10 py-4 transition-colors duration-200 cursor-pointer"
          >
            Solicitar Cotización
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </motion.a>
        </MotionSection>
      </div>
    </section>
  );
}
