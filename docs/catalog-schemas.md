# Catalogos del sitio

Este archivo documenta los catalogos de contenido recurrente del sitio.
Code lo lee para saber que plantillas existen y como agregar nuevos items.

---

## Blog

**Estado:** Implementado (SOL-2026-07-002)

**Rutas:**
- Listing: `/blog` - grid editorial con paginacion y filtro por categoria
- Detalle: `/blog/[slug]` - articulo completo con MDX

**Arquitectura de contenido:**
- Archivos MDX en `content/blog/[slug].mdx`
- Imagenes de portada en `public/blog/[slug]/portada.webp`
- Lector: `lib/blog.ts` (filesystem con `gray-matter`)
- Renderizado: `next-mdx-remote/rsc` (Server Components)
- Publicar un articulo = agregar archivo MDX + imagen, sin tocar codigo

**Frontmatter YAML (contrato de campos):**

```yaml
---
titulo: "string"
slug: kebab-case-sin-comillas
categoria: "string"
tags: ["tag1", "tag2"]
extracto: "string, max 160 chars, usado como meta description"
imagen_portada: "/blog/[slug]/portada.webp"
autor: "string"
fecha_publicacion: YYYY-MM-DD
---
```

| Campo | Tipo | Requerido |
|---|---|---|
| titulo | string | si |
| slug | string (kebab-case, sin acentos, inmutable) | si |
| categoria | string (una principal) | si |
| tags | string[] | no |
| extracto | string (max 160, usado como meta description) | si |
| imagen_portada | string (ruta relativa a public/) | si |
| autor | string (default: Click Society) | si |
| fecha_publicacion | date (YYYY-MM-DD) | si |

**Categorias existentes:**
- Informativo

**Reglas SEO (implementadas):**
- Un solo H1 por articulo (= titulo)
- `<title>`: "{titulo} | Aamsa"
- `meta description`: extracto (max 160 chars)
- Schema.org Article: headline, author, datePublished, image
- Open Graph tags (og:title, og:description, og:image, og:type article)
- Alt text descriptivo en portada
- Slug limpio, inmutable post-publicacion
- Entrada automatica en sitemap.xml
- Articulos relacionados por coincidencia de categoria
