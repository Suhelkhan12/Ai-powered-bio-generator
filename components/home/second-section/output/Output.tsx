import React from "react";
import OutputLoader from "./output-loader";
import { Badge } from "@/components/ui/badge";

type OutputProps = {
  isPending: boolean;
  generatedBios: string[];
};

const Output = ({ isPending, generatedBios }: OutputProps) => {
  return (
    <div className="relative min-h-[20rem] bg-neutral-50 p-4 rounded-md border border-black/5 backdrop-blur-sm flex flex-col justify-start w-full gap-6 hover:shadow-md transition-all duration-300">
      <Badge
        variant={"outline"}
        className=" absolute top-2 right-2 bg-gradient-to-r from-blue-600 to-violet-600 text-white rounded-full"
      >
        Output
      </Badge>
      <div className="w-full h-full flex justify-between items-center">
        {isPending && <OutputLoader />}
        {!isPending && generatedBios.length > 0 && (
          <p className="text-center text-sm w-full">Generated bios</p>
        )}
        {!isPending && generatedBios.length == 0 && (
          <div className="flex items-center flex-col justify-center w-full">
            <span className="text-8xl">🤖</span>
            <p className="text-sm">Start generating by asnwering few things</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Output;
