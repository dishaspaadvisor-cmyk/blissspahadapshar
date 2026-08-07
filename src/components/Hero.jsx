"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Phone, MessageCircle } from "lucide-react";
import { heroSlides, contact } from "@/data/siteData";

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Slides */}
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-1000 ${index === current
              ? "opacity-100 scale-100"
              : "opacity-0 scale-110"
            }`}
        >
          {/* Desktop Image */}
          <div className="absolute inset-0 hidden md:block">
            <Image
              src={slide.desktopImage}
              fill
              priority={index === 0}
              alt={slide.title}
              className="object-cover object-top object-center"
              sizes="100vw"
            />
          </div>

          {/* Mobile Image */}
          <div className="absolute inset-0 block md:hidden">
            <Image
              src={slide.mobileImage}
              fill
              priority={index === 0}
              alt={slide.title}
              className="object-cover object-top object-center"
              sizes="100vw"
            />
          </div>

     
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">



            <h1 className="text-5xl font-bold leading-tight text-white md:text-7xl">
              {heroSlides[current].title}
            </h1>




          </div>
        </div>
      </div>

      {/* Bottom Area */}
      <div className="absolute bottom-6 left-0 z-20 w-full px-6">
        <div className="mx-auto flex max-w-7xl items-center justify-between">

          {/* Indicators */}
          <div className="flex gap-3">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-2 rounded-full transition-all duration-500 ${current === index
                    ? "w-14 bg-amber-400"
                    : "w-7 bg-white/40"
                  }`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}