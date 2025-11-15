// app/sitemap.ts
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://lmktreeservices.com.au'
  
  const services = [
    'tree-removal',
    'tree-pruning',
    'stump-grinding',
    'emergency-tree-services',
  ]
  
  const suburbs = [
    'glen-waverley',
    'mount-waverley',
    'chadstone',
    'camberwell',
  ]
  
  const servicePages = services.flatMap(service =>
    suburbs.map(suburb => ({
      url: `${baseUrl}/services/${service}/${suburb}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    }))
  )
  
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...servicePages,
  ]
}