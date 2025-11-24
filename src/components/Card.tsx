import type { TCard } from "@/lib/types";

const Card = ({ icon, title, description }: TCard) => {
	return (
		<article className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 text-left text-white shadow-lg shadow-blue-900/20 backdrop-blur-sm">
			<div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/20 text-blue-200 ring-1 ring-white/15">
				{icon}
			</div>
			<h3 className="mb-3 text-xl font-semibold text-white">{title}</h3>
			<p className="text-sm leading-relaxed text-blue-100/90">{description}</p>
			<div className="pointer-events-none absolute inset-x-6 bottom-5 h-px bg-linear-to-r from-transparent via-white/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
			<div className="pointer-events-none absolute -right-6 -top-6 h-16 w-16 rounded-full bg-blue-400/10 transition-transform duration-300 group-hover:scale-150" />
		</article>
	);
};
export default Card;
