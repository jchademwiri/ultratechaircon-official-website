import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { Footer, Header } from "@/components";
import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import Navbar from "@/components/Navbar";

const openSans = Open_Sans({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-openSans",
	weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
	metadataBase: new URL("https://www.ultratechaircon.co.za"),
	title:
		"Air conditioner Installation & Repairs in Cape Town - Ultratech Aircon",
	description:
		"Air conditioning installation, repairs, maintenance and refrigeration services around Cape Town. Get a free estimate to day. Service guarantee.",
	alternates: {
		canonical: "/",
	},

	keywords: [
		"Air conditioning Cape Town",
		"Aircon repairs Cape Town",
		"Aircon installation Cape Town",
		"Refrigeration services Cape Town",
		"Commercial air conditioning",
		"Residential air conditioning",
		"HVAC services",
		"Ultratech Aircon",
	],
	openGraph: {
		title:
			"Air conditioner Installation & Repairs in Cape Town - Ultratech Aircon",
		siteName: "Ultra Tech Aircons",
		description:
			"Air conditioning installation, repairs, maintenance and refrigeration services around Cape Town. Get a free estimate to day. Service guarantee.",
		url: "https://www.ultratechaircon.co.za",
		locale: "en_US",
		type: "website",
		images: "/airconditioning.jpg",
	},
	category: "technology",
	twitter: {
		creator: "@jchademwiri",
		creatorId: "1467726470533754880",
		siteId: "1467726470533754880",
		card: "summary_large_image",
	},
	robots: {
		index: true,
		follow: true,
		nocache: true,
		googleBot: {
			index: true,
			follow: true,
			noimageindex: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={openSans.className} suppressHydrationWarning>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							"@context": "https://schema.org",
							"@type": "LocalBusiness",
							name: "Ultratech Aircon",
							image: "https://www.ultratechaircon.co.za/airconditioning.jpg",
							"@id": "https://www.ultratechaircon.co.za",
							url: "https://www.ultratechaircon.co.za",
							telephone: "+27781838234",
							address: {
								"@type": "PostalAddress",
								streetAddress: "Cape Town",
								addressLocality: "Cape Town",
								addressRegion: "WC",
								postalCode: "8000",
								addressCountry: "ZA",
							},
							geo: {
								"@type": "GeoCoordinates",
								latitude: -33.9249,
								longitude: 18.4241,
							},
							openingHoursSpecification: {
								"@type": "OpeningHoursSpecification",
								dayOfWeek: [
									"Monday",
									"Tuesday",
									"Wednesday",
									"Thursday",
									"Friday",
									"Saturday",
								],
								opens: "08:00",
								closes: "17:00",
							},
							sameAs: [
								"https://www.facebook.com/ultratechaircon",
								"https://twitter.com/jchademwiri",
							],
						}),
					}}
				/>
				<GoogleAnalytics />
				{/* <Header /> */}
				<Navbar />
				{children}
				<Footer />
				<Analytics />
			</body>
		</html>
	);
}
