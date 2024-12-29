import GoogleIcon from "@/components/icons/google";
import MetaIcon from "@/components/icons/meta";
import MixtralIcon from "@/components/icons/mixtral";
import { FC } from "react";

type IconComponent = FC<{ className: string }>;

export const grokModels: {
  id: string;
  name: string;
  grayText: string;
  color: string;
  icon: IconComponent;
}[] = [
  {
    id: "gemma2-9b-it",
    name: "Gemma",
    grayText: "9b",
    color: "text-red-500",
    icon: GoogleIcon,
  },

  {
    id: "llama-3.1-8b-instant",
    name: "Llama",
    grayText: "8b",
    color: "text-blue-500",
    icon: MetaIcon,
  },
  {
    id: "mixtral-8x7b-32768",
    name: "Mixtral",
    grayText: "8x7b",
    color: "text-yellow-500",
    icon: MixtralIcon,
  },
];
