import type { MetadataRoute } from 'next'
import { getAllProductSlugs } from '@/lib/products'

export default function sitemap(): MetadataRoute.Sitemap {
  const productSlugs = getAllProductSlugs()

  const productUrls = productSlugs.map((slug) => ({
    url: `https://rgvpeptides.bio/products/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  return [
    {
      url: 'https://rgvpeptides.bio',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://rgvpeptides.bio/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    ...productUrls,
  ]
}
