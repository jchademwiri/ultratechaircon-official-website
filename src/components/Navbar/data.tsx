import { TLink } from "@/lib/types";
import { Linkedin, Mail, Phone } from "lucide-react";

export const links: TLink[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const icons = [
  {
    name: "WhatsApp",
    link: "https://wa.me/message/N5EHXKJVMI7WM1",
    icon: <Phone />,
  },

  {
    name: "Email",
    link: "mailto:support@ultratechaircon.co.za",
    icon: <Mail />,
  },

  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/",
    icon: <Linkedin />,
  },
];
