// app/sitemap.ts
import { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/blog'

const BASE_URL = 'https://aamsa.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const blogPosts = getAllPosts()

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    // Servicios — priority 0.9
    ...[
      'corte-laser',
      'corte-plasma-cnc',
      'corte-pantografo',
      'corte-guillotina',
      'doblez-cnc',
      'rolado',
    ].map((slug) => ({
      url: `${BASE_URL}/servicios/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    })),
    // Productos — priority 0.8
    ...['lamina', 'placa'].map((slug) => ({
      url: `${BASE_URL}/productos/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ]

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.fecha_publicacion),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticRoutes, ...blogRoutes]
}
