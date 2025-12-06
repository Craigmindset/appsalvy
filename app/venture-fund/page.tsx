import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faChartBar,
  faChartLine,
  faCog,
  faGlobeAfrica,
  faMobileAlt,
  faMoneyBillWave,
  faRocket,
} from "@fortawesome/free-solid-svg-icons";

export default function VentureFundPage() {
  const items = [
    {
      title: "Studio-born ventures",
      text: "Ventures ideated, launched, and scaled within our studio, leveraging shared resources and expert guidance from day one.",
      icon: faChartLine,
    },
    {
      title: "early-stage and seed companies",
      text: "Supporting founders at the earliest stages with capital, mentorship, and a robust launchpad for rapid growth.",
      icon: faCog,
    },
    {
      title: "high-impact sectors",
      text: "Focusing on industries with the greatest potential for economic and social transformation across Africa.",
      icon: faChartBar,
    },
    {
      title: "ventures with governance and product validation",
      text: "Ensuring every venture is built on strong governance and validated products, ready for scale and investment.",
      icon: faMobileAlt,
    },
  ];

  const impactItems = [
    {
      title: "De-risked, structured pipeline",
      text: "A proven process that identifies, supports, and scales high-potential startups, reducing risk for investors and founders alike.",
      icon: faRocket,
    },
    {
      title: "Governance from day zero",
      text: "Robust governance frameworks are embedded from the start, ensuring transparency, accountability, and sustainable growth.",
      icon: faBriefcase,
    },
    {
      title: "Investment discipline",
      text: "A rigorous, data-driven approach to investment decisions, maximizing impact and returns across diverse African markets.",
      icon: faGlobeAfrica,
    },
    {
      title: "Pan-African market intelligence",
      text: "Deep insights and on-the-ground expertise drive strategic decisions and unlock opportunities across the continent.",
      icon: faMoneyBillWave,
    },
    {
      title: "Long-term institutional vision",
      text: "A commitment to building enduring value, fostering innovation, and shaping Africa’s future through patient, strategic investment.",
      icon: faMoneyBillWave,
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <section className="w-full py-16 md:py-24 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center ">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-card mb-6 dark:text-foreground">
            Venture Fund
          </h1>
          <p className="text-lg text-card/70 mb-8 dark:text-foreground/70">
            The Salvy Venture Fund is the investment engine powering
            Studio-built ventures <br /> a SEC-regulated vehicle providing
            catalytic capital with governance at its core.
          </p>
        </div>
        {/*seperator section*/}
      </section>
      <section className="w-full bg-[#111217] text-white py-20 px-6 md:px-20">
        <div className="absolute inset-0  z-0" />
        <div className="relative z-10">
          {/* Responsive layout: stacked on mobile, grid on md+ */}
          <div className="max-w-7xl mx-auto">
            {/* Mobile: Centered, single block */}
            <div className="block md:hidden">
              <h1 className="text-2xl font-semibold mb-2 text-center">
                Investment Focus
              </h1>
              <p className="text-gray-400 text-sm leading-relaxed mb-4 text-center">
                We Invest in
              </p>
              <div className="grid grid-cols-1 gap-4 mb-8 mx-2">
                {items.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col gap-2 items-center text-center w-full max-w-xs mx-auto"
                  >
                    <h3 className="text-base font-medium">{item.title}</h3>
                    <p className="text-gray-400 text-xs leading-relaxed text-left">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
              {/* Mobile Horizontal Separator */}
              <div className="my-8">
                <div className="h-px w-full bg-gray-700" />
              </div>
              {/* Mobile: Column 3 */}
              <h1 className="text-xl font-semibold mb-4 text-center">
                Why Investors Trust Us
              </h1>
              <div className="grid grid-cols-1 gap-4 mb-8 mx-2">
                {impactItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col gap-2 items-center text-center w-full max-w-xs mx-auto"
                  >
                    <h3 className="text-base font-medium">{item.title}</h3>
                    <p className="text-gray-400 text-xs leading-relaxed text-left">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            {/* Desktop/Tablet: 3-column grid */}
            <div
              className="hidden md:grid md:grid-cols-3 gap-12 items-start"
              style={{ gridTemplateColumns: "45% 10% 45%" }}
            >
              {/* Left Column */}
              <div className="relative">
                <h1 className="text-3xl font-semibold leading-tight mb-8">
                  Investment Focus
                </h1>
                <p className="text-gray-400 text-sm leading-relaxed mb-8">
                  We Invest in
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-8">
                  {items.map((item, index) => (
                    <div key={index} className="flex flex-col gap-3">
                      <h3 className="text-lg font-medium">{item.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              {/* Middle Column - Vertical Separator */}
              <div className="flex flex-col items-center justify-center">
                <div
                  className="w-px h-full bg-gray-700"
                  style={{ minHeight: "450px" }}
                />
              </div>
              {/* Right Column */}
              <div className="relative md:ml-0 md:mr-12">
                <h1 className="text-3xl font-semibold leading-tight mb-8">
                  Why Investors Trust Us
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-8">
                  {impactItems.map((item, index) => (
                    <div key={index} className="flex flex-col gap-3">
                      <h3 className="text-lg font-medium">{item.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
