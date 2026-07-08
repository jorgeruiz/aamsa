"use client";

import { motion, useReducedMotion, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const services = [
  {
    id: "corte-laser",
    image: "/corte-laser-lamina-acero-aamsa.webp",
    title: "Corte Láser",
    description:
      "Potencia de 6,000 W con área máxima de 2,500 x 12,000 mm. Precisión superior para piezas con tolerancias estrictas.",
    spec: "6,000 W · 2,500 x 12,000 mm",
    href: "/servicios/corte-laser",
    featured: true,
  },
  {
    id: "corte-plasma-cnc",
    image: "/corte-plasma-cnc-acero-aamsa.webp",
    title: "Corte Plasma CNC",
    description: "Corriente de 400 A con área máxima de 3 x 15 m. Menos deformación térmica en alto volumen.",
    spec: "400 A · 3 x 15 m",
    href: "/servicios/corte-plasma-cnc",
    featured: false,
  },
  {
    id: "doblez-cnc",
    image: "/doblez-cnc.png",
    title: "Doblez CNC",
    description: "Prensa de 2,000 toneladas con longitud de 16 m. Dobleces exactos y repetibles.",
    spec: "2,000 ton · 16 m",
    href: "/servicios/doblez-cnc",
    featured: false,
  },
  {
    id: "corte-guillotina",
    image: "/corte-guillotina-lamina-aamsa.webp",
    title: "Corte Guillotina",
    description: "Espesor hasta ¾\" con longitud de 22'. Alto volumen y cortes rectos en serie.",
    spec: "¾\" espesor · 22' longitud",
    href: "/servicios/corte-guillotina",
    featured: false,
  },
  {
    id: "corte-pantografo",
    image: "/corte-pantografo-metal-aamsa.webp",
    title: "Pantógrafo",
    description: "Oxicorte con 4 antorchas y área máxima de 3 x 15 m. Cortes rectos y figuras.",
    spec: "4 antorchas · 3 x 15 m",
    href: "/servicios/corte-pantografo",
    featured: false,
  },
  {
    id: "rolado",
    image: "/rolado-lamina-acero-aamsa.webp",
    title: "Rolado",
    description: "Espesor hasta 10 mm con diámetro desde 2 m. Curvado para múltiples industrias.",
    spec: "10 mm espesor · Desde Ø 2 m",
    href: "/servicios/rolado",
    featured: false,
  },
];

/** Spotlight card — radial gradient follows the cursor + service photo thumbnail */
function SpotlightCard({ service }: { service: typeof services[0] }) {
  const shouldReduce = useReducedMotion();
  const ref = useRef<HTMLAnchorElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const spotlightX = useTransform(mouseX, (v) => `${v}px`);
  const spotlightY = useTransform(mouseY, (v) => `${v}px`);

  function handleMouseMove(e: React.MouseEvent) {
    if (shouldReduce || !ref.current) return;
    const { left, top } = ref.current.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  }

  function handleMouseLeave() {
    mouseX.set(-200);
    mouseY.set(-200);
  }

  return (
    <motion.a
      ref={ref}
      href={service.href}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={false}
      whileHover={shouldReduce ? {} : { y: -2 }}
      whileTap={{ scale: 0.99 }}
      transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
      className="group relative block bg-white border border-gray-200 hover:border-[#FF7F00]/40 overflow-hidden transition-colors duration-200"
      style={{
        borderLeft: "3px solid #FF7F00",
      }}
    >
      {/* Service photo thumbnail */}
      <div className="relative w-full h-32 overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover opacity-85 group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white/60 to-transparent" />
      </div>

      {/* Spotlight effect */}
      {!shouldReduce && (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(200px circle at ${spotlightX} ${spotlightY}, rgba(255,127,0,0.06), transparent)`,
          }}
        />
      )}

      <div className="p-6">
      <h3 className="font-[family-name:var(--font-barlow)] text-xl font-bold uppercase text-[#0D0F1A] mb-3 group-hover:text-[#FF7F00] transition-colors duration-200">
        {service.title}
      </h3>
      <p className="font-[family-name:var(--font-inter)] text-sm text-gray-500 leading-relaxed mb-5">
        {service.description}
      </p>
      <div className="flex items-center justify-between">
        <span className="font-[family-name:var(--font-inter)] text-xs text-gray-400 uppercase tracking-wider">
          {service.spec}
        </span>
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#FF7F00"
          strokeWidth="2"
          className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          aria-hidden="true"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </div>
      </div>{/* /p-6 */}
    </motion.a>
  );
}

const stagger = {
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};
const item = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.23, 1, 0.32, 1] } },
};

export function Services2() {
  const shouldReduce = useReducedMotion();
  const featured = services[0];
  const rest = services.slice(1);

  return (
    <section className="py-24 lg:py-32 bg-[#F7F7F8]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={shouldReduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
          className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="block w-8 h-[3px] bg-[#FF7F00]" />
              <span className="font-[family-name:var(--font-barlow)] text-xs font-bold uppercase tracking-[0.18em] text-[#FF7F00]">
                Servicios
              </span>
            </div>
            <h2
              className="font-[family-name:var(--font-barlow)] font-black uppercase leading-none text-[#0D0F1A]"
              style={{ fontSize: "clamp(32px, 4.5vw, 54px)" }}
            >
              Manufactura de metal
              <br />
              de precisión
            </h2>
          </div>
          <p className="font-[family-name:var(--font-inter)] text-sm text-gray-500 max-w-xs leading-relaxed">
            Seis procesos integrados en una sola planta, para la industria del noreste de México.
          </p>
        </motion.div>

        {/* Asymmetric bento: featured (large) + 2x2+1 grid */}
        <div className="grid lg:grid-cols-12 gap-4">
          {/* Featured — large left card */}
          <motion.div
            className="lg:col-span-5"
            initial={shouldReduce ? false : { opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease: [0.23, 1, 0.32, 1] }}
          >
            <Link
              href={featured.href}
              className="group flex flex-col justify-between h-full bg-[#0D0F1A] p-10 min-h-[340px] lg:min-h-full relative overflow-hidden"
            >
              {/* Background photo */}
              <Image
                src={featured.image}
                alt=""
                fill
                className="object-cover opacity-20 group-hover:opacity-30 group-hover:scale-105 transition-all duration-700"
              />
              {/* Orange top border */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#FF7F00] z-10" />
              {/* Ghost number */}
              <div className="absolute bottom-4 right-4 font-[family-name:var(--font-barlow)] font-black text-white/05 leading-none z-10" style={{ fontSize: "120px" }} aria-hidden="true">1</div>

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 bg-[#FF7F00]/15 border border-[#FF7F00]/30 px-3 py-1 mb-8">
                  <span className="font-[family-name:var(--font-barlow)] text-[11px] font-bold uppercase tracking-[0.16em] text-[#FF7F00]">
                    Servicio destacado
                  </span>
                </div>
                <h3 className="font-[family-name:var(--font-barlow)] text-4xl font-black uppercase text-white mb-4 group-hover:text-[#FF7F00] transition-colors duration-200">
                  {featured.title}
                </h3>
                <p className="font-[family-name:var(--font-inter)] text-sm text-white/60 leading-relaxed max-w-sm">
                  {featured.description}
                </p>
              </div>
              <div className="relative z-10 flex items-center justify-between mt-8">
                <span className="font-[family-name:var(--font-inter)] text-xs text-white/40 uppercase tracking-wider">
                  {featured.spec}
                </span>
                <div className="w-9 h-9 border border-white/20 flex items-center justify-center group-hover:bg-[#FF7F00] group-hover:border-[#FF7F00] transition-all duration-200">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* 5 remaining services — 2 cols */}
          <motion.div
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4"
            variants={shouldReduce ? {} : stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {rest.map((service) => (
              <motion.div key={service.id} variants={shouldReduce ? {} : item}>
                <SpotlightCard service={service} />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={shouldReduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
          className="mt-10 flex justify-center"
        >
          <motion.a
            href="https://wa.me/528183600414?text=Hola%2C%20me%20gustar%C3%ADa%20solicitar%20una%20cotizaci%C3%B3n"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Solicitar cotización por WhatsApp"
            whileHover={shouldReduce ? {} : { y: -3, scale: 1.02 }}
            whileTap={shouldReduce ? {} : { scale: 0.96, y: 0 }}
            transition={{ duration: 0.18, ease: [0.23, 1, 0.32, 1] }}
            className="inline-flex items-center gap-3 bg-[#FF7F00] hover:bg-[#CC6600] text-white font-[family-name:var(--font-barlow)] text-sm font-bold uppercase tracking-widest px-10 py-4 transition-colors duration-200 cursor-pointer"
          >
            Solicitar Cotización
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
