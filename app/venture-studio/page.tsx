import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function VentureStudioPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <section className="w-full py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Venture Studio
          </h1>
          <p className="text-lg text-foreground/70 mb-8">
            The Venture Studio is the engine of the Salvy ecosystem <br />
            where ideas become structured companies built for longevity, impact,
            and scale.
          </p>
        </div>
      </section>
      {/* Custom Section After Hero */}
      <section className="w-full py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 flex items-center justify-center bg-primary rounded-lg p-6">
              <h1 className="text-xl sm:text-2xl font-bold text-primary-foreground text-center">
                We don’t host cohorts.
              </h1>
            </div>
            <div className="flex-1 flex items-center justify-center bg-destructive dark:bg-foreground rounded-lg p-6">
              <h1 className="text-xl sm:text-2xl font-bold text-destructive-foreground text-center">
                We co-build companies.
              </h1>
            </div>
          </div>
        </div>
      </section>
      {/* What We Do Section */}
      <section className="w-full py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-foreground">
            What we Do
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-card rounded-lg shadow p-6 flex flex-col items-center text-center">
              <span className="text-4xl mb-3">🔍</span>
              <h3 className="font-semibold text-lg mb-2">
                Opportunity Identification
              </h3>
              <p className="text-foreground/70 text-sm">
                We discover and validate high-potential market opportunities for
                new ventures.
              </p>
            </div>
            {/* Card 2 */}
            <div className="bg-card rounded-lg shadow p-6 flex flex-col items-center text-center">
              <span className="text-4xl mb-3">🤝</span>
              <h3 className="font-semibold text-lg mb-2">
                Venture Co-Creation
              </h3>
              <p className="text-foreground/70 text-sm">
                We partner with founders to co-create and launch innovative
                companies.
              </p>
            </div>
            {/* Card 3 */}
            <div className="bg-card rounded-lg shadow p-6 flex flex-col items-center text-center">
              <span className="text-4xl mb-3">🛠️</span>
              <h3 className="font-semibold text-lg mb-2">
                Product Development
              </h3>
              <p className="text-foreground/70 text-sm">
                We design, build, and iterate products that solve real problems
                and delight users.
              </p>
            </div>
            {/* Card 4 */}
            <div className="bg-card rounded-lg shadow p-6 flex flex-col items-center text-center">
              <span className="text-4xl mb-3">📜</span>
              <h3 className="font-semibold text-lg mb-2">
                Governance & Compliance
              </h3>
              <p className="text-foreground/70 text-sm">
                We ensure ventures are structured for legal, regulatory, and
                operational compliance.
              </p>
            </div>
            {/* Card 5 */}
            <div className="bg-card rounded-lg shadow p-6 flex flex-col items-center text-center">
              <span className="text-4xl mb-3">🏗️</span>
              <h3 className="font-semibold text-lg mb-2">
                Revenue & Operations Architecture
              </h3>
              <p className="text-foreground/70 text-sm">
                We architect scalable revenue models and efficient operational
                systems.
              </p>
            </div>
            {/* Card 6 */}
            <div className="bg-card rounded-lg shadow p-6 flex flex-col items-center text-center">
              <span className="text-4xl mb-3">💸</span>
              <h3 className="font-semibold text-lg mb-2">
                Financial System Design
              </h3>
              <p className="text-foreground/70 text-sm">
                We implement robust financial systems for transparency and
                growth.
              </p>
            </div>
            {/* Card 7 */}
            <div className="bg-card rounded-lg shadow p-6 flex flex-col items-center text-center">
              <span className="text-4xl mb-3">🎨</span>
              <h3 className="font-semibold text-lg mb-2">
                Branding & Communication
              </h3>
              <p className="text-foreground/70 text-sm">
                We craft compelling brands and communication strategies for
                market impact.
              </p>
            </div>
            {/* Card 8 */}
            <div className="bg-card rounded-lg shadow p-6 flex flex-col items-center text-center">
              <span className="text-4xl mb-3">🚀</span>
              <h3 className="font-semibold text-lg mb-2">Investor Readiness</h3>
              <p className="text-foreground/70 text-sm">
                We prepare ventures to attract, engage, and secure investment.
              </p>
            </div>
            {/* Card 9 */}
            <div className="bg-card rounded-lg shadow p-6 flex flex-col items-center text-center">
              <span className="text-4xl mb-3">📈</span>
              <h3 className="font-semibold text-lg mb-2">Scaling Support</h3>
              <p className="text-foreground/70 text-sm">
                We provide ongoing support and resources to help ventures scale
                successfully.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
