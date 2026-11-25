# Estado del Sitio — Aamsa

---

## Estado actual

**Ultima actualizacion:** 2026-11-25
**Version del sitio:** 1.0.0
**URL de produccion:** https://aamsa.com
**Repo:** https://github.com/jorgeruiz/aamsa

---

## Construccion inicial

**Fecha:** 2026
**Path de construccion:** Standalone
**Stack:** Next.js 16.2.7 + Tailwind v4 + Framer Motion + Lenis

**Features implementadas:**
- [x] Pagina de inicio con hero, servicios, productos, stats, proceso, CTA
- [x] 6 paginas de servicio individuales (corte laser, plasma CNC, pantografo, guillotina, doblez CNC, rolado)
- [x] 2 paginas de producto (lamina, placa de acero)
- [x] Navbar responsive con dropdowns de servicios y productos
- [x] Footer con 4 columnas (marca + ISO badge, servicios, enlaces, contacto)
- [x] Schema.org JSON-LD por pagina (Service, Product, FAQPage, LocalBusiness)
- [x] SEO completo: meta title/description, Open Graph, canonical URLs, sitemap.xml
- [x] Smooth scroll con Lenis
- [x] Animaciones: MotionSection, CountUp, MagneticButton, MarqueeStrip, WordReveal
- [x] Propuesta alternativa de diseno (propuesta-2) con ProposalSwitcher

**Pendientes o issues conocidos:**
- Paginas `/nosotros` y `/contacto` no implementadas (links existen en Navbar)
- Paginas `/portafolio`, `/blog` y `/preguntas-frecuentes` no implementadas (links existen en Footer)
- Imagenes en `public/` a nivel raiz, no en `public/images/`

---

## Historial de cambios

### 2026-07-18 — SOL-2026-07-006

**Cambios aplicados:**
- Articulo de blog publicado: "Corte Láser vs Plasma: Diferencias Clave en Acero Industrial" (/blog/corte-laser-vs-plasma-diferencias-clave-en-acero-industrial)

**Aplicado por:** Constructor (publicacion directa)

### 2026-07-19 — CEREBRO-2026-07-19T06-17-37-prueba-desde-cerebro

**Cambios aplicados:**
- Articulo de blog publicado: "Prueba desde Cerebro" (/blog/prueba-desde-cerebro)

**Aplicado por:** Constructor (publicacion directa)

### 2026-07-19 — CEREBRO-2026-07-19T06-17-59-prueba-desde-cerebro

**Cambios aplicados:**
- Articulo de blog publicado: "Prueba desde Cerebro" (/blog/prueba-desde-cerebro)

**Aplicado por:** Constructor (publicacion directa)

### 2026-07-20 — CEREBRO-2026-07-20T22-05-02-como-elegir-un-proveedor-de-acero-indust

**Cambios aplicados:**
- Articulo de blog publicado: "Cómo Elegir un Proveedor de Acero Industrial (Checklist Completo)" (/blog/como-elegir-un-proveedor-de-acero-industrial-checklist-completo)

**Aplicado por:** Constructor (publicacion directa)

### 2026-07-20 — CEREBRO-2026-07-20T23-09-36-como-elegir-un-proveedor-de-acero-indust

**Cambios aplicados:**
- Articulo de blog publicado: "Cómo Elegir un Proveedor de Acero Industrial (Checklist Completo)" (/blog/como-elegir-un-proveedor-de-acero-industrial-checklist-completo)

**Aplicado por:** Constructor (publicacion directa)

### 2026-07-21 — CEREBRO-2026-07-21T00-52-06-como-elegir-un-proveedor-de-acero-indust

**Cambios aplicados:**
- Articulo de blog publicado: "Cómo Elegir un Proveedor de Acero Industrial (Checklist Completo)" (/blog/como-elegir-un-proveedor-de-acero-industrial-checklist-completo)

**Aplicado por:** Constructor (publicacion directa)

### 2026-07-24 — CEREBRO-2026-07-24T19-23-48-procesos-de-manufactura-metalica

**Cambios aplicados:**
- Articulo de blog publicado: "Procesos de Manufactura Metálica" (/blog/procesos-de-manufactura-metalica)

**Aplicado por:** Constructor (publicacion directa)

### 2026-07-24 — CEREBRO-2026-07-24T20-22-51-acero-estructural-tipos-y-aplicaciones-p

**Cambios aplicados:**
- Articulo de blog publicado: "Acero Estructural: Tipos y Aplicaciones para Proyectos Industriales en Monterrey" (/blog/acero-estructural-tipos-y-aplicaciones-para-proyectos-industriales-en-monterrey)

**Aplicado por:** Constructor (publicacion directa)

### 2026-11-25 — SOL-4230a146 imagenes de Joists

**Cambios aplicados:**
- En /productos/joists-girders, seccion Joists: /joists-produccion-aamsa.jpeg sustituida por /joists-linea-produccion-planta-aamsa.webp
- En la seccion Joist Girders: /joist-girder-planta-aamsa.jpeg sustituida por /joist-girder-nave-industrial-aamsa.webp, con recorte object-[72%_18%]
- Galeria (items 3 y 4): mismas dos fotos nuevas y textos alternativos en espanol
- Los JPEG anteriores siguen en public/ y ya no se referencian en el codigo

**Aplicado por:** Cursor agent
**Solicitud:** https://app.notion.com/p/4230a1465e5281e6b80eec99fe606863

### 2026-11-25 — Experiencia de la empresa: 40 a 45 años

**Cambios aplicados:**
- Textos de experiencia de la empresa actualizados de "más de 40 años" / "+40" a 45 años: H1 de Nosotros, meta description del layout, FAQ JSON-LD de inicio, public/llms.txt y el título de la home en docs/site-map.md
- En Stats, el encabezado ya dice "respaldada por más de cuatro décadas de experiencia". No se cambió a "más de más de cuatro décadas" porque rompería la frase. El contador de esa sección ya muestra +45.

**Aplicado por:** Cursor agent

### 2026-11-25 — Párrafos de contenido justificados

**Cambios aplicados:**
- app/globals.css justifica los párrafos de contenido dentro de main (text-align: justify y hyphens: auto; el idioma sale de html lang="es")
- Quedan sin justificar el hero de inicio, párrafos con text-center o text-right, textos cortos de tarjetas (text-sm dentro de grids o articles), stats, notas pequeñas, direcciones y extractos con line-clamp. Navbar y footer están fuera de main.

**Aplicado por:** Cursor agent
