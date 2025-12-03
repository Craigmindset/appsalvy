import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function VentureFundPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <section className="w-full py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Venture Fund
          </h1>
          <p className="text-lg text-foreground/70 mb-8">
            Learn more about Salvy VentureCorp's Venture Fund and how we
            accelerate the growth of Studio-built ventures with capital and
            support.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
