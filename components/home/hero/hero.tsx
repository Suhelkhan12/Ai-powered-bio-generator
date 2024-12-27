import React from "react";
import HeroShinyText from "./hero-shiny-text";

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center max-w-6xl w-full mx-auto">
      <HeroShinyText />
      <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-snug font-geistSans">
        Create Perfect Bios with AI.
      </h1>
      <p className="mt-3 text-sm lg:text-base text-zinc-500">
        Generate personalized, impactful bios in seconds with the power of AI.
        Perfect for social media, professional profiles, and more!
      </p>
    </section>
  );
};

export default Hero;
