import { Analytics } from "@vercel/analytics/react";
import { Footer, Header } from "@/components";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-openSans",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ultratechaircon.co.za"),
  title: "Air conditioner Installation & Repairs in Cape Town - Ultratech Aircon",
  description:
    "Air conditioning installation, repairs, maintenance and refrigeration services around Cape Town. Get a free estimate to day. Service guarantee.",
  alternates: {
    canonical: "/",
  },

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
      follow: false,
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
    <html lang="en">
      <body className={openSans.className}>
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
