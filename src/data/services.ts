import { airconImage, coldroomImage, repairsImage } from "@/data/images";
import { TService } from "@/lib/types";

const services: TService[] = [
    {
        picture: {
            logo: repairsImage,
            alt: 'repaiers image'
        },
        title: 'AIR CONDITIONING REPAIRS',
        desc: 'Installation & Repairs on all types of air-conditioning units including inverters, ducted and cassette. Our repairs services including leak repairs and regassing, PCB repairs and replacement.',
        link: {
            url: '/',
            label: 'More Info'
        }
    },
    {
        picture: {
            logo: coldroomImage,
            alt: 'Coldrooms image'
        },
        title: 'REFRIGERATION & COLD ROOMS',
        desc: 'We are the experts in all refrigeration services, repairs and the installation of cold rooms, chillers and mortuaries. We handle repairs & installations for for domestic, commercial and industrial refrigeration equipment, onsite and off site.',
        link: {
            url: '/',
            label: 'More Info'
        }
    },
    {
        picture: {
            logo: airconImage,
            alt: 'aircon image'
        },
        title: 'AIRCON INSTALLATION',
        desc: 'Installation & Repairs on all types of air-conditioning units including inverters, ducted and cassette. Our repairs services including leak repairs and regassing, PCB repairs and replacement.',
        link: {
            url: '/',
            label: 'More Info'
        }
    },
]
export { services }