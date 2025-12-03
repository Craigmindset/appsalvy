"use client";
import { Building2, Wallet, GraduationCap, Zap } from "lucide-react";

const ECOSYSTEM_CARDS = [
  {
    id: 1,
    icon: Building2,
    title: "Venture Studio",
    description:
      "Where founders and ideas become structured, investable companies.",
  },
  {
    id: 2,
    icon: Wallet,
    title: "Salvy Venture Fund",
    description: "Capital to accelerate the growth of Studio-built ventures.",
  },
  {
    id: 3,
    icon: GraduationCap,
    title: "Salvy University",
    description: "Africa's Enterprise Development University (in development).",
  },
  {
    id: 4,
    icon: Zap,
    title: "Enterprise Development SEZ",
    description:
      "A purpose-built environment for innovation, production & scale (in development).",
  },
];

export function EcosystemSection() {
  return (
    <section className="relative w-full py-16 lg:py-24 bg-card z-0">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-8"
        style={{
          backgroundImage: `url('/background.jpg')`,
        }}
      />
      <div className="absolute inset-0 w-full h-full z-0"></div>
      <div className="absolute inset-0 bg-white/30 pointer-events-none z-0" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-50">
        {/* Background image (absolute) - uses the provided dotted world map image. */}

        <div className="mb-12 lg:mb-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Our Ecosystem
          </h2>
          <p className="text-foreground/60 text-lg  ">
            A comprehensive platform designed to support every stage of your
            venture journey
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Image */}
          <div className="relative h-96 lg:h-full min-h-96 rounded-2xl overflow-hidden shadow-xl">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: 'url("/salvy-collab.jpg")',
              }}
            />

            {/* Foreground image/content (keeps existing composition if desired) */}
          </div>

          {/* Right Column - Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {ECOSYSTEM_CARDS.map((card, idx) => {
              const Icon = card.icon;
              const lightBg = [
                "bg-blue-50",
                "bg-green-50",
                "bg-purple-50",
                "bg-yellow-50",
              ][idx % 4];
              const iconBg = [
                "bg-blue-100",
                "bg-green-100",
                "bg-purple-100",
                "bg-yellow-100",
              ][idx % 4];

              return (
                <div
                  key={card.id}
                  className={`p-6 rounded-xl ${lightBg} dark:bg-secondary border border-border hover:border-primary transition-all hover:shadow-lg`}
                >
                  <div className="mb-4">
                    <div
                      className={`${iconBg} w-12 h-12 rounded-lg flex items-center justify-center`}
                    >
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {card.title}
                  </h3>
                  <p className="text-foreground/60 text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
