# Catalogos del sitio

Este archivo documenta los catalogos de contenido recurrente del sitio.
Code lo lee para saber que plantillas existen y como agregar nuevos items.

---

## Blog

**Estado:** No implementado. El Footer tiene un link a `/blog` pero la ruta no existe.

**Rutas (al implementar):**
- Listing: `/blog` — grid editorial con paginacion y filtro por categoria
- Detalle: `/blog/[slug]` — articulo completo

**Schema del articulo:**

| Campo | Tipo | Requerido |
|---|---|---|
| titulo | string | si |
| slug | string (kebab-case, sin acentos, inmutable) | si |
| categoria | string (una principal) | si |
| tags | string[] | no |
| extracto | string (max 200, usado como meta description) | si |
| cuerpo | markdown | si |
| imagen_portada | image (1 requerida) | si |
| imagenes_apoyo | image[] | no |
| autor | string (default: Aamsa) | si |
| fecha_publicacion | date (fecha de push) | si |

**Categorias existentes:**
<!-- Code actualiza esta lista al agregar articulos con categorias nuevas -->
- (ninguna todavia)

**Reglas SEO:**
- Un solo H1 por articulo (= titulo)
- `<title>`: "{titulo} | Aamsa"
- `meta description`: extracto (max 160 chars)
- Schema.org Article: headline, author, datePublished, image
- Alt text descriptivo en portada y todas las imagenes
- Slug limpio, inmutable post-publicacion
- Open Graph tags (og:title, og:description, og:image)
- Entrada en sitemap.xml
- Enlazado interno sugerido entre articulos de la misma categoria

**Contenido MDX:**
- Archivos en `content/blog/[slug].mdx` (o `app/blog/[slug]/page.tsx` con MDX embebido)
- Imagenes en `public/blog/[slug]/`
- Frontmatter con todos los campos del schema
