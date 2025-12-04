"use client";
import React from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRocket,
  faLightbulb,
  faSyncAlt,
  faStar,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";
export default function VentureStudioPage() {
  // FontAwesome icon mapping
  const iconMap = [
    { icon: faRocket, text: "early-stage founders" },
    { icon: faLightbulb, text: "industry experts" },
    { icon: faSyncAlt, text: "operators transitioning to entrepreneurship" },
    { icon: faStar, text: "high-potential innovators" },
    { icon: faChartLine, text: "SMEs ready to scale" },
  ];
  // Accordion data and state
  const accordionData = [
    {
      title: "Venture Origination",
      desc: "We originate new venture concepts from market insights and founder vision.",
    },
    {
      title: "Venture Co-Creation",
      desc: "We partner with founders to co-create and launch innovative companies.",
    },
    {
      title: "Product & Market Architecture",
      desc: "We design product and market strategies for scalable growth.",
    },
    {
      title: "Structure & Governance",
      desc: "We establish robust structures and governance for sustainable ventures.",
    },
    {
      title: "Operational Excellence",
      desc: "We drive operational efficiency and excellence across all functions.",
    },
    {
      title: "Capital Architecture",
      desc: "We architect capital strategies for funding and financial health.",
    },
    {
      title: "Founder & Talent Development",
      desc: "We nurture founders and talent for leadership and growth.",
    },
    {
      title: "Scaling Pathway",
      desc: "We guide ventures through the pathway to scale and market leadership.",
    },
  ];

  const [openIdx, setOpenIdx] = React.useState<number | null>(null);

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <section className="w-full py-16 md:py-24 relative overflow-hidden">
        {/* Background image with reduced opacity */}
        <div
          aria-hidden="true"
          className="absolute inset-0 w-full h-full z-0"
          style={{
            backgroundImage: "url('/background.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            opacity: 0.1,
          }}
        />
        {/* Optional: Overlay for readability */}
        <div className="absolute inset-0 bg-black/10 z-10" aria-hidden="true" />
        <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl                                   sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
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
      {/* Expandable List Section */}
      <section
        className="w-full py-8 relative overflow-hidden"
        style={{
          backgroundImage: "url('/images/salvycenture-growth.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Blurred background overlay */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 w-full h-full z-0"
          style={{
            backgroundImage: "inherit",
            backgroundSize: "inherit",
            backgroundPosition: "inherit",
            backgroundRepeat: "inherit",
            filter: "blur(16px)",
            opacity: 0.8,
          }}
        />
        {/* Dark mode overlay for better contrast */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 w-full h-full z-10 dark:block hidden"
          style={{
            background: "rgba(0,0,0,0.5)",
          }}
        />
        <h2 className="relative z-10 text-2xl sm:text-3xl font-bold text-center text-foreground mb-8">
          Our 8-Step Venture Architecture System
        </h2>
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-8 items-center w-full">
            {/* Left Column: Image */}

            {/* Right Column: Expandable List */}
            <div className="flex-1 w-full">
              <ul className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full">
                {accordionData.map((item, idx) => (
                  <li
                    key={item.title}
                    className="bg-card rounded-lg shadow p-4"
                  >
                    <button
                      className="flex items-center justify-between w-full text-left font-semibold text-sm text-foreground"
                      onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                    >
                      <span>{item.title}</span>
                      <span className="ml-2 text-xl">
                        {openIdx === idx ? "−" : "+"}
                      </span>
                    </button>
                    {openIdx === idx && (
                      <p className="mt-3 text-foreground/70 text-sm">
                        {item.desc}
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="w-full py-16 md:py-20 bg-black dark:bg-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-card dark:text-black mb-6">
            Ready to Build with Us?
          </h2>
          <p className="text-lg  mb-8 text-card dark:text-black">
            Join thousands of founders transforming Africa's innovation
            landscape
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-primary dark:bg-primary text-primary-foreground hover:bg-primary/90 dark:hover:bg-amber-500 rounded-full px-8 py-6 text-base font-semibold">
              Apply to the Venture Studio
            </Button>
          </div>
        </div>
      </section>
      {/* Who We Build For Section */}
      <section className="w-full py-16 md:py-15">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-8 items-center">
          {/* Left Column: Title, Description, List */}
          <div className="flex-1 flex flex-col justify-center items-start">
            <h2 className="text-3xl sm:text-3xl font-bold text-destructive mb-4">
              Who We Build For
            </h2>
            <p className="text-lg text-foreground/70 mb-6">
              We focus on ambitious, ethical founders committed to building
              enduring companies.
            </p>
            <ul className="space-y-4 w-full">
              {iconMap.map((item) => (
                <li
                  key={item.text}
                  className="flex items-center gap-3 text-lg text-foreground"
                >
                  <FontAwesomeIcon icon={item.icon} className="text-xl" />
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* Right Column: Full Image */}
          <div className="flex-1 w-full h-[400px] md:h-[500px] flex items-center justify-center">
            <img
              src="/images/salvy-growth.jpg"
              alt="Who We Build For"
              className="w-full h-full object-cover rounded-lg shadow"
              style={{ minHeight: "100%", minWidth: "100%" }}
            />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
