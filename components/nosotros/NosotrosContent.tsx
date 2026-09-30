"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MotionSection } from "@/components/ui/MotionSection";

const valores = [
  {
    title: "Honestidad",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "Disciplina",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    title: "Orden",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <line x1="8" y1="6" x2="21" y2="6" />
        <line x1="8" y1="12" x2="21" y2="12" />
        <line x1="8" y1="18" x2="21" y2="18" />
        <line x1="3" y1="6" x2="3.01" y2="6" />
        <line x1="3" y1="12" x2="3.01" y2="12" />
        <line x1="3" y1="18" x2="3.01" y2="18" />
      </svg>
    ),
  },
  {
    title: "Compromiso",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
      </svg>
    ),
  },
  {
    title: "Seguridad",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M9 12l2 2 4-4" />
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
];

const timeline = [
  { year: "1981", text: "Fundación en Guadalupe, Nuevo León. Inicio de operaciones con corte por pantógrafo, guillotina y prensas convencionales." },
  { year: "1997", text: "Pioneros en México: adquisición del primer equipo de corte láser CNC, ofreciendo precisión sin precedentes." },
  { year: "2005", text: "Obtención del certificado de calidad ISO 9001-2000 por Lloyds Register de México." },
  { year: "Hoy", text: "Centro de servicio integral con corte láser fibra óptica, plasma CNC, prensa CNC, rolado y más, sirviendo a industrias de todo México y el extranjero." },
];

export function NosotrosContent() {
  const shouldReduce = useReducedMotion();

  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-20 lg:pt-44 lg:pb-28 bg-[#1B4375] overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none"
          aria-hidden="true"
        >
          <span
            className="font-[family-name:var(--font-barlow)] font-black text-white opacity-[0.03]"
            style={{ fontSize: "clamp(100px, 20vw, 300px)" }}
          >
            1981
          </span>
        </div>

        <div className="relative max-w-[1440px] mx-auto px-6 lg:px-10">
          <MotionSection>
            <div className="flex items-center gap-3 mb-6">
              <span className="block w-12 h-[3px] bg-[#FF7F00]" />
              <span className="font-[family-name:var(--font-barlow)] text-sm font-bold uppercase tracking-[0.14em] text-[#FF7F00]">
                Nuestra empresa
              </span>
            </div>
            <h1
              className="font-[family-name:var(--font-barlow)] font-black uppercase leading-none text-white max-w-3xl"
              style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
            >
              Más de 40 años
              <br />
              <span className="text-[#FF7F00]">transformando acero</span>
            </h1>
            <p className="mt-6 font-[family-name:var(--font-inter)] text-[#B0C4DE] leading-relaxed max-w-2xl text-lg">
              Desde 1981, impulsados por la innovación y el compromiso con la calidad, nos hemos consolidado como uno de los principales centros de servicio de acero en México.
            </p>
          </MotionSection>
        </div>
      </section>

      {/* Historia */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <MotionSection>
              <div className="flex items-center gap-3 mb-6">
                <span className="block w-12 h-[3px] bg-[#FF7F00]" />
                <span className="font-[family-name:var(--font-barlow)] text-sm font-bold uppercase tracking-[0.14em] text-[#FF7F00]">
                  Nuestra historia
                </span>
              </div>
              <h2
                className="font-[family-name:var(--font-barlow)] font-black uppercase leading-none text-[#1B4375] mb-8"
                style={{ fontSize: "clamp(32px, 4vw, 48px)" }}
              >
                De un taller local
                <br />a referentes nacionales
              </h2>
              <div className="space-y-5 font-[family-name:var(--font-inter)] text-[#5a7a9c] leading-relaxed">
                <p>
                  Fundada en 1981, en Guadalupe, Nuevo León, México, Abastecedora de Aceros y Maquilas S.A de C.V. inició sus operaciones ofreciendo los servicios de corte por pantógrafo, guillotina, prensas convencionales y la compra-venta de productos de acero.
                </p>
                <p>
                  Nuestra visión de enfocarnos en ser uno de los mejores Centros de Servicio Acero del país nos llevó a ser pioneros en México en la utilización de tecnología de vanguardia, y en 1997 adquirimos el primer equipo de corte láser CNC, siendo así una de las primeras empresas a nivel nacional en ofrecer cortes en acero con mucha más precisión al público en general.
                </p>
                <p>
                  Posteriormente se sumaron a la lista de procesos el corte láser con fibra óptica, plasma, prensa CNC, rolado, entre otros. Nos transformamos en socio estratégico para nuestros clientes en la fabricación de productos desde prototipos, baja, mediana y alta producción para las industrias metal-mecánica, automotriz, transporte, ferrocarrilera, agropecuaria, alimenticia, petroquímica, energética, eólica, médica, limpieza, arquitectónica, entre otras.
                </p>
                <p>
                  Por ello brindamos servicio a empresas nacionales, transnacionales y extranjeras, así como a personas físicas, con las cuales colaboramos cercanamente en sus proyectos y necesidades incluyendo exportaciones directas, virtuales y/o permisos de Sub-Maquilas IMMEX.
                </p>
              </div>
            </MotionSection>

            {/* Timeline */}
            <MotionSection delay={0.15}>
              <div className="relative pl-8 border-l-2 border-[#FF7F00]/30 space-y-10">
                {timeline.map((item, i) => (
                  <motion.div
                    key={item.year}
                    initial={shouldReduce ? {} : { opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="relative"
                  >
                    <div className="absolute -left-[calc(2rem+5px)] top-1 w-3 h-3 bg-[#FF7F00] rounded-full" />
                    <div className="font-[family-name:var(--font-barlow)] text-2xl font-black uppercase text-[#1B4375]">
                      {item.year}
                    </div>
                    <p className="mt-2 font-[family-name:var(--font-inter)] text-sm text-[#5a7a9c] leading-relaxed">
                      {item.text}
                    </p>
                  </motion.div>
                ))}
              </div>
            </MotionSection>
          </div>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="py-20 lg:py-28 bg-[#F7F9FC]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
          <MotionSection>
            <div className="flex items-center gap-3 mb-6">
              <span className="block w-12 h-[3px] bg-[#FF7F00]" />
              <span className="font-[family-name:var(--font-barlow)] text-sm font-bold uppercase tracking-[0.14em] text-[#FF7F00]">
                Nuestra filosofía
              </span>
            </div>
            <h2
              className="font-[family-name:var(--font-barlow)] font-black uppercase leading-none text-[#1B4375] mb-14"
              style={{ fontSize: "clamp(32px, 4vw, 48px)" }}
            >
              Lo que nos mueve
            </h2>
          </MotionSection>

          <div className="grid md:grid-cols-2 gap-8">
            <MotionSection delay={0.1}>
              <div className="bg-white border border-gray-200 p-8 lg:p-10 h-full">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 bg-[#FF7F00] flex items-center justify-center text-white flex-shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 16v-4M12 8h.01" />
                    </svg>
                  </div>
                  <h3 className="font-[family-name:var(--font-barlow)] text-xl font-bold uppercase tracking-wide text-[#1B4375]">
                    Misión
                  </h3>
                </div>
                <p className="font-[family-name:var(--font-inter)] text-[#5a7a9c] leading-relaxed">
                  Nuestra misión es cumplir con la satisfacción de nuestros clientes, basándonos siempre en la mejora continua, ofreciendo productos y servicios de calidad y procesos innovadores trabajando en equipo, manteniendo así una empresa productiva con personal altamente capacitado y fomentando el bienestar de nuestras familias.
                </p>
              </div>
            </MotionSection>

            <MotionSection delay={0.2}>
              <div className="bg-white border border-gray-200 p-8 lg:p-10 h-full">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 bg-[#1B4375] flex items-center justify-center text-white flex-shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  </div>
                  <h3 className="font-[family-name:var(--font-barlow)] text-xl font-bold uppercase tracking-wide text-[#1B4375]">
                    Visión
                  </h3>
                </div>
                <p className="font-[family-name:var(--font-inter)] text-[#5a7a9c] leading-relaxed">
                  Ser una empresa líder como centro de servicio y transformación del acero, con procesos y maquinaria de alta tecnología logrando un crecimiento conjunto con nuestros colaboradores, trabajando en la mejora continua e innovación de nuestros procesos garantizando la satisfacción de nuestros clientes.
                </p>
              </div>
            </MotionSection>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
          <MotionSection>
            <div className="flex items-center gap-3 mb-6">
              <span className="block w-12 h-[3px] bg-[#FF7F00]" />
              <span className="font-[family-name:var(--font-barlow)] text-sm font-bold uppercase tracking-[0.14em] text-[#FF7F00]">
                Lo que nos define
              </span>
            </div>
            <h2
              className="font-[family-name:var(--font-barlow)] font-black uppercase leading-none text-[#1B4375] mb-14"
              style={{ fontSize: "clamp(32px, 4vw, 48px)" }}
            >
              Nuestros valores
            </h2>
          </MotionSection>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {valores.map((valor, i) => (
              <MotionSection key={valor.title} delay={i * 0.08}>
                <div className="group bg-[#F7F9FC] border border-gray-200 p-6 text-center hover:border-[#FF7F00]/40 transition-colors duration-200">
                  <div className="w-14 h-14 mx-auto mb-4 bg-[#1B4375] flex items-center justify-center text-white group-hover:bg-[#FF7F00] transition-colors duration-200">
                    {valor.icon}
                  </div>
                  <h3 className="font-[family-name:var(--font-barlow)] text-base font-bold uppercase tracking-wide text-[#1B4375]">
                    {valor.title}
                  </h3>
                </div>
              </MotionSection>
            ))}
          </div>
        </div>
      </section>

      {/* Política de Calidad */}
      <section className="py-20 lg:py-28 bg-[#1B4375] relative overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none"
          aria-hidden="true"
        >
          <span
            className="font-[family-name:var(--font-barlow)] font-black text-white opacity-[0.02]"
            style={{ fontSize: "clamp(80px, 15vw, 200px)" }}
          >
            ISO 9001
          </span>
        </div>

        <div className="relative max-w-[1440px] mx-auto px-6 lg:px-10">
          <div className="max-w-3xl mx-auto text-center">
            <MotionSection>
              <div className="flex items-center justify-center gap-3 mb-6">
                <span className="block w-12 h-[3px] bg-[#FF7F00]" />
                <span className="font-[family-name:var(--font-barlow)] text-sm font-bold uppercase tracking-[0.14em] text-[#FF7F00]">
                  Certificación ISO 9001:2015
                </span>
                <span className="block w-12 h-[3px] bg-[#FF7F00]" />
              </div>
              <h2
                className="font-[family-name:var(--font-barlow)] font-black uppercase leading-none text-white mb-8"
                style={{ fontSize: "clamp(32px, 4vw, 48px)" }}
              >
                Política de Calidad
              </h2>
              <p className="font-[family-name:var(--font-inter)] text-[#B0C4DE] leading-relaxed text-lg">
                En AAMSA estamos comprometidos a satisfacer las necesidades y expectativas de nuestros clientes, trabajando con responsabilidad, honestidad y compromiso, proporcionando productos y servicios de calidad, aplicando la mejora continua en todos los procesos de nuestro sistema de gestión de calidad.
              </p>
              <div className="mt-8 inline-flex items-center gap-3 bg-[#153460] border border-[#2261AE] px-6 py-3">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FF7F00" strokeWidth="1.5" aria-hidden="true">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                <span className="font-[family-name:var(--font-inter)] text-sm text-[#B0C4DE]">
                  Certificado ISO 9001-2000 desde 2005 por Lloyds Register de México — Actualmente ISO 9001:2015
                </span>
              </div>
            </MotionSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-[#FF7F00]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10 text-center">
          <MotionSection>
            <h2
              className="font-[family-name:var(--font-barlow)] font-black uppercase leading-none text-white mb-4"
              style={{ fontSize: "clamp(28px, 3.5vw, 44px)" }}
            >
              ¿Listo para trabajar con nosotros?
            </h2>
            <p className="font-[family-name:var(--font-inter)] text-white/80 mb-8 max-w-lg mx-auto">
              Más de 40 años de experiencia respaldan cada proyecto. Solicita tu cotización sin compromiso.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/528115115660?text=Hola%2C%20me%20gustar%C3%ADa%20solicitar%20una%20cotizaci%C3%B3n"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1B4375] hover:bg-[#153460] text-white font-[family-name:var(--font-barlow)] text-sm font-bold uppercase tracking-widest px-8 py-3.5 transition-colors duration-200 inline-flex items-center gap-2"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Solicitar cotización
              </a>
              <a
                href="/contacto"
                className="bg-white/10 hover:bg-white/20 text-white font-[family-name:var(--font-barlow)] text-sm font-bold uppercase tracking-widest px-8 py-3.5 border border-white/30 transition-colors duration-200"
              >
                Contacto
              </a>
            </div>
          </MotionSection>
        </div>
      </section>
    </>
  );
}
