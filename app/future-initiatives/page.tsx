import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function FutureInitiativesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <section className="w-full py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Future Initiatives
          </h1>
          <p className="text-lg text-foreground/70 mb-8">
            Explore upcoming projects and initiatives at Salvy VentureCorp,
            driving innovation and growth for Africa's future.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
