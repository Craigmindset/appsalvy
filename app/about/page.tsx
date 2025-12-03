import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Users, Zap, Globe } from "lucide-react";

export default function AboutPage() {
  const values = [
    {
      icon: CheckCircle,
      label: "Integrity",
      description:
        "We operate with transparency and honesty in all relationships",
    },
    {
      icon: Users,
      label: "Excellence",
      description:
        "Committed to delivering the highest quality in everything we do",
    },
    {
      icon: Zap,
      label: "Innovation",
      description: "Driving continuous improvement through creative thinking",
    },
    {
      icon: Globe,
      label: "Value Creation",
      description: "Building sustainable ventures that impact communities",
    },
    {
      icon: Users,
      label: "Founder Partnership",
      description: "Supporting founders at every stage of their journey",
    },
    {
      icon: Zap,
      label: "Africa-First",
      description: "Prioritizing African solutions and African talent",
    },
  ];

  const team = [
    {
      name: "Salvation Alibor",
      role: "Founder & President",
      image: "/salvy.jpg",
    },
    {
      name: "Amb. Joe Keshi ",
      role: "Chairman, UBA Plc",
      image: "/kachi2.jpg",
    },
    {
      name: "Dcn. Chris Iyovwaye",
      role: "Chairman/CEO, Wellmann Group",
      image: "/placeholder.svg?key=team3",
    },
    {
      name: "Remi Olumuyiwa",
      role: "Managing Director, First Trico",
      image: "/placeholder.svg?key=team4",
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section
        className="w-full py-16 md:py-24 lg:py-32 relative"
        style={{
          backgroundImage: `url('/images/about-bg.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Who We Are
            </h1>
            <p className="text-lg sm:text-xl text-white/90 leading-relaxed">
              Salvy VentureCorp is Africa’s Venture Architecture Studio — a
              pioneering institution designed to create the next generation of
              African companies, platforms, and industries. We combine
              structured venture-building, capital, governance, research, talent
              development, and enterprise infrastructure into one integrated
              ecosystem.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="w-full py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Mission/Vision + Story */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Mission Card */}
                <Card className="p-4 md:p-6">
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    Our Mission
                  </h2>
                  <p className="text-lg text-foreground/70 leading-relaxed">
                    To architect, build, and scale high-impact ventures by
                    providing founders with structure, platforms, and capital.
                  </p>
                </Card>

                {/* Vision Card */}
                <Card className="p-4 md:p-6">
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    Our Vision
                  </h2>
                  <p className="text-lg text-foreground/70 leading-relaxed">
                    To build 1,000 African ventures by 2050 — transforming
                    industries and empowering communities.
                  </p>
                </Card>
              </div>
              {/* Our Story Section */}
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Our Story (2007 - 2025)
                </h3>
                <p className="text-lg text-foreground/70 leading-relaxed">
                  Our journey began in underserved communities and broken value
                  chains. From broadband access (Syscomptech), to nationwide
                  outdoor advertising (Outdoors.ng), to creative localization
                  (Xpark360), artisan workforce formalization (ArtisanOga),
                  financial inclusion for market women (WakaBanki), and
                  agricultural transformation (Kitovu) — we spent 18 years
                  building solutions to structural African problems.
                </p>
              </div>
            </div>
            {/* Right Column - Image */}
            <div className="relative flex justify-center lg:col-span-5">
              <div className="w-100 h-120 rounded-lg shadow-xl overflow-hidden">
                <img
                  src="/salvy-group.jpg"
                  alt="Salvy VentureCorp Team"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Our Leadership Team
            </h2>
            <p className="text-lg text-foreground/70">
              Meet the visionaries behind Salvy VentureCorp
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {team.map((member, index) => (
              <Card key={index} className="p-6 text-center overflow-hidden">
                <div
                  className="w-full h-48 bg-secondary rounded-lg mb-4"
                  style={{
                    backgroundImage: `url('${member.image}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <h3 className="text-lg font-semibold text-foreground">
                  {member.name}
                </h3>
                <p className="text-sm text-foreground/60 mt-2">{member.role}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="w-full py-16 md:py-24 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 text-center">
            {[
              { number: "50+", label: "Ventures Built" },
              { number: "$100M+", label: "Capital Deployed" },
              { number: "1000+", label: "Founders Supported" },
              { number: "15", label: "African Countries" },
            ].map((stat, index) => (
              <div key={index} className="text-primary-foreground">
                <p className="text-3xl sm:text-4xl font-bold mb-2">
                  {stat.number}
                </p>
                <p className="text-primary-foreground/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Ready to Build with Us?
          </h2>
          <p className="text-lg text-foreground/70 mb-8">
            Join thousands of founders transforming Africa's innovation
            landscape
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-6 text-base font-semibold">
              Start Building
            </Button>
            <Button
              variant="outline"
              className="rounded-full px-8 py-6 text-base font-semibold border-2 border-primary text-primary hover:bg-primary/10 bg-transparent"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
