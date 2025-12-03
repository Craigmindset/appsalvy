import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function PartnersEcosystemPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <section className="w-full py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Partners & Ecosystem
          </h1>
          <p className="text-lg text-foreground/70 mb-8">
            Discover our partners and the broader ecosystem supporting Salvy VentureCorp's mission to build and scale African ventures.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
