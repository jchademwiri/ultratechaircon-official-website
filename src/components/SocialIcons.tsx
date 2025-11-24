import { Facebook, Linkedin, MessageCircle, Twitter } from "lucide-react";
import Link from "next/link";
import { appMessage, whatsapp } from "@/data/links";

const SocialIcons = () => {
	return (
		<ul className="flex items-center gap-3 text-white/80">
			<li>
				<Link
					href={appMessage}
					target="_self"
					aria-label="WhatsApp"
					rel="noopener noreferrer"
					className="flex gap-2 hover:text-primary"
				>
					<MessageCircle size={20} />
					{/* WhatsApp */}
				</Link>
			</li>
			<li>
				<Link
					href="/"
					target="_blank"
					aria-label="Facebook"
					rel="noopener noreferrer"
					className="flex gap-2 hover:text-primary"
				>
					<Facebook size={20} />
					{/* Facebook */}
				</Link>
			</li>
			<li>
				<Link
					href="/"
					target="_blank"
					aria-label="Twitter"
					rel="noopener noreferrer"
					className="flex gap-1 hover:text-primary"
				>
					<Twitter size={20} />
					{/* Twitter */}
				</Link>
			</li>

			<li>
				<Link
					href="/"
					target="_blank"
					aria-label="Linkedin"
					rel="noopener noreferrer"
					className="flex gap-1 hover:text-primary"
				>
					<Linkedin size={20} />
					{/* Linkedin */}
				</Link>
			</li>
		</ul>
	);
};
export default SocialIcons;
