import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faCog,
  faChartBar,
  faMobileAlt,
  faRocket,
  faBriefcase,
  faGlobeAfrica,
  faMoneyBillWave,
} from "@fortawesome/free-solid-svg-icons";

export default function Progress() {
  const items = [
    {
      title: "Phase 1: 2025 - 2030",
      text: "50 ventures • Studio/Fund operational • University groundwork • SEZ planning",
      icon: faChartLine,
    },
    {
      title: "Phase 2: 2030 - 2035",
      text: "50 ventures • Salvy University Launch • Research Hubs • 10,000 trained founders",
      icon: faCog,
    },
    {
      title: "Phase 3: 2035 - 2040",
      text: "SEZ Phase 1 • Studio in SEZ • 300 ventures",
      icon: faChartBar,
    },
    {
      title: "Phase 4: 2040 - 2045",
      text: "SEZ Phase 2 • Industry clusters scaling • export expansion",
      icon: faMobileAlt,
    },
    {
      title: "Phase 5: 2045 - 2050",
      text: "1,000 ventures • millions of jobs • continental impact",
      icon: faMobileAlt,
    },
  ];

  const impactItems = [
    {
      title: "18+ Years of venture building",
      text: "Over 300 startups supported and scaled.",
      icon: faRocket,
    },
    {
      title: "6 High-Impact Sectors",
      text: "Thousands of jobs generated across Africa.",
      icon: faBriefcase,
    },
    {
      title: "Portfolio presence across multiple African countries",
      text: "Impact in 4+ African countries.",
      icon: faGlobeAfrica,
    },
    {
      title: "Millions of Lives Impacted",
      text: "Invested in early stage founders and ventures.",
      icon: faMoneyBillWave,
    },
  ];

  return (
    <section className="w-full bg-[#111217] text-white py-20 px-6 md:px-20">
      <div className="absolute inset-0 z-0" />
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Mobile layout: stacked columns */}
          <div className="block md:hidden">
            <h1 className="text-2xl font-semibold mb-2 text-center">
              Our 25+ years Mandate
            </h1>
            <div className="grid grid-cols-1 gap-4 mb-8 mx-2">
              {items.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-2 items-center text-center w-full max-w-xs mx-auto"
                >
                  <h3 className="text-base font-medium">{item.title}</h3>
                  <p className="text-gray-400 text-xs leading-relaxed text-justify">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
            {/* Mobile Horizontal Separator */}
            <div className="my-8">
              <div className="h-px w-full bg-gray-700" />
            </div>
            <h1 className="text-2xl font-semibold mb-2 text-center">
              Our 18 Years Impact
            </h1>
            <div className="grid grid-cols-1 gap-4 mb-8 mx-2">
              {impactItems.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-2 items-center text-center w-full max-w-xs mx-auto"
                >
                  <h3 className="text-base font-medium">{item.title}</h3>
                  <p className="text-gray-400 text-xs leading-relaxed text-justify">
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
                Our 25+ years Mandate
              </h1>
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
            <div className="relative md:mr-10">
              <h1 className="text-3xl font-semibold leading-tight mb-8">
                Our 18 Years Impact
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
  );
}
