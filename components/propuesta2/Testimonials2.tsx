"use client";

import { motion, useReducedMotion } from "framer-motion";

const featured = {
  quote:
    "Llevamos más de 10 años trabajando con Aamsa para todo el habilitado de lámina de nuestra línea de producción. Las tolerancias son exactas y los tiempos de entrega, confiables. No consideramos otro proveedor.",
  author: "Gerente de Compras",
  company: "Empresa de manufactura metálica, Monterrey N.L.",
};

const secondary = [
  {
    quote:
      "Necesitábamos piezas de acero con geometrías complejas. Aamsa entregó en plazo, con las especificaciones al milímetro. El equipo de ventas siempre responde rápido.",
    author: "Director de Proyectos",
    company: "Contratista industrial, Nuevo León",
  },
  {
    quote:
      "El servicio de doblez CNC nos permite reducir pasos en ensamble. Las piezas llegan listas para soldar, con ángulos perfectos. Eso vale mucho en producción en serie.",
    author: "Jefe de Planta",
    company: "Empresa automotriz Tier 2, Monterrey",
  },
];

export function Testimonials2() {
  const shouldReduce = useReducedMotion();

  return (
    <section className="py-24 lg:py-32 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={shouldReduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="block w-8 h-[3px] bg-[#FF7F00]" />
            <span className="font-[family-name:var(--font-barlow)] text-xs font-bold uppercase tracking-[0.18em] text-[#FF7F00]">
              Testimonios
            </span>
          </div>
          <h2
            className="font-[family-name:var(--font-barlow)] font-black uppercase leading-none text-[#0D0F1A]"
            style={{ fontSize: "clamp(32px, 4.5vw, 54px)" }}
          >
            Lo que dicen
            <br />
            nuestros clientes
          </h2>
        </motion.div>

        {/* Layout: large featured + 2 small cards */}
        <div className="grid lg:grid-cols-12 gap-6">
          {/* Featured quote — large, orange accent */}
          <motion.blockquote
            initial={shouldReduce ? false : { opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease: [0.23, 1, 0.32, 1] }}
            className="lg:col-span-6 bg-[#0D0F1A] p-10 lg:p-12 flex flex-col justify-between relative overflow-hidden"
          >
            {/* Orange left accent */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#FF7F00]" aria-hidden="true" />
            {/* Large quote mark */}
            <div
              className="font-[family-name:var(--font-barlow)] font-black text-white/08 leading-none absolute -top-2 -right-2"
              style={{ fontSize: "160px" }}
              aria-hidden="true"
            >
              &rdquo;
            </div>

            <div>
              {/* Stars */}
              <div className="flex gap-1 mb-6" aria-label="5 de 5 estrellas">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#FF7F00" aria-hidden="true">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
              <p className="font-[family-name:var(--font-inter)] text-base text-white/80 leading-relaxed relative z-10">
                &ldquo;{featured.quote}&rdquo;
              </p>
            </div>
            <footer className="mt-8 border-t border-white/10 pt-6">
              <div className="font-[family-name:var(--font-barlow)] text-base font-bold uppercase text-white">
                {featured.author}
              </div>
              <div className="font-[family-name:var(--font-inter)] text-xs text-white/40 mt-0.5">
                {featured.company}
              </div>
            </footer>
          </motion.blockquote>

          {/* Two smaller cards */}
          <div className="lg:col-span-6 grid grid-cols-1 gap-6">
            {secondary.map((t, i) => (
              <motion.blockquote
                key={i}
                initial={shouldReduce ? false : { opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.12, ease: [0.23, 1, 0.32, 1] }}
                className="bg-[#F7F7F8] border border-gray-200 border-l-[3px] border-l-[#FF7F00] p-8"
              >
                <div className="flex gap-1 mb-4" aria-label="5 de 5 estrellas">
                  {[...Array(5)].map((_, s) => (
                    <svg key={s} width="12" height="12" viewBox="0 0 24 24" fill="#FF7F00" aria-hidden="true">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <p className="font-[family-name:var(--font-inter)] text-sm text-gray-600 leading-relaxed mb-5">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <footer className="border-t border-gray-200 pt-4">
                  <div className="font-[family-name:var(--font-barlow)] text-sm font-bold uppercase text-[#0D0F1A]">
                    {t.author}
                  </div>
                  <div className="font-[family-name:var(--font-inter)] text-xs text-gray-400 mt-0.5">
                    {t.company}
                  </div>
                </footer>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
