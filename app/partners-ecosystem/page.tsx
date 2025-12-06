import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function PartnersEcosystemPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <section className="w-full py-16 md:py-18">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Who We Work With
          </h1>
          <p className="text-lg mb-8">
            Discover the impact Salvy VentureCorp has made across Africa,
            supporting founders and transforming industries and communities.
          </p>

          {/* Impact Highlights Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-left max-w-6xl mx-auto mb-12">
            <div className="bg-white dark:bg-[#18181b] rounded-xl shadow p-6 flex flex-col items-start md:min-w-[320px] md:max-w-[400px]">
              <h3 className="text-xl font-bold text-red-700 dark:text-foreground mb-2">
                Investors
              </h3>
              <p className="text-foreground/80 text-base">
                Fueling growth and scaling impact-driven ventures across Africa.
              </p>
            </div>
            <div className="bg-white dark:bg-[#18181b] rounded-xl shadow p-6 flex flex-col items-start md:min-w-[320px] md:max-w-[400px]">
              <h3 className="text-xl font-bold text-red-700 dark:text-foreground mb-2">
                Corporates
              </h3>
              <p className="text-foreground/80 text-base">
                Partnering for innovation, market expansion, and shared value
                creation.
              </p>
            </div>
            <div className="bg-white dark:bg-[#18181b] rounded-xl shadow p-6 flex flex-col items-start md:min-w-[320px] md:max-w-[400px]">
              <h3 className="text-xl font-bold text-red-700 dark:text-foreground mb-2">
                Governments
              </h3>
              <p className="text-foreground/80 text-base">
                Collaborating to strengthen industries, policy, and national
                development.
              </p>
            </div>
            <div className="bg-white dark:bg-[#18181b] rounded-xl shadow p-6 flex flex-col items-start md:min-w-[320px] md:max-w-[400px]">
              <h3 className="text-xl font-bold text-red-700 dark:text-foreground mb-2">
                DFIs
              </h3>
              <p className="text-foreground/80 text-base">
                Driving sustainable economic growth and inclusive development.
              </p>
            </div>
            <div className="bg-white dark:bg-[#18181b] rounded-xl shadow p-6 flex flex-col items-start md:min-w-[320px] md:max-w-[400px]">
              <h3 className="text-xl font-bold text-red-700 dark:text-foreground mb-2 text-wrap">
                Academic Institutions
              </h3>
              <p className="text-foreground/80 text-base">
                Bridging research, talent, and real-world enterprise experience.
              </p>
            </div>
            <div className="bg-white dark:bg-[#18181b] rounded-xl shadow p-6 flex flex-col items-start md:min-w-[320px] md:max-w-[400px]">
              <h3 className="text-xl font-bold text-red-700 dark:text-foreground mb-2">
                Innovation organizations
              </h3>
              <p className="text-foreground/80 text-base">
                Accelerating new ideas, technology, and entrepreneurial
                ecosystems.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/*Partner Benefits*/}
      <section className="w-full py-16 md:py-14 bg-blue-50 dark:bg-[#8B0000]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-10">
            Partner Benefits
          </h1>

          {/* Partner Benefits Section */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-left max-w-6xl mx-auto mb-12">
            <div className="bg-white dark:bg-[#18181b] rounded-xl shadow p-6 flex flex-col items-center text-center md:min-w-[220px] md:max-w-[260px]">
              <h3 className="text-lg font-bold text-red-700 dark:text-foreground mb-2">
                Structured pipeline
              </h3>
              <p className="text-foreground/80 text-base">Guided growth.</p>
            </div>
            <div className="bg-white dark:bg-[#18181b] rounded-xl shadow p-6 flex flex-col items-center text-center md:min-w-[220px] md:max-w-[260px]">
              <h3 className="text-lg font-bold text-red-700 dark:text-foreground mb-2 text-center">
                Governance-backed ventures
              </h3>
              <p className="text-foreground/80 text-base">
                Transparent ventures.
              </p>
            </div>
            <div className="bg-white dark:bg-[#18181b] rounded-xl shadow p-6 flex flex-col items-center text-center md:min-w-[220px] md:max-w-[260px]">
              <h3 className="text-lg font-bold text-red-700 dark:text-foreground mb-2 text-center">
                Co-building opportunities
              </h3>
              <p className="text-foreground/80 text-base">
                Collaborative innovation.
              </p>
            </div>
            <div className="bg-white dark:bg-[#18181b] rounded-xl shadow p-6 flex flex-col items-center text-center md:min-w-[220px] md:max-w-[260px]">
              <h3 className="text-lg font-bold text-red-700 dark:text-foreground mb-2">
                Measurable Impact
              </h3>
              <p className="text-foreground/80 text-base">Visible impact.</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
