"use client"

// Brand logos - using placeholder rectangles for now
const BRAND_LOGOS = Array.from({ length: 8 }, (_, i) => ({
  id: i,
  name: `Brand ${i + 1}`,
}))

export function CarouselSection() {
  return (
    <section className="w-full py-16 lg:py-24 bg-secondary/50 dark:bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Trusted by Leading Brands</h2>
          <p className="text-foreground/60 text-lg">Partnering with Africa's most innovative entrepreneurs</p>
        </div>

        {/* Scrollable Logo Carousel */}
        <div className="overflow-x-auto pb-4">
          <div className="flex gap-6 md:gap-8 min-w-max px-4 md:px-0 md:justify-center md:flex-wrap">
            {BRAND_LOGOS.map((brand) => (
              <div
                key={brand.id}
                className="flex-shrink-0 w-32 h-32 md:w-40 md:h-24 bg-background dark:bg-card rounded-lg flex items-center justify-center border border-border shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary/30">{brand.id + 1}</div>
                  <p className="text-xs text-foreground/40 mt-1">{brand.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
