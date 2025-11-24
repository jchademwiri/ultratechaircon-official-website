import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { TService } from "@/lib/types";

const ServiceCard = ({ picture, title, desc, link }: TService) => {
	const cardContent = (
		<article className="group overflow-hidden rounded-3xl border border-white/10 bg-linear-to-b from-slate-900/90 via-slate-950/50 to-black/50 text-white transition-all duration-300 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-900/40 backdrop-blur-sm">
			{/* Image Container */}
			<div className="relative h-60 w-full overflow-hidden bg-slate-900/40">
				<Image
					src={picture.logo}
					alt={picture.alt}
					fill
					className="object-cover transition-transform duration-500 group-hover:scale-110"
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
				/>

				{/* Overlay on hover */}
				<div className="absolute inset-0 bg-linear-to-t from-blue-950/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

				{/* Hover Icon */}
				{link && (
					<div className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/90 opacity-0 shadow-lg backdrop-blur-xs transition-all duration-300 group-hover:opacity-100">
						<ArrowRight className="h-5 w-5 text-blue-600 transition-transform group-hover:translate-x-1" />
					</div>
				)}
			</div>

			{/* Content */}
			<div className="p-6">
				<h3 className="mb-3 text-xl font-bold text-white">{title}</h3>
				<p className="mb-4 line-clamp-3 text-sm leading-relaxed text-blue-100/80">
					{desc}
				</p>

				{/* Read More Link - Only show if link exists */}
				{link && (
					<div className="flex items-center gap-2 text-sm font-semibold text-blue-200 transition-colors group-hover:text-white">
						<span>Learn More</span>
						<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
					</div>
				)}
			</div>

			{/* Bottom Border Accent */}
			{link && (
				<div className="h-1 w-0 bg-linear-to-r from-blue-500 to-cyan-400 transition-all duration-500 group-hover:w-full" />
			)}
		</article>
	);

	// If link exists, wrap in Link component, otherwise just return the card
	if (link) {
		return <Link href={link.href || "#"}>{cardContent}</Link>;
	}

	return <div className="group">{cardContent}</div>;
};

export default ServiceCard;
