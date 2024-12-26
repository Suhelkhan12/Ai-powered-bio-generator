import React from "react";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

const HeroShinyText = () => {
  return (
    <Link
      href={"https://github.com/Suhelkhan12/Ai-powered-bio-generator"}
      target="_blank"
      className={cn(
        "group rounded-full border border-black/10 bg-neutral-100 text-xs text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 "
      )}
    >
      <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300">
        <span>⭐️ Star on Github</span>
        <ArrowRightIcon className="ml-1 size-3 transition-transform group-hover:translate-x-1 ease-in-out duration-300" />
      </AnimatedShinyText>
    </Link>
  );
};

export default HeroShinyText;
