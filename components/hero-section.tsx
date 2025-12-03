"use client";

import { useState, useEffect } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HERO_IMAGES = ["/hero0.png", "/herox.png", "/hero3.png"];

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + HERO_IMAGES.length) % HERO_IMAGES.length
    );
  };

  return (
    <section className="relative w-full min-h-screen bg-background overflow-hidden">
      {/* Background Image with Low Opacity */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{
          backgroundImage: `url('/background.jpg')`,
        }}
      />

      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6 lg:space-y-8">
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
                Building Africa's
              </h1>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-primary">
                Next Generation of Companies
              </h3>
            </div>

            <p className="text-lg sm:text-xl text-foreground/70 leading-relaxed max-w-md">
              Salvy VentureCorp is a Venture Architecture Studio designing,
              building, and scaling high-impact African ventures with structure,
              discipline, capital, and talent.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-6 text-base font-semibold inline-flex items-center justify-center gap-3 min-w-[220px]">
                <ArrowRight className="h-5 w-5" aria-hidden />
                <span>Build with us</span>
              </Button>
              <Button
                variant="outline"
                className="rounded-full px-8 py-6 text-base font-semibold border-2 border-primary text-primary hover:bg-primary/10 bg-transparent inline-flex items-center justify-center gap-3 min-w-[220px]"
              >
                <span>Partner with us</span>
              </Button>
            </div>
          </div>

          {/* Right Column - Image Slider */}
          <div className="relative h-96 lg:h-full min-h-96 lg:min-h-screen flex items-center justify-center">
            <div className="relative w-full h-full p-8 rounded-2xl overflow-hidden ">
              {HERO_IMAGES.map((image, index) => (
                <div
                  key={index}
                  className="absolute inset-0 transition-opacity duration-700"
                  style={{
                    opacity: index === currentSlide ? 1 : 0,
                    backgroundImage: `url('${image}')`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                  }}
                />
              ))}

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full transition-all lg:hidden"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full transition-all lg:hidden"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
