"use client";

import { motion, useReducedMotion } from "framer-motion";

export function ContactCTA2() {
  const shouldReduce = useReducedMotion();

  return (
    <section className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 min-h-[480px]">
          {/* Left — orange solid panel */}
          <motion.div
            initial={shouldReduce ? false : { opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            className="bg-[#FF7F00] px-8 lg:px-16 py-16 lg:py-24 flex flex-col justify-between relative overflow-hidden"
          >
            {/* Ghost text */}
            <div
              className="absolute bottom-0 right-0 font-[family-name:var(--font-barlow)] font-black text-white/10 leading-none pointer-events-none select-none"
              style={{ fontSize: "clamp(80px, 14vw, 160px)" }}
              aria-hidden="true"
            >
              NL
            </div>

            <div>
              <div className="font-[family-name:var(--font-barlow)] text-xs font-bold uppercase tracking-[0.22em] text-white/60 mb-6">
                Cotización sin costo
              </div>
              <h2
                className="font-[family-name:var(--font-barlow)] font-black uppercase leading-none text-white"
                style={{ fontSize: "clamp(36px, 4.5vw, 56px)" }}
              >
                Cuéntanos tu
                <br />
                proyecto.
                <br />
                Respondemos hoy.
              </h2>
            </div>

            <motion.a
              href="https://wa.me/528183600414?text=Hola%2C%20me%20gustar%C3%ADa%20solicitar%20una%20cotizaci%C3%B3n"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Solicitar cotización por WhatsApp"
              whileHover={shouldReduce ? {} : { y: -3, scale: 1.02 }}
              whileTap={shouldReduce ? {} : { scale: 0.96, y: 0 }}
              transition={{ duration: 0.18, ease: [0.23, 1, 0.32, 1] }}
              className="mt-10 inline-flex items-center gap-3 bg-white hover:bg-gray-50 text-[#FF7F00] font-[family-name:var(--font-barlow)] text-sm font-bold uppercase tracking-widest px-8 py-4 transition-colors duration-200 self-start cursor-pointer"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Solicitar cotización
            </motion.a>
          </motion.div>

          {/* Right — contact info on white */}
          <motion.div
            initial={shouldReduce ? false : { opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
            className="px-8 lg:px-16 py-16 lg:py-24 flex flex-col justify-between bg-white"
          >
            <div className="flex flex-col gap-8">
              {[
                {
                  label: "WhatsApp",
                  value: "+52 81 8360-0414",
                  href: "https://wa.me/528183600414",
                  external: true,
                  ariaLabel: "Contactar por WhatsApp",
                },
                {
                  label: "Teléfono LADA 800",
                  value: "800 112 2376",
                  href: "tel:8001122376",
                  external: false,
                },
                {
                  label: "Correo de ventas",
                  value: "ventas@aamsa.com",
                  href: "mailto:ventas@aamsa.com",
                  external: false,
                },
              ].map((contact, i) => (
                <motion.div
                  key={contact.label}
                  initial={shouldReduce ? false : { opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.08, ease: [0.23, 1, 0.32, 1] }}
                >
                  <div className="font-[family-name:var(--font-inter)] text-xs text-gray-400 uppercase tracking-widest mb-1">
                    {contact.label}
                  </div>
                  <a
                    href={contact.href}
                    target={contact.external ? "_blank" : undefined}
                    rel={contact.external ? "noopener noreferrer" : undefined}
                    aria-label={contact.ariaLabel}
                    className="font-[family-name:var(--font-barlow)] text-2xl font-bold uppercase text-[#0D0F1A] hover:text-[#FF7F00] transition-colors duration-200"
                  >
                    {contact.value}
                  </a>
                </motion.div>
              ))}
            </div>

            {/* Address */}
            <div className="mt-10 pt-8 border-t border-gray-100">
              <div className="font-[family-name:var(--font-inter)] text-xs text-gray-400 uppercase tracking-widest mb-2">
                Ubicación
              </div>
              <address className="font-[family-name:var(--font-inter)] text-sm text-gray-600 not-italic leading-relaxed">
                Av. Benito Juárez Km 7.5 S/N Col. Los Lermas
                <br />
                Guadalupe, Nuevo León, C.P. 67188
              </address>
              <div className="mt-4 font-[family-name:var(--font-inter)] text-xs text-gray-400">
                Lunes a viernes: 8:00 – 18:00 h · Sábado: 8:00 – 13:00 h
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
