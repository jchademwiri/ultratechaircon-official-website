import { HomeService, ServicesCTA, Partners, Hero, Banner } from "@/components";

export default function Home() {
  return (
    <main className="min-h-[400px]">
      <Hero />
      <HomeService />
      <ServicesCTA />
      <Banner />
      <Partners />
    </main>
  )
}
