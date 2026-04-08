import { MetadataRoute } from 'next'
import { SITE_CONFIG, ZONES } from '@/lib/constants'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.url
  
  // Páginas estáticas principales
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/precio-smile-cdmx`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/smile-vs-lasik`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
  ]

  // Páginas geolocalizadas
  const geoPages = Object.entries(ZONES).flatMap(([zoneKey, zone]) =>
    zone.neighborhoods.map((neighborhood) => ({
      url: `${baseUrl}/zona-${zoneKey}/smile-${neighborhood.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))
  )

  return [...staticPages, ...geoPages]
}
