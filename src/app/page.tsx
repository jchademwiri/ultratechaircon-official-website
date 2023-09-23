import { HomeService, ServicesCTA, Partners, Hero } from "@/components";

export default function Home() {
  return (
    <main className="min-h-[400px]">
      <Hero />
      <HomeService />
      <ServicesCTA />
      <Partners />
    </main>
  )
}
