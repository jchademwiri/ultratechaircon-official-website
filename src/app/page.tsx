import {
	CTABanner,
	Hero,
	HomeService,
	Partners,
	ServicesCTA,
} from "@/components";

export default function Home() {
	return (
		<main className="min-h-[400px]">
			<Hero />
			<HomeService />
			<ServicesCTA />
			<CTABanner />
			<Partners />
		</main>
	);
}
