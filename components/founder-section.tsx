"use client"
import { Target, Lightbulb, Heart, Rocket, Handshake, Globe } from "lucide-react"

const VALUES = [
  { id: 1, icon: Heart, label: "Integrity" },
  { id: 2, icon: Target, label: "Excellence" },
  { id: 3, icon: Lightbulb, label: "Innovation" },
  { id: 4, icon: Rocket, label: "Value Creation" },
  { id: 5, icon: Handshake, label: "Founder Partnership" },
  { id: 6, icon: Globe, label: "Africa-First" },
]

export function FounderSection() {
  return (
    <section className="w-full py-16 lg:py-24 bg-secondary/50 dark:bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Our Mission & Vision</h2>
          <p className="text-foreground/60 text-lg">Guiding our journey to transform African entrepreneurship</p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start mb-16">
          {/* Left Column - Cards (60%) */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              {/* Mission Card */}
              <div className="p-8 rounded-xl bg-background dark:bg-card border border-border hover:border-primary transition-all hover:shadow-lg">
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Mission</h3>
                <p className="text-foreground/70 leading-relaxed">
                  To architect, build, and scale high-impact ventures by providing founders with structure, platforms,
                  and capital.
                </p>
              </div>

              {/* Vision Card */}
              <div className="p-8 rounded-xl bg-background dark:bg-card border border-border hover:border-primary transition-all hover:shadow-lg">
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center">
                    <Lightbulb className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Vision</h3>
                <p className="text-foreground/70 leading-relaxed">
                  To build 1,000 African ventures by 2050 — transforming industries and empowering communities.
                </p>
              </div>
            </div>

            {/* Values Section */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-8">Our Values</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {VALUES.map((value) => {
                  const Icon = value.icon
                  return (
                    <div
                      key={value.id}
                      className="p-4 rounded-lg bg-background dark:bg-card border border-border hover:border-primary transition-all text-center"
                    >
                      <div className="flex justify-center mb-2">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <p className="font-semibold text-foreground text-sm">{value.label}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Right Column - Image (40%) */}
          <div className="lg:col-span-2">
            <div className="relative h-96 lg:h-full min-h-96 rounded-2xl overflow-hidden shadow-xl">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url(/placeholder.svg?height=500&width=400&query=Founder collaborating and building venture)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
