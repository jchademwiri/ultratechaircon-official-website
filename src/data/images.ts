import logo from '/public/logo-icon.png'
import lgLogo from '/public/lg.png'
import whirlpoolLogo from '/public/whirlpool.png'
import samsungLogo from '/public/samsung.png'
import carrierLogo from '/public/carrier.svg'
import kicLogo from '/public/kic.png'
import hisenseLogo from '/public/hisense.svg'
import { TPartnerLogo } from './lib/types'


export { logo, lgLogo, whirlpoolLogo, samsungLogo }



const partnerLogo: TPartnerLogo[] = [
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
        alt: 'Samusng Logo'
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
export { partnerLogo }