import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function ImpactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <section className="w-full py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Our Impact Model
          </h1>
          <p className="text-lg mb-8">
            Discover the impact Salvy VentureCorp has made across Africa,
            supporting founders and transforming industries and communities.
          </p>

          {/* Impact Highlights Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left max-w-4xl mx-auto mb-12">
            <div className="bg-white dark:bg-[#18181b] rounded-xl shadow p-6 flex flex-col items-start">
              <h3 className="text-xl font-bold text-red-700 mb-2">
                Economic Impact
              </h3>
              <p className="text-foreground/80 text-base">
                Jobs, income, productivity, GDP growth.
              </p>
            </div>
            <div className="bg-white dark:bg-[#18181b] rounded-xl shadow p-6 flex flex-col items-start">
              <h3 className="text-xl font-bold text-red-700 mb-2">
                Social Impact
              </h3>
              <p className="text-foreground/80 text-base">
                Financial inclusion, education, women empowerment, dignity.
              </p>
            </div>
            <div className="bg-white dark:bg-[#18181b] rounded-xl shadow p-6 flex flex-col items-start">
              <h3 className="text-xl font-bold text-red-700 mb-2">
                Structural Impact
              </h3>
              <p className="text-foreground/80 text-base">
                Industry repair, value chain strengthening, governance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Impact Examples Section */}
      <section className="w-full py-12 md:py-16 bg-[#18181b] text-white dark:bg-white dark:text-[#18181b]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center">
            Portfolio Impact Examples
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* Kitovu */}
            <div className="flex flex-col items-center bg-[#ffffff] dark:bg-white rounded-xl shadow p-6">
              <img
                src="/brands/port 10.png"
                alt="Kitovu Logo"
                className="h-12 w-auto mb-4"
              />
              <h3 className="text-lg font-bold text-red-700 mb-2">Kitovu</h3>
              <p className="text-[#18181b] dark:text-[#18181b] text-center text-base">
                Improved yields & food systems
              </p>
            </div>
            {/* WakaBanki */}
            <div className="flex flex-col items-center bg-[#ffffff] dark:bg-white rounded-xl shadow p-6">
              <img
                src="/brands/port9.png"
                alt="WakaBanki Logo"
                className="h-12 w-auto mb-4"
              />
              <h3 className="text-lg font-bold text-red-700 mb-2">WakaBanki</h3>
              <p className="text-[#18181b] dark:text-[#18181b] text-center text-base">
                Financial identity for women
              </p>
            </div>
            {/* Outdoors.ng */}
            <div className="flex flex-col items-center bg-[#ffffff] dark:bg-white rounded-xl shadow p-6">
              <img
                src="/brands/port4.png"
                alt="Outdoors.ng Logo"
                className="h-12 w-auto mb-4"
              />
              <h3 className="text-lg font-bold text-red-700 mb-2">
                Outdoors.ng
              </h3>
              <p className="text-[#18181b] dark:text-[#18181b] text-center text-base">
                Revived billboard industry
              </p>
            </div>
            {/* ArtisanOga */}
            <div className="flex flex-col items-center bg-[#ffffff] dark:bg-white rounded-xl shadow p-6">
              <img
                src="/brands/port7.png"
                alt="ArtisanOga Logo"
                className="h-12 w-auto mb-4"
              />
              <h3 className="text-lg font-bold text-red-700 mb-2">
                ArtisanOga
              </h3>
              <p className="text-[#18181b] dark:text-[#18181b] text-center text-base">
                Skilled and trusted artisan workforce
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
