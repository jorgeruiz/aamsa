import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/servicios/JsonLd";
import { getAllPosts, getPostBySlug, getRelatedPosts } from "@/lib/blog";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: `${post.titulo} | Aamsa`,
    description: post.extracto,
    alternates: {
      canonical: `https://aamsa.com/blog/${post.slug}`,
    },
    openGraph: {
      title: `${post.titulo} | Aamsa`,
      description: post.extracto,
      url: `https://aamsa.com/blog/${post.slug}`,
      images: [{ url: `https://aamsa.com${post.imagen_portada}` }],
      siteName: "Aamsa",
      type: "article",
      locale: "es_MX",
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(post.slug, post.categoria, 3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.titulo,
    author: {
      "@type": "Organization",
      name: post.autor,
    },
    datePublished: post.fecha_publicacion,
    image: `https://aamsa.com${post.imagen_portada}`,
    publisher: {
      "@type": "Organization",
      name: "Aamsa - Abastecedora de Aceros y Maquilas S.A. de C.V.",
      logo: {
        "@type": "ImageObject",
        url: "https://aamsa.com/logo-aamsa.png",
      },
    },
    description: post.extracto,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://aamsa.com/blog/${post.slug}`,
    },
  };

  return (
    <>
      <JsonLd data={articleSchema} />
      <Navbar />
      <main>
        {/* Hero with cover image */}
        <section className="relative pt-36 pb-20 lg:pt-44 lg:pb-28 bg-[#1B4375] overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${post.imagen_portada})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 0.4,
            }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1B4375] via-[#1B4375]/70 to-transparent" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FF7F00]/40 to-transparent" />
          <div className="relative max-w-4xl mx-auto px-6 lg:px-10">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center gap-2 font-[family-name:var(--font-inter)] text-xs text-[#7A9CC0]">
                <li>
                  <Link
                    href="/"
                    className="hover:text-[#FF7F00] transition-colors"
                  >
                    Inicio
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link
                    href="/blog"
                    className="hover:text-[#FF7F00] transition-colors"
                  >
                    Blog
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-[#B0C4DE] truncate max-w-[200px]">
                  {post.titulo}
                </li>
              </ol>
            </nav>

            {/* Category badge */}
            <Link
              href={`/blog?categoria=${encodeURIComponent(post.categoria)}`}
              className="inline-block bg-[#FF7F00]/90 text-white font-[family-name:var(--font-barlow)] text-[11px] font-bold uppercase tracking-[0.12em] px-3 py-1.5 mb-6 hover:bg-[#FF7F00] transition-colors"
            >
              {post.categoria}
            </Link>

            <h1
              className="font-[family-name:var(--font-barlow)] font-black uppercase leading-tight text-white"
              style={{
                fontSize: "clamp(28px, 4.5vw, 56px)",
                letterSpacing: "-0.01em",
              }}
            >
              {post.titulo}
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 mt-6 font-[family-name:var(--font-inter)] text-sm text-[#7A9CC0]">
              <span>{post.autor}</span>
              <span aria-hidden="true" className="w-1 h-1 rounded-full bg-[#7A9CC0]" />
              <time>
                {new Date(post.fecha_publicacion).toLocaleDateString("es-MX", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </div>
          </div>
        </section>

        {/* Article body */}
        <section className="py-16 lg:py-24 bg-[#153460]">
          <div className="max-w-3xl mx-auto px-6 lg:px-10">
            {/* Cover image */}
            <div className="relative aspect-[16/9] mb-12 -mt-20 lg:-mt-24">
              <Image
                src={post.imagen_portada}
                alt={post.titulo}
                fill
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover"
                priority
              />
            </div>

            {/* MDX content */}
            <article className="prose-aamsa">
              <MDXRemote source={post.content} />
            </article>

            {/* Tags */}
            {post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-[#2261AE]">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-[family-name:var(--font-inter)] text-xs text-[#FF7F00] bg-[#FF7F00]/10 px-3 py-1.5 uppercase tracking-wider"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Related articles */}
        {related.length > 0 && (
          <section className="py-16 lg:py-24 bg-[#1B4375]">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
              <h2
                className="font-[family-name:var(--font-barlow)] font-black uppercase leading-tight text-white mb-10"
                style={{ fontSize: "clamp(24px, 3vw, 40px)" }}
              >
                Articulos relacionados
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {related.map((relPost) => (
                  <Link
                    key={relPost.slug}
                    href={`/blog/${relPost.slug}`}
                    className="group bg-[#153460] border border-[#2261AE] hover:border-[#FF7F00]/50 transition-colors"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={relPost.imagen_portada}
                        alt={relPost.titulo}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <time className="font-[family-name:var(--font-inter)] text-xs text-[#7A9CC0] uppercase tracking-wider">
                        {new Date(
                          relPost.fecha_publicacion
                        ).toLocaleDateString("es-MX", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </time>
                      <h3 className="font-[family-name:var(--font-barlow)] text-base font-bold uppercase text-white mt-3 leading-tight group-hover:text-[#FF7F00] transition-colors">
                        {relPost.titulo}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-20 lg:py-28 bg-[#153460] relative overflow-hidden">
          <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />
          <div className="relative max-w-4xl mx-auto px-6 lg:px-10 text-center">
            <h2
              className="font-[family-name:var(--font-barlow)] font-black uppercase leading-tight text-white mb-8"
              style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
            >
              Necesitas acero o servicio de maquila para tu proyecto?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contacto"
                className="inline-flex items-center gap-3 bg-[#FF7F00] hover:bg-[#CC6600] text-white font-[family-name:var(--font-barlow)] text-base font-bold uppercase tracking-widest px-8 py-4 transition-colors duration-200"
              >
                Solicitar Cotización
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 border border-[#2261AE] hover:border-[#FF7F00]/50 text-[#B0C4DE] hover:text-white font-[family-name:var(--font-barlow)] text-base font-bold uppercase tracking-widest px-8 py-4 transition-colors duration-200"
              >
                Ver mas articulos
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
