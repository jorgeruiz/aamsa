import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface BlogPost {
  titulo: string;
  slug: string;
  categoria: string;
  tags: string[];
  extracto: string;
  imagen_portada: string;
  autor: string;
  fecha_publicacion: string;
  content: string;
}

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"));

  const posts = files.map((filename) => {
    const filePath = path.join(BLOG_DIR, filename);
    const raw = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(raw);

    return {
      titulo: data.titulo,
      slug: data.slug,
      categoria: data.categoria,
      tags: data.tags || [],
      extracto: data.extracto,
      imagen_portada: data.imagen_portada,
      autor: data.autor,
      fecha_publicacion: data.fecha_publicacion,
      content,
    } as BlogPost;
  });

  return posts.sort(
    (a, b) =>
      new Date(b.fecha_publicacion).getTime() -
      new Date(a.fecha_publicacion).getTime()
  );
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  const posts = getAllPosts();
  return posts.find((p) => p.slug === slug);
}

export function getPostsByCategory(categoria: string): BlogPost[] {
  return getAllPosts().filter((p) => p.categoria === categoria);
}

export function getAllCategories(): string[] {
  const posts = getAllPosts();
  return [...new Set(posts.map((p) => p.categoria))];
}

export function getRelatedPosts(
  currentSlug: string,
  categoria: string,
  limit = 3
): BlogPost[] {
  return getAllPosts()
    .filter((p) => p.slug !== currentSlug && p.categoria === categoria)
    .slice(0, limit);
}
