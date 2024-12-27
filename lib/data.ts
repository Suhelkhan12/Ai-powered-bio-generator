import { FaMeta, FaGoogle } from "react-icons/fa6";
import { RiMixtralLine } from "react-icons/ri";

export const grokModels: {
  id: string;
  name: string;
  grayText: string;
  icon: React.ElementType;
  color: string;
}[] = [
  {
    id: "gemma2-9b-it",
    name: "Gemma",
    grayText: "9b",
    icon: FaGoogle,
    color: "text-red-500",
  },

  {
    id: "llama-3.1-8b-instant",
    name: "Llama",
    grayText: "8b",
    icon: FaMeta,
    color: "text-blue-500",
  },
  {
    id: "mixtral-8x7b-32768",
    name: "Mistral",
    grayText: "8x7b",
    icon: RiMixtralLine,
    color: "text-yellow-500",
  },
];
