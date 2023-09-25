import { MetadataRoute } from 'next'
const domain = 'https://www.ultratechaircon.co.za/'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: `${domain}`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        },
        {
            url: `${domain}/services`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${domain}/contact`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.5,
        },
    ]
}