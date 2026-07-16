import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { getAllPosts, getAllCategories } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog - Acero, Corte y Manufactura Industrial | Aamsa",
  description:
    "Articulos sobre acero estructural, corte laser, corte plasma CNC, doblez y manufactura industrial en Monterrey y Nuevo Leon.",
  alternates: {
    canonical: "https://aamsa.com/blog",
  },
  openGraph: {
    title: "Blog - Acero, Corte y Manufactura Industrial | Aamsa",
    description:
      "Articulos sobre acero estructural, corte laser, corte plasma CNC, doblez y manufactura industrial en Monterrey y Nuevo Leon.",
    url: "https://aamsa.com/blog",
    siteName: "Aamsa",
    type: "website",
    locale: "es_MX",
  },
};

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ categoria?: string; pagina?: string }>;
}) {
  const params = await searchParams;
  const allPosts = getAllPosts();
  const categories = getAllCategories();
  const activeCategory = params.categoria || null;
  const currentPage = parseInt(params.pagina || "1", 10);
  const postsPerPage = 9;

  const filteredPosts = activeCategory
    ? allPosts.filter((p) => p.categoria === activeCategory)
    : allPosts;

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative pt-36 pb-16 lg:pt-44 lg:pb-20 bg-[#1B4375]">
          <div className="absolute inset-0 dot-grid opacity-10 pointer-events-none" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FF7F00]/40 to-transparent" />
          <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
            <div className="flex items-center gap-3 mb-6">
              <span className="block w-10 h-[3px] bg-[#FF7F00]" />
              <span className="font-[family-name:var(--font-barlow)] text-xs font-bold uppercase tracking-[0.18em] text-[#FF7F00]">
                Blog
              </span>
            </div>
            <h1
              className="font-[family-name:var(--font-barlow)] font-black uppercase leading-none text-white max-w-4xl"
              style={{
                fontSize: "clamp(36px, 5.5vw, 72px)",
                letterSpacing: "-0.01em",
              }}
            >
              Conocimiento Industrial
            </h1>
            <p className="font-[family-name:var(--font-inter)] text-[#B0C4DE] leading-relaxed mt-6 max-w-2xl">
              Articulos sobre acero, procesos de corte, manufactura y soluciones
              para la industria del noreste de Mexico.
            </p>
          </div>
        </section>

        {/* Category filter + Grid */}
        <section className="py-16 lg:py-24 bg-[#153460]">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            {/* Category filter */}
            {categories.length > 0 && (
              <div className="flex flex-wrap gap-3 mb-12">
                <Link
                  href="/blog"
                  className={`font-[family-name:var(--font-barlow)] text-sm font-bold uppercase tracking-widest px-5 py-2.5 border transition-colors ${
                    !activeCategory
                      ? "bg-[#FF7F00] border-[#FF7F00] text-white"
                      : "border-[#2261AE] text-[#B0C4DE] hover:border-[#FF7F00]/50 hover:text-white"
                  }`}
                >
                  Todos
                </Link>
                {categories.map((cat) => (
                  <Link
                    key={cat}
                    href={`/blog?categoria=${encodeURIComponent(cat)}`}
                    className={`font-[family-name:var(--font-barlow)] text-sm font-bold uppercase tracking-widest px-5 py-2.5 border transition-colors ${
                      activeCategory === cat
                        ? "bg-[#FF7F00] border-[#FF7F00] text-white"
                        : "border-[#2261AE] text-[#B0C4DE] hover:border-[#FF7F00]/50 hover:text-white"
                    }`}
                  >
                    {cat}
                  </Link>
                ))}
              </div>
            )}

            {/* Posts grid */}
            {paginatedPosts.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {paginatedPosts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group bg-[#1B4375] border border-[#2261AE] hover:border-[#FF7F00]/50 transition-colors"
                  >
                    {/* Cover image */}
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={post.imagen_portada}
                        alt={post.titulo}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {/* Category badge */}
                      <span className="absolute top-4 left-4 bg-[#FF7F00]/90 text-white font-[family-name:var(--font-barlow)] text-[11px] font-bold uppercase tracking-[0.12em] px-3 py-1.5">
                        {post.categoria}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <time className="font-[family-name:var(--font-inter)] text-xs text-[#7A9CC0] uppercase tracking-wider">
                        {new Date(post.fecha_publicacion).toLocaleDateString(
                          "es-MX",
                          {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          }
                        )}
                      </time>
                      <h2 className="font-[family-name:var(--font-barlow)] text-lg font-bold uppercase text-white mt-3 mb-3 leading-tight group-hover:text-[#FF7F00] transition-colors">
                        {post.titulo}
                      </h2>
                      <p className="font-[family-name:var(--font-inter)] text-sm text-[#B0C4DE] leading-relaxed line-clamp-3">
                        {post.extracto}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <p className="font-[family-name:var(--font-inter)] text-[#7A9CC0] text-center py-16">
                No hay articulos en esta categoria todavia.
              </p>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center gap-3 mt-16">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => {
                    const params = new URLSearchParams();
                    if (activeCategory)
                      params.set("categoria", activeCategory);
                    if (page > 1) params.set("pagina", String(page));
                    const href = `/blog${params.toString() ? `?${params.toString()}` : ""}`;

                    return (
                      <Link
                        key={page}
                        href={href}
                        className={`font-[family-name:var(--font-barlow)] text-sm font-bold w-10 h-10 flex items-center justify-center border transition-colors ${
                          currentPage === page
                            ? "bg-[#FF7F00] border-[#FF7F00] text-white"
                            : "border-[#2261AE] text-[#B0C4DE] hover:border-[#FF7F00]/50 hover:text-white"
                        }`}
                      >
                        {page}
                      </Link>
                    );
                  }
                )}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
