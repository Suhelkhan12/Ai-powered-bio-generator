"use client";

import Output from "./output/Output";
import UserInput from "./user-input/user-input";
import { useState } from "react";

const generatedBios: string[] = [];
const SecondSection = () => {
  const [isPending, setIsPending] = useState<boolean>(false);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-16">
      <UserInput setIsPending={setIsPending} />
      <Output isPending={isPending} generatedBios={generatedBios} />
    </div>
  );
};

export default SecondSection;
