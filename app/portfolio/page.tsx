"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

interface Portfolio {
  id: number;
  name: string;
  description: string;
  category: string;
  status: "Active" | "Scaling" | "Exited";
  fundingRound: string;
  image: string;
  founders: string[];
  sector: string;
}

const PORTFOLIO_ITEMS: Portfolio[] = [
  {
    id: 1,
    name: "Syscomptech",
    description:
      "Connecting underserved communities through last-mile broadband.",
    category: "fintech",
    status: "Scaling",
    fundingRound: "Series A",
    image: "/fintech-dashboard.png",
    founders: ["Sarah Okafor", "Chisom Uche"],
    sector: "Financial Technology",
  },
  {
    id: 2,
    name: "Outdoors.ng",
    description: "Digitizing Nigeria’s billboard industry nationwide.",
    category: "agritech",
    status: "Active",
    fundingRound: "Seed",
    image: "/agricultural-technology.png",
    founders: ["Kwame Asante", "Zainab Hassan"],
    sector: "Agriculture",
  },
  {
    id: 3,
    name: "Xpark360 Media",
    description:
      "Localizing global brands for Africa with cultural intelligence.",
    category: "healthtech",
    status: "Scaling",
    fundingRound: "Series A",
    image: "/healthcare-technology-integration.png",
    founders: ["Dr. Amara Nwosu"],
    sector: "Healthcare",
  },
  {
    id: 4,
    name: "WakaBanki",
    description:
      "Financial identity and microcredit for millions of unbanked market women.",
    category: "edtech",
    status: "Active",
    fundingRound: "Seed",
    image: "/education-technology.png",
    founders: ["Kofi Mensah", "Ama Boateng"],
    sector: "Education",
  },
  {
    id: 5,
    name: "ArtisanOga",
    description: "Formalizing the artisan workforce across urban Africa.",
    category: "logistics",
    status: "Scaling",
    fundingRound: "Series A",
    image: "/supply-chain-logistics.png",
    founders: ["Lerato Mokoena", "Thabo Ndlela"],
    sector: "Logistics",
  },
  {
    id: 6,
    name: "Kitovu",
    description:
      " Transforming agriculture and food systems across multiple countries.",
    category: "hrtech",
    status: "Active",
    fundingRound: "Seed",
    image: "/human-resources-technology.jpg",
    founders: ["Zainab Ibrahim"],
    sector: "Human Resources",
  },
];

const STATUS_COLORS: Record<string, string> = {
  Active: "bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300",
  Scaling: "bg-green-100 dark:bg-green-950 text-green-700 dark:text-green-300",
  Exited:
    "bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300",
};

export default function PortfolioPage() {
  const filteredPortfolio = PORTFOLIO_ITEMS;

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section
        className="w-full py-16 md:py-24 relative"
        style={{
          backgroundImage: "url('/images/about-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          className="absolute inset-0 w-full h-full bg-black/10 z-0"
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold shadow-2xl text-card dark:text-foreground mb-6">
            Our Ventures
          </h1>
          <p className="text-lg sm:text-xl text-card dark:text-foreground leading-relaxed">
            We build companies that fix broken value chains and expand economic
            opportunity.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      {/* ...existing code... */}

      {/* Portfolio Grid */}
      <section className="w-full py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredPortfolio.map((venture) => (
              <Card
                key={venture.id}
                className="overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col"
              >
                {/* Image */}
                <div
                  className="h-48 bg-secondary"
                  style={{
                    backgroundImage: `url('${venture.image}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col gap-4">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="text-xl font-bold text-foreground">
                        {venture.name}
                      </h3>
                      <p className="text-sm text-foreground/60 mt-1">
                        {venture.sector}
                      </p>
                    </div>
                  </div>

                  <p className="text-foreground/70 line-clamp-2">
                    {venture.description}
                  </p>

                  {/* Founders */}
                  {/* ...existing code... */}

                  {/* Funding Round */}
                  {/* ...existing code... */}
                </div>
              </Card>
            ))}
          </div>

          {/* Empty State */}
          {filteredPortfolio.length === 0 && (
            <div className="text-center py-16">
              <p className="text-lg text-foreground/60">
                No ventures found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
