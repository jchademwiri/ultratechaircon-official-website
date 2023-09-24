import { Facebook, Twitter, Linkedin, MessageCircle, } from "lucide-react"
import Link from "next/link"

const SocialIcons = () => {
    return (
        <ul className="flex gap-2 my-2 ">
            <li className="py-2">
                <Link href='/' target="_blank" rel="noopener noreferrer" className="flex gap-2 hover:text-primary">
                    <MessageCircle size={20} />
                    {/* WhatsApp */}
                </Link>
            </li>
            <li className="py-2">
                <Link href='/' target="_blank" rel="noopener noreferrer" className="flex gap-2 hover:text-primary">
                    <Facebook size={20} />
                    {/* Facebook */}
                </Link>
            </li>
            <li className="py-2">
                <Link href='/' target="_blank" rel="noopener noreferrer" className="flex gap-1 hover:text-primary">
                    <Twitter size={20} />
                    {/* Twitter */}
                </Link>
            </li>

            <li className="py-2">
                <Link href='/' target="_blank" rel="noopener noreferrer" className="flex gap-1 hover:text-primary">
                    <Linkedin size={20} />
                    {/* Linkedin */}
                </Link>
            </li>
        </ul>
    )
}
export default SocialIcons