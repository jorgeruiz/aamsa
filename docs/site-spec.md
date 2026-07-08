# Especificacion Tecnica del Sitio — Aamsa

**Ultima actualizacion:** 2026-07-08
**Construido por:** Claude Code / Click Society

---

## Stack

**Framework:** Next.js 16.2.7
**Node:** 20+
**Package manager:** npm
**Deploy:** Vercel

**Dependencias principales:**

| Paquete | Version | Proposito |
|---------|---------|-----------|
| next | 16.2.7 | Framework principal |
| react | 19.2.4 | UI |
| tailwindcss | 4 | Estilos (Tailwind v4 con @theme inline) |
| framer-motion | 11.18.2 | Animaciones y transiciones |
| lenis | 1.3.23 | Smooth scroll |

---

## Design System

**Colores primarios:**
- Primary (naranja): `#FF7F00` — CTAs, acentos, hover states
- Primary dark: `#CC6600` — hover del primary
- Navy: `#0047AB` — encabezados, elementos institucionales
- Navy dark: `#003885` — hover del navy
- Background: `#0A1A2E` — fondo principal del sitio
- Surface: `#0F2440` — tarjetas y contenedores
- Surface alt: `#153050` — variante de superficie
- Text primary: `#F0F2FF` — texto principal
- Text secondary: `#B0C4DE` — texto secundario
- Text muted: `#7A9CC0` — texto terciario, labels
- Border: `#1A4070` — bordes sutiles

**Tipografias:**
- Headings: `Barlow Condensed` (400-900), variable `--font-barlow`
- Body: `Inter` (400-600), variable `--font-inter`

**Breakpoints:** Tailwind v4 defaults (sm:640, md:768, lg:1024, xl:1280)

---

## Componentes clave

| Componente | Ruta | Descripcion |
|-----------|------|-------------|
| Layout raiz | `app/layout.tsx` | Fonts, smooth scroll provider, proposal switcher |
| Navbar | `components/layout/Navbar.tsx` | Nav con dropdowns de Servicios y Productos, logo, CTA |
| Footer | `components/layout/Footer.tsx` | 4 columnas: marca, servicios, enlaces, contacto. ISO 9001 badge |
| Hero | `components/home/Hero.tsx` | Hero principal con CTA de cotizacion |
| Services | `components/home/Services.tsx` | Grid de 6 servicios con iconos |
| Products | `components/home/Products.tsx` | Grid de 2 productos |
| Stats | `components/home/Stats.tsx` | Contadores animados (anos, equipos, clientes) |
| Process | `components/home/Process.tsx` | Proceso de trabajo en pasos |
| ContactCTA | `components/home/ContactCTA.tsx` | CTA final de contacto/cotizacion |
| Testimonials | `components/home/Testimonials.tsx` | Testimonios de clientes |
| ServiceHero | `components/servicios/ServiceHero.tsx` | Hero reutilizable para paginas de servicio |
| ServiceCta | `components/servicios/ServiceCta.tsx` | CTA reutilizable para paginas de servicio |
| FaqAccordion | `components/servicios/FaqAccordion.tsx` | Acordeon de preguntas frecuentes |
| JsonLd | `components/servicios/JsonLd.tsx` | Inyector de Schema.org JSON-LD |
| CountUp | `components/animations/CountUp.tsx` | Animacion de conteo numerico |
| MagneticButton | `components/animations/MagneticButton.tsx` | Boton con efecto magnetico |
| MarqueeStrip | `components/animations/MarqueeStrip.tsx` | Cinta de texto en movimiento |
| WordReveal | `components/animations/WordReveal.tsx` | Revelado de texto animado |
| MotionSection | `components/ui/MotionSection.tsx` | Wrapper de seccion con animacion de entrada |
| ScrollColorSection | `components/ui/ScrollColorSection.tsx` | Seccion con cambio de color al scroll |
| AnimatedButton | `components/ui/AnimatedButton.tsx` | Boton con animacion hover |
| SmoothScrollProvider | `components/providers/SmoothScrollProvider.tsx` | Provider de Lenis para smooth scroll |
| ProposalSwitcher | `components/layout/ProposalSwitcher.tsx` | Toggle entre propuestas de diseno |

---

## Estructura de paginas

| Ruta | Archivo | Descripcion |
|------|---------|-------------|
| `/` | `app/page.tsx` | Pagina de inicio — hero, servicios, productos, stats, proceso, CTA |
| `/servicios/corte-laser` | `app/servicios/corte-laser/page.tsx` | Servicio de corte laser CNC |
| `/servicios/corte-plasma-cnc` | `app/servicios/corte-plasma-cnc/page.tsx` | Servicio de corte plasma CNC |
| `/servicios/corte-pantografo` | `app/servicios/corte-pantografo/page.tsx` | Servicio de corte pantografo |
| `/servicios/corte-guillotina` | `app/servicios/corte-guillotina/page.tsx` | Servicio de corte guillotina |
| `/servicios/doblez-cnc` | `app/servicios/doblez-cnc/page.tsx` | Servicio de doblez CNC |
| `/servicios/rolado` | `app/servicios/rolado/page.tsx` | Servicio de rolado |
| `/productos/lamina` | `app/productos/lamina/page.tsx` | Lamina de acero (varios calibres) |
| `/productos/placa` | `app/productos/placa/page.tsx` | Placa de acero |
| `/propuesta-2` | `app/propuesta-2/page.tsx` | Propuesta alternativa de diseno (A/B) |

---

## Decisiones de arquitectura

- **Smooth scroll con Lenis:** wrapeado en `SmoothScrollProvider` en el layout raiz. Todas las paginas tienen scroll suave.
- **ProposalSwitcher:** toggle flotante para alternar entre la propuesta principal y `/propuesta-2`. Permite al cliente comparar dos enfoques de diseno.
- **Paginas de servicio componentizadas:** todas usan `ServiceHero`, `ServiceCta`, `FaqAccordion` y `JsonLd` como building blocks. Cada pagina define su metadata, schema JSON-LD y FAQs inline.
- **Schema.org por pagina:** cada servicio tiene un `Service` schema con `LocalBusiness` provider. Los productos tienen `Product` schema. FAQPage schema embebido en cada pagina con FAQs.
- **Tailwind v4 con @theme inline:** tokens de color y fuentes definidos en `globals.css` usando la directiva `@theme inline`.
- **Framer Motion extensivo:** animaciones de entrada por seccion (`MotionSection`), contadores animados (`CountUp`), efecto magnetico en botones, revelado de palabras, marquee.
- **Sitemap dinamico:** `app/sitemap.ts` genera el sitemap con todas las rutas y prioridades.

---

## Notas para mantenimiento

- Las paginas `/nosotros` y `/contacto` aparecen en el Navbar pero NO estan implementadas aun — los links existen en la navegacion.
- `/portafolio`, `/blog` y `/preguntas-frecuentes` aparecen en el Footer pero NO estan implementados.
- La propuesta 2 (`/propuesta-2`) tiene sus propios componentes en `components/propuesta2/` — no comparte componentes con la propuesta principal.
- Las imagenes estan en `public/` a nivel raiz (no en `public/images/`).
- El dominio canonico es `https://aamsa.com`.
