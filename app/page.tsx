import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { CarouselSection } from "@/components/carousel-section";
import { EcosystemSection } from "@/components/ecosystem-section";
import { FounderSection } from "@/components/founder-section";
import { Footer } from "@/components/footer";
import Progress from "@/components/progress-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <CarouselSection />
      <EcosystemSection />
      <FounderSection />
      <Progress />
      <Footer />
    </main>
  );
}
