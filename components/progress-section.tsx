import React from "react";
import { ArrowRight } from "lucide-react";

export default function Progress() {
  const items = [
    {
      title: "Phase 1: 2025 - 2030",
      text: "50 ventures • Studio/Fund operational • University groundwork • SEZ planning",
      icon: "📈",
    },
    {
      title: "Phase 2: 2030 - 2035",
      text: "50 ventures • Salvy University Launch • Research Hubs • 10,000 trained founders",
      icon: "⚙️",
    },
    {
      title: "Phase 3: 2035 - 2040",
      text: "SEZ Phase 1 • Studio in SEZ • 300 ventures",
      icon: "📊",
    },
    {
      title: "Phase 4: 2040 - 2045",
      text: "SEZ Phase 2 • Industry clusters scaling • export expansion",
      icon: "📱",
    },
    {
      title: "Phase 5: 2045 - 2050",
      text: "1,000 ventures • millions of jobs • continental impact",
      icon: "📱",
    },
  ];

  const impactItems = [
    {
      title: "18+ Years of venture building",
      text: "Over 300 startups supported and scaled.",
      icon: "🚀",
    },
    {
      title: "6 High-Impact Sectors",
      text: "Thousands of jobs generated across Africa.",
      icon: "💼",
    },
    {
      title: "Portfolio presence across multiple African countries",
      text: "Impact in 20+ African countries.",
      icon: "🌍",
    },
    {
      title: "Millions of Lives Impacted",
      text: "$50M+ invested in founders and ventures.",
      icon: "💰",
    },
  ];

  return (
    <section className="w-full bg-[#111217] text-white py-20 px-6 md:px-20">
      <div className="absolute inset-0 bg-black/10 z-0" />
      <div className="relative z-10">
        <div
          className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 items-start"
          style={{ gridTemplateColumns: "45% 10% 45%" }}
        >
          {/* Left Column */}
          <div className="relative">
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-8">
              Our 25+ years Mandate
            </h1>
            <p className="uppercase text-sm tracking-wider text-gray-400 mb-4">
              1,000 ventures. Millions of jobs. A transformed continent.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-8">
              {items.map((item, index) => (
                <div key={index} className="flex flex-col gap-3">
                  <div className="text-4xl">{item.icon}</div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Middle Column - Vertical Separator */}
          <div className="hidden md:flex flex-col items-center justify-center">
            <div
              className="w-px h-full bg-gray-700"
              style={{ minHeight: "350px" }}
            />
          </div>

          {/* Right Column */}
          <div className="relative md: mr-10">
            <h1 className="text-3xl md:text-5xl font-semibold leading-tight mb-8">
              Our 18 Years Impact
            </h1>
            <p className="uppercase text-sm tracking-wider text-gray-400 mb-4">
              1,000 ventures. Millions of jobs. A transformed continent.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-8">
              {impactItems.map((item, index) => (
                <div key={index} className="flex flex-col gap-3">
                  <div className="text-4xl">{item.icon}</div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
