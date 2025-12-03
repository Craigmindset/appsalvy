"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"

interface Portfolio {
  id: number
  name: string
  description: string
  category: string
  status: "Active" | "Scaling" | "Exited"
  fundingRound: string
  image: string
  founders: string[]
  sector: string
}

const PORTFOLIO_ITEMS: Portfolio[] = [
  {
    id: 1,
    name: "FinServe Africa",
    description: "Digital payments and financial inclusion platform for SMEs across Africa",
    category: "fintech",
    status: "Scaling",
    fundingRound: "Series A",
    image: "/fintech-dashboard.png",
    founders: ["Sarah Okafor", "Chisom Uche"],
    sector: "Financial Technology",
  },
  {
    id: 2,
    name: "AgroTech Solutions",
    description: "AI-powered agricultural platform connecting farmers directly with buyers",
    category: "agritech",
    status: "Active",
    fundingRound: "Seed",
    image: "/agricultural-technology.png",
    founders: ["Kwame Asante", "Zainab Hassan"],
    sector: "Agriculture",
  },
  {
    id: 3,
    name: "MediFlow",
    description: "Telemedicine platform providing accessible healthcare in remote areas",
    category: "healthtech",
    status: "Scaling",
    fundingRound: "Series A",
    image: "/healthcare-technology-integration.png",
    founders: ["Dr. Amara Nwosu"],
    sector: "Healthcare",
  },
  {
    id: 4,
    name: "EduConnect",
    description: "Online learning platform with localized content for African students",
    category: "edtech",
    status: "Active",
    fundingRound: "Seed",
    image: "/education-technology.png",
    founders: ["Kofi Mensah", "Ama Boateng"],
    sector: "Education",
  },
  {
    id: 5,
    name: "LogiChain",
    description: "Blockchain-based logistics and supply chain management platform",
    category: "logistics",
    status: "Scaling",
    fundingRound: "Series A",
    image: "/supply-chain-logistics.png",
    founders: ["Lerato Mokoena", "Thabo Ndlela"],
    sector: "Logistics",
  },
  {
    id: 6,
    name: "TalentHub",
    description: "HR tech platform connecting African talent with global opportunities",
    category: "hrtech",
    status: "Active",
    fundingRound: "Seed",
    image: "/human-resources-technology.jpg",
    founders: ["Zainab Ibrahim"],
    sector: "Human Resources",
  },
]

const CATEGORIES = [
  { id: "all", label: "All Ventures" },
  { id: "fintech", label: "FinTech" },
  { id: "agritech", label: "AgriTech" },
  { id: "healthtech", label: "HealthTech" },
  { id: "edtech", label: "EdTech" },
  { id: "logistics", label: "Logistics" },
  { id: "hrtech", label: "HR Tech" },
]

const STATUS_COLORS: Record<string, string> = {
  Active: "bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300",
  Scaling: "bg-green-100 dark:bg-green-950 text-green-700 dark:text-green-300",
  Exited: "bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300",
}

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const filteredPortfolio =
    selectedCategory === "all" ? PORTFOLIO_ITEMS : PORTFOLIO_ITEMS.filter((item) => item.category === selectedCategory)

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="w-full bg-gradient-to-b from-background to-secondary/30 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">Our Portfolio</h1>
            <p className="text-lg sm:text-xl text-foreground/70 leading-relaxed">
              Discover the exceptional ventures we're building and scaling across Africa. From fintech to agritech, our
              portfolio represents the future of African innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="w-full py-12 md:py-16 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3">
            {CATEGORIES.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 md:px-6 py-2 md:py-3 rounded-full font-medium transition-all ${
                  selectedCategory === category.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-foreground hover:bg-secondary/80"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="w-full py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredPortfolio.map((venture) => (
              <Card key={venture.id} className="overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
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
                      <h3 className="text-xl font-bold text-foreground">{venture.name}</h3>
                      <p className="text-sm text-foreground/60 mt-1">{venture.sector}</p>
                    </div>
                    <Badge className={`whitespace-nowrap ${STATUS_COLORS[venture.status]}`}>{venture.status}</Badge>
                  </div>

                  <p className="text-foreground/70 line-clamp-2">{venture.description}</p>

                  {/* Founders */}
                  <div>
                    <p className="text-xs font-medium text-foreground/60 mb-2">Founders</p>
                    <div className="flex flex-wrap gap-2">
                      {venture.founders.map((founder) => (
                        <span key={founder} className="text-xs bg-secondary text-foreground px-2 py-1 rounded">
                          {founder}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Funding Round */}
                  <div className="flex items-center justify-between pt-4 border-t border-border mt-auto">
                    <span className="text-sm font-medium text-primary">{venture.fundingRound}</span>
                    <ArrowRight className="w-5 h-5 text-primary" />
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Empty State */}
          {filteredPortfolio.length === 0 && (
            <div className="text-center py-16">
              <p className="text-lg text-foreground/60">No ventures found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-16 md:py-24 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { number: PORTFOLIO_ITEMS.length + "+", label: "Ventures in Portfolio" },
              { number: "6", label: "Industry Sectors" },
              { number: "$50M+", label: "Total Funding Deployed" },
              { number: "10K+", label: "Jobs Created" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl sm:text-4xl font-bold text-primary mb-2">{stat.number}</p>
                <p className="text-foreground/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
