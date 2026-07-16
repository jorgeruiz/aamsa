import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://aamsa.com";

  const blogPosts = getAllPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.fecha_publicacion),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    // Servicios — priority 0.8
    {
      url: `${baseUrl}/servicios/corte-laser`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/servicios/corte-plasma-cnc`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/servicios/corte-pantografo`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/servicios/corte-guillotina`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/servicios/doblez-cnc`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/servicios/rolado`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // Productos — priority 0.7
    {
      url: `${baseUrl}/productos/lamina`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/productos/placa`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    // Blog — priority 0.6
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    ...blogPosts,
  ];
}
