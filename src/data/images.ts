import logo from '/public/logo-icon.png'
import lgLogo from '/public/lg.png'
import whirlpoolLogo from '/public/whirlpool.png'
import samsungLogo from '/public/samsung.svg'
import carrierLogo from '/public/carrier.svg'
import kicLogo from '/public/kic.png'
import hisenseLogo from '/public/hisense.svg'
import aircon from '/public/aircon-units.jpg'
import { TLogo } from '@/lib/types'



export { logo, aircon }



const plogos: TLogo[] = [
    {
        logo: lgLogo,
        alt: 'Lg Logo'
    },
    {
        logo: whirlpoolLogo,
        alt: 'whril Logo'
    },
    {
        logo: samsungLogo,
        alt: 'Samusung Logo'
    },
    {
        logo: carrierLogo,
        alt: 'Carrier Logo'
    },
    {
        logo: kicLogo,
        alt: 'KIC Logo'
    },
    {
        logo: hisenseLogo,
        alt: 'Hisense Logo'
    }
]
export { plogos }