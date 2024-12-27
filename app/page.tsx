import Hero from "@/components/home/hero/hero";
import Output from "@/components/home/output/Output";
import UserInput from "@/components/home/user-input/user-input";
import React from "react";

const page = () => {
  return (
    <>
      <Hero />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-16">
        <UserInput />
        <Output />
      </div>
    </>
  );
};

export default page;
