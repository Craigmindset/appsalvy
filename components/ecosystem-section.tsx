"use client"
import { Building2, Wallet, GraduationCap, Zap } from "lucide-react"

const ECOSYSTEM_CARDS = [
  {
    id: 1,
    icon: Building2,
    title: "Venture Studio",
    description: "Where founders and ideas become structured, investable companies.",
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
    description: "A purpose-built environment for innovation, production & scale (in development).",
  },
]

export function EcosystemSection() {
  return (
    <section className="w-full py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Our Ecosystem</h2>
          <p className="text-foreground/60 text-lg max-w-2xl">
            A comprehensive platform designed to support every stage of your venture journey
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Image */}
          <div className="relative h-96 lg:h-full min-h-96 rounded-2xl overflow-hidden shadow-xl">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage:
                  "url(/placeholder.svg?height=500&width=600&query=African ecosystem office environment)",
              }}
            />
          </div>

          {/* Right Column - Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {ECOSYSTEM_CARDS.map((card) => {
              const Icon = card.icon
              return (
                <div
                  key={card.id}
                  className="p-6 rounded-xl bg-card dark:bg-secondary border border-border hover:border-primary transition-all hover:shadow-lg"
                >
                  <div className="mb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{card.title}</h3>
                  <p className="text-foreground/60 text-sm leading-relaxed">{card.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
