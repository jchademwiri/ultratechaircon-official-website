import { v4 as uuid } from "uuid";
import { TLink, TSocialLink } from "@/lib/types";


const navLinks: TLink[] = [
    {
        label: "Home",
        href: '/',
        ariaLabel: 'Home Page of with Ultra Tech Aircons'
    },
    {
        label: "Services",
        href: '/services',
        ariaLabel: 'Services Page of with Ultra Tech Aircons'
    },
    {
        label: "Contact Us",
        href: '/contact',
        ariaLabel: 'Contact Page of with Ultra Tech Aircons'
    }
]

const socialLinks: TSocialLink[] = [
    {
        label: "Facebook",
        href: '/',
        icon: 'Icon Placement'
    },
]

const whatsapp = 'https://wa.me/message/DIVHUUSEUOYQE1'


export { navLinks, socialLinks, whatsapp, uuid };