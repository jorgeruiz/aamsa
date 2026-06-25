"use client";

import { motion, useReducedMotion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Envía tu plano",
    description:
      "Comparte tu archivo DXF/DWG o especificaciones por WhatsApp o correo. Sin formatos complicados.",
  },
  {
    number: "02",
    title: "Cotización en 24 h",
    description:
      "Nuestro equipo responde con precio, tiempo de entrega y proceso recomendado.",
  },
  {
    number: "03",
    title: "Programación",
    description:
      "Con tu aprobación, tu orden entra a producción. Confirmamos fecha de entrega.",
  },
  {
    number: "04",
    title: "Entrega puntual",
    description:
      "Fabricación con control dimensional pieza a pieza. Tolerancias garantizadas.",
  },
];

export function Process2() {
  const shouldReduce = useReducedMotion();

  return (
    <section className="py-24 lg:py-32 bg-[#F7F7F8]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={shouldReduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="block w-8 h-[3px] bg-[#FF7F00]" />
            <span className="font-[family-name:var(--font-barlow)] text-xs font-bold uppercase tracking-[0.18em] text-[#FF7F00]">
              Proceso
            </span>
          </div>
          <h2
            className="font-[family-name:var(--font-barlow)] font-black uppercase leading-none text-[#0D0F1A]"
            style={{ fontSize: "clamp(32px, 4.5vw, 54px)" }}
          >
            De plano a pieza
            <br />
            <span className="text-[#FF7F00]">en cuatro pasos</span>
          </h2>
        </motion.div>

        {/* Horizontal timeline */}
        <div className="relative">
          {/* Connecting line — animates from left on scroll */}
          <div className="absolute top-8 left-0 right-0 h-px bg-gray-200 hidden lg:block" aria-hidden="true">
            <motion.div
              className="h-full bg-[#FF7F00] origin-left"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={shouldReduce ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: i * 0.1, ease: [0.23, 1, 0.32, 1] }}
                className="relative"
              >
                {/* Step dot — sits on the line */}
                <div className="relative mb-8 hidden lg:block">
                  <div className="w-16 h-16 bg-white border-2 border-gray-200 flex items-center justify-center relative z-10">
                    <span className="font-[family-name:var(--font-barlow)] text-2xl font-black text-[#FF7F00]">
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Mobile number */}
                <div className="lg:hidden mb-4">
                  <span className="font-[family-name:var(--font-barlow)] text-4xl font-black text-[#FF7F00]/20">
                    {step.number}
                  </span>
                </div>

                <h3 className="font-[family-name:var(--font-barlow)] text-xl font-bold uppercase text-[#0D0F1A] mb-3 leading-tight">
                  {step.title}
                </h3>
                <p className="font-[family-name:var(--font-inter)] text-sm text-gray-500 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTAs */}
        <motion.div
          initial={shouldReduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
          className="mt-14 flex flex-col sm:flex-row gap-4"
        >
          <motion.a
            href="https://wa.me/528183600414?text=Hola%2C%20me%20gustar%C3%ADa%20solicitar%20una%20cotizaci%C3%B3n"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Solicitar cotización por WhatsApp"
            whileHover={shouldReduce ? {} : { y: -3, scale: 1.02 }}
            whileTap={shouldReduce ? {} : { scale: 0.96, y: 0 }}
            transition={{ duration: 0.18, ease: [0.23, 1, 0.32, 1] }}
            className="inline-flex items-center gap-3 bg-[#FF7F00] hover:bg-[#CC6600] text-white font-[family-name:var(--font-barlow)] text-sm font-bold uppercase tracking-widest px-8 py-4 transition-colors duration-200 cursor-pointer"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Cotizar por WhatsApp
          </motion.a>
          <motion.a
            href="mailto:ventas@aamsa.com"
            whileHover={shouldReduce ? {} : { y: -2 }}
            whileTap={shouldReduce ? {} : { scale: 0.96, y: 0 }}
            transition={{ duration: 0.18, ease: [0.23, 1, 0.32, 1] }}
            className="inline-flex items-center gap-2 border border-gray-300 hover:border-[#0D0F1A] text-gray-600 hover:text-[#0D0F1A] font-[family-name:var(--font-barlow)] text-sm font-bold uppercase tracking-widest px-8 py-4 transition-colors duration-200 cursor-pointer"
          >
            ventas@aamsa.com
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
