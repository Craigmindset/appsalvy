"use client";

import React, { useEffect, useRef } from "react";

// Brand images referenced from `public/brands/`
const brandLogos = [
  { name: "Spark", src: "/brands/spark.jpg" },
  { name: "syscomptech", src: "/brands/syscomptec.jpg" },
  { name: "ArtisanOga", src: "/brands/Artisan logo.png" },
  { name: "Saitek", src: "/brands/Saitek logo.png" },
  { name: "PDMA", src: "/brands/PDMA LOGO.png" },
  { name: "Outdoors.ng", src: "/brands/outdoors logo.png" },
  { name: "WakaBanki", src: "/brands/Wakabanki logo.png" },
  { name: "Kitovu", src: "/brands/kitovu.jpg" },
  { name: "CityFibre", src: "/brands/cityfibre logo.png" },
  { name: "pess", src: "/brands/pess printing logo.png" },
  { name: "frndix", src: "/brands/frndix logo.png" },
];

export function CarouselSection() {
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let raf = 0;
    const el = trackRef.current;
    if (!el) return;
    let x = 0;
    const step = () => {
      x -= 0.4;
      el.style.transform = `translateX(${x}px)`;
      if (Math.abs(x) > el.scrollWidth / 2) x = 0;
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section className=" bg-white w-full h-auto">
      <div className="container mx-auto overflow-hidden">
        <div className="py-6">
          <h2 className="text-xl font-semibold text-black text-left ml-10 mb-4">
            Our growing Portfolio
          </h2>
          <div className="relative">
            <div
              className="flex gap-4 md:gap-10 will-change-transform"
              ref={trackRef}
            >
              {[...brandLogos, ...brandLogos].map((b, i) => (
                <div key={i} className="shrink-0">
                  <img
                    src={b.src}
                    alt={`${b.name} logo`}
                    className="h-12 w-[100px] object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CarouselSection;
