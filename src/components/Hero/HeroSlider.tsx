"use client";

import React, { useState, useEffect } from "react";
import Slide from "./Slide";
import { HeroSliderProps } from "@/types";

const HeroSlider: React.FC<HeroSliderProps> = ({
  slides,
  autoPlay = true,
  interval = 5000
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!autoPlay || slides.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <div 
        className="flex h-full transition-transform duration-3000 ease-in-out"
        style={{ 
          transform: `translateX(-${currentSlide * 100}%)`,
          width: `${slides.length * 100}%`
        }}
      >
        {slides.map((slide, index) => (
          <Slide 
            key={index}
            {...slide}
            isActive={index === currentSlide}
          />
        ))}
      </div>

      {slides.length > 1 && (
        <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default HeroSlider;