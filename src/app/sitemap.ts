import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://devmilton.com',
      lastModified: new Date(),
    },
    {
      url: 'https://devmilton.com/projects',
      lastModified: new Date(),
    },
    {
      url: 'https://devmilton.com/projects/spacetime',
      lastModified: new Date(),
    },
    {
      url: 'https://devmilton.com/projects/ignite-lab',
      lastModified: new Date(),
    },
    {
      url: 'https://devmilton.com/projects/coffee-delivery',
      lastModified: new Date(),
    },
    {
      url: 'https://devmilton.com/projects/copa',
      lastModified: new Date(),
    },
    {
      url: 'https://devmilton.com/projects/blog',
      lastModified: new Date(),
    },
  ]
}
