"use client";
import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const imageElement = imageRef.current;
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;
      if (scrollPosition > scrollThreshold) {
        imageElement.classList.add("scrolled");
      } else {
        imageElement.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="pt-24 md:pt-40 pb-20 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl md:text-8xl lg:text-[105px] pb-6 gradient-title">
          <span className="block -mb-2 md:mb-0">Manage</span> Your Finances
          <br /> with Intelligence
        </h1>
        <p className="text-xl text-gray-600 mt-2 mb-8 max-w-2xl mx-auto">
          An AI-powered financial management platform that helps you track,
          analyze, and optimize your spending with real-time insights.
        </p>
        <div className="flex justify-center space-x-4">
          <a href="/dashboard">
            <Button size="lg" className="px-8">
              Get Started
            </Button>
          </a>
          <a href="https://www.youtube.com">
            <Button size="lg" variant="outline" className="px-8">
              Watch Demo
            </Button>
          </a>
        </div>
        <div className="hero-image-wrapper mt-5 md:mt-0">
          <div ref={imageRef} className="hero-image">
            <img
              src="/banner.jpeg"
              alt="Dashboard Preview"
              className="rounded-lg shadow-2xl border mx-auto w-full max-w-5xl h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
