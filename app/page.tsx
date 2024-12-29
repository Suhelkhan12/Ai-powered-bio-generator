import Hero from "@/components/home/hero/hero";
import SecondSection from "@/components/home/second-section/second-section";
import BioContextProvider from "@/providers/bio/bio-context-providers";
import React from "react";

const page = () => {
  return (
    <>
      <Hero />
      <BioContextProvider>
        <SecondSection />
      </BioContextProvider>
    </>
  );
};

export default page;
