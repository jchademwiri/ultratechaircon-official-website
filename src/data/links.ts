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
        label: "Contact Us",
        href: '/contact'
    }
]

const socialLinks: TSocialLink[] = [
    {
        label: "Facebook",
        href: '/',
        icon: 'Icon Placement'
    },
]

const whatsapp = 'https://wa.me/message/N5EHXKJVMI7WM1'
export { navLinks, socialLinks, whatsapp };