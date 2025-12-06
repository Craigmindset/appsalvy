"use client";

import { useState, useEffect } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HERO_IMAGES = ["/hero0.png", "/herox.png", "/hero3.png"];

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const WORDS = ["Startups", "Entrepreneurs", "Founders"];
  const [wordVisible, setWordVisible] = useState(true);

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

  // Rotate the small word slider under the subtitle with a short fade
  useEffect(() => {
    const interval = setInterval(() => {
      // fade out
      setWordVisible(false);
      setTimeout(() => {
        setCurrentWordIndex((i) => (i + 1) % WORDS.length);
        // fade in
        setWordVisible(true);
      }, 300);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

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
          <div className="space-y-6 lg:space-y-8 ml-1 -mt-5">
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground font-georgia hero-building whitespace-normal break-words">
                Building Africa's
              </h1>
              <h3 className="text-xl sm:text-3xl lg:text-4xl text-center md:text-left  font-medium italic text-primary whitespace-nowrap">
                Next <span className="italic">Generation</span> of Companies
              </h3>
              {/* Rotating word slider */}
              <div className="mt-1 lg:-mt-1 h-10 text-center md:text-left">
                <span
                  aria-live="polite"
                  className={`text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight transition-hero-color font-georgia italic text-[#8B0000] dark:text-white transition-opacity duration-500 ${
                    wordVisible ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {WORDS[currentWordIndex]}
                </span>
              </div>
            </div>

            <p className=" md:mx-0 text-lg sm:text-lg text-foreground/70 leading-snug w-full sm:max-w-md text-center md:text-left  break-words ">
              Salvy VentureCorp is a Venture Architecture Studio designing,
              building, and scaling high-impact African ventures with structure,
              discipline, capital, and talent.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <a href="/founder-form" className="inline-block min-w-[220px]">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-6 text-base font-semibold inline-flex items-center justify-center gap-3 w-full">
                  <ArrowRight className="h-5 w-5" aria-hidden />
                  <span>Build with us</span>
                </Button>
              </a>
              <a href="/partner-form" className="inline-block min-w-[220px]">
                <Button
                  variant="outline"
                  className="rounded-full px-8 py-6 text-base font-semibold border-2 border-primary text-primary hover:bg-primary/10 bg-transparent inline-flex items-center justify-center gap-3 w-full"
                >
                  <span>Partner with us</span>
                </Button>
              </a>
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
