import { TLink, TSocialLink } from "@/lib/types";


const navLinks: TLink[] = [
    {
        label: "Home",
        href: '/'
    },
    {
        label: "Services",
        href: '/services'
    },
    {
        label: "About",
        href: '/'
    },
    {
        label: "Contact Us",
        href: '/'
    }
]

const socialLinks: TSocialLink[] = [
    {
        label: "Facebook",
        href: '/',
        icon: 'Icon Placement'
    },
]

const whatsapp = '/'
export { navLinks, socialLinks, whatsapp };