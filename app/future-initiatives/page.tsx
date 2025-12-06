import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function FutureInitiativesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <section className="w-full py-16 md:py-24 relative">
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/background.jpg"
            alt="Future Initiatives Banner"
            className="w-full h-full object-cover object-center opacity-5"
            draggable="false"
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-5xl lg:text-4xl font-bold text-foreground mb-6">
            Shaping the <span className="text-red-700">Next 25 Years</span> of
            African Enterprise Development
          </h1>
          <p className="text-lg text-foreground/70 mb-8">
            At Salvy VentureCorp, we build companies with a long-term view — and
            our vision extends far beyond today. Over the next 25 years, two
            major initiatives will anchor our mission of creating 1,000 enduring
            African ventures: Salvy University and the Salvy Enterprise
            Development Special Economic Zone (SEZ).
          </p>
          <p className="text-lg text-foreground/70 mb-8">
            These are future projects currently in the blueprint and partnership
            development stage. They reflect where we are going — not where we
            claim to be today.
          </p>
          <p className="text-lg text-foreground/70 mb-8">
            Our goal is to lay the foundation for institutions that will outlive
            us and empower generations of African founders, operators, and
            innovators.
          </p>
        </div>
      </section>
      {/* Salvy University Title Section */}
      <section className="w-full py-6 bg-black flex justify-center">
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 mb-2 justify-center w-full px-4">
          <h2 className="text-2xl sm:text-4xl font-bold text-card dark:text-foreground text-card text-center">
            Salvy University
          </h2>
          <span className="bg-red-700 text-white text-xs sm:text-sm font-semibold px-3 py-1 rounded-full mt-2 sm:mt-0">
            Coming Soon
          </span>
        </div>
      </section>

      {/* Salvy University Main Section */}
      <div className="w-full flex justify-center items-center py-8 md:py-24 bg-background">
        <section className="max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-6">
          <div className="flex flex-col md:flex-row items-center gap-10 justify-center">
            {/* Left Column: Image */}
            <div className="md:w-1/2 w-full flex justify-center mb-4 md:mb-0">
              <img
                src="/images/salvy-university.jpg"
                alt="Salvy University"
                className="rounded-xl shadow-lg w-full max-w-lg object-cover h-64 md:h-152"
              />
            </div>
            {/* Right Column: Content */}
            <div className="md:w-1/2 w-full">
              <h3 className="text-xl font-semibold text-foreground mb-2 text-center md:text-left">
                Africa’s Enterprise Development University
              </h3>
              <p className="text-base text-foreground/70 mb-4 text-center md:text-left">
                Salvy University will become Africa’s first academic institution
                dedicated to producing disciplined founders, trained operators,
                venture architects, and industry leaders. it will combine :
              </p>
              <div className="flex flex-col md:flex-row gap-6">
                {/* Bullet List */}
                <ul className="list-disc pl-5 text-base text-foreground mb-4">
                  <li>practical venture-building</li>
                  <li>leadership and governance development</li>
                  <li>applied market research</li>
                  <li>hands-on learning within real ventures</li>
                </ul>
              </div>
              <p className="text-base text-foreground/70 mb-6 text-center md:text-left">
                The University will anchor the talent engine behind our 25-year
                roadmap.
              </p>
              <h3 className="text-lg font-semibold text-foreground mb-2 text-center md:text-left">
                Current Status
              </h3>
              <p className="text-base text-foreground/70 mb-6 text-center md:text-left">
                Actively in concept development, partnership discussions, and
                blueprint refinement.
              </p>
              <h3 className="text-lg font-semibold text-foreground mb-2 text-center md:text-left">
                Expected functions:
              </h3>
              <ul className="list-disc pl-5 text-base text-foreground mb-4">
                <li>Enterprise-focused academic programs</li>
                <li>Research & innovation hubs</li>
                <li>Founder residencies</li>
                <li>Talent pipeline for Studio ventures</li>
                <li>Integration with the future SEZ ecosystem</li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      {/* ENTERPRISE DEVELOPMENT SEZ  */}
      <section className="w-full py-6 bg-black flex justify-center">
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 mb-2 justify-center w-full px-4">
          <h2 className="text-2xl sm:text-4xl font-bold text-card dark:text-foreground text-card text-center">
            ENTERPRISE DEVELOPMENT SEZ
          </h2>
          <span className="bg-red-700 text-white text-xs sm:text-sm font-semibold px-3 py-1 rounded-full mt-2 sm:mt-0">
            Coming Soon
          </span>
        </div>
      </section>

      {/* Salvy University Main Section */}
      <div className="w-full flex justify-center items-center py-8 md:py-24 bg-background">
        <section className="max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-6">
          <div className="flex flex-col md:flex-row items-center gap-10 justify-center">
            {/* Left Column: Image */}
            <div className="md:w-1/2 w-full flex justify-center mb-4 md:mb-0">
              <img
                src="/images/salvy-realestate.jpg"
                alt="Salvy University"
                className="rounded-xl shadow-lg w-full max-w-lg object-cover h-64 md:h-152"
              />
            </div>
            {/* Right Column: Content */}
            <div className="md:w-1/2 w-full">
              <h3 className="text-xl font-semibold text-foreground mb-2 text-center md:text-left">
                A Purpose-Built City for African Innovation & Production
              </h3>
              <p className="text-base text-foreground/70 mb-4 text-center md:text-left">
                Salvy University will become Africa’s first academic institution
                dedicated to producing disciplined founders, trained operators,
                venture architects, and industry leaders. it will combine :
              </p>
              <div className="flex flex-col md:flex-row gap-6">
                {/* Bullet List */}
                <ul className="list-disc pl-5 text-base text-foreground mb-4">
                  <li>startups</li>
                  <li>SMES</li>
                  <li>Creative Teams</li>
                  <li>Agribusinesses</li>
                  <li>Manufacturers</li>
                  <li>Students</li>
                  <li>and Investors</li>
                </ul>
              </div>
              <p className="text-base text-foreground/70 mb-6 text-center md:text-left">
                co-exist in a shared environment built for efficiency,
                production, innovation, and scale.
              </p>

              <h3 className="text-lg font-semibold text-foreground mb-2 text-center md:text-left">
                It will integrate:
              </h3>
              <ul className="list-disc pl-5 text-base text-foreground mb-4">
                <li>Enterprise zones</li>
                <li>Manufacturing clusters</li>
                <li>Creative districts</li>
                <li>Logistics & agricultural hubs</li>
                <li>The Salvy University campus</li>
                <li>Capital & Financial Services</li>
                <li>Residential and Community Facilities</li>
              </ul>
              <p className="text-base text-foreground/70 mb-6 text-center md:text-left">
                <span className="font-bold text-foreground">
                  Current status:
                </span>{" "}
                Under consultation with state partners, land assessment,
                regulatory alignment, and long-term planning.
              </p>
              <p className="text-base text-foreground/70 mb-6 text-center md:text-left">
                The SEZ is designed as the physical culmination of our
                venture-building mission — a home for our best companies to
                scale and become global competitors.
              </p>
            </div>
          </div>
        </section>
      </div>
      {/* Why We Are Sharing These Future Plans Now Section */}
      <section className="w-full py-16 px-4 bg-background flex flex-col items-center">
        <div className="max-w-3xl w-full mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
            WHY WE ARE SHARING THESE FUTURE PLANS NOW
          </h2>
          <p className="text-base text-foreground/80 mb-6">
            Because these initiatives shape the long-term direction of Salvy
            VentureCorp.
            <br />
            They show partners, investors, and founders that our vision is not
            short-term — it is generational. However, we are intentional about
            communicating them carefully:
          </p>
          <ul className="list-disc pl-6 text-base text-foreground/80 mb-6 text-left inline-block">
            <li>They are not active programs yet</li>
            <li>
              No admissions, sign-ups, or operating details will be advertised
            </li>
            <li>We only share high-level vision and future direction</li>
          </ul>
          <p className="text-base text-foreground/80 mb-10">
            This protects our credibility while allowing strategic partners to
            begin engaging early.
          </p>
        </div>

        {/* Invitation to Partners Block */}
        <div className="w-full max-w-6xl mx-auto rounded-xl bg-black py-10 px-6 mb-8 flex flex-col items-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            AN INVITATION TO PARTNERS
          </h2>
          <p className="text-base text-white font-semibold mb-4">
            We welcome early conversations with:
          </p>
          <ul className="list-none grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
            <li className="flex items-center gap-2 text-white">
              <span className="inline-block w-2 h-2 bg-red-600 rounded-full"></span>
              governments
            </li>
            <li className="flex items-center gap-2 text-white">
              <span className="inline-block w-2 h-2 bg-red-600 rounded-full"></span>
              investors
            </li>
            <li className="flex items-center gap-2 text-white">
              <span className="inline-block w-2 h-2 bg-red-600 rounded-full"></span>
              development partners
            </li>
            <li className="flex items-center gap-2 text-white">
              <span className="inline-block w-2 h-2 bg-red-600 rounded-full"></span>
              institutions
            </li>
            <li className="flex items-center gap-2 text-white">
              <span className="inline-block w-2 h-2 bg-red-600 rounded-full"></span>
              foundations
            </li>
            <li className="flex items-center gap-2 text-white">
              <span className="inline-block w-2 h-2 bg-red-600 rounded-full"></span>
              corporate sponsors
            </li>
            <li className="flex items-center gap-2 text-white">
              <span className="inline-block w-2 h-2 bg-red-600 rounded-full"></span>
              academic collaborators
            </li>
          </ul>
        </div>

        {/* Call to Action Block */}
        <div className="w-full max-w-3xl mx-auto rounded-xl bg-destructive py-10 px-6 flex flex-col items-center">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            who want to shape Africa’s enterprise future alongside us.
          </h2>
          <button className="bg-white text-destructive font-bold px-6 py-3 rounded-full shadow hover:bg-destructive hover:text-white border-2 border-white transition-colors">
            Lets Start a Partnership
          </button>
        </div>
      </section>
      <Footer />
    </main>
  );
}
