import { TLogo } from '@/lib/types'

// For images in public folder, just reference the path as a string
// Next.js serves everything in public from the root URL
export const logo = '/logo.svg'
export const airconImage = '/aircon-units.jpg'
export const repairsImage = '/repairs.jpg'
export const coldroomImage = '/hero.jpg'

const plogos: TLogo[] = [
    {
        logo: '/lg.png',
        alt: 'LG Logo'
    },
    {
        logo: '/whirlpool.png',
        alt: 'Whirlpool Logo'
    },
    {
        logo: '/samsung.svg',
        alt: 'Samsung Logo'
    },
    {
        logo: '/carrier.svg',
        alt: 'Carrier Logo'
    },
    {
        logo: '/kic.png',
        alt: 'KIC Logo'
    },
    {
        logo: '/hisense.svg',
        alt: 'Hisense Logo'
    }
]

export { plogos }