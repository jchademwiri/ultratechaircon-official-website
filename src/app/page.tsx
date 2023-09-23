import { HomeService, ServicesCTA, Partners } from "@/components";

export default function Home() {
  return (
    <main className="min-h-[400px]">
      <HomeService />
      <ServicesCTA />
      <Partners />
    </main>
  )
}
